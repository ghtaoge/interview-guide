<template>
  <div class="search-box" :class="{ 'has-value': localKeyword, mobile: isMobile }">
    <input
      ref="inputRef"
      type="text"
      v-model="localKeyword"
      placeholder="搜索知识点... HashMap / GC / Redis"
      @keydown.enter="onEnter"
    />
    <span class="search-icon" :class="{ active: localKeyword }">🔍</span>
    <button v-if="localKeyword || filterStore.keyword" class="search-clear" @click="onClear">✕</button>
    <span v-if="localKeyword" class="search-badge">搜索中</span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useFilterStore } from '../stores/filter.js'
import { useDevice } from '../composables/useDevice.js'

const filterStore = useFilterStore()
const { isMobile } = useDevice()
const inputRef = ref(null)

const localKeyword = ref(filterStore.keyword)
let debounceTimer = null

watch(localKeyword, (val) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    filterStore.setKeyword(val)
  }, 300)
})

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
  width: 88%; max-width: 380px; margin: 8px auto 0;
}
.search-box.mobile input {
  font-size: 16px; padding: 10px 30px 10px 34px; min-height: 44px;
}
.search-box.mobile .search-icon { font-size: 16px; left: 12px }
.search-box input {
  width: 100%; padding: 6px 30px 6px 30px; border-radius: 20px; font-size: 14px;
  outline: none; min-height: 32px; color: #fff !important;
  background: rgba(0,0,0,.35); border: 1.5px solid rgba(255,255,255,.25);
  transition: all .25s ease; caret-color: #fff;
  -webkit-text-fill-color: #fff; text-fill-color: #fff;
}
.search-box input::placeholder { color: rgba(255,255,255,.5); opacity: 1 }
.search-box input:-ms-input-placeholder { color: rgba(255,255,255,.5) }
.search-box input:focus {
  background: rgba(0,0,0,.45); border-color: rgba(255,255,255,.45);
  color: #fff !important; -webkit-text-fill-color: #fff;
  box-shadow: 0 0 12px rgba(13,148,136,.25);
}
/* 搜索有值时的动态效果 */
.search-box.has-value input {
  border-color: rgba(13,148,136,.6);
  box-shadow: 0 0 16px rgba(13,148,136,.3), 0 0 4px rgba(13,148,136,.15);
  background: rgba(0,0,0,.4);
}
.search-icon {
  position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
  font-size: 12px; z-index: 1; transition: all .3s;
}
.search-icon.active {
  animation: pulseIcon .6s ease;
  filter: drop-shadow(0 0 4px rgba(13,148,136,.5));
}
.search-clear {
  position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  width: 20px; height: 20px; border-radius: 50%; background: rgba(255,255,255,.2);
  color: #fff; cursor: pointer; font-size: .65em;
  display: flex; align-items: center; justify-content: center;
  border: none; z-index: 2; transition: all .2s;
}
.search-clear:hover { background: rgba(255,255,255,.4); transform: translateY(-50%) scale(1.15) }
.search-badge {
  position: absolute; right: 34px; top: 50%; transform: translateY(-50%);
  font-size: .6em; padding: 2px 6px; border-radius: 8px;
  background: rgba(13,148,136,.3); color: rgba(255,255,255,.8);
  border: 1px solid rgba(13,148,136,.4);
  animation: fadeInBadge .3s ease;
}

@keyframes pulseIcon {
  0% { transform: translateY(-50%) scale(1) }
  50% { transform: translateY(-50%) scale(1.3) }
  100% { transform: translateY(-50%) scale(1) }
}
@keyframes fadeInBadge {
  from { opacity: 0; transform: translateY(-50%) scale(.8) }
  to { opacity: 1; transform: translateY(-50%) scale(1) }
}
</style>
