import * as cheerio from 'cheerio';

/**
 * 读取页面的 Docusaurus 面包屑，返回除当前页外的祖先路径。
 *
 * 例：主页面 / GS130W 双目摄像头模组 / 硬件说明 → ['GS130W 双目摄像头模组']
 *
 * stereo_camera 的 Algolia records 里 lvl0 是 h1（页面标题），不像 DocSearch
 * 爬虫那样带侧边栏路径，所以 MCP 索引的面包屑单独从 DOM 取。
 */
export function parseBreadcrumbs(html) {
  const $ = cheerio.load(html);
  const items = $('nav.theme-doc-breadcrumbs .breadcrumbs__item')
    .toArray()
    .map((el) => $(el).text().replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  // 最后一项是当前页标题（同时出现在 h1 里），祖先路径不含它。
  return items.slice(0, -1);
}
