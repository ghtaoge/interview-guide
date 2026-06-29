<template>
  <header class="header" :class="{ compact: isCompact, mobile: isMobile }">
    <div class="header-top">
      <h1>📖 {{ config.ui.title }} <small style="font-size:.5em;opacity:.5">v{{ config.ui.version }}</small></h1>
      <ThemeToggle />
    </div>
    <p class="header-desc">共 {{ modulesStore.totalModules }} 大模块 · {{ modulesStore.totalPoints }} 个知识点</p>
    <!-- 移动端: 搜索框 + 分类按钮同行 -->
    <div v-if="isMobile" class="mobile-search-row">
      <SearchBox />
      <CategorySelect />
    </div>
    <!-- PC端: 只有搜索框 -->
    <SearchBox v-else />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { moduleConfig as config } from '../config.js'
import { useModulesStore } from '../stores/modules.js'
import { useDevice } from '../composables/useDevice.js'
import ThemeToggle from './ThemeToggle.vue'
import SearchBox from './SearchBox.vue'
import CategorySelect from './CategorySelect.vue'

const modulesStore = useModulesStore()
const { isMobile } = useDevice()
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

/* 移动端搜索行 */
.mobile-search-row {
  display: flex; align-items: center; gap: 8px;
  max-width: 960px; margin: 6px auto 0; padding: 0 2px;
}
.mobile-search-row .search-box { flex: 1; width: auto; min-width: 0 }

@media (max-width: 600px) {
  .header { padding: 20px 12px 16px }
  .header h1 { font-size: 1.25em; margin-bottom: 4px }
  .header-top .theme-toggle { position: absolute; right: 4px }
}
</style>
