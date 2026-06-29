<template>
  <!-- 移动端: Vant Collapse -->
  <van-collapse v-if="isMobile" v-model="activeNames">
    <van-collapse-item :title="sub.title" :name="sub.id">
      <template #value>
        <van-tag type="primary" size="small" round>{{ filteredPoints.length }}</van-tag>
      </template>
      <PointItem
        v-for="pt in filteredPoints"
        :key="pt.id"
        :point="pt"
        :color-index="colorIndex"
        :keyword="keyword"
      />
    </van-collapse-item>
  </van-collapse>

  <!-- PC端: 自定义手风琴 -->
  <div v-else class="sub-section" :class="{ open: isOpen }">
    <div class="sub-head" @click="toggle">
      <span class="dot" :style="{ background: `var(--c${colorIndex})` }"></span>
      <span class="sub-title">{{ sub.title }}</span>
      <span class="count">{{ filteredPoints.length }}</span>
      <span class="arrow">▶</span>
    </div>
    <div class="points" v-if="isOpen">
      <PointItem
        v-for="pt in filteredPoints"
        :key="pt.id"
        :point="pt"
        :color-index="colorIndex"
        :keyword="keyword"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'
import { useDevice } from '../composables/useDevice.js'
import { useFilterStore } from '../stores/filter.js'
import { useSearch } from '../composables/useSearch.js'
import PointItem from './PointItem.vue'

const props = defineProps({
  sub: Object,
  moduleId: String,
  colorIndex: Number,
  keyword: String
})

const { isMobile } = useDevice()
const filterStore = useFilterStore()
const { matchText } = useSearch()

const activeNames = ref([])
const isOpen = ref(false)
const expandCommand = inject('expandCommand', ref('none'))

watch(expandCommand, (cmd) => {
  if (cmd === 'expand') {
    isOpen.value = true
    activeNames.value = [props.sub.id]
  } else if (cmd === 'collapse') {
    isOpen.value = false
    activeNames.value = []
  }
})

function toggle() { isOpen.value = !isOpen.value }

const filteredPoints = computed(() => {
  if (!filterStore.keyword) return props.sub.points
  return props.sub.points.filter(pt =>
    matchText(pt.tag, filterStore.keyword) || matchText(pt.desc, filterStore.keyword)
  )
})
</script>

<style scoped>
/* PC端 */
.sub-section { background: var(--card); border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow) }
.sub-head {
  padding: 12px 22px 12px 28px; font-size: .9em; font-weight: 600;
  color: var(--text); cursor: pointer; display: flex; align-items: center; gap: 8px;
  background: var(--bg); transition: background .15s;
}
.sub-head:hover { background: #f5f7fa }
.sub-head .dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0 }
.sub-head .sub-title { flex: 1; min-width: 0 }
.sub-head .count { font-size: .7em; padding: 3px 10px; border-radius: 999px; background: rgba(99,102,241,.07); color: var(--accent); border: 1px solid rgba(99,102,241,.12) }
.sub-head .arrow { margin-left: auto; font-size: .65em; color: var(--text3); transition: transform .25s }
.sub-section.open .arrow { transform: rotate(90deg) }
.points { padding: 4px 22px 14px }

/* 移动端van-collapse样式增强 */
:deep(.van-collapse-item) { margin-bottom: 6px; border-radius: 12px; overflow: hidden }
:deep(.van-collapse-item__title) { font-weight: 600; font-size: .88em }
:deep(.van-collapse-item__content) { padding: 8px 12px }
</style>
