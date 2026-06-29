<template>
  <!-- 移动端: 横向滚动tag标签条 -->
  <div v-if="isMobile" class="mobile-tags">
    <button class="tag-chip" :class="{ active: selectedTag === '' }" @click="onTagChange('')">全部</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'Java 基础' }" @click="onTagChange('Java 基础')">☕</button>
    <button class="tag-chip" :class="{ active: selectedTag === '集合' }" @click="onTagChange('集合')">📚</button>
    <button class="tag-chip" :class="{ active: selectedTag === '并发' }" @click="onTagChange('并发')">⚡</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'JVM' }" @click="onTagChange('JVM')">🧩</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'MySQL' }" @click="onTagChange('MySQL')">🗄️</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'Redis' }" @click="onTagChange('Redis')">📐</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'Spring' }" @click="onTagChange('Spring')">🌐</button>
    <button class="tag-chip" :class="{ active: selectedTag === '分布式系统' }" @click="onTagChange('分布式系统')">🚀</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'JavaScript' }" @click="onTagChange('JavaScript')">🟨</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'Vue3' }" @click="onTagChange('Vue3')">💚</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'Docker' }" @click="onTagChange('Docker')">🐳</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'Git' }" @click="onTagChange('Git')">🔧</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'CI/CD' }" @click="onTagChange('CI/CD')">🔄</button>
    <button class="tag-chip" :class="{ active: selectedTag === '消息队列' }" @click="onTagChange('消息队列')">📨</button>
    <button class="tag-chip" :class="{ active: selectedTag === 'AI与Agent' }" @click="onTagChange('AI与Agent')">🤖</button>
  </div>

  <!-- PC端: 下拉select -->
  <select v-else id="tag-select" v-model="selectedTag" @change="onTagChange">
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

function onTagChange(val) {
  selectedTag.value = val
  filterStore.setTagFilter(val)
}
</script>

<style scoped>
/* 移动端: 横向滚动tag条 */
.mobile-tags {
  display: flex; gap: 6px; overflow-x: auto; padding: 6px 0;
  -webkit-overflow-scrolling: touch; scrollbar-width: none;
}
.mobile-tags::-webkit-scrollbar { display: none }
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
