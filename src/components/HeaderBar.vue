<template>
  <header class="header" :class="{ compact: isCompact }">
    <div class="header-top">
      <h1>📖 {{ config.ui.title }} <small style="font-size:.5em;opacity:.5">v{{ config.ui.version }}</small></h1>
      <ThemeToggle />
    </div>
    <p class="header-desc">共 {{ modulesStore.totalModules }} 大模块 · {{ modulesStore.totalPoints }} 个知识点</p>
    <SearchBox />
    <div class="toolbar">
      <button class="toolbar-action-btn" @click="filterStore.expandAll">📂</button>
      <button class="toolbar-action-btn" @click="filterStore.collapseAll">📁</button>
      <CategorySelect />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { moduleConfig as config } from '../config.js'
import { useModulesStore } from '../stores/modules.js'
import { useFilterStore } from '../stores/filter.js'
import ThemeToggle from './ThemeToggle.vue'
import SearchBox from './SearchBox.vue'
import CategorySelect from './CategorySelect.vue'

const modulesStore = useModulesStore()
const filterStore = useFilterStore()
const isCompact = ref(false)

function onScroll() {
  isCompact.value = window.scrollY > 280
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #0d9488 0%, #2563eb 50%, #e8833a 100%);
  color: #fff; padding: 24px 20px 20px; text-align: center;
  position: sticky; top: 0; z-index: 100;
  box-shadow: 0 8px 32px rgba(13,148,136,.25); transition: padding .3s ease;
}
.header.compact { padding: 10px 20px 8px }
.header.compact h1 { font-size: 1.1em; margin-bottom: 2px }
.header.compact .header-desc { display: none }
.header-top {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  position: relative; max-width: 960px; margin: 0 auto;
}
.header-top .theme-toggle { position: absolute; right: 0 }
.header h1 { font-size: 1.45em; margin-bottom: 6px; letter-spacing: 2px; text-shadow: 0 2px 8px rgba(0,0,0,.12) }
.header-desc { font-size: .78em; opacity: .7; font-weight: 300 }
.toolbar { max-width: 960px; margin: 12px auto; text-align: center; display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; align-items: center }
.toolbar-action-btn {
  padding: 7px 12px; border-radius: 20px; min-width: auto;
  background: rgba(255,255,255,.18); color: #fff;
  border: 1px solid rgba(255,255,255,.3);
  cursor: pointer; font-size: 1.05em;
  transition: all .18s; white-space: nowrap; line-height: 1;
}
.toolbar-action-btn:hover, .toolbar-action-btn:active { background: rgba(255,255,255,.35); border-color: rgba(255,255,255,.5) }

@media (max-width: 600px) {
  .header { padding: 20px 12px 16px }
  .header h1 { font-size: 1.25em; margin-bottom: 4px }
  .header-top .theme-toggle { position: absolute; right: 4px }
}
</style>
