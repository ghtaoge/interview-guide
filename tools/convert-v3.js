// tools/convert-v3.js — JS数据 → JSON数据转换
// 用法: node tools/convert-v3.js
// 从 data/*.js 读取 window.__MODULES__ 格式数据
// 输出到 public/data/*.json (37个独立JSON) + public/data/index.json

import fs from 'fs'
import path from 'path'
import vm from 'vm'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.resolve(__dirname, '..', 'data')
const OUTPUT_DIR = path.resolve(__dirname, '..', 'public', 'data')

// 模块分组映射(与现有config.js一致)
const MODULE_GROUPS = [
  { file: 'java-basic.js', ids: ['java-basic','java-collection','java-concurrent','jvm','java-io'] },
  { file: 'computer-basic.js', ids: ['computer-basic'] },
  { file: 'mysql.js', ids: ['mysql'] },
  { file: 'redis.js', ids: ['redis'] },
  { file: 'spring.js', ids: ['spring'] },
  { file: 'system-design.js', ids: ['computer-network'] },
  { file: 'frontend-js-vue.js', ids: ['javascript','vue2','vue3','typescript'] },
  { file: 'scene-html-webpack.js', ids: ['scene','html-css','webpack'] },
  { file: 'devops.js', ids: ['docker','kubernetes','nginx','git','cicd'] },
  { file: 'distributed.js', ids: ['distributed-system','high-performance','high-availability','interview-prep'] },
  { file: 'db-middleware.js', ids: ['elasticsearch','mongodb','maven','netty'] },
  { file: 'ai-msg.js', ids: ['ai-framework','rabbitmq-kafka'] },
  { file: 'tools-spec.js', ids: ['easyexcel','data-structures','hr-interview','design-patterns','diagnostic-perf'] },
]

// 使用 vm 模块在沙箱中执行 JS 文件，安全提取 window.__MODULES__
function parseModulesFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const sandbox = { window: {} }
  sandbox.window.__MODULES__ = sandbox.window.__MODULES__ || {}
  vm.createContext(sandbox)
  try {
    vm.runInContext(content, sandbox, { timeout: 5000 })
  } catch (e) {
    console.error(`  执行文件失败 ${path.basename(filePath)}: ${e.message}`)
  }
  return sandbox.window.__MODULES__ || {}
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
