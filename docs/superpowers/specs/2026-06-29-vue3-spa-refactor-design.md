# Interview Guide v3.0 — Vue 3 全功能 SPA 重构设计

**日期**: 2026-06-29
**版本**: 3.0.0
**状态**: 已审批

## 背景

当前 interview-guide 项目是纯静态单页应用，由 1 个 HTML(497行内联CSS/HTML) + 1 个 JS(1040行命令式逻辑) + 13 个数据JS文件(~28K行)组成。核心问题：

1. **移动端体验差** — 一大长页滚完43个模块，只有CSS覆盖式优化
2. **无组件化** — 字符串拼接DOM渲染，全局函数事件绑定
3. **无状态管理** — DOM操作驱动，无响应式数据流
4. **全量同步加载** — 13个script标签加载28K行数据，移动端首屏慢
5. **难维护** — 1040行命令式代码混杂渲染/事件/搜索/认证/编辑/导出

用户决定：**Vue 3 + Vite 全功能 SPA 重构**，仍部署为静态页面到 GitHub Pages。

## 设计决策

| 决策项 | 选择 | 原因 |
|---|---|---|
| 框架 | Vue 3 + Vite | 与项目Vue数据生态一致，Composition API清晰 |
| 移动端UI | Vant 4 | 原生触控体验，40+移动端组件 |
| PC端UI | 同一Vue组件 + PC CSS覆盖 | 一套组件两套CSS，代码量最少 |
| 路由 | Vue Router | 移动端按模块独立查看，不用滚长页面 |
| 状态 | Pinia | 集中管理模块/认证/搜索，为后续编辑模式预留 |
| 数据加载 | 懒加载(fetch JSON) | 首屏只加载~2KB索引，28K数据按需加载 |
| 编辑模式 | 暂砍掉，后续迭代 | 降低重构复杂度 |
| 认证门 | 保留密码验证 | SHA-256 + localStorage session |
| 部署 | Vite build → dist → GitHub Pages | 仍是静态文件部署 |

## 项目结构

```
interview-guide/
├── src/
│   ├── main.js                  # Vue 3 入口 (createApp + Pinia + Router + Vant)
│   ├── App.vue                  # 根组件 (AuthGate + RouterView)
│   ├── router/
│   │   └── index.js             # Vue Router: / → HomeView, /module/:id → ModuleView
│   ├── stores/
│   │   ├── modules.js           # Pinia: 模块索引 + 懒加载完整数据
│   │   ├── auth.js              # Pinia: SHA-256密码验证 + localStorage session
│   │   ├── filter.js            # Pinia: 搜索关键词 + 标签过滤
│   ├── views/
│   │   ├── HomeView.vue         # 首页: 模块卡片列表
│   │   ├── ModuleView.vue       # 模块详情: 子分类折叠 + 知识点展开
│   ├── components/
│   │   ├── AuthGate.vue         # 密码验证覆盖层
│   │   ├── HeaderBar.vue        # 顶部栏(sticky) + 搜索 + 分类 + 主题切换
│   │   ├── SearchBox.vue        # 搜索框(van-search移动 / 自定义PC)
│   │   ├── CategorySelect.vue   # 分类下拉(van-dropdown移动 / select PC)
│   │   ├── ModuleCard.vue       # 模块卡片(首页概览)
│   │   ├── SubSection.vue       # 子分类折叠(van-collapse移动 / 自定义PC)
│   │   ├── PointItem.vue        # 知识点条目(van-cell移动 / 自定义PC)
│   │   ├── DetailItem.vue       # 详情条目(含sub-detail展开)
│   │   ├── QuickNav.vue         # 侧边快速导航(PC端)
│   │   ├── ScrollProgress.vue   # 滚动进度条
│   │   ├── BackToTop.vue        # 回到顶部(van-back-top移动 / 自定义PC)
│   │   ├── ThemeToggle.vue      # 深色模式切换
│   ├── composables/
│   │   ├── useTheme.js          # 深色模式(localStorage + body.classList)
│   │   ├── useScroll.js         # 滚动监听 + 进度 + 回到顶部
│   │   ├── useSearch.js         # 搜索过滤逻辑(matchText, highlight)
│   │   ├── useDevice.js         # isMobile判断(innerWidth <= 600 + resize)
│   ├── styles/
│   │   ├── variables.css        # CSS变量(43色 + 主题色 + 圆角 + 阴影)
│   │   ├── global.css           # 重置/排版/滚动条
│   │   ├── pc.css               # PC端专属样式(min-width: 601px)
│   │   ├── dark.css             # 深色模式覆盖(.dark class)
│   ├── config.js                # 模块注册配置 + 管理员密码hash (ES模块导入,不暴露到public)
│   ├── data/                    # [不删除] 原始JS数据源
├── public/
│   ├── data/
│   │   ├── index.json           # 轻量模块索引(~2KB)
│   │   ├── java-basic.json      # 各模块完整JSON数据(43个文件)
│   │   ├── java-collection.json
│   │   ├── ... (43个独立JSON)
│   │   └── tools-spec.json
│   └── favicon.svg
├── index.html                   # Vite入口HTML
├── vite.config.js               # Vite配置(base: '/', publicDir: 'public')
├── package.json                 # 依赖管理
├── .github/workflows/deploy.yml # 更新: 加Node + npm ci + npm run build
├── tools/convert.js             # 数据转换(data/*.js → public/data/*.json + index.json)
└── data/                        # [保留] 原始JS数据文件(不删除)
```

## 路由设计

```
/                → HomeView     (首页: 模块卡片概览 + 搜索 + 分类)
/module/:id      → ModuleView   (模块详情: 子分类 + 知识点展开)
```

**移动端核心提升**: 首页只展示模块卡片列表，点击某个模块跳转到 `/module/mysql` 独立查看。不用滚一个包含43个模块的长页面。

搜索/过滤在首页高亮匹配模块，跳转到详情页后关键词自动传递。

## 数据层

### 两层结构

1. **`index.json` (~2KB)** — 模块元数据索引，首屏必须加载:
```json
[
  {"id":"java-basic","title":"一、Java基础","tag":"Java 基础","order":1,"icon":"☕","cssIndex":0,"subCount":5,"pointCount":35},
  ...43条
]
```

2. **`{id}.json`** — 模块完整数据，用户点击时才fetch:
```json
{
  "id":"mysql","title":"七、MySQL","tag":"MySQL","order":7,"icon":"🗄️","cssIndex":6,
  "subs":[{"id":"sub-7-1","title":"7.1 MySQL基础","points":[...]}]
}
```

JSON放在 `public/data/` 下，Vite原样复制到dist，不参与打包。

### Pinia modules store

```js
export const useModulesStore = defineStore('modules', () => {
  const moduleIndex = ref([])        // 从index.json加载
  const moduleData = ref(new Map())  // 按需加载的完整数据
  const loadingModule = ref(null)    // 加载中模块ID

  async function loadIndex() {
    const resp = await fetch('/data/index.json')
    moduleIndex.value = await resp.json()
  }

  async function loadModule(id) {
    if (moduleData.has(id)) return moduleData.get(id)
    loadingModule.value = id
    const resp = await fetch(`/data/${id}.json`)
    const data = await resp.json()
    moduleData.set(id, data)
    loadingModule.value = null
    return data
  }

  async function loadAllForSearch() {
    await Promise.all(moduleIndex.value.map(m => loadModule(m.id)))
  }

  const totalModules = computed(() => moduleIndex.value.length)
  const totalPoints = computed(() => moduleIndex.value.reduce((sum, m) => sum + m.pointCount, 0))

  return { moduleIndex, moduleData, loadingModule,
           loadIndex, loadModule, loadAllForSearch,
           totalModules, totalPoints }
})
```

### 数据转换

当前 `data/*.js` 格式 (`window.__MODULES__['id'] = {...}`) 需转为独立JSON。

转换规则：
- 一个JS文件可能包含多个模块(如java-basic.js含5个模块)
- 每个模块ID生成独立JSON文件
- 从所有模块提取轻量元数据生成 `index.json`

转换工具 `tools/convert.js` 从 `data/*.js` → `public/data/*.json` + `public/data/index.json`。

原始 `data/*.js` 保留在仓库中作为数据源，不删除。

## 状态管理

### auth store

```js
export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const authTime = ref(0)

  function checkSession() {
    const stored = localStorage.getItem('javaguide_auth')
    if (!stored) return false
    const data = JSON.parse(stored)
    const duration = window.__MODULE_CONFIG__.admin.sessionDuration
    if (Date.now() - data.authTime > duration) {
      localStorage.removeItem('javaguide_auth')
      return false
    }
    isAuthenticated.value = true
    return true
  }

  async function verifyPassword(password) {
    const [, salt, expectedHash] = window.__MODULE_CONFIG__.admin.passwordHash.split('$')
    const input = salt + password
    const buffer = new TextEncoder().encode(input)
    const hashHex = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', buffer)))
      .map(b => b.toString(16).padStart(2, '0')).join('')
    if (hashHex === expectedHash) {
      isAuthenticated.value = true
      authTime.value = Date.now()
      localStorage.setItem('javaguide_auth', JSON.stringify({ authenticated: true, authTime: Date.now() }))
      return true
    }
    return false
  }

  return { isAuthenticated, checkSession, verifyPassword }
})
```

### filter store

```js
export const useFilterStore = defineStore('filter', () => {
  const keyword = ref('')
  const tagFilter = ref('')

  function setKeyword(val) { keyword.value = val; tagFilter.value = '' }
  function setTagFilter(val) { tagFilter.value = val; keyword.value = '' }
  function clearAll() { keyword.value = ''; tagFilter.value = '' }

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

### useTheme composable

```js
export function useTheme() {
  const isDark = ref(localStorage.getItem('darkMode') !== '0')
  function toggle() {
    isDark.value = !isDark.value
    localStorage.setItem('darkMode', isDark.value ? '1' : '0')
    document.body.classList.toggle('dark', isDark.value)
  }
  onMounted(() => document.body.classList.toggle('dark', isDark.value))
  return { isDark, toggle }
}
```

### useDevice composable

```js
export function useDevice() {
  const isMobile = ref(window.innerWidth <= 600)
  onMounted(() => {
    window.addEventListener('resize', () => { isMobile.value = window.innerWidth <= 600 })
  })
  return { isMobile }
}
```

## 页面组件树

### HomeView (首页)

```
AuthGate (v-if="!authStore.isAuthenticated")
  └─ van-dialog 密码输入 + van-field + 错误提示

RouterView (v-else, 认证后)
  └─ HeaderBar (sticky)
     ├─ van-search (移动) / SearchBox (PC)
     ├─ van-dropdown-menu (移动) / CategorySelect (PC)
     ├─ ThemeToggle (🌙/☀️)
     └─ van-popover 更多菜单(后续迭代编辑/导出)
  ├─ ScrollProgress
  ├─ div.module-grid
  │   ├─ ModuleCard × 43 (卡片: 渐变头部 + 标题 + 知识点数 + →查看)
  │   │   PC: grid 2列布局
  │   │   移动: 单列列表
  ├─ QuickNav (PC端侧边导航点)
  └─ van-back-top (移动) / BackToTop (PC)
```

### ModuleView (模块详情)

```
HeaderBar (含返回按钮 ←)
  ├─ BackButton (← 返回首页, router.push('/'))
  ├─ van-search (移动: "在本模块搜索...") / SearchBox (PC)
  └─ 模块名badge

ModuleHeader (渐变色头部 + 标题 + 总知识点数)

van-collapse (移动) / 自定义accordion (PC)
  ├─ SubSection × N
  │   ├─ van-collapse-item title="7.1 MySQL基础" (移动)
  │   │   ├─ PointItem × M
  │   │   │   ├─ van-cell (移动) / 自定义卡片 (PC)
  │   │   │   │   ├─ tag + desc + expand-hint badge
  │   │   │   │   └─ DetailItem × K (展开后)
  │   │   │   │       ├─ van-cell (移动) / 自定义编号卡片 (PC)
  │   │   │   │       └─ sub-detail (可再展开)

van-skeleton (加载态骨架屏)
van-back-top (移动) / BackToTop (PC)
QuickNav (PC端子分类导航)
```

## 移动端 Vant 组件映射

| 当前DOM | Vant 4组件 | 用途 |
|---|---|---|
| 手写搜索框 | `van-search` | 搜索(按钮/清除/placeholder) |
| toolbar按钮 | `van-tag` + `van-button` | 分类标签(胶囊/触控友好) |
| 模块卡片 | `van-cell` + `van-tag` | 模块概览(标题+数量+箭头) |
| sub折叠 | `van-collapse` + `van-collapse-item` | 子分类折叠(原生手势) |
| point列表 | `van-cell-group` + `van-cell` | 知识点条目(点击展开) |
| detail列表 | `van-cell` + `van-tag` | 详情(序号+标签+描述) |
| 分类下拉 | `van-dropdown-menu` | 分类筛选(比select触控好) |
| 更多菜单 | `van-popover` | 操作弹窗 |
| 滚动进度 | CSS | 顶部进度条 |
| 回到顶部 | `van-back-top` | Vant内置(带动画) |
| loading | `van-loading` + `van-skeleton` | 数据加载骨架屏 |
| 密码弹层 | `van-dialog` + `van-field` | 验证弹窗(更精致) |

## 移动端/PC端适配策略

同一Vue组件，通过 `isMobile` 条件切换渲染分支:

```vue
<template>
  <!-- 移动端: Vant组件 -->
  <van-collapse v-if="isMobile" v-model="activeNames">
    <van-collapse-item :title="sub.title" :name="sub.id">
      <PointItem v-for="pt in filteredPoints" :key="pt.id" :point="pt" />
    </van-collapse-item>
  </van-collapse>

  <!-- PC端: 自定义手风琴 -->
  <div v-else class="sub-section" :class="{ open: isOpen }" @click="toggle">
    <div class="sub-head">...</div>
    <div class="points" v-if="isOpen">
      <PointItem v-for="pt in filteredPoints" :key="pt.id" :point="pt" />
    </div>
  </div>
</template>
```

`isMobile` 来自 `useDevice()` composable (`window.innerWidth <= 600` + resize监听)。

## CSS策略

### variables.css
```css
:root {
  --bg: #f0f4f8; --card: #fff; --text: #1a202c;
  --text2: #4a5568; --text3: #94a3b8; --border: #e2e8f0;
  --accent: #0d9488; --accent2: #e8833a;
  --radius: 16px; --radius-sm: 10px;
  --shadow: 0 2px 12px rgba(0,0,0,.06);
  --c0: #6366f1; --c1: #ef4444; ... --c42: #0ea5e9;
}
```

### global.css
重置 + 排版 + 滚动条 (与当前基本一致，提取为独立文件)

### pc.css
```css
@media (min-width: 601px) {
  .search-box input { width: 420px; border-radius: 24px; }
  .search-box:focus-within { width: 560px; }
  .module-grid { display: grid; grid-template-columns: repeat(2, 1fr); }
  .detail-item { border-radius: 12px; padding: 14px 48px; }
  .quick-nav { display: flex; }
  .back-top { bottom: 32px; right: 24px; }
}
```

### dark.css
```css
.dark {
  --bg: #0f172a; --card: #1e293b; --text: #e2e8f0;
  --text2: #94a3b8; --text3: #64748b; --border: #334155;
}
.dark .van-cell { background: #1e293b; color: #e2e8f0; }
.dark .van-collapse-item__content { background: #1e293b; }
```

## 构建与部署

### Vite配置

```js
export default defineConfig({
  base: '/',
  build: { outDir: 'dist', assetsInlineLimit: 0 },
  plugins: [vue(), VantResolver()]
})
```

JSON数据放在 `public/data/` (Vite原样复制到dist，不参与打包)。

### package.json

```json
{
  "name": "interview-guide",
  "version": "3.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "convert": "node tools/convert.js"
  },
  "dependencies": {
    "vue": "^3.4",
    "vue-router": "^4.3",
    "pinia": "^2.1",
    "vant": "^4.8"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0",
    "vite": "^5.4",
    "unplugin-vant-components": "^1.x"
  }
}
```

Vant通过 `unplugin-vant-components` 按需自动导入，不打包未使用组件。

### GitHub Actions

```yaml
jobs:
  build:
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }  # 从 . 改为 dist
  deploy:
    # 同现有，不变
```

关键变化: 加 `setup-node` + `npm ci` + `npm run build`，artifact路径改为 `dist`。

## 省略项(后续迭代)

- 编辑模式 (IndexedDB增删改 + 导出) — v3.1
- 全局搜索加载所有模块数据 — 需 `loadAllForSearch()`，v3.0仅模块内搜索
- PWA离线缓存 — v3.2
- 收藏/书签功能 — v3.3
- AI对话辅助 — v3.x

## 不变项

- 43模块数据内容 — 不修改
- 模块颜色系统(43色) — CSS变量保留
- 管理员密码hash — SHA-256+盐值逻辑保留
- 深色模式 — localStorage持久化保留
- GitHub Pages部署 — 仅加build步骤
