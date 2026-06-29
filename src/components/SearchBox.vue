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
    <span class="count" v-if="!isMobile">{{ countLabel }}</span>
    <button v-if="filterStore.keyword" class="search-clear" @click="onClear">✕</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFilterStore } from '../stores/filter.js'
import { useModulesStore } from '../stores/modules.js'
import { useDevice } from '../composables/useDevice.js'

const filterStore = useFilterStore()
const modulesStore = useModulesStore()
const { isMobile } = useDevice()
const localKeyword = ref(filterStore.keyword)
let debounceTimer = null

const countLabel = computed(() =>
  filterStore.keyword ? '搜索中...' : modulesStore.totalModules + ' 模块'
)

function onInput(e) {
  const val = e.target.value
  if (isMobile) {
    // 移动端直接更新
    filterStore.setKeyword(val)
  } else {
    // PC端防抖
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
  width: 420px; margin: 10px auto 0; position: relative;
}
.search-box:focus-within {
  box-shadow: 0 4px 20px rgba(13,148,136,.18);
}
.search-box.mobile {
  width: 100%; max-width: 100%;
}
.search-box.mobile:focus-within {
  width: 100%; box-shadow: none;
}
.search-box.mobile input:focus {
  background: rgba(255,255,255,.25); border-color: rgba(255,255,255,.5); color: #fff;
}
.search-box input {
  width: 100%; padding: 10px 16px 10px 38px; border: 2px solid transparent;
  border-radius: 24px; font-size: 14px; outline: none;
  background: rgba(255,255,255,.94); box-shadow: 0 2px 12px rgba(0,0,0,.08);
  min-height: 38px; transition: all .25s ease; color: #1a1a1a;
}
.search-box.mobile input {
  border-radius: 20px; padding: 6px 12px 6px 30px; font-size: 14px; min-height: 32px;
  background: rgba(255,255,255,.15); color: #fff; border: 1px solid rgba(255,255,255,.3);
}
.search-box.mobile input::placeholder { color: rgba(255,255,255,.6) }
.search-box input:focus {
  box-shadow: 0 2px 16px rgba(52,112,255,.25); background: #fff; border-color: #3470ff; color: #1a1a1a;
}
.search-box input::placeholder { color: #888 }
.search-icon { content: '🔍'; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 14px; z-index: 1 }
.search-box.mobile .search-icon { font-size: 12px; left: 10px }
.count { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); font-size: 11px; color: #aaa; background: #f0f0f0; padding: 3px 8px; border-radius: 12px }
.search-box.has-value .count { right: 70px }
.search-clear { position: absolute; right: 44px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background: var(--border); color: var(--text3); cursor: pointer; font-size: .65em; display: flex; align-items: center; justify-content: center; border: none; z-index: 2 }
</style>
