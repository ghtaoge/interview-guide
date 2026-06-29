import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const isMobile = ref(window.innerWidth <= 600)

  function onResize() {
    isMobile.value = window.innerWidth <= 600
  }

  onMounted(() => window.addEventListener('resize', onResize))
  onUnmounted(() => window.removeEventListener('resize', onResize))

  return { isMobile }
}
