// tools/convert.js — Node.js 转换脚本
// 用法: node tools/convert.js
// 读取 javaguide-review.html 中的 D[] 数据，转换为模块化 .js 文件
// 修复: 原始 D[] 数组中模块 25 和 33 位置错乱，本脚本通过解析标题中的中文序号正确排序

const fs = require('fs');
const path = require('path');

// ===== 模块分组: 41 个模块 → 14 个文件 =====
const MODULE_GROUPS = [
  { file: 'java-basic.js', ids: ['java-basic','java-collection','java-concurrent','jvm','java-io'] },
  { file: 'computer-basic.js', ids: ['computer-basic'] },
  { file: 'mysql.js', ids: ['mysql'] },
  { file: 'redis.js', ids: ['redis'] },
  { file: 'spring.js', ids: ['spring'] },
  { file: 'system-design.js', ids: ['system-design','computer-network'] },
  { file: 'frontend-js-vue.js', ids: ['javascript','vue2','vue3','typescript'] },
  { file: 'scene-html-webpack.js', ids: ['scene','html-css','webpack'] },
  { file: 'devops.js', ids: ['docker','kubernetes','nginx'] },
  { file: 'distributed.js', ids: ['distributed-system','high-performance','high-availability','interview-prep'] },
  { file: 'db-middleware.js', ids: ['elasticsearch','mongodb','postgresql','maven','minio','netty'] },
  { file: 'ai-msg.js', ids: ['ai-framework','rabbitmq-kafka','nacos-sentinel'] },
  { file: 'tools-spec.js', ids: ['dubbo','diagnostic-tools','easyexcel','coding-standards','performance-optimization','data-structures','hr-interview'] },
];

// ===== 中文标题 → 模块 ID 映射 =====
const TITLE_TO_ID = {
  '一、Java 基础': 'java-basic',
  '二、Java 集合框架': 'java-collection',
  '三、Java 并发编程': 'java-concurrent',
  '四、JVM 虚拟机': 'jvm',
  '五、Java IO': 'java-io',
  '六、计算机基础': 'computer-basic',
  '七、MySQL': 'mysql',
  '八、Redis': 'redis',
  '九、Spring': 'spring',
  '十、系统设计': 'system-design',
  '十一、计算机网络': 'computer-network',
  '十二、JavaScript 前端基础': 'javascript',
  '十三、Vue2 生态体系': 'vue2',
  '十四、Vue3 生态体系': 'vue3',
  '十五、TypeScript': 'typescript',
  '十六、全栈场景题': 'scene',
  '十七、HTML与CSS': 'html-css',
  '十八、Webpack与前端工程化': 'webpack',
  '十九、Docker 容器技术': 'docker',
  '二十、Kubernetes 容器编排': 'kubernetes',
  '二十一、Nginx 高性能 Web 服务器': 'nginx',
  '二十二、分布式系统': 'distributed-system',
  '二十三、高性能': 'high-performance',
  '二十四、高可用': 'high-availability',
  '二十五、面试准备': 'interview-prep',
  '二十六、ElasticSearch': 'elasticsearch',
  '二十七、MongoDB': 'mongodb',
  '二十八、PostgreSQL': 'postgresql',
  '二十九、Maven': 'maven',
  '三十、Minio': 'minio',
  '三十一、Netty': 'netty',
  '三十二、AI与AI框架': 'ai-framework',
  '三十三、HR常见问题与回答': 'hr-interview',
  '三十四、RabbitMQ与Kafka消息队列': 'rabbitmq-kafka',
  '三十五、Nacos与Sentinel微服务组件': 'nacos-sentinel',
  '三十六、Dubbo RPC框架': 'dubbo',
  '三十七、Druid与Arthas诊断工具': 'diagnostic-tools',
  '三十八、EasyExcel与数据处理': 'easyexcel',
  '三十九、编程规范与代码质量': 'coding-standards',
  '四十、性能优化与线上问题排查': 'performance-optimization',
  '四十一、常见数据结构与算法': 'data-structures',
};

// ===== 模块序号 → 短标签映射 (用于分类过滤) =====
const ORDER_TO_TAG = {
  1: 'Java 基础', 2: '集合', 3: '并发', 4: 'JVM', 5: 'IO',
  6: '计算机基础', 7: 'MySQL', 8: 'Redis', 9: 'Spring', 10: '分布式',
  11: '计算机网络', 12: 'JavaScript', 13: 'Vue2', 14: 'Vue3', 15: 'TypeScript',
  16: '场景题', 17: 'HTML与CSS', 18: 'Webpack', 19: 'Docker', 20: 'Kubernetes',
  21: 'Nginx', 22: '分布式系统', 23: '高性能', 24: '高可用', 25: '面试准备',
  26: 'ElasticSearch', 27: 'MongoDB', 28: 'PostgreSQL', 29: 'Maven', 30: 'Minio',
  31: 'Netty', 32: 'AI与Agent', 33: 'HR面试', 34: '消息队列', 35: 'Nacos/Sentinel',
  36: 'Dubbo', 37: '诊断工具', 38: 'EasyExcel', 39: '编程规范', 40: '性能优化',
  41: '数据结构',
};

// ===== 图标数组 (按 D[] 数组原始顺序索引) =====
const ICONS = ['☕','📋','💠','🧩','🔄','💻','🗄️','📠','🌐','🚀','🛡️','🟨','💚','💚','🟧','🎯','🎨','📦','🐻','🔥','🟢','🚀','💠','🛡️','📋','🔍','🍃','🐘','🔨','☁️','💠','🤖','📨','🛡️','🔗','🔧','📊','📐','⚡','🧮','💼'];

// ===== 中文数字解析 =====
const CN_NUM = {'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9,'十':10,'零':0};
function parseChineseNumber(title) {
  const m = title.match(/^([一二三四五六七八九十]+)、/);
  if (!m) return 0;
  const s = m[1];
  if (s === '十') return 10;
  if (s.startsWith('十')) return 10 + CN_NUM[s[1]];
  if (s.endsWith('十')) return CN_NUM[s[0]] * 10;
  if (s.includes('十')) {
    const parts = s.split('十');
    return CN_NUM[parts[0]] * 10 + (parts[1] ? CN_NUM[parts[1]] : 0);
  }
  return CN_NUM[s] || 0;
}

// ===== 从 HTML 中提取数组 (支持字符串中的括号) =====
function extractArray(html, startMarker) {
  const startIdx = html.indexOf(startMarker);
  if (startIdx === -1) return null;
  let i = startIdx + startMarker.length - 1; // 指向 '['
  let depth = 0;
  let inStr = false, strCh = '';
  while (i < html.length) {
    const ch = html[i];
    if (inStr) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === strCh) inStr = false;
    } else {
      if (ch === '"' || ch === "'") { inStr = true; strCh = ch; }
      else if (ch === '[') depth++;
      else if (ch === ']') { depth--; if (depth === 0) break; }
    }
    i++;
  }
  return html.substring(startIdx + startMarker.length - 1, i + 1);
}

// ===== ID 生成辅助函数 =====
function tagToId(tag) {
  const cleaned = tag.replace(/[\/\\]/g, '-')
    .replace(/[^a-zA-Z0-9一-鿿-]/g, '')
    .toLowerCase()
    .substring(0, 40);
  return cleaned || 'pt';
}

function subTitleToId(title) {
  return title.replace(/[.、\s]/g, '-')
    .replace(/[^a-zA-Z0-9一-鿿-]/g, '')
    .toLowerCase()
    .substring(0, 40);
}

// ===== 转换函数 =====
function convertPoint(pointArray, order, subIdx, pointIdx) {
  const tag = pointArray[0] || '';
  const desc = pointArray[1] || '';
  const id = tagToId(tag) + '-' + order + '-' + subIdx + '-' + pointIdx;

  // 处理 details (point[2] 及之后)
  let details = [];
  if (pointArray.length > 2) {
    let detailData;
    if (Array.isArray(pointArray[2])) {
      detailData = pointArray[2];
    } else {
      // 混合格式: 后面的元素可能是数组或字符串
      detailData = [];
      for (let k = 2; k < pointArray.length; k++) {
        if (Array.isArray(pointArray[k])) {
          for (let m = 0; m < pointArray[k].length; m++) detailData.push(pointArray[k][m]);
        } else {
          detailData.push(pointArray[k]);
        }
      }
    }
    details = detailData.map(function(d, di) {
      if (Array.isArray(d)) {
        return { id: id + '-d' + di, tag: d[0] || '', desc: d[1] || '' };
      }
      return { id: id + '-d' + di, tag: '', desc: d || '' };
    });
  }

  return { id: id, tag: tag, desc: desc, details: details };
}

function convertSub(subObj, order, subIdx) {
  const title = subObj.s || '';
  const id = subTitleToId(title) + '-' + order + '-' + subIdx;
  const points = (subObj.p || []).map(function(p, pi) {
    return convertPoint(p, order, subIdx, pi);
  });
  return { id: id, title: title, points: points };
}

function convertModule(modObj, dIndex) {
  const title = modObj.t || '';
  const id = TITLE_TO_ID[title] || ('module-' + dIndex);
  const order = parseChineseNumber(title);
  const tag = ORDER_TO_TAG[order] || title.replace(/^[一二三四五六七八九十]+、/, '');
  const icon = ICONS[dIndex] || '📋';
  const cssIndex = dIndex; // 保留原始 D[] 索引用于 CSS 颜色类
  const subs = (modObj.c || []).map(function(s, si) {
    return convertSub(s, order, si);
  });
  return { id: id, title: title, tag: tag, order: order, icon: icon, cssIndex: cssIndex, subs: subs };
}

// ===== 文件生成 =====
function generateModuleFile(mod) {
  const jsonStr = JSON.stringify(mod, null, 2);
  return '// ' + mod.id + '.js — ' + mod.title + ' 模块数据\n' +
    '// 此文件由 tools/convert.js 生成，可手动编辑维护\n\n' +
    'window.__MODULES__ = window.__MODULES__ || {};\n' +
    'window.__MODULES__[\'' + mod.id + '\'] = ' + jsonStr + ';\n';
}

function getGroupFile(moduleId) {
  for (const group of MODULE_GROUPS) {
    if (group.ids.includes(moduleId)) return group.file;
  }
  return 'unknown.js';
}

function generateConfigFile(modules) {
  // 按 order 排序生成注册表
  const sorted = modules.slice().sort(function(a, b) { return a.order - b.order; });
  const entries = sorted.map(function(m) {
    return '    { id: "' + m.id + '", file: "data/' + getGroupFile(m.id) + '", order: ' + m.order + ', tag: "' + m.tag + '" }';
  }).join(',\n');

  return '// config.js — 全局配置\n' +
    '// 管理员密码使用 SHA-256 + 盐值哈希存储\n' +
    '// 生成密码哈希: 在浏览器 console 中运行\n' +
    '//   async function h(p){const s="javaguide2026salt";const d=new TextEncoder().encode(s+p);\n' +
    '//     const b=await crypto.subtle.digest("SHA-256",d);return "sha256$javaguide2026salt$"+\n' +
    '//     Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,"0")).join("")}\n' +
    '//   h("你的密码").then(console.log)\n\n' +
    'window.__MODULE_CONFIG__ = {\n' +
    '  modules: [\n' + entries + '\n  ],\n' +
    '  admin: {\n' +
    '    // 替换下方哈希值为你的实际密码哈希\n' +
    '    // 盐值: javaguide2026salt\n' +
    '    // 默认密码: admin123 (请务必修改!)\n' +
    '    passwordHash: "sha256$javaguide2026salt$8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",\n' +
    '    sessionDuration: 3600000\n' +
    '  },\n' +
    '  ui: {\n' +
    '    title: "全栈面试宝典",\n' +
    '    version: "2.2"\n' +
    '  }\n' +
    '};\n';
}

// ===== 主逻辑 =====
function main() {
  const htmlPath = path.resolve(__dirname, '..', '..', 'javaguide-review.html');
  console.log('Reading: ' + htmlPath);
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // 提取 D[] 数组
  const dataStr = extractArray(htmlContent, 'const D=[');
  if (!dataStr) { console.error('Cannot find D[] in HTML'); process.exit(1); }

  // 使用 eval 解析 (受控环境的一次性脚本)
  let D;
  try {
    D = eval(dataStr);
  } catch (e) {
    console.error('Failed to parse D[]:', e.message);
    process.exit(1);
  }
  console.log('Found ' + D.length + ' modules');

  // 转换每个模块
  const convertedModules = D.map(function(mod, mi) { return convertModule(mod, mi); });

  // 按 order 排序
  convertedModules.sort(function(a, b) { return a.order - b.order; });

  // 按分组写入 data/*.js 文件
  const dataDir = path.resolve(__dirname, '..', 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  for (const group of MODULE_GROUPS) {
    const groupModules = convertedModules.filter(function(m) {
      return group.ids.includes(m.id);
    });
    // 组内按 order 排序
    groupModules.sort(function(a, b) { return a.order - b.order; });

    const fileContent = groupModules.map(function(m) { return generateModuleFile(m); }).join('\n');
    const filePath = path.join(dataDir, group.file);
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log('Written ' + group.file + ' (' + groupModules.length + ' modules)');
  }

  // 生成 config.js
  const configContent = generateConfigFile(convertedModules);
  fs.writeFileSync(path.resolve(__dirname, '..', 'config.js'), configContent, 'utf-8');
  console.log('Written config.js');

  // 打印统计信息
  var totalSubs = 0, totalPoints = 0, totalDetails = 0;
  for (var i = 0; i < convertedModules.length; i++) {
    totalSubs += convertedModules[i].subs.length;
    for (var j = 0; j < convertedModules[i].subs.length; j++) {
      totalPoints += convertedModules[i].subs[j].points.length;
      for (var k = 0; k < convertedModules[i].subs[j].points.length; k++) {
        totalDetails += (convertedModules[i].subs[j].points[k].details || []).length;
      }
    }
  }
  console.log('\nConversion complete!');
  console.log('  Modules: ' + convertedModules.length);
  console.log('  Subs: ' + totalSubs);
  console.log('  Points: ' + totalPoints);
  console.log('  Details: ' + totalDetails);
}

main();
