<template>
  <!-- 移动端: van-cell -->
  <van-cell v-if="isMobile" clickable @click="toggleSub">
    <template #title>
      <span v-html="highlightHtml(labelText, keyword)"></span>
    </template>
    <template #right-icon>
      <van-icon v-if="detail.desc && detail.tag" name="arrow" :class="{ rotated: open }" />
    </template>
  </van-cell>
  <!-- sub-detail展开 -->
  <div v-if="isMobile && open && detail.desc" class="mobile-sub-detail" v-html="highlightHtml(detail.desc, keyword)"></div>

  <!-- PC端: 自定义编号卡片 -->
  <div v-else class="detail-item" :class="{ 'has-sub': detail.tag && detail.desc, open }"
    @click="detail.tag && detail.desc ? toggleSub() : null"
  >
    <span class="detail-number">{{ index + 1 }}</span>
    <span class="detail-tag" v-html="highlightHtml(labelText, keyword)"></span>
    <span v-if="detail.tag && detail.desc" class="sub-arrow" :class="{ open }"></span>
    <div v-if="open && detail.desc" class="sub-detail" v-html="highlightHtml(detail.desc, keyword)"></div>
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

const labelText = computed(() => {
  let t = (props.detail.tag || '').trim() || (props.detail.desc || '').trim()
  t = t.replace(/^第\d+[、.]\s*/, '').replace(/^\d+[.、)]\s*/, '').replace(/^[①②③④⑤⑥⑦⑧⑨⑩]/, '')
  return t
})

function toggleSub() { open.value = !open.value }
</script>

<style scoped>
.detail-item {
  padding: 14px 18px 14px 48px; margin: 10px 0; font-size: .95em;
  line-height: 1.8; color: var(--text2); position: relative; transition: all .2s;
  background: var(--card); border-radius: 12px; border: 1px solid var(--border);
}
.detail-item:hover { color: var(--text); background: #f8fafc; border-color: rgba(99,102,241,.18) }
.detail-item.has-sub { cursor: pointer; font-weight: 600; color: var(--text); padding-right: 36px }
.detail-item.has-sub.open { border-left-color: var(--accent); background: var(--bg) }
.detail-number {
  position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
  width: 20px; height: 20px; border-radius: 50%; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: .65em; font-weight: 700;
  background: linear-gradient(135deg, var(--accent), #a78bfa);
}
.sub-arrow {
  position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
  width: 18px; height: 18px; border-radius: 50%;
  background: rgba(99,102,241,.08); color: var(--text3);
  border: 1.5px solid rgba(99,102,241,.12);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all .28s;
}
.sub-arrow::after { content: '▶'; font-size: .6em }
.sub-arrow.open { transform: translateY(-50%) rotate(90deg); background: var(--accent); color: #fff; border-color: var(--accent) }
.sub-detail {
  display: none; margin: 12px 0 4px -10px; padding: 12px 16px;
  background: var(--card); border-radius: 10px; font-size: .84em;
  color: var(--text2); border-left: 3px solid var(--accent);
}
.detail-item.has-sub.open .sub-detail { display: block }
.mobile-sub-detail {
  padding: 10px 16px; font-size: .84em; color: var(--text2);
  background: var(--card); border-radius: 8px; margin: 4px 16px;
  border-left: 3px solid var(--accent); line-height: 1.8;
}
.rotated { transform: rotate(90deg) }
</style>
