export function useSearch() {
  function matchText(text, keyword) {
    if (!keyword) return true
    return text.toLowerCase().includes(keyword.toLowerCase())
  }

  function highlightHtml(text, keyword) {
    const safe = String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    if (!keyword) return safe
    const esc = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const re = new RegExp('(' + esc + ')', 'gi')
    return safe.replace(re, '<span class="hl">$1</span>')
  }

  // 搜索 point 的所有文本(含detail内容)
  function matchPointContent(pt, keyword) {
    if (!keyword) return true
    const fl = keyword.toLowerCase()
    // point tag + desc
    if ((pt.tag + ' ' + pt.desc).toLowerCase().includes(fl)) return true
    // detail tag + desc
    if (pt.details) {
      for (const d of pt.details) {
        if ((d.tag + ' ' + d.desc).toLowerCase().includes(fl)) return true
      }
    }
    return false
  }

  // 检查point是否仅因detail内容匹配(标题不匹配时自动展开)
  function isDetailOnlyMatch(pt, keyword) {
    if (!keyword) return false
    const fl = keyword.toLowerCase()
    // point标题匹配则不算"仅detail匹配"
    if ((pt.tag + ' ' + pt.desc).toLowerCase().includes(fl)) return false
    // detail内容匹配
    if (pt.details) {
      for (const d of pt.details) {
        if ((d.tag + ' ' + d.desc).toLowerCase().includes(fl)) return true
      }
    }
    return false
  }

  // 搜索模块全内容(标题/标签/子分类/知识点/详情)
  function matchModuleContent(mod, keyword) {
    if (!keyword) return true
    // 模块标题/tag
    if (matchText(mod.title, keyword) || matchText(mod.tag, keyword)) return true
    // 子分类/知识点/详情
    if (mod.subs) {
      for (const sub of mod.subs) {
        if (matchText(sub.title, keyword)) return true
        for (const pt of sub.points) {
          if (matchPointContent(pt, keyword)) return true
        }
      }
    }
    return false
  }

  return { matchText, highlightHtml, matchPointContent, isDetailOnlyMatch, matchModuleContent }
}
