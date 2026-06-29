<template>
  <!-- 移动端: van-cell -->
  <van-cell v-if="isMobile" :title="mod.title" :value="mod.pointCount + ' 条'" is-link
    :label="mod.subCount + ' 个子分类'"
    @click="$emit('toggle')"
  >
    <template #icon>
      <span class="card-icon">{{ mod.icon }}</span>
    </template>
    <template #right-icon>
      <span class="expand-arrow" :class="{ open: expanded }">▶</span>
    </template>
  </van-cell>

  <!-- PC端: 自定义卡片 -->
  <div v-else class="module-card" @click="$emit('toggle')">
    <div class="module-head" :style="{ background: `linear-gradient(135deg, var(--c${mod.cssIndex}), ${lightenColor(mod.cssIndex)})` }">
      <span class="icon">{{ mod.icon }}</span>
      <span class="title">{{ mod.title }}</span>
      <span class="badge">{{ mod.pointCount }} 条</span>
      <span class="arrow" :class="{ open: expanded }">▶</span>
    </div>
  </div>
</template>

<script setup>
import { useDevice } from '../composables/useDevice.js'

defineProps({ mod: Object, expanded: Boolean })
defineEmits(['toggle'])

const { isMobile } = useDevice()

function lightenColor(ci) {
  const map = {
    0: '#818cf8', 1: '#f87171', 2: '#fbbf24', 3: '#34d399', 4: '#60a5fa',
    5: '#c084fc', 6: '#fb923c', 7: '#2dd4bf', 8: '#ef4444', 9: '#10b981',
    10: '#3b82f6', 11: '#f97316', 12: '#38bdf8', 13: '#e879f9', 14: '#fb7185',
    15: '#a78bfa', 16: '#f43f5e', 17: '#67e8f9', 18: '#d8b4fe', 19: '#0891b2',
    20: '#4f46e5', 21: '#059669', 22: '#a78bfa', 23: '#fbbf24', 24: '#38bdf8',
    25: '#818cf8', 26: '#60a5fa', 27: '#f87171', 28: '#34d399', 29: '#fbbf24',
    30: '#c084fc', 31: '#fb923c', 32: '#f87171', 33: '#ffc633', 34: '#3ce0ce',
    35: '#ff6c6c', 36: '#2dbe91', 37: '#63aaff', 38: '#b384ff', 39: '#36cdff',
    40: '#d07dff', 41: '#ff6b4a', 42: '#38bdf8'
  }
  return map[ci] || '#818cf8'
}
</script>

<style scoped>
.module-card {
  background: var(--card); border-radius: var(--radius);
  overflow: hidden; box-shadow: var(--shadow);
  cursor: pointer; transition: all .2s;
}
.module-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,.08); transform: translateY(-2px) }
.module-head {
  padding: 16px 24px; color: #fff; font-size: 1.05em; font-weight: 600;
  display: flex; align-items: center; gap: 8px; user-select: none;
}
.module-head .icon { font-size: 1em; flex-shrink: 0 }
.module-head .title { flex: 1 }
.module-head .badge { font-size: .7em; padding: 3px 12px; border-radius: 12px; background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.25); font-weight: 500 }
.arrow { margin-left: auto; font-size: .8em; opacity: .8; transition: transform .25s }
.arrow.open { transform: rotate(90deg) }
.expand-arrow { font-size: .7em; transition: transform .25s }
.expand-arrow.open { transform: rotate(90deg) }
.card-icon { font-size: 1.2em; margin-right: 6px }
</style>
