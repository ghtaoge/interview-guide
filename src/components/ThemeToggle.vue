<template>
  <button class="theme-toggle" @click="toggle" :title="isDark ? '切换浅色模式 (Ctrl+D)' : '切换暗黑模式 (Ctrl+D)'">
    <svg v-if="!isDark" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
    <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js'
const { isDark, toggle } = useTheme()
</script>

<style scoped>
.theme-toggle {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,.18); color: #fff;
  border: 2px solid rgba(255,255,255,.25);
  cursor: pointer; font-size: 1em;
  display: flex; align-items: center; justify-content: center;
  transition: all .3s;
}
.theme-toggle:hover {
  background: rgba(255,255,255,.35); transform: scale(1.12);
  border-color: rgba(255,255,255,.4);
}
.icon {
  width: 18px; height: 18px;
  transition: transform .35s cubic-bezier(.4,0,.2,1);
}
.theme-toggle:hover .icon {
  transform: rotate(20deg);
}
</style>
