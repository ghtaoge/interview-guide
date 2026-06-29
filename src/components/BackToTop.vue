<template>
  <van-back-top v-if="isMobile" />
  <button v-else class="back-top-pc" :class="{ show: showBackTop }" @click="scrollToTop" title="回到顶部">⬆</button>
</template>

<script setup>
import { useDevice } from '../composables/useDevice.js'
import { useScroll } from '../composables/useScroll.js'
const { isMobile } = useDevice()
const { showBackTop, scrollToTop } = useScroll()
</script>

<style scoped>
.back-top-pc {
  position: fixed; bottom: 32px; right: 24px;
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--accent); color: #fff; font-size: 1.2em;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; box-shadow: 0 4px 16px rgba(13,148,136,.3);
  opacity: 0; transform: translateY(20px); transition: all .3s ease;
  z-index: 99; border: none;
}
.back-top-pc.show { opacity: 1; transform: translateY(0) }
.back-top-pc:hover { background: #0f766e; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(13,148,136,.4) }
</style>
