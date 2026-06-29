<template>
  <button class="theme-toggle" @click="toggle" :title="isDark ? '切换浅色模式 (Ctrl+D)' : '切换暗黑模式 (Ctrl+D)'">
    <span class="toggle-icon" :class="{ dark: isDark }">
      <span class="sun">☀</span>
      <span class="moon">☾</span>
    </span>
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
  transition: all .3s; position: relative; overflow: hidden;
}
.theme-toggle:hover {
  background: rgba(255,255,255,.35); transform: scale(1.12);
  border-color: rgba(255,255,255,.4);
}
.toggle-icon {
  position: relative; display: flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; transition: transform .4s cubic-bezier(.4,0,.2,1);
}
.toggle-icon.dark {
  transform: rotate(360deg);
}
.sun {
  position: absolute; font-size: .9em; transition: all .4s;
  opacity: 0; transform: scale(.3) rotate(-90deg);
}
.toggle-icon:not(.dark) .sun {
  opacity: 1; transform: scale(1) rotate(0deg);
}
.moon {
  position: absolute; font-size: 1em; transition: all .4s;
  opacity: 0; transform: scale(.3) rotate(90deg);
}
.toggle-icon.dark .moon {
  opacity: 1; transform: scale(1) rotate(0deg);
}
</style>
