export const DOC_SCOPE_DIMENSIONS = {
  product: {queryParam: 'p', default: 'RDK X5', label: 'RDK X5'},
  version: {queryParam: 'v', default: '', label: 'All'},
};

export function formatDocScope(product, version) {
  const p =
    product && String(product).trim()
      ? String(product).trim()
      : DOC_SCOPE_DIMENSIONS.product.default;
  const v = version && String(version).trim() ? String(version).trim() : '*';
  return `${p}::${v}`;
}

export function defaultDocScope() {
  return formatDocScope(
    DOC_SCOPE_DIMENSIONS.product.default,
    DOC_SCOPE_DIMENSIONS.version.default,
  );
}

export function docScopeFacetFilter(scope = defaultDocScope()) {
  return `doc_scope:${JSON.stringify(scope)}`;
}

export function appendScopeQueryToUrl(url, product, version) {
  const {queryParam: pKey} = DOC_SCOPE_DIMENSIONS.product;
  const {queryParam: vKey} = DOC_SCOPE_DIMENSIONS.version;
  try {
    const base =
      typeof window !== 'undefined' ? window.location.origin : 'https://local';
    const u = new URL(url, base);
    if (product) u.searchParams.set(pKey, product);
    if (version) u.searchParams.set(vKey, version);
    else u.searchParams.delete(vKey);
    return `${u.pathname}${u.search}${u.hash}`;
  } catch {
    return url;
  }
}
