import React, { useCallback, useEffect, useId, useRef, useState, useMemo } from 'react';
import { useDocScopeFilter } from '@site/src/context/DocScopeFilterContext';
import { productKeysEqual } from '@site/src/context/doc-scope-product-utils';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * 原地改写选择器的显示文本，避免 hydration 后替换文本节点导致界面不再更新。
 */
function syncSelectorText(kind, value) {
  if (!value) {
    return;
  }
  document.querySelectorAll(`[data-doc-scope-selector="${kind}"]`).forEach((el) => {
    if (el.textContent === value) {
      return;
    }
    const node = el.firstChild;
    if (node && node.nodeType === Node.TEXT_NODE && !node.nextSibling) {
      node.data = value;
    } else {
      el.textContent = value;
    }
  });
}

function ScopeMenu({ label, value, valueScope, options, onPick }) {
  const baseId = useId();
  const labelId = `${baseId}-label`;
  const listId = `${baseId}-list`;
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onDocPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) {
        close();
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('mousedown', onDocPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  return (
    <div ref={rootRef} className="doc-scope-menu">
      <span className="doc-scope-menu__label" id={labelId}>
        {label}
      </span>
      <div className="doc-scope-menu__control">
        <button
          type="button"
          className="doc-scope-menu__trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          onClick={() => setOpen((o) => !o)}>
          <span className="doc-scope-menu__value" data-doc-scope-selector={valueScope}>
            {value}
          </span>
          <span className="doc-scope-menu__caret" aria-hidden />
        </button>
        {open ? (
          <ul id={listId} className="doc-scope-menu__list" role="listbox" aria-labelledby={labelId}>
            {options.map((opt) => (
              <li key={opt} className="doc-scope-menu__item" role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={productKeysEqual(opt, value)}
                  className={
                    productKeysEqual(opt, value)
                      ? 'doc-scope-menu__option doc-scope-menu__option--active'
                      : 'doc-scope-menu__option'
                  }
                  onClick={() => {
                    onPick(opt);
                    close();
                  }}>
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

/**
 * 顶栏型号选择器：与 URL ?p= 同步。无版本矩阵时不渲染版本下拉。
 */
export default function DocScopeSelectors() {
  const {
    version,
    product,
    setVersion,
    setProduct,
    matrix,
    productMatrix,
    allProducts: allProductsFromCtx,
  } = useDocScopeFilter();
  const { i18n } = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === 'en';

  const allProducts = useMemo(() => {
    if (Array.isArray(allProductsFromCtx) && allProductsFromCtx.length > 0) {
      return allProductsFromCtx;
    }
    const productsSet = new Set();
    Object.values(matrix || {}).forEach((products) => {
      (products || []).forEach((p) => productsSet.add(p));
    });
    return Array.from(productsSet);
  }, [allProductsFromCtx, matrix]);

  const versions = useMemo(() => productMatrix[product] || [], [productMatrix, product]);
  const versionValue = useMemo(
    () => (versions.includes(version) ? version : versions[0]),
    [versions, version],
  );

  useEffect(() => {
    syncSelectorText('product', product);
    if (versionValue) {
      syncSelectorText('version', versionValue);
    }
  }, [product, versionValue]);

  return (
    <div className="doc-scope-selectors">
      <ScopeMenu
        label={isEnglish ? 'Model' : '型号'}
        value={product}
        valueScope="product"
        options={allProducts}
        onPick={setProduct}
      />
      {versions.length > 0 ? (
        <ScopeMenu
          label={isEnglish ? 'Version' : '版本'}
          value={versionValue}
          valueScope="version"
          options={versions}
          onPick={setVersion}
        />
      ) : null}
    </div>
  );
}
