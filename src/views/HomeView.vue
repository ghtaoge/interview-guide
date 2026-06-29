<template>
  <div class="home-view">
    <!-- 加载骨架屏 -->
    <template v-if="loading">
      <van-skeleton v-for="i in 6" :key="i" title :row="2" row-width="60%" class="skeleton-card" />
    </template>

    <!-- 模块卡片网格 -->
    <template v-else>
      <div class="module-grid">
        <ModuleCard v-for="mod in displayedModules" :key="mod.id" :mod="mod" />
      </div>
      <div v-if="displayedModules.length === 0 && (filterStore.keyword || filterStore.tagFilter)" class="no-result">
        🔍 未找到匹配 "{{ filterStore.keyword || filterStore.tagFilter }}" 的模块
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useModulesStore } from '../stores/modules.js'
import { useFilterStore } from '../stores/filter.js'
import ModuleCard from '../components/ModuleCard.vue'

const modulesStore = useModulesStore()
const filterStore = useFilterStore()

const loading = computed(() => modulesStore.moduleIndex.length === 0)

const displayedModules = computed(() => {
  const index = modulesStore.sortedIndex
  if (!filterStore.keyword && !filterStore.tagFilter) return index
  return index.filter(m => {
    if (filterStore.tagFilter) return m.tag === filterStore.tagFilter
    if (filterStore.keyword) {
      const kw = filterStore.keyword.toLowerCase()
      return m.title.toLowerCase().includes(kw) || m.tag.toLowerCase().includes(kw)
    }
    return true
  })
})
</script>

<style scoped>
.home-view {
  max-width: 960px; margin: 0 auto; padding: 0 16px 60px;
}
.module-grid {
  display: grid; grid-template-columns: 1fr; gap: 16px;
}
@media (min-width: 601px) {
  .module-grid { grid-template-columns: repeat(2, 1fr) }
}
.no-result { text-align: center; color: var(--text3); padding: 40px; font-size: 1em }
.skeleton-card { margin-bottom: 16px; padding: 16px; background: var(--card); border-radius: var(--radius) }
</style>
