<template>
  <!-- 移动端: 自定义详情条目 -->
  <div v-if="isMobile" class="mobile-detail" :class="{ 'has-sub': hasSub, open }">
    <div class="mobile-detail-row" @click="hasSub ? toggleSub() : null">
      <span class="mobile-num">{{ index + 1 }}</span>
      <span class="mobile-label" v-html="highlightHtml(labelText, keyword)"></span>
      <span v-if="hasSub" class="mobile-sub-arrow" :class="{ open }">▶</span>
    </div>
    <div v-if="open && hasSub" class="mobile-sub" v-html="highlightHtml(detail.desc, keyword)"></div>
  </div>

  <!-- PC端: 自定义编号卡片 -->
  <div v-else class="detail-item" :class="{ 'has-sub': hasSub, open }"
    @click.stop="hasSub ? toggleSub() : null"
  >
    <div class="detail-row">
      <span class="detail-number">{{ index + 1 }}</span>
      <span class="detail-tag" v-html="highlightHtml(labelText, keyword)"></span>
      <span v-if="hasSub" class="sub-arrow" :class="{ open }"></span>
    </div>
    <div v-show="open && hasSub" class="sub-detail" v-html="highlightHtml(detail.desc, keyword)"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDevice } from '../composables/useDevice.js'
import { useSearch } from '../composables/useSearch.js'

const props = defineProps({
  detail: Object,
  index: Number,
  keyword: String,
  colorIndex: Number
})

const { isMobile } = useDevice()
const { highlightHtml } = useSearch()

const open = ref(false)

const hasSub = computed(() =>
  (props.detail.tag || '').trim() && (props.detail.desc || '').trim() && props.detail.tag !== props.detail.desc
)

const labelText = computed(() => {
  let t = (props.detail.tag || '').trim() || (props.detail.desc || '').trim()
  t = t.replace(/^第\d+[、.]\s*/, '').replace(/^\d+[.、)]\s*/, '').replace(/^[①②③④⑤⑥⑦⑧⑨⑩]/, '')
  return t
})

function toggleSub() { open.value = !open.value }
</script>

<style scoped>
/* 移动端详情 */
.mobile-detail {
  margin: 6px 0; font-size: 1em;
  line-height: 1.8; color: var(--text2); position: relative;
  background: var(--card); border-radius: 12px; overflow: hidden;
}
.mobile-detail-row {
  display: flex; align-items: flex-start; gap: 4px;
  padding: 13px 16px 13px 40px; cursor: default;
}
.mobile-detail.has-sub .mobile-detail-row { cursor: pointer }
.mobile-detail.has-sub .mobile-label { font-weight: 600; color: var(--text) }
.mobile-detail.has-sub.open .mobile-detail-row {
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}
.mobile-num {
  position: absolute; left: 10px; top: 13px;
  width: 22px; height: 22px; border-radius: 50%; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: .72em; font-weight: 700;
  background: linear-gradient(135deg, var(--accent), #a78bfa);
}
.mobile-detail.has-sub.open .mobile-num { top: 13px }
.mobile-label { flex: 1; min-width: 0; word-break: break-word; color: var(--text2) }
.mobile-sub-arrow {
  flex-shrink: 0; font-size: .6em; color: var(--text3);
  padding: 2px 0; transition: transform .2s; align-self: center;
}
.mobile-sub-arrow.open { transform: rotate(90deg); color: var(--accent) }
.mobile-sub {
  padding: 14px 16px 16px 40px;
  font-size: .92em; color: var(--text2); line-height: 1.85;
  font-weight: 400; background: var(--bg);
  border-left: 3px solid var(--accent); margin-left: 0;
}
/* 没有子内容时,普通detail也要能点击(虽然无展开) */
.mobile-detail:not(.has-sub) .mobile-detail-row { cursor: default }

/* PC端 */
.detail-item {
  margin: 10px 0; font-size: 1em;
  line-height: 1.8; color: var(--text2); position: relative; transition: all .2s;
  background: var(--card); border-radius: 12px; border: 1px solid var(--border);
  overflow: hidden;
}
.detail-item:hover { color: var(--text); background: #f8fafc; border-color: rgba(99,102,241,.18) }
.detail-row {
  display: flex; align-items: flex-start; gap: 8px;
  padding: 14px 18px 14px 48px;
}
.detail-item.has-sub .detail-row { cursor: pointer; padding-right: 36px }
.detail-item.has-sub .detail-tag { font-weight: 650; color: var(--text) }
.detail-item.has-sub.open .detail-row {
  padding-bottom: 6px; border-bottom: 1px dashed var(--border);
}
.detail-item.has-sub.open { border-left-color: var(--accent); background: var(--bg) }
.detail-number {
  position: absolute; left: 16px; top: 14px;
  width: 20px; height: 20px; border-radius: 50%; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: .65em; font-weight: 700;
  background: linear-gradient(135deg, var(--accent), #a78bfa);
}
.detail-tag { flex: 1; min-width: 0; word-break: break-word }
.sub-arrow {
  position: absolute; right: 14px; top: 14px;
  width: 18px; height: 18px; border-radius: 50%;
  background: rgba(99,102,241,.08); color: var(--text3);
  border: 1.5px solid rgba(99,102,241,.12);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all .28s;
}
.sub-arrow::after { content: '▶'; font-size: .6em }
.sub-arrow.open { transform: rotate(90deg); background: var(--accent); color: #fff; border-color: var(--accent) }
.sub-detail {
  padding: 14px 18px 14px 48px;
  font-size: .92em; color: var(--text2); line-height: 1.8;
  background: var(--card); border-left: 3px solid var(--accent);
}
</style>
