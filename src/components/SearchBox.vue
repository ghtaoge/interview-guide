<template>
  <van-search v-if="isMobile"
    v-model="filterStore.keyword"
    placeholder="搜索知识点... 如 HashMap / CAS / GC / Redis..."
    shape="round"
    @search="onSearch"
    @clear="onClear"
  />
  <div v-else class="search-box" :class="{ 'has-value': filterStore.keyword }">
    <input
      type="text"
      v-model="localKeyword"
      placeholder="搜索知识点... 如 HashMap / CAS / GC / Redis..."
      @input="onInput"
    />
    <span class="count">{{ countLabel }}</span>
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

function onInput() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    filterStore.setKeyword(localKeyword.value)
  }, 200)
}

function onSearch(val) {
  filterStore.setKeyword(val)
}

function onClear() {
  filterStore.clearAll()
  localKeyword.value = ''
}
</script>

<style scoped>
.search-box {
  width: 420px; margin: 10px auto 0; position: relative;
  transition: width .3s cubic-bezier(.4,0,.2,1);
}
.search-box:focus-within {
  width: 560px; box-shadow: 0 4px 20px rgba(13,148,136,.18);
}
.search-box input {
  width: 100%; padding: 10px 16px 10px 38px; border: 2px solid transparent;
  border-radius: 24px; font-size: 14px; outline: none;
  background: rgba(255,255,255,.94); box-shadow: 0 2px 12px rgba(0,0,0,.08);
  min-height: 38px; transition: all .25s ease;
}
.search-box input:focus {
  box-shadow: 0 2px 16px rgba(52,112,255,.25); background: #fff; border-color: #3470ff;
}
.search-box::before { content: '🔍'; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 14px; z-index: 1 }
.search-box .count { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); font-size: 11px; color: #aaa; background: #f0f0f0; padding: 3px 8px; border-radius: 12px }
.search-box.has-value .count { right: 70px }
.search-clear { position: absolute; right: 44px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background: var(--border); color: var(--text3); cursor: pointer; font-size: .65em; display: flex; align-items: center; justify-content: center; border: none; z-index: 2 }
</style>
