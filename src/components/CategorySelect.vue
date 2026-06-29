<template>
  <!-- 移动端: 快捷tag + 底部弹出抽屉 -->
  <div v-if="isMobile" class="mobile-category">
    <div class="quick-tags">
      <button class="tag-chip" :class="{ active: selectedTag === '' }" @click="onTagChange('')">全部</button>
      <button
        v-for="q in quickItems" :key="q.value"
        class="tag-chip" :class="{ active: selectedTag === q.value }"
        @click="onTagChange(q.value)"
      >{{ q.emoji }} {{ q.text }}</button>
      <button class="tag-chip more-btn" :class="{ active: drawerOpen }" @click="drawerOpen = true">更多▼</button>
    </div>

    <!-- 底部弹出抽屉 -->
    <Transition name="drawer">
      <div v-if="drawerOpen" class="drawer-overlay" @click.self="drawerOpen = false">
        <div class="drawer-panel">
          <div class="drawer-header">
            <span>选择模块</span>
            <button class="drawer-close" @click="drawerOpen = false">✕</button>
          </div>
          <div class="drawer-body">
            <!-- 全部选项 -->
            <button class="drawer-item all-item" :class="{ active: selectedTag === '' }" @click="pickTag('')">✨ 全部模块</button>
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

  <!-- PC端: 下拉select -->
  <select v-else id="tag-select" v-model="selectedTag" @change="onSelectChange">
    <option value="">✨ 全部模块</option>
    <optgroup label="☕ 后端">
      <option value="Java 基础">☕ Java基础</option>
      <option value="集合">📚 集合</option>
      <option value="并发">⚡ 并发</option>
      <option value="JVM">🧩 JVM</option>
      <option value="IO">🔄 IO</option>
      <option value="计算机基础">💻 计算机基础</option>
      <option value="MySQL">🗄️ MySQL</option>
      <option value="Redis">📐 Redis</option>
      <option value="Spring">🌐 Spring</option>
    </optgroup>
    <optgroup label="🚀 分布式与架构">
      <option value="分布式系统">🚀 分布式系统</option>
      <option value="高性能">⚡ 高性能</option>
      <option value="高可用">🛡️ 高可用</option>
      <option value="ElasticSearch">🔍 ElasticSearch</option>
      <option value="MongoDB">🍃 MongoDB</option>
      <option value="PostgreSQL">🐘 PostgreSQL</option>
    </optgroup>
    <optgroup label="🎨 前端">
      <option value="JavaScript">🟨 JavaScript</option>
      <option value="Vue2">💚 Vue2</option>
      <option value="Vue3">💚 Vue3</option>
      <option value="TypeScript">🔷 TypeScript</option>
      <option value="HTML与CSS">🎨 HTML/CSS</option>
      <option value="场景题">🎯 场景题</option>
    </optgroup>
    <optgroup label="🐳 运维与工具">
      <option value="Docker">🐳 Docker</option>
      <option value="Kubernetes">☸️ K8s</option>
      <option value="Nginx">🟢 Nginx</option>
      <option value="Git">🔧 Git</option>
      <option value="CI/CD">🔄 CI/CD</option>
    </optgroup>
    <optgroup label="🔧 中间件">
      <option value="消息队列">📨 消息队列</option>
      <option value="Nacos/Sentinel">🛡️ Nacos/Sentinel</option>
      <option value="Dubbo">🔗 Dubbo</option>
    </optgroup>
    <optgroup label="🤖 AI与面试">
      <option value="AI与Agent">🤖 AI与Agent</option>
      <option value="HR面试">💼 HR面试</option>
    </optgroup>
  </select>
</template>

<script setup>
import { ref } from 'vue'
import { useFilterStore } from '../stores/filter.js'
import { useDevice } from '../composables/useDevice.js'

const filterStore = useFilterStore()
const { isMobile } = useDevice()
const selectedTag = ref(filterStore.tagFilter)
const drawerOpen = ref(false)

// 快捷tag：最常用的几个
const quickItems = [
  { value: 'Java 基础', emoji: '☕', text: 'Java' },
  { value: '集合', emoji: '📚', text: '集合' },
  { value: '并发', emoji: '⚡', text: '并发' },
  { value: 'MySQL', emoji: '🗄️', text: 'MySQL' },
  { value: 'Redis', emoji: '📐', text: 'Redis' },
  { value: 'Spring', emoji: '🌐', text: 'Spring' },
  { value: '分布式系统', emoji: '🚀', text: '分布式' },
  { value: 'Vue3', emoji: '💚', text: 'Vue3' },
  { value: 'AI与Agent', emoji: '🤖', text: 'AI' },
]

// 全部分类分组数据
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

function onTagChange(val) {
  selectedTag.value = val
  filterStore.setTagFilter(val)
}

function onSelectChange() {
  filterStore.setTagFilter(selectedTag.value)
}

function pickTag(val) {
  selectedTag.value = val
  filterStore.setTagFilter(val)
  drawerOpen.value = false
}
</script>

<style scoped>
/* 移动端快捷tag条 */
.quick-tags {
  display: flex; gap: 6px; overflow-x: auto; padding: 6px 0;
  -webkit-overflow-scrolling: touch; scrollbar-width: none;
}
.quick-tags::-webkit-scrollbar { display: none }
.tag-chip {
  padding: 5px 10px; border-radius: 16px; font-size: .82em;
  background: rgba(255,255,255,.12); color: #fff;
  border: 1px solid rgba(255,255,255,.2);
  cursor: pointer; transition: all .18s; white-space: nowrap;
  flex-shrink: 0; line-height: 1.2;
}
.tag-chip.active {
  background: #fff; color: #0d9488;
  border-color: #fff; font-weight: 600;
}
.more-btn {
  background: rgba(255,255,255,.18); border-color: rgba(255,255,255,.35);
  font-weight: 500;
}
.more-btn.active {
  background: rgba(255,255,255,.35);
}

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

.all-item {
  display: flex; align-items: center; justify-content: center;
  padding: 10px 16px; margin-bottom: 12px; border-radius: 12px;
  background: var(--bg); font-size: .9em; font-weight: 600;
  color: var(--text2); border: 1px solid var(--border);
  cursor: pointer; transition: all .18s; width: 100%;
}
.all-item.active {
  background: #0d9488; color: #fff; border-color: #0d9488;
}

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

/* PC端: 下拉select - 胶囊按钮风格 */
#tag-select {
  font-size: 12px; padding: 7px 14px; border-radius: 20px;
  border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18);
  color: #fff; min-height: 30px; cursor: pointer; outline: none;
  max-width: 160px; transition: all .2s;
  -webkit-appearance: none; appearance: none;
}
#tag-select:focus { border-color: rgba(255,255,255,.5); background: rgba(255,255,255,.25) }
#tag-select option { background: var(--card); color: var(--text); padding: 6px }
#tag-select optgroup { color: var(--accent); font-weight: 600; font-size: 11px }
</style>
