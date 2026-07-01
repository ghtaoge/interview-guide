# 全栈面试宝典 v3.0

> 一站式全栈面试知识库，覆盖 Java 后端、中间件、分布式架构、前端、计算机基础与 HR 面试共 **37 个专题模块**。

![Vue 3](https://img.shields.io/badge/Vue-3.4-green?logo=vue.js)
![Vant 4](https://img.shields.io/badge/Vant-4.9-blue?logo=vant)
![Vite 5](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-gray)

## ✨ 特性

- **37 个面试专题**：从 Java 基础到 HR 面试，后端 / 中间件 / DevOps / 前端 / CS 基础 / 场景题全覆盖
- **密码门控**：SHA-256 + 盐值哈希验证，1 小时 localStorage 会话保持
- **明暗主题**：一键切换 + `Ctrl+D` 快捷键 + 系统配色跟随
- **双端适配**：移动端 Vant 组件 UI / 桌面端自定义 CSS UI，600px 断点自动切换
- **关键词搜索**：跨模块全文检索 + HTML 高亮匹配
- **滚动交互**：进度条 + 回顶 + 渐入动画（IntersectionObserver）
- **数据热加载**：JSON 数据文件按模块独立存放，运行时 HTTP 拉取，无需重新构建即可更新内容

## 📋 知识模块一览

| 分类 | 模块 |
|------|------|
| **Java 后端** | Java 基础 · IO · 集合 · 并发 · JVM · Spring · Netty |
| **数据库 & 中间件** | MySQL · Redis · MongoDB · ElasticSearch · 消息队列 (RabbitMQ/Kafka) |
| **分布式 & 架构** | 分布式系统 · 高性能 · 高可用 · 诊断与优化 |
| **DevOps** | Git · Maven · CI/CD · Docker · Kubernetes · Nginx |
| **前端** | JavaScript · HTML/CSS · Vue2 · Vue3 · TypeScript · Webpack |
| **CS 基础** | 计算机基础 · 计算机网络 · 数据结构 · 设计模式 |
| **AI & 安全** | AI 与 Agent · 编码安全 |
| **面试实战** | 场景题 · 面试准备 · HR 面试 |

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3 (Composition API) + Vue Router 4 |
| UI | Vant 4（移动端） · 自定义 CSS（桌面端） |
| 状态管理 | Pinia（modules / auth / filter 三个 store） |
| 构建 | Vite 5 |
| 数据 | JSON 文件（`public/data/`，运行时 fetch） |
| 认证 | SHA-256 + 盐值哈希，localStorage 会话 |

## 📁 项目结构

```
interview-guide/
├── public/
│   ├── favicon.svg               # 站点图标
│   └── data/                      # 39 个模块 JSON + index.json
├── src/
│   ├── main.js                    # 入口（Pinia + Router）
│   ├── config.js                  # 模块注册 + 管理员哈希配置
│   ├── router/
│   │   └── index.js               # 单路由 SPA
│   ├── stores/
│   │   ├── modules.js             # 模块索引 + 数据加载缓存
│   │   ├── auth.js                # 密码验证 + 会话管理
│   │   └── filter.js              # 关键词/标签搜索
│   ├── composables/
│   │   ├── useTheme.js            # 明暗主题切换
│   │   ├── useDevice.js           # 移动/桌面检测
│   │   ├── useScroll.js           # 滚动进度 + 回顶
│   │   └── useSearch.js           # 文本匹配 + HTML 高亮
│   ├── components/
│   │   ├── AuthGate.vue           # 密码门控组件
│   │   ├── HeaderBar.vue          # 顶栏（标题 + 搜索 + 分类 + 主题）
│   │   ├── HomeView.vue           # 主页（模块卡片列表）
│   │   ├── ModuleCard.vue         # 单模块卡片
│   │   ├── SubSection.vue         # 子主题区
│   │   ├── PointItem.vue          # 知识点条目
│   │   ├── DetailItem.vue         # 详情展开
│   │   ├── SearchBox.vue          # 搜索框
│   │   ├── CategorySelect.vue     # 分类筛选（移动端 Drawer）
│   │   ├── ThemeToggle.vue        # 主题切换按钮
│   │   ├── ScrollProgress.vue     # 滚动进度条
│   │   └── QuickNav.vue           # 快速导航
│   │   └── BackToTop.vue          # 回到顶部
│   └── styles/
│       ├── variables.css          # CSS 变量
│       ├── global.css             # 全局样式
│       ├── pc.css                 # 桌面端样式
│       └── dark.css               # 暗色主题覆盖
├── index.html                     # SPA 入口 HTML
├── vite.config.js                 # Vite 构建（base: /interview-guide/）
├── package.json                   # 依赖 & 脚本
└── .github/workflows/deploy.yml   # GitHub Pages 自动部署
```

## 🚀 快速开始

### 安装依赖

```bash
cd interview-guide
npm install
```

### 本地开发

```bash
npm run dev
# 访问 http://localhost:5173/interview-guide/
```

### 生产构建

```bash
npm run build
# 输出到 dist/
```

### 预览构建产物

```bash
npm run preview
```

## 🔐 管理员门控

首次访问需输入管理员密码。默认密码可在 `src/config.js` 中修改：

```js
admin: {
  passwordHash: "sha256$javaguide2026salt$...",  // SHA-256 + 盐值
  sessionDuration: 3600000                        // 1 小时
}
```

生成新密码哈希（浏览器 console）：

```js
async function h(p) {
  const s = "javaguide2026salt";
  const d = new TextEncoder().encode(s + p);
  const b = await crypto.subtle.digest("SHA-256", d);
  return "sha256$javaguide2026salt$" +
    Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join("");
}
h("你的新密码").then(console.log);
```

## 📝 内容更新

模块数据以 JSON 格式存放在 `public/data/` 目录，每个模块一个文件：

- `index.json` — 模块索引（id、标题、标签、排序、图标、统计）
- `{module-id}.json` — 单模块内容（子主题 → 知识点 → 详情）

更新内容只需修改 JSON 文件，无需重新构建前端。新增模块需在 `src/config.js` 的 `modules` 数组中注册。

## 🌐 部署

项目通过 GitHub Actions 自动部署到 GitHub Pages：

- **触发条件**：push 到 `main` 分支
- **构建流程**：Node 20 → npm ci → vite build → upload artifact → deploy-pages
- **站点路径**：`https://{username}.github.io/interview-guide/`

Vite 构建的 `base` 配置为 `/interview-guide/`，确保 GitHub Pages 子路径下资源引用正确。

## 📜 License

MIT
