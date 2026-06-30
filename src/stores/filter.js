import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const keyword = ref('')
  const tagFilter = ref('')
  const searchLoading = ref(false)

  function setKeyword(val) {
    keyword.value = val
    tagFilter.value = ''
  }

  function setTagFilter(val) {
    tagFilter.value = val
    keyword.value = ''
  }

  function clearAll() {
    keyword.value = ''
    tagFilter.value = ''
  }

  function matchText(text) {
    if (!keyword.value) return true
    return text.toLowerCase().includes(keyword.value.toLowerCase())
  }

  function matchTag(tag) {
    if (!tagFilter.value) return true
    return tag === tagFilter.value
  }

  // 搜索 point 的所有文本(含detail内容)
  function matchPointContent(pt) {
    if (!keyword.value) return true
    const fl = keyword.value.toLowerCase()
    if ((pt.tag + ' ' + pt.desc).toLowerCase().includes(fl)) return true
    if (pt.details) {
      for (const d of pt.details) {
        if ((d.tag + ' ' + d.desc).toLowerCase().includes(fl)) return true
      }
    }
    return false
  }

  // 检查point是否仅因detail内容匹配
  function isDetailOnlyMatch(pt) {
    if (!keyword.value) return false
    const fl = keyword.value.toLowerCase()
    if ((pt.tag + ' ' + pt.desc).toLowerCase().includes(fl)) return false
    if (pt.details) {
      for (const d of pt.details) {
        if ((d.tag + ' ' + d.desc).toLowerCase().includes(fl)) return true
      }
    }
    return false
  }

  // 搜索模块全内容
  function matchModuleContent(mod) {
    if (!keyword.value) return true
    if (matchText(mod.title) || matchText(mod.tag)) return true
    if (mod.subs) {
      for (const sub of mod.subs) {
        if (matchText(sub.title)) return true
        for (const pt of sub.points) {
          if (matchPointContent(pt)) return true
        }
      }
    }
    return false
  }

  return { keyword, tagFilter, searchLoading, setKeyword, setTagFilter, clearAll, matchText, matchTag, matchPointContent, isDetailOnlyMatch, matchModuleContent }
})
