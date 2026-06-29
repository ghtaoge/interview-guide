<template>
  <div class="scroll-progress" :style="{ width: scrollPercent + '%' }"></div>
</template>

<script setup>
import { useScroll } from '../composables/useScroll.js'
const { scrollPercent } = useScroll()
</script>

<style scoped>
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 3px;
  background: linear-gradient(90deg, var(--accent), #a78bfa, var(--accent2));
  z-index: 200; transition: width .1s linear;
  border-radius: 0 2px 2px 0;
}
</style>
