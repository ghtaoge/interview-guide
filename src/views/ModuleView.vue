<template>
  <div class="module-view">
    <!-- 加载态 -->
    <van-skeleton v-if="loading" title :row="5" :row-width="['60%','100%','80%','90%','70%']" />

    <!-- 空模块 -->
    <div v-else-if="!module" class="not-found">
      <p>❌ 模块不存在</p>
      <van-button type="primary" @click="$router.push('/')">返回首页</van-button>
    </div>

    <!-- 模块详情 -->
    <template v-else>
      <!-- 返回按钮 + 模块内搜索 -->
      <div class="module-toolbar">
        <button class="back-btn" @click="$router.push('/')">← 返回</button>
        <SearchBox />
      </div>

      <!-- 模块头部 -->
      <div class="module-header" :style="{ background: `linear-gradient(135deg, var(--c${module.cssIndex}), ${lighten(module.cssIndex)})` }">
        <span class="mod-icon">{{ module.icon }}</span>
        <span class="mod-title">{{ module.title }}</span>
        <span class="mod-badge">{{ totalPoints }} 条知识点</span>
      </div>

      <!-- 子分类列表 -->
      <div class="sub-list">
        <SubSection
          v-for="sub in module.subs"
          :key="sub.id"
          :sub="sub"
          :module-id="module.id"
          :color-index="module.cssIndex"
          :keyword="filterStore.keyword"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useModulesStore } from '../stores/modules.js'
import { useFilterStore } from '../stores/filter.js'
import SubSection from '../components/SubSection.vue'
import SearchBox from '../components/SearchBox.vue'

const route = useRoute()
const modulesStore = useModulesStore()
const filterStore = useFilterStore()

const module = computed(() => modulesStore.moduleData.get(route.params.id))
const loading = computed(() => modulesStore.loadingModule === route.params.id)

const totalPoints = computed(() => {
  if (!module.value) return 0
  return module.value.subs.reduce((sum, s) => sum + (s.points || []).length, 0)
})

function lighten(ci) {
  const map = {
    0:'#818cf8',1:'#f87171',2:'#fbbf24',3:'#34d399',4:'#60a5fa',
    5:'#c084fc',6:'#fb923c',7:'#2dd4bf',8:'#ef4444',9:'#10b981',
    10:'#3b82f6',11:'#f97316',12:'#38bdf8',13:'#e879f9',14:'#fb7185',
    15:'#a78bfa',16:'#f43f5e',17:'#67e8f9',18:'#d8b4fe',19:'#0891b2',
    20:'#4f46e5',21:'#059669',22:'#a78bfa',23:'#fbbf24',24:'#38bdf8',
    25:'#818cf8',26:'#60a5fa',27:'#f87171',28:'#34d399',29:'#fbbf24',
    30:'#c084fc',31:'#fb923c',32:'#f87171',33:'#ffc633',34:'#3ce0ce',
    35:'#ff6c6c',36:'#2dbe91',37:'#63aaff',38:'#b384ff',39:'#36cdff',
    40:'#d07dff',41:'#ff6b4a',42:'#38bdf8'
  }
  return map[ci] || '#818cf8'
}

onMounted(async () => {
  await modulesStore.loadModule(route.params.id)
  // 从首页传递的搜索关键词
  if (route.query.keyword) {
    filterStore.setKeyword(route.query.keyword)
  }
})

// 路由变化时重新加载模块
watch(() => route.params.id, async (newId) => {
  if (newId) await modulesStore.loadModule(newId)
})
</script>

<style scoped>
.module-view {
  max-width: 960px; margin: 0 auto; padding: 0 16px 60px;
}
.module-toolbar {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 0; margin-bottom: 12px;
}
.back-btn {
  background: var(--card); color: var(--text2); border: 1px solid var(--border);
  padding: 8px 16px; border-radius: 20px; cursor: pointer; font-size: .85em;
  transition: all .2s; white-space: nowrap;
}
.back-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent) }
.module-header {
  color: #fff; padding: 20px 24px; display: flex; align-items: center; gap: 8px;
  border-radius: var(--radius); margin-bottom: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,.2);
}
.mod-icon { font-size: 1.2em }
.mod-title { flex: 1; font-size: 1.1em; font-weight: 600 }
.mod-badge { font-size: .7em; padding: 3px 12px; border-radius: 12px; background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.25) }
.not-found { text-align: center; padding: 60px; color: var(--text3) }
.sub-list { display: flex; flex-direction: column; gap: 8px }

@media (max-width: 600px) {
  .module-header { padding: 14px 16px; border-radius: 12px; margin-bottom: 10px }
  .mod-title { font-size: .92em }
  .module-view { padding: 0 10px 60px }
  .module-toolbar { padding: 8px 0; margin-bottom: 8px }
  .back-btn { padding: 6px 12px; font-size: .78em }
}
</style>
