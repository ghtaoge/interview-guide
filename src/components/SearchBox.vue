<template>
  <div class="search-box" :class="{ 'has-value': localKeyword, mobile: isMobile }">
    <input
      ref="inputRef"
      type="text"
      v-model="localKeyword"
      placeholder="搜索知识点... HashMap / GC / Redis"
      @keydown.enter="onEnter"
    />
    <span class="search-icon">🔍</span>
    <button v-if="localKeyword || filterStore.keyword" class="search-clear" @click="onClear">✕</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useFilterStore } from '../stores/filter.js'
import { useDevice } from '../composables/useDevice.js'

const filterStore = useFilterStore()
const { isMobile } = useDevice()
const inputRef = ref(null)

// 统一用本地状态做输入绑定，避免每字触发全局重渲染导致失焦
const localKeyword = ref(filterStore.keyword)
let debounceTimer = null

// 本地变化 → 防抖后同步到 store（300ms）
watch(localKeyword, (val) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    filterStore.setKeyword(val)
  }, 300)
})

// store 外部变化同步到本地（如点击清除、分类切换清空等）
watch(() => filterStore.keyword, (val) => {
  if (val !== localKeyword.value) {
    localKeyword.value = val
  }
})

function onEnter() {
  clearTimeout(debounceTimer)
  filterStore.setKeyword(localKeyword.value)
}

function onClear() {
  clearTimeout(debounceTimer)
  filterStore.clearAll()
  localKeyword.value = ''
}
</script>

<style scoped>
.search-box {
  width: 380px; margin: 8px auto 0; position: relative;
}
.search-box.mobile {
  width: 85%; max-width: 360px; margin: 6px auto 0;
}
.search-box input {
  width: 100%; padding: 6px 30px 6px 30px; border-radius: 20px; font-size: 14px;
  outline: none; min-height: 32px; color: #fff !important;
  background: rgba(0,0,0,.35); border: 1px solid rgba(255,255,255,.3);
  transition: all .2s ease; caret-color: #fff;
  -webkit-text-fill-color: #fff; text-fill-color: #fff;
}
.search-box input::placeholder { color: rgba(255,255,255,.55); opacity: 1 }
.search-box input:-ms-input-placeholder { color: rgba(255,255,255,.55) }
.search-box input:focus {
  background: rgba(0,0,0,.45); border-color: rgba(255,255,255,.55);
  color: #fff !important; -webkit-text-fill-color: #fff;
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
