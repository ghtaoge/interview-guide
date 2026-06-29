<template>
  <!-- 移动端: van-cell -->
  <van-cell v-if="isMobile" clickable @click="togglePoint">
    <template #title>
      <span v-html="highlightHtml(pt.tag, keyword)"></span>
    </template>
    <template #label>
      <span v-if="pt.open" v-html="highlightHtml(pt.desc, keyword)"></span>
    </template>
    <template #right-icon>
      <van-tag v-if="pt.details && pt.details.length" type="primary" size="small" round>
        {{ pt.details.length }} 条
      </van-tag>
    </template>
  </van-cell>
  <div v-if="isMobile && pt.open && pt.details && pt.details.length" class="mobile-details">
    <DetailItem v-for="(d, i) in pt.details" :key="d.id" :detail="d" :index="i" :keyword="keyword" :color-index="colorIndex" />
  </div>

  <!-- PC端: 自定义卡片 -->
  <div v-else class="point has-detail" :class="{ open: pt.open }"
    @click="togglePoint"
  >
    <div class="point-row">
      <span class="tag" v-html="highlightHtml(pt.tag, keyword)"></span>
      <span class="desc" v-html="highlightHtml(pt.desc, keyword)"></span>
      <span class="expand-hint" v-if="pt.details && pt.details.length">
        {{ pt.details.length }} 条
      </span>
    </div>
    <div class="detail-wrap" v-if="pt.open && pt.details && pt.details.length">
      <DetailItem v-for="(d, i) in pt.details" :key="d.id" :detail="d" :index="i" :keyword="keyword" :color-index="colorIndex" />
    </div>
  </div>
</template>

<script setup>
import { reactive, inject, watch } from 'vue'
import { useDevice } from '../composables/useDevice.js'
import { useSearch } from '../composables/useSearch.js'
import DetailItem from './DetailItem.vue'

const props = defineProps({
  point: Object,
  colorIndex: Number,
  keyword: String
})

const { isMobile } = useDevice()
const { highlightHtml } = useSearch()

const pt = reactive({ ...props.point, open: false })

const expandCommand = inject('expandCommand', ref('none'))
watch(expandCommand, (cmd) => {
  if (cmd === 'expand') pt.open = true
  else if (cmd === 'collapse') pt.open = false
})

function togglePoint() {
  pt.open = !pt.open
}
</script>

<style scoped>
.point {
  padding: 11px 14px; margin: 6px 0; background: var(--card);
  border-radius: 10px; border-left: 3px solid transparent;
  font-size: .87em; position: relative; cursor: pointer; transition: all .22s;
}
.point:hover { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.06) }
.point.open { border-left-color: var(--accent); box-shadow: 0 2px 12px rgba(52,112,255,.12) }
.point-row { display: flex; gap: 12px; align-items: center }
.point .tag { flex-shrink: 0; font-weight: 650; color: var(--text); border-right: 2px solid var(--border); padding-right: 6px; margin-right: 2px }
.point.open .tag { border-right-color: var(--accent) }
.point .desc { color: var(--text2); flex: 1; line-height: 1.75; font-size: .93em; word-break: break-word }
.expand-hint {
  flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;
  padding: 3px 10px; border-radius: 14px; background: rgba(99,102,241,.08);
  color: var(--text3); border: 1.5px solid rgba(99,102,241,.12);
  font-size: .7em; font-weight: 600;
}
.point.open .expand-hint { background: var(--accent); color: #fff; border-color: var(--accent) }
.detail-wrap { margin-top: 14px }
.detail-list { padding: 12px }
.mobile-details { padding: 8px 16px }
</style>
