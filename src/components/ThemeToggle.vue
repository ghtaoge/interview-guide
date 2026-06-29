<template>
  <button class="theme-toggle" @click="toggle" :title="isDark ? '切换浅色模式 (Ctrl+D)' : '切换暗黑模式 (Ctrl+D)'">
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js'
const { isDark, toggle } = useTheme()
</script>

<style scoped>
.theme-toggle {
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(255,255,255,.15); color: #fff;
  border: 1px solid rgba(255,255,255,.3);
  cursor: pointer; font-size: .78em;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s;
}
.theme-toggle:hover {
  background: rgba(255,255,255,.3); transform: scale(1.1);
}
</style>
