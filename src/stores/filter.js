import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const keyword = ref('')
  const tagFilter = ref('')

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

  return { keyword, tagFilter, setKeyword, setTagFilter, clearAll, matchText, matchTag }
})
