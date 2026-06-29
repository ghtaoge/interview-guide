# Interview Guide v3.0 — Vue 3 SPA 重构实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 interview-guide 从原生JS单页重构为 Vue 3 + Vite SPA，Vant 4 驱动移动端体验，部署为静态文件到 GitHub Pages。

**Architecture:** Vue 3 SPA with Vue Router (/ → HomeView, /module/:id → ModuleView)，Pinia 状态管理（auth/modules/filter stores），数据懒加载（fetch JSON from public/data/），Vant 4 组件渲染移动端 + 自定义CSS覆盖PC端。

**Tech Stack:** Vue 3.4, Vite 5.4, Vue Router 4.3, Pinia 2.1, Vant 4.8, unplugin-vant-components

## Global Constraints

- 部署目标: GitHub Pages (Vite build → dist → 静态文件)
- 数据格式: `data/*.js` 原始文件保留不动，转换脚本生成 `public/data/*.json`
- 认证: SHA-256 + 盐值密码验证，localStorage session 持久化
- 编辑模式: 省略（v3.1 迭代加回）
- 43模块颜色系统: CSS变量 --c0 ~ --c42 保留
- 深色模式: localStorage 持久化 + .dark body class
- 代码语言: 中文注释和术语

---

## File Structure Map

| 文件 | 创建/修改 | 职责 |
|---|---|---|
| `package.json` | 创建 | 依赖管理(vue/vite/pinia/vant/router) |
| `vite.config.js` | 创建 | Vite配置(插件/构建) |
| `index.html` | 创建(覆盖) | Vite入口HTML(替换现有497行内联版) |
| `src/main.js` | 创建 | Vue 3入口(createApp+Pinia+Router+Vant) |
| `src/App.vue` | 创建 | 根组件(AuthGate+RouterView) |
| `src/config.js` | 创建 | 模块注册+管理员配置(ES模块) |
| `src/router/index.js` | 创建 | Vue Router(2条路由) |
| `src/stores/auth.js` | 创建 | Pinia auth store(SHA-256验证) |
| `src/stores/modules.js` | 创建 | Pinia modules store(索引+懒加载) |
| `src/stores/filter.js` | 创建 | Pinia filter store(搜索/标签) |
| `src/composables/useTheme.js` | 创建 | 深色模式切换 |
| `src/composables/useDevice.js` | 创建 | isMobile判断(600px断点) |
| `src/composables/useScroll.js` | 创建 | 滚动进度+回到顶部 |
| `src/composables/useSearch.js` | 创建 | 搜索过滤(matchText/highlight) |
| `src/views/HomeView.vue` | 创建 | 首页(模块卡片列表) |
| `src/views/ModuleView.vue` | 创建 | 模块详情(子分类+知识点) |
| `src/components/AuthGate.vue` | 创建 | 密码验证覆盖层 |
| `src/components/HeaderBar.vue` | 创建 | 顶部栏(sticky) |
| `src/components/SearchBox.vue` | 创建 | 搜索框(van-search/自定义) |
| `src/components/CategorySelect.vue` | 创建 | 分类下拉(van-dropdown/select) |
| `src/components/ModuleCard.vue` | 创建 | 模块卡片 |
| `src/components/SubSection.vue` | 创建 | 子分类折叠(Vant/自定义) |
| `src/components/PointItem.vue` | 创建 | 知识点条目 |
| `src/components/DetailItem.vue` | 创建 | 详情条目(含sub-detail) |
| `src/components/QuickNav.vue` | 创建 | PC端侧边导航 |
| `src/components/ScrollProgress.vue` | 创建 | 滚动进度条 |
| `src/components/BackToTop.vue` | 创建 | 回到顶部 |
| `src/components/ThemeToggle.vue` | 创建 | 深色模式切换按钮 |
| `src/styles/variables.css` | 创建 | CSS变量(43色+主题) |
| `src/styles/global.css` | 创建 | 重置+排版+滚动条 |
| `src/styles/pc.css` | 创建 | PC端样式覆盖 |
| `src/styles/dark.css` | 创建 | 深色模式覆盖 |
| `tools/convert-v3.js` | 创建 | JS→JSON数据转换脚本 |
| `public/data/index.json` | 创建 | 模块索引(转换脚本生成) |
| `public/data/*.json` (43个) | 创建 | 模块完整数据(转换脚本生成) |
| `.github/workflows/deploy.yml` | 修改 | 加Node+npm ci+npm run build |

---

### Task 1: Vite 项目脚手架 + 数据转换 + 配置

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html` (Vite入口，替换现有497行内联版)
- Create: `src/main.js`
- Create: `src/App.vue` (骨架)
- Create: `src/config.js` (ES模块版本)
- Create: `tools/convert-v3.js`
- Create: `public/data/index.json` + 43个模块JSON (由convert-v3.js生成)

**Interfaces:**
- Produces: `src/config.js` exports `moduleConfig` object with `modules[]`, `admin{}`, `ui{}` — used by auth store and modules store
- Produces: `public/data/index.json` — array of `{id, title, tag, order, icon, cssIndex, subCount, pointCount}` — fetched by modules store
- Produces: `public/data/{id}.json` — full module data with `{id, title, tag, order, icon, cssIndex, subs[]}` — fetched by modules store on demand

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "interview-guide",
  "version": "3.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "convert": "node tools/convert-v3.js"
  },
  "dependencies": {
    "vue": "^3.4.38",
    "vue-router": "^4.3.3",
    "pinia": "^2.1.7",
    "vant": "^4.9.1"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.4",
    "vite": "^5.4.6",
    "@vant/auto-import-resolver": "^1.3.0",
    "unplugin-vue-components": "^0.27.4"
  }
}
```

- [ ] **Step 2: npm install**

Run: `cd interview-guide && npm install`
Expected: 依赖安装成功，生成 node_modules 和 package-lock.json

- [ ] **Step 3: 创建 vite.config.js**

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
})
```

- [ ] **Step 4: 创建 index.html (Vite入口)**

替换现有497行内联版为简洁Vite入口：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>全栈面试宝典 v3.0</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
</head>
<body class="dark">
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

注意：现有index.html的497行内联CSS/HTML将被Vue组件体系完全替代，不再需要。

- [ ] **Step 5: 创建 src/config.js (ES模块版本)**

从现有 `config.js` (全局 `window.__MODULE_CONFIG__`) 转为ES模块导出。保留密码hash和管理员配置：

```js
// src/config.js — 模块注册配置 + 管理员配置 (ES模块)
// 管理员密码使用 SHA-256 + 盐值哈希存储
// 生成密码哈希: 在浏览器 console 中运行
//   async function h(p){const s="javaguide2026salt";const d=new TextEncoder().encode(s+p);
//     const b=await crypto.subtle.digest("SHA-256",d);return "sha256$javaguide2026salt$"+
//     Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,"0")).join("")}
//   h("你的密码").then(console.log)

export const moduleConfig = {
  modules: [
    { id: "java-basic", order: 1, tag: "Java 基础" },
    { id: "java-collection", order: 2, tag: "集合" },
    { id: "java-concurrent", order: 3, tag: "并发" },
    { id: "jvm", order: 4, tag: "JVM" },
    { id: "java-io", order: 5, tag: "IO" },
    { id: "computer-basic", order: 6, tag: "计算机基础" },
    { id: "mysql", order: 7, tag: "MySQL" },
    { id: "redis", order: 8, tag: "Redis" },
    { id: "spring", order: 9, tag: "Spring" },
    { id: "system-design", order: 10, tag: "分布式" },
    { id: "computer-network", order: 11, tag: "计算机网络" },
    { id: "javascript", order: 12, tag: "JavaScript" },
    { id: "vue2", order: 13, tag: "Vue2" },
    { id: "vue3", order: 14, tag: "Vue3" },
    { id: "typescript", order: 15, tag: "TypeScript" },
    { id: "scene", order: 16, tag: "场景题" },
    { id: "html-css", order: 17, tag: "HTML与CSS" },
    { id: "webpack", order: 18, tag: "Webpack" },
    { id: "docker", order: 19, tag: "Docker" },
    { id: "kubernetes", order: 20, tag: "Kubernetes" },
    { id: "nginx", order: 21, tag: "Nginx" },
    { id: "distributed-system", order: 22, tag: "分布式系统" },
    { id: "high-performance", order: 23, tag: "高性能" },
    { id: "high-availability", order: 24, tag: "高可用" },
    { id: "interview-prep", order: 25, tag: "面试准备" },
    { id: "elasticsearch", order: 26, tag: "ElasticSearch" },
    { id: "mongodb", order: 27, tag: "MongoDB" },
    { id: "postgresql", order: 28, tag: "PostgreSQL" },
    { id: "maven", order: 29, tag: "Maven" },
    { id: "minio", order: 30, tag: "Minio" },
    { id: "netty", order: 31, tag: "Netty" },
    { id: "ai-framework", order: 32, tag: "AI与Agent" },
    { id: "hr-interview", order: 33, tag: "HR面试" },
    { id: "rabbitmq-kafka", order: 34, tag: "消息队列" },
    { id: "nacos-sentinel", order: 35, tag: "Nacos/Sentinel" },
    { id: "dubbo", order: 36, tag: "Dubbo" },
    { id: "diagnostic-tools", order: 37, tag: "诊断工具" },
    { id: "easyexcel", order: 38, tag: "EasyExcel" },
    { id: "coding-standards", order: 39, tag: "编程规范" },
    { id: "performance-optimization", order: 40, tag: "性能优化" },
    { id: "data-structures", order: 41, tag: "数据结构" },
    { id: "git", order: 42, tag: "Git" },
    { id: "cicd", order: 43, tag: "CI/CD" }
  ],
  admin: {
    // 盐值: javaguide2026salt
    // 默认密码: 1996
    passwordHash: "sha256$javaguide2026salt$69928682c0dbb7e5475bc36d858a8ba84861185265e145814e64fb8de44d93ed",
    sessionDuration: 3600000
  },
  ui: {
    title: "全栈面试宝典",
    version: "3.0"
  }
}
```

- [ ] **Step 6: 创建 src/main.js + src/App.vue 骨架**

```js
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
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
```

```vue
<!-- src/App.vue — 根组件骨架 -->
<template>
  <AuthGate v-if="!authStore.isAuthenticated" @success="onAuthSuccess" />
  <template v-else>
    <HeaderBar />
    <ScrollProgress />
    <router-view />
    <BackToTop />
    <QuickNav />
  </template>
</template>

<script setup>
import { useAuthStore } from './stores/auth.js'
import AuthGate from './components/AuthGate.vue'
import HeaderBar from './components/HeaderBar.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import BackToTop from './components/BackToTop.vue'
import QuickNav from './components/QuickNav.vue'

const authStore = useAuthStore()

function onAuthSuccess() {
  // 认证成功后加载模块索引
  const modulesStore = useModulesStore()
  modulesStore.loadIndex()
}
</script>
```

注意：`useModulesStore` 在 onAuthSuccess 中引用，需要在函数内 import（Pinia store 必须在 pinia 创建后才能使用）。

- [ ] **Step 7: 创建 src/router/index.js**

```js
// src/router/index.js
import HomeView from '../views/HomeView.vue'
import ModuleView from '../views/ModuleView.vue'

export const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/module/:id', name: 'module', component: ModuleView }
]
```

- [ ] **Step 8: 创建 tools/convert-v3.js (数据转换脚本)**

脚本从现有 `data/*.js` 文件中读取 `window.__MODULES__` 数据，为每个模块ID生成独立JSON文件到 `public/data/`，并生成 `index.json` 索引。

```js
// tools/convert-v3.js — JS数据 → JSON数据转换
// 用法: node tools/convert-v3.js
// 从 data/*.js 读取 window.__MODULES__ 格式数据
// 输出到 public/data/*.json (43个独立JSON) + public/data/index.json

const fs = require('fs')
const path = require('path')

const DATA_DIR = path.resolve(__dirname, '..', 'data')
const OUTPUT_DIR = path.resolve(__dirname, '..', 'public', 'data')

// 模块分组映射(与现有config.js一致)
const MODULE_GROUPS = [
  { file: 'java-basic.js', ids: ['java-basic','java-collection','java-concurrent','jvm','java-io'] },
  { file: 'computer-basic.js', ids: ['computer-basic'] },
  { file: 'mysql.js', ids: ['mysql'] },
  { file: 'redis.js', ids: ['redis'] },
  { file: 'spring.js', ids: ['spring'] },
  { file: 'system-design.js', ids: ['system-design','computer-network'] },
  { file: 'frontend-js-vue.js', ids: ['javascript','vue2','vue3','typescript'] },
  { file: 'scene-html-webpack.js', ids: ['scene','html-css','webpack'] },
  { file: 'devops.js', ids: ['docker','kubernetes','nginx','git','cicd'] },
  { file: 'distributed.js', ids: ['distributed-system','high-performance','high-availability','interview-prep'] },
  { file: 'db-middleware.js', ids: ['elasticsearch','mongodb','postgresql','maven','minio','netty'] },
  { file: 'ai-msg.js', ids: ['ai-framework','rabbitmq-kafka','nacos-sentinel'] },
  { file: 'tools-spec.js', ids: ['dubbo','diagnostic-tools','easyexcel','coding-standards','performance-optimization','data-structures','hr-interview'] },
]

function parseModulesFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  // 使用正则提取每个 window.__MODULES__['id'] = {...} 赋值
  const modules = {}
  const regex = /window\.__MODULES__\['([^']+)'\]\s*=\s*(\{[\s\S]*?\});/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const id = match[1]
    const jsonStr = match[2]
    try {
      modules[id] = JSON.parse(jsonStr)
    } catch (e) {
      console.error(`  解析模块 ${id} 失败: ${e.message}`)
    }
  }
  return modules
}

function main() {
  // 确保 output 目录存在
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  // 从所有 data/*.js 文件读取模块数据
  const allModules = {}
  for (const group of MODULE_GROUPS) {
    const filePath = path.join(DATA_DIR, group.file)
    if (!fs.existsSync(filePath)) {
      console.warn(`  文件不存在: ${group.file}`)
      continue
    }
    const modulesFromFile = parseModulesFromFile(filePath)
    for (const [id, data] of Object.entries(modulesFromFile)) {
      allModules[id] = data
    }
    console.log(`  读取 ${group.file}: ${Object.keys(modulesFromFile).length} 个模块`)
  }

  // 按 order 排序
  const sortedIds = Object.keys(allModules).sort((a, b) => allModules[a].order - allModules[b].order)
  console.log(`\n  共 ${sortedIds.length} 个模块`)

  // 为每个模块生成独立JSON文件
  const indexData = []
  for (const id of sortedIds) {
    const mod = allModules[id]
    // 写完整数据JSON
    const outputPath = path.join(OUTPUT_DIR, `${id}.json`)
    fs.writeFileSync(outputPath, JSON.stringify(mod, null, 2), 'utf-8')
    console.log(`  写入 ${id}.json`)

    // 构建索引条目(轻量元数据)
    let pointCount = 0
    for (const sub of (mod.subs || [])) {
      pointCount += (sub.points || []).length
    }
    indexData.push({
      id: mod.id,
      title: mod.title,
      tag: mod.tag,
      order: mod.order,
      icon: mod.icon,
      cssIndex: mod.cssIndex,
      subCount: (mod.subs || []).length,
      pointCount
    })
  }

  // 写索引JSON
  const indexPath = path.join(OUTPUT_DIR, 'index.json')
  fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2), 'utf-8')
  console.log(`  写入 index.json (${indexData.length} 条)`)
  console.log('\n  转换完成!')
}

main()
```

- [ ] **Step 9: 运行数据转换**

Run: `cd interview-guide && node tools/convert-v3.js`
Expected: 输出43个JSON文件 + index.json 到 public/data/

- [ ] **Step 10: 验证转换结果**

Run: `ls public/data/*.json | wc -l` (应输出44: 43模块 + 1索引)
Run: `cat public/data/index.json | head -20` (应看到模块索引数组)

- [ ] **Step 11: 创建 CSS 文件骨架**

创建4个CSS文件，先写骨架，后续任务填充内容：

`src/styles/variables.css`:
```css
:root {
  --bg: #f0f4f8; --card: #fff; --text: #1a202c;
  --text2: #4a5568; --text3: #94a3b8; --border: #e2e8f0;
  --accent: #0d9488; --accent2: #e8833a;
  --radius: 16px; --radius-sm: 10px;
  --shadow: 0 2px 12px rgba(0,0,0,.06);
  --c0: #6366f1; --c1: #ef4444; --c2: #f59e0b; --c3: #10b981;
  --c4: #3b82f6; --c5: #a855f7; --c6: #f97316; --c7: #14b8a6;
  --c8: #dc2626; --c9: #059669; --c10: #2563eb; --c11: #ea580c;
  --c12: #0ea5e9; --c13: #d946ef; --c14: #f472b6; --c15: #8b5cf6;
  --c16: #e11d48; --c17: #22d3ee; --c18: #c084fc; --c19: #8b5cf6;
  --c20: #0ea5e9; --c21: #dc2626; --c22: #7c3aed; --c23: #f97316;
  --c24: #059669; --c25: #6366f1; --c26: #3b82f6; --c27: #ef4444;
  --c28: #10b981; --c29: #f59e0b; --c30: #a855f7; --c31: #f97316;
  --c32: #ef4444; --c33: #f59e0b; --c34: #14b8a6; --c35: #ef4444;
  --c36: #059669; --c37: #3b82f6; --c38: #8b5cf6; --c39: #0ea5e9;
  --c40: #a855f7; --c41: #f05032; --c42: #0ea5e9;
}
```

`src/styles/global.css`:
```css
* { margin: 0; padding: 0; box-sizing: border-box }
body { font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
  background: var(--bg); color: var(--text); line-height: 1.75; -webkit-font-smoothing: antialiased }
::-webkit-scrollbar { width: 8px; height: 8px }
::-webkit-scrollbar-track { background: transparent }
::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px }
::-webkit-scrollbar-thumb:hover { background: #aaa }
.hl { background: #fef3c7; color: #b45309; border-radius: 3px; padding: 0 3px; font-weight: 500 }
```

`src/styles/pc.css`:
```css
@media (min-width: 601px) {
  /* PC端样式 — 后续任务逐步填充 */
}
```

`src/styles/dark.css`:
```css
.dark {
  --bg: #0f172a; --card: #1e293b; --text: #e2e8f0;
  --text2: #94a3b8; --text3: #64748b; --border: #334155;
  --shadow: 0 2px 12px rgba(0,0,0,.3);
}
/* Vant深色覆盖 — 后续任务逐步填充 */
```

- [ ] **Step 12: 创建空视图和组件文件骨架**

创建空Vue文件占位（后续任务填充内容）：

`src/views/HomeView.vue`:
```vue
<template>
  <div class="home-view">
    <p>首页加载中...</p>
  </div>
</template>
<script setup>
</script>
```

`src/views/ModuleView.vue`:
```vue
<template>
  <div class="module-view">
    <p>模块详情加载中...</p>
  </div>
</template>
<script setup>
</script>
```

以及所有12个组件文件骨架（AuthGate, HeaderBar, SearchBox, CategorySelect, ModuleCard, SubSection, PointItem, DetailItem, QuickNav, ScrollProgress, BackToTop, ThemeToggle） — 每个只有 `<template><div></div></template><script setup></script>` 骨架。

- [ ] **Step 13: 验证Vite dev启动**

Run: `cd interview-guide && npm run dev`
Expected: Vite dev server启动，浏览器打开看到Vue 3空白应用（骨架占位文字），无报错

- [ ] **Step 14: 更新 .gitignore**

追加：
```
node_modules/
dist/
```

- [ ] **Step 15: Commit**

```bash
git add package.json package-lock.json vite.config.js index.html src/ tools/convert-v3.js public/data/ .gitignore
git commit -m "v3.0 — Vue 3+Vite项目脚手架 + 数据转换 + CSS变量骨架"
```

---

### Task 2: Pinia Stores + Composables

**Files:**
- Create: `src/stores/auth.js`
- Create: `src/stores/modules.js`
- Create: `src/stores/filter.js`
- Create: `src/composables/useTheme.js`
- Create: `src/composables/useDevice.js`
- Create: `src/composables/useScroll.js`
- Create: `src/composables/useSearch.js`

**Interfaces:**
- Consumes: `src/config.js` exports `moduleConfig` (from Task 1)
- Consumes: `public/data/index.json` and `public/data/{id}.json` (from Task 1)
- Produces: `useAuthStore()` with `isAuthenticated`, `checkSession()`, `verifyPassword(password)` — used by AuthGate.vue
- Produces: `useModulesStore()` with `moduleIndex`, `moduleData`, `loadingModule`, `loadIndex()`, `loadModule(id)` — used by HomeView, ModuleView
- Produces: `useFilterStore()` with `keyword`, `tagFilter`, `setKeyword(val)`, `setTagFilter(val)`, `matchText(text)` — used by SearchBox, CategorySelect
- Produces: `useTheme()` with `isDark`, `toggle()` — used by ThemeToggle
- Produces: `useDevice()` with `isMobile` — used by all dual-rendering components
- Produces: `useSearch()` with `matchText(text, keyword)`, `highlightHtml(text, keyword)` — used by SearchBox, components displaying search results

- [ ] **Step 1: 创建 src/stores/auth.js**

```js
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { moduleConfig } from '../config.js'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  function checkSession() {
    const stored = localStorage.getItem('javaguide_auth')
    if (!stored) return false
    try {
      const data = JSON.parse(stored)
      if (!data.authenticated) return false
      if (Date.now() - data.authTime > moduleConfig.admin.sessionDuration) {
        localStorage.removeItem('javaguide_auth')
        return false
      }
      isAuthenticated.value = true
      return true
    } catch (e) {
      localStorage.removeItem('javaguide_auth')
      return false
    }
  }

  async function verifyPassword(password) {
    const parts = moduleConfig.admin.passwordHash.split('$')
    if (parts.length !== 3) return false
    const salt = parts[1]
    const expectedHash = parts[2]
    const input = salt + password
    const buffer = new TextEncoder().encode(input)
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer)
    const hashHex = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0')).join('')
    if (hashHex === expectedHash) {
      isAuthenticated.value = true
      localStorage.setItem('javaguide_auth', JSON.stringify({
        authenticated: true, authTime: Date.now()
      }))
      return true
    }
    return false
  }

  return { isAuthenticated, checkSession, verifyPassword }
})
```

- [ ] **Step 2: 创建 src/stores/modules.js**

```js
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
```

- [ ] **Step 3: 创建 src/stores/filter.js**

```js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const keyword = ref('')
  const tagFilter = ref('')

  function setKeyword(val) {
    keyword.value = val
    tagFilter.value = ''
  }

  function setTagFilter(val) {
    tagFilter.value = val
    keyword.value = ''
  }

  function clearAll() {
    keyword.value = ''
    tagFilter.value = ''
  }

  function matchText(text) {
    if (!keyword.value) return true
    return text.toLowerCase().includes(keyword.value.toLowerCase())
  }

  function matchTag(tag) {
    if (!tagFilter.value) return true
    return tag === tagFilter.value
  }

  return { keyword, tagFilter, setKeyword, setTagFilter, clearAll, matchText, matchTag }
})
```

- [ ] **Step 4: 创建 composables**

`src/composables/useTheme.js`:
```js
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
```

`src/composables/useDevice.js`:
```js
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
```

`src/composables/useScroll.js`:
```js
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
```

`src/composables/useSearch.js`:
```js
export function useSearch() {
  function matchText(text, keyword) {
    if (!keyword) return true
    return text.toLowerCase().includes(keyword.toLowerCase())
  }

  function highlightHtml(text, keyword) {
    const safe = String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    if (!keyword) return safe
    const esc = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const re = new RegExp('(' + esc + ')', 'gi')
    return safe.replace(re, '<span class="hl">$1</span>')
  }

  return { matchText, highlightHtml }
}
```

- [ ] **Step 5: 验证 — 在浏览器console测试stores**

Run: `npm run dev` → 打开浏览器 → console 输入:
```js
// 测试auth store (需先在组件中暴露)
```
无语法报错即通过。

- [ ] **Step 6: Commit**

```bash
git add src/stores/ src/composables/
git commit -m "v3.0 — Pinia stores (auth/modules/filter) + composables (theme/device/scroll/search)"
```

---

### Task 3: AuthGate + HeaderBar + ThemeToggle + ScrollProgress + BackToTop

**Files:**
- Create: `src/components/AuthGate.vue`
- Create: `src/components/HeaderBar.vue`
- Create: `src/components/ThemeToggle.vue`
- Create: `src/components/ScrollProgress.vue`
- Create: `src/components/BackToTop.vue`

**Interfaces:**
- Consumes: `useAuthStore` (isAuthenticated, verifyPassword, checkSession) from Task 2
- Consumes: `useTheme` (isDark, toggle) from Task 2
- Consumes: `useScroll` (scrollPercent, showBackTop, scrollToTop) from Task 2
- Consumes: `useModulesStore` (totalModules, totalPoints, loadIndex) from Task 2
- Produces: AuthGate emits `success` event when auth passes
- Produces: HeaderBar renders sticky header with search/category/toggle
- Produces: ScrollProgress renders top progress bar
- Produces: BackToTop renders floating back-to-top button

- [ ] **Step 1: 创建 AuthGate.vue**

```vue
<template>
  <van-dialog
    v-model:show="showDialog"
    title="🔐 管理员验证"
    show-cancel-button
    :before-close="onBeforeClose"
    close-on-click-overlay
  >
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入管理员密码"
      :error-message="errorMsg"
      @keydown.enter="submit"
    />
  </van-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth.js'

const emit = defineEmits(['success'])
const authStore = useAuthStore()
const showDialog = ref(true)
const password = ref('')
const errorMsg = ref('')

onMounted(() => {
  if (authStore.checkSession()) {
    showDialog.value = false
    emit('success')
  }
})

async function onBeforeClose(action) {
  if (action === 'confirm') {
    const valid = await authStore.verifyPassword(password.value)
    if (valid) {
      errorMsg.value = ''
      emit('success')
      return true
    } else {
      errorMsg.value = '密码错误，请重新输入'
      password.value = ''
      return false
    }
  }
  return true
}

function submit() {
  // van-dialog的confirm按钮会触发before-close
}
</script>
```

- [ ] **Step 2: 创建 ThemeToggle.vue**

```vue
<template>
  <button class="theme-toggle" @click="toggle" :title="isDark ? '切换浅色模式 (Ctrl+D)' : '切换暗黑模式 (Ctrl+D)'">
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js'
const { isDark, toggle } = useTheme()
</script>

<style scoped>
.theme-toggle {
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(255,255,255,.15); color: #fff;
  border: 1px solid rgba(255,255,255,.3);
  cursor: pointer; font-size: .78em;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s;
}
.theme-toggle:hover {
  background: rgba(255,255,255,.3); transform: scale(1.1);
}
</style>
```

- [ ] **Step 3: 创建 ScrollProgress.vue**

```vue
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
```

- [ ] **Step 4: 创建 BackToTop.vue**

```vue
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
```

- [ ] **Step 5: 创建 HeaderBar.vue**

HeaderBar是核心布局组件，sticky定位，包含搜索、分类选择、主题切换。它需要根据当前路由显示不同内容（首页 vs 模块详情页）。

```vue
<template>
  <header class="header" :class="{ compact: isCompact }">
    <ThemeToggle />
    <h1>📖 {{ config.ui.title }} <small style="font-size:.5em;opacity:.5">v{{ config.ui.version }}</small></h1>
    <p class="header-desc">共 {{ modulesStore.totalModules }} 大模块 · {{ modulesStore.totalPoints }} 个知识点</p>
    <SearchBox />
    <div class="toolbar">
      <CategorySelect />
      <button class="toolbar-btn" @click="$router.push('/')">🏠 首页</button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { moduleConfig as config } from '../config.js'
import { useModulesStore } from '../stores/modules.js'
import ThemeToggle from './ThemeToggle.vue'
import SearchBox from './SearchBox.vue'
import CategorySelect from './CategorySelect.vue'

const route = useRoute()
const modulesStore = useModulesStore()
const isCompact = ref(false)

function onScroll() {
  isCompact.value = window.scrollY > 280
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #0d9488 0%, #2563eb 50%, #e8833a 100%);
  color: #fff; padding: 24px 20px 20px; text-align: center;
  position: sticky; top: 0; z-index: 100;
  box-shadow: 0 8px 32px rgba(13,148,136,.25); transition: padding .3s ease;
}
.header.compact { padding: 10px 20px 8px }
.header.compact h1 { font-size: 1.1em; margin-bottom: 2px }
.header.compact .header-desc { display: none }
.header h1 { font-size: 1.45em; margin-bottom: 6px; letter-spacing: 2px; text-shadow: 0 2px 8px rgba(0,0,0,.12) }
.header-desc { font-size: .78em; opacity: .7; font-weight: 300 }
.toolbar { max-width: 960px; margin: 12px auto; text-align: center; display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; align-items: center }
.toolbar-btn {
  padding: 7px 14px; border: 1px solid rgba(255,255,255,.3); border-radius: 20px;
  background: rgba(255,255,255,.15); color: #fff; cursor: pointer; font-size: 11px;
  transition: all .18s; min-height: 30px;
}
.toolbar-btn:hover { background: rgba(255,255,255,.3); border-color: rgba(255,255,255,.5) }

/* 移动端 */
@media (max-width: 600px) {
  .header { padding: 20px 12px 16px }
  .header h1 { font-size: 1.25em; margin-bottom: 4px }
  .toolbar-btn { padding: 6px 12px; font-size: 11px; min-height: 32px }
}
</style>
```

- [ ] **Step 6: 更新 App.vue 使用新组件**

修改 `src/App.vue` 替换骨架为真实组件：

```vue
<template>
  <AuthGate v-if="!authStore.isAuthenticated" @success="onAuthSuccess" />
  <template v-else>
    <HeaderBar />
    <ScrollProgress />
    <router-view />
    <BackToTop />
    <QuickNav />
  </template>
</template>

<script setup>
import { useAuthStore } from './stores/auth.js'
import { useModulesStore } from './stores/modules.js'
import AuthGate from './components/AuthGate.vue'
import HeaderBar from './components/HeaderBar.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import BackToTop from './components/BackToTop.vue'
import QuickNav from './components/QuickNav.vue'

const authStore = useAuthStore()

function onAuthSuccess() {
  const modulesStore = useModulesStore()
  modulesStore.loadIndex()
}
</script>

<style>
/* App全局样式在此不需要 — 已在main.js中引入CSS文件 */
</style>
```

- [ ] **Step 7: 添加键盘快捷键 (Ctrl+D主题切换, Ctrl+K搜索聚焦)**

在App.vue的 `<script setup>` 中添加：

```js
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'd') {
      e.preventDefault()
      const { toggle } = useTheme()
      toggle()
    }
  })
})
```

- [ ] **Step 8: 验证 — npm run dev 打开浏览器**

Expected: 看到密码验证弹窗(van-dialog)，输入密码1996 → 弹窗关闭 → 显示HeaderBar(渐变头部+搜索框+分类选择+主题切换) → Ctrl+D可切换深色模式

- [ ] **Step 9: Commit**

```bash
git add src/components/AuthGate.vue src/components/HeaderBar.vue src/components/ThemeToggle.vue src/components/ScrollProgress.vue src/components/BackToTop.vue src/App.vue
git commit -m "v3.0 — AuthGate密码验证 + HeaderBar + ThemeToggle + ScrollProgress + BackToTop"
```

---

### Task 4: SearchBox + CategorySelect + ModuleCard + HomeView

**Files:**
- Create: `src/components/SearchBox.vue`
- Create: `src/components/CategorySelect.vue`
- Create: `src/components/ModuleCard.vue`
- Create: `src/views/HomeView.vue` (替换骨架)

**Interfaces:**
- Consumes: `useFilterStore` (setKeyword, setTagFilter, clearAll, keyword, tagFilter) from Task 2
- Consumes: `useModulesStore` (sortedIndex, loadModule) from Task 2
- Consumes: `useSearch` (matchText, highlightHtml) from Task 2
- Consumes: `useDevice` (isMobile) from Task 2
- Produces: HomeView renders module card grid on home page
- Produces: SearchBox emits search input → filterStore.setKeyword
- Produces: CategorySelect emits tag select → filterStore.setTagFilter

- [ ] **Step 1: 创建 SearchBox.vue**

```vue
<template>
  <van-search v-if="isMobile"
    v-model="filterStore.keyword"
    placeholder="搜索知识点... 如 HashMap / CAS / GC / Redis..."
    shape="round"
    @search="onSearch"
    @clear="onClear"
  />
  <div v-else class="search-box" :class="{ 'has-value': filterStore.keyword }">
    <input
      type="text"
      v-model="localKeyword"
      placeholder="搜索知识点... 如 HashMap / CAS / GC / Redis..."
      @input="onInput"
    />
    <span class="count">{{ countLabel }}</span>
    <button v-if="filterStore.keyword" class="search-clear" @click="onClear">✕</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFilterStore } from '../stores/filter.js'
import { useModulesStore } from '../stores/modules.js'
import { useDevice } from '../composables/useDevice.js'

const filterStore = useFilterStore()
const modulesStore = useModulesStore()
const { isMobile } = useDevice()
const localKeyword = ref(filterStore.keyword)
let debounceTimer = null

const countLabel = computed(() =>
  filterStore.keyword ? '搜索中...' : modulesStore.totalModules + ' 模块'
)

function onInput() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    filterStore.setKeyword(localKeyword.value)
  }, 200)
}

function onSearch(val) {
  filterStore.setKeyword(val)
}

function onClear() {
  filterStore.clearAll()
  localKeyword.value = ''
}
</script>

<style scoped>
.search-box {
  width: 420px; margin: 10px auto 0; position: relative;
  transition: width .3s cubic-bezier(.4,0,.2,1);
}
.search-box:focus-within {
  width: 560px; box-shadow: 0 4px 20px rgba(13,148,136,.18);
}
.search-box input {
  width: 100%; padding: 10px 16px 10px 38px; border: 2px solid transparent;
  border-radius: 24px; font-size: 14px; outline: none;
  background: rgba(255,255,255,.94); box-shadow: 0 2px 12px rgba(0,0,0,.08);
  min-height: 38px; transition: all .25s ease;
}
.search-box input:focus {
  box-shadow: 0 2px 16px rgba(52,112,255,.25); background: #fff; border-color: #3470ff;
}
.search-box::before { content: '🔍'; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 14px; z-index: 1 }
.search-box .count { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); font-size: 11px; color: #aaa; background: #f0f0f0; padding: 3px 8px; border-radius: 12px }
.search-box.has-value .count { right: 70px }
.search-clear { position: absolute; right: 44px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background: var(--border); color: var(--text3); cursor: pointer; font-size: .65em; display: flex; align-items: center; justify-content: center; border: none; z-index: 2 }

@media (max-width: 600px) {
  /* 移动端用van-search，不需要这些样式 */
}
</style>
```

- [ ] **Step 2: 创建 CategorySelect.vue**

分类下拉组件，移动端用 `van-dropdown-menu`，PC端用自定义select。

```vue
<template>
  <van-dropdown-menu v-if="isMobile" :close-on-click-outside="true">
    <van-dropdown-item v-model="selectedTag" :options="tagOptions" @change="onTagChange" />
  </van-dropdown-menu>
  <select v-else id="tag-select" v-model="selectedTag" @change="onTagChange">
    <option value="">✨ 全部模块</option>
    <optgroup label="☕ 后端">
      <option value="Java 基础">☕ Java基础</option>
      <option value="集合">📚 集合</option>
      <option value="并发">⚡ 并发</option>
      <option value="JVM">🧩 JVM</option>
      <option value="IO">🔄 IO</option>
      <option value="计算机基础">💻 计算机基础</option>
      <option value="MySQL">🗄️ MySQL</option>
      <option value="Redis">📐 Redis</option>
      <option value="Spring">🌐 Spring</option>
    </optgroup>
    <optgroup label="🚀 分布式与架构">
      <option value="分布式系统">🚀 分布式系统</option>
      <option value="高性能">⚡ 高性能</option>
      <option value="高可用">🛡️ 高可用</option>
      <option value="ElasticSearch">🔍 ElasticSearch</option>
      <option value="MongoDB">🍃 MongoDB</option>
      <option value="PostgreSQL">🐘 PostgreSQL</option>
    </optgroup>
    <optgroup label="🎨 前端">
      <option value="JavaScript">🟨 JavaScript</option>
      <option value="Vue2">💚 Vue2</option>
      <option value="Vue3">💚 Vue3</option>
      <option value="TypeScript">🔷 TypeScript</option>
      <option value="HTML与CSS">🎨 HTML/CSS</option>
      <option value="场景题">🎯 场景题</option>
    </optgroup>
    <optgroup label="🐳 运维与工具">
      <option value="Docker">🐳 Docker</option>
      <option value="Kubernetes">☸️ K8s</option>
      <option value="Nginx">🟢 Nginx</option>
      <option value="Git">🔧 Git</option>
      <option value="CI/CD">🔄 CI/CD</option>
    </optgroup>
    <optgroup label="🔧 中间件">
      <option value="消息队列">📨 消息队列</option>
      <option value="Nacos/Sentinel">🛡️ Nacos/Sentinel</option>
      <option value="Dubbo">🔗 Dubbo</option>
    </optgroup>
    <optgroup label="🤖 AI与面试">
      <option value="AI与Agent">🤖 AI与Agent</option>
      <option value="HR面试">💼 HR面试</option>
    </optgroup>
  </select>
</template>

<script setup>
import { ref } from 'vue'
import { useFilterStore } from '../stores/filter.js'
import { useDevice } from '../composables/useDevice.js'

const filterStore = useFilterStore()
const { isMobile } = useDevice()
const selectedTag = ref(filterStore.tagFilter)

const tagOptions = [
  { text: '✨ 全部模块', value: '' },
  { text: '☕ Java基础', value: 'Java 基础' },
  { text: '🗄️ MySQL', value: 'MySQL' },
  { text: '📐 Redis', value: 'Redis' },
  { text: '🟨 JavaScript', value: 'JavaScript' },
  { text: '💚 Vue3', value: 'Vue3' },
  { text: '🚀 分布式系统', value: '分布式系统' },
  { text: '🐳 Docker', value: 'Docker' },
  { text: '🤖 AI与Agent', value: 'AI与Agent' },
  // ... 完整43个tag选项（与PC端optgroup一致）
]

function onTagChange(val) {
  filterStore.setTagFilter(val)
}
</script>

<style scoped>
#tag-select {
  font-size: 12px; padding: 7px 12px; border-radius: 20px;
  border: 1px solid var(--border); background: var(--card);
  color: var(--text2); min-height: 30px; cursor: pointer; outline: none;
  max-width: 140px; transition: all .2s;
}
#tag-select:focus { border-color: var(--accent) }

@media (max-width: 600px) {
  /* van-dropdown-menu自带样式 */
}
</style>
```

- [ ] **Step 3: 创建 ModuleCard.vue**

模块卡片，首页概览。点击跳转到 `/module/:id`。

```vue
<template>
  <van-cell v-if="isMobile" :title="mod.title" :value="mod.pointCount + ' 条'" is-link
    :label="mod.subCount + ' 个子分类'"
    @click="goToModule"
  >
    <template #icon>
      <span class="card-icon">{{ mod.icon }}</span>
    </template>
  </van-cell>
  <div v-else class="module-card m{{ mod.cssIndex }}" @click="goToModule">
    <div class="module-head" :style="{ background: `linear-gradient(135deg, var(--c${mod.cssIndex}), ${lightenColor(mod.cssIndex)})` }">
      <span class="icon">{{ mod.icon }}</span>
      <span class="title">{{ mod.title }}</span>
      <span class="badge">{{ mod.pointCount }} 条</span>
      <span class="arrow">▶</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useDevice } from '../composables/useDevice.js'
import { useFilterStore } from '../stores/filter.js'

const props = defineProps({ mod: Object })
const router = useRouter()
const { isMobile } = useDevice()
const filterStore = useFilterStore()

function goToModule() {
  // 搜索关键词传递到模块详情页
  router.push({ name: 'module', params: { id: props.mod.id }, query: { keyword: filterStore.keyword } })
}

function lightenColor(ci) {
  // 返回CSS变量值的较亮版本，用于渐变
  const map = {
    0: '#818cf8', 1: '#f87171', 2: '#fbbf24', 3: '#34d399', 4: '#60a5fa',
    5: '#c084fc', 6: '#fb923c', 7: '#2dd4bf', 8: '#ef4444', 9: '#10b981',
    10: '#3b82f6', 11: '#f97316', 12: '#38bdf8', 13: '#e879f9', 14: '#fb7185',
    15: '#a78bfa', 16: '#f43f5e', 17: '#67e8f9', 18: '#d8b4fe', 19: '#0891b2',
    20: '#4f46e5', 21: '#059669', 22: '#a78bfa', 23: '#fbbf24', 24: '#38bdf8',
    25: '#818cf8', 26: '#60a5fa', 27: '#f87171', 28: '#34d399', 29: '#fbbf24',
    30: '#c084fc', 31: '#fb923c', 32: '#f87171', 33: '#ffc633', 34: '#3ce0ce',
    35: '#ff6c6c', 36: '#2dbe91', 37: '#63aaff', 38: '#b384ff', 39: '#36cdff',
    40: '#d07dff', 41: '#ff6b4a', 42: '#38bdf8'
  }
  return map[ci] || '#818cf8'
}
</script>

<style scoped>
.module-card {
  background: var(--card); border-radius: var(--radius);
  margin-bottom: 16px; overflow: hidden; box-shadow: var(--shadow);
  cursor: pointer; transition: all .2s;
}
.module-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,.08); transform: translateY(-2px) }
.module-head {
  padding: 16px 24px; color: #fff; font-size: 1.05em; font-weight: 600;
  display: flex; align-items: center; gap: 8px; user-select: none;
}
.module-head .icon { font-size: 1em; flex-shrink: 0 }
.module-head .title { flex: 1 }
.module-head .badge { font-size: .7em; padding: 3px 12px; border-radius: 12px; background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.25); font-weight: 500 }
.module-head .arrow { margin-left: auto; font-size: .8em; opacity: .8 }
.card-icon { font-size: 1.2em; margin-right: 6px }
</style>
```

- [ ] **Step 4: 实现 HomeView.vue**

```vue
<template>
  <div class="home-view">
    <div class="module-grid">
      <ModuleCard v-for="mod in displayedModules" :key="mod.id" :mod="mod" />
    </div>
    <div v-if="displayedModules.length === 0 && filterStore.keyword" class="no-result">
      🔍 未找到匹配 "{{ filterStore.keyword }}" 的模块
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useModulesStore } from '../stores/modules.js'
import { useFilterStore } from '../stores/filter.js'
import { useDevice } from '../composables/useDevice.js'
import ModuleCard from '../components/ModuleCard.vue'

const modulesStore = useModulesStore()
const filterStore = useFilterStore()
const { isMobile } = useDevice()

const displayedModules = computed(() => {
  const index = modulesStore.sortedIndex
  if (!filterStore.keyword && !filterStore.tagFilter) return index
  return index.filter(m => {
    if (filterStore.tagFilter) return m.tag === filterStore.tagFilter
    if (filterStore.keyword) {
      const kw = filterStore.keyword.toLowerCase()
      return m.title.toLowerCase().includes(kw) || m.tag.toLowerCase().includes(kw)
    }
    return true
  })
})
</script>

<style scoped>
.home-view {
  max-width: 960px; margin: 0 auto; padding: 0 16px 60px;
}
.module-grid {
  display: grid; grid-template-columns: 1fr; gap: 16px;
}
@media (min-width: 601px) {
  .module-grid { grid-template-columns: repeat(2, 1fr) }
}
.no-result { text-align: center; color: var(--text3); padding: 40px; font-size: 1em }
</style>
```

- [ ] **Step 5: 验证 — npm run dev**

Expected: 认证通过 → 首页显示43个模块卡片（PC端2列grid，移动端单列列表） → 点击卡片跳转 `/module/mysql`（ModuleView仍为骨架） → 搜索框输入关键词过滤模块 → 分类下拉筛选标签

- [ ] **Step 6: Commit**

```bash
git add src/components/SearchBox.vue src/components/CategorySelect.vue src/components/ModuleCard.vue src/views/HomeView.vue
git commit -m "v3.0 — SearchBox + CategorySelect + ModuleCard + HomeView (首页模块卡片列表)"
```

---

### Task 5: ModuleView + SubSection + PointItem + DetailItem

**Files:**
- Create: `src/views/ModuleView.vue` (替换骨架)
- Create: `src/components/SubSection.vue` (替换骨架)
- Create: `src/components/PointItem.vue` (替换骨架)
- Create: `src/components/DetailItem.vue` (替换骨架)

**Interfaces:**
- Consumes: `useModulesStore` (loadModule, moduleData, loadingModule) from Task 2
- Consumes: `useFilterStore` (keyword, matchText) from Task 2
- Consumes: `useSearch` (highlightHtml) from Task 2
- Consumes: `useDevice` (isMobile) from Task 2
- Consumes: Vue Router `route.params.id` — module ID
- Consumes: Vue Router `route.query.keyword` — search keyword passed from HomeView
- Produces: ModuleView renders full module detail with subs, points, details

- [ ] **Step 1: 创建 ModuleView.vue**

```vue
<template>
  <div class="module-view">
    <!-- 加载态 -->
    <van-skeleton v-if="loading" title :row="5" :row-width="['60%','100%','80%','90%','70%']" />

    <!-- 空模块 -->
    <div v-else-if="!module" class="not-found">
      <p>❌ 模块不存在</p>
      <van-button type="primary" @click="$router.push('/')">返回首页</van-button>
    </div>

    <!-- 模块详情 -->
    <template v-else>
      <!-- 模块头部 -->
      <div class="module-header" :style="{ background: `linear-gradient(135deg, var(--c${module.cssIndex}), ${lighten(module.cssIndex)})` }">
        <button class="back-btn" @click="$router.push('/')">←</button>
        <span class="mod-icon">{{ module.icon }}</span>
        <span class="mod-title">{{ module.title }}</span>
        <span class="mod-badge">{{ totalPoints }} 条知识点</span>
      </div>

      <!-- 子分类列表 -->
      <div class="sub-list">
        <SubSection
          v-for="sub in module.subs"
          :key="sub.id"
          :sub="sub"
          :module-id="module.id"
          :color-index="module.cssIndex"
          :keyword="filterStore.keyword"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useModulesStore } from '../stores/modules.js'
import { useFilterStore } from '../stores/filter.js'
import SubSection from '../components/SubSection.vue'

const route = useRoute()
const modulesStore = useModulesStore()
const filterStore = useFilterStore()

const module = computed(() => modulesStore.moduleData.get(route.params.id))
const loading = computed(() => modulesStore.loadingModule === route.params.id)

const totalPoints = computed(() => {
  if (!module.value) return 0
  return module.value.subs.reduce((sum, s) => sum + s.points.length, 0)
})

function lighten(ci) {
  const map = {
    0:'#818cf8',1:'#f87171',2:'#fbbf24',3:'#34d399',4:'#60a5fa',
    5:'#c084fc',6:'#fb923c',7:'#2dd4bf',8:'#ef4444',9:'#10b981',
    10:'#3b82f6',11:'#f97316',12:'#38bdf8',13:'#e879f9',14:'#fb7185',
    15:'#a78bfa',16:'#f43f5e',17:'#67e8f9',18:'#d8b4fe',19:'#0891b2',
    20:'#4f46e5',21:'#059669',22:'#a78bfa',23:'#fbbf24',24:'#38bdf8',
    25:'#818cf8',26:'#60a5fa',27:'#f87171',28:'#34d399',29:'#fbbf24',
    30:'#c084fc',31:'#fb923c',32:'#f87171',33:'#ffc633',34:'#3ce0ce',
    35:'#ff6c6c',36:'#2dbe91',37:'#63aaff',38:'#b384ff',39:'#36cdff',
    40:'#d07dff',41:'#ff6b4a',42:'#38bdf8'
  }
  return map[ci] || '#818cf8'
}

onMounted(async () => {
  await modulesStore.loadModule(route.params.id)
  // 从首页传递的搜索关键词
  if (route.query.keyword) {
    filterStore.setKeyword(route.query.keyword)
  }
})

// 路由变化时重新加载模块
watch(() => route.params.id, async (newId) => {
  if (newId) await modulesStore.loadModule(newId)
})
</script>

<style scoped>
.module-view {
  max-width: 960px; margin: 0 auto; padding: 0 16px 60px;
}
.module-header {
  color: #fff; padding: 20px 24px; display: flex; align-items: center; gap: 8px;
  border-radius: var(--radius); margin-bottom: 16px;
}
.back-btn {
  background: rgba(255,255,255,.2); color: #fff; border: 1px solid rgba(255,255,255,.3);
  padding: 6px 12px; border-radius: 8px; cursor: pointer; font-size: .9em;
}
.back-btn:hover { background: rgba(255,255,255,.35) }
.mod-icon { font-size: 1.2em }
.mod-title { flex: 1; font-size: 1.1em; font-weight: 600 }
.mod-badge { font-size: .7em; padding: 3px 12px; border-radius: 12px; background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.25) }
.not-found { text-align: center; padding: 60px; color: var(--text3) }
.sub-list { display: flex; flex-direction: column; gap: 8px }

@media (max-width: 600px) {
  .module-header { padding: 14px 16px; border-radius: 12px; margin-bottom: 10px }
  .mod-title { font-size: .92em }
  .module-view { padding: 0 10px 60px }
}
</style>
```

- [ ] **Step 2: 创建 SubSection.vue**

双分支渲染：移动端 `van-collapse`，PC端自定义手风琴。

```vue
<template>
  <!-- 移动端: Vant Collapse -->
  <van-collapse v-if="isMobile" v-model="activeNames">
    <van-collapse-item :title="sub.title" :name="sub.id">
      <template #title-extra>
        <van-tag type="primary" size="small" round>{{ sub.points.length }}</van-tag>
      </template>
      <PointItem
        v-for="pt in filteredPoints"
        :key="pt.id"
        :point="pt"
        :color-index="colorIndex"
        :keyword="keyword"
      />
    </van-collapse-item>
  </van-collapse>

  <!-- PC端: 自定义手风琴 -->
  <div v-else class="sub-section" :class="{ open: isOpen }">
    <div class="sub-head" @click="toggle">
      <span class="dot" :style="{ background: `var(--c${colorIndex})` }"></span>
      <span class="sub-title">{{ sub.title }}</span>
      <span class="count">{{ filteredPoints.length }}</span>
      <span class="arrow">▶</span>
    </div>
    <div class="points" v-if="isOpen">
      <PointItem
        v-for="pt in filteredPoints"
        :key="pt.id"
        :point="pt"
        :color-index="colorIndex"
        :keyword="keyword"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDevice } from '../composables/useDevice.js'
import { useFilterStore } from '../stores/filter.js'
import { useSearch } from '../composables/useSearch.js'
import PointItem from './PointItem.vue'

const props = defineProps({
  sub: Object,
  moduleId: String,
  colorIndex: Number,
  keyword: String
})

const { isMobile } = useDevice()
const filterStore = useFilterStore()
const { matchText } = useSearch()

const activeNames = ref([])
const isOpen = ref(false)

function toggle() { isOpen.value = !isOpen.value }

const filteredPoints = computed(() => {
  if (!filterStore.keyword) return props.sub.points
  return props.sub.points.filter(pt =>
    matchText(pt.tag, filterStore.keyword) || matchText(pt.desc, filterStore.keyword)
  )
})
</script>

<style scoped>
.sub-section { background: var(--card); border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow) }
.sub-head {
  padding: 12px 22px 12px 28px; font-size: .9em; font-weight: 600;
  color: var(--text); cursor: pointer; display: flex; align-items: center; gap: 8px;
  background: var(--bg); transition: background .15s;
}
.sub-head:hover { background: #f5f7fa }
.sub-head .dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0 }
.sub-head .sub-title { flex: 1; min-width: 0 }
.sub-head .count { font-size: .7em; padding: 3px 10px; border-radius: 999px; background: rgba(99,102,241,.07); color: var(--accent); border: 1px solid rgba(99,102,241,.12) }
.sub-head .arrow { margin-left: auto; font-size: .65em; color: var(--text3); transition: transform .25s }
.sub-section.open .arrow { transform: rotate(90deg) }
.points { padding: 4px 22px 14px }
</style>
```

- [ ] **Step 3: 创建 PointItem.vue**

```vue
<template>
  <!-- 移动端: van-cell -->
  <van-cell v-if="isMobile" :title="highlightHtml(pt.tag, keyword)" clickable
    :label="pt.open ? highlightHtml(pt.desc, keyword) : ''"
    @click="togglePoint"
  >
    <template #right-icon>
      <van-tag v-if="pt.details && pt.details.length" type="primary" size="small" round>
        {{ pt.details.length }} 条
      </van-tag>
    </template>
  </van-cell>
  <!-- 展开的详情列表(移动端) -->
  <div v-if="isMobile && pt.open && pt.details && pt.details.length" class="mobile-details">
    <DetailItem v-for="(d, i) in pt.details" :key="d.id" :detail="d" :index="i" :keyword="keyword" :color-index="colorIndex" />
  </div>

  <!-- PC端: 自定义卡片 -->
  <div v-else class="point has-detail" :class="{ open: pt.open }"
    :style="{ borderLeftColor: `rgba(var(--c${colorIndex}-rgb),.5)` }"
    @click="togglePoint"
  >
    <div class="point-row">
      <span class="tag" v-html="highlightHtml(pt.tag, keyword)"></span>
      <span class="desc" v-html="highlightHtml(pt.desc, keyword)"></span>
      <span class="expand-hint" v-if="pt.details && pt.details.length">
        {{ pt.details.length }} 条
      </span>
    </div>
    <div class="detail-wrap" v-if="pt.open && pt.details">
      <div class="detail-list">
        <DetailItem v-for="(d, i) in pt.details" :key="d.id" :detail="d" :index="i" :keyword="keyword" :color-index="colorIndex" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDevice } from '../composables/useDevice.js'
import { useSearch } from '../composables/useSearch.js'
import DetailItem from './DetailItem.vue'

const props = defineProps({
  point: Object,
  colorIndex: Number,
  keyword: String
})

const { isMobile } = useDevice()
const { highlightHtml } = useSearch()

const pt = ref({ ...props.point, open: false })

function togglePoint() {
  pt.value.open = !pt.value.open
}
</script>

<style scoped>
.point {
  padding: 11px 14px; margin: 6px 0; background: var(--card);
  border-radius: 10px; border-left: 3px solid transparent;
  font-size: .87em; position: relative; cursor: pointer; transition: all .22s;
}
.point:hover { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.06) }
.point.open { border-left-color: var(--accent); box-shadow: 0 2px 12px rgba(52,112,255,.12) }
.point-row { display: flex; gap: 12px; align-items: center }
.point .tag { flex-shrink: 0; font-weight: 650; color: var(--text); border-right: 2px solid var(--border); padding-right: 6px; margin-right: 2px }
.point.open .tag { border-right-color: var(--accent) }
.point .desc { color: var(--text2); flex: 1; line-height: 1.75; font-size: .93em; word-break: break-word }
.expand-hint {
  flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;
  padding: 3px 10px; border-radius: 14px; background: rgba(99,102,241,.08);
  color: var(--text3); border: 1.5px solid rgba(99,102,241,.12);
  font-size: .7em; font-weight: 600;
}
.point.open .expand-hint { background: var(--accent); color: #fff; border-color: var(--accent) }
.detail-wrap { margin-top: 14px }
.detail-list { padding: 12px }
.mobile-details { padding: 8px 16px }
</style>
```

- [ ] **Step 4: 创建 DetailItem.vue**

```vue
<template>
  <!-- 移动端: van-cell -->
  <van-cell v-if="isMobile" :title="labelText" clickable @click="toggleSub">
    <template #right-icon>
      <van-icon v-if="detail.desc && detail.tag" name="arrow" :class="{ rotated: open }" />
    </template>
  </van-cell>
  <!-- sub-detail展开 -->
  <div v-if="isMobile && open && detail.desc" class="mobile-sub-detail" v-html="highlightHtml(detail.desc, keyword)"></div>

  <!-- PC端: 自定义编号卡片 -->
  <div v-else class="detail-item" :class="{ 'has-sub': detail.tag && detail.desc, open }"
    @click="detail.tag && detail.desc ? toggleSub() : null"
  >
    <span class="detail-number" :style="{ background: `linear-gradient(135deg, var(--accent), #a78bfa)` }">{{ index + 1 }}</span>
    <span class="detail-tag" v-html="highlightHtml(labelText, keyword)"></span>
    <span v-if="detail.tag && detail.desc" class="sub-arrow" :class="{ open }"></span>
    <div v-if="open && detail.desc" class="sub-detail" v-html="highlightHtml(detail.desc, keyword)"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDevice } from '../composables/useDevice.js'
import { useSearch } from '../composables/useSearch.js'

const props = defineProps({
  detail: Object,
  index: Number,
  keyword: String,
  colorIndex: Number
})

const { isMobile } = useDevice()
const { highlightHtml } = useSearch()

const open = ref(false)

const labelText = computed(() => {
  let t = (props.detail.tag || '').trim() || (props.detail.desc || '').trim()
  t = t.replace(/^第\d+[、.]\s*/, '').replace(/^\d+[.、)]\s*/, '').replace(/^[①②③④⑤⑥⑦⑧⑨⑩]/, '')
  return t
})

function toggleSub() { open.value = !open.value }
</script>

<style scoped>
.detail-item {
  padding: 14px 18px 14px 48px; margin: 10px 0; font-size: .95em;
  line-height: 1.8; color: var(--text2); position: relative; transition: all .2s;
  background: var(--card); border-radius: 12px; border: 1px solid var(--border);
}
.detail-item:hover { color: var(--text); background: #f8fafc; border-color: rgba(99,102,241,.18) }
.detail-item.has-sub { cursor: pointer; font-weight: 600; color: var(--text); padding-right: 36px }
.detail-item.has-sub.open { border-left-color: var(--accent); background: var(--bg) }
.detail-number {
  position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
  width: 20px; height: 20px; border-radius: 50%; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: .65em; font-weight: 700;
}
.sub-arrow {
  position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
  width: 18px; height: 18px; border-radius: 50%;
  background: rgba(99,102,241,.08); color: var(--text3);
  border: 1.5px solid rgba(99,102,241,.12);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all .28s;
}
.sub-detail {
  display: none; margin: 12px 0 4px -10px; padding: 12px 16px;
  background: var(--card); border-radius: 10px; font-size: .84em;
  color: var(--text2); border-left: 3px solid var(--accent);
}
.detail-item.has-sub.open .sub-detail { display: block }
.mobile-sub-detail {
  padding: 10px 16px; font-size: .84em; color: var(--text2);
  background: var(--card); border-radius: 8px; margin: 4px 16px;
  border-left: 3px solid var(--accent); line-height: 1.8;
}
.rotated { transform: rotate(90deg) }
</style>
```

- [ ] **Step 5: 验证 — npm run dev**

Expected: 认证通过 → 首页点击模块卡片 → 跳转到 `/module/mysql` → 看到模块渐变头部 + 子分类折叠(移动端Vant collapse/PC端自定义手风琴) → 展开子分类看到知识点 → 展开知识点看到详情条目 → 详情条目可再展开sub-detail → 骨架屏loading → 搜索关键词传递并高亮

- [ ] **Step 6: Commit**

```bash
git add src/views/ModuleView.vue src/components/SubSection.vue src/components/PointItem.vue src/components/DetailItem.vue
git commit -m "v3.0 — ModuleView + SubSection + PointItem + DetailItem (模块详情页完整交互)"
```

---

### Task 6: QuickNav + PC端样式完善 + Dark模式Vant覆盖

**Files:**
- Create: `src/components/QuickNav.vue` (替换骨架)
- Modify: `src/styles/pc.css` (完善PC端布局)
- Modify: `src/styles/dark.css` (添加Vant深色覆盖)

**Interfaces:**
- Consumes: `useModulesStore` (moduleIndex or moduleData) from Task 2
- Consumes: `useScroll` from Task 2
- Consumes: `useDevice` (isMobile) from Task 2

- [ ] **Step 1: 创建 QuickNav.vue**

PC端侧边快速导航，移动端隐藏。

```vue
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
import { ref, onMounted, onUnmounted } from 'vue'
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

onMounted(() => {
  window.addEventListener('scroll', () => {
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
  })
})
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
```

注意：QuickNav的 `navItems` 需要 `computed` import:
```js
import { ref, computed, onMounted, onUnmounted } from 'vue'
```

- [ ] **Step 2: 完善 src/styles/pc.css**

```css
@media (min-width: 601px) {
  /* 搜索框更大更圆 */
  .search-box { width: 420px }
  .search-box:focus-within { width: 560px; box-shadow: 0 4px 20px rgba(13,148,136,.18) }
  .search-box input { border-radius: 24px; padding: 10px 16px 10px 38px; font-size: 14px; min-height: 38px }

  /* 模块卡片网格布局 */
  .module-grid { display: grid; grid-template-columns: repeat(2, 1fr) }

  /* 详情条目更大圆角 */
  .detail-item { border-radius: 12px; padding: 14px 18px 14px 48px }
  .detail-number { width: 20px; height: 20px; font-size: .65em }

  /* 快速导航可见 */
  .quick-nav { display: flex }

  /* 回到顶部右下角 */
  .back-top-pc { bottom: 32px; right: 24px }
}
```

- [ ] **Step 3: 完善 src/styles/dark.css (Vant深色覆盖)**

```css
.dark { --bg: #0f172a; --card: #1e293b; --text: #e2e8f0; --text2: #94a3b8; --text3: #64748b; --border: #334155; --shadow: 0 2px 12px rgba(0,0,0,.3) }

/* Vant组件深色覆盖 */
.dark .van-cell { background: #1e293b; color: #e2e8f0 }
.dark .van-cell-group { background: #1e293b }
.dark .van-collapse-item__title { background: #1e293b; color: #e2e8f0 }
.dark .van-collapse-item__content { background: #1e293b; color: #e2e8f0 }
.dark .van-search { background: #1e293b }
.dark .van-search__content { background: #263548; border-radius: 24px }
.dark .van-field__control { color: #e2e8f0 }
.dark .van-tag--primary { background: rgba(13,148,136,.3); color: #6ee7b8 }
.dark .van-dialog { background: #1e293b; color: #e2e8f0 }
.dark .van-dropdown-menu { background: #1e293b }
.dark .van-dropdown-item__content { background: #1e293b }
.dark .van-dropdown-item__option { color: #94a3b8 }
.dark .van-dropdown-item__option--active { color: #6ee7b8 }
.dark .van-skeleton { background: #263548 }
.dark .van-back-top { background: #065f46; color: #6ee7b8 }
.dark .van-popup { background: #1e293b; color: #e2e8f0 }

/* 搜索高亮深色 */
.dark .hl { background: #422006; color: #fbbf24 }

/* 自定义组件深色 */
.dark .module-card { background: #1e293b }
.dark .sub-head { background: #1e293b; color: #e2e8f0 }
.dark .sub-head:hover { background: #263548 }
.dark .point { background: #1e293b; border-color: #475569; color: #e2e8f0 }
.dark .point:hover { background: #263548 }
.dark .point.open { border-left-color: #6ee7b7 }
.dark .detail-item { background: #1e293b; border-color: #334155; color: #94a3b8 }
.dark .detail-item:hover { background: #263548; border-color: rgba(99,102,241,.25); color: #e2e8f0 }
.dark .detail-item.has-sub { color: #e2e8f0 }
.dark .detail-item.has-sub.open { border-left-color: #6ee7b7 }
.dark .detail-item .sub-detail { background: #0f172a; border-left-color: #065f46; color: #e2e8f0 }
.dark .back-top-pc { background: #065f46 }
.dark .module-header { box-shadow: 0 8px 32px rgba(0,0,0,.5) }
```

- [ ] **Step 4: 验证 — npm run dev + 切换窗口宽度**

Expected:
- PC端(>600px): 模块卡片2列grid + 搜索框420px宽 + 侧边QuickNav + 自定义手风琴
- 移动端(≤600px): 单列 + van-search + van-collapse + van-cell
- 深色模式(Vant组件+自定义组件都正确)
- QuickNav hover显示模块名label

- [ ] **Step 5: Commit**

```bash
git add src/components/QuickNav.vue src/styles/pc.css src/styles/dark.css
git commit -m "v3.0 — QuickNav + PC端样式完善 + Dark模式Vant覆盖"
```

---

### Task 7: GitHub Actions部署更新 + 生产构建验证

**Files:**
- Modify: `.github/workflows/deploy.yml`
- Modify: `.gitignore` (确认node_modules/dist排除)

**Interfaces:**
- Consumes: 整个Vite构建流程(npm run build → dist)
- Produces: GitHub Pages可访问的静态站点

- [ ] **Step 1: 更新 .github/workflows/deploy.yml**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          enablement: true

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: 确认 .gitignore 包含排除项**

确认 `.gitignore` 包含:
```
node_modules/
dist/
```

- [ ] **Step 3: 本地生产构建测试**

Run: `npm run build`
Expected: 构建成功，dist目录生成，包含 index.html + assets/ + data/*.json

- [ ] **Step 4: 本地预览测试**

Run: `npm run preview`
Expected: 本地预览服务器启动，浏览器打开可看到完整应用(认证→首页→模块详情)

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/deploy.yml .gitignore
git commit -m "v3.0 — GitHub Actions部署更新(Node+npm ci+Vite build+dist)"
```

- [ ] **Step 6: 最终合并commit + 推送**

所有任务完成后，推送main分支触发GitHub Actions自动部署：

```bash
git push origin main
```

Expected: GitHub Actions触发构建+部署，完成后 https://ghtaoge.github.io/interview-guide/ 可访问v3.0版本

---

## Spec Coverage Check

| Spec需求 | 对应Task |
|---|---|
| Vue 3 + Vite SPA | Task 1 (脚手架) |
| Vant 4 移动端 | Task 3-5 (AuthGate/SearchBox/SubSection/PointItem/DetailItem) |
| Vue Router (/ + /module/:id) | Task 1 (router), Task 4-5 (视图) |
| Pinia stores (auth/modules/filter) | Task 2 |
| Composables (theme/device/scroll/search) | Task 2 |
| 数据懒加载(fetch JSON) | Task 1 (数据转换), Task 2 (modules store), Task 5 (ModuleView) |
| 密码验证(SHA-256) | Task 3 (AuthGate) |
| 深色模式 | Task 2 (useTheme), Task 6 (dark.css Vant覆盖) |
| PC端CSS覆盖 | Task 6 (pc.css) |
| 搜索过滤 | Task 4 (SearchBox/filterStore), Task 5 (keyword传递+高亮) |
| 分类选择 | Task 4 (CategorySelect) |
| 骨架屏loading | Task 5 (ModuleView van-skeleton) |
| 侧边QuickNav(PC) | Task 6 |
| 回到顶部 | Task 3 (BackToTop PC/van-back-top移动) |
| GitHub Pages部署 | Task 7 |
| 编辑模式(省略) | 确认省略 ✅ |
| 43模块颜色CSS变量 | Task 1 (variables.css) |

所有spec需求均有对应task覆盖。无遗漏。

## Placeholder Scan

搜索plan中是否存在 TBD/TODO/implement later 等占位符 — 无发现。所有代码步骤包含完整实现内容。

## Type Consistency Check

- `useAuthStore.isAuthenticated` — Task 2定义ref(false), Task 3 AuthGate使用 ✅
- `useModulesStore.loadModule(id)` — Task 2定义async函数, Task 5 ModuleView调用 ✅
- `useModulesStore.moduleData` — Map类型, Task 5 ModuleView用 `moduleData.get(id)` ✅
- `useFilterStore.keyword` — ref string, Task 4 SearchBox绑定 ✅
- `useDevice().isMobile` — ref boolean, 所有双分支组件使用 ✅
- `useSearch().highlightHtml(text, keyword)` — 函数, PointItem/DetailItem使用 ✅
- ModuleCard `lightenColor(ci)` 和 ModuleView `lighten(ci)` — 函数名一致 ✅
- Vue Router params `route.params.id` — Task 5 ModuleView使用 ✅
- Vue Router query `route.query.keyword` — Task 4 HomeView传递, Task 5 ModuleView接收 ✅
