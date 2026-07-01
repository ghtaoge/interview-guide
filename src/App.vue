<!-- src/App.vue — 根组件 -->
<template>
  <van-config-provider>
    <!-- 初始化阶段: 检查session -->
    <div v-if="initializing" class="init-screen">
      <div class="init-content">
        <div class="init-icon">📖</div>
        <div class="init-title">{{ config.ui.title }}</div>
        <van-loading type="spinner" color="#0d9488" vertical>验证身份...</van-loading>
      </div>
    </div>

    <!-- 未认证: 显示密码验证 -->
    <AuthGate v-else-if="!authStore.isAuthenticated" @success="onAuthSuccess" />

    <!-- 已认证: 显示主内容 -->
    <template v-else>
      <HeaderBar />
      <ScrollProgress />
      <router-view />
      <BackToTop />
      <QuickNav />
    </template>
  </van-config-provider>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from './stores/auth.js'
import { useModulesStore } from './stores/modules.js'
import { useTheme } from './composables/useTheme.js'
import { moduleConfig as config } from './config.js'
import AuthGate from './components/AuthGate.vue'
import HeaderBar from './components/HeaderBar.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import BackToTop from './components/BackToTop.vue'
import QuickNav from './components/QuickNav.vue'

const authStore = useAuthStore()
const modulesStore = useModulesStore()
const { isDark, toggle: toggleTheme } = useTheme()
const initializing = ref(true)

// 初始化: 先检查session
onMounted(async () => {
  const hasSession = authStore.checkSession()
  if (hasSession) {
    try { await modulesStore.loadIndex() } catch (e) { console.error('loadIndex失败:', e) }
  }
  initializing.value = false
})

async function onAuthSuccess() {
  try { await modulesStore.loadIndex() } catch (e) { console.error('loadIndex失败:', e) }
  authStore.markAuthenticated()
}

// Ctrl+D 切换深色模式
function onKeydown(e) {
  if (e.ctrlKey && e.key === 'd') {
    e.preventDefault()
    toggleTheme()
  }
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.init-screen {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0d9488 100%);
  position: relative; overflow: hidden;
}
.init-screen::before {
  content: ''; position: absolute; top: -30%; right: -20%;
  width: 500px; height: 500px; border-radius: 50%;
  background: radial-gradient(circle, rgba(13,148,136,.15), transparent 70%);
}
.init-content {
  text-align: center; position: relative; z-index: 1;
}
.init-icon { font-size: 3em; margin-bottom: 12px }
.init-title {
  font-size: 1.3em; font-weight: 700; color: #e2e8f0;
  margin-bottom: 16px; letter-spacing: 3px;
}

/* 深色模式 */
:global(.dark) .init-screen {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0d9488 100%);
}
</style>
