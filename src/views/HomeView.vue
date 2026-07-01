<template>
  <div class="home-view">
    <!-- 加载骨架屏 -->
    <template v-if="modulesLoading">
      <van-skeleton v-for="i in 6" :key="i" title :row="2" row-width="60%" class="skeleton-card" />
    </template>

    <!-- 搜索加载 -->
    <template v-else-if="filterStore.searchLoading">
      <div class="search-loading-hint">
        <van-loading size="24px">搜索内容中...</van-loading>
      </div>
    </template>

    <!-- 模块列表 -->
    <template v-else>
      <div class="module-list">
        <div v-for="mod in displayedModules" :key="mod.id" class="module-wrapper">
          <ModuleCard :mod="mod" :expanded="isModuleExpanded(mod.id)" @toggle="toggleModule(mod.id)" />

          <!-- 展开内容区：数据未加载时显示loading，已加载时直接显示内容(带渐入动画) -->
          <div v-if="isModuleExpanded(mod.id)" class="module-content">
            <div v-if="!getModuleData(mod.id)" class="content-loader">
              <van-loading type="spinner" color="#0d9488" vertical>加载中...</van-loading>
            </div>
            <div v-else class="content-inner">
              <SubSection
                v-for="sub in getModuleData(mod.id).subs"
                :key="sub.id"
                :sub="sub"
                :module-id="mod.id"
                :color-index="mod.cssIndex"
                :keyword="filterStore.keyword"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="displayedModules.length === 0 && (filterStore.keyword || filterStore.tagFilter)" class="no-result">
        🔍 未找到匹配 "{{ filterStore.keyword || filterStore.tagFilter }}" 的内容
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import { useModulesStore } from '../stores/modules.js'
import { useFilterStore } from '../stores/filter.js'
import ModuleCard from '../components/ModuleCard.vue'
import SubSection from '../components/SubSection.vue'

const modulesStore = useModulesStore()
const filterStore = useFilterStore()

const modulesLoading = computed(() => modulesStore.moduleIndex.length === 0)
const expandedId = ref(null)
const searchExpandedIds = ref([]) // 搜索模式下展开的模块ID列表

const isSearchMode = computed(() => !!filterStore.keyword && !filterStore.tagFilter)

function isModuleExpanded(id) {
  if (isSearchMode.value) return searchExpandedIds.value.includes(id)
  return expandedId.value === id
}

function getModuleData(id) {
  return modulesStore.moduleData.get(id) || null
}

// 关键词搜索时：加载所有模块数据 + 自动展开匹配模块
watch(() => filterStore.keyword, async (kw) => {
  if (kw && !filterStore.tagFilter) {
    filterStore.searchLoading = true
    await modulesStore.loadAllForSearch()
    filterStore.searchLoading = false
    // 自动展开所有匹配模块
    searchExpandedIds.value = displayedModules.value.map(m => m.id)
  } else {
    searchExpandedIds.value = []
    expandedId.value = null
  }
}, { immediate: false })

async function toggleModule(id) {
  if (isSearchMode.value) {
    // 搜索模式：toggle展开/收起
    if (searchExpandedIds.value.includes(id)) {
      searchExpandedIds.value = searchExpandedIds.value.filter(x => x !== id)
    } else {
      searchExpandedIds.value = [...searchExpandedIds.value, id]
      if (!modulesStore.moduleData.has(id)) {
        await modulesStore.loadModule(id)
      }
    }
    return
  }
  // 正常模式：手风琴(一次只展开一个)
  if (expandedId.value === id) {
    expandedId.value = null
    return
  }
  expandedId.value = id
  // 如果数据未缓存，加载模块数据
  if (!modulesStore.moduleData.has(id)) {
    await modulesStore.loadModule(id)
    await nextTick() // 确保DOM更新完毕再结束，避免白屏闪烁
  }
}

const displayedModules = computed(() => {
  const index = modulesStore.sortedIndex
  if (!filterStore.keyword && !filterStore.tagFilter) return index

  if (filterStore.tagFilter) {
    return index.filter(m => m.tag === filterStore.tagFilter)
  }

  // 关键词搜索：标题匹配 + 内容匹配(如数据已加载)
  const kw = filterStore.keyword.toLowerCase()
  return index.filter(m => {
    // 标题/tag匹配
    if (m.title.toLowerCase().includes(kw) || m.tag.toLowerCase().includes(kw)) return true
    // 内容匹配(需模块数据已加载)
    const data = modulesStore.moduleData.get(m.id)
    if (data && data.subs) {
      return filterStore.matchModuleContent({ ...m, subs: data.subs })
    }
    return false
  })
})
</script>

<style scoped>
.home-view {
  max-width: 960px; margin: 0 auto; padding: 20px 16px 60px;
}
.module-list {
  display: flex; flex-direction: column; gap: 16px;
}
.module-content {
  padding: 12px 0 4px;
}
.content-loader {
  padding: 32px 0; text-align: center;
}
.content-inner {
  animation: contentFadeIn .3s ease-out;
}
@keyframes contentFadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.no-result { text-align: center; color: var(--text3); padding: 40px; font-size: 1em }
.skeleton-card { margin-bottom: 16px; padding: 16px; background: var(--card); border-radius: var(--radius) }
.search-loading-hint {
  display: flex; align-items: center; justify-content: center;
  padding: 40px 0; color: var(--text3);
}

/* 移动端优化 */
@media (max-width: 600px) {
  .home-view { padding: 16px 14px 50px }
  .module-list { gap: 12px }
  .module-content { padding: 8px 0 2px }
  .skeleton-card { margin-bottom: 10px; padding: 14px; background: var(--card); border-radius: 14px }
}
</style>
