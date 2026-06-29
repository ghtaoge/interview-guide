<template>
  <!-- 移动端: 小图标按钮触发底部抽屉 -->
  <div v-if="isMobile" class="mobile-category">
    <button class="filter-btn" @click="drawerOpen = true">📂</button>

    <!-- 底部弹出抽屉 -->
    <Transition name="drawer">
      <div v-if="drawerOpen" class="drawer-overlay" @click.self="drawerOpen = false">
        <div class="drawer-panel">
          <div class="drawer-header">
            <span>选择模块</span>
            <button class="drawer-close" @click="drawerOpen = false">✕</button>
          </div>
          <div class="drawer-body">
            <!-- 分组 -->
            <div v-for="group in categoryGroups" :key="group.label" class="drawer-group">
              <div class="group-label">{{ group.label }}</div>
              <div class="group-grid">
                <button
                  v-for="item in group.items" :key="item.value"
                  class="drawer-item" :class="{ active: selectedTag === item.value }"
                  @click="pickTag(item.value)"
                >{{ item.emoji }} {{ item.text }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>

  <!-- PC端: 不渲染分类选择 -->
</template>

<script setup>
import { ref } from 'vue'
import { useFilterStore } from '../stores/filter.js'
import { useDevice } from '../composables/useDevice.js'

const filterStore = useFilterStore()
const { isMobile } = useDevice()
const selectedTag = ref(filterStore.tagFilter)
const drawerOpen = ref(false)

const categoryGroups = [
  {
    label: '☕ 后端',
    items: [
      { value: 'Java 基础', emoji: '☕', text: 'Java基础' },
      { value: '集合', emoji: '📚', text: '集合' },
      { value: '并发', emoji: '⚡', text: '并发' },
      { value: 'JVM', emoji: '🧩', text: 'JVM' },
      { value: 'IO', emoji: '🔄', text: 'IO' },
      { value: '计算机基础', emoji: '💻', text: '计算机基础' },
      { value: 'MySQL', emoji: '🗄️', text: 'MySQL' },
      { value: 'Redis', emoji: '📐', text: 'Redis' },
      { value: 'Spring', emoji: '🌐', text: 'Spring' },
    ]
  },
  {
    label: '🚀 分布式与架构',
    items: [
      { value: '分布式系统', emoji: '🚀', text: '分布式系统' },
      { value: '高性能', emoji: '⚡', text: '高性能' },
      { value: '高可用', emoji: '🛡️', text: '高可用' },
      { value: 'ElasticSearch', emoji: '🔍', text: 'ES' },
      { value: 'MongoDB', emoji: '🍃', text: 'MongoDB' },
      { value: 'PostgreSQL', emoji: '🐘', text: 'PostgreSQL' },
    ]
  },
  {
    label: '🎨 前端',
    items: [
      { value: 'JavaScript', emoji: '🟨', text: 'JavaScript' },
      { value: 'Vue2', emoji: '💚', text: 'Vue2' },
      { value: 'Vue3', emoji: '💚', text: 'Vue3' },
      { value: 'TypeScript', emoji: '🔷', text: 'TypeScript' },
      { value: 'HTML与CSS', emoji: '🎨', text: 'HTML/CSS' },
      { value: '场景题', emoji: '🎯', text: '场景题' },
    ]
  },
  {
    label: '🐳 运维与工具',
    items: [
      { value: 'Docker', emoji: '🐳', text: 'Docker' },
      { value: 'Kubernetes', emoji: '☸️', text: 'K8s' },
      { value: 'Nginx', emoji: '🟢', text: 'Nginx' },
      { value: 'Git', emoji: '🔧', text: 'Git' },
      { value: 'CI/CD', emoji: '🔄', text: 'CI/CD' },
    ]
  },
  {
    label: '🔧 中间件',
    items: [
      { value: '消息队列', emoji: '📨', text: '消息队列' },
      { value: 'Nacos/Sentinel', emoji: '🛡️', text: 'Nacos/Sentinel' },
      { value: 'Dubbo', emoji: '🔗', text: 'Dubbo' },
    ]
  },
  {
    label: '🤖 AI与面试',
    items: [
      { value: 'AI与Agent', emoji: '🤖', text: 'AI与Agent' },
      { value: 'HR面试', emoji: '💼', text: 'HR面试' },
    ]
  },
]

function pickTag(val) {
  selectedTag.value = selectedTag.value === val ? '' : val
  filterStore.setTagFilter(selectedTag.value)
  drawerOpen.value = false
}
</script>

<style scoped>
/* 移动端: 小图标按钮 */
.filter-btn {
  width: 32px; height: 32px; border-radius: 50%;
  background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.25);
  color: #fff; font-size: .9em; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all .18s; flex-shrink: 0;
}
.filter-btn:hover { background: rgba(255,255,255,.25) }

/* 底部弹出抽屉 */
.drawer-overlay {
  position: fixed; inset: 0; z-index: 999;
  background: rgba(0,0,0,.4); display: flex;
  align-items: flex-end; justify-content: center;
}
.drawer-panel {
  width: 100%; max-height: 80vh; background: var(--card);
  border-radius: 16px 16px 0 0; overflow-y: auto;
  animation: slideUp .28s ease-out;
}
.drawer-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 16px; border-bottom: 1px solid var(--border);
  font-weight: 600; font-size: .9em; color: var(--text);
  position: sticky; top: 0; background: var(--card); z-index: 1;
}
.drawer-close {
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(0,0,0,.06); border: none; cursor: pointer;
  font-size: .8em; color: var(--text3); display: flex;
  align-items: center; justify-content: center;
  transition: all .15s;
}
.drawer-close:hover { background: rgba(0,0,0,.12); color: var(--text) }
.drawer-body { padding: 8px 16px 24px }

.drawer-group { margin-bottom: 8px }
.group-label {
  font-size: .78em; font-weight: 600; color: var(--accent);
  padding: 6px 0 4px; opacity: .85;
}
.group-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.drawer-item {
  padding: 8px 6px; border-radius: 10px; font-size: .82em;
  background: var(--bg); color: var(--text2);
  border: 1px solid var(--border); cursor: pointer;
  transition: all .18s; text-align: center; line-height: 1.35;
  display: flex; align-items: center; justify-content: center;
  gap: 4px;
}
.drawer-item.active {
  background: #0d9488; color: #fff; border-color: #0d9488;
  font-weight: 600;
}

/* 抽屉动画 */
.drawer-enter-active { animation: fadeIn .2s ease-out }
.drawer-leave-active { animation: fadeOut .2s ease-in }

@keyframes slideUp {
  from { transform: translateY(100%) }
  to { transform: translateY(0) }
}
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes fadeOut {
  from { opacity: 1 }
  to { opacity: 0 }
}
</style>
