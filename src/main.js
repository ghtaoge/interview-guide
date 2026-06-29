// src/main.js — Vue 3 入口
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './router/index.js'
import './styles/variables.css'
import './styles/global.css'
import './styles/pc.css'
import './styles/dark.css'

const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
