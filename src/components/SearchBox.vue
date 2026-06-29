<template>
  <div class="search-box" :class="{ 'has-value': filterStore.keyword, mobile: isMobile }">
    <input
      type="text"
      :value="isMobile ? filterStore.keyword : localKeyword"
      placeholder="搜索知识点... HashMap / GC / Redis"
      @input="onInput"
      @keydown.enter="onEnter"
    />
    <span class="search-icon">🔍</span>
    <button v-if="filterStore.keyword" class="search-clear" @click="onClear">✕</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFilterStore } from '../stores/filter.js'
import { useDevice } from '../composables/useDevice.js'

const filterStore = useFilterStore()
const { isMobile } = useDevice()
const localKeyword = ref(filterStore.keyword)
let debounceTimer = null

function onInput(e) {
  const val = e.target.value
  if (isMobile) {
    filterStore.setKeyword(val)
  } else {
    localKeyword.value = val
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      filterStore.setKeyword(val)
    }, 200)
  }
}

function onEnter() {
  filterStore.setKeyword(isMobile ? filterStore.keyword : localKeyword.value)
}

function onClear() {
  filterStore.clearAll()
  localKeyword.value = ''
}
</script>

<style scoped>
.search-box {
  width: 280px; margin: 8px auto 0; position: relative;
}
.search-box.mobile {
  width: 85%; max-width: 360px; margin: 6px auto 0;
}
.search-box input {
  width: 100%; padding: 5px 28px 5px 28px; border-radius: 20px; font-size: 14px;
  outline: none; min-height: 30px; color: #fff;
  background: rgba(0,0,0,.15); border: 1px solid rgba(255,255,255,.3);
  transition: all .2s ease;
}
.search-box input::placeholder { color: rgba(255,255,255,.55) }
.search-box input:focus {
  background: rgba(0,0,0,.25); border-color: rgba(255,255,255,.5); color: #fff;
}
.search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 12px; z-index: 1 }
.search-clear {
  position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  width: 20px; height: 20px; border-radius: 50%; background: rgba(255,255,255,.2);
  color: #fff; cursor: pointer; font-size: .65em;
  display: flex; align-items: center; justify-content: center;
  border: none; z-index: 2;
}
</style>
