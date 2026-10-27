import {
  expandScopeMeta,
  pageDocScopesFromPathname,
} from '../../search/doc-scope-config.mjs';

export function parseScopesFromAttr(value) {
  if (!value || !String(value).trim()) return null;
  const raw = String(value).trim();
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.map(String);
    if (parsed && typeof parsed === 'object') {
      return expandScopeMeta({
        versions: parsed.versions,
        products: parsed.products,
      });
    }
    if (typeof parsed === 'string') return [parsed];
  } catch {
    // fall through
  }
  return raw.split(/[\s,]+/).filter(Boolean);
}

export function intersectScopes(a, b) {
  if (!a?.length || !b?.length) return [];
  const set = new Set(b);
  return a.filter((x) => set.has(x));
}

export function pageScopesFromHtml($, url) {
  return pageDocScopesFromPathname(new URL(url).pathname);
}

export function effectiveBlockScopes(pageScopes, scopeStack) {
  let scopes = pageScopes;
  for (const layer of scopeStack || []) {
    scopes = intersectScopes(scopes, layer ?? []);
  }
  return scopes;
}
