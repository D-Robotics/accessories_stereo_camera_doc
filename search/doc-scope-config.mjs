/**
 * Doc scope dimensions for search indexing and frontend facet filters.
 * Values are stored in Algolia as filterOnly(doc_scope): "product::version".
 * An empty selected version is stored as "*".
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const matrix = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../src/context/doc-scope-matrix.json'),
    'utf8',
  ),
);

export const DOC_SCOPE_DIMENSIONS = {
  product: {
    queryParam: 'p',
    default: 'RDK X5',
    label: 'RDK X5',
  },
  version: {
    queryParam: 'v',
    default: '',
    label: 'All',
  },
};

const PRODUCTS = Array.isArray(matrix.PRODUCTS) ? matrix.PRODUCTS : [];
const PRODUCT_VERSION_MATRIX = matrix.PRODUCT_VERSION_MATRIX || {};

export function formatDocScope(product, version) {
  const p = product && String(product).trim() ? String(product).trim() : DOC_SCOPE_DIMENSIONS.product.default;
  const v = version && String(version).trim() ? String(version).trim() : '*';
  return `${p}::${v}`;
}

export function defaultDocScope() {
  return formatDocScope(
    DOC_SCOPE_DIMENSIONS.product.default,
    DOC_SCOPE_DIMENSIONS.version.default,
  );
}

/** Algolia facet filter string. Product names contain spaces, so the value is quoted. */
export function docScopeFacetFilter(scope = defaultDocScope()) {
  return `doc_scope:${JSON.stringify(scope)}`;
}

function normalizeProductKey(value) {
  return String(value).trim().toLocaleLowerCase('en-US').replace(/\s+/g, ' ');
}

function seriesKey(entry) {
  const match = String(entry).trim().match(/^rdk\s*-\s*(.+)$/i);
  if (!match) return null;
  const suffix = match[1].trim().replace(/\s+/g, ' ');
  return suffix ? normalizeProductKey(`RDK ${suffix}`) : null;
}

function productBelongsToSeries(product, key) {
  const current = normalizeProductKey(product);
  return current === key || current.startsWith(`${key} `);
}

function resolveProducts(products) {
  if (!products || products.length === 0) return [...PRODUCTS];
  const matched = new Set();
  for (const entry of products) {
    const series = seriesKey(entry);
    if (series) {
      for (const product of PRODUCTS) {
        if (productBelongsToSeries(product, series)) matched.add(product);
      }
      continue;
    }
    const key = normalizeProductKey(entry);
    const exact = PRODUCTS.find((product) => normalizeProductKey(product) === key);
    if (exact) matched.add(exact);
  }
  return [...matched];
}

function compareVersions(v1, v2) {
  const parts1 = String(v1).split('.').map(Number);
  const parts2 = String(v2).split('.').map(Number);
  const maxLength = Math.max(parts1.length, parts2.length);
  for (let i = 0; i < maxLength; i += 1) {
    const p1 = parts1[i] || 0;
    const p2 = parts2[i] || 0;
    if (p1 < p2) return -1;
    if (p1 > p2) return 1;
  }
  return 0;
}

function versionMatches(currentVersion, rule) {
  if (!rule) return false;
  if (typeof rule === 'string') return rule === currentVersion;
  const cmp = compareVersions(currentVersion, rule.version);
  switch (rule.operator || '') {
    case '>':
      return cmp > 0;
    case '>=':
      return cmp >= 0;
    case '<':
      return cmp < 0;
    case '<=':
      return cmp <= 0;
    default:
      return cmp === 0;
  }
}

function selectableVersions(product, versionRules) {
  const matrixVersions = PRODUCT_VERSION_MATRIX[product] || [];
  if (!versionRules || versionRules.length === 0) {
    return matrixVersions.length > 0 ? matrixVersions : ['*'];
  }
  return matrixVersions.filter((version) =>
    versionRules.some((rule) => versionMatches(version, rule)),
  );
}

/** Expand a :::doc_scope payload into facet values. */
export function expandScopeMeta({versions, products} = {}) {
  const scopes = [];
  for (const product of resolveProducts(products)) {
    for (const version of selectableVersions(product, versions)) {
      scopes.push(formatDocScope(product, version === '*' ? '' : version));
    }
  }
  return [...new Set(scopes)];
}

export function allSelectableScopes() {
  return expandScopeMeta({});
}

export function pageDocScopesFromPathname(pathname) {
  const normalized = String(pathname || '').replace(/\/+$/, '') || '/';
  if (normalized.includes('/search')) return [];
  return allSelectableScopes();
}

export function appendScopeQueryToUrl(url, product, version) {
  const {queryParam: pKey} = DOC_SCOPE_DIMENSIONS.product;
  const {queryParam: vKey} = DOC_SCOPE_DIMENSIONS.version;
  try {
    const u = new URL(url, 'https://placeholder.local');
    if (product) u.searchParams.set(pKey, product);
    if (version) u.searchParams.set(vKey, version);
    else u.searchParams.delete(vKey);
    return u.pathname + u.search + u.hash;
  } catch {
    return url;
  }
}
