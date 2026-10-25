/**
 * Reindex accessories_stereo_camera_doc into Algolia (DocSearch v3-compatible).
 *
 * Usage:
 *   set ALGOLIA_ADMIN_API_KEY=...   # or Write API Key
 *   npm run algolia:index
 *
 * Optional:
 *   ALGOLIA_APP_ID (default 1VU781LYTV)
 *   ALGOLIA_INDEX_NAME (default accessories_stereo_camera_doc)
 *   ALGOLIA_SITE_URL (default https://developer.d-robotics.cc/accessories_stereo_camera_doc/)
 *   ALGOLIA_SITEMAP_URL (optional; OSS mirror works when CDN rewrites sitemap)
 */
import "dotenv/config";
import crypto from "node:crypto";

const APP_ID = process.env.ALGOLIA_APP_ID || "1VU781LYTV";
const INDEX =
  process.env.ALGOLIA_INDEX_NAME || "accessories_stereo_camera_doc";
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_API_KEY;
const SITE_ROOT = (
  process.env.ALGOLIA_SITE_URL ||
  "https://developer.d-robotics.cc/accessories_stereo_camera_doc/"
).replace(/\/?$/, "/");
const SITE_ORIGIN = new URL(SITE_ROOT).origin;
const SITE_PREFIX = new URL(SITE_ROOT).pathname.replace(/\/?$/, "");

if (!ADMIN_KEY) {
  console.error("Missing ALGOLIA_ADMIN_API_KEY");
  process.exit(1);
}

/** DocSearch / Docusaurus v3 index settings */
const INDEX_SETTINGS = {
  attributesForFaceting: [
    "type",
    "lang",
    "language",
    "version",
    "docusaurus_tag",
  ],
  attributesToRetrieve: [
    "hierarchy",
    "content",
    "anchor",
    "url",
    "url_without_anchor",
    "type",
  ],
  attributesToHighlight: ["hierarchy", "content"],
  attributesToSnippet: ["content:10"],
  camelCaseAttributes: ["hierarchy", "content"],
  searchableAttributes: [
    "unordered(hierarchy.lvl0)",
    "unordered(hierarchy.lvl1)",
    "unordered(hierarchy.lvl2)",
    "unordered(hierarchy.lvl3)",
    "unordered(hierarchy.lvl4)",
    "unordered(hierarchy.lvl5)",
    "unordered(hierarchy.lvl6)",
    "content",
  ],
  distinct: true,
  attributeForDistinct: "url",
  customRanking: [
    "desc(weight.pageRank)",
    "desc(weight.level)",
    "asc(weight.position)",
  ],
  ranking: [
    "words",
    "filters",
    "typo",
    "attribute",
    "proximity",
    "exact",
    "custom",
  ],
  highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
  highlightPostTag: "</span>",
  minWordSizefor1Typo: 3,
  minWordSizefor2Typos: 7,
  allowTyposOnNumericTokens: false,
  minProximity: 1,
  ignorePlurals: true,
  advancedSyntax: true,
  attributeCriteriaComputedByMinProximity: true,
  removeWordsIfNoResults: "allOptional",
  separatorsToIndex: "_",
};

async function algolia(path, { method = "GET", body } = {}) {
  // Write/admin calls must use the non-DSN host.
  const res = await fetch(`https://${APP_ID}.algolia.net${path}`, {
    method,
    headers: {
      "X-Algolia-Application-Id": APP_ID,
      "X-Algolia-API-Key": ADMIN_KEY,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(
      `${method} ${path} -> ${res.status} ${JSON.stringify(json)}`,
    );
  }
  return json;
}

function normalizePageUrl(href) {
  const u = new URL(href, SITE_ROOT);
  u.hash = "";
  u.search = "";
  // This site's OSS fronting 404s on trailing-slash doc paths.
  let path = u.pathname.replace(/\/+$/, "");
  if (!path) path = "/";
  u.pathname = path;
  return u.href;
}

function isDocUrl(href) {
  try {
    const u = new URL(href);
    if (u.origin !== SITE_ORIGIN) return false;
    if (!u.pathname.startsWith(SITE_PREFIX)) return false;
    if (/\/search\/?$/i.test(u.pathname)) return false;
    if (/\.(css|js|png|jpe?g|gif|svg|ico|pdf|zip|xml|txt|map)(\?|$)/i.test(u.pathname)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function metaContent(html, name) {
  const re = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`,
    "i",
  );
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`,
    "i",
  );
  return (html.match(re) || html.match(re2) || [])[1] || "";
}

function normalizeLang(lang) {
  if (!lang) return "zh-Hans";
  if (lang.toLowerCase().startsWith("zh")) return "zh-Hans";
  if (lang.toLowerCase().startsWith("en")) return "en";
  return lang;
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pushContentChunks(push, content, anchor, levelWeight) {
  if (!content) return;
  const chunks = content.match(/.{1,800}(?:\s|$)/g) || [content];
  for (const chunk of chunks) {
    const c = chunk.trim();
    if (c) push("content", c, anchor, levelWeight);
  }
}

function recordsFromHtml(url, html) {
  const language = normalizeLang(
    metaContent(html, "docsearch:language") ||
      metaContent(html, "docusaurus_locale") ||
      (html.match(/<html[^>]*\slang=["']([^"']+)["']/i) || [])[1],
  );
  const version =
    metaContent(html, "docsearch:version") ||
    metaContent(html, "docusaurus_version") ||
    "current";
  const docusaurusTag =
    metaContent(html, "docsearch:docusaurus_tag") ||
    metaContent(html, "docusaurus_tag") ||
    "docs-default-current";

  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = (titleMatch?.[1] || "").trim();

  const breadcrumbTitles = [
    ...html.matchAll(
      /class=["'][^"']*breadcrumbs__link[^"']*["'][^>]*>([\s\S]*?)<\/(?:a|span)>/gi,
    ),
  ]
    .map((m) => stripTags(m[1]))
    .filter(Boolean);
  const navbarActive = stripTags(
    (html.match(
      /class=["'][^"']*navbar__link--active[^"']*["'][^>]*>([\s\S]*?)<\/a>/i,
    ) || [])[1] || "",
  );
  const lvl0 =
    [navbarActive, ...breadcrumbTitles].filter(Boolean).join(" / ") ||
    "Documentation";

  const articleMatch = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
  const article = articleMatch?.[1] || "";
  if (!article) return [];

  const cleaned = article
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/class=["'][^"']*hash-link[^"']*["'][\s\S]*?<\/a>/gi, "");

  const headingRe = /<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
  const sections = [];
  let m;
  while ((m = headingRe.exec(cleaned))) {
    const level = Number(m[1]);
    const attrs = m[2] || "";
    const id = (attrs.match(/\sid=["']([^"']+)["']/i) || [])[1] || "";
    const text = stripTags(m[3]);
    if (!text) continue;
    const start = m.index + m[0].length;
    sections.push({ level, id, text, start });
  }

  for (let i = 0; i < sections.length; i++) {
    const end =
      i + 1 < sections.length ? sections[i + 1].start : cleaned.length;
    const block = cleaned.slice(sections[i].start, end);
    const parts = [];
    const contentRe = /<(p|li|td)\b[^>]*>([\s\S]*?)<\/\1>/gi;
    let cm;
    while ((cm = contentRe.exec(block))) {
      const t = stripTags(cm[2]);
      if (t) parts.push(t);
    }
    sections[i].content = parts.join(" ");
  }

  const hierarchy = {
    lvl0,
    lvl1: null,
    lvl2: null,
    lvl3: null,
    lvl4: null,
    lvl5: null,
    lvl6: null,
  };
  const records = [];
  let position = 0;
  const h1 = sections.find((s) => s.level === 1);
  hierarchy.lvl1 = h1?.text || title || url;

  const push = (type, content, anchor, levelWeight) => {
    position += 1;
    const objectID = crypto
      .createHash("md5")
      .update(
        `${url}#${anchor || ""}|${type}|${(content || "").slice(0, 80)}|${JSON.stringify(hierarchy)}`,
      )
      .digest("hex");
    records.push({
      objectID,
      hierarchy: { ...hierarchy },
      content: content || null,
      type,
      url: anchor ? `${url}#${anchor}` : url,
      url_without_anchor: url,
      anchor: anchor || null,
      language,
      lang: language,
      version,
      docusaurus_tag: docusaurusTag,
      weight: {
        pageRank: 0,
        level: levelWeight,
        position,
      },
    });
  };

  push("lvl1", null, h1?.id || "", 90);
  if (h1?.content) {
    pushContentChunks(push, h1.content, h1.id, 30);
  }

  for (const sec of sections) {
    if (sec.level === 1) {
      hierarchy.lvl1 = sec.text;
      for (let i = 2; i <= 6; i++) hierarchy[`lvl${i}`] = null;
      continue;
    }
    hierarchy[`lvl${sec.level}`] = sec.text;
    for (let i = sec.level + 1; i <= 6; i++) hierarchy[`lvl${i}`] = null;
    push(`lvl${sec.level}`, null, sec.id, Math.max(0, 100 - sec.level * 10));
    pushContentChunks(
      push,
      sec.content,
      sec.id,
      Math.max(0, 40 - sec.level),
    );
  }
  return records;
}

function collectLinks(html, base) {
  const links = new Set();
  const re = /href=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) {
    const href = m[1];
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("javascript:")
    ) {
      continue;
    }
    try {
      const full = normalizePageUrl(new URL(href, base).href);
      if (isDocUrl(full)) links.add(full);
    } catch {
      // ignore bad href
    }
  }
  return [...links];
}

function localeVariant(url) {
  const u = new URL(url);
  const prefix = SITE_PREFIX;
  const rest = u.pathname.slice(prefix.length).replace(/^\//, "");
  if (rest.startsWith("en/") || rest === "en") {
    const zhPath = rest === "en" ? "" : rest.slice(3);
    return normalizePageUrl(`${SITE_ORIGIN}${prefix}/${zhPath}`);
  }
  return normalizePageUrl(`${SITE_ORIGIN}${prefix}/en/${rest}`);
}

async function fetchSitemapUrls() {
  const candidates = [
    process.env.ALGOLIA_SITEMAP_URL,
    `${SITE_ROOT}sitemap.xml`,
    "https://cn-rdk-front-prod.d-robotics.cc/accessories_stereo_camera_doc/sitemap.xml",
  ].filter(Boolean);

  for (const sitemapUrl of candidates) {
    try {
      const res = await fetch(sitemapUrl, {
        headers: {
          "user-agent": "accessories-stereo-camera-doc-algolia-indexer/1.0",
        },
      });
      if (!res.ok) continue;
      const xml = await res.text();
      if (!xml.includes("<loc>")) continue;
      const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((x) =>
        normalizePageUrl(x[1].trim()),
      );
      const urls = locs.filter(isDocUrl);
      if (urls.length) {
        console.log(`sitemap: ${sitemapUrl} -> ${urls.length} urls`);
        return urls;
      }
    } catch (e) {
      console.log(`sitemap skip ${sitemapUrl}: ${e.message}`);
    }
  }
  return [];
}

async function crawl() {
  const seed = new Set([
    normalizePageUrl(SITE_ROOT),
    normalizePageUrl(`${SITE_ROOT}overview`),
    normalizePageUrl(`${SITE_ROOT}en/overview`),
  ]);
  for (const u of await fetchSitemapUrls()) {
    seed.add(u);
    seed.add(localeVariant(u));
  }

  const toVisit = [...seed];
  const seen = new Set();
  const records = [];

  while (toVisit.length && seen.size < 300) {
    const url = normalizePageUrl(toVisit.shift());
    if (seen.has(url) || !isDocUrl(url)) continue;
    seen.add(url);
    try {
      const res = await fetch(url, {
        headers: {
          "user-agent": "accessories-stereo-camera-doc-algolia-indexer/1.0",
        },
        redirect: "follow",
      });
      if (!res.ok) {
        console.log("skip", url, res.status);
        continue;
      }
      const html = await res.text();
      const finalUrl = normalizePageUrl(res.url);
      const pageRecords = recordsFromHtml(finalUrl, html);
      console.log(`${finalUrl} -> ${pageRecords.length}`);
      records.push(...pageRecords);
      for (const link of collectLinks(html, finalUrl)) {
        if (!seen.has(link)) toVisit.push(link);
        const alt = localeVariant(link);
        if (!seen.has(alt)) toVisit.push(alt);
      }
    } catch (e) {
      console.log("crawl err", url, e.message);
    }
  }
  return { pages: seen.size, records };
}

async function main() {
  console.log(`appId=${APP_ID} index=${INDEX}`);
  console.log(`site=${SITE_ROOT}`);

  await algolia(`/1/indexes/${encodeURIComponent(INDEX)}/settings`, {
    method: "PUT",
    body: INDEX_SETTINGS,
  });
  console.log("index settings applied");

  const { pages, records } = await crawl();
  console.log(`pages=${pages} records=${records.length}`);
  if (!records.length) {
    throw new Error("No records extracted; aborting clear/upload");
  }

  await algolia(`/1/indexes/${encodeURIComponent(INDEX)}/clear`, {
    method: "POST",
  });
  console.log("index cleared");

  const batchSize = 100;
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    const body = {
      requests: batch.map((r) => ({ action: "addObject", body: r })),
    };
    const res = await algolia(
      `/1/indexes/${encodeURIComponent(INDEX)}/batch`,
      { method: "POST", body },
    );
    console.log(`batch ${i}-${i + batch.length}`, res.taskID || res);
  }

  console.log("Indexing submitted. Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
