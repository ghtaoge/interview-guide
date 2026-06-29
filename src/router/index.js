// src/router/index.js
import HomeView from '../views/HomeView.vue'
import ModuleView from '../views/ModuleView.vue'

export const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/module/:id', name: 'module', component: ModuleView }
]
