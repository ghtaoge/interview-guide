<template>
  <!-- 移动端: 自定义详情条目 -->
  <div v-if="isMobile" class="mobile-detail" :class="{ 'has-sub': hasSub, open }" @click="hasSub ? toggleSub() : null">
    <span class="mobile-num">{{ index + 1 }}</span>
    <span class="mobile-label" v-html="highlightHtml(labelText, keyword)"></span>
    <span v-if="hasSub" class="mobile-sub-arrow" :class="{ open }">▶</span>
    <div v-if="open && hasSub" class="mobile-sub" v-html="highlightHtml(detail.desc, keyword)"></div>
  </div>

  <!-- PC端: 自定义编号卡片 -->
  <div v-else class="detail-item" :class="{ 'has-sub': hasSub, open }"
    @click.stop="hasSub ? toggleSub() : null"
  >
    <span class="detail-number">{{ index + 1 }}</span>
    <span class="detail-tag" v-html="highlightHtml(labelText, keyword)"></span>
    <span v-if="hasSub" class="sub-arrow" :class="{ open }"></span>
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
  padding: 12px 14px 12px 36px; margin: 4px 0; font-size: .92em;
  line-height: 1.8; color: var(--text2); position: relative;
  background: var(--card); border-radius: 10px;
}
.mobile-detail.has-sub { cursor: pointer; font-weight: 600; color: var(--text) }
.mobile-detail.has-sub.open { background: var(--bg); border-left: 2px solid var(--accent) }
.mobile-num {
  position: absolute; left: 10px; top: 12px;
  width: 20px; height: 20px; border-radius: 50%; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: .65em; font-weight: 700;
  background: linear-gradient(135deg, var(--accent), #a78bfa);
}
.mobile-label { display: inline }
.mobile-sub-arrow {
  float: right; font-size: .55em; color: var(--text3);
  padding: 2px 0; transition: transform .2s;
}
.mobile-sub-arrow.open { transform: rotate(90deg); color: var(--accent) }
.mobile-sub {
  margin: 8px 0 2px; padding: 12px 12px;
  background: var(--bg); border-radius: 8px; font-size: .9em;
  color: var(--text2); border-left: 2px solid var(--accent); line-height: 1.8;
  font-weight: 400;
}

/* PC端 */
.detail-item {
  padding: 14px 18px 14px 48px; margin: 10px 0; font-size: 1em;
  line-height: 1.8; color: var(--text2); position: relative; transition: all .2s;
  background: var(--card); border-radius: 12px; border: 1px solid var(--border);
}
.detail-item:hover { color: var(--text); background: #f8fafc; border-color: rgba(99,102,241,.18) }
.detail-item.has-sub { cursor: pointer; font-weight: 600; color: var(--text); padding-right: 36px }
.detail-item.has-sub.open { border-left-color: var(--accent); background: var(--bg) }
.detail-number {
  position: absolute; left: 16px; top: 14px;
  width: 20px; height: 20px; border-radius: 50%; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: .65em; font-weight: 700;
  background: linear-gradient(135deg, var(--accent), #a78bfa);
}
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
  margin: 12px 0 4px -10px; padding: 12px 16px;
  background: var(--card); border-radius: 10px; font-size: .92em;
  color: var(--text2); border-left: 3px solid var(--accent);
  line-height: 1.8;
}
</style>
