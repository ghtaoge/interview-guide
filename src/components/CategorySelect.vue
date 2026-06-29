<template>
  <van-dropdown-menu v-if="isMobile" :close-on-click-outside="true">
    <van-dropdown-item v-model="selectedTag" :options="tagOptions" @change="onTagChange" />
  </van-dropdown-menu>
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

const tagOptions = [
  { text: '✨ 全部模块', value: '' },
  { text: '☕ Java基础', value: 'Java 基础' },
  { text: '📚 集合', value: '集合' },
  { text: '⚡ 并发', value: '并发' },
  { text: '🧩 JVM', value: 'JVM' },
  { text: '🔄 IO', value: 'IO' },
  { text: '💻 计算机基础', value: '计算机基础' },
  { text: '🗄️ MySQL', value: 'MySQL' },
  { text: '📐 Redis', value: 'Redis' },
  { text: '🌐 Spring', value: 'Spring' },
  { text: '🚀 分布式系统', value: '分布式系统' },
  { text: '⚡ 高性能', value: '高性能' },
  { text: '🛡️ 高可用', value: '高可用' },
  { text: '🔍 ElasticSearch', value: 'ElasticSearch' },
  { text: '🍃 MongoDB', value: 'MongoDB' },
  { text: '🐘 PostgreSQL', value: 'PostgreSQL' },
  { text: '🟨 JavaScript', value: 'JavaScript' },
  { text: '💚 Vue2', value: 'Vue2' },
  { text: '💚 Vue3', value: 'Vue3' },
  { text: '🔷 TypeScript', value: 'TypeScript' },
  { text: '🎨 HTML/CSS', value: 'HTML与CSS' },
  { text: '🎯 场景题', value: '场景题' },
  { text: '🐳 Docker', value: 'Docker' },
  { text: '☸️ K8s', value: 'Kubernetes' },
  { text: '🟢 Nginx', value: 'Nginx' },
  { text: '🔧 Git', value: 'Git' },
  { text: '🔄 CI/CD', value: 'CI/CD' },
  { text: '📨 消息队列', value: '消息队列' },
  { text: '🛡️ Nacos/Sentinel', value: 'Nacos/Sentinel' },
  { text: '🔗 Dubbo', value: 'Dubbo' },
  { text: '🤖 AI与Agent', value: 'AI与Agent' },
  { text: '💼 HR面试', value: 'HR面试' },
  { text: '📐 分布式', value: '分布式' },
  { text: '🌐 计算机网络', value: '计算机网络' },
  { text: '📦 Webpack', value: 'Webpack' },
  { text: '🔧 Maven', value: 'Maven' },
  { text: '📦 Minio', value: 'Minio' },
  { text: '⚡ Netty', value: 'Netty' },
  { text: '🔬 诊断工具', value: '诊断工具' },
  { text: '📊 EasyExcel', value: 'EasyExcel' },
  { text: '📝 编程规范', value: '编程规范' },
  { text: '⚡ 性能优化', value: '性能优化' },
  { text: '🗂️ 数据结构', value: '数据结构' },
  { text: '📋 面试准备', value: '面试准备' },
]

function onTagChange(val) {
  filterStore.setTagFilter(val)
}
</script>

<style scoped>
#tag-select {
  font-size: 12px; padding: 7px 12px; border-radius: 20px;
  border: 1px solid var(--border); background: var(--card);
  color: var(--text2); min-height: 30px; cursor: pointer; outline: none;
  max-width: 140px; transition: all .2s;
}
#tag-select:focus { border-color: var(--accent) }

/* 移动端 van-dropdown-menu 样式修复 */
:deep(.van-dropdown-menu) {
  background: transparent !important;
  box-shadow: none;
}
:deep(.van-dropdown-menu__bar) {
  background: rgba(255,255,255,.15) !important;
  box-shadow: none !important;
  height: auto !important;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.3);
}
:deep(.van-dropdown-menu__title) {
  color: #fff !important;
  font-size: 13px;
  padding: 0 12px;
}
:deep(.van-dropdown-menu__title::after) {
  border-color: #fff transparent transparent;
}
</style>
