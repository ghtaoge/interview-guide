import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModulesStore = defineStore('modules', () => {
  const moduleIndex = ref([])
  const moduleData = ref(new Map())
  const loadingModule = ref(null)

  async function loadIndex() {
    const resp = await fetch('/data/index.json')
    moduleIndex.value = await resp.json()
  }

  async function loadModule(id) {
    if (moduleData.value.has(id)) return moduleData.value.get(id)
    loadingModule.value = id
    try {
      const resp = await fetch(`/data/${id}.json`)
      const data = await resp.json()
      moduleData.value.set(id, data)
      return data
    } finally {
      loadingModule.value = null
    }
  }

  async function loadAllForSearch() {
    await Promise.all(moduleIndex.value.map(m => loadModule(m.id)))
  }

  const totalModules = computed(() => moduleIndex.value.length)
  const totalPoints = computed(() =>
    moduleIndex.value.reduce((sum, m) => sum + (m.pointCount || 0), 0)
  )

  const sortedIndex = computed(() =>
    [...moduleIndex.value].sort((a, b) => a.order - b.order)
  )

  return {
    moduleIndex, moduleData, loadingModule,
    loadIndex, loadModule, loadAllForSearch,
    totalModules, totalPoints, sortedIndex
  }
})
