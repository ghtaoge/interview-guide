<template>
  <div v-if="!isMobile" class="quick-nav">
    <a v-for="(mod, i) in navItems" :key="mod.id" href="#"
      @click.prevent="jumpTo(i)"
      :data-label="mod.title"
      :style="{ background: `var(--c${mod.cssIndex})` }"
      :class="{ active: activeIdx === i }"
    ></a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useModulesStore } from '../stores/modules.js'
import { useDevice } from '../composables/useDevice.js'

const router = useRouter()
const modulesStore = useModulesStore()
const { isMobile } = useDevice()

const activeIdx = ref(-1)
let ticking = false

const navItems = computed(() => modulesStore.sortedIndex)

function jumpTo(idx) {
  router.push({ name: 'module', params: { id: navItems.value[idx].id } })
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      const mods = document.querySelectorAll('.module-card, .module-header')
      for (let i = 0; i < mods.length; i++) {
        if (mods[i].getBoundingClientRect().top <= window.innerHeight / 3) activeIdx.value = i
      }
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.quick-nav {
  position: fixed; top: 50%; right: 8px; transform: translateY(-50%);
  z-index: 99; display: flex; flex-direction: column; gap: 5px;
  opacity: .7; transition: opacity .2s;
}
.quick-nav:hover { opacity: 1 }
.quick-nav a {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--border); transition: all .25s; display: block;
  position: relative; cursor: pointer;
}
.quick-nav a.active { transform: scale(1.6); box-shadow: 0 0 6px rgba(0,0,0,.2) }
.quick-nav a:hover { transform: scale(1.8); box-shadow: 0 0 8px rgba(52,112,255,.4) }
.quick-nav a:hover::after {
  content: attr(data-label); position: absolute; right: 20px; top: 50%; transform: translateY(-50%);
  background: var(--card); padding: 4px 10px; border-radius: 8px;
  font-size: .7em; white-space: nowrap; box-shadow: 0 2px 8px rgba(0,0,0,.1);
  color: var(--text); border: 1px solid var(--border);
}
</style>
