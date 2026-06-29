import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(localStorage.getItem('darkMode') !== '0')

  function toggle() {
    isDark.value = !isDark.value
    localStorage.setItem('darkMode', isDark.value ? '1' : '0')
    document.body.classList.toggle('dark', isDark.value)
  }

  onMounted(() => {
    document.body.classList.toggle('dark', isDark.value)
  })

  return { isDark, toggle }
}
