<template>
  <div class="home-view">
    <!-- 加载骨架屏 -->
    <template v-if="loading">
      <van-skeleton v-for="i in 6" :key="i" title :row="2" row-width="60%" class="skeleton-card" />
    </template>

    <!-- 模块列表 -->
    <template v-else>
      <div class="module-list">
        <div v-for="mod in displayedModules" :key="mod.id" class="module-wrapper">
          <ModuleCard :mod="mod" :expanded="expandedId === mod.id" @toggle="toggleModule(mod.id)" />

          <div v-if="expandedId === mod.id" class="module-content">
            <van-skeleton v-if="moduleLoading" title :row="4" />
            <template v-else-if="moduleData">
              <SubSection
                v-for="sub in moduleData.subs"
                :key="sub.id"
                :sub="sub"
                :module-id="mod.id"
                :color-index="mod.cssIndex"
                :keyword="filterStore.keyword"
              />
            </template>
          </div>
        </div>
      </div>
      <div v-if="displayedModules.length === 0 && (filterStore.keyword || filterStore.tagFilter)" class="no-result">
        🔍 未找到匹配 "{{ filterStore.keyword || filterStore.tagFilter }}" 的模块
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useModulesStore } from '../stores/modules.js'
import { useFilterStore } from '../stores/filter.js'
import ModuleCard from '../components/ModuleCard.vue'
import SubSection from '../components/SubSection.vue'

const modulesStore = useModulesStore()
const filterStore = useFilterStore()

const loading = computed(() => modulesStore.moduleIndex.length === 0)
const expandedId = ref(null)
const moduleLoading = ref(false)
const moduleData = ref(null)

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

async function toggleModule(id) {
  if (expandedId.value === id) {
    expandedId.value = null
    moduleData.value = null
    return
  }
  expandedId.value = id
  moduleData.value = null
  moduleLoading.value = true
  const data = await modulesStore.loadModule(id)
  moduleData.value = data
  moduleLoading.value = false
}
</script>

<style scoped>
.home-view {
  max-width: 960px; margin: 0 auto; padding: 0 16px 60px;
}
.module-list {
  display: flex; flex-direction: column; gap: 16px;
}
.module-content {
  padding: 12px 0 4px;
}
.no-result { text-align: center; color: var(--text3); padding: 40px; font-size: 1em }
.skeleton-card { margin-bottom: 16px; padding: 16px; background: var(--card); border-radius: var(--radius) }
</style>
