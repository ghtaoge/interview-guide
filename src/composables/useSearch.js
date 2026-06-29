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

  return { matchText, highlightHtml }
}
