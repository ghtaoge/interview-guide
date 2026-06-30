<template>
  <!-- 移动端: 自定义卡片（不用van-cell） -->
  <div v-if="isMobile" class="mobile-point" :class="{ open: pt.open, 'has-detail': pt.details && pt.details.length }" @click="togglePoint">
    <div class="mobile-point-row">
      <span class="mobile-tag" v-html="highlightHtml(pt.tag, keyword)"></span>
      <span class="mobile-desc" v-html="highlightHtml(pt.desc, keyword)"></span>
      <span class="mobile-hint" v-if="pt.details && pt.details.length">{{ pt.details.length }} 条</span>
    </div>
  </div>
  <!-- 展开的详情列表(移动端) -->
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
import { reactive } from 'vue'
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

function togglePoint() {
  pt.open = !pt.open
}
</script>

<style scoped>
/* 移动端知识点 */
.mobile-point {
  padding: 10px 14px; margin: 4px 0; background: var(--card);
  border-radius: 10px; border-left: 3px solid var(--border);
  font-size: .92em; cursor: pointer; transition: all .2s;
}
.mobile-point.has-detail { border-left-color: var(--accent); font-weight: 500 }
.mobile-point.open { border-left-color: var(--accent); background: var(--bg); box-shadow: 0 2px 8px rgba(0,0,0,.06) }
.mobile-point-row { display: flex; gap: 8px; align-items: center }
.mobile-tag { flex-shrink: 0; font-weight: 600; color: var(--text); border-right: 2px solid var(--border); padding-right: 4px }
.mobile-point.open .mobile-tag { border-right-color: var(--accent) }
.mobile-desc { color: var(--text2); flex: 1; line-height: 1.6; word-break: break-word }
.mobile-hint {
  flex-shrink: 0; padding: 2px 8px; border-radius: 10px;
  background: rgba(13,148,136,.1); color: var(--accent);
  font-size: .7em; font-weight: 600;
}
.mobile-point.open .mobile-hint { background: var(--accent); color: #fff }
.mobile-details { padding: 4px 0 4px 16px }

/* PC端 */
.point {
  padding: 11px 14px; margin: 6px 0; background: var(--card);
  border-radius: 10px; border-left: 3px solid transparent;
  font-size: .95em; position: relative; cursor: pointer; transition: all .22s;
}
.point:hover { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.06) }
.point.open { border-left-color: var(--accent); box-shadow: 0 2px 12px rgba(52,112,255,.12) }
.point-row { display: flex; gap: 12px; align-items: center }
.point .tag { flex-shrink: 0; font-weight: 650; color: var(--text); border-right: 2px solid var(--border); padding-right: 6px; margin-right: 2px }
.point.open .tag { border-right-color: var(--accent) }
.point .desc { color: var(--text2); flex: 1; line-height: 1.75; font-size: .96em; word-break: break-word }
.expand-hint {
  flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;
  padding: 3px 10px; border-radius: 14px; background: rgba(99,102,241,.08);
  color: var(--text3); border: 1.5px solid rgba(99,102,241,.12);
  font-size: .7em; font-weight: 600;
}
.point.open .expand-hint { background: var(--accent); color: #fff; border-color: var(--accent) }
.detail-wrap { margin-top: 14px }
.detail-list { padding: 12px }
</style>
