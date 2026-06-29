// scene.js — 十六、全栈场景题 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['scene'] = {
  "id": "scene",
  "title": "十六、全栈场景题",
  "tag": "场景题",
  "order": 16,
  "icon": "🎯",
  "cssIndex": 15,
  "subs": [
    {
      "id": "16-1-前端场景题-16-0",
      "title": "16.1 前端场景题",
      "points": [
        {
          "id": "大列表渲染优化-16-0-0",
          "tag": "大列表渲染优化",
          "desc": "万级数据列表渲染导致页面卡顿如何用虚拟滚动实现高性能渲染",
          "details": [
            {
              "id": "大列表渲染优化-16-0-0-d0",
              "tag": "使用vue-virtual-scroll-list或react-virtualized只渲染可视区域内DOM节点",
              "desc": "虚拟滚动库计算可视区域偏移只渲染可见项DOM，万级数据仅维护几十个DOM节点，滚动性能接近常量级O(可视数)"
            },
            {
              "id": "大列表渲染优化-16-0-0-d1",
              "tag": "核心原理",
              "desc": "监听scroll事件计算可视区起止索引动态替换渲染列表slice"
            },
            {
              "id": "大列表渲染优化-16-0-0-d2",
              "tag": "动态行高场景需先测量每行实际高度构建位置映射表用二分查找快速定位",
              "desc": "动态行高先渲染测量每行真实高度缓存到位置映射表(offsetMap)，滚动时用二分查找快速定位起始索引避免全量遍历"
            },
            {
              "id": "大列表渲染优化-16-0-0-d3",
              "tag": "配合requestAnimationFrame避免滚动抖动使用will-change:transform触发GPU合成层",
              "desc": "rAF在渲染帧前计算偏移避免滚动事件中同步计算抖动；will-change:transform提升为GPU合成层减少重绘开销"
            },
            {
              "id": "大列表渲染优化-16-0-0-d4",
              "tag": "大数据量不可交互纯展示场景优先考虑分页",
              "desc": "大数据量不可交互纯展示场景优先考虑分页加载"
            }
          ]
        },
        {
          "id": "首屏加载优化-16-0-1",
          "tag": "首屏加载优化",
          "desc": "SPA首屏白屏时间长从路由懒加载、预加载、骨架屏多角度优化",
          "details": [
            {
              "id": "首屏加载优化-16-0-1-d0",
              "tag": "路由懒加载",
              "desc": "const Home=()=>import('./Home')按路由拆分chunk减少首屏JS体积"
            },
            {
              "id": "首屏加载优化-16-0-1-d1",
              "tag": "组件预加载",
              "desc": "requestIdleCallback预加载下一路由chunk"
            },
            {
              "id": "首屏加载优化-16-0-1-d2",
              "tag": "骨架屏",
              "desc": "在路由组件加载前显示与最终布局一致的灰块占位减少白屏感知"
            },
            {
              "id": "首屏加载优化-16-0-1-d3",
              "tag": "Critical CSS内联",
              "desc": "首屏关键CSS提取后内联到HTML<head>"
            },
            {
              "id": "首屏加载优化-16-0-1-d4",
              "tag": "Service Worker缓存策略",
              "desc": "首屏资源预缓存（Service Worker缓存策略的详细说明：首屏加载优化中关于Service Worker缓存策略的内容）"
            },
            {
              "id": "首屏加载优化-16-0-1-d5",
              "tag": "Webpack splitChunks合理分组",
              "desc": "框架代码抽为vendor chunk长期缓存"
            }
          ]
        },
        {
          "id": "图片优化-16-0-2",
          "tag": "图片优化",
          "desc": "页面含大量图片导致加载慢从懒加载/压缩/WebP/响应式多维度优化",
          "details": [
            {
              "id": "图片优化-16-0-2-d0",
              "tag": "懒加载",
              "desc": "使用Intersection Observer API监听图片进入可视区再设置src"
            },
            {
              "id": "图片优化-16-0-2-d1",
              "tag": "图片压缩",
              "desc": "WebP格式体积减少25-35%用<picture>标签兼容回退"
            },
            {
              "id": "图片优化-16-0-2-d2",
              "tag": "响应式图片",
              "desc": "<img srcset='small.jpg 480w, medium.jpg 768w' sizes='...'按屏幕宽度加载合适尺寸"
            },
            {
              "id": "图片优化-16-0-2-d3",
              "tag": "CDN加速+缓存头",
              "desc": "图片部署CDN设置长期Cache-ControlURL加hash指纹"
            },
            {
              "id": "图片优化-16-0-2-d4",
              "tag": "LQIP低质量图片占位",
              "desc": "首屏先加载极低质量缩略图blur(20px)模糊占位原图加载后替换"
            }
          ]
        },
        {
          "id": "移动端适配-16-0-3",
          "tag": "移动端适配",
          "desc": "不同移动设备屏幕尺寸差异大如何用rem/vw/vh/viewport实现精准适配",
          "details": [
            {
              "id": "移动端适配-16-0-3-d0",
              "tag": "rem方案",
              "desc": "设置html font-size=屏幕宽度/设计稿宽度*100元素尺寸用rem"
            },
            {
              "id": "移动端适配-16-0-3-d1",
              "tag": "vw方案",
              "desc": "1vw=视口宽度1%元素宽高直接用vw/vh单位无需JS计算"
            },
            {
              "id": "移动端适配-16-0-3-d2",
              "tag": "viewport meta",
              "desc": "width=device-width,initial-scale=1禁止缩放避免布局错乱"
            },
            {
              "id": "移动端适配-16-0-3-d3",
              "tag": "1px边框问题",
              "desc": "高分辨率屏幕用transform:scaleY(0.5)或border-image/svg细线方案"
            },
            {
              "id": "移动端适配-16-0-3-d4",
              "tag": "安全区域适配",
              "desc": "iPhoneX用env(safe-area-inset-top/bottom)处理刘海和底部Home指示器"
            }
          ]
        },
        {
          "id": "前端埋点与监控-16-0-4",
          "tag": "前端埋点与监控",
          "desc": "如何从0搭建前端数据埋点与异常监控系统",
          "details": [
            {
              "id": "前端埋点与监控-16-0-4-d0",
              "tag": "错误采集",
              "desc": "window.onerror+unhandledrejection+Vue errorHandler/React ErrorBoundary"
            },
            {
              "id": "前端埋点与监控-16-0-4-d1",
              "tag": "性能采集",
              "desc": "Performance API获取FCP/LCP/FID/CLS等Web Vitals指标"
            },
            {
              "id": "前端埋点与监控-16-0-4-d2",
              "tag": "用户行为上报",
              "desc": "路由切换记录PV页面停留时间用visibilitychange+计时器"
            },
            {
              "id": "前端埋点与监控-16-0-4-d3",
              "tag": "Sentry集成",
              "desc": "初始化Sentry.init设置dsn/release/environment"
            },
            {
              "id": "前端埋点与监控-16-0-4-d4",
              "tag": "告警策略",
              "desc": "按错误类型设置阈值P0(5分钟错误>100次→钉钉+电话)"
            },
            {
              "id": "前端埋点与监控-16-0-4-d5",
              "tag": "可视化看板",
              "desc": "Grafana展示错误趋势图/Web Vitals分布/用户行为漏斗"
            }
          ]
        },
        {
          "id": "白屏问题排查与修复-16-0-5",
          "tag": "白屏问题排查与修复",
          "desc": "线上页面偶发白屏如何系统性排查原因并修复",
          "details": [
            {
              "id": "白屏问题排查与修复-16-0-5-d0",
              "tag": "排查路径",
              "desc": "1.检查Console是否有JS报错→2.Network查看关键资源加载状态→3.检查容器挂载点"
            },
            {
              "id": "白屏问题排查与修复-16-0-5-d1",
              "tag": "常见原因",
              "desc": "JS执行报错(CDN劫持/语法错误)、CSS加载失败、接口超时、内存溢出"
            },
            {
              "id": "白屏问题排查与修复-16-0-5-d2",
              "tag": "CDN故障修复",
              "desc": "关键资源设置多个CDN备用源<script onerror>动态切换"
            },
            {
              "id": "白屏问题排查与修复-16-0-5-d3",
              "tag": "异常边界兜底",
              "desc": "React ErrorBoundary/Vue3 errorHandler捕获组件错误显示降级UI"
            },
            {
              "id": "白屏问题排查与修复-16-0-5-d4",
              "tag": "接口失败降级",
              "desc": "关键数据接口失败展示骨架屏+重试按钮而非空白"
            },
            {
              "id": "白屏问题排查与修复-16-0-5-d5",
              "tag": "预防措施",
              "desc": "核心资源预缓存+内联Critical CSS+SSR兜底+白屏检测脚本自动上报"
            }
          ]
        },
        {
          "id": "微前端方案-16-0-6",
          "tag": "微前端方案",
          "desc": "大型系统需要多团队独立开发部署子应用如何用qiankun/Module Federation落地",
          "details": [
            {
              "id": "微前端方案-16-0-6-d0",
              "tag": "qiankun方案",
              "desc": "主应用registerMicroApps注册子应用子应用导出生命周期bootstrap/mount/unmount"
            },
            {
              "id": "微前端方案-16-0-6-d1",
              "tag": "Module Federation",
              "desc": "Webpack5/Rspack原生支持exposes暴露模块/remotes引用模块运行时动态加载远端chunk"
            },
            {
              "id": "微前端方案-16-0-6-d2",
              "tag": "样式隔离",
              "desc": "qiankun提供strictStyleIsolation(Shadow DOM)和experimentalStyleIsolation(作用域前缀)"
            },
            {
              "id": "微前端方案-16-0-6-d3",
              "tag": "通信机制",
              "desc": "qiankun用initGlobalState共享状态；Module Federation用Shared Module共享依赖+Custom Event"
            },
            {
              "id": "微前端方案-16-0-6-d4",
              "tag": "公共依赖",
              "desc": "主应用预加载框架库避免子应用重复加载"
            },
            {
              "id": "微前端方案-16-0-6-d5",
              "tag": "部署策略",
              "desc": "子应用独立CI/CD独立部署到CDN主应用只维护路由注册表"
            }
          ]
        },
        {
          "id": "暗黑模式实现-16-0-7",
          "tag": "暗黑模式实现",
          "desc": "系统需要支持明暗两套视觉主题如何从CSS变量到系统级完整实现",
          "details": [
            {
              "id": "暗黑模式实现-16-0-7-d0",
              "tag": "CSS变量方案",
              "desc": "定义--bg-primary/--text-primary等语义变量暗黑模式切换时通过[data-theme='dark']重新赋值"
            },
            {
              "id": "暗黑模式实现-16-0-7-d1",
              "tag": "配色策略",
              "desc": "暗黑模式需降低亮度+提高对比度(WCAG AA标准对比度≥4.5:1)"
            },
            {
              "id": "暗黑模式实现-16-0-7-d2",
              "tag": "切换机制",
              "desc": "localStorage持久化用户选择+prefers-color-scheme检测系统偏好"
            },
            {
              "id": "暗黑模式实现-16-0-7-d3",
              "tag": "图片适配",
              "desc": "暗黑模式下亮色图片用filter:brightness(0.8)自动调整"
            },
            {
              "id": "暗黑模式实现-16-0-7-d4",
              "tag": "过渡动画",
              "desc": "body加transition:background-color 0.3s平滑过渡"
            },
            {
              "id": "暗黑模式实现-16-0-7-d5",
              "tag": "打印场景",
              "desc": "强制使用亮色主题@media print"
            }
          ]
        },
        {
          "id": "spa路由权限控制-16-0-8",
          "tag": "SPA路由权限控制",
          "desc": "前端路由守卫+动态路由注册+菜单与路由同步+按钮级权限控制",
          "details": [
            {
              "id": "spa路由权限控制-16-0-8-d0",
              "tag": "router.beforeEach",
              "desc": "未登录→跳登录;无权限→跳403页拦截路由"
            },
            {
              "id": "spa路由权限控制-16-0-8-d1",
              "tag": "动态addRoute",
              "desc": "登录后获取权限列表→注册有权限路由删除无权限路由"
            },
            {
              "id": "spa路由权限控制-16-0-8-d2",
              "tag": "菜单联动",
              "desc": "权限路由生成侧边菜单未授权路由不显示菜单项"
            },
            {
              "id": "spa路由权限控制-16-0-8-d3",
              "tag": "按钮级权限",
              "desc": "v-permission指令或hasPermission函数控制UI元素显隐"
            },
            {
              "id": "spa路由权限控制-16-0-8-d4",
              "tag": "权限缓存",
              "desc": "用户权限Redis(user:perms:{uid})2h过期避免每次查DB"
            }
          ]
        },
        {
          "id": "前端国际化-16-0-9",
          "tag": "前端国际化",
          "desc": "i18n方案+动态语言切换+文案管理+日期货币本地化+懒加载语言包",
          "details": [
            {
              "id": "前端国际化-16-0-9-d0",
              "tag": "Vue-i18n",
              "desc": "locale消息对象+$t('key')翻译函数+语言切换i18n.locale"
            },
            {
              "id": "前端国际化-16-0-9-d1",
              "tag": "动态切换",
              "desc": "localStorage存语言偏好+watch监听locale变更重渲染"
            },
            {
              "id": "前端国际化-16-0-9-d2",
              "tag": "文案管理",
              "desc": "JSON按语言组织zh-CN.json/en-US.json+嵌套key"
            },
            {
              "id": "前端国际化-16-0-9-d3",
              "tag": "日期本地化",
              "desc": "dayjs.locale('zh-cn')自动格式化日期时间货币"
            },
            {
              "id": "前端国际化-16-0-9-d4",
              "tag": "懒加载",
              "desc": "按路由加载语言包i18n.mergeLocaleMessage减少首屏体积"
            }
          ]
        },
        {
          "id": "大文件上传优化-16-0-10",
          "tag": "大文件上传优化",
          "desc": "Web Worker计算hash+分片上传+断点续传+秒传+进度管理",
          "details": [
            {
              "id": "大文件上传优化-16-0-10-d0",
              "tag": "Web Worker MD5",
              "desc": "spark-md5 Worker线程计算不阻塞主界面"
            },
            {
              "id": "大文件上传优化-16-0-10-d1",
              "tag": "分片策略",
              "desc": "File.slice按5MB分片+并发上传3-5片+失败单片重试"
            },
            {
              "id": "大文件上传优化-16-0-10-d2",
              "tag": "断点续传",
              "desc": "上传前查询已上传分片列表→跳过已完成→继续剩余"
            },
            {
              "id": "大文件上传优化-16-0-10-d3",
              "tag": "秒传机制",
              "desc": "hash值查询服务器已有文件→直接返回URL免上传"
            },
            {
              "id": "大文件上传优化-16-0-10-d4",
              "tag": "清理机制",
              "desc": "上传完成/失败后清理临时分片文件避免存储浪费"
            }
          ]
        },
        {
          "id": "前端缓存策略-16-0-11",
          "tag": "前端缓存策略",
          "desc": "HTTP缓存+Service Worker+LocalStorage+IndexedDB+版本管理",
          "details": [
            {
              "id": "前端缓存策略-16-0-11-d0",
              "tag": "HTTP缓存",
              "desc": "Cache-Control+ETag协商缓存+静态资源长期1年contenthash"
            },
            {
              "id": "前端缓存策略-16-0-11-d1",
              "tag": "Service Worker",
              "desc": "Cache API缓存静态资源+拦截请求CacheFirst/NetworkFirst"
            },
            {
              "id": "前端缓存策略-16-0-11-d2",
              "tag": "LocalStorage",
              "desc": "用户偏好/主题/语言设置持久缓存+状态快照草稿"
            },
            {
              "id": "前端缓存策略-16-0-11-d3",
              "tag": "版本管理",
              "desc": "资源URL加contenthash→变更新URL→旧缓存自然失效"
            },
            {
              "id": "前端缓存策略-16-0-11-d4",
              "tag": "IndexedDB",
              "desc": "大量结构化数据离线数据包/表单草稿异步存取容量大"
            }
          ]
        },
        {
          "id": "前端错误追踪-16-0-12",
          "tag": "前端错误追踪",
          "desc": "Sentry集成+错误分类+性能指标+Source Map+告警规则",
          "details": [
            {
              "id": "前端错误追踪-16-0-12-d0",
              "tag": "Sentry.init({dsn,release,environment,tracesSampleRate:0.1})初始化",
              "desc": "dsn指定Sentry服务器地址；release关联版本号定位问题版本；environment区分生产/测试环境；tracesSampleRate采样性能追踪"
            },
            {
              "id": "前端错误追踪-16-0-12-d1",
              "tag": "错误分类",
              "desc": "JS运行错误/资源加载错误/API错误/业务错误四大类"
            },
            {
              "id": "前端错误追踪-16-0-12-d2",
              "tag": "Vue集成",
              "desc": "app.config.errorHandler→Sentry.captureException上报"
            },
            {
              "id": "前端错误追踪-16-0-12-d3",
              "tag": "性能指标",
              "desc": "Performance API采集FCP/LCP/FID/CLS→Sentry Performance"
            },
            {
              "id": "前端错误追踪-16-0-12-d4",
              "tag": "Source Map",
              "desc": "生产sourcemap上传Sentry→错误定位到原始源码行"
            }
          ]
        },
        {
          "id": "表单动态校验-16-0-13",
          "tag": "表单动态校验",
          "desc": "规则配置化+联动校验+异步校验+错误提示策略+防抖+提交拦截",
          "details": [
            {
              "id": "表单动态校验-16-0-13-d0",
              "tag": "规则配置",
              "desc": "rules数组[{required,message,pattern,min,max,validator}]声明式"
            },
            {
              "id": "表单动态校验-16-0-13-d1",
              "tag": "联动校验",
              "desc": "字段A变化触发B重新校验watch+validateField起止日期"
            },
            {
              "id": "表单动态校验-16-0-13-d2",
              "tag": "异步校验",
              "desc": "validator返回Promise用户名唯一性接口实时校验"
            },
            {
              "id": "表单动态校验-16-0-13-d3",
              "tag": "防抖",
              "desc": "用户输入300ms debounce后触发避免每次input都校验"
            },
            {
              "id": "表单动态校验-16-0-13-d4",
              "tag": "提交拦截",
              "desc": "form.validate()全量校验→失败阻止提交→成功触发submit"
            }
          ]
        }
      ]
    },
    {
      "id": "16-2-后端场景题-16-1",
      "title": "16.2 后端场景题",
      "points": [
        {
          "id": "如何设计一个点赞系统-16-1-0",
          "tag": "如何设计一个点赞系统",
          "desc": "高并发点赞场景下DB压力巨大如何用Redis做缓冲层+定时同步DB实现高性能点赞",
          "details": [
            {
              "id": "如何设计一个点赞系统-16-1-0-d0",
              "tag": "Redis存储点赞状态",
              "desc": "用Set结构 likes:post:{id} 存点赞用户ID SADD/SREM操作O(1)"
            },
            {
              "id": "如何设计一个点赞系统-16-1-0-d1",
              "tag": "计数缓存",
              "desc": "用String结构 likes:post:{id}:count 存点赞总数INCR/DECR实时更新"
            },
            {
              "id": "如何设计一个点赞系统-16-1-0-d2",
              "tag": "定时同步DB",
              "desc": "每5分钟批量将Redis点赞数据写入DB批量INSERT/DELETE"
            },
            {
              "id": "如何设计一个点赞系统-16-1-0-d3",
              "tag": "去重与幂等",
              "desc": "用户ID+文章ID做联合唯一索引保证DB层去重"
            },
            {
              "id": "如何设计一个点赞系统-16-1-0-d4",
              "tag": "限流防刷",
              "desc": "同一用户对同一文章5秒内只能点赞一次Redis Key设置5s过期"
            },
            {
              "id": "如何设计一个点赞系统-16-1-0-d5",
              "tag": "排行榜联动",
              "desc": "点赞数变更时ZINCRBY更新热门榜ZSet"
            }
          ]
        },
        {
          "id": "如何实现单点登录sso-16-1-1",
          "tag": "如何实现单点登录SSO",
          "desc": "多个子系统需要统一登录一次即可访问所有系统如何设计完整SSO方案",
          "details": [
            {
              "id": "如何实现单点登录sso-16-1-1-d0",
              "tag": "核心流程",
              "desc": "用户访问子系统A→无token重定向SSO认证中心→登录成功→写SSO域Cookie+回调带code→子系统A用code换token→后续访问子系统B自动免登录"
            },
            {
              "id": "如何实现单点登录sso-16-1-1-d1",
              "tag": "Token设计",
              "desc": "子系统持有access_token(JWT或SessionId)SSO认证中心持有全局sso_token"
            },
            {
              "id": "如何实现单点登录sso-16-1-1-d2",
              "tag": "跨域Cookie方案",
              "desc": "SSO认证中心部署在顶级域Cookie设domain=.company.com"
            },
            {
              "id": "如何实现单点登录sso-16-1-1-d3",
              "tag": "踢人下线",
              "desc": "SSO认证中心维护全局Session映射表踢人时广播通知各子系统清除本地token"
            },
            {
              "id": "如何实现单点登录sso-16-1-1-d4",
              "tag": "安全措施",
              "desc": "code一次性使用防截获重放；全部HTTPS传输；token绑定IP+UA防盗用"
            }
          ]
        },
        {
          "id": "接口幂等性设计-16-1-2",
          "tag": "接口幂等性设计",
          "desc": "重复提交/网络重试导致同一请求执行多次如何从唯一ID/状态机/乐观锁维度保证幂等",
          "details": [
            {
              "id": "接口幂等性设计-16-1-2-d0",
              "tag": "唯一请求ID",
              "desc": "客户端每次请求生成唯一reqId后端Redis SETNX reqId 1设5分钟过期存在则拒绝"
            },
            {
              "id": "接口幂等性设计-16-1-2-d1",
              "tag": "状态机幂等",
              "desc": "订单状态从待支付→已支付单向流转更新时WHERE status='待支付'条件不满足直接返回成功"
            },
            {
              "id": "接口幂等性设计-16-1-2-d2",
              "tag": "乐观锁幂等",
              "desc": "UPDATE SET amount=new,version=version+1 WHERE id=X AND version=旧值"
            },
            {
              "id": "接口幂等性设计-16-1-2-d3",
              "tag": "Token机制(Two-Step)",
              "desc": "第一步获取服务器Token存Redis设过期第二步业务请求携带Token服务端删除Token成功才执行"
            },
            {
              "id": "接口幂等性设计-16-1-2-d4",
              "tag": "数据库唯一索引",
              "desc": "业务唯一键建唯一索引重复插入抛DuplicateKey异常捕获后返回成功"
            },
            {
              "id": "接口幂等性设计-16-1-2-d5",
              "tag": "防重提交前端配合",
              "desc": "按钮点击后立即disable+loading状态"
            }
          ]
        },
        {
          "id": "分布式限流方案-16-1-3",
          "tag": "分布式限流方案",
          "desc": "高并发场景下服务需要限流保护如何用令牌桶/滑动窗口/Sentinel实现",
          "details": [
            {
              "id": "分布式限流方案-16-1-3-d0",
              "tag": "令牌桶算法",
              "desc": "固定速率向桶中放令牌请求消费1令牌桶空则拒绝允许突发流量"
            },
            {
              "id": "分布式限流方案-16-1-3-d1",
              "tag": "滑动窗口算法",
              "desc": "将1分钟划分为6个10秒格子每个格子计数当前时段请求数总和超过阈值则拒绝"
            },
            {
              "id": "分布式限流方案-16-1-3-d2",
              "tag": "Redis+Lua实现",
              "desc": "滑动窗口用ZSet(score=时间戳)ZREMRANGEBYSCORE清除过期+ZCARD计数+ZADD当前请求"
            },
            {
              "id": "分布式限流方案-16-1-3-d3",
              "tag": "Sentinel方案",
              "desc": "定义资源+规则(QPS/线程数/慢调用比例)支持簇点链路自动识别+集群限流"
            },
            {
              "id": "分布式限流方案-16-1-3-d4",
              "tag": "熔断降级联动",
              "desc": "限流触发后配合熔断器(半开探测机制)持续超限则熔断直接返回降级响应"
            },
            {
              "id": "分布式限流方案-16-1-3-d5",
              "tag": "多级限流策略",
              "desc": "网关层粗粒度(IP级1000QPS)→服务层中粒度(API级500QPS)→资源层细粒度(单SKU 50QPS)"
            }
          ]
        },
        {
          "id": "海量数据查询优化-16-1-4",
          "tag": "海量数据查询优化",
          "desc": "单表数据量达千万级查询变慢如何用索引+分表+缓存+ES多维优化",
          "details": [
            {
              "id": "海量数据查询优化-16-1-4-d0",
              "tag": "索引优化",
              "desc": "EXPLAIN分析查询计划避免全表扫描联合索引遵循最左匹配原则覆盖索引避免回表"
            },
            {
              "id": "海量数据查询优化-16-1-4-d1",
              "tag": "分表策略",
              "desc": "水平分表按user_id HASH取模分16表或按时间范围每月一表垂直分表将大字段拆到扩展表"
            },
            {
              "id": "海量数据查询优化-16-1-4-d2",
              "tag": "缓存分层",
              "desc": "热点数据Redis缓存过期5分钟+主动更新本地缓存Caffeine过期1分钟缓存空值防穿透+随机过期防雪崩"
            },
            {
              "id": "海量数据查询优化-16-1-4-d3",
              "tag": "ES异步索引",
              "desc": "数据写入DB后通过Canal监听binlog同步到ES复杂查询走ES简单主键查询走DB+缓存"
            },
            {
              "id": "海量数据查询优化-16-1-4-d4",
              "tag": "读写分离",
              "desc": "主库写+从库读MySQL主从复制延迟<1ms场景直接读从库"
            },
            {
              "id": "海量数据查询优化-16-1-4-d5",
              "tag": "冷热分离",
              "desc": "近3个月热数据放MySQL+Redis+ES实时查询历史冷数据归档到ClickHouse离线分析"
            }
          ]
        },
        {
          "id": "延迟任务实现-16-1-5",
          "tag": "延迟任务实现",
          "desc": "订单30分钟未支付自动取消等延迟任务如何可靠实现",
          "details": [
            {
              "id": "延迟任务实现-16-1-5-d0",
              "tag": "Redis ZSet方案",
              "desc": "ZADD delay_queue score=执行时间戳member=任务ID定时线程ZRANGEBYSCORE获取到期任务ZREM删除+执行"
            },
            {
              "id": "延迟任务实现-16-1-5-d1",
              "tag": "RabbitMQ死信队列",
              "desc": "消息设TTL=30分钟投递到延迟交换机过期后进入死信队列消费者监听DLX执行取消逻辑"
            },
            {
              "id": "延迟任务实现-16-1-5-d2",
              "tag": "MQ延迟消息插件",
              "desc": "RabbitMQ安装delayed_message_exchange插件消息头设x-delay=1800000ms"
            },
            {
              "id": "延迟任务实现-16-1-5-d3",
              "tag": "定时表扫表",
              "desc": "DB存delay_task表(exec_time+status)每分钟查询WHERE exec_time<=NOW()加分布式锁防并发"
            },
            {
              "id": "延迟任务实现-16-1-5-d4",
              "tag": "任务补偿机制",
              "desc": "取出任务后先标记processing执行成功标记done超时未标记done则重新取出执行"
            }
          ]
        },
        {
          "id": "灰度发布方案-16-1-6",
          "tag": "灰度发布方案",
          "desc": "新版本上线需逐步放量验证稳定性如何设计完整的灰度发布流程",
          "details": [
            {
              "id": "灰度发布方案-16-1-6-d0",
              "tag": "按用户灰度",
              "desc": "根据userId尾号或用户标签路由到不同服务实例"
            },
            {
              "id": "灰度发布方案-16-1-6-d1",
              "tag": "按流量比例灰度",
              "desc": "Nginx配置split_clients按比例(5%/10%/30%/50%/100%)随机分配流量"
            },
            {
              "id": "灰度发布方案-16-1-6-d2",
              "tag": "功能开关(Feature Flag)",
              "desc": "代码中用if(featureFlagService.isEnabled('new-feature'))控制新功能展示配置中心动态开关"
            },
            {
              "id": "灰度发布方案-16-1-6-d3",
              "tag": "监控验证",
              "desc": "灰度期间重点监控错误率/响应时间/QPS对比新老版本"
            },
            {
              "id": "灰度发布方案-16-1-6-d4",
              "tag": "Kubernetes方案",
              "desc": "Deployment设maxSurge/maxUnavailable控制滚动更新比例+readinessGate"
            },
            {
              "id": "灰度发布方案-16-1-6-d5",
              "tag": "回滚策略",
              "desc": "灰度期间老版本实例始终保留异常时秒级切回老版本"
            }
          ]
        },
        {
          "id": "电商库存扣减-16-1-7",
          "tag": "电商库存扣减",
          "desc": "Redis预扣+DB确认+乐观锁防超卖+分布式事务保障一致性",
          "details": [
            {
              "id": "电商库存扣减-16-1-7-d0",
              "tag": "Redis预扣",
              "desc": "DECRBY stock:sku:{id} 1 Lua原子+返回剩余量判断"
            },
            {
              "id": "电商库存扣减-16-1-7-d1",
              "tag": "DB确认",
              "desc": "UPDATE stock SET qty=qty-1 WHERE sku=? AND qty>=1乐观锁"
            },
            {
              "id": "电商库存扣减-16-1-7-d2",
              "tag": "库存预热",
              "desc": "活动前SET stock:sku:{id} N同步Redis避免DB压力"
            },
            {
              "id": "电商库存扣减-16-1-7-d3",
              "tag": "超卖兜底",
              "desc": "Redis扣成功但DB失败→MQ回补Redis+告警"
            },
            {
              "id": "电商库存扣减-16-1-7-d4",
              "tag": "分布式事务",
              "desc": "预扣+下单+确认TCC或本地消息表最终一致"
            }
          ]
        },
        {
          "id": "日志链路追踪-16-1-8",
          "tag": "日志链路追踪",
          "desc": "TraceId透传+MDC注入+跨服务聚合+慢接口定位+SkyWalking",
          "details": [
            {
              "id": "日志链路追踪-16-1-8-d0",
              "tag": "TraceId",
              "desc": "网关层生成UUID/snowflake→HTTP Header X-Trace-Id透传"
            },
            {
              "id": "日志链路追踪-16-1-8-d1",
              "tag": "MDC注入",
              "desc": "Filter拦截→MDC.put('traceId',headerValue)日志自动携带"
            },
            {
              "id": "日志链路追踪-16-1-8-d2",
              "tag": "跨服务传播",
              "desc": "HTTP Header/RPC附件/MQ消息属性透传到下游"
            },
            {
              "id": "日志链路追踪-16-1-8-d3",
              "tag": "聚合",
              "desc": "ELK(Filebeat→Logstash→ES)按traceId搜索聚合全链路"
            },
            {
              "id": "日志链路追踪-16-1-8-d4",
              "tag": "慢接口定位",
              "desc": "按traceId搜索各服务响应时间→定位最长环节"
            }
          ]
        },
        {
          "id": "多租户数据隔离后端-16-1-9",
          "tag": "多租户数据隔离(后端)",
          "desc": "字段隔离+租户路由Interceptor+数据权限自动过滤+缓存隔离+SaaS",
          "details": [
            {
              "id": "多租户数据隔离后端-16-1-9-d0",
              "tag": "字段隔离",
              "desc": "表加tenant_id→Interceptor注入WHERE tenant_id=X自动"
            },
            {
              "id": "多租户数据隔离后端-16-1-9-d1",
              "tag": "租户路由",
              "desc": "Filter解析token→ThreadLocal→Repository自动拼接过滤"
            },
            {
              "id": "多租户数据隔离后端-16-1-9-d2",
              "tag": "缓存隔离",
              "desc": "Redis Key前缀tenant:{id}:*各租户缓存独立互不干扰"
            },
            {
              "id": "多租户数据隔离后端-16-1-9-d3",
              "tag": "配置隔离",
              "desc": "Apollo namespace按租户隔离不同配置功能开关限流"
            },
            {
              "id": "多租户数据隔离后端-16-1-9-d4",
              "tag": "超级租户",
              "desc": "platform_admin跨租户Interceptor不注入tenant_id"
            }
          ]
        },
        {
          "id": "接口防刷-16-1-10",
          "tag": "接口防刷",
          "desc": "IP限流+设备指纹+验证码+黑名单+降级兜底多维防刷",
          "details": [
            {
              "id": "接口防刷-16-1-10-d0",
              "tag": "IP限流",
              "desc": "Redis滑动窗口ZSet+时间戳单IP每秒/每分钟最大请求数"
            },
            {
              "id": "接口防刷-16-1-10-d1",
              "tag": "设备指纹",
              "desc": "Canvas+WebGL+UA组合生成唯一deviceId防伪造"
            },
            {
              "id": "接口防刷-16-1-10-d2",
              "tag": "验证码",
              "desc": "图形验证码前置防机器人+滑块验证风控触发+短信限流"
            },
            {
              "id": "接口防刷-16-1-10-d3",
              "tag": "黑名单",
              "desc": "Redis Set存恶意IP/deviceId+访问黑名单直接拒绝"
            },
            {
              "id": "接口防刷-16-1-10-d4",
              "tag": "降级兜底",
              "desc": "限流触发返回缓存数据/默认值而非错误页面"
            }
          ]
        },
        {
          "id": "数据库读写分离-16-1-11",
          "tag": "数据库读写分离",
          "desc": "主库写+从库读+读写路由中间件+延迟容忍+主从切换+监控",
          "details": [
            {
              "id": "数据库读写分离-16-1-11-d0",
              "tag": "主从复制",
              "desc": "MySQL binlog同步→从库实时应用延迟<1ms(同机房)"
            },
            {
              "id": "数据库读写分离-16-1-11-d1",
              "tag": "读写路由",
              "desc": "ShardingSphere配置writeDataSource+readDataSource"
            },
            {
              "id": "数据库读写分离-16-1-11-d2",
              "tag": "延迟容忍",
              "desc": "关键写入后强制走主库/普通读走从库容忍短延迟"
            },
            {
              "id": "数据库读写分离-16-1-11-d3",
              "tag": "主从切换",
              "desc": "从库宕机→路由自动剔除→读走主库→恢复后加回"
            },
            {
              "id": "数据库读写分离-16-1-11-d4",
              "tag": "监控",
              "desc": "主从延迟seconds_behind_master/从库QPS/连接池使用率"
            }
          ]
        },
        {
          "id": "数据迁移后端-16-1-12",
          "tag": "数据迁移(后端)",
          "desc": "灰度迁移+双写策略+数据校验+回滚预案零停机平滑迁移",
          "details": [
            {
              "id": "数据迁移后端-16-1-12-d0",
              "tag": "灰度迁移",
              "desc": "新存储10%→50%→100%逐步放量观察→旧存储下线"
            },
            {
              "id": "数据迁移后端-16-1-12-d1",
              "tag": "双写策略",
              "desc": "写操作同时写新旧两存储先新后旧保证数据完整"
            },
            {
              "id": "数据迁移后端-16-1-12-d2",
              "tag": "数据校验",
              "desc": "定时对账对比新旧存储行数+Hash+采样比对差异告警"
            },
            {
              "id": "数据迁移后端-16-1-12-d3",
              "tag": "回滚预案",
              "desc": "流量切回旧存储秒级+新存储保留数据可再切"
            },
            {
              "id": "数据迁移后端-16-1-12-d4",
              "tag": "分批迁移",
              "desc": "按userId范围分批避免全量OOM+长时间锁表"
            }
          ]
        },
        {
          "id": "如何设计一个秒杀系统-16-1-13",
          "tag": "如何设计一个秒杀系统",
          "desc": "高并发秒杀场景下如何防止超卖+限流+削峰+保证一致性",
          "details": [
            {
              "id": "如何设计一个秒杀系统-16-1-13-d0",
              "tag": "前端限流",
              "desc": "按钮防重复点击+倒计时+验证码前置过滤机器人请求"
            },
            {
              "id": "如何设计一个秒杀系统-16-1-13-d1",
              "tag": "网关限流",
              "desc": "Nginx限流单IP每秒10次+Sentinel集群限流整体QPS上限"
            },
            {
              "id": "如何设计一个秒杀系统-16-1-13-d2",
              "tag": "Redis预扣库存",
              "desc": "Lua脚本原子DECRBY+判断库存≥0扣减成功返回订单号"
            },
            {
              "id": "如何设计一个秒杀系统-16-1-13-d3",
              "tag": "异步下单",
              "desc": "扣减成功后投MQ(RocketMQ)→Consumer异步创建订单→用户轮询结果"
            },
            {
              "id": "如何设计一个秒杀系统-16-1-13-d4",
              "tag": "DB兜底",
              "desc": "订单确认时再校验DB库存WHERE qty>=1乐观锁防最终超卖"
            },
            {
              "id": "如何设计一个秒杀系统-16-1-13-d5",
              "tag": "流量削峰",
              "desc": "请求先入Redis队列→按服务处理能力匀速消费避免瞬时洪峰"
            }
          ]
        },
        {
          "id": "分布式事务一致性-16-1-14",
          "tag": "分布式事务一致性",
          "desc": "跨服务操作如何保证数据最终一致或强一致",
          "details": [
            {
              "id": "分布式事务一致性-16-1-14-d0",
              "tag": "2PC/XA",
              "desc": "协调者统一prepare→commit/rollback强一致但阻塞性能差不适合高并发"
            },
            {
              "id": "分布式事务一致性-16-1-14-d1",
              "tag": "TCC模式",
              "desc": "Try(预留资源)→Confirm(确认提交)→Cancel(回滚释放)需业务实现三接口允许空回滚+防悬挂"
            },
            {
              "id": "分布式事务一致性-16-1-14-d2",
              "tag": "本地消息表",
              "desc": "业务操作+写入本地消息表同一事务保证原子性→定时扫描未发消息投MQ→消费端幂等处理"
            },
            {
              "id": "分布式事务一致性-16-1-14-d3",
              "tag": "RocketMQ事务消息",
              "desc": "Half Message→执行本地事务→Commit/Rollback→消费者消费保证最终一致"
            },
            {
              "id": "分布式事务一致性-16-1-14-d4",
              "tag": "Saga长事务",
              "desc": "正向补偿链+逆向回滚链每步有对应补偿操作适合长流程业务"
            },
            {
              "id": "分布式事务一致性-16-1-14-d5",
              "tag": "选型原则",
              "desc": "强一致选2PC/TCC(资金类)最终一致选消息表/事务消息(订单/积分类)"
            }
          ]
        },
        {
          "id": "微服务拆分策略-16-1-15",
          "tag": "微服务拆分策略",
          "desc": "单体应用如何拆分为微服务拆分粒度如何把握边界如何划定",
          "details": [
            {
              "id": "微服务拆分策略-16-1-15-d0",
              "tag": "按业务能力拆分",
              "desc": "每个服务对应一个业务域(订单/用户/商品)DDD领域驱动设计划定边界"
            },
            {
              "id": "微服务拆分策略-16-1-15-d1",
              "tag": "拆分原则",
              "desc": "高内聚低耦合单一职责服务间通过API/MQ通信不共享数据库"
            },
            {
              "id": "微服务拆分策略-16-1-15-d2",
              "tag": "拆分步骤",
              "desc": "先抽离独立模块(用户/通知)→再拆核心业务(订单/商品)→最后拆支撑模块(支付/物流)"
            },
            {
              "id": "微服务拆分策略-16-1-15-d3",
              "tag": "粒度权衡",
              "desc": "过粗→仍是单体耦合过细→运维复杂通信开销大合适粒度=一个服务2-5人维护"
            },
            {
              "id": "微服务拆分策略-16-1-15-d4",
              "tag": "数据拆分",
              "desc": "每个服务独立数据库避免跨库JOIN数据同步通过MQ事件驱动"
            },
            {
              "id": "微服务拆分策略-16-1-15-d5",
              "tag": "拆分风险",
              "desc": "分布式事务/数据一致性/服务依赖循环/接口版本兼容需逐步灰度迁移"
            }
          ]
        },
        {
          "id": "服务注册发现与治理-16-1-16",
          "tag": "服务注册发现与治理",
          "desc": "微服务如何动态注册发现如何实现健康检查负载均衡故障转移",
          "details": [
            {
              "id": "服务注册发现与治理-16-1-16-d0",
              "tag": "注册中心选型",
              "desc": "Nacos(AP+CP可切换)/ZooKeeper(CP强一致)/Eureka(AP高可用)/Consul(CP+健康检查)"
            },
            {
              "id": "服务注册发现与治理-16-1-16-d1",
              "tag": "服务注册",
              "desc": "启动时向注册中心上报IP+端口+元数据(权重/版本/区域)心跳续约保活"
            },
            {
              "id": "服务注册发现与治理-16-1-16-d2",
              "tag": "服务发现",
              "desc": "消费者从注册中心拉取服务列表+本地缓存定时更新调用时按负载均衡策略选实例"
            },
            {
              "id": "服务注册发现与治理-16-1-16-d3",
              "tag": "健康检查",
              "desc": "Nacos心跳机制(客户端发)/Consul HTTP+gRPC探针(主动)/Eureka心跳+自我保护"
            },
            {
              "id": "服务注册发现与治理-16-1-16-d4",
              "tag": "负载均衡",
              "desc": "Ribbon/LoadBalancer内置Random/RoundRobin/Weighted策略+ZoneAffinity同区优先"
            },
            {
              "id": "服务注册发现与治理-16-1-16-d5",
              "tag": "故障转移",
              "desc": "实例心跳超时→标记不健康→剔除列表→消费者更新缓存→请求路由到健康实例"
            }
          ]
        },
        {
          "id": "如何设计一个分布式锁-16-1-17",
          "tag": "如何设计一个分布式锁",
          "desc": "多实例并发访问共享资源如何用Redis/ZooKeeper实现可靠分布式锁",
          "details": [
            {
              "id": "如何设计一个分布式锁-16-1-17-d0",
              "tag": "Redis实现",
              "desc": "SET lock:key unique_val NX PX 30000获取锁+Lua脚本原子比对value后DEL释放防误删"
            },
            {
              "id": "如何设计一个分布式锁-16-1-17-d1",
              "tag": "RedLock算法",
              "desc": "多节点(N=5)同时获取锁≥3个成功且耗时<锁过期时间才算获取成功解决单节点故障"
            },
            {
              "id": "如何设计一个分布式锁-16-1-17-d2",
              "tag": "ZooKeeper实现",
              "desc": "创建临时顺序节点EPHEMERAL_SEQUENTIAL最小序号获锁Session断开自动释放"
            },
            {
              "id": "如何设计一个分布式锁-16-1-17-d3",
              "tag": "锁续期",
              "desc": "看门狗机制(Redisson)后台线程每10s续期30s业务执行完主动释放防止业务未完锁过期"
            },
            {
              "id": "如何设计一个分布式锁-16-1-17-d4",
              "tag": "可重入锁",
              "desc": "Redisson用Hash结构field=线程标识value=重入计数+1/-1计数为0才删锁"
            },
            {
              "id": "如何设计一个分布式锁-16-1-17-d5",
              "tag": "选型原则",
              "desc": "性能优先Redis/AP场景一致性优先ZK/CP场景避免使用DB行锁做分布式锁"
            }
          ]
        },
        {
          "id": "配置中心设计-16-1-18",
          "tag": "配置中心设计",
          "desc": "微服务配置如何集中管理动态推送多环境隔离灰度生效",
          "details": [
            {
              "id": "配置中心设计-16-1-18-d0",
              "tag": "Apollo方案",
              "desc": "Portal管理界面→Config Service→Client长轮询拉取配置变更实时生效"
            },
            {
              "id": "配置中心设计-16-1-18-d1",
              "tag": "Nacos方案",
              "desc": "Config Service+Name Service统一管理配置和服务发现简单轻量"
            },
            {
              "id": "配置中心设计-16-1-18-d2",
              "tag": "多环境隔离",
              "desc": "namespace按环境(dev/fat/uat/prod)配置独立互不干扰"
            },
            {
              "id": "配置中心设计-16-1-18-d3",
              "tag": "灰度发布",
              "desc": "配置变更先推给灰度实例验证→全量推送Apollo支持规则灰度(IP/集群/标签)"
            },
            {
              "id": "配置中心设计-16-1-18-d4",
              "tag": "配置加密",
              "desc": "敏感配置(DB密码/密钥)加密存储Apollo支持DES/AES加密传输解密"
            },
            {
              "id": "配置中心设计-16-1-18-d5",
              "tag": "回滚机制",
              "desc": "配置变更自动记录版本历史一键回滚到任意历史版本"
            }
          ]
        },
        {
          "id": "网关统一鉴权与路由-16-1-19",
          "tag": "网关统一鉴权与路由",
          "desc": "微服务网关如何统一处理认证限流路由日志协议转换",
          "details": [
            {
              "id": "网关统一鉴权与路由-16-1-19-d0",
              "tag": "认证层",
              "desc": "JWT校验+Redis黑名单(token失效即时生效)+权限校验@RequirePermission统一入口"
            },
            {
              "id": "网关统一鉴权与路由-16-1-19-d1",
              "tag": "路由层",
              "desc": "按路径前缀路由到后端服务/customer→customer-service/order→order-service"
            },
            {
              "id": "网关统一鉴权与路由-16-1-19-d2",
              "tag": "限流层",
              "desc": "内置RateLimiter/Sentinel网关级限流IP级/API级/用户级多维度"
            },
            {
              "id": "网关统一鉴权与路由-16-1-19-d3",
              "tag": "熔断降级",
              "desc": "Hystrix/Sentinel熔断器超时比例>50%→熔断5s→半开探测→恢复"
            },
            {
              "id": "网关统一鉴权与路由-16-1-19-d4",
              "tag": "协议转换",
              "desc": "HTTP→Dubbo/gRPC协议桥接旧系统兼容新系统"
            },
            {
              "id": "网关统一鉴权与路由-16-1-19-d5",
              "tag": "请求日志",
              "desc": "网关记录请求路径/响应时间/状态码/traceId→ELK分析"
            }
          ]
        },
        {
          "id": "分布式id生成方案-16-1-20",
          "tag": "分布式ID生成方案",
          "desc": "分库分表后如何生成全局唯一有序ID",
          "details": [
            {
              "id": "分布式id生成方案-16-1-20-d0",
              "tag": "UUID方案",
              "desc": "128bit全局唯一无需协调无序不适合数据库索引聚集插入性能差"
            },
            {
              "id": "分布式id生成方案-16-1-20-d1",
              "tag": "数据库自增",
              "desc": "独立ID表AUTO_INCREMENT步长按实例数设置简单但有单点风险DB压力"
            },
            {
              "id": "分布式id生成方案-16-1-20-d2",
              "tag": "Redis INCR",
              "desc": "原子递增性能好但依赖Redis可用性INCR key批量获取区间减少网络开销"
            },
            {
              "id": "分布式id生成方案-16-1-20-d3",
              "tag": "Snowflake雪花算法",
              "desc": "64bit=1bit符号+41bit时间戳+10bit机器ID+12bit序列号每毫秒4096个ID"
            },
            {
              "id": "分布式id生成方案-16-1-20-d4",
              "tag": "Leaf-segment",
              "desc": "号段模式DB预分配号段(biz_tag+max_id+step)本地缓存双buffer平滑切换"
            },
            {
              "id": "分布式id生成方案-16-1-20-d5",
              "tag": "Leaf-snowflake",
              "desc": "ZooKeeper分配workerId+本地缓存时钟+启动时校验时钟回拨<5ms容忍>5ms报错"
            }
          ]
        },
        {
          "id": "如何设计一个消息队列-16-1-21",
          "tag": "如何设计一个消息队列",
          "desc": "异步解耦削峰填谷如何从0设计可靠MQ或选型现有方案",
          "details": [
            {
              "id": "如何设计一个消息队列-16-1-21-d0",
              "tag": "核心功能",
              "desc": "生产者发送→Broker存储→消费者消费支持顺序/广播/延迟/事务消息"
            },
            {
              "id": "如何设计一个消息队列-16-1-21-d1",
              "tag": "存储选型",
              "desc": "磁盘顺序写(Kafka)性能近内存+PageCache零拷贝+Sendfile减少内核态拷贝"
            },
            {
              "id": "如何设计一个消息队列-16-1-21-d2",
              "tag": "消费模型",
              "desc": "推模式(Push实时性好但可能堆积)拉模式(Pull可控性好但延迟高)"
            },
            {
              "id": "如何设计一个消息队列-16-1-21-d3",
              "tag": "消息可靠性",
              "desc": "生产者确认+Broker持久化+消费者ACK+死信队列兜底不丢消息"
            },
            {
              "id": "如何设计一个消息队列-16-1-21-d4",
              "tag": "顺序消息",
              "desc": "Kafka同一Partition有序RocketMQ同一MessageQueue有序需要全局有序则单队列"
            },
            {
              "id": "如何设计一个消息队列-16-1-21-d5",
              "tag": "选型对比",
              "desc": "Kafka(大数据/日志吞吐万级)/RocketMQ(业务消息事务+延迟)/RabbitMQ(小规模灵活路由)"
            }
          ]
        },
        {
          "id": "分布式session管理-16-1-22",
          "tag": "分布式Session管理",
          "desc": "多实例部署后用户Session如何共享管理",
          "details": [
            {
              "id": "分布式session管理-16-1-22-d0",
              "tag": "Spring Session+Redis",
              "desc": "Filter替换HttpSession→Redis存储Session数据多实例共享"
            },
            {
              "id": "分布式session管理-16-1-22-d1",
              "tag": "JWT无状态",
              "desc": "Token携带用户信息(userId/role/exp)服务端无Session开销适合微服务"
            },
            {
              "id": "分布式session管理-16-1-22-d2",
              "tag": "Session粘性",
              "desc": "Nginx ip_hash同一IP路由到同一实例简单但不灵活实例挂了Session丢失"
            },
            {
              "id": "分布式session管理-16-1-22-d3",
              "tag": "Token+Redis混合",
              "desc": "JWT做认证凭据+Redis存热数据(权限/购物车)兼顾无状态和会话数据"
            },
            {
              "id": "分布式session管理-16-1-22-d4",
              "tag": "Session过期与续期",
              "desc": "Redis TTL设30分钟+每次请求刷新续期滑动过期避免固定过期突然断开"
            },
            {
              "id": "分布式session管理-16-1-22-d5",
              "tag": "安全考虑",
              "desc": "SessionID绑定IP+UA防劫持HTTPS传输Cookie设Secure+HttpOnly"
            }
          ]
        },
        {
          "id": "如何设计一个用户系统-16-1-23",
          "tag": "如何设计一个用户系统",
          "desc": "注册登录认证权限一套完整用户体系如何设计",
          "details": [
            {
              "id": "如何设计一个用户系统-16-1-23-d0",
              "tag": "注册流程",
              "desc": "手机号+验证码注册/邮箱+密码注册/第三方OAuth(GitHub/微信)授权注册"
            },
            {
              "id": "如何设计一个用户系统-16-1-23-d1",
              "tag": "密码安全",
              "desc": "bcrypt/SCrypt加盐哈希存储明文密码不入DB登录比对哈希值"
            },
            {
              "id": "如何设计一个用户系统-16-1-23-d2",
              "tag": "登录认证",
              "desc": "JWT(access_token+refresh_token双Token机制)refresh_token刷新access_token防永久有效"
            },
            {
              "id": "如何设计一个用户系统-16-1-23-d3",
              "tag": "权限体系",
              "desc": "RBAC(user→role→permission)支持角色继承+数据权限(行级WHERE dept_id IN)"
            },
            {
              "id": "如何设计一个用户系统-16-1-23-d4",
              "tag": "OAuth2.0",
              "desc": "授权码模式(Web应用)+隐式模式(纯前端)+客户端模式(服务间)+密码模式(内部可信)"
            },
            {
              "id": "如何设计一个用户系统-16-1-23-d5",
              "tag": "防暴力破解",
              "desc": "登录接口限流(单IP5次/分钟)+验证码触发(连续3次失败)+账户锁定(10次失败锁30分钟)"
            }
          ]
        },
        {
          "id": "缓存一致性方案-16-1-24",
          "tag": "缓存一致性方案",
          "desc": "缓存与数据库数据不一致如何从Cache Aside到最终一致性多维解决",
          "details": [
            {
              "id": "缓存一致性方案-16-1-24-d0",
              "tag": "Cache Aside(旁路缓存)",
              "desc": "读先缓存→miss读DB→写缓存更新先DB→删缓存(延迟双删防脏回填)"
            },
            {
              "id": "缓存一致性方案-16-1-24-d1",
              "tag": "延迟双删",
              "desc": "删Cache→更新DB→Sleep(200ms)→再删Cache防止旧数据回填窗口期不一致"
            },
            {
              "id": "缓存一致性方案-16-1-24-d2",
              "tag": "Read/Write Through",
              "desc": "缓存组件统一管理读写应用只与缓存交互屏蔽DB复杂性"
            },
            {
              "id": "缓存一致性方案-16-1-24-d3",
              "tag": "Write Behind",
              "desc": "异步批量写DB性能好但可能丢数据适合日志/统计等容忍丢失场景"
            },
            {
              "id": "缓存一致性方案-16-1-24-d4",
              "tag": "消息队列最终一致",
              "desc": "更新DB→发MQ→消费端更新Cache保证最终一致适合高并发写"
            },
            {
              "id": "缓存一致性方案-16-1-24-d5",
              "tag": "Canal监听binlog",
              "desc": "Canal伪装MySQL Slave解析binlog变更事件→MQ→消费端更新Cache自动化"
            }
          ]
        },
        {
          "id": "热点key处理-16-1-25",
          "tag": "热点Key处理",
          "desc": "某Key突发百万级访问如何识别+分散+本地缓存+限流应对",
          "details": [
            {
              "id": "热点key处理-16-1-25-d0",
              "tag": "热点发现",
              "desc": "Redis热点Key监控redis-cli --hotkeys+Proxy统计+客户端上报+定期TopN分析"
            },
            {
              "id": "热点key处理-16-1-25-d1",
              "tag": "本地缓存",
              "desc": "JVM级Caffeine/Guava缓存热点数据1秒过期请求先走本地不走Redis减少网络开销"
            },
            {
              "id": "热点key处理-16-1-25-d2",
              "tag": "Key分散",
              "desc": "将hot_key拆为hot_key_0~hot_key_N多个子Key请求随机路由到不同子Key分散压力"
            },
            {
              "id": "热点key处理-16-1-25-d3",
              "tag": "请求限流",
              "desc": "热点Key访问超阈值触发限流返回缓存数据+告警通知防止Redis被打垮"
            },
            {
              "id": "热点key处理-16-1-25-d4",
              "tag": "提前预热",
              "desc": "大促/活动前提前加载热点数据到本地缓存+Redis+多级缓存避免冷启动冲击"
            },
            {
              "id": "热点key处理-16-1-25-d5",
              "tag": "灾后恢复",
              "desc": "Redis宕机后本地缓存续命+限流降级+Redis恢复后预热重建热点数据"
            }
          ]
        },
        {
          "id": "缓存穿透雪崩击穿-16-1-26",
          "tag": "缓存穿透雪崩击穿",
          "desc": "三大缓存故障如何预防+应急恢复",
          "details": [
            {
              "id": "缓存穿透雪崩击穿-16-1-26-d0",
              "tag": "缓存穿透",
              "desc": "查询不存在的数据缓存无DB也无恶意请求打穿DB→布隆过滤器拦截+缓存空值(null)设5分钟过期"
            },
            {
              "id": "缓存穿透雪崩击穿-16-1-26-d1",
              "tag": "缓存雪崩",
              "desc": "大量Key同时过期或Redis宕机→请求全部打到DB→随机过期时间(基础+0~5分钟随机)+Redis集群HA+限流降级"
            },
            {
              "id": "缓存穿透雪崩击穿-16-1-26-d2",
              "tag": "缓存击穿",
              "desc": "某热点Key过期瞬间大量并发同时查DB→互斥锁(Redis SETNX)只允许一个请求查DB+其他等待+永不过期+异步刷新"
            },
            {
              "id": "缓存穿透雪崩击穿-16-1-26-d3",
              "tag": "应急方案",
              "desc": "DB扛不住→限流降级返回默认数据+Redis Cluster故障自动切换+本地缓存兜底"
            },
            {
              "id": "缓存穿透雪崩击穿-16-1-26-d4",
              "tag": "预防体系",
              "desc": "布隆过滤器+随机过期+互斥锁+多级缓存+限流降级+Redis HA五层防御"
            },
            {
              "id": "缓存穿透雪崩击穿-16-1-26-d5",
              "tag": "监控告警",
              "desc": "Redis命中率<90%+DB查询量突增+缓存空值比例异常→自动告警"
            }
          ]
        },
        {
          "id": "多级缓存架构-16-1-27",
          "tag": "多级缓存架构",
          "desc": "本地缓存+Redis+DB三级缓存如何设计一致性+失效+更新策略",
          "details": [
            {
              "id": "多级缓存架构-16-1-27-d0",
              "tag": "L1本地缓存(Caffeine)",
              "desc": "JVM级最大1000条过期1-5秒命中率60-70%减少Redis网络开销"
            },
            {
              "id": "多级缓存架构-16-1-27-d1",
              "tag": "L2分布式缓存(Redis)",
              "desc": "集群级过期5-10分钟命中率80-90%热点数据+分布式共享"
            },
            {
              "id": "多级缓存架构-16-1-27-d2",
              "tag": "L3数据库(MySQL)",
              "desc": "持久存储兜底缓存全部miss时才查DB每秒承受量有限需保护"
            },
            {
              "id": "多级缓存架构-16-1-27-d3",
              "tag": "更新策略",
              "desc": "写操作→更新DB→删L2→等L1自然过期→读操作先L1→miss查L2→miss查DB→回写L2+L1"
            },
            {
              "id": "多级缓存架构-16-1-27-d4",
              "tag": "一致性保障",
              "desc": "L1短过期容忍短暂不一致+L2延迟双删+Canal监听binlog异步更新缓存"
            },
            {
              "id": "多级缓存架构-16-1-27-d5",
              "tag": "降级策略",
              "desc": "Redis宕机→L1续命+限流+DB限流保护Redis恢复后预热重建"
            }
          ]
        },
        {
          "id": "大key与死key治理-16-1-28",
          "tag": "大Key与死Key治理",
          "desc": "Redis中存在占用内存过大或长期不访问的Key如何发现+拆分+清理",
          "details": [
            {
              "id": "大key与死key治理-16-1-28-d0",
              "tag": "大Key发现",
              "desc": "redis-cli --bigkeys扫描+RDB分析工具(rdb-tools)解析+INFO命令监控used_memory突增"
            },
            {
              "id": "大key与死key治理-16-1-28-d1",
              "tag": "大Key类型",
              "desc": "String>10KB/Hash>5000field/List>5000元素/Set>10000成员/ZSet>10000成员"
            },
            {
              "id": "大key与死key治理-16-1-28-d2",
              "tag": "大Key危害",
              "desc": "阻塞Redis(DEL/UNLINK耗时)/网络传输慢/内存不均匀/集群迁移卡顿"
            },
            {
              "id": "大key与死key治理-16-1-28-d3",
              "tag": "大Key拆分",
              "desc": "Hash大Key按field分组拆为多个小Hash(key:field1~N)/List分段存储/Set分片"
            },
            {
              "id": "大key与死key治理-16-1-28-d4",
              "tag": "大Key删除",
              "desc": "UNLINK异步删除不阻塞主线程/HSCAN+HDEL渐进删除大Hash/LTRIM截断大List"
            },
            {
              "id": "大key与死key治理-16-1-28-d5",
              "tag": "死Key发现",
              "desc": "定期扫描Key的访问统计(object idle time)>30天未访问→评估是否过期清理"
            },
            {
              "id": "大key与死key治理-16-1-28-d6",
              "tag": "死Key清理",
              "desc": "设置合理TTL过期自动清理+定期扫描清理无TTL的僵尸Key+业务上线前规划Key过期策略"
            }
          ]
        },
        {
          "id": "如何设计一个排行榜系统-16-1-29",
          "tag": "如何设计一个排行榜系统",
          "desc": "实时排行榜如何用Redis ZSet+定时聚合+分页实现高性能",
          "details": [
            {
              "id": "如何设计一个排行榜系统-16-1-29-d0",
              "tag": "Redis ZSet核心",
              "desc": "ZINCRBY更新分数+ZREVRANGE按分数降序取TopN+ZREVRANK获取排名"
            },
            {
              "id": "如何设计一个排行榜系统-16-1-29-d1",
              "tag": "日榜/周榜/月榜",
              "desc": "不同时间维度维护不同ZSet(daily_rank/weekly_rank/monthly_rank)+定时归档合并"
            },
            {
              "id": "如何设计一个排行榜系统-16-1-29-d2",
              "tag": "分页查询",
              "desc": "ZREVRANGE start end WITHSCORES每次取50条前端传offset+limit参数"
            },
            {
              "id": "如何设计一个排行榜系统-16-1-29-d3",
              "tag": "实时更新",
              "desc": "用户行为(签到/消费/互动)触发ZINCRBY增量更新分数无需全量重算"
            },
            {
              "id": "如何设计一个排行榜系统-16-1-29-d4",
              "tag": "榜单缓存",
              "desc": "Top100结果缓存Redis String过期1分钟减少ZSet扫描频率"
            },
            {
              "id": "如何设计一个排行榜系统-16-1-29-d5",
              "tag": "历史榜单",
              "desc": "日榜数据每晚归档到DB月榜从DB聚合+Redis缓存历史榜单查询走DB"
            }
          ]
        },
        {
          "id": "如何设计一个分布式任务调度-16-1-30",
          "tag": "如何设计一个分布式任务调度",
          "desc": "定时任务如何在多实例中保证只执行一次+失败重试+监控告警",
          "details": [
            {
              "id": "如何设计一个分布式任务调度-16-1-30-d0",
              "tag": "XXL-Job方案",
              "desc": "Admin管理界面+Executor注册+调度中心分发任务保证单实例执行+失败重试+日志查看"
            },
            {
              "id": "如何设计一个分布式任务调度-16-1-30-d1",
              "tag": "ElasticJob方案",
              "desc": "基于ZooKeeper选举Leader执行+分片广播多实例并行处理不同分片数据"
            },
            {
              "id": "如何设计一个分布式任务调度-16-1-30-d2",
              "tag": "分布式锁保障",
              "desc": "Redis SETNX抢锁同一时刻只有一个实例执行定时任务其他实例等待"
            },
            {
              "id": "如何设计一个分布式任务调度-16-1-30-d3",
              "tag": "失败重试",
              "desc": "XXL-Job支持失败重试次数配置+失败告警(邮件/钉钉)+人工补执行"
            },
            {
              "id": "如何设计一个分布式任务调度-16-1-30-d4",
              "tag": "分片处理",
              "desc": "大数据量任务按分片参数分片执行Executor1处理分片0/Executor2处理分片1并行加速"
            },
            {
              "id": "如何设计一个分布式任务调度-16-1-30-d5",
              "tag": "监控告警",
              "desc": "任务超时告警+失败率告警+执行日志ELK聚合+调度中心Dashboard可视化"
            }
          ]
        },
        {
          "id": "秒杀系统redis预热与扣减-16-1-31",
          "tag": "秒杀系统Redis预热与扣减",
          "desc": "秒杀开始前如何预热库存到Redis扣减时如何保证原子防超卖",
          "details": [
            {
              "id": "秒杀系统redis预热与扣减-16-1-31-d0",
              "tag": "预热流程",
              "desc": "活动前DB查询库存总量→SET stock:sku:{id} N写入Redis→校验Redis值与DB一致"
            },
            {
              "id": "秒杀系统redis预热与扣减-16-1-31-d1",
              "tag": "扣减原子性",
              "desc": "Lua脚本原子执行DECRBY+判断返回值≥0+记录购买用户SADD防重复购买"
            },
            {
              "id": "秒杀系统redis预热与扣减-16-1-31-d2",
              "tag": "防超卖机制",
              "desc": "Redis扣减成功→MQ异步下单→DB再次校验qty>=1乐观锁兜底三层防护"
            },
            {
              "id": "秒杀系统redis预热与扣减-16-1-31-d3",
              "tag": "库存回补",
              "desc": "用户取消订单/支付超时→INCRBY回补Redis库存+DB回补→MQ通知其他等待用户"
            },
            {
              "id": "秒杀系统redis预热与扣减-16-1-31-d4",
              "tag": "高可用保障",
              "desc": "Redis Cluster多主分片库存按SKU分片存储+本地缓存热点SKU+限流防Redis过载"
            },
            {
              "id": "秒杀系统redis预热与扣减-16-1-31-d5",
              "tag": "数据一致性",
              "desc": "Redis扣减+DB确认分布式事务保障最终一致Redis扣减但DB失败MQ回补+告警"
            }
          ]
        },
        {
          "id": "并发扣款如何防余额负数-16-1-32",
          "tag": "并发扣款如何防余额负数",
          "desc": "高并发扣款场景如何保证余额不为负且不超扣",
          "details": [
            {
              "id": "并发扣款如何防余额负数-16-1-32-d0",
              "tag": "乐观锁方案",
              "desc": "UPDATE account SET balance=balance-amount WHERE id=X AND balance>=amount条件不满足返回失败"
            },
            {
              "id": "并发扣款如何防余额负数-16-1-32-d1",
              "tag": "Redis预扣",
              "desc": "DECRBY account:{id} amount Lua原子判断返回值≥0否则INCRBY回滚"
            },
            {
              "id": "并发扣款如何防余额负数-16-1-32-d2",
              "tag": "CAS无锁方案",
              "desc": "先读balance→比对后写WHERE balance=旧值AND id=X更新失败重试"
            },
            {
              "id": "并发扣款如何防余额负数-16-1-32-d3",
              "tag": "数据库事务+行锁",
              "desc": "SELECT FOR UPDATE锁定行→检查余额→扣减→COMMIT串行化性能低但绝对安全"
            },
            {
              "id": "并发扣款如何防余额负数-16-1-32-d4",
              "tag": "分布式场景",
              "desc": "Redis预扣+DB确认双保障Redis成功但DB失败MQ回补+告警"
            },
            {
              "id": "并发扣款如何防余额负数-16-1-32-d5",
              "tag": "异步扣款方案",
              "desc": "扣款请求入MQ→单Consumer串行消费→保证同一用户顺序扣款避免并发冲突"
            }
          ]
        },
        {
          "id": "线程池如何动态调参数-16-1-33",
          "tag": "线程池如何动态调参数",
          "desc": "线上线程池参数需要根据负载动态调整如何实现不重启生效",
          "details": [
            {
              "id": "线程池如何动态调参数-16-1-33-d0",
              "tag": "动态调参机制",
              "desc": "ThreadPoolExecutor提供setCorePoolSize/setMaximumPoolSize/setKeepAliveTime运行时生效"
            },
            {
              "id": "线程池如何动态调参数-16-1-33-d1",
              "tag": "配置中心驱动",
              "desc": "Apollo/Nacos配置变更→监听回调→调用set方法调整参数无需重启"
            },
            {
              "id": "线程池如何动态调参数-16-1-33-d2",
              "tag": "核心参数动态化",
              "desc": "coreSize/maxSize/queueCapacity/keepAliveTime/rejectedPolicy五项可动态调整"
            },
            {
              "id": "线程池如何动态调参数-16-1-33-d3",
              "tag": "监控指标",
              "desc": "activeCount/queueSize/completedTaskCount/avgTaskTime/rejectCount→指标驱动参数决策"
            },
            {
              "id": "线程池如何动态调参数-16-1-33-d4",
              "tag": "自适应策略",
              "desc": "CPU密集型core=Ncpu+1/IO密集型core=2*Ncpu/混合型根据任务类型比例动态分配"
            },
            {
              "id": "线程池如何动态调参数-16-1-33-d5",
              "tag": "美团方案",
              "desc": "线程池参数动态化+监控上报+告警+自动调优结合配置中心+监控平台闭环"
            }
          ]
        },
        {
          "id": "如何设计一个异步编排框架-16-1-34",
          "tag": "如何设计一个异步编排框架",
          "desc": "多个异步任务需要组合执行(串行/并行/聚合)如何用CompletableFuture实现",
          "details": [
            {
              "id": "如何设计一个异步编排框架-16-1-34-d0",
              "tag": "串行编排",
              "desc": "task1.thenApplyAsync(task2).thenApplyAsync(task3)前一步结果作为下一步输入"
            },
            {
              "id": "如何设计一个异步编排框架-16-1-34-d1",
              "tag": "并行编排",
              "desc": "CompletableFuture.allOf(f1,f2,f3).join()等待所有任务完成聚合结果"
            },
            {
              "id": "如何设计一个异步编排框架-16-1-34-d2",
              "tag": "组合编排",
              "desc": "f1.thenCombine(f2,合并函数)两个任务都完成后合并结果"
            },
            {
              "id": "如何设计一个异步编排框架-16-1-34-d3",
              "tag": "异常处理",
              "desc": "f.exceptionally(兜底值)/f.handle(正常+异常双分支)/f.whenComplete(日志记录不改结果)"
            },
            {
              "id": "如何设计一个异步编排框架-16-1-34-d4",
              "tag": "超时控制",
              "desc": "f.orTimeout(5,TimeUnit.SECONDS)/f.completeOnTimeout(默认值,5,SECONDS)Java9+"
            },
            {
              "id": "如何设计一个异步编排框架-16-1-34-d5",
              "tag": "线程池指定",
              "desc": "所有async方法传入自定义线程池避免使用ForkJoinPool.commonPool共享池"
            },
            {
              "id": "如何设计一个异步编排框架-16-1-34-d6",
              "tag": "典型场景",
              "desc": "商品详情页并行查询(基本信息+价格+库存+评价)+聚合+超时兜底返回部分数据"
            }
          ]
        },
        {
          "id": "如何排查线上cpu飙高-16-1-35",
          "tag": "如何排查线上CPU飙高",
          "desc": "线上服务CPU使用率突然飙高如何快速定位根因",
          "details": [
            {
              "id": "如何排查线上cpu飙高-16-1-35-d0",
              "tag": "步骤1",
              "desc": "top找到CPU最高的Java进程PID"
            },
            {
              "id": "如何排查线上cpu飙高-16-1-35-d1",
              "tag": "步骤2",
              "desc": "top -Hp PID找到CPU最高的线程TID"
            },
            {
              "id": "如何排查线上cpu飙高-16-1-35-d2",
              "tag": "步骤3",
              "desc": "printf '%x' TID将TID转为十六进制hexTID"
            },
            {
              "id": "如何排查线上cpu飙高-16-1-35-d3",
              "tag": "步骤4",
              "desc": "jstack PID | grep hexTID -A 30查看线程堆栈定位代码行"
            },
            {
              "id": "如何排查线上cpu飙高-16-1-35-d4",
              "tag": "常见原因",
              "desc": "死循环(while无break)/正则灾难回溯/频繁GC(JVM内存不足)/线程池满阻塞排队/锁竞争激烈"
            },
            {
              "id": "如何排查线上cpu飙高-16-1-35-d5",
              "tag": "GC频繁",
              "desc": "jstat -gcutil PID 1000观察GC频率+FGC次数→dump堆内存分析大对象→调整JVM参数"
            },
            {
              "id": "如何排查线上cpu飙高-16-1-35-d6",
              "tag": "死锁排查",
              "desc": "jstack PID搜索BLOCKED状态+found one deadlock提示→定位互相等待的锁资源"
            },
            {
              "id": "如何排查线上cpu飙高-16-1-35-d7",
              "tag": "快速止损",
              "desc": "临时扩容(加实例分散负载)/限流降级(关闭非核心功能)/重启服务(治标不治本)"
            }
          ]
        },
        {
          "id": "oom如何快速定位与解决-16-1-36",
          "tag": "OOM如何快速定位与解决",
          "desc": "线上服务出现OOM如何排查是堆溢出/元空间/直接内存哪种类型并解决",
          "details": [
            {
              "id": "oom如何快速定位与解决-16-1-36-d0",
              "tag": "OOM类型判断",
              "desc": "Java heap space(堆内存不足)/Metaspace(类加载过多)/Direct buffer memory(堆外内存)/GC overhead limit exceeded(GC效率低)"
            },
            {
              "id": "oom如何快速定位与解决-16-1-36-d1",
              "tag": "堆OOM排查",
              "desc": "-XX:+HeapDumpOnOutOfMemoryError自动dump→MAT分析大对象/泄漏对象→定位代码"
            },
            {
              "id": "oom如何快速定位与解决-16-1-36-d2",
              "tag": "Metaspace OOM",
              "desc": "动态代理/CGLIB大量生成类+反射→MaxMetaspaceSize调大+排查类加载器泄漏"
            },
            {
              "id": "oom如何快速定位与解决-16-1-36-d3",
              "tag": "堆外内存OOM",
              "desc": "NIO DirectByteBuffer→-XX:MaxDirectMemorySize限制+排查未释放的ByteBuffer"
            },
            {
              "id": "oom如何快速定位与解决-16-1-36-d4",
              "tag": "GC overhead OOM",
              "desc": "GC耗时>98%回收<2%→堆确实太小或泄漏→增加堆内存+排查泄漏"
            },
            {
              "id": "oom如何快速定位与解决-16-1-36-d5",
              "tag": "预防措施",
              "desc": "合理设置各区域大小(新生代/老年代/元空间)+监控内存趋势+提前告警+定期代码审查"
            }
          ]
        },
        {
          "id": "如何设计一个支付系统-16-1-37",
          "tag": "如何设计一个支付系统",
          "desc": "支付链路如何保证资金安全+幂等+对账+补偿",
          "details": [
            {
              "id": "如何设计一个支付系统-16-1-37-d0",
              "tag": "支付流程",
              "desc": "下单→创建支付单(状态pending)→调用支付渠道(微信/支付宝)→回调通知→更新支付单状态(paid)"
            },
            {
              "id": "如何设计一个支付系统-16-1-37-d1",
              "tag": "幂等保障",
              "desc": "支付单号做唯一索引+渠道回调幂等(通知号+支付单号联合去重)+重试不重复扣款"
            },
            {
              "id": "如何设计一个支付系统-16-1-37-d2",
              "tag": "资金安全",
              "desc": "金额校验(渠道返回金额==请求金额)+签名验证(渠道公钥验签防伪造回调)+防篡改"
            },
            {
              "id": "如何设计一个支付系统-16-1-37-d3",
              "tag": "对账机制",
              "desc": "每日T+1对账→下载渠道对账文件→逐笔比对支付单状态+金额→差异记录→人工核实"
            },
            {
              "id": "如何设计一个支付系统-16-1-37-d4",
              "tag": "补偿机制",
              "desc": "回调超时未收到→主动查询渠道订单状态→补更新支付单→MQ通知订单服务"
            },
            {
              "id": "如何设计一个支付系统-16-1-37-d5",
              "tag": "灰度切换",
              "desc": "新支付渠道先灰度5%流量→监控成功率/耗时→逐步放量→旧渠道降级备用"
            }
          ]
        },
        {
          "id": "死锁如何预防与排查-16-1-38",
          "tag": "死锁如何预防与排查",
          "desc": "多线程并发场景如何预防死锁+如何排查线上死锁",
          "details": [
            {
              "id": "死锁如何预防与排查-16-1-38-d0",
              "tag": "死锁四个必要条件",
              "desc": "互斥+持有等待+不可抢占+循环等待打破任一条件即可预防"
            },
            {
              "id": "死锁如何预防与排查-16-1-38-d1",
              "tag": "预防策略",
              "desc": "固定加锁顺序(所有线程按同一顺序获取锁)+超时放弃(lock.tryLock(3,SECONDS))+减少锁粒度"
            },
            {
              "id": "死锁如何预防与排查-16-1-38-d2",
              "tag": "排查方法",
              "desc": "jstack PID搜索BLOCKED+found one deadlock→定位互相等待的锁对象和代码行"
            },
            {
              "id": "死锁如何预防与排查-16-1-38-d3",
              "tag": "数据库死锁",
              "desc": "SHOW ENGINE INNODB STATUS查看LATEST DETECTED DEADLOCK→定位冲突SQL+加锁顺序"
            },
            {
              "id": "死锁如何预防与排查-16-1-38-d4",
              "tag": "避免嵌套锁",
              "desc": "尽量不在持有一个锁时再去获取另一个锁拆分为独立操作减少锁交叉"
            },
            {
              "id": "死锁如何预防与排查-16-1-38-d5",
              "tag": "线上应急",
              "desc": "临时重启恢复+排查根因+修复代码+灰度上线验证+死锁监控告警(SkyWalking/JMX)"
            }
          ]
        },
        {
          "id": "如何设计一个红包系统-16-1-39",
          "tag": "如何设计一个红包系统",
          "desc": "高并发抢红包场景如何保证金额不超发+不漏发+公平分配",
          "details": [
            {
              "id": "如何设计一个红包系统-16-1-39-d0",
              "tag": "红包预分配",
              "desc": "发红包时将总金额拆分为N份存Redis List(red:pool:{id})每份金额随机(二倍均值算法)"
            },
            {
              "id": "如何设计一个红包系统-16-1-39-d1",
              "tag": "抢红包原子性",
              "desc": "Lua脚本原子操作LPOP取出一份+记录领取用户SADD防重复抢+INCR已领数"
            },
            {
              "id": "如何设计一个红包系统-16-1-39-d2",
              "tag": "金额公平性",
              "desc": "二倍均值算法每次剩余金额/剩余人数*2为上限随机保证每个人至少1分钱"
            },
            {
              "id": "如何设计一个红包系统-16-1-39-d3",
              "tag": "超发防护",
              "desc": "Redis预拆分+原子取出保证总额不超发DB二次校验兜底"
            },
            {
              "id": "如何设计一个红包系统-16-1-39-d4",
              "tag": "并发处理",
              "desc": "Redis原子操作无锁+List预拆分无需实时计算+抢完即止LPOP返回nil"
            },
            {
              "id": "如何设计一个红包系统-16-1-39-d5",
              "tag": "异步落DB",
              "desc": "领取成功后MQ异步写入DB(领取记录+金额)保证Redis性能DB最终一致"
            }
          ]
        },
        {
          "id": "如何设计一个短链生成系统-16-1-40",
          "tag": "如何设计一个短链生成系统",
          "desc": "长URL转短码如何生成+存储+跳转+统计",
          "details": [
            {
              "id": "如何设计一个短链生成系统-16-1-40-d0",
              "tag": "短码生成",
              "desc": "MD5/SHA256长URL哈希→Base62编码取前6位(62^6=568亿种组合)+冲突检测重试+发号器自增ID Base62编码"
            },
            {
              "id": "如何设计一个短链生成系统-16-1-40-d1",
              "tag": "存储方案",
              "desc": "Redis缓存短码→长URL映射(SET short:{code} longUrl EX 30天)+DB持久化(short_code+long_url+created_at)"
            },
            {
              "id": "如何设计一个短链生成系统-16-1-40-d2",
              "tag": "302跳转",
              "desc": "短码请求→Redis查长URL→302重定向+记录访问统计(Referer/IP/时间)比301更灵活可统计"
            },
            {
              "id": "如何设计一个短链生成系统-16-1-40-d3",
              "tag": "访问统计",
              "desc": "Redis INCR short:{code}:count实时计数+定时批量写入DB统计表(日期+短码+PV+UV+地域)"
            },
            {
              "id": "如何设计一个短链生成系统-16-1-40-d4",
              "tag": "高可用",
              "desc": "Redis Cluster+主从+本地缓存热点短码+DB分表按short_code前2位分64表"
            },
            {
              "id": "如何设计一个短链生成系统-16-1-40-d5",
              "tag": "防滥用",
              "desc": "生成接口限流(单IP每小时100次)+短码过期(30天TTL)+黑名单URL过滤"
            }
          ]
        },
        {
          "id": "如何设计一个搜索引擎后端-16-1-41",
          "tag": "如何设计一个搜索引擎(后端)",
          "desc": "电商/内容搜索如何用ES实现分词+排序+过滤+高亮+聚合",
          "details": [
            {
              "id": "如何设计一个搜索引擎后端-16-1-41-d0",
              "tag": "索引设计",
              "desc": "mapping定义(analyzer:ik_max_word索引+ik_smart搜索)字段类型keyword/text/integer/date"
            },
            {
              "id": "如何设计一个搜索引擎后端-16-1-41-d1",
              "tag": "分词策略",
              "desc": "中文IK Analyzer ik_max_word建索引尽量多匹配ik_smart搜索时精简匹配减少噪音"
            },
            {
              "id": "如何设计一个搜索引擎后端-16-1-41-d2",
              "tag": "搜索排序",
              "desc": "BM25文本相关性+自定义boost(销量/评分权重)+function_score(衰减函数时间/距离)"
            },
            {
              "id": "如何设计一个搜索引擎后端-16-1-41-d3",
              "tag": "过滤聚合",
              "desc": "bool query must(match关键词)+filter(价格区间/品牌/分类)+agg(品牌分布/价格统计)"
            },
            {
              "id": "如何设计一个搜索引擎后端-16-1-41-d4",
              "tag": "高亮搜索",
              "desc": "highlight字段pre_tags:<em> post_tags:</em>前端v-html渲染搜索结果关键词高亮"
            },
            {
              "id": "如何设计一个搜索引擎后端-16-1-41-d5",
              "tag": "分页策略",
              "desc": "浅分页from+size适合前100页深分页search_after避免from+N性能退化+scroll批量导出"
            }
          ]
        },
        {
          "id": "如何设计一个超时取消订单系统-16-1-42",
          "tag": "如何设计一个超时取消订单系统",
          "desc": "订单创建后30分钟未支付自动取消释放库存如何可靠实现",
          "details": [
            {
              "id": "如何设计一个超时取消订单系统-16-1-42-d0",
              "tag": "方案选型",
              "desc": "RabbitMQ死信队列(TTL+DLX)/RocketMQ延迟消息/Redis ZSet定时扫描/DB定时扫表+分布式锁"
            },
            {
              "id": "如何设计一个超时取消订单系统-16-1-42-d1",
              "tag": "MQ方案优势",
              "desc": "消息驱动无需轮询延迟精确30分钟到期自动触发消费者执行取消逻辑"
            },
            {
              "id": "如何设计一个超时取消订单系统-16-1-42-d2",
              "tag": "Redis ZSet方案",
              "desc": "ZADD order_delay score=创建时间+30min member=orderId定时线程ZRANGEBYSCORE取出到期订单"
            },
            {
              "id": "如何设计一个超时取消订单系统-16-1-42-d3",
              "tag": "取消流程",
              "desc": "查订单状态→仍为待支付→更新为已取消→回补库存(INCRBY)/释放优惠券→MQ通知下游"
            },
            {
              "id": "如何设计一个超时取消订单系统-16-1-42-d4",
              "tag": "幂等保障",
              "desc": "取消操作幂等WHERE status='待支付'条件不满足(已支付/已取消)直接返回成功"
            },
            {
              "id": "如何设计一个超时取消订单系统-16-1-42-d5",
              "tag": "补偿机制",
              "desc": "MQ消息丢失→定时扫描DB待支付超时订单兜底补偿→已取消订单重复通知→下游幂等处理"
            }
          ]
        },
        {
          "id": "分库分表后如何跨表查询-16-1-43",
          "tag": "分库分表后如何跨表查询",
          "desc": "数据分散在多个分表后如何处理跨表JOIN/排序/分页/聚合",
          "details": [
            {
              "id": "分库分表后如何跨表查询-16-1-43-d0",
              "tag": "跨表JOIN避免",
              "desc": "业务层先查主表拿到ID→再查关联表→内存组装结果避免跨库SQL JOIN"
            },
            {
              "id": "分库分表后如何跨表查询-16-1-43-d1",
              "tag": "全局排序",
              "desc": "各分表局部排序→内存归并排序取TopN→适合排行榜/Top10场景数据量可控"
            },
            {
              "id": "分库分表后如何跨表查询-16-1-43-d2",
              "tag": "跨表分页",
              "desc": "各分表查前N条→内存归并→取全局第M页→深度分页性能差需search_after或ES"
            },
            {
              "id": "分库分表后如何跨表查询-16-1-43-d3",
              "tag": "聚合统计",
              "desc": "各分表局部COUNT/SUM→内存聚合→适合总量统计/平均值复杂聚合考虑ES或ClickHouse"
            },
            {
              "id": "分库分表后如何跨表查询-16-1-43-d4",
              "tag": "中间件方案",
              "desc": "ShardingSphere支持跨分表ORDER BY+LIMIT归并+部分聚合但深度分页性能差"
            },
            {
              "id": "分库分表后如何跨表查询-16-1-43-d5",
              "tag": "宽表设计",
              "desc": "高频查询字段冗余到同一分表减少跨表查询(订单表冗余用户名/商品名)以空间换时间"
            }
          ]
        },
        {
          "id": "如何设计一个订单系统-16-1-44",
          "tag": "如何设计一个订单系统",
          "desc": "电商订单从创建到完成如何设计状态机+拆单+超时+一致性",
          "details": [
            {
              "id": "如何设计一个订单系统-16-1-44-d0",
              "tag": "订单状态机",
              "desc": "待支付→已支付→待发货→已发货→已完成每步单向流转不支持逆向(取消除外)"
            },
            {
              "id": "如何设计一个订单系统-16-1-44-d1",
              "tag": "订单拆单",
              "desc": "一个订单含多商家商品→拆为多个子订单每个子订单独立发货独立结算"
            },
            {
              "id": "如何设计一个订单系统-16-1-44-d2",
              "tag": "超时取消",
              "desc": "待支付30分钟未付→自动取消(RMQ延迟消息)释放库存和优惠券"
            },
            {
              "id": "如何设计一个订单系统-16-1-44-d3",
              "tag": "数据一致性",
              "desc": "订单+库存+支付三方TCC或本地消息表+MQ最终一致库存扣减幂等"
            },
            {
              "id": "如何设计一个订单系统-16-1-44-d4",
              "tag": "逆向流程",
              "desc": "退款→子订单退款不影响其他子订单/整单取消→所有子订单取消+全额退款"
            },
            {
              "id": "如何设计一个订单系统-16-1-44-d5",
              "tag": "表设计",
              "desc": "order主表(订单号+金额+状态)+order_item子表(SKU+数量+价格)+order_log操作日志"
            }
          ]
        },
        {
          "id": "如何设计一个文件存储系统-16-1-45",
          "tag": "如何设计一个文件存储系统",
          "desc": "用户上传文件如何用OSS+CDN+临时URL+权限控制实现安全高效存储",
          "details": [
            {
              "id": "如何设计一个文件存储系统-16-1-45-d0",
              "tag": "直传OSS方案",
              "desc": "前端获取STS临时凭证(AccessKeyId+AccessKeySecret+SecurityToken)→SDK直传OSS→不经后端服务器"
            },
            {
              "id": "如何设计一个文件存储系统-16-1-45-d1",
              "tag": "STS安全",
              "desc": "临时凭证限制权限(仅PutObject+指定路径前缀)有效期15分钟→过期自动失效防泄露"
            },
            {
              "id": "如何设计一个文件存储系统-16-1-45-d2",
              "tag": "CDN加速",
              "desc": "OSS绑定CDN域名→用户下载从CDN边缘节点获取→源站压力降低访问速度提升"
            },
            {
              "id": "如何设计一个文件存储系统-16-1-45-d3",
              "tag": "临时下载URL",
              "desc": "OSS GeneratePresignedURL设过期时间1小时→付费内容/私有文件可控访问时长"
            },
            {
              "id": "如何设计一个文件存储系统-16-1-45-d4",
              "tag": "文件校验",
              "desc": "上传前后端校验文件类型(后缀+MIME双检)+大小限制(单文件50MB)+病毒扫描(异步)"
            },
            {
              "id": "如何设计一个文件存储系统-16-1-45-d5",
              "tag": "存储策略",
              "desc": "热文件OSS标准存储+温文件低频访问(30天后转)+冷文件归档(90天后转)自动生命周期"
            }
          ]
        },
        {
          "id": "如何设计一个通知推送系统后端-16-1-46",
          "tag": "如何设计一个通知推送系统(后端)",
          "desc": "短信/邮件/APP推送等多渠道通知如何统一管理异步发送防骚扰",
          "details": [
            {
              "id": "如何设计一个通知推送系统后端-16-1-46-d0",
              "tag": "多渠道适配",
              "desc": "短信(阿里云SMS SDK)+邮件(SMTP/JavaMail)+APP推送(极光推送)+钉钉(Webhook)"
            },
            {
              "id": "如何设计一个通知推送系统后端-16-1-46-d1",
              "tag": "模板管理",
              "desc": "模板变量{{name}}/{{date}}替换+多语言模板+版本管理+审核发布"
            },
            {
              "id": "如何设计一个通知推送系统后端-16-1-46-d2",
              "tag": "异步发送",
              "desc": "通知→MQ(RabbitMQ)→Consumer→调用各渠道SDK→记录发送结果(send_log表)"
            },
            {
              "id": "如何设计一个通知推送系统后端-16-1-46-d3",
              "tag": "防骚扰策略",
              "desc": "同类通知10分钟合并为1条+用户偏好设置免打扰时段(22:00-8:00)+频率限制每天5条"
            },
            {
              "id": "如何设计一个通知推送系统后端-16-1-46-d4",
              "tag": "优先级调度",
              "desc": "P0紧急(短信+钉钉同时发)/P1重要(邮件+站内信)/P2普通(站内信)→MQ不同队列"
            },
            {
              "id": "如何设计一个通知推送系统后端-16-1-46-d5",
              "tag": "发送失败补偿",
              "desc": "SDK调用失败→重试3次指数退避→全部失败→死信队列→人工介入+告警"
            }
          ]
        },
        {
          "id": "mysql索引设计实战-16-1-47",
          "tag": "MySQL索引设计实战",
          "desc": "业务查询慢如何用EXPLAIN分析+联合索引+覆盖索引+避免索引失效优化",
          "details": [
            {
              "id": "mysql索引设计实战-16-1-47-d0",
              "tag": "EXPLAIN分析",
              "desc": "type列(ALL全表扫描/index全索引扫描/range范围/ref等值/eq_ref唯一)const最快"
            },
            {
              "id": "mysql索引设计实战-16-1-47-d1",
              "tag": "联合索引最左匹配",
              "desc": "INDEX(a,b,c)能匹配a/ab/abc查询条件不能跳过a直接用b或c"
            },
            {
              "id": "mysql索引设计实战-16-1-47-d2",
              "tag": "覆盖索引优化",
              "desc": "SELECT的列全部在索引中无需回表查询EXPLAIN Extra=Using index表示覆盖"
            },
            {
              "id": "mysql索引设计实战-16-1-47-d3",
              "tag": "索引失效场景",
              "desc": "WHERE条件OR/!=/<>/LIKE '%xx'/函数操作(ISNULL/YEAR)/隐式类型转换(字符串列传数字)"
            },
            {
              "id": "mysql索引设计实战-16-1-47-d4",
              "tag": "索引选择性",
              "desc": "区分度高的列优先(COUNT(DISTINCT col)/COUNT(*)>0.3适合索引)性别等低区分度不适合单列索引"
            },
            {
              "id": "mysql索引设计实战-16-1-47-d5",
              "tag": "索引维护成本",
              "desc": "每个索引增加INSERT/UPDATE/DELETE开销索引越多写性能越差需平衡读写比例"
            }
          ]
        },
        {
          "id": "如何排查与解决mysql死锁-16-1-48",
          "tag": "如何排查与解决MySQL死锁",
          "desc": "线上MySQL出现死锁如何排查根因并修复",
          "details": [
            {
              "id": "如何排查与解决mysql死锁-16-1-48-d0",
              "tag": "查看死锁日志",
              "desc": "SHOW ENGINE INNODB STATUS→LATEST DETECTED DEADLOCK→定位冲突事务和SQL"
            },
            {
              "id": "如何排查与解决mysql死锁-16-1-48-d1",
              "tag": "常见死锁场景",
              "desc": "两个事务交叉更新不同行(事务A锁行1等行2/事务B锁行2等行1)→循环等待"
            },
            {
              "id": "如何排查与解决mysql死锁-16-1-48-d2",
              "tag": "间隙锁死锁",
              "desc": "RR隔离级别下范围更新产生Gap Lock→不同事务锁范围交叉→死锁"
            },
            {
              "id": "如何排查与解决mysql死锁-16-1-48-d3",
              "tag": "预防策略",
              "desc": "固定加锁顺序(按主键ID顺序更新)/减小事务范围(短事务快提交)/降低隔离级别(RC无Gap Lock)"
            },
            {
              "id": "如何排查与解决mysql死锁-16-1-48-d4",
              "tag": "应用层处理",
              "desc": "捕获DeadlockException→重试事务(最多3次)→重试失败告警→记录日志分析"
            },
            {
              "id": "如何排查与解决mysql死锁-16-1-48-d5",
              "tag": "监控告警",
              "desc": "死锁次数>5次/小时→告警→定期分析死锁日志→优化SQL和事务设计"
            }
          ]
        },
        {
          "id": "sql慢查询优化实战-16-1-49",
          "tag": "SQL慢查询优化实战",
          "desc": "线上出现慢SQL如何从分析到优化全链路解决",
          "details": [
            {
              "id": "sql慢查询优化实战-16-1-49-d0",
              "tag": "慢查询定位",
              "desc": "slow_query_log开启+long_query_time=1秒→mysqldumpslow分析Top10慢SQL"
            },
            {
              "id": "sql慢查询优化实战-16-1-49-d1",
              "tag": "EXPLAIN解读",
              "desc": "type从ALL→range→ref→eq_ref优化目标rows扫描行数越小越好Extra避免Using filesort/temporary"
            },
            {
              "id": "sql慢查询优化实战-16-1-49-d2",
              "tag": "索引优化",
              "desc": "为WHERE/ORDER BY/GROUP BY条件列建索引联合索引遵循最左匹配覆盖索引避免回表"
            },
            {
              "id": "sql慢查询优化实战-16-1-49-d3",
              "tag": "SQL改写",
              "desc": "避免SELECT *只查需要的列/子查询改JOIN/大IN改EXISTS/分页优化避免深分页OFFSET过大"
            },
            {
              "id": "sql慢查询优化实战-16-1-49-d4",
              "tag": "分页优化",
              "desc": "传统LIMIT offset,N→offset大时扫描跳过大量行→改用WHERE id>lastId LIMIT N或search_after"
            },
            {
              "id": "sql慢查询优化实战-16-1-49-d5",
              "tag": "架构优化",
              "desc": "单表>千万行→分库分表/复杂查询走ES/热点数据Redis缓存/读写分离分散压力"
            }
          ]
        },
        {
          "id": "如何设计数据库分库分表-16-1-50",
          "tag": "如何设计数据库分库分表",
          "desc": "单库单表扛不住如何用ShardingSphere+自定义路由实现水平垂直拆分",
          "details": [
            {
              "id": "如何设计数据库分库分表-16-1-50-d0",
              "tag": "水平分表策略",
              "desc": "HASH取模(按userId%16分16表分布均匀但扩容难)/范围分表(按时间每月一表扩容易但可能热点)/一致性HASH(扩容只影响相邻节点)"
            },
            {
              "id": "如何设计数据库分库分表-16-1-50-d1",
              "tag": "垂直分库",
              "desc": "按业务域拆库(用户库/订单库/商品库)减少单库压力业务边界清晰"
            },
            {
              "id": "如何设计数据库分库分表-16-1-50-d2",
              "tag": "分表键选择",
              "desc": "高频查询的等值条件列(userId/orderId)作为分表键保证查询定位到单表"
            },
            {
              "id": "如何设计数据库分库分表-16-1-50-d3",
              "tag": "扩容方案",
              "desc": "成倍扩容(16表→32表数据迁移按新取模路由)/新增分表范围追加(每月自动新建表)"
            },
            {
              "id": "如何设计数据库分库分表-16-1-50-d4",
              "tag": "ShardingSphere配置",
              "desc": "spring.shardingsphere.sharding.tables.order.actual-data-nodes=ds0.order_0~15+分表算法"
            },
            {
              "id": "如何设计数据库分库分表-16-1-50-d5",
              "tag": "全局ID",
              "desc": "Snowflake/Leaf-segment保证分表后主键全局唯一避免跨表ID冲突"
            }
          ]
        },
        {
          "id": "如何设计一个乐观锁与悲观锁方案-16-1-51",
          "tag": "如何设计一个乐观锁与悲观锁方案",
          "desc": "并发更新数据时如何选择乐观锁或悲观锁并正确实现",
          "details": [
            {
              "id": "如何设计一个乐观锁与悲观锁方案-16-1-51-d0",
              "tag": "乐观锁适用",
              "desc": "读多写少冲突概率低(库存扣减/余额更新)用version字段+WHERE条件CAS更新失败重试"
            },
            {
              "id": "如何设计一个乐观锁与悲观锁方案-16-1-51-d1",
              "tag": "悲观锁适用",
              "desc": "写多冲突概率高(转账/强一致要求)用SELECT FOR UPDATE行级排他锁串行化保证"
            },
            {
              "id": "如何设计一个乐观锁与悲观锁方案-16-1-51-d2",
              "tag": "乐观锁实现",
              "desc": "UPDATE table SET val=new_val,version=version+1 WHERE id=X AND version=old_version影响行数0则失败"
            },
            {
              "id": "如何设计一个乐观锁与悲观锁方案-16-1-51-d3",
              "tag": "悲观锁实现",
              "desc": "BEGIN→SELECT val FROM table WHERE id=X FOR UPDATE→检查→UPDATE→COMMIT锁持有期间阻塞其他写"
            },
            {
              "id": "如何设计一个乐观锁与悲观锁方案-16-1-51-d4",
              "tag": "混合策略",
              "desc": "低冲突场景乐观锁(性能好无锁等待)+高冲突场景悲观锁(保证一致)根据业务场景选择"
            },
            {
              "id": "如何设计一个乐观锁与悲观锁方案-16-1-51-d5",
              "tag": "分布式锁配合",
              "desc": "跨服务场景加分布式锁(Redis/ZK)→单服务内用乐观锁/悲观锁→双重保障"
            }
          ]
        },
        {
          "id": "如何实现数据库软删除与数据回收-16-1-52",
          "tag": "如何实现数据库软删除与数据回收",
          "desc": "业务数据不能物理删除如何用软删除+回收站+定时清理实现",
          "details": [
            {
              "id": "如何实现数据库软删除与数据回收-16-1-52-d0",
              "tag": "软删除字段",
              "desc": "表加is_delete/bit字段(0正常/1删除)+deletion_time/deleter_id记录删除信息"
            },
            {
              "id": "如何实现数据库软删除与数据回收-16-1-52-d1",
              "tag": "查询过滤",
              "desc": "所有查询WHERE is_delete=0自动过滤Repository层BaseModel内置软删除条件"
            },
            {
              "id": "如何实现数据库软删除与数据回收-16-1-52-d2",
              "tag": "回收站功能",
              "desc": "is_delete=1的数据作为回收站→前端提供恢复接口UPDATE is_delete=0→恢复原数据"
            },
            {
              "id": "如何实现数据库软删除与数据回收-16-1-52-d3",
              "tag": "定时清理",
              "desc": "超过90天的软删除数据→定时任务物理删除DELETE WHERE is_delete=1 AND deletion_time<90天前"
            },
            {
              "id": "如何实现数据库软删除与数据回收-16-1-52-d4",
              "tag": "关联数据处理",
              "desc": "主记录软删除→关联记录同步软删除(MQ通知下游)→恢复时关联记录同步恢复"
            },
            {
              "id": "如何实现数据库软删除与数据回收-16-1-52-d5",
              "tag": "索引优化",
              "desc": "is_delete字段加入联合索引(WHERE is_delete=0 AND其他条件)避免全表扫描过滤已删除数据"
            }
          ]
        },
        {
          "id": "如何设计一个数据权限系统-16-1-53",
          "tag": "如何设计一个数据权限系统",
          "desc": "不同角色只能看自己部门/层级的数据如何从Row-Level过滤实现",
          "details": [
            {
              "id": "如何设计一个数据权限系统-16-1-53-d0",
              "tag": "数据权限模型",
              "desc": "用户→角色→数据范围(本人/本部门/本部门及下级/全部)四级数据可见范围"
            },
            {
              "id": "如何设计一个数据权限系统-16-1-53-d1",
              "tag": "SQL注入过滤",
              "desc": "Service层根据用户数据范围自动拼接WHERE dept_id IN(可见部门)注入到Repository查询"
            },
            {
              "id": "如何设计一个数据权限系统-16-1-53-d2",
              "tag": "ThreadLocal传递",
              "desc": "Filter解析Token→构建DataPermissionContext(userId+deptId+dataScope)→ThreadLocal→Repository读取"
            },
            {
              "id": "如何设计一个数据权限系统-16-1-53-d3",
              "tag": "MyBatis拦截器",
              "desc": "自定义Interceptor自动在SQL中追加数据权限过滤条件无需手动拼接每个SQL"
            },
            {
              "id": "如何设计一个数据权限系统-16-1-53-d4",
              "tag": "缓存优化",
              "desc": "用户数据权限范围Redis缓存(user:dataperm:{uid})2小时过期+权限变更主动清缓存"
            },
            {
              "id": "如何设计一个数据权限系统-16-1-53-d5",
              "tag": "超级管理员",
              "desc": "admin角色dataScope=ALL→Interceptor跳过过滤→可看全部数据"
            }
          ]
        },
        {
          "id": "文件分片上传断点续传秒传-16-1-54",
          "tag": "文件分片上传/断点续传/秒传",
          "desc": "大文件上传三大核心机制:①分片上传(Chunked Upload)将大文件按固定大小(如5MB)切片并行上传提升速度+降低超时风险;②断点续传(Resumable Upload)记录已上传分片状态,中断后从断点继续而非从头重传;③秒传(Instant Upload)计算文件MD5/SHA256哈希,服务端比对已有文件哈希匹配则直接返回成功无需实际传输",
          "details": [
            {
              "id": "文件分片上传断点续传秒传-16-1-54-d0",
              "tag": "分片上传原理",
              "desc": "前端用Blob.slice()将文件按chunkSize(2-5MB)切割为N个分片,每个分片独立HTTP请求上传(可并行3-5路);服务端按{fileHash+chunkIndex}存储分片到临时目录,全部上传完成后触发merge接口合并分片为完整文件;优势:单请求失败仅重传该分片,并行上传加速,避免大文件单请求超时"
            },
            {
              "id": "文件分片上传断点续传秒传-16-1-54-d1",
              "tag": "断点续传实现",
              "desc": "①上传前先请求服务端已上传分片列表(verify接口);②前端跳过已上传分片只传缺失的;③服务端用Redis/DB记录{fileHash→已上传chunkIndex列表};④每片上传成功后更新已上传记录;⑤中断恢复时重新调用verify获取断点继续;⑥合并前检查所有分片完整性(数量+大小校验)"
            },
            {
              "id": "文件分片上传断点续传秒传-16-1-54-d2",
              "tag": "秒传原理",
              "desc": "前端计算文件整体MD5/SHA-256(spark-md5库分片增量计算避免内存溢出),上传前将fileHash发送至服务端;服务端比对已有文件hash(DB/缓存存储fileHash→filePath映射),匹配则直接返回success+filePath无需传输任何分片;大文件秒传命中率可达60-70%(重复文件/模板/镜像)"
            },
            {
              "id": "文件分片上传断点续传秒传-16-1-54-d3",
              "tag": "文件哈希计算",
              "desc": "小文件(<100MB)可直接MD5;大文件用增量哈希:将文件分片逐块送入MD5/SHA-256计算器(spark-md5/WebCrypto),避免一次性读入内存溢出;浏览器端计算耗时可用Web Worker避免阻塞UI;同时可抽样哈希(取首中尾若干块计算)作为快速秒传预判,匹配后再全量校验"
            },
            {
              "id": "文件分片上传断点续传秒传-16-1-54-d4",
              "tag": "分片合并策略",
              "desc": "服务端合并:①按chunkIndex顺序读取分片→追加写入目标文件(fs.appendFile/流式合并);②合并完校验文件总大小+整体MD5与前端传来的fileHash对比;③合并成功删除临时分片目录;④大文件合并耗时长用异步流式合并避免阻塞;⑤OSS/Minio可直接拼接分片无需本地合并(Compose Object API)"
            },
            {
              "id": "文件分片上传断点续传秒传-16-1-54-d5",
              "tag": "并发控制与错误重试",
              "desc": "前端并发池控制:同时最多3-5路并行上传,用Promise池/p-limit库管理;单分片失败自动重试3次(指数退避:1s→2s→4s);服务端幂等:同一{fileHash+chunkIndex}重复上传不报错(分片已存在则跳过);超时策略:单分片上传timeout 30s,3次失败后整体暂停提示用户;网络恢复后自动从断点继续"
            },
            {
              "id": "文件分片上传断点续传秒传-16-1-54-d6",
              "tag": "OSS/Minio分片上传",
              "desc": "对象存储原生支持Multipart Upload:①InitiateMultipartUpload获取uploadId;②UploadPart按uploadId+partNumber上传分片,OSS自动存储;③CompleteMultipartUpload按partNumber顺序提交合并;④AbortMultipartUpload取消清理;⑤优势:服务端无需自建分片存储,OSS直接管理分片生命周期;⑥Minio/S3/Huawei OBS均兼容此协议"
            }
          ]
        }
      ]
    },
    {
      "id": "16-3-全栈综合场景题-16-2",
      "title": "16.3 全栈综合场景题",
      "points": [
        {
          "id": "设计一个实时聊天系统-16-2-0",
          "tag": "设计一个实时聊天系统",
          "desc": "从WebSocket连接管理、消息队列、持久化到完整聊天系统架构",
          "details": [
            {
              "id": "设计一个实时聊天系统-16-2-0-d0",
              "tag": "WebSocket连接层",
              "desc": "Netty/Socket.io建立WS长连接心跳机制(30s ping/pong)检测断线自动重连"
            },
            {
              "id": "设计一个实时聊天系统-16-2-0-d1",
              "tag": "消息路由层",
              "desc": "用户上线时将WS连接注册到Redis(userId→serverId映射)发消息时根据接收者serverId路由"
            },
            {
              "id": "设计一个实时聊天系统-16-2-0-d2",
              "tag": "消息持久化",
              "desc": "消息先写MongoDB再推送给接收者保证先存后推不丢消息"
            },
            {
              "id": "设计一个实时聊天系统-16-2-0-d3",
              "tag": "在线状态管理",
              "desc": "Redis Hash online_map存userId→serverId+lastActiveTime"
            },
            {
              "id": "设计一个实时聊天系统-16-2-0-d4",
              "tag": "消息可靠性",
              "desc": "发送端本地暂存+服务端确认ACK后删除暂存接收端消息序号seq递增断线重连后拉取缺失消息"
            },
            {
              "id": "设计一个实时聊天系统-16-2-0-d5",
              "tag": "群聊优化",
              "desc": "大群(>500人)只推在线成员离线成员上线后拉取未读消息"
            }
          ]
        },
        {
          "id": "搜索功能全栈实现-16-2-1",
          "tag": "搜索功能全栈实现",
          "desc": "从ES索引设计、分词、前端防抖、高亮、分页到缓存完整实现搜索功能",
          "details": [
            {
              "id": "搜索功能全栈实现-16-2-1-d0",
              "tag": "ES索引设计",
              "desc": "定义mapping(analyzer:ik_max_word+ik_smart)字段类型keyword/text/date/integer"
            },
            {
              "id": "搜索功能全栈实现-16-2-1-d1",
              "tag": "分词策略",
              "desc": "中文用IK Analyzer ik_max_word尽可能多匹配ik_smart减少索引体积"
            },
            {
              "id": "搜索功能全栈实现-16-2-1-d2",
              "tag": "前端交互",
              "desc": "搜索输入lodash debounce 300ms延迟发请求搜索历史localStorage存储最近10条"
            },
            {
              "id": "搜索功能全栈实现-16-2-1-d3",
              "tag": "高亮显示",
              "desc": "ES查询设置highlight字段pre_tags:<em> post_tags:</em>前端用v-html渲染"
            },
            {
              "id": "搜索功能全栈实现-16-2-1-d4",
              "tag": "分页策略",
              "desc": "ES浅分页(size+from)适合前100页深分页用search_after"
            },
            {
              "id": "搜索功能全栈实现-16-2-1-d5",
              "tag": "缓存层",
              "desc": "热门搜索词结果Redis缓存5分钟ES completion suggester实时返回前缀匹配词"
            }
          ]
        },
        {
          "id": "文件上传下载全栈方案-16-2-2",
          "tag": "文件上传下载全栈方案",
          "desc": "大文件上传容易失败如何用分片上传/断点续传/直传OSS/流式下载解决",
          "details": [
            {
              "id": "文件上传下载全栈方案-16-2-2-d0",
              "tag": "分片上传",
              "desc": "前端用File.slice(start,end)将大文件分为5MB分片每个分片独立上传失败只重试该分片"
            },
            {
              "id": "文件上传下载全栈方案-16-2-2-d1",
              "tag": "断点续传",
              "desc": "前端上传前调用接口查询已上传分片列表跳过已上传分片继续未完成部分"
            },
            {
              "id": "文件上传下载全栈方案-16-2-2-d2",
              "tag": "直传OSS",
              "desc": "前端从后端获取OSS STS临时凭证直接用SDK上传到OSS避免文件经过后端服务器"
            },
            {
              "id": "文件上传下载全栈方案-16-2-2-d3",
              "tag": "上传进度",
              "desc": "axios onUploadProgress事件获取单分片进度综合计算总体进度条"
            },
            {
              "id": "文件上传下载全栈方案-16-2-2-d4",
              "tag": "大文件下载流式响应",
              "desc": "后端用FileStream HTTP响应设Transfer-Encoding:chunked前端fetch+ReadableStream"
            },
            {
              "id": "文件上传下载全栈方案-16-2-2-d5",
              "tag": "安全性",
              "desc": "上传前校验文件类型(后缀+MIME双校验)STS凭证限制上传路径前缀和最大文件尺寸"
            }
          ]
        },
        {
          "id": "权限系统设计-16-2-3",
          "tag": "权限系统设计",
          "desc": "从RBAC模型到前端路由守卫、后端接口鉴权、数据权限完整实现权限系统",
          "details": [
            {
              "id": "权限系统设计-16-2-3-d0",
              "tag": "RBAC模型设计",
              "desc": "5张核心表user/role/permission/user_role/role_permission支持角色继承"
            },
            {
              "id": "权限系统设计-16-2-3-d1",
              "tag": "前端路由守卫",
              "desc": "router.beforeEach获取用户权限列表动态注册有权限的路由addRoute删除无权限路由"
            },
            {
              "id": "权限系统设计-16-2-3-d2",
              "tag": "后端接口鉴权",
              "desc": "每个API标注@RequirePermission中间件从Redis获取用户权限Set校验"
            },
            {
              "id": "权限系统设计-16-2-3-d3",
              "tag": "数据权限(行级)",
              "desc": "根据用户角色+部门层级构建数据过滤条件(WHERE dept_id IN可见部门)注入到Repository查询"
            },
            {
              "id": "权限系统设计-16-2-3-d4",
              "tag": "缓存优化",
              "desc": "用户登录时将角色+权限+数据范围写入Redis(user:perms:{uid})设2小时过期权限变更时主动清除缓存"
            },
            {
              "id": "权限系统设计-16-2-3-d5",
              "tag": "超级管理员处理",
              "desc": "admin角色跳过所有权限校验数据权限可见全部数据"
            }
          ]
        },
        {
          "id": "数据导出全栈方案-16-2-4",
          "tag": "数据导出全栈方案",
          "desc": "大数据量导出导致内存溢出和超时如何用异步导出+进度查询+OSS存储+下载链接解决",
          "details": [
            {
              "id": "数据导出全栈方案-16-2-4-d0",
              "tag": "异步导出架构",
              "desc": "前端点击导出→后端创建导出任务写入export_task表(status=pending)→立即返回taskId→后台Worker从MQ消费任务"
            },
            {
              "id": "数据导出全栈方案-16-2-4-d1",
              "tag": "文件生成策略",
              "desc": "后端用EPPlus/ClosedXML写入Excel流式逐行写入避免全量加载内存OOM数据分批查询(每批1万条)"
            },
            {
              "id": "数据导出全栈方案-16-2-4-d2",
              "tag": "进度查询",
              "desc": "export_task表记录progress(0-100)+status前端每2秒轮询GET /api/export/progress/{taskId}"
            },
            {
              "id": "数据导出全栈方案-16-2-4-d3",
              "tag": "OSS存储结果",
              "desc": "文件生成完毕上传到OSSexport_task表记录ossUrl+过期时间(7天后自动清理)"
            },
            {
              "id": "数据导出全栈方案-16-2-4-d4",
              "tag": "MQ任务分发",
              "desc": "导出任务投递到RabbitMQ多个Worker实例消费并行处理"
            },
            {
              "id": "数据导出全栈方案-16-2-4-d5",
              "tag": "限流防刷",
              "desc": "同一用户每天最多导出10次(Redis计数)单次导出数据量上限100万行"
            }
          ]
        },
        {
          "id": "实时数据看板-16-2-5",
          "tag": "实时数据看板",
          "desc": "WebSocket推送+前端图表+数据聚合+降级策略+权限控制",
          "details": [
            {
              "id": "实时数据看板-16-2-5-d0",
              "tag": "WS推送",
              "desc": "后端数据变更→WS广播→前端实时更新图表不需轮询"
            },
            {
              "id": "实时数据看板-16-2-5-d1",
              "tag": "数据聚合",
              "desc": "Spark/Flink预聚合分钟指标→Redis缓存→WS推送"
            },
            {
              "id": "实时数据看板-16-2-5-d2",
              "tag": "前端图表",
              "desc": "ECharts实时渲染折线/柱状/热力图+数据窗口滚动"
            },
            {
              "id": "实时数据看板-16-2-5-d3",
              "tag": "降级",
              "desc": "WS断开→自动切HTTP轮询5s间隔→恢复后切回WS"
            },
            {
              "id": "实时数据看板-16-2-5-d4",
              "tag": "权限",
              "desc": "不同角色看不同看板→路由权限+数据权限WHERE dept_id IN"
            }
          ]
        },
        {
          "id": "权限审批系统-16-2-6",
          "tag": "权限审批系统",
          "desc": "RBAC+审批流引擎+前端流程可视化+通知联动+权限与审批双重控制",
          "details": [
            {
              "id": "权限审批系统-16-2-6-d0",
              "tag": "RBAC",
              "desc": "user-role-permission三表+角色继承+数据权限行级过滤"
            },
            {
              "id": "权限审批系统-16-2-6-d1",
              "tag": "审批引擎",
              "desc": "Activiti/Camunda BPMN流程定义→任务节点→条件分支"
            },
            {
              "id": "权限审批系统-16-2-6-d2",
              "tag": "前端可视化",
              "desc": "流程图组件展示当前节点+历史轨迹Timeline"
            },
            {
              "id": "权限审批系统-16-2-6-d3",
              "tag": "审批操作",
              "desc": "同意/拒绝/转办/加签/退回→流程引擎推进下一节点"
            },
            {
              "id": "权限审批系统-16-2-6-d4",
              "tag": "通知联动",
              "desc": "审批变更→MQ→钉钉/邮件/站内信通知相关人员"
            }
          ]
        },
        {
          "id": "cms内容管理-16-2-7",
          "tag": "CMS内容管理",
          "desc": "富文本编辑+版本管理+审批流程+CDN发布+SEO优化+多语言",
          "details": [
            {
              "id": "cms内容管理-16-2-7-d0",
              "tag": "富文本",
              "desc": "TinyMCE/Quill编辑器+图片上传OSS+视频嵌入+Markdown"
            },
            {
              "id": "cms内容管理-16-2-7-d1",
              "tag": "版本管理",
              "desc": "每次保存生成版本号+diff对比+回滚到任意版本"
            },
            {
              "id": "cms内容管理-16-2-7-d2",
              "tag": "审批流程",
              "desc": "编辑提交→组长审核→主编终审→发布CDN三级审批"
            },
            {
              "id": "cms内容管理-16-2-7-d3",
              "tag": "CDN发布",
              "desc": "审批通过→静态化→OSS存储→CDN分发→URL刷新预热"
            },
            {
              "id": "cms内容管理-16-2-7-d4",
              "tag": "SEO",
              "desc": "TDK配置+sitemap自动生成+canonical+结构化数据JSON-LD"
            }
          ]
        },
        {
          "id": "在线考试系统-16-2-8",
          "tag": "在线考试系统",
          "desc": "防作弊+自动评分+实时统计+题库管理+成绩管理",
          "details": [
            {
              "id": "在线考试系统-16-2-8-d0",
              "tag": "防作弊",
              "desc": "切屏检测visibilitychange+IP限制+摄像头+复制粘贴禁止"
            },
            {
              "id": "在线考试系统-16-2-8-d1",
              "tag": "题库管理",
              "desc": "单选/多选/判断/编程题目分类难度标签知识点关联"
            },
            {
              "id": "在线考试系统-16-2-8-d2",
              "tag": "自动评分",
              "desc": "客观题即时+主观题关键词匹配+编程题在线判题OJ"
            },
            {
              "id": "在线考试系统-16-2-8-d3",
              "tag": "实时统计",
              "desc": "答题进度+平均分+通过率WebSocket推送管理员看板"
            },
            {
              "id": "在线考试系统-16-2-8-d4",
              "tag": "考试安全",
              "desc": "题目随机排序+选项随机+限时交卷+断线恢复机制"
            }
          ]
        },
        {
          "id": "物联网数据平台-16-2-9",
          "tag": "物联网数据平台",
          "desc": "MQTT接入+时序数据库+设备管理+数据管道+告警规则+可视化",
          "details": [
            {
              "id": "物联网数据平台-16-2-9-d0",
              "tag": "MQTT",
              "desc": "EMQX Broker处理百万设备连接+QoS 0/1/2消息可靠性"
            },
            {
              "id": "物联网数据平台-16-2-9-d1",
              "tag": "时序数据库",
              "desc": "InfluxDB/TDengine高性能写入百万点/秒+聚合查询"
            },
            {
              "id": "物联网数据平台-16-2-9-d2",
              "tag": "设备管理",
              "desc": "设备注册+状态监控+OTA升级+影子设备期望vs实际"
            },
            {
              "id": "物联网数据平台-16-2-9-d3",
              "tag": "数据管道",
              "desc": "MQTT→Kafka→Flink清洗转换聚合→时序DB+Redis"
            },
            {
              "id": "物联网数据平台-16-2-9-d4",
              "tag": "告警",
              "desc": "阈值告警温度>80°C+趋势告警连续上升+复合告警多条件"
            }
          ]
        },
        {
          "id": "通知系统-16-2-10",
          "tag": "通知系统",
          "desc": "多渠道(短信/邮件/钉钉/站内信)+模板管理+优先级+防骚扰+异步发送",
          "details": [
            {
              "id": "通知系统-16-2-10-d0",
              "tag": "多渠道",
              "desc": "短信(阿里云SMS)+邮件(SMTP)+钉钉(Webhook)+站内信(DB)"
            },
            {
              "id": "通知系统-16-2-10-d1",
              "tag": "模板管理",
              "desc": "模板变量{{name}}/{{date}}+多语言模板+版本管理审核"
            },
            {
              "id": "通知系统-16-2-10-d2",
              "tag": "优先级",
              "desc": "P0紧急(短信+钉钉)/P1重要(邮件+钉钉)/P2普通(站内信)"
            },
            {
              "id": "通知系统-16-2-10-d3",
              "tag": "防骚扰",
              "desc": "同类通知合并10分钟合并为1条+用户偏好免打扰时段"
            },
            {
              "id": "通知系统-16-2-10-d4",
              "tag": "异步发送",
              "desc": "通知→MQ→Consumer→调用各渠道API→记录发送结果"
            }
          ]
        },
        {
          "id": "api网关全栈-16-2-11",
          "tag": "API网关(全栈)",
          "desc": "统一入口:路由+认证+限流+熔断+日志+协议转换+灰度+前端对接",
          "details": [
            {
              "id": "api网关全栈-16-2-11-d0",
              "tag": "路由",
              "desc": "按路径前缀路由到后端服务+负载均衡Ribbon/LoadBalancer"
            },
            {
              "id": "api网关全栈-16-2-11-d1",
              "tag": "认证",
              "desc": "JWT校验+权限拦截+黑名单统一入口免各服务重复实现"
            },
            {
              "id": "api网关全栈-16-2-11-d2",
              "tag": "限流",
              "desc": "内置RateLimiter每秒N请求+Sentinel滑动窗口+熔断降级"
            },
            {
              "id": "api网关全栈-16-2-11-d3",
              "tag": "前端对接",
              "desc": "前端统一请求网关→网关转发→前端不需知道后端地址"
            },
            {
              "id": "api网关全栈-16-2-11-d4",
              "tag": "灰度",
              "desc": "按请求头/cookie/权重路由灰度版本配合Feature Flag"
            }
          ]
        },
        {
          "id": "数据同步全栈-16-2-12",
          "tag": "数据同步(全栈)",
          "desc": "Canal监听binlog+MQ分发+前端WebSocket推送+校验对账+容错",
          "details": [
            {
              "id": "数据同步全栈-16-2-12-d0",
              "tag": "Canal监听",
              "desc": "伪装MySQL slave订阅binlog解析变更事件投MQ"
            },
            {
              "id": "数据同步全栈-16-2-12-d1",
              "tag": "MQ分发",
              "desc": "按服务分topic→Consumer消费→写入目标存储保证顺序"
            },
            {
              "id": "数据同步全栈-16-2-12-d2",
              "tag": "WS推送",
              "desc": "数据变更→后端WS广播→前端实时更新UI不需轮询"
            },
            {
              "id": "数据同步全栈-16-2-12-d3",
              "tag": "校验对账",
              "desc": "定时比对源端目标端一致性行数+采样Hash差异告警"
            },
            {
              "id": "数据同步全栈-16-2-12-d4",
              "tag": "容错",
              "desc": "消费失败死信队列→人工干预→重试;Canal断连自动重连"
            }
          ]
        }
      ]
    }
  ]
};

// html-css.js — 十七、HTML与CSS 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['html-css'] = {
  "id": "html-css",
  "title": "十七、HTML与CSS",
  "tag": "HTML与CSS",
  "order": 17,
  "icon": "🎨",
  "cssIndex": 16,
  "subs": [
    {
      "id": "17-1-html5语义化与新特性-17-0",
      "title": "17.1 HTML5语义化与新特性",
      "points": [
        {
          "id": "html5语义化标签-17-0-0",
          "tag": "HTML5语义化标签",
          "desc": "语义化标签赋予内容结构含义，提升可读性与可访问性，利于SEO和机器解析",
          "details": [
            {
              "id": "html5语义化标签-17-0-0-d0",
              "tag": "header/nav/main/article/section/aside/footer替代div堆叠，明确页面区域分工",
              "desc": "语义标签让搜索引擎和屏幕阅读器理解页面结构，如nav标识导航区域、main标识主内容区，提升SEO权重和无障碍访问"
            },
            {
              "id": "html5语义化标签-17-0-0-d1",
              "tag": "语义标签对屏幕阅读器、搜索引擎爬虫",
              "desc": "语义标签对屏幕阅读器、搜索引擎爬虫提供明确导航路径"
            },
            {
              "id": "html5语义化标签-17-0-0-d2",
              "tag": "语义化不",
              "desc": "语义化不是用新标签替换所有div——仅对具有明确语义的区块使用"
            }
          ]
        },
        {
          "id": "html5新input类型与表单增强-17-0-1",
          "tag": "HTML5新input类型与表单增强",
          "desc": "新增多种input type和表单属性，减少JavaScript验证负担，提升移动端输入体验",
          "details": [
            {
              "id": "html5新input类型与表单增强-17-0-1-d0",
              "tag": "type",
              "desc": "email/url/tel/number/range/date/month/week/time/datetime-local/color/search，移动端自动弹出对应键盘"
            },
            {
              "id": "html5新input类型与表单增强-17-0-1-d1",
              "tag": "表单属性",
              "desc": "required/pattern/min/max/step/autofocus/placeholder/multiple/formnovalidate"
            },
            {
              "id": "html5新input类型与表单增强-17-0-1-d2",
              "tag": "form属性允许input位于form外部仍关联提交，fieldset+legend分组，datalist提供输入建议列表",
              "desc": "form属性值指向form的id实现跨表单关联；datalist的option列表在input下展示候选值，原生免JS即可实现自动补全"
            }
          ]
        },
        {
          "id": "多媒体标签与canvas-svg-17-0-2",
          "tag": "多媒体标签与Canvas/SVG",
          "desc": "原生多媒体与图形能力替代Flash，Canvas适合像素级绘制，SVG适合矢量图形",
          "details": [
            {
              "id": "多媒体标签与canvas-svg-17-0-2-d0",
              "tag": "audio/video标签",
              "desc": "src/controls/autoplay/loop/preload/muted属性；source多格式fallback；track字幕"
            },
            {
              "id": "多媒体标签与canvas-svg-17-0-2-d1",
              "tag": "Canvas",
              "desc": "2D上下文getContext('2d')绘制API，WebGL上下文做3D渲染；逐帧绘制、像素操作、离屏Canvas优化"
            },
            {
              "id": "多媒体标签与canvas-svg-17-0-2-d2",
              "tag": "SVG",
              "desc": "XML描述矢量图形，DOM可操作每个元素；path/rect/circle/line/text/linearGradient/filter"
            }
          ]
        },
        {
          "id": "webstorage与indexeddb-17-0-3",
          "tag": "Web Storage与IndexedDB",
          "desc": "客户端存储方案从Cookie演进到Storage和IndexedDB，容量更大、API更简洁",
          "details": [
            {
              "id": "webstorage与indexeddb-17-0-3-d0",
              "tag": "localStorage持久",
              "desc": "localStorage持久存储(约5MB)，sessionStorage会话存储(标签页关闭清除)；同源共享"
            },
            {
              "id": "webstorage与indexeddb-17-0-3-d1",
              "tag": "IndexedDB",
              "desc": "异步NoSQL数据库，支持事务、索引、游标查询；容量远超Storage(通常数百MB)"
            },
            {
              "id": "webstorage与indexeddb-17-0-3-d2",
              "tag": "Cookie仅4KB且随请求携带影响性",
              "desc": "Cookie仅4KB且随请求携带影响性能；Storage不随请求发送；IndexedDB适合大量结构化离线数据"
            }
          ]
        },
        {
          "id": "webworker与serviceworker-17-0-4",
          "tag": "Web Worker与Service Worker",
          "desc": "Worker将计算和拦截逻辑移至独立线程/生命周期，不阻塞主线程",
          "details": [
            {
              "id": "webworker与serviceworker-17-0-4-d0",
              "tag": "Web Worker",
              "desc": "Dedicated Worker(单页面)、Shared Worker(多标签共享)；postMessage/onmessage通信；不能操作DOM"
            },
            {
              "id": "webworker与serviceworker-17-0-4-d1",
              "tag": "Service Worker",
              "desc": "独立生命周期(install→activate→fetch)；拦截网络请求、管理Cache API、推送通知Push API"
            },
            {
              "id": "webworker与serviceworker-17-0-4-d2",
              "tag": "Service Worker仅HTTPS下可用；scope控制拦截范围；缓存策略：Cache First / Network First / Stale While Revalidate",
              "desc": "Cache First优先读缓存离线可用；Network First优先网络保新鲜；Stale While Revalidate先返缓存后台更新，兼顾速度与时效"
            }
          ]
        },
        {
          "id": "websocket与server-sentevents-17-0-5",
          "tag": "WebSocket与Server-Sent Events",
          "desc": "全双工与单向实时通信方案，替代HTTP轮询",
          "details": [
            {
              "id": "websocket与server-sentevents-17-0-5-d0",
              "tag": "WebSocket",
              "desc": "ws/wss协议；onopen/onmessage/onclose/onerror；send()双向通信；心跳保活；适合聊天/实时协作/游戏"
            },
            {
              "id": "websocket与server-sentevents-17-0-5-d1",
              "tag": "Server-Sent Events(SSE)",
              "desc": "EventSource(url)单向服务器推送；自带重连；适合通知/实时更新"
            },
            {
              "id": "websocket与server-sentevents-17-0-5-d2",
              "tag": "WebSocket双向",
              "desc": "WebSocket双向适合高频交互；SSE单向轻量适合通知流；HTTP长轮询是兜底方案"
            }
          ]
        }
      ]
    },
    {
      "id": "17-2-css核心-17-1",
      "title": "17.2 CSS核心",
      "points": [
        {
          "id": "盒模型content-box与border-box-17-1-0",
          "tag": "盒模型content-box与border-box",
          "desc": "CSS盒模型定义元素尺寸计算方式，border-box更符合直觉布局需求",
          "details": [
            {
              "id": "盒模型content-box与border-box-17-1-0-d0",
              "tag": "content-box(W3C标准盒)",
              "desc": "width/height仅指content区域，padding和border额外增加元素总尺寸"
            },
            {
              "id": "盒模型content-box与border-box-17-1-0-d1",
              "tag": "border-box(IE盒/替代盒)",
              "desc": "width/height包含content+padding+border；设定width即最终可见宽"
            },
            {
              "id": "盒模型content-box与border-box-17-1-0-d2",
              "tag": "全局推荐 *{box-sizing",
              "desc": "border-box} 统一切换；Tailwind/Bootstrap默认border-box"
            }
          ]
        },
        {
          "id": "选择器与优先级计算-17-1-1",
          "tag": "选择器与优先级计算",
          "desc": "CSS选择器决定规则目标，优先级(specificity)决定同源规则冲突时的胜者",
          "details": [
            {
              "id": "选择器与优先级计算-17-1-1-d0",
              "tag": "选择器分类",
              "desc": "元素(0,0,1)/类/属性/伪类(0,1,0)/ID(1,0,0)/内联style(1,0,0,0)"
            },
            {
              "id": "选择器与优先级计算-17-1-1-d1",
              "tag": "优先级4列计算(A,B,C,D)",
              "desc": "内联>ID>类>元素；同优先级后声明胜；!important覆盖一切"
            },
            {
              "id": "选择器与优先级计算-17-1-1-d2",
              "tag": "通配符*优先级(0,0,0)不累加；",
              "desc": "not()本身不计数但内部选择器计入；:where始终为0"
            }
          ]
        },
        {
          "id": "继承与层叠-17-1-2",
          "tag": "继承与层叠",
          "desc": "继承让部分属性自动传递子代，层叠规则解决多来源声明冲突",
          "details": [
            {
              "id": "继承与层叠-17-1-2-d0",
              "tag": "可继承属性",
              "desc": "font系列/color/text-align/line-height/visibility/list-style等；不可继承：盒模型/定位/display/background/border"
            },
            {
              "id": "继承与层叠-17-1-2-d1",
              "tag": "inherit关键字强制继承父值；initial重置为CSS规范初始值；unset",
              "desc": "可继承时inherit否则initial"
            },
            {
              "id": "继承与层叠-17-1-2-d2",
              "tag": "层叠顺序",
              "desc": "@layer低优先级→用户代理→用户→作者→作者important→用户important→用户代理important"
            }
          ]
        },
        {
          "id": "bfc触发条件与作用-17-1-3",
          "tag": "BFC触发条件与作用",
          "desc": "块级格式化上下文(BFC)是独立布局区域，内部浮动不影响外部，外部也不影响内部",
          "details": [
            {
              "id": "bfc触发条件与作用-17-1-3-d0",
              "tag": "触发条件",
              "desc": "overflow:hidden/auto/scroll(非visible)；display:flex/grid/inline-block/table-cell/flow-root；position:absolute/fixed"
            },
            {
              "id": "bfc触发条件与作用-17-1-3-d1",
              "tag": "作用1",
              "desc": "阻止外边距折叠——相邻BFC间margin不合并"
            },
            {
              "id": "bfc触发条件与作用-17-1-3-d2",
              "tag": "作用2",
              "desc": "包含浮动——BFC会计算浮动子元素高度，解决父元素高度塌陷"
            },
            {
              "id": "bfc触发条件与作用-17-1-3-d3",
              "tag": "display",
              "desc": "flow-root是专为创建BFC设计的显式触发值，无副作用"
            }
          ]
        },
        {
          "id": "层叠上下文与z-index-17-1-4",
          "tag": "层叠上下文与z-index",
          "desc": "层叠上下文决定元素在Z轴上的渲染顺序，z-index仅在定位元素或flex/grid子项中生效",
          "details": [
            {
              "id": "层叠上下文与z-index-17-1-4-d0",
              "tag": "创建层叠上下文",
              "desc": "position+z-index非auto；flex/grid子项+z-index非auto；opacity<1；transform/filter/perspective非none"
            },
            {
              "id": "层叠上下文与z-index-17-1-4-d1",
              "tag": "层叠顺序(低→高)",
              "desc": "背景边框→负z-index→block盒→float盒→inline盒→z-index:0/auto→正z-index"
            },
            {
              "id": "层叠上下文与z-index-17-1-4-d2",
              "tag": "常见陷阱",
              "desc": "父元素创建层叠上下文后子元素z-index再高也无法穿透父层级"
            }
          ]
        }
      ]
    },
    {
      "id": "17-3-css布局体系-17-2",
      "title": "17.3 CSS布局体系",
      "points": [
        {
          "id": "flexbox弹性布局-17-2-0",
          "tag": "Flexbox弹性布局",
          "desc": "一维布局模型，主轴方向排列子项，通过flex-grow/shrink/basis分配空间与对齐",
          "details": [
            {
              "id": "flexbox弹性布局-17-2-0-d0",
              "tag": "容器属性",
              "desc": "display:flex；flex-direction:row/column；flex-wrap:nowrap/wrap"
            },
            {
              "id": "flexbox弹性布局-17-2-0-d1",
              "tag": "容器对齐",
              "desc": "justify-content(主轴:start/end/center/space-between/space-around/space-evenly)；align-items(交叉轴)"
            },
            {
              "id": "flexbox弹性布局-17-2-0-d2",
              "tag": "子项属性",
              "desc": "order排序；flex-grow放大比例(默认0)；flex-shrink缩小比例(默认1)；flex-basis初始尺寸(默认auto)；flex:1=1 1 0%"
            },
            {
              "id": "flexbox弹性布局-17-2-0-d3",
              "tag": "gap属性设置子项间距(替代margin)；flex-shrink: 0禁止缩小常用于固定宽度项",
              "desc": "gap统一控制行与列间距无需逐项设margin；flex-shrink:0使固定宽度元素(如图标栏)不因容器不足被压缩变形"
            }
          ]
        },
        {
          "id": "grid网格布局-17-2-1",
          "tag": "Grid网格布局",
          "desc": "二维布局模型，行列交叉形成网格区域，适合复杂页面整体布局",
          "details": [
            {
              "id": "grid网格布局-17-2-1-d0",
              "tag": "容器属性",
              "desc": "display:grid；grid-template-columns/rows定义轨道(fr/px/auto/minmax())"
            },
            {
              "id": "grid网格布局-17-2-1-d1",
              "tag": "间隙与对齐",
              "desc": "gap/row-gap/column-gap；justify-items/align-items对齐单元格内项"
            },
            {
              "id": "grid网格布局-17-2-1-d2",
              "tag": "子项属性：grid-column/row",
              "desc": "start end(线号或span N)；grid-area:名称或四值简写"
            },
            {
              "id": "grid网格布局-17-2-1-d3",
              "tag": "响应式",
              "desc": "repeat(auto-fill/auto-fit, minmax(200px,1fr))自动填充列；auto-fit折叠空轨道"
            }
          ]
        },
        {
          "id": "float浮动与清除方案-17-2-2",
          "tag": "Float浮动与清除方案",
          "desc": "Float最初用于图文环绕，需清除浮动防止父塌陷",
          "details": [
            {
              "id": "float浮动与清除方案-17-2-2-d0",
              "tag": "float",
              "desc": "left/right/none；浮动元素脱离正常流但仍影响行框文本排列(环绕效果)"
            },
            {
              "id": "float浮动与清除方案-17-2-2-d1",
              "tag": "父元素高度塌陷",
              "desc": "浮动子元素不参与父高度计算（父元素高度塌陷的详细说明：Float浮动与清除方案中关于父元素高度塌陷的内容）"
            },
            {
              "id": "float浮动与清除方案-17-2-2-d2",
              "tag": "清除方案",
              "desc": "父元素触发BFC——overflow:hidden/display:flow-root；伪元素clearfix::after{content:'';display:block;clear:both}"
            },
            {
              "id": "float浮动与清除方案-17-2-2-d3",
              "tag": "浮动布局已被Flex/Grid替代，现代仅用于图文环绕场景",
              "desc": "Float本为图文混排设计，布局用途需BFC清除浮动防塌陷；Flex/Grid原生支持对齐与响应式，是现代布局首选方案"
            }
          ]
        },
        {
          "id": "position定位体系-17-2-3",
          "tag": "Position定位体系",
          "desc": "position决定元素定位参考框和脱离正常流的程度",
          "details": [
            {
              "id": "position定位体系-17-2-3-d0",
              "tag": "static(默认)",
              "desc": "正常流定位，top/right/bottom/left/z-index无效"
            },
            {
              "id": "position定位体系-17-2-3-d1",
              "tag": "relative",
              "desc": "正常流中占位+偏移(相对自身原位置)；常为absolute子项创建包含块"
            },
            {
              "id": "position定位体系-17-2-3-d2",
              "tag": "absolute",
              "desc": "脱离正常流不占位；相对最近的positioned祖先(非static)padding box定位"
            },
            {
              "id": "position定位体系-17-2-3-d3",
              "tag": "fixed",
              "desc": "脱离正常流；相对viewport定位；transform/filter祖先会改变包含块"
            },
            {
              "id": "position定位体系-17-2-3-d4",
              "tag": "sticky",
              "desc": "正常流定位+滚动阈值后固定；须在可滚动祖先内工作"
            }
          ]
        },
        {
          "id": "css居中方案大全-17-2-4",
          "tag": "CSS居中方案大全",
          "desc": "居中是高频布局需求，不同场景选择不同方案",
          "details": [
            {
              "id": "css居中方案大全-17-2-4-d0",
              "tag": "水平居中",
              "desc": "inline用text-align:center；block定宽用margin:0 auto；flex用justify-content:center"
            },
            {
              "id": "css居中方案大全-17-2-4-d1",
              "tag": "垂直居中",
              "desc": "单行inline用line-height=height；flex用align-items:center；absolute+top:50%+translateY(-50%)"
            },
            {
              "id": "css居中方案大全-17-2-4-d2",
              "tag": "水平垂直居中",
              "desc": "flex(justify-content:center+align-items:center)最简；grid(place-items:center)最简"
            },
            {
              "id": "css居中方案大全-17-2-4-d3",
              "tag": "absolute+top",
              "desc": "50%+left:50%+translate(-50%,-50%)不定宽高通用方案"
            }
          ]
        }
      ]
    },
    {
      "id": "17-4-css进阶-17-3",
      "title": "17.4 CSS进阶",
      "points": [
        {
          "id": "响应式设计媒体查询与容器查询-17-3-0",
          "tag": "响应式设计：媒体查询与容器查询",
          "desc": "响应式适配不同视口/容器尺寸，媒体查询基于视口，容器查询基于父容器",
          "details": [
            {
              "id": "响应式设计媒体查询与容器查询-17-3-0-d0",
              "tag": "媒体查询",
              "desc": "@media(min-width:768px){...}；断点常见320/480/768/1024/1440px"
            },
            {
              "id": "响应式设计媒体查询与容器查询-17-3-0-d1",
              "tag": "移动优先",
              "desc": "从小断点开始编写基础样式，@media(min-width)逐步增强"
            },
            {
              "id": "响应式设计媒体查询与容器查询-17-3-0-d2",
              "tag": "容器查询(@container)",
              "desc": "需先声明容器container-type:inline-size；@container(min-width:400px)基于父容器宽度触发"
            },
            {
              "id": "响应式设计媒体查询与容器查询-17-3-0-d3",
              "tag": "媒体查询关注视口(页面级响应式)；容器查询关注父容器(组件级响应式)",
              "desc": "@media按视口宽断点适配整体布局；@container按父元素尺寸适配组件，实现组件独立响应式，适配复用场景更精确"
            }
          ]
        },
        {
          "id": "css变量var与自定义属性-17-3-1",
          "tag": "CSS变量var()与自定义属性",
          "desc": "自定义属性(--*)在运行时计算，实现动态主题、减少重复、JavaScript可读写",
          "details": [
            {
              "id": "css变量var与自定义属性-17-3-1-d0",
              "tag": "声明",
              "desc": "--main-color:#3498db; 读取：color:var(--main-color)；var()第二参数为fallback"
            },
            {
              "id": "css变量var与自定义属性-17-3-1-d1",
              "tag": "作用域",
              "desc": ":root声明全局变量；局部变量在元素及其子代生效"
            },
            {
              "id": "css变量var与自定义属性-17-3-1-d2",
              "tag": "JavaScript交互",
              "desc": "element.style.setProperty('--color','blue')；getComputedStyle读取计算值"
            },
            {
              "id": "css变量var与自定义属性-17-3-1-d3",
              "tag": "动态主题",
              "desc": ":root切换变量值即可全局变色"
            }
          ]
        },
        {
          "id": "css动画transition-keyframes-animation-17-3-2",
          "tag": "CSS动画：transition/keyframes/animation",
          "desc": "三种动画机制覆盖不同复杂度",
          "details": [
            {
              "id": "css动画transition-keyframes-animation-17-3-2-d0",
              "tag": "transition",
              "desc": "transition-property/duration/timing-function/delay；触发靠状态变化(hover/focus)"
            },
            {
              "id": "css动画transition-keyframes-animation-17-3-2-d1",
              "tag": "transition局限",
              "desc": "仅定义始末两帧；需明确触发条件；不能循环"
            },
            {
              "id": "css动画transition-keyframes-animation-17-3-2-d2",
              "tag": "@keyframes",
              "desc": "@keyframes name{0%{...}50%{...}100%{...}}多帧定义"
            },
            {
              "id": "css动画transition-keyframes-animation-17-3-2-d3",
              "tag": "animation",
              "desc": "animation-name/duration/timing-function/delay/iteration-count/direction/fill-mode/play-state"
            },
            {
              "id": "css动画transition-keyframes-animation-17-3-2-d4",
              "tag": "animation-fill-mode",
              "desc": "forwards保留结束帧状态"
            }
          ]
        },
        {
          "id": "css预处理器与postcss-17-3-3",
          "tag": "CSS预处理器与PostCSS",
          "desc": "预处理器扩展CSS编程能力(变量/嵌套/混入/函数)，PostCSS用插件管道转换CSS",
          "details": [
            {
              "id": "css预处理器与postcss-17-3-3-d0",
              "tag": "Sass",
              "desc": "$变量/@mixin定义@include调用/@extend继承；SCSS(.scss)是CSS兼容语法"
            },
            {
              "id": "css预处理器与postcss-17-3-3-d1",
              "tag": "Less",
              "desc": "@变量/.mixin定义调用；嵌套&引用；运算符直接计算"
            },
            {
              "id": "css预处理器与postcss-17-3-3-d2",
              "tag": "PostCSS",
              "desc": "autoprefixer自动添加浏览器前缀；cssnano压缩；postcss-preset-env使用未来CSS特性"
            },
            {
              "id": "css预处理器与postcss-17-3-3-d3",
              "tag": "预",
              "desc": "预处理器编译时生成静态CSS；PostCSS可做预处理也可做后处理"
            }
          ]
        },
        {
          "id": "bem命名规范cssmodules与tailwind-17-3-4",
          "tag": "BEM命名规范、CSS Modules与Tailwind",
          "desc": "三种CSS组织方法论：BEM语义命名、Modules局部作用域、Tailwind原子化类名",
          "details": [
            {
              "id": "bem命名规范cssmodules与tailwind-17-3-4-d0",
              "tag": "BEM",
              "desc": "Block__Element--Modifier；.card__title--large；避免嵌套选择器；单一类名原则"
            },
            {
              "id": "bem命名规范cssmodules与tailwind-17-3-4-d1",
              "tag": "CSS Modules",
              "desc": "构建工具自动生成局部类名；:global(.className)声明全局"
            },
            {
              "id": "bem命名规范cssmodules与tailwind-17-3-4-d2",
              "tag": "Tailwind CSS",
              "desc": "原子化utility类(w-4/p-2/text-sm/flex/rounded)；配置自定义主题；@apply提取组件类"
            },
            {
              "id": "bem命名规范cssmodules与tailwind-17-3-4-d3",
              "tag": "BEM",
              "desc": "BEM适合大型团队语义清晰；CSS Modules适合组件化零冲突；Tailwind适合快速开发"
            }
          ]
        }
      ]
    },
    {
      "id": "17-5-htmlcss性能与工程-17-4",
      "title": "17.5 HTML/CSS性能与工程",
      "points": [
        {
          "id": "css加载与渲染阻塞-17-4-0",
          "tag": "CSS加载与渲染阻塞",
          "desc": "CSS是渲染阻塞资源——浏览器必须构建CSSOM才能渲染",
          "details": [
            {
              "id": "css加载与渲染阻塞-17-4-0-d0",
              "tag": "CSS阻塞渲染",
              "desc": "HTML→DOM+CSS→CSSOM→Render Tree→Layout→Paint；CSS未下载完成前页面空白"
            },
            {
              "id": "css加载与渲染阻塞-17-4-0-d1",
              "tag": "CSS不阻塞DOM解析但阻塞后续JS",
              "desc": "CSS不阻塞DOM解析但阻塞后续JS执行(因JS可能读样式属性)"
            },
            {
              "id": "css加载与渲染阻塞-17-4-0-d2",
              "tag": "优化",
              "desc": "关键CSS(Critical CSS)内联在<head>中首屏立即渲染；非关键CSS异步加载"
            },
            {
              "id": "css加载与渲染阻塞-17-4-0-d3",
              "tag": "link rel",
              "desc": "preload提前下载不阻塞渲染；避免@import嵌套串行下载"
            }
          ]
        },
        {
          "id": "will-change与gpu合成层-17-4-1",
          "tag": "will-change与GPU合成层",
          "desc": "will-change提示浏览器预分配GPU资源，合成层提升动画性能但需谨慎使用",
          "details": [
            {
              "id": "will-change与gpu合成层-17-4-1-d0",
              "tag": "will-change",
              "desc": "transform/opacity；浏览器为该元素创建独立合成层(GPU加速)"
            },
            {
              "id": "will-change与gpu合成层-17-4-1-d1",
              "tag": "transform/opacity动画默认触发合成层——这两属性变更不触发重排重绘仅合成层重绘",
              "desc": "合成层由GPU单独处理，transform和opacity变更跳过布局与绘制阶段，仅合成层重绘，动画帧率稳定60fps无卡顿"
            },
            {
              "id": "will-change与gpu合成层-17-4-1-d2",
              "tag": "will-change风险",
              "desc": "每层消耗额外内存(移动端敏感)；过多合成层导致层爆炸"
            },
            {
              "id": "will-change与gpu合成层-17-4-1-d3",
              "tag": "正确用法",
              "desc": "即将动画前设置will-change；动画结束后移除"
            }
          ]
        },
        {
          "id": "图片优化与字体加载-17-4-2",
          "tag": "图片优化与字体加载",
          "desc": "图片占页面体积最大，字体加载影响文字渲染时机",
          "details": [
            {
              "id": "图片优化与字体加载-17-4-2-d0",
              "tag": "图片格式选型",
              "desc": "JPEG照片/WebP(体积减25-35%)/AVIF(再减20%)/PNG透明/SVG矢量"
            },
            {
              "id": "图片优化与字体加载-17-4-2-d1",
              "tag": "响应式图片",
              "desc": "<img srcset> + <picture>多格式多分辨率fallback"
            },
            {
              "id": "图片优化与字体加载-17-4-2-d2",
              "tag": "懒加载",
              "desc": "loading=lazy属性原生懒加载；font-display:swap先用系统字体保证内容立即可读"
            },
            {
              "id": "图片优化与字体加载-17-4-2-d3",
              "tag": "预加载关键字体",
              "desc": "<link rel=preload as=font crossorigin>"
            }
          ]
        },
        {
          "id": "重排重绘最小化-17-4-3",
          "tag": "重排重绘最小化",
          "desc": "重排代价远高于重绘，批量读写分离是性能核心",
          "details": [
            {
              "id": "重排重绘最小化-17-4-3-d0",
              "tag": "重排触发",
              "desc": "几何属性变更(width/height/padding/margin/left/top/display)；重排连锁影响所有祖先和子元素"
            },
            {
              "id": "重排重绘最小化-17-4-3-d1",
              "tag": "重绘触发",
              "desc": "视觉属性变更(color/background/visibility/shadow)；不影响几何但需重新绘制像素；重排必定触发重绘"
            },
            {
              "id": "重排重绘最小化-17-4-3-d2",
              "tag": "批量读写分离",
              "desc": "先集中读取属性再集中修改样式——避免读写交替迫使逐帧同步布局"
            },
            {
              "id": "重排重绘最小化-17-4-3-d3",
              "tag": "class批量替换优于逐条",
              "desc": "class批量替换优于逐条修改style；requestAnimationFrame在帧首修改样式"
            }
          ]
        },
        {
          "id": "csscontainment与layer-17-4-4",
          "tag": "CSS containment与@layer",
          "desc": "containment限制元素对页面布局计算的影响范围，@layer显式控制样式优先级层级",
          "details": [
            {
              "id": "csscontainment与layer-17-4-4-d0",
              "tag": "contain",
              "desc": "layout/style/paint/size/strict/content——独立包含块/独立层叠上下文/独立绘制区域"
            },
            {
              "id": "csscontainment与layer-17-4-4-d1",
              "tag": "content-visibility",
              "desc": "auto——浏览器可跳过屏幕外元素的布局渲染(类似懒渲染)"
            },
            {
              "id": "csscontainment与layer-17-4-4-d2",
              "tag": "@layer声明层叠层优先级",
              "desc": "@layer base{...} @layer components{...}；未分层规则始终最高优先级"
            },
            {
              "id": "csscontainment与layer-17-4-4-d3",
              "tag": "@layer用途",
              "desc": "第三方CSS放入低层防止覆盖自定义样式；组件样式中层；覆盖样式高层"
            }
          ]
        }
      ]
    }
  ]
};

// webpack.js — 十八、Webpack与前端工程化 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['webpack'] = {
  "id": "webpack",
  "title": "十八、Webpack与前端工程化",
  "tag": "Webpack",
  "order": 18,
  "icon": "📦",
  "cssIndex": 17,
  "subs": [
    {
      "id": "18-1-webpack核心概念-18-0",
      "title": "18.1 Webpack核心概念",
      "points": [
        {
          "id": "entry入口与output输出-18-0-0",
          "tag": "Entry入口与Output输出",
          "desc": "Entry定义打包起点，Output指定产物路径和命名规则",
          "details": [
            {
              "id": "entry入口与output输出-18-0-0-d0",
              "tag": "single模式",
              "desc": "entry为字符串路径生成一个chunk，适用于SPA应用"
            },
            {
              "id": "entry入口与output输出-18-0-0-d1",
              "tag": "object模式",
              "desc": "entry为键值对对象每个键生成独立chunk，适用于MPA多页应用"
            },
            {
              "id": "entry入口与output输出-18-0-0-d2",
              "tag": "output.filename",
              "desc": "多入口用[name].[contenthash].js占位符"
            },
            {
              "id": "entry入口与output输出-18-0-0-d3",
              "tag": "output.publicPath",
              "desc": "资源引用的公共路径前缀，CDN部署时设置为CDN域名"
            }
          ]
        },
        {
          "id": "loader转换规则-18-0-1",
          "tag": "Loader转换规则",
          "desc": "Loader让Webpack能处理非JS文件，链式调用从右到左执行",
          "details": [
            {
              "id": "loader转换规则-18-0-1-d0",
              "tag": "loader本质是函数",
              "desc": "接收源文件内容返回转换后内容，链式调用从右到左执行"
            },
            {
              "id": "loader转换规则-18-0-1-d1",
              "tag": "配置方式",
              "desc": "module.rules数组，test匹配条件+use指定loader链"
            },
            {
              "id": "loader转换规则-18-0-1-d2",
              "tag": "loader执行顺序",
              "desc": "从数组最右向最左依次执行，pitch阶段从左向右可跳过后续loader"
            },
            {
              "id": "loader转换规则-18-0-1-d3",
              "tag": "常用loader链",
              "desc": "[style-loader,css-loader,postcss-loader]从右向左处理CSS文件"
            }
          ]
        },
        {
          "id": "plugin插件扩展-18-0-2",
          "tag": "Plugin插件扩展",
          "desc": "Plugin通过钩子机制介入Webpack构建流程各阶段",
          "details": [
            {
              "id": "plugin插件扩展-18-0-2-d0",
              "tag": "plugin本质",
              "desc": "plugin本质是带有apply方法的类，apply接收compiler对象注册tapable钩子回调"
            },
            {
              "id": "plugin插件扩展-18-0-2-d1",
              "tag": "compiler对象",
              "desc": "Webpack全生命周期代表，启动时创建贯穿整个构建过程"
            },
            {
              "id": "plugin插件扩展-18-0-2-d2",
              "tag": "compilation对象",
              "desc": "每次编译创建，包含模块/chunk/依赖等信息"
            },
            {
              "id": "plugin插件扩展-18-0-2-d3",
              "tag": "常用plugin",
              "desc": "HtmlWebpackPlugin/CleanWebpackPlugin/DefinePlugin/CopyWebpackPlugin"
            }
          ]
        },
        {
          "id": "mode模式与resolve解析-18-0-3",
          "tag": "Mode模式与Resolve解析",
          "desc": "Mode指定构建模式优化策略，Resolve配置模块解析规则",
          "details": [
            {
              "id": "mode模式与resolve解析-18-0-3-d0",
              "tag": "development模式",
              "desc": "保留调试信息不压缩；production模式：启用压缩/TreeShaking等默认优化"
            },
            {
              "id": "mode模式与resolve解析-18-0-3-d1",
              "tag": "resolve.alias",
              "desc": "路径别名映射如@映射src目录"
            },
            {
              "id": "mode模式与resolve解析-18-0-3-d2",
              "tag": "resolve.extensions",
              "desc": "文件扩展名自动解析顺序['.js','.jsx','.ts']"
            }
          ]
        },
        {
          "id": "chunk与bundle与module-18-0-4",
          "tag": "Chunk与Bundle与Module",
          "desc": "理解Webpack中模块/代码块/产物的层次关系",
          "details": [
            {
              "id": "chunk与bundle与module-18-0-4-d0",
              "tag": "module",
              "desc": "Webpack中一切皆模块，JS/CSS/图片等通过loader转换为模块依赖"
            },
            {
              "id": "chunk与bundle与module-18-0-4-d1",
              "tag": "chunk",
              "desc": "模块根据依赖关系和分割策略组装成代码块(entry/async/common)"
            },
            {
              "id": "chunk与bundle与module-18-0-4-d2",
              "tag": "bundle",
              "desc": "chunk经过输出配置最终写入磁盘的产物文件"
            },
            {
              "id": "chunk与bundle与module-18-0-4-d3",
              "tag": "dependency graph",
              "desc": "Webpack从entry出发递归解析依赖关系构建完整的模块依赖图"
            }
          ]
        }
      ]
    },
    {
      "id": "18-2-loader与plugin详解-18-1",
      "title": "18.2 Loader与Plugin详解",
      "points": [
        {
          "id": "babel-loader与css处理链-18-1-0",
          "tag": "babel-loader与CSS处理链",
          "desc": "babel-loader负责ES6+语法转换，CSS处理链实现样式加载和提取",
          "details": [
            {
              "id": "babel-loader与css处理链-18-1-0-d0",
              "tag": "babel-loader",
              "desc": "搭配@babel/preset-env处理语法转换，options.cacheDirectory开启磁盘缓存二次构建快"
            },
            {
              "id": "babel-loader与css处理链-18-1-0-d1",
              "tag": "css-loader",
              "desc": "解析CSS中的@import和url()引用，将CSS转换为JS模块导出"
            },
            {
              "id": "babel-loader与css处理链-18-1-0-d2",
              "tag": "style-loader",
              "desc": "将CSS以style标签注入DOM头部，开发环境适用"
            },
            {
              "id": "babel-loader与css处理链-18-1-0-d3",
              "tag": "MiniCssExtractPlugin.loader",
              "desc": "生产环境替代style-loader提取CSS为独立文件"
            },
            {
              "id": "babel-loader与css处理链-18-1-0-d4",
              "tag": "postcss-loader+Autoprefixer",
              "desc": "根据browserslist自动添加CSS厂商前缀"
            }
          ]
        },
        {
          "id": "资源处理与assetmodules-18-1-1",
          "tag": "资源处理与Asset Modules",
          "desc": "处理图片/字体/SVG等静态资源，Webpack5原生Asset Modules替代传统loader",
          "details": [
            {
              "id": "资源处理与assetmodules-18-1-1-d0",
              "tag": "url-loader",
              "desc": "小文件可配置limit阈值转为base64内联DataURL减少HTTP请求"
            },
            {
              "id": "资源处理与assetmodules-18-1-1-d1",
              "tag": "Webpack5 asset modules",
              "desc": "type配置asset/asset-inline/asset/resource自动处理替代file/url-loader"
            },
            {
              "id": "资源处理与assetmodules-18-1-1-d2",
              "tag": "asset自动模式",
              "desc": "根据文件大小自动选择inline或resource，默认8KB以下inline超过resource"
            }
          ]
        },
        {
          "id": "常用plugin详解-18-1-2",
          "tag": "常用Plugin详解",
          "desc": "辅助构建流程的常用Plugin实现自动化和配置管理",
          "details": [
            {
              "id": "常用plugin详解-18-1-2-d0",
              "tag": "HtmlWebpackPlugin",
              "desc": "自动生成HTML文件并注入script/link标签，支持template和多入口"
            },
            {
              "id": "常用plugin详解-18-1-2-d1",
              "tag": "CleanWebpackPlugin",
              "desc": "每次构建前清理输出目录避免旧文件残留"
            },
            {
              "id": "常用plugin详解-18-1-2-d2",
              "tag": "DefinePlugin",
              "desc": "定义全局常量替换编译时变量如process.env.NODE_ENV"
            },
            {
              "id": "常用plugin详解-18-1-2-d3",
              "tag": "CopyWebpackPlugin",
              "desc": "拷贝静态资源到输出目录（CopyWebpackPlugin的详细说明：常用Plugin详解中关于CopyWebpackPlugin的内容）"
            },
            {
              "id": "常用plugin详解-18-1-2-d4",
              "tag": "webpack-merge",
              "desc": "合并多环境Webpack配置（webpack-merge的详细说明：常用Plugin详解中关于webpack-merge的内容）"
            }
          ]
        },
        {
          "id": "自定义loader与plugin编写-18-1-3",
          "tag": "自定义Loader与Plugin编写",
          "desc": "理解编写原理实现定制化开发",
          "details": [
            {
              "id": "自定义loader与plugin编写-18-1-3-d0",
              "tag": "loader导出函数",
              "desc": "module.exports=function(source){return transformedSource}"
            },
            {
              "id": "自定义loader与plugin编写-18-1-3-d1",
              "tag": "plugin编写",
              "desc": "class MyPlugin{apply(compiler){compiler.hooks.emit.tapAsync('MyPlugin',callback)}}"
            },
            {
              "id": "自定义loader与plugin编写-18-1-3-d2",
              "tag": "tapable核心库",
              "desc": "提供SyncHook/SyncBailHook/AsyncSeriesHook等多种钩子类型"
            }
          ]
        }
      ]
    },
    {
      "id": "18-3-webpack优化策略-18-2",
      "title": "18.3 Webpack优化策略",
      "points": [
        {
          "id": "codesplitting代码分割-18-2-0",
          "tag": "Code Splitting代码分割",
          "desc": "将打包产物拆分为多个小块实现按需加载和缓存优化",
          "details": [
            {
              "id": "codesplitting代码分割-18-2-0-d0",
              "tag": "entry分割",
              "desc": "多入口配置自动生成多个entry chunk，适用于MPA应用"
            },
            {
              "id": "codesplitting代码分割-18-2-0-d1",
              "tag": "动态import分割",
              "desc": "import()语法Webpack自动生成async chunk"
            },
            {
              "id": "codesplitting代码分割-18-2-0-d2",
              "tag": "SplitChunksPlugin配置",
              "desc": "chunks参数all/async/initial控制分割范围，all最全面"
            },
            {
              "id": "codesplitting代码分割-18-2-0-d3",
              "tag": "cacheGroups",
              "desc": "定义自定义分组规则如vendors提取第三方库"
            },
            {
              "id": "codesplitting代码分割-18-2-0-d4",
              "tag": "runtime chunk",
              "desc": "提取Webpack运行时代码为独立chunk避免业务代码变更影响框架缓存"
            }
          ]
        },
        {
          "id": "treeshaking摇树优化-18-2-1",
          "tag": "Tree Shaking摇树优化",
          "desc": "利用ESM静态分析特性移除未使用代码减小产物体积",
          "details": [
            {
              "id": "treeshaking摇树优化-18-2-1-d0",
              "tag": "Tree Shaking前提",
              "desc": "使用ESM静态导入，CommonJS动态require无法静态分析"
            },
            {
              "id": "treeshaking摇树优化-18-2-1-d1",
              "tag": "Webpack标记未使用导出为unused，Terser读取标记删除unused代码",
              "desc": "Webpack依赖ESM静态import分析标记死代码；Terser在minify阶段读取harmony标记删除未引用函数，最终产物不含无用导出"
            },
            {
              "id": "treeshaking摇树优化-18-2-1-d2",
              "tag": "sideEffects",
              "desc": "false告知Webpack该包无副作用可安全摇树"
            },
            {
              "id": "treeshaking摇树优化-18-2-1-d3",
              "tag": "摇树失效原因",
              "desc": "CommonJS模块/有副作用的代码/动态属性访问/IIFE"
            }
          ]
        },
        {
          "id": "懒加载与预加载-18-2-2",
          "tag": "懒加载与预加载",
          "desc": "通过动态加载策略优化首屏性能",
          "details": [
            {
              "id": "懒加载与预加载-18-2-2-d0",
              "tag": "动态import懒加载",
              "desc": "import('./module')Webpack自动生成async chunk"
            },
            {
              "id": "懒加载与预加载-18-2-2-d1",
              "tag": "Webpack Magic Comment",
              "desc": "import(/* webpackChunkName:'login' */'./login')指定chunk名称"
            },
            {
              "id": "懒加载与预加载-18-2-2-d2",
              "tag": "prefetch预加载",
              "desc": "import(/* webpackPrefetch:true */'./module')空闲时提前下载"
            },
            {
              "id": "懒加载与预加载-18-2-2-d3",
              "tag": "preload预加载",
              "desc": "import(/* webpackPreload:true */'./module')与父chunk并行下载"
            }
          ]
        },
        {
          "id": "持久化缓存与压缩-18-2-3",
          "tag": "持久化缓存与压缩",
          "desc": "利用缓存策略减少重复下载，压缩策略减小产物体积",
          "details": [
            {
              "id": "持久化缓存与压缩-18-2-3-d0",
              "tag": "contenthash文件命名",
              "desc": "[contenthash:8]根据文件内容生成哈希实现长期缓存"
            },
            {
              "id": "持久化缓存与压缩-18-2-3-d1",
              "tag": "vendor chunk策略",
              "desc": "将第三方库单独打包利用变更频率低的特点实现长期缓存"
            },
            {
              "id": "持久化缓存与压缩-18-2-3-d2",
              "tag": "TerserPlugin压缩JS",
              "desc": "支持多线程parallel和缓存cache"
            },
            {
              "id": "持久化缓存与压缩-18-2-3-d3",
              "tag": "CssMinimizerPlugin",
              "desc": "生产环境压缩CSS去除冗余规则"
            }
          ]
        },
        {
          "id": "构建分析与跳过解析-18-2-4",
          "tag": "构建分析与跳过解析",
          "desc": "通过分析工具定位瓶颈，跳过不必要的解析提升构建速度",
          "details": [
            {
              "id": "构建分析与跳过解析-18-2-4-d0",
              "tag": "webpack-bundle-analyzer",
              "desc": "可视化展示产物体积分布（webpack-bundle-analyzer的详细说明：构建分析与跳过解析中关于webpack-bundle-analyzer的内容）"
            },
            {
              "id": "构建分析与跳过解析-18-2-4-d1",
              "tag": "Speed Measure Plugin",
              "desc": "测量每个Plugin和Loader的耗时定位性能瓶颈"
            },
            {
              "id": "构建分析与跳过解析-18-2-4-d2",
              "tag": "noParse",
              "desc": "指定不需要解析依赖的模块如jQuery/lodash跳过AST构建提速"
            },
            {
              "id": "构建分析与跳过解析-18-2-4-d3",
              "tag": "externals",
              "desc": "将React/Vue等大型库排除出打包通过CDN引入"
            }
          ]
        }
      ]
    },
    {
      "id": "18-4-webpack构建原理-18-3",
      "title": "18.4 Webpack构建原理",
      "points": [
        {
          "id": "构建流程全生命周期-18-3-0",
          "tag": "构建流程全生命周期",
          "desc": "Webpack从启动到输出的完整构建流程",
          "details": [
            {
              "id": "构建流程全生命周期-18-3-0-d0",
              "tag": "初始化",
              "desc": "读取webpack.config.js合并CLI参数创建Compiler对象注册所有Plugin"
            },
            {
              "id": "构建流程全生命周期-18-3-0-d1",
              "tag": "编译",
              "desc": "调用compiler.run启动构建创建Compilation对象"
            },
            {
              "id": "构建流程全生命周期-18-3-0-d2",
              "tag": "构建模块",
              "desc": "从entry出发调用module.build创建Module对象loader链式处理源文件"
            },
            {
              "id": "构建流程全生命周期-18-3-0-d3",
              "tag": "依赖分析",
              "desc": "使用acorn将代码解析为AST遍历AST收集import/require依赖"
            },
            {
              "id": "构建流程全生命周期-18-3-0-d4",
              "tag": "递归构建",
              "desc": "根据依赖图递归处理每个依赖模块直到所有依赖处理完毕"
            },
            {
              "id": "构建流程全生命周期-18-3-0-d5",
              "tag": "输出",
              "desc": "根据output配置将chunk转化为bundle文件写入磁盘"
            }
          ]
        },
        {
          "id": "loader与plugin执行机制-18-3-1",
          "tag": "Loader与Plugin执行机制",
          "desc": "Loader链式调用和Plugin钩子机制保证构建流程正确转换和扩展",
          "details": [
            {
              "id": "loader与plugin执行机制-18-3-1-d0",
              "tag": "Loader链式执行",
              "desc": "从右向左依次执行如[style,css,postcss]先postcss再css最后style"
            },
            {
              "id": "loader与plugin执行机制-18-3-1-d1",
              "tag": "pitch阶段",
              "desc": "从左向右执行每个loader的pitch方法，pitch返回值可跳过后续loader"
            },
            {
              "id": "loader与plugin执行机制-18-3-1-d2",
              "tag": "Compiler钩子",
              "desc": "beforeRun/run/compile/afterCompile/emit/afterEmit贯穿整个构建生命周期"
            },
            {
              "id": "loader与plugin执行机制-18-3-1-d3",
              "tag": "Compilation钩子",
              "desc": "buildModule/succeedModule/seal/optimizeChunks等一次编译内部"
            },
            {
              "id": "loader与plugin执行机制-18-3-1-d4",
              "tag": "tap/tapAsync/tapPromise三种注册方式分别对应同步/异步回调/Promise回调",
              "desc": "tap同步执行立即返回；tapAsync接受callback参数异步通知完成；tapPromise返回Promise由Webpack等待resolve后继续构建流程"
            }
          ]
        },
        {
          "id": "hmr模块热替换原理-18-3-2",
          "tag": "HMR模块热替换原理",
          "desc": "HMR实现在应用运行时无刷新替换模块提升开发体验",
          "details": [
            {
              "id": "hmr模块热替换原理-18-3-2-d0",
              "tag": "HMR流程",
              "desc": "文件变更触发Webpack重新编译生成update chunk和manifest"
            },
            {
              "id": "hmr模块热替换原理-18-3-2-d1",
              "tag": "HMR Server",
              "desc": "Webpack DevServer通过WebSocket将更新hash推送到浏览器"
            },
            {
              "id": "hmr模块热替换原理-18-3-2-d2",
              "tag": "HMR Runtime",
              "desc": "浏览器端接收更新调用module.hot.accept应用补丁"
            },
            {
              "id": "hmr模块热替换原理-18-3-2-d3",
              "tag": "module.hot.accept指定接受更新的模块回调更新视图",
              "desc": "accept绑定模块更新回调实现局部热替换；decline拒绝更新触发全页刷新；未accept的模块更新会冒泡至入口触发整页reload"
            },
            {
              "id": "hmr模块热替换原理-18-3-2-d4",
              "tag": "React/Vue热更新",
              "desc": "react-hot-loader/vue-loader实现组件state保留的热更新"
            }
          ]
        },
        {
          "id": "sourcemap配置-18-3-3",
          "tag": "Source Map配置",
          "desc": "Source Map将压缩混淆后的代码映射回原始源码方便调试",
          "details": [
            {
              "id": "sourcemap配置-18-3-3-d0",
              "tag": "devtool选项",
              "desc": "eval/eval-source-map/source-map/cheap-source-map/cheap-module-source-map等"
            },
            {
              "id": "sourcemap配置-18-3-3-d1",
              "tag": "eval模式",
              "desc": "构建最快但映射精度最低仅行级映射"
            },
            {
              "id": "sourcemap配置-18-3-3-d2",
              "tag": "source-map模式",
              "desc": "生成独立.map文件映射精度最高含行列和原始源码"
            },
            {
              "id": "sourcemap配置-18-3-3-d3",
              "tag": "开发推荐",
              "desc": "eval-cheap-module-source-map平衡速度和精度"
            },
            {
              "id": "sourcemap配置-18-3-3-d4",
              "tag": "生产推荐",
              "desc": "source-map或hidden-source-map"
            }
          ]
        },
        {
          "id": "ast解析与依赖图-18-3-4",
          "tag": "AST解析与依赖图",
          "desc": "Webpack使用AST分析提取模块依赖关系构建完整的依赖图",
          "details": [
            {
              "id": "ast解析与依赖图-18-3-4-d0",
              "tag": "acorn解析器",
              "desc": "Webpack使用acorn将JS代码解析为ESTree标准AST语法树"
            },
            {
              "id": "ast解析与依赖图-18-3-4-d1",
              "tag": "AST遍历",
              "desc": "遍历AST节点识别ImportDeclaration/CallExpression(require)等依赖声明"
            },
            {
              "id": "ast解析与依赖图-18-3-4-d2",
              "tag": "依赖收集",
              "desc": "从AST节点提取依赖模块路径创建Dependence对象记录依赖关系"
            },
            {
              "id": "ast解析与依赖图-18-3-4-d3",
              "tag": "依赖图构建",
              "desc": "从entry出发递归解析每个依赖模块形成完整的模块依赖有向图"
            }
          ]
        }
      ]
    },
    {
      "id": "18-5-webpack5与工程化-18-4",
      "title": "18.5 Webpack5与工程化",
      "points": [
        {
          "id": "modulefederation模块联邦-18-4-0",
          "tag": "Module Federation模块联邦",
          "desc": "Webpack5核心特性实现跨应用模块共享解决微前端架构下的代码复用",
          "details": [
            {
              "id": "modulefederation模块联邦-18-4-0-d0",
              "tag": "exposes配置",
              "desc": "暴露本应用的模块供其他应用消费"
            },
            {
              "id": "modulefederation模块联邦-18-4-0-d1",
              "tag": "remotes配置",
              "desc": "引用其他应用暴露的模块如remotes:{app1:'app1@http://cdn.com/app1/remoteEntry.js'}"
            },
            {
              "id": "modulefederation模块联邦-18-4-0-d2",
              "tag": "shared配置",
              "desc": "声明共享依赖及版本要求如shared:{react:{singleton:true}}"
            },
            {
              "id": "modulefederation模块联邦-18-4-0-d3",
              "tag": "singleton约束",
              "desc": "强制共享依赖只加载一个版本避免多版本冲突"
            },
            {
              "id": "modulefederation模块联邦-18-4-0-d4",
              "tag": "运行时加载",
              "desc": "远程模块运行时通过HTTP加载不打包进本地bundle"
            },
            {
              "id": "modulefederation模块联邦-18-4-0-d5",
              "tag": "适用场景",
              "desc": "微前端架构共享公共组件库、多团队独立开发共享业务模块"
            }
          ]
        },
        {
          "id": "持久化缓存与assetmodules-18-4-1",
          "tag": "持久化缓存与Asset Modules",
          "desc": "Webpack5原生缓存机制和Asset Modules替代传统loader简化配置",
          "details": [
            {
              "id": "持久化缓存与assetmodules-18-4-1-d0",
              "tag": "filesystem缓存",
              "desc": "cache:{type:'filesystem'}开启磁盘持久化缓存二次构建极快"
            },
            {
              "id": "持久化缓存与assetmodules-18-4-1-d1",
              "tag": "Asset Modules类型",
              "desc": "asset/asset-inline/asset/resource自动处理替代file-loader/url-loader"
            },
            {
              "id": "持久化缓存与assetmodules-18-4-1-d2",
              "tag": "asset自动模式",
              "desc": "根据文件大小自动选择inline或resource默认8KB以下inline"
            }
          ]
        },
        {
          "id": "webpack5新特性-18-4-2",
          "tag": "Webpack5新特性",
          "desc": "Webpack5移除Node.js内置模块自动polyfill要求开发者显式处理兼容性",
          "details": [
            {
              "id": "webpack5新特性-18-4-2-d0",
              "tag": "topLevelAwait支持",
              "desc": "模块顶层可直接使用await无需包裹async函数"
            },
            {
              "id": "webpack5新特性-18-4-2-d1",
              "tag": "Node polyfill移除",
              "desc": "不再自动注入Node内置模块polyfill如crypto/buffer/path"
            },
            {
              "id": "webpack5新特性-18-4-2-d2",
              "tag": "resolve.fallback",
              "desc": "配置Node模块的浏览器替代实现"
            },
            {
              "id": "webpack5新特性-18-4-2-d3",
              "tag": "真实contenthash",
              "desc": "基于文件实际内容而非chunk构造顺序"
            }
          ]
        },
        {
          "id": "webpack与vite-rollup对比-18-4-3",
          "tag": "Webpack与Vite/Rollup对比",
          "desc": "理解不同构建工具的设计理念和适用场景做出正确的技术选型",
          "details": [
            {
              "id": "webpack与vite-rollup对比-18-4-3-d0",
              "tag": "Vite开发冷启动",
              "desc": "利用浏览器原生ESM无需打包极快启动，Webpack需全量打包启动慢"
            },
            {
              "id": "webpack与vite-rollup对比-18-4-3-d1",
              "tag": "Vite HMR速度",
              "desc": "模块级热更新无需重新打包受影响模块"
            },
            {
              "id": "webpack与vite-rollup对比-18-4-3-d2",
              "tag": "Rollup优势",
              "desc": "Tree Shaking更彻底输出更干净的ESM格式代码更适合打包npm库"
            },
            {
              "id": "webpack与vite-rollup对比-18-4-3-d3",
              "tag": "Webpack优势",
              "desc": "功能最全面loader/plugin生态最庞大复杂应用和微前端首选"
            },
            {
              "id": "webpack与vite-rollup对比-18-4-3-d4",
              "tag": "选型建议",
              "desc": "应用项目Webpack/Vite均可，库项目Rollup更优"
            }
          ]
        },
        {
          "id": "ci-cd与monorepo工程化-18-4-4",
          "tag": "CI/CD与Monorepo工程化",
          "desc": "Webpack与现代工程化实践集成实现自动化构建",
          "details": [
            {
              "id": "ci-cd与monorepo工程化-18-4-4-d0",
              "tag": "CI集成",
              "desc": "GitLab/Jenkins/GitHub Actions流水线中执行webpack build产出部署产物"
            },
            {
              "id": "ci-cd与monorepo工程化-18-4-4-d1",
              "tag": "构建缓存CI",
              "desc": "cache.type:'filesystem'配合CI缓存目录加速流水线"
            },
            {
              "id": "ci-cd与monorepo工程化-18-4-4-d2",
              "tag": "webpack-merge策略",
              "desc": "创建webpack.common.js基础配置各项目merge差异部分"
            },
            {
              "id": "ci-cd与monorepo工程化-18-4-4-d3",
              "tag": "Module Federation Monorepo",
              "desc": "各子项目exposes/remotes互联共享组件库和业务模块"
            }
          ]
        }
      ]
    }
  ]
};
