import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const scrollPercent = ref(0)
  const showBackTop = ref(false)
  let ticking = false

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight
        scrollPercent.value = h > 0 ? (window.scrollY / h * 100) : 0
        showBackTop.value = window.scrollY > 400
        ticking = false
      })
      ticking = true
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => window.addEventListener('scroll', onScroll))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { scrollPercent, showBackTop, scrollToTop }
}
