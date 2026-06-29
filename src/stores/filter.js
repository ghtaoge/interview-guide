import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const keyword = ref('')
  const tagFilter = ref('')
  const expandCommand = ref('none')

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

  // 全部展开/折叠命令（供 HeaderBar 按钮触发）
  function expandAll() {
    expandCommand.value = 'expand'
    setTimeout(() => { expandCommand.value = 'none' }, 80)
  }
  function collapseAll() {
    expandCommand.value = 'collapse'
    setTimeout(() => { expandCommand.value = 'none' }, 80)
  }

  function matchText(text) {
    if (!keyword.value) return true
    return text.toLowerCase().includes(keyword.value.toLowerCase())
  }

  function matchTag(tag) {
    if (!tagFilter.value) return true
    return tag === tagFilter.value
  }

  return { keyword, tagFilter, expandCommand, setKeyword, setTagFilter, clearAll, matchText, matchTag, expandAll, collapseAll }
})
