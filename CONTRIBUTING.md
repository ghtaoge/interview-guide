# 贡献指南

感谢你对 **全栈面试宝典** 的关注！欢迎通过以下方式参与贡献。

## 贡献方式

### 📝 修正或补充知识内容

模块数据以 JSON 格式存放在 `public/data/` 目录：

- `index.json` — 模块索引
- `{module-id}.json` — 单模块内容（子主题 → 知识点 → 详情）

修改步骤：

1. Fork 本仓库
2. 编辑对应 JSON 文件，补充或修正知识点
3. 新增模块需同时在 `src/config.js` 的 `modules` 数组中注册
4. 提交 Pull Request

JSON 结构示例：

```json
{
  "id": "java-basic",
  "title": "Java 基础",
  "subs": [
    {
      "id": "sub-1",
      "title": "数据类型",
      "points": [
        {
          "id": "point-1",
          "tag": "基础",
          "desc": "Java 有哪些基本数据类型？",
          "details": [
            { "id": "detail-1", "tag": "知识点", "desc": "8 种基本类型：byte/short/int/long/float/double/char/boolean" }
          ]
        }
      ]
    }
  ]
}
```

### 🐛 报告 Bug

在 [Issues](../../issues) 页面提交 Bug 报告，请包含：

- 问题描述与复现步骤
- 浏览器 / 设备信息
- 截图或错误日志（如有）

### 💡 提出新功能建议

在 [Issues](../../issues) 页面提交 Feature Request，说明：

- 需求背景
- 期望的功能描述
- 可能的实现思路（可选）

## 开发流程

```bash
# 1. Fork & Clone
git clone https://github.com/{your-username}/interview-guide.git

# 2. 安装依赖
npm install

# 3. 本地开发
npm run dev

# 4. 构建验证
npm run build

# 5. 提交 PR
```

## 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
<type>: <description>

type:
  docs     — 文档 / README / 知识内容更新
  feat     — 新功能
  fix      — Bug 修复
  style    — UI 样式调整
  refactor — 代码重构（不影响功能）
  chore    — 构建 / 配置 / 工具变更
```

## 代码风格

- Vue 3 Composition API（`<script setup>`）
- ESLint（项目配置）
- 中文注释与文档

## 许可证

本项目采用 [MIT License](LICENSE)，贡献内容同样受 MIT 许可证约束。
