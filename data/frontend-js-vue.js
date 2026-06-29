// javascript.js — 十二、JavaScript 前端基础 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['javascript'] = {
  "id": "javascript",
  "title": "十二、JavaScript 前端基础",
  "tag": "JavaScript",
  "order": 12,
  "icon": "🟨",
  "cssIndex": 11,
  "subs": [
    {
      "id": "12-1-js核心概念-12-0",
      "title": "12.1 JS核心概念",
      "points": [
        {
          "id": "数据类型分类-12-0-0",
          "tag": "数据类型分类",
          "desc": "JS有8种数据类型：7种原始类型(undefined/null/boolean/number/string/symbol/bigint)和1种引用类型(object)，原始类型存储在栈内存，引用类型存储在堆内存",
          "details": [
            {
              "id": "数据类型分类-12-0-0-d0",
              "tag": "原始类型不可变，按值",
              "desc": "原始类型不可变，按值访问；引用类型可变，按引用访问"
            },
            {
              "id": "数据类型分类-12-0-0-d1",
              "tag": "typeof null",
              "desc": "== 'object' 是历史遗留bug"
            },
            {
              "id": "数据类型分类-12-0-0-d2",
              "tag": "Symbol",
              "desc": "Symbol保证唯一性常做私有属性键；BigInt超出Number安全整数范围"
            },
            {
              "id": "数据类型分类-12-0-0-d3",
              "tag": "基本包装类型只在读取时临时",
              "desc": "基本包装类型只在读取时临时创建，操作完即销毁"
            }
          ]
        },
        {
          "id": "类型检测方法-12-0-1",
          "tag": "类型检测方法",
          "desc": "typeof/instanceof/Object.prototype.toString.call()三种方式各有适用场景和局限",
          "details": [
            {
              "id": "类型检测方法-12-0-1-d0",
              "tag": "typeof",
              "desc": "typeof能准确识别除null外所有原始类型和function"
            },
            {
              "id": "类型检测方法-12-0-1-d1",
              "tag": "instanceof基于原型链检测，不",
              "desc": "instanceof基于原型链检测，不能跨iframe，对原始类型始终返回false"
            },
            {
              "id": "类型检测方法-12-0-1-d2",
              "tag": "Object.prototype.toString.call()最准确返回[object Xxx]格式，是类型检测最佳实践",
              "desc": "该方法内部读取对象Symbol.toStringTag，不受原型链篡改影响，能区分Array/Date/RegExp等typeof无法识别的类型"
            },
            {
              "id": "类型检测方法-12-0-1-d3",
              "tag": "Array.isArray()专",
              "desc": "Array.isArray()专用于数组检测比instanceof更可靠"
            }
          ]
        },
        {
          "id": "类型转换规则-12-0-2",
          "tag": "类型转换规则",
          "desc": "JS隐式转换遵循一套复杂规则，是面试高频考点",
          "details": [
            {
              "id": "类型转换规则-12-0-2-d0",
              "tag": "ToString",
              "desc": "对象先valueOf再toString；ToNumber：undefined→NaN，null→0，true→1"
            },
            {
              "id": "类型转换规则-12-0-2-d1",
              "tag": "==比较",
              "desc": "null==undefined为true；数字与字符串比较时字符串转数字"
            },
            {
              "id": "类型转换规则-12-0-2-d2",
              "tag": "ToPrimitive",
              "desc": "对象默认先valueOf再toString，Date类型反之"
            },
            {
              "id": "类型转换规则-12-0-2-d3",
              "tag": "常见陷阱",
              "desc": "[]==![]为true；'+[]'为''，'+{}'为'NaN"
            }
          ]
        },
        {
          "id": "undefined与null-12-0-3",
          "tag": "undefined与null",
          "desc": "两者都代表'空'但语义不同：undefined是未定义，null是空值引用",
          "details": [
            {
              "id": "undefined与null-12-0-3-d0",
              "tag": "undefined",
              "desc": "undefined是全局属性非关键字可用void 0替代；null是关键字不可覆盖"
            },
            {
              "id": "undefined与null-12-0-3-d1",
              "tag": "undefined源自变量未赋值/函数无返回值；null用于主动释放引用",
              "desc": "undefined是JS引擎自动赋予未声明变量的默认值；null是开发者主动赋值表示空引用，便于垃圾回收"
            },
            {
              "id": "undefined与null-12-0-3-d2",
              "tag": "typeof null",
              "desc": "=='object'(bug)；null==undefined为true但null===undefined为false"
            },
            {
              "id": "undefined与null-12-0-3-d3",
              "tag": "JSON序列化时undefined被忽略，null正常序列化为null",
              "desc": "JSON.stringify跳过值为undefined的属性不输出；null值属性正常序列化为\"null\"，数组中undefined转为null"
            }
          ]
        }
      ]
    },
    {
      "id": "12-2-作用域与闭包-12-1",
      "title": "12.2 作用域与闭包",
      "points": [
        {
          "id": "作用域与作用域链-12-1-0",
          "tag": "作用域与作用域链",
          "desc": "JS采用词法作用域(静态作用域)，函数定义时确定可访问变量范围，执行时沿作用域链逐层向外查找",
          "details": [
            {
              "id": "作用域与作用域链-12-1-0-d0",
              "tag": "全局作用域/函数作用域/块级作用域(let/const在{}内)三种层级",
              "desc": "var只认全局和函数作用域忽略块级；let/const在{}内创建块级作用域变量，for循环中let每次迭代独立绑定"
            },
            {
              "id": "作用域与作用域链-12-1-0-d1",
              "tag": "作用域链由当前VO+外层VO依次排列，查找变量从链头向链尾搜索",
              "desc": "执行上下文的VO(变量对象)串联成作用域链，变量查找从内层VO向外层逐级搜索直到全局VO，找不到则ReferenceError"
            },
            {
              "id": "作用域与作用域链-12-1-0-d2",
              "tag": "词法作用域在编写时确定与",
              "desc": "词法作用域在编写时确定与调用位置无关，与动态作用域(bash)的根本区别"
            },
            {
              "id": "作用域与作用域链-12-1-0-d3",
              "tag": "eval/with可动态",
              "desc": "eval/with可动态修改词法作用域，严格模式下eval有独立作用域"
            }
          ]
        },
        {
          "id": "闭包原理-12-1-1",
          "tag": "闭包原理",
          "desc": "闭包是函数与其词法环境的组合，使内部函数即使在外部函数执行后仍能访问外部变量",
          "details": [
            {
              "id": "闭包原理-12-1-1-d0",
              "tag": "本质",
              "desc": "内部函数持有对外部函数变量对象的引用，阻止其被GC回收"
            },
            {
              "id": "闭包原理-12-1-1-d1",
              "tag": "经典应用",
              "desc": "数据私有化(模拟私有变量)、函数工厂(偏函数/柯里化)、状态保持(计数器)"
            },
            {
              "id": "闭包原理-12-1-1-d2",
              "tag": "常见陷阱",
              "desc": "循环中var+i导致闭包共享同一变量，解决：let/IIFE/forEach"
            },
            {
              "id": "闭包原理-12-1-1-d3",
              "tag": "闭包变量",
              "desc": "闭包变量是引用而非值拷贝，需手动解除引用(null)避免内存泄漏"
            }
          ]
        },
        {
          "id": "iife立即执行函数-12-1-2",
          "tag": "IIFE立即执行函数",
          "desc": "IIFE创建独立作用域避免污染全局，是模块化的早期方案",
          "details": [
            {
              "id": "iife立即执行函数-12-1-2-d0",
              "tag": "写法",
              "desc": "(function(){})() 和 (function(){}())均有效"
            },
            {
              "id": "iife立即执行函数-12-1-2-d1",
              "tag": "核心作用",
              "desc": "创建独立作用域隔离变量；闭包场景下捕获循环变量当前值"
            },
            {
              "id": "iife立即执行函数-12-1-2-d2",
              "tag": "UMD模块模式",
              "desc": "跨全局/CommonJS/AMD三种模块系统"
            },
            {
              "id": "iife立即执行函数-12-1-2-d3",
              "tag": "ES6模块普及后IIFE使用减少，但仍在库打包(iife格式)、沙箱隔离场景出现",
              "desc": "IIFE创建独立作用域隔离变量防全局污染；Rollup等打包器仍输出iife格式供浏览器直接使用<script>标签"
            }
          ]
        },
        {
          "id": "防抖与节流-12-1-3",
          "tag": "防抖与节流",
          "desc": "两者都是闭包的经典应用，用于控制高频事件触发频率",
          "details": [
            {
              "id": "防抖与节流-12-1-3-d0",
              "tag": "防抖(debounce)",
              "desc": "事件触发后等待delay才执行，期间再次触发则重新计时；适用搜索联想、resize"
            },
            {
              "id": "防抖与节流-12-1-3-d1",
              "tag": "节流(throttle)",
              "desc": "delay时间内只执行一次；适用滚动加载、拖拽mousemove"
            },
            {
              "id": "防抖与节流-12-1-3-d2",
              "tag": "防抖实现",
              "desc": "闭包存储timer，每次调用clearTimeout重置计时器"
            },
            {
              "id": "防抖与节流-12-1-3-d3",
              "tag": "节流实现",
              "desc": "闭包存储上次执行时间或flag，判断时间差是否超过间隔"
            },
            {
              "id": "防抖与节流-12-1-3-d4",
              "tag": "requestAnimationFrame",
              "desc": "浏览器渲染帧率(16.6ms)天然节流，动画场景优先使用"
            }
          ]
        }
      ]
    },
    {
      "id": "12-3-原型与继承-12-2",
      "title": "12.3 原型与继承",
      "points": [
        {
          "id": "原型链机制-12-2-0",
          "tag": "原型链机制",
          "desc": "每个对象都有__proto__指向其构造函数的prototype，形成原型链，链尾为null",
          "details": [
            {
              "id": "原型链机制-12-2-0-d0",
              "tag": "实例.__proto__",
              "desc": "== 构造函数.prototype，prototype.__proto__ === 父prototype"
            },
            {
              "id": "原型链机制-12-2-0-d1",
              "tag": "Object.prototype",
              "desc": "Object.prototype是所有对象的根，其__proto__为null标记链终点"
            },
            {
              "id": "原型链机制-12-2-0-d2",
              "tag": "Object instanceof Function为true，Function instanceof Object也为true",
              "desc": "Object是函数所以instanceof Function为true；Function.prototype是对象所以Function继承自Object，形成鸡生蛋循环"
            },
            {
              "id": "原型链机制-12-2-0-d3",
              "tag": "属性查找沿原型链向上找到即停(遮蔽效应)；hasOwnProperty()检测自有属性",
              "desc": "同名属性内层遮蔽外层，访问时返回最近层的值；hasOwnProperty()只检查对象自身不含原型链上继承的属性"
            }
          ]
        },
        {
          "id": "proto与prototype区别-12-2-1",
          "tag": "__proto__与prototype区别",
          "desc": "prototype是构造函数的属性(函数特有)，__proto__是每个对象的内部链接",
          "details": [
            {
              "id": "proto与prototype区别-12-2-1-d0",
              "tag": "prototype",
              "desc": "函数独有，定义实例将继承的方法和属性"
            },
            {
              "id": "proto与prototype区别-12-2-1-d1",
              "tag": "__proto__",
              "desc": "对象属性(非标准)，指向创建该对象的构造函数的prototype"
            },
            {
              "id": "proto与prototype区别-12-2-1-d2",
              "tag": "Object.create(proto)创建__proto__直接指向proto的对象",
              "desc": "Object.create(proto)以proto为新对象原型，无需构造函数即可建立原型链，null参数创建无原型纯净对象"
            },
            {
              "id": "proto与prototype区别-12-2-1-d3",
              "tag": "constructor属性",
              "desc": "重写prototype会断开此链接需手动修复"
            }
          ]
        },
        {
          "id": "继承方式演进-12-2-2",
          "tag": "继承方式演进",
          "desc": "从原型链继承到ES6 class，JS继承经历了6种演进",
          "details": [
            {
              "id": "继承方式演进-12-2-2-d0",
              "tag": "原型链继承",
              "desc": "Child.prototype=new Parent()——引用类型属性所有实例共享"
            },
            {
              "id": "继承方式演进-12-2-2-d1",
              "tag": "构造函数继承",
              "desc": "Parent.call(this)——方法无法复用，Parent原型上方法不可见"
            },
            {
              "id": "继承方式演进-12-2-2-d2",
              "tag": "组合继承",
              "desc": "call+new Parent()——Parent被调用两次，子类原型有冗余属性"
            },
            {
              "id": "继承方式演进-12-2-2-d3",
              "tag": "寄生组合继承",
              "desc": "call+Object.create(Parent.prototype)——最完美方案，class的底层实现"
            },
            {
              "id": "继承方式演进-12-2-2-d4",
              "tag": "ES6 class",
              "desc": "语法糖，底层基于寄生组合继承；super()对应Parent.call(this)"
            }
          ]
        },
        {
          "id": "class语法要点-12-2-3",
          "tag": "class语法要点",
          "desc": "ES6 class是构造函数+原型继承的语法糖，提供更清晰的面向对象写法",
          "details": [
            {
              "id": "class语法要点-12-2-3-d0",
              "tag": "constructor中定义实例属性；类内直接写方法定义在prototype上",
              "desc": "constructor内的this.xxx属于每个实例独立属性；类体中声明的方法自动挂载到prototype上供所有实例共享"
            },
            {
              "id": "class语法要点-12-2-3-d1",
              "tag": "static方法",
              "desc": "static方法属于类本身不可被实例调用，子类通过super调用父类静态方法"
            },
            {
              "id": "class语法要点-12-2-3-d2",
              "tag": "extends继承",
              "desc": "子类constructor必须先调super()否则this未定义"
            },
            {
              "id": "class语法要点-12-2-3-d3",
              "tag": "class不存在变量提升；类内方法默认不可枚举；类内严格模式默认开启",
              "desc": "class声明前访问会ReferenceError不像function可前置调用；方法默认enumerable为false；类体自动启用'use strict'"
            }
          ]
        }
      ]
    },
    {
      "id": "12-4-this与执行上下文-12-3",
      "title": "12.4 this与执行上下文",
      "points": [
        {
          "id": "this绑定四条规则-12-3-0",
          "tag": "this绑定四条规则",
          "desc": "this的值由调用方式决定，按优先级：new绑定>显式绑定>隐式绑定>默认绑定",
          "details": [
            {
              "id": "this绑定四条规则-12-3-0-d0",
              "tag": "默认绑定",
              "desc": "独立函数调用this指向全局对象(非严格)或undefined(严格)"
            },
            {
              "id": "this绑定四条规则-12-3-0-d1",
              "tag": "隐式绑定",
              "desc": "obj.fn()调用this指向obj，但隐式丢失常见(fn赋值变量/参数传递)"
            },
            {
              "id": "this绑定四条规则-12-3-0-d2",
              "tag": "显式绑定",
              "desc": "call/apply立即执行指定this；bind返回新函数永久绑定this"
            },
            {
              "id": "this绑定四条规则-12-3-0-d3",
              "tag": "new绑定",
              "desc": "new操作创建新对象并将this绑定到该对象"
            }
          ]
        },
        {
          "id": "箭头函数this-12-3-1",
          "tag": "箭头函数this",
          "desc": "箭头函数没有自己的this，继承定义时外层上下文的this(词法this)，不可被任何规则修改",
          "details": [
            {
              "id": "箭头函数this-12-3-1-d0",
              "tag": "箭头函数this在定义时确定等同于外层函数的this值",
              "desc": "箭头函数没有自身this绑定，继承定义时所在上下文的this（词法this），不随调用方式变化"
            },
            {
              "id": "箭头函数this-12-3-1-d1",
              "tag": "call/apply/bind对箭头函数无效——无法改变其this指向",
              "desc": "箭头函数无自身this，call/apply/bind的首参数(thisArg)被忽略，this始终保持定义时的外层上下文绑定"
            },
            {
              "id": "箭头函数this-12-3-1-d2",
              "tag": "适用场景",
              "desc": "回调函数(Promise/数组方法)、React事件处理"
            },
            {
              "id": "箭头函数this-12-3-1-d3",
              "tag": "不适用场景",
              "desc": "对象方法定义、构造函数、需要动态this的DOM事件"
            }
          ]
        },
        {
          "id": "执行上下文栈-12-3-2",
          "tag": "执行上下文栈",
          "desc": "JS引擎维护执行上下文栈(调用栈)，全局上下文在栈底，函数上下文入栈出栈遵循LIFO",
          "details": [
            {
              "id": "执行上下文栈-12-3-2-d0",
              "tag": "全局执行上下文",
              "desc": "程序启动时创建，浏览器关联window对象"
            },
            {
              "id": "执行上下文栈-12-3-2-d1",
              "tag": "函数执行上下文",
              "desc": "每次函数调用创建新上下文，包含VO/作用域链/this三部分"
            },
            {
              "id": "执行上下文栈-12-3-2-d2",
              "tag": "VO→AO",
              "desc": "进入函数执行阶段后变量对象变为活动对象"
            },
            {
              "id": "执行上下文栈-12-3-2-d3",
              "tag": "ES6词法环境",
              "desc": "let/const声明存于词法环境，var声明存于变量环境"
            }
          ]
        },
        {
          "id": "变量提升与暂时性死区-12-3-3",
          "tag": "变量提升与暂时性死区",
          "desc": "var声明会提升到作用域顶部(只提升声明不提升赋值)，let/const存在TDZ",
          "details": [
            {
              "id": "变量提升与暂时性死区-12-3-3-d0",
              "tag": "var提升",
              "desc": "声明前访问得到undefined而非ReferenceError"
            },
            {
              "id": "变量提升与暂时性死区-12-3-3-d1",
              "tag": "函数提升",
              "desc": "函数声明整体提升，函数表达式只提升变量声明"
            },
            {
              "id": "变量提升与暂时性死区-12-3-3-d2",
              "tag": "let/const TDZ",
              "desc": "从块级作用域开始到声明语句之间为死区，访问抛ReferenceError"
            },
            {
              "id": "变量提升与暂时性死区-12-3-3-d3",
              "tag": "TDZ设计目的",
              "desc": "鼓励良好编码习惯，避免var时代声明前使用的隐患"
            }
          ]
        }
      ]
    },
    {
      "id": "12-5-异步编程-12-4",
      "title": "12.5 异步编程",
      "points": [
        {
          "id": "eventloop机制-12-4-0",
          "tag": "Event Loop机制",
          "desc": "Event Loop是JS实现异步的核心机制：调用栈执行同步任务，微任务队列优先于宏任务队列",
          "details": [
            {
              "id": "eventloop机制-12-4-0-d0",
              "tag": "宏任务",
              "desc": "script/setTimeout/setInterval/I/O/UI渲染"
            },
            {
              "id": "eventloop机制-12-4-0-d1",
              "tag": "微任务",
              "desc": "Promise.then/MutationObserver/queueMicrotask/process.nextTick(Node)"
            },
            {
              "id": "eventloop机制-12-4-0-d2",
              "tag": "执行顺序",
              "desc": "同步代码→清空微任务→一个宏任务→清空微任务→下一个宏任务"
            },
            {
              "id": "eventloop机制-12-4-0-d3",
              "tag": "Node 11+",
              "desc": "process.nextTick优先于其他微任务"
            }
          ]
        },
        {
          "id": "promise原理与api-12-4-1",
          "tag": "Promise原理与API",
          "desc": "Promise是异步操作的容器，三态pending→fulfilled/rejected不可逆，then链实现异步流程串行化",
          "details": [
            {
              "id": "promise原理与api-12-4-1-d0",
              "tag": "状态转换",
              "desc": "pending→fulfilled(resolve)或pending→rejected(reject)，不可逆"
            },
            {
              "id": "promise原理与api-12-4-1-d1",
              "tag": "then/catch/finally",
              "desc": "then返回新Promise形成链式；catch是then(null,onRejected)语法糖"
            },
            {
              "id": "promise原理与api-12-4-1-d2",
              "tag": "Promise.all",
              "desc": "全部成功返回结果数组，一个失败即返回该失败原因"
            },
            {
              "id": "promise原理与api-12-4-1-d3",
              "tag": "Promise.race",
              "desc": "Promise.race返回最先改变状态的结果；Promise.any返回最先fulfilled的(ES2021)"
            }
          ]
        },
        {
          "id": "async-await-12-4-2",
          "tag": "async/await",
          "desc": "async/await是Promise+Generator的语法糖，让异步代码看起来像同步代码",
          "details": [
            {
              "id": "async-await-12-4-2-d0",
              "tag": "async函数始终返回Promise",
              "desc": "返回值被Promise.resolve()包装"
            },
            {
              "id": "async-await-12-4-2-d1",
              "tag": "await暂停async函数执行",
              "desc": "等待Promise resolve后才继续，等效于then回调"
            },
            {
              "id": "async-await-12-4-2-d2",
              "tag": "错误处理",
              "desc": "try-catch捕获await的reject比.catch链式更直观"
            },
            {
              "id": "async-await-12-4-2-d3",
              "tag": "并发控制",
              "desc": "Promise.all配合await实现并发；for循环中await实现串行"
            }
          ]
        },
        {
          "id": "generator与回调地狱演进-12-4-3",
          "tag": "Generator与回调地狱演进",
          "desc": "异步方案经历了回调→Promise→Generator+co→async/await的演进",
          "details": [
            {
              "id": "generator与回调地狱演进-12-4-3-d0",
              "tag": "回调地狱",
              "desc": "多层嵌套导致可读性差、错误处理困难"
            },
            {
              "id": "generator与回调地狱演进-12-4-3-d1",
              "tag": "Generator",
              "desc": "function*声明，yield暂停返回{value,done}，next()恢复执行"
            },
            {
              "id": "generator与回调地狱演进-12-4-3-d2",
              "tag": "Generator异步",
              "desc": "yield交出执行权，co库自动驱动执行实现同步写法"
            },
            {
              "id": "generator与回调地狱演进-12-4-3-d3",
              "tag": "Redux-saga用Generator管理副作用；koa用Generator中间件(旧版)",
              "desc": "Redux-saga用Generator+yield实现异步流程可控暂停恢复；koa旧版用Generator实现洋葱模型中间件，新版改用async/await"
            }
          ]
        }
      ]
    },
    {
      "id": "12-6-es6新特性-12-5",
      "title": "12.6 ES6+新特性",
      "points": [
        {
          "id": "let-const与块级作用域-12-5-0",
          "tag": "let/const与块级作用域",
          "desc": "let/const声明创建块级作用域变量，let可重赋值const不可，两者都无提升且有TDZ",
          "details": [
            {
              "id": "let-const与块级作用域-12-5-0-d0",
              "tag": "let可重赋值",
              "desc": "let可重赋值适合循环变量、可变状态"
            },
            {
              "id": "let-const与块级作用域-12-5-0-d1",
              "tag": "const声明时必须初始化不可重新赋值，但对象/数组内部属性可修改",
              "desc": "const保证变量绑定不可变而非值不可变，对象属性和数组元素仍可修改，需Object.freeze()实现真正不可变"
            },
            {
              "id": "let-const与块级作用域-12-5-0-d2",
              "tag": "for(let i",
              "desc": "0...)每次迭代创建新的i绑定解决var共享变量问题"
            },
            {
              "id": "let-const与块级作用域-12-5-0-d3",
              "tag": "Object.freeze()深冻结对象配合const实现真正不可变数据",
              "desc": "Object.freeze()阻止对象属性增删改，配合const防止引用被替换；浅冻结需递归调用实现深层冻结"
            }
          ]
        },
        {
          "id": "解构赋值与扩展运算符-12-5-1",
          "tag": "解构赋值与扩展运算符",
          "desc": "解构从对象/数组提取值赋给变量，扩展运算符(...)展开/收集元素",
          "details": [
            {
              "id": "解构赋值与扩展运算符-12-5-1-d0",
              "tag": "对象解构",
              "desc": "{name,age}={name:'z',age:18}；支持默认值/重命名/嵌套"
            },
            {
              "id": "解构赋值与扩展运算符-12-5-1-d1",
              "tag": "数组解构",
              "desc": "[a,b]=[1,2]；支持跳过/剩余/默认值"
            },
            {
              "id": "解构赋值与扩展运算符-12-5-1-d2",
              "tag": "扩展运算符",
              "desc": "合并对象({...obj1,...obj2})、合并数组([...arr1,...arr2])、浅拷贝"
            },
            {
              "id": "解构赋值与扩展运算符-12-5-1-d3",
              "tag": "交换变量",
              "desc": "[a,b]=[b,a]无需临时变量"
            }
          ]
        },
        {
          "id": "模板字符串与标签模板-12-5-2",
          "tag": "模板字符串与标签模板",
          "desc": "模板字符串用反引号+${}插值，标签模板可实现自定义字符串处理",
          "details": [
            {
              "id": "模板字符串与标签模板-12-5-2-d0",
              "tag": "基础",
              "desc": "`Hello ${name}`插值；多行文本无需拼接；${}内可放任意表达式"
            },
            {
              "id": "模板字符串与标签模板-12-5-2-d1",
              "tag": "标签模板",
              "desc": "func`text${expr}text`，func接收(strings,...values)参数"
            },
            {
              "id": "模板字符串与标签模板-12-5-2-d2",
              "tag": "应用",
              "desc": "国际化(i18n)、SQL防注入、样式库(styled-components)"
            },
            {
              "id": "模板字符串与标签模板-12-5-2-d3",
              "tag": "String.raw",
              "desc": "String.raw返回未经转义的原始字符串"
            }
          ]
        },
        {
          "id": "symbol与迭代器-12-5-3",
          "tag": "Symbol与迭代器",
          "desc": "Symbol提供唯一标识符防止属性冲突；迭代器协议为for-of提供统一遍历机制",
          "details": [
            {
              "id": "symbol与迭代器-12-5-3-d0",
              "tag": "Symbol()每次",
              "desc": "Symbol()每次创建唯一值；Symbol.for('key')注册全局可复用"
            },
            {
              "id": "symbol与迭代器-12-5-3-d1",
              "tag": "内置Symbol",
              "desc": "Symbol.iterator/Symbol.toPrimitive/Symbol.hasInstance"
            },
            {
              "id": "symbol与迭代器-12-5-3-d2",
              "tag": "迭代器协议",
              "desc": "对象实现[Symbol.iterator]()方法返回{next(){return{value,done}}}"
            },
            {
              "id": "symbol与迭代器-12-5-3-d3",
              "tag": "for-of遍历可迭代对象的值；for-in遍历对象键名(含原型链可枚举属性)",
              "desc": "for-of依赖Symbol.iterator协议遍历Array/Set/Map等值；for-in遍历对象自身+原型链可枚举键名，不适合数组"
            }
          ]
        },
        {
          "id": "proxy与reflect-12-5-4",
          "tag": "Proxy与Reflect",
          "desc": "Proxy拦截对象操作实现元编程，Reflect提供与Proxy handlers对应的标准操作方法",
          "details": [
            {
              "id": "proxy与reflect-12-5-4-d0",
              "tag": "Proxy",
              "desc": "new Proxy(target,handler)创建代理，handler定义13种拦截行为"
            },
            {
              "id": "proxy与reflect-12-5-4-d1",
              "tag": "常用拦截",
              "desc": "get(属性访问拦截)、set(属性赋值校验)、apply(函数调用拦截)"
            },
            {
              "id": "proxy与reflect-12-5-4-d2",
              "tag": "Reflect",
              "desc": "与Proxy handler同名方法提供操作对象的默认行为"
            },
            {
              "id": "proxy与reflect-12-5-4-d3",
              "tag": "应用场景",
              "desc": "Vue3响应式系统(Proxy替代Object.defineProperty)、校验库、日志代理"
            }
          ]
        },
        {
          "id": "set-map-weakmap-weakset-12-5-5",
          "tag": "Set/Map/WeakMap/WeakSet",
          "desc": "Set存储唯一值集合，Map存储键值对(键可为任意类型)，Weak版本持有弱引用不阻止GC",
          "details": [
            {
              "id": "set-map-weakmap-weakset-12-5-5-d0",
              "tag": "Set",
              "desc": "自动去重；size/add/delete/has；数组去重[...new Set(arr)]"
            },
            {
              "id": "set-map-weakmap-weakset-12-5-5-d1",
              "tag": "Map",
              "desc": "键范围任意(对象/函数均可作键)，维护插入顺序"
            },
            {
              "id": "set-map-weakmap-weakset-12-5-5-d2",
              "tag": "WeakMap",
              "desc": "键必须是对象且弱引用(GC可回收)；不可遍历无size"
            },
            {
              "id": "set-map-weakmap-weakset-12-5-5-d3",
              "tag": "典型用途",
              "desc": "WeakMap存储私有数据(DOM关联metadata)、缓存"
            }
          ]
        },
        {
          "id": "可选链与空值合并-12-5-6",
          "tag": "可选链与空值合并",
          "desc": "ES2020的可选链(?.)和空值合并(??)简化安全属性访问和默认值处理",
          "details": [
            {
              "id": "可选链与空值合并-12-5-6-d0",
              "tag": "可选链obj?.prop",
              "desc": "若obj为null/undefined返回undefined而非TypeError"
            },
            {
              "id": "可选链与空值合并-12-5-6-d1",
              "tag": "空值合并x??y",
              "desc": "仅当x为null/undefined时返回y，0和''不触发(与||的区别)"
            },
            {
              "id": "可选链与空值合并-12-5-6-d2",
              "tag": "组合使用",
              "desc": "const name=obj?.user?.name??'default'"
            },
            {
              "id": "可选链与空值合并-12-5-6-d3",
              "tag": "??不",
              "desc": "??不能与||/&&无括号混用(语法错误)"
            }
          ]
        }
      ]
    },
    {
      "id": "12-7-dom与bom-12-6",
      "title": "12.7 DOM与BOM",
      "points": [
        {
          "id": "dom操作与节点-12-6-0",
          "tag": "DOM操作与节点",
          "desc": "DOM将HTML文档表示为节点树，常用操作包括查询、创建、修改、删除节点",
          "details": [
            {
              "id": "dom操作与节点-12-6-0-d0",
              "tag": "节点类型",
              "desc": "元素节点(Element/1)、文本节点(Text/3)、文档节点(Document/9)"
            },
            {
              "id": "dom操作与节点-12-6-0-d1",
              "tag": "查询",
              "desc": "getElementById/querySelector/querySelectorAll"
            },
            {
              "id": "dom操作与节点-12-6-0-d2",
              "tag": "创建插入",
              "desc": "createElement/appendChild/insertBefore/insertAdjacentHTML"
            },
            {
              "id": "dom操作与节点-12-6-0-d3",
              "tag": "性能优化",
              "desc": "批量操作用DocumentFragment减少重排；cloneNode深克隆/浅克隆"
            }
          ]
        },
        {
          "id": "dom事件机制-12-6-1",
          "tag": "DOM事件机制",
          "desc": "事件流三阶段：捕获→目标→冒泡，addEventListener第三参数控制监听阶段",
          "details": [
            {
              "id": "dom事件机制-12-6-1-d0",
              "tag": "addEventListener(type,handler,useCapture)",
              "desc": "useCapture为false时在冒泡阶段触发(默认)，为true时在捕获阶段触发，控制事件监听的阶段"
            },
            {
              "id": "dom事件机制-12-6-1-d1",
              "tag": "事件对象",
              "desc": "target(真正触发元素)/currentTarget(绑定元素)/stopPropagation/preventDefault"
            },
            {
              "id": "dom事件机制-12-6-1-d2",
              "tag": "事件委托",
              "desc": "利用冒泡在父元素监听子元素事件，通过e.target识别触发源"
            },
            {
              "id": "dom事件机制-12-6-1-d3",
              "tag": "常见应用",
              "desc": "ul监听li点击、表格监听行点击、动态元素自动生效"
            }
          ]
        },
        {
          "id": "requestanimationframe-12-6-2",
          "tag": "requestAnimationFrame",
          "desc": "rAF在浏览器下次重绘前调用回调(通常16.6ms/60fps)，是动画最佳API",
          "details": [
            {
              "id": "requestanimationframe-12-6-2-d0",
              "tag": "与setTimeout区别",
              "desc": "rAF由浏览器调度保证与渲染同步"
            },
            {
              "id": "requestanimationframe-12-6-2-d1",
              "tag": "rAF优势",
              "desc": "浏览器自动优化调用频率(后台暂停)、与CSS动画同步避免丢帧"
            },
            {
              "id": "requestanimationframe-12-6-2-d2",
              "tag": "用法",
              "desc": "function animate(time){...;requestAnimationFrame(animate)}递归调用"
            },
            {
              "id": "requestanimationframe-12-6-2-d3",
              "tag": "cancelAnimationFrame(id)取消回调",
              "desc": "cancelAnimationFrame接受rAF返回的请求ID取消待执行回调，防止组件卸载后仍触发动画帧更新"
            }
          ]
        },
        {
          "id": "浏览器存储机制-12-6-3",
          "tag": "浏览器存储机制",
          "desc": "四种存储方案各有特点：cookie/localStorage/sessionStorage/indexedDB",
          "details": [
            {
              "id": "浏览器存储机制-12-6-3-d0",
              "tag": "cookie",
              "desc": "4KB/HTTP携带/可设HttpOnly/Secure/SameSite"
            },
            {
              "id": "浏览器存储机制-12-6-3-d1",
              "tag": "localStorage",
              "desc": "5MB/持久/同源共享（localStorage的详细说明：浏览器存储机制中关于localStorage的内容）"
            },
            {
              "id": "浏览器存储机制-12-6-3-d2",
              "tag": "sessionStorage",
              "desc": "5MB/会话/同源同标签页（sessionStorage的详细说明：浏览器存储机制中关于sessionStorage的内容）"
            },
            {
              "id": "浏览器存储机制-12-6-3-d3",
              "tag": "indexedDB",
              "desc": "异步NoSQL/支持事务索引/大容量数百MB"
            },
            {
              "id": "浏览器存储机制-12-6-3-d4",
              "tag": "StorageEvent",
              "desc": "localStorage跨标签页修改触发storage事件实现跨页通信"
            }
          ]
        }
      ]
    },
    {
      "id": "12-8-js性能与安全-12-7",
      "title": "12.8 JS性能与安全",
      "points": [
        {
          "id": "内存泄漏场景-12-7-0",
          "tag": "内存泄漏场景",
          "desc": "内存泄漏指程序不再使用的内存未被释放，常见场景需识别和预防",
          "details": [
            {
              "id": "内存泄漏场景-12-7-0-d0",
              "tag": "全局变量意外创建",
              "desc": "未声明变量赋值成为全局属性；解决方案：严格模式"
            },
            {
              "id": "内存泄漏场景-12-7-0-d1",
              "tag": "闭包引用",
              "desc": "闭包持有外层变量对象不释放；解决方案：用完置null"
            },
            {
              "id": "内存泄漏场景-12-7-0-d2",
              "tag": "DOM引用残留",
              "desc": "删除DOM节点但JS变量仍引用该节点"
            },
            {
              "id": "内存泄漏场景-12-7-0-d3",
              "tag": "定时器未清除",
              "desc": "setInterval/setTimeout引用外部对象不释放"
            },
            {
              "id": "内存泄漏场景-12-7-0-d4",
              "tag": "事件监听器未移除",
              "desc": "需在卸载时removeEventListener"
            }
          ]
        },
        {
          "id": "v8垃圾回收机制-12-7-1",
          "tag": "V8垃圾回收机制",
          "desc": "V8采用分代回收：新生代(Scavenge复制算法)处理短寿命对象，老生代(标记-清除-整理)处理长寿命对象",
          "details": [
            {
              "id": "v8垃圾回收机制-12-7-1-d0",
              "tag": "新生代(1-8MB)",
              "desc": "Scavenge算法分From/To两半，存活对象复制并晋升"
            },
            {
              "id": "v8垃圾回收机制-12-7-1-d1",
              "tag": "老生代",
              "desc": "Mark-Sweep标记清除+Mark-Compact标记整理消除碎片"
            },
            {
              "id": "v8垃圾回收机制-12-7-1-d2",
              "tag": "增量标记",
              "desc": "将标记阶段拆为小步骤穿插JS执行避免全停"
            },
            {
              "id": "v8垃圾回收机制-12-7-1-d3",
              "tag": "晋升条件",
              "desc": "一次Scavenge存活、To空间使用超25%"
            }
          ]
        },
        {
          "id": "深拷贝与浅拷贝-12-7-2",
          "tag": "深拷贝与浅拷贝",
          "desc": "浅拷贝复制引用(对象层级共享)，深拷贝递归复制所有层级创建独立副本",
          "details": [
            {
              "id": "深拷贝与浅拷贝-12-7-2-d0",
              "tag": "浅拷贝",
              "desc": "Object.assign()/展开运算符({...obj})——仅复制一层"
            },
            {
              "id": "深拷贝与浅拷贝-12-7-2-d1",
              "tag": "深拷贝简易",
              "desc": "JSON.parse(JSON.stringify(obj))——无法处理函数/undefined/循环引用"
            },
            {
              "id": "深拷贝与浅拷贝-12-7-2-d2",
              "tag": "structuredClone()",
              "desc": "浏览器原生深拷贝API(ES2022)支持循环引用/Date/RegExp"
            },
            {
              "id": "深拷贝与浅拷贝-12-7-2-d3",
              "tag": "递归深拷贝",
              "desc": "需处理循环引用(WeakMap)、特殊类型(Date/RegExp/Map/Set)"
            }
          ]
        },
        {
          "id": "xss防御策略-12-7-3",
          "tag": "XSS防御策略",
          "desc": "XSS(跨站脚本攻击)通过注入恶意脚本执行，分为存储型/反射型/DOM型",
          "details": [
            {
              "id": "xss防御策略-12-7-3-d0",
              "tag": "存储型XSS",
              "desc": "恶意脚本存入数据库，所有用户浏览时执行——危害最大"
            },
            {
              "id": "xss防御策略-12-7-3-d1",
              "tag": "反射型XSS",
              "desc": "URL参数中恶意脚本被服务器嵌入页面返回"
            },
            {
              "id": "xss防御策略-12-7-3-d2",
              "tag": "DOM型XSS",
              "desc": "纯前端漏洞，JS直接操作innerHTML"
            },
            {
              "id": "xss防御策略-12-7-3-d3",
              "tag": "防御",
              "desc": "输入过滤/输出编码；CSP限制脚本来源；DOMPurify库净化HTML"
            }
          ]
        },
        {
          "id": "csrf防御策略-12-7-4",
          "tag": "CSRF防御策略",
          "desc": "CSRF(跨站请求伪造)利用用户已登录身份发起恶意请求",
          "details": [
            {
              "id": "csrf防御策略-12-7-4-d0",
              "tag": "原理",
              "desc": "攻击者诱导已登录用户访问恶意页面自动发请求携带cookie"
            },
            {
              "id": "csrf防御策略-12-7-4-d1",
              "tag": "Token机制",
              "desc": "服务器下发CSRF Token(非cookie)，请求需携带——最主流方案"
            },
            {
              "id": "csrf防御策略-12-7-4-d2",
              "tag": "SameSite cookie",
              "desc": "SameSite=Strict/Lax/None控制跨站发送"
            },
            {
              "id": "csrf防御策略-12-7-4-d3",
              "tag": "双重Cookie验证",
              "desc": "请求URL和Cookie都携带Token服务器比对"
            }
          ]
        }
      ]
    }
  ]
};

// vue2.js — 十三、Vue2 生态体系 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['vue2'] = {
  "id": "vue2",
  "title": "十三、Vue2 生态体系",
  "tag": "Vue2",
  "order": 13,
  "icon": "💚",
  "cssIndex": 12,
  "subs": [
    {
      "id": "13-1-vue2-核心-13-0",
      "title": "13.1 Vue2 核心",
      "points": [
        {
          "id": "双向绑定原理-13-0-0",
          "tag": "双向绑定原理",
          "desc": "Vue2通过Object.defineProperty实现数据劫持，配合Observer/Dep/Watcher三者协同完成响应式更新",
          "details": [
            {
              "id": "双向绑定原理-13-0-0-d0",
              "tag": "Observer",
              "desc": "递历遍历data对象对每个属性设置getter/setter进行劫持"
            },
            {
              "id": "双向绑定原理-13-0-0-d1",
              "tag": "Dep",
              "desc": "每个响应式属性对应一个Dep依赖收集器，getter时收集Watcher"
            },
            {
              "id": "双向绑定原理-13-0-0-d2",
              "tag": "Watcher",
              "desc": "组件渲染时创建渲染Watcher，数据变化时Dep.notify()通知Watcher执行update"
            },
            {
              "id": "双向绑定原理-13-0-0-d3",
              "tag": "数组变异方法(push/pop/splice等)通过重写原型实现拦截",
              "desc": "Vue2对数组7个变异方法重写Array.prototype，调用时触发Dep.notify通知Watcher更新，直接索引赋值无法触发响应式"
            },
            {
              "id": "双向绑定原理-13-0-0-d4",
              "tag": "缺陷",
              "desc": "无法检测对象属性增加/删除需Vue.set；无法监听数组索引直接赋值"
            }
          ]
        },
        {
          "id": "生命周期钩子-13-0-1",
          "tag": "生命周期钩子",
          "desc": "Vue2组件从创建到销毁经历8个钩子阶段，每个阶段可执行特定逻辑",
          "details": [
            {
              "id": "生命周期钩子-13-0-1-d0",
              "tag": "beforeCreate",
              "desc": "实例刚初始化data/methods均不可用"
            },
            {
              "id": "生命周期钩子-13-0-1-d1",
              "tag": "created",
              "desc": "实例创建完成data/methods可访问但DOM未挂载，适合发起异步请求"
            },
            {
              "id": "生命周期钩子-13-0-1-d2",
              "tag": "beforeMount",
              "desc": "模板编译完成虚拟DOM已生成但未渲染"
            },
            {
              "id": "生命周期钩子-13-0-1-d3",
              "tag": "mounted",
              "desc": "真实DOM挂载完成可操作DOM初始化第三方库"
            },
            {
              "id": "生命周期钩子-13-0-1-d4",
              "tag": "beforeUpdate",
              "desc": "数据变化后DOM更新前（beforeUpdate的详细说明：生命周期钩子中关于beforeUpdate的内容）"
            },
            {
              "id": "生命周期钩子-13-0-1-d5",
              "tag": "updated",
              "desc": "DOM重新渲染完成（updated的详细说明：生命周期钩子中关于updated的内容）"
            },
            {
              "id": "生命周期钩子-13-0-1-d6",
              "tag": "beforeDestroy",
              "desc": "实例销毁前适合清理定时器/解绑事件"
            },
            {
              "id": "生命周期钩子-13-0-1-d7",
              "tag": "destroyed",
              "desc": "实例完全销毁（destroyed的详细说明：生命周期钩子中关于destroyed的内容）"
            }
          ]
        },
        {
          "id": "组件通信方式-13-0-2",
          "tag": "组件通信方式",
          "desc": "Vue2提供多种组件间通信机制，适用场景各异",
          "details": [
            {
              "id": "组件通信方式-13-0-2-d0",
              "tag": "props/$emit",
              "desc": "父子组件基础通信（props/$emit的详细说明：组件通信方式中关于props/$emit的内容）"
            },
            {
              "id": "组件通信方式-13-0-2-d1",
              "tag": "$parent/$children",
              "desc": "直接访问父/子实例，耦合度高不推荐"
            },
            {
              "id": "组件通信方式-13-0-2-d2",
              "tag": "provide/inject",
              "desc": "祖先provide数据后代inject接收适合深层嵌套"
            },
            {
              "id": "组件通信方式-13-0-2-d3",
              "tag": "EventBus",
              "desc": "空Vue实例作为事件中心适合兄弟组件，大型项目难维护"
            },
            {
              "id": "组件通信方式-13-0-2-d4",
              "tag": "$refs",
              "desc": "直接获取子组件实例或DOM元素"
            },
            {
              "id": "组件通信方式-13-0-2-d5",
              "tag": "Vuex",
              "desc": "全局状态管理适合大型项目多组件共享状态"
            }
          ]
        },
        {
          "id": "computedvswatch-13-0-3",
          "tag": "computed vs watch",
          "desc": "computed计算属性与watch侦听器都是响应式依赖追踪机制但用途不同",
          "details": [
            {
              "id": "computedvswatch-13-0-3-d0",
              "tag": "computed",
              "desc": "基于依赖缓存，依赖不变不重新计算必须有返回值适合派生数据"
            },
            {
              "id": "computedvswatch-13-0-3-d1",
              "tag": "watch",
              "desc": "无缓存数据变化即执行回调适合异步操作或开销较大逻辑"
            },
            {
              "id": "computedvswatch-13-0-3-d2",
              "tag": "watch配置",
              "desc": "immediate:true立即执行；deep:true深层监听(性能开销大)"
            },
            {
              "id": "computedvswatch-13-0-3-d3",
              "tag": "面试要点",
              "desc": "computed支持getter/setter；watch可用字符串监听'obj.key'"
            }
          ]
        },
        {
          "id": "指令系统-13-0-4",
          "tag": "指令系统",
          "desc": "Vue2内置核心指令实现条件渲染、列表渲染和双向绑定",
          "details": [
            {
              "id": "指令系统-13-0-4-d0",
              "tag": "v-if vs v-show",
              "desc": "v-if条件false时DOM不渲染(v-show通过display切换)"
            },
            {
              "id": "指令系统-13-0-4-d1",
              "tag": "v-for",
              "desc": "必须加:key辅助Diff算法复用节点；与v-if同级时v-for优先级更高"
            },
            {
              "id": "指令系统-13-0-4-d2",
              "tag": "v-model",
              "desc": "双向绑定语法糖本质是:value+@input，可通过model选项自定义prop/event"
            },
            {
              "id": "指令系统-13-0-4-d3",
              "tag": "自定义指令",
              "desc": "五个钩子bind/inserted/update/componentUpdated/unbind"
            }
          ]
        },
        {
          "id": "组件化与插槽-13-0-5",
          "tag": "组件化与插槽",
          "desc": "组件是Vue2最核心的抽象单位，插槽机制实现内容分发与组件复用",
          "details": [
            {
              "id": "组件化与插槽-13-0-5-d0",
              "tag": "默认插槽",
              "desc": "<slot>作为内容分发出口（默认插槽的详细说明：组件化与插槽中关于默认插槽的内容）"
            },
            {
              "id": "组件化与插槽-13-0-5-d1",
              "tag": "具名插槽",
              "desc": "<slot name='xxx'>配合<template v-slot:xxx>或简写#xxx"
            },
            {
              "id": "组件化与插槽-13-0-5-d2",
              "tag": "作用域插槽",
              "desc": "<slot :data='xxx'>将子组件数据传出父组件用v-slot接收"
            },
            {
              "id": "组件化与插槽-13-0-5-d3",
              "tag": "组件注册",
              "desc": "全局Vue.component()、局部components选项按需引入"
            }
          ]
        },
        {
          "id": "模板编译原理-13-0-6",
          "tag": "模板编译原理",
          "desc": "Vue2将template模板字符串编译为render函数经历三个阶段",
          "details": [
            {
              "id": "模板编译原理-13-0-6-d0",
              "tag": "解析(parse)",
              "desc": "template字符串解析为AST抽象语法树"
            },
            {
              "id": "模板编译原理-13-0-6-d1",
              "tag": "优化(optimize)",
              "desc": "遍历AST标记静态节点和静态根节点Diff时跳过"
            },
            {
              "id": "模板编译原理-13-0-6-d2",
              "tag": "生成(generate)",
              "desc": "将优化后AST转换为render函数代码字符串"
            },
            {
              "id": "模板编译原理-13-0-6-d3",
              "tag": "runtime+compiler vs runtime-only",
              "desc": "含compiler可运行时编译，runtime-only依赖预编译体积更小"
            }
          ]
        }
      ]
    },
    {
      "id": "13-2-vuex-状态管理-13-1",
      "title": "13.2 Vuex 状态管理",
      "points": [
        {
          "id": "核心概念-13-1-0",
          "tag": "核心概念",
          "desc": "Vuex由State/Getter/Mutation/Action/Module五个核心部分组成统一状态树",
          "details": [
            {
              "id": "核心概念-13-1-0-d0",
              "tag": "State",
              "desc": "单一状态树唯一数据源通过this.$store.state或mapState访问"
            },
            {
              "id": "核心概念-13-1-0-d1",
              "tag": "Getter",
              "desc": "派生计算属性从state派出新状态类似computed"
            },
            {
              "id": "核心概念-13-1-0-d2",
              "tag": "Mutation",
              "desc": "唯一修改state的方式必须是同步函数通过commit触发"
            },
            {
              "id": "核心概念-13-1-0-d3",
              "tag": "Action",
              "desc": "提交mutation而非直接修改state可包含异步操作通过dispatch触发"
            },
            {
              "id": "核心概念-13-1-0-d4",
              "tag": "Module",
              "desc": "将store分割成模块每个模块拥有独立的state/mutation/action/getter"
            }
          ]
        },
        {
          "id": "数据流转单向-13-1-1",
          "tag": "数据流转单向",
          "desc": "Vuex遵循单向数据流原则：View→Action→Mutation→State→View",
          "details": [
            {
              "id": "数据流转单向-13-1-1-d0",
              "tag": "组件",
              "desc": "组件通过dispatch触发Action(异步操作如API请求)"
            },
            {
              "id": "数据流转单向-13-1-1-d1",
              "tag": "Action内部",
              "desc": "Action内部通过commit提交Mutation(同步修改state)"
            },
            {
              "id": "数据流转单向-13-1-1-d2",
              "tag": "Mutation",
              "desc": "Mutation是唯一合法修改State的入口保证状态变更可追踪"
            },
            {
              "id": "数据流转单向-13-1-1-d3",
              "tag": "State变化",
              "desc": "State变化触发View重新渲染形成闭环"
            },
            {
              "id": "数据流转单向-13-1-1-d4",
              "tag": "严格模式下直接",
              "desc": "严格模式下直接修改state将抛出错误"
            }
          ]
        },
        {
          "id": "mutationvsaction-13-1-2",
          "tag": "Mutation vs Action",
          "desc": "Mutation和Action分别负责同步和异步状态变更，面试常考区分要点",
          "details": [
            {
              "id": "mutationvsaction-13-1-2-d0",
              "tag": "Mutation必须同步执行",
              "desc": "DevTools依赖mutation记录状态快照"
            },
            {
              "id": "mutationvsaction-13-1-2-d1",
              "tag": "Action可异步执行",
              "desc": "最终仍通过commit提交mutation修改state"
            },
            {
              "id": "mutationvsaction-13-1-2-d2",
              "tag": "Action返回Promise",
              "desc": "dispatch返回action函数返回值可链式调用"
            },
            {
              "id": "mutationvsaction-13-1-2-d3",
              "tag": "Mutation Type常量",
              "desc": "推荐用常量替代字符串事件类型便于维护"
            }
          ]
        },
        {
          "id": "module动态注册-13-1-3",
          "tag": "Module 动态注册",
          "desc": "大型项目中Vuex模块可按需动态注册与卸载实现按路由懒加载",
          "details": [
            {
              "id": "module动态注册-13-1-3-d0",
              "tag": "store.registerModule('moduleName',module)：运行时动态注册",
              "desc": "registerModule按需加载Vuex模块，配合路由懒加载减少首屏体积，模块含state/mutations/actions/getters完整定义"
            },
            {
              "id": "module动态注册-13-1-3-d1",
              "tag": "store.unregisterModule('moduleName')：卸载已注册模块",
              "desc": "unregisterModule卸载动态注册模块释放内存，路由离开时卸载对应模块保持Store精简，不可卸载静态注册模块"
            },
            {
              "id": "module动态注册-13-1-3-d2",
              "tag": "namespaced:true",
              "desc": "模块启用命名空间后getter/action/mutation自动带模块路径前缀"
            },
            {
              "id": "module动态注册-13-1-3-d3",
              "tag": "动态模块访问",
              "desc": "mapState('moduleName',[...])或store.state.moduleName"
            }
          ]
        },
        {
          "id": "持久化方案-13-1-4",
          "tag": "持久化方案",
          "desc": "Vuex状态默认存储在内存中页面刷新后丢失需持久化方案保留关键状态",
          "details": [
            {
              "id": "持久化方案-13-1-4-d0",
              "tag": "vuex-persistedstate插件",
              "desc": "自动将state同步到localStorage/sessionStorage"
            },
            {
              "id": "持久化方案-13-1-4-d1",
              "tag": "配置项",
              "desc": "key指定存储键名、paths指定需持久化的state路径、storage切换存储引擎"
            },
            {
              "id": "持久化方案-13-1-4-d2",
              "tag": "自定义storage",
              "desc": "可实现IndexedDB/Cookie等只需实现getItem/setItem/removeItem"
            },
            {
              "id": "持久化方案-13-1-4-d3",
              "tag": "安全注意",
              "desc": "敏感数据不建议直接存localStorage可加密或配合Cookie"
            }
          ]
        }
      ]
    },
    {
      "id": "13-3-vue-router-13-2",
      "title": "13.3 Vue Router",
      "points": [
        {
          "id": "路由模式-13-2-0",
          "tag": "路由模式",
          "desc": "Vue Router支持hash/history/abstract三种路由模式",
          "details": [
            {
              "id": "路由模式-13-2-0-d0",
              "tag": "hash模式",
              "desc": "URL带#号通过hashchange事件监听无需服务器配置兼容性最好"
            },
            {
              "id": "路由模式-13-2-0-d1",
              "tag": "history模式",
              "desc": "URL无#号利用pushState/popstate需服务器配置fallback到index.html"
            },
            {
              "id": "路由模式-13-2-0-d2",
              "tag": "abstract模式",
              "desc": "不依赖浏览器环境使用内存栈适用于Node.js/SSR"
            },
            {
              "id": "路由模式-13-2-0-d3",
              "tag": "history模式nginx配置",
              "desc": "try_files $uri $uri/ /index.html避免刷新404"
            }
          ]
        },
        {
          "id": "导航守卫-13-2-1",
          "tag": "导航守卫",
          "desc": "路由导航守卫提供全局/路由独享/组件内三个层级拦截控制路由跳转",
          "details": [
            {
              "id": "导航守卫-13-2-1-d0",
              "tag": "全局前置守卫router.beforeEach",
              "desc": "登录验证、权限拦截最常用（全局前置守卫router.beforeEach的详细说明：导航守卫中关于全局前置守卫router.beforeEach的内容）"
            },
            {
              "id": "导航守卫-13-2-1-d1",
              "tag": "全局后置钩子router.afterEach",
              "desc": "无next不可改变导航适合页面标题/埋点"
            },
            {
              "id": "导航守卫-13-2-1-d2",
              "tag": "路由独享守卫beforeEnter写在路由配置中",
              "desc": "beforeEnter守卫定义在路由配置对象的beforeEnter字段中，仅对该路由生效，不像全局守卫影响所有路由"
            },
            {
              "id": "导航守卫-13-2-1-d3",
              "tag": "组件内守卫",
              "desc": "beforeRouteEnter/beforeRouteUpdate/beforeRouteLeave"
            },
            {
              "id": "导航守卫-13-2-1-d4",
              "tag": "守卫执行顺序",
              "desc": "beforeEach→beforeRouteEnter→afterEach"
            }
          ]
        },
        {
          "id": "动态路由与懒加载-13-2-2",
          "tag": "动态路由与懒加载",
          "desc": "动态路由匹配实现参数化路径路由懒加载优化首屏加载性能",
          "details": [
            {
              "id": "动态路由与懒加载-13-2-2-d0",
              "tag": "动态路径参数",
              "desc": "path:'/user/:id'通过this.$route.params.id获取"
            },
            {
              "id": "动态路由与懒加载-13-2-2-d1",
              "tag": "懒加载",
              "desc": "component:()=>import('@/views/User.vue')Webpack自动代码分割"
            },
            {
              "id": "动态路由与懒加载-13-2-2-d2",
              "tag": "分组打包",
              "desc": "()=>import(/* webpackChunkName:'user' */ '@/views/User.vue')"
            },
            {
              "id": "动态路由与懒加载-13-2-2-d3",
              "tag": "404路由",
              "desc": "path:'*'作为兜底匹配（404路由的详细说明：动态路由与懒加载中关于404路由的内容）"
            }
          ]
        },
        {
          "id": "嵌套路由-13-2-3",
          "tag": "嵌套路由",
          "desc": "通过children配置实现路由嵌套对应组件内<router-view>层级嵌套",
          "details": [
            {
              "id": "嵌套路由-13-2-3-d0",
              "tag": "children配置",
              "desc": "路由对象内children数组定义子路由"
            },
            {
              "id": "嵌套路由-13-2-3-d1",
              "tag": "嵌套渲染",
              "desc": "父组件<router-view>渲染父路由子路由组件内再<router-view>"
            },
            {
              "id": "嵌套路由-13-2-3-d2",
              "tag": "默认子路由",
              "desc": "children中path:''的子路由在父路由匹配时自动渲染"
            },
            {
              "id": "嵌套路由-13-2-3-d3",
              "tag": "命名视图",
              "desc": "<router-view name='sidebar'>配合components多组件同时渲染"
            }
          ]
        },
        {
          "id": "路由传参-13-2-4",
          "tag": "路由传参",
          "desc": "路由间传递数据有params和query两种主要方式",
          "details": [
            {
              "id": "路由传参-13-2-4-d0",
              "tag": "params动态参数",
              "desc": "路由声明path:'/user/:id'URL显示/user/123"
            },
            {
              "id": "路由传参-13-2-4-d1",
              "tag": "query查询参数",
              "desc": "URL显示/user?id=123$this.$route.query.id获取"
            },
            {
              "id": "路由传参-13-2-4-d2",
              "tag": "编程式导航传参",
              "desc": "this.$router.push({name:'User',params:{id:123}})"
            },
            {
              "id": "路由传参-13-2-4-d3",
              "tag": "props解耦",
              "desc": "路由配置props:true将params自动转为组件props"
            }
          ]
        },
        {
          "id": "keep-alive缓存-13-2-5",
          "tag": "keep-alive缓存",
          "desc": "<keep-alive>包裹<router-view>缓存组件实例避免重复渲染提升性能",
          "details": [
            {
              "id": "keep-alive缓存-13-2-5-d0",
              "tag": "基本用法",
              "desc": "<keep-alive><router-view/></keep-alive>切换路由时不销毁组件"
            },
            {
              "id": "keep-alive缓存-13-2-5-d1",
              "tag": "include/exclude",
              "desc": "指定缓存或排除的组件名如include='UserList,OrderList'"
            },
            {
              "id": "keep-alive缓存-13-2-5-d2",
              "tag": "max属性",
              "desc": "限制最大缓存实例数超出时LRU算法销毁最久未访问的组件"
            },
            {
              "id": "keep-alive缓存-13-2-5-d3",
              "tag": "activated/deactivated",
              "desc": "被缓存组件独有的生命周期钩子（activated/deactivated的详细说明：keep-alive缓存中关于activated/deactivated的内容）"
            }
          ]
        }
      ]
    },
    {
      "id": "13-4-axios-13-3",
      "title": "13.4 Axios",
      "points": [
        {
          "id": "基本用法-13-3-0",
          "tag": "基本用法",
          "desc": "Axios是基于Promise的HTTP客户端支持浏览器和Node.js双端使用",
          "details": [
            {
              "id": "基本用法-13-3-0-d0",
              "tag": "GET",
              "desc": "axios.get('/api/user',{params:{id:1}})"
            },
            {
              "id": "基本用法-13-3-0-d1",
              "tag": "POST",
              "desc": "axios.post('/api/user',data)默认JSON请求体"
            },
            {
              "id": "基本用法-13-3-0-d2",
              "tag": "响应结构",
              "desc": "{data,status,statusText,headers,config,request}data为服务器返回体"
            },
            {
              "id": "基本用法-13-3-0-d3",
              "tag": "并发请求",
              "desc": "axios.all([req1,req2]).then(axios.spread((res1,res2)=>{}))"
            }
          ]
        },
        {
          "id": "拦截器-13-3-1",
          "tag": "拦截器",
          "desc": "Axios请求/响应拦截器在请求发出前和响应返回后统一处理逻辑",
          "details": [
            {
              "id": "拦截器-13-3-1-d0",
              "tag": "请求拦截器",
              "desc": "统一添加token/签名/时间戳/Content-Type"
            },
            {
              "id": "拦截器-13-3-1-d1",
              "tag": "响应拦截器",
              "desc": "统一处理错误码/业务错误码/token过期跳转"
            },
            {
              "id": "拦截器-13-3-1-d2",
              "tag": "拦截器执行顺序",
              "desc": "请求按添加顺序先内后外，响应按添加顺序先外后内"
            },
            {
              "id": "拦截器-13-3-1-d3",
              "tag": "移除拦截器",
              "desc": "axios.interceptors.request.eject(myInterceptor)"
            }
          ]
        },
        {
          "id": "请求取消-13-3-2",
          "tag": "请求取消",
          "desc": "Axios支持通过CancelToken取消正在进行中的HTTP请求",
          "details": [
            {
              "id": "请求取消-13-3-2-d0",
              "tag": "CancelToken方式",
              "desc": "const source=axios.CancelToken.source(); source.cancel('取消原因')"
            },
            {
              "id": "请求取消-13-3-2-d1",
              "tag": "典型场景",
              "desc": "路由切换取消未完成请求防数据错乱、搜索框防抖取消旧请求"
            },
            {
              "id": "请求取消-13-3-2-d2",
              "tag": "AbortController(现代方案)",
              "desc": "Axios 0.22+支持signal参数配合AbortController"
            },
            {
              "id": "请求取消-13-3-2-d3",
              "tag": "批量取消",
              "desc": "维护请求队列Map遍历调用每个source.cancel()"
            }
          ]
        },
        {
          "id": "封装实践-13-3-3",
          "tag": "封装实践",
          "desc": "生产项目中Axios需要封装统一配置错误处理重试和请求管理",
          "details": [
            {
              "id": "封装实践-13-3-3-d0",
              "tag": "创建实例",
              "desc": "axios.create({baseURL,timeout:10000,headers})"
            },
            {
              "id": "封装实践-13-3-3-d1",
              "tag": "baseURL配置",
              "desc": "通过环境变量切换API地址(process.env.VUE_APP_BASE_API)"
            },
            {
              "id": "封装实践-13-3-3-d2",
              "tag": "统一错误处理",
              "desc": "响应拦截器按status分类(401跳登录/403无权限/500服务端错误)"
            },
            {
              "id": "封装实践-13-3-3-d3",
              "tag": "请求重试",
              "desc": "响应拦截器判断重试次数递归调用并递减retryCount"
            },
            {
              "id": "封装实践-13-3-3-d4",
              "tag": "Loading管理",
              "desc": "请求拦截器开启响应拦截器关闭需计数器管理N个并发请求"
            }
          ]
        },
        {
          "id": "跨域处理-13-3-4",
          "tag": "跨域处理",
          "desc": "前后端分离项目中Axios跨域请求需代理或CORS方案解决",
          "details": [
            {
              "id": "跨域处理-13-3-4-d0",
              "tag": "开发代理",
              "desc": "vue.config.js配置devServer.proxy将/api请求代理到后端域名"
            },
            {
              "id": "跨域处理-13-3-4-d1",
              "tag": "生产代理",
              "desc": "nginx反向代理location /api {proxy_pass http://backend;}"
            },
            {
              "id": "跨域处理-13-3-4-d2",
              "tag": "CORS",
              "desc": "后端设置Access-Control-Allow-Origin/Method/Headers响应头"
            },
            {
              "id": "跨域处理-13-3-4-d3",
              "tag": "withCredentials",
              "desc": "axios配置withCredentials:true允许跨域请求携带Cookie"
            }
          ]
        }
      ]
    }
  ]
};

// vue3.js — 十四、Vue3 生态体系 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['vue3'] = {
  "id": "vue3",
  "title": "十四、Vue3 生态体系",
  "tag": "Vue3",
  "order": 14,
  "icon": "💚",
  "cssIndex": 13,
  "subs": [
    {
      "id": "14-1-vue3-核心-14-0",
      "title": "14.1 Vue3 核心",
      "points": [
        {
          "id": "compositionapivsoptionsapi-14-0-0",
          "tag": "Composition API vs Options API",
          "desc": "Composition API基于函数组合逻辑，Options API基于对象选项组织代码；Composition API通过setup函数将相关逻辑聚合而非按选项类型分散更利于逻辑复用",
          "details": [
            {
              "id": "compositionapivsoptionsapi-14-0-0-d0",
              "tag": "Composition API核心",
              "desc": "setup()入口、ref/reactive响应式、watch/watchEffect副作用"
            },
            {
              "id": "compositionapivsoptionsapi-14-0-0-d1",
              "tag": "逻辑复用方式",
              "desc": "自定义Hook函数提取复用逻辑替代mixin(命名冲突/来源不清)"
            },
            {
              "id": "compositionapivsoptionsapi-14-0-0-d2",
              "tag": "setup执行时机",
              "desc": "组件创建之前beforeCreate之前无法访问this"
            },
            {
              "id": "compositionapivsoptionsapi-14-0-0-d3",
              "tag": "Composition API更",
              "desc": "Composition API更适合复杂组件和逻辑复用场景"
            }
          ]
        },
        {
          "id": "响应式原理proxyvsdefineproperty-14-0-1",
          "tag": "响应式原理Proxy vs defineProperty",
          "desc": "Vue3使用Proxy替代Vue2的Object.defineProperty实现响应式；Proxy可直接拦截对象全部操作无需递归遍历属性逐一劫持；Proxy支持数组索引修改和length变化监听",
          "details": [
            {
              "id": "响应式原理proxyvsdefineproperty-14-0-1-d0",
              "tag": "Proxy拦截13种操作get/set/has/deleteProperty/ownKeys等覆盖全面",
              "desc": "Proxy可拦截属性读写、删除、枚举、函数调用等13种操作，对比defineProperty只能拦截get/set两种"
            },
            {
              "id": "响应式原理proxyvsdefineproperty-14-0-1-d1",
              "tag": "reactive内部实现",
              "desc": "创建Proxy代理对象get通过track收集依赖set通过trigger触发更新"
            },
            {
              "id": "响应式原理proxyvsdefineproperty-14-0-1-d2",
              "tag": "ref实现",
              "desc": "基本类型用class RefImpl包装+自定义get/set访问器劫持"
            },
            {
              "id": "响应式原理proxyvsdefineproperty-14-0-1-d3",
              "tag": "性能优势",
              "desc": "Proxy惰性响应式只在访问嵌套属性时才递归代理子对象"
            }
          ]
        },
        {
          "id": "ref与reactive-14-0-2",
          "tag": "ref与reactive",
          "desc": "ref用于基本类型和任意类型值的响应式包装reactive仅用于对象类型的深层响应式代理；ref通过.value访问修改值reactive直接访问属性无需.value",
          "details": [
            {
              "id": "ref与reactive-14-0-2-d0",
              "tag": "ref模板中自动解包",
              "desc": "template访问ref无需.value但setup中必须.value"
            },
            {
              "id": "ref与reactive-14-0-2-d1",
              "tag": "reactive局限性",
              "desc": "无法替换整个对象(代理绑定丢失)无法对基本类型使用"
            },
            {
              "id": "ref与reactive-14-0-2-d2",
              "tag": "toRefs原理",
              "desc": "为reactive对象每个属性创建ObjectRefImpl保持响应式引用关系"
            },
            {
              "id": "ref与reactive-14-0-2-d3",
              "tag": "shallowRef/shallowReactive",
              "desc": "仅表层响应式不深度代理嵌套对象"
            }
          ]
        },
        {
          "id": "生命周期与setup函数-14-0-3",
          "tag": "生命周期与setup函数",
          "desc": "Vue3组合式API生命周期钩子前缀on：onMounted/onUpdated/onUnmounted等；setup()替代beforeCreate和created无法访问this",
          "details": [
            {
              "id": "生命周期与setup函数-14-0-3-d0",
              "tag": "对应关系",
              "desc": "beforeCreate→setup()、created→setup()、mounted→onMounted"
            },
            {
              "id": "生命周期与setup函数-14-0-3-d1",
              "tag": "setup接收props和context(attrs/slots/emit/expose)两个参数",
              "desc": "setup(props,context)中props是响应式不可修改；context.attrs含未声明props的属性，emit触发自定义事件替代this.$emit"
            },
            {
              "id": "生命周期与setup函数-14-0-3-d2",
              "tag": "生命周期钩子必须在setup同步",
              "desc": "生命周期钩子必须在setup同步调用期间注册异步回调中注册无效"
            },
            {
              "id": "生命周期与setup函数-14-0-3-d3",
              "tag": "Vue3销毁钩子命名语义更准确",
              "desc": "unmount替代destroy"
            }
          ]
        },
        {
          "id": "fragment-teleport-suspense-14-0-4",
          "tag": "Fragment/Teleport/Suspense",
          "desc": "Fragment允许组件模板返回多个根节点；Teleport将组件内容渲染到DOM任意位置；Suspense协调异步组件加载状态",
          "details": [
            {
              "id": "fragment-teleport-suspense-14-0-4-d0",
              "tag": "Fragment原理",
              "desc": "编译器生成Fragment类型VNode包含多个子节点数组"
            },
            {
              "id": "fragment-teleport-suspense-14-0-4-d1",
              "tag": "Teleport",
              "desc": "to属性指定目标容器disabled属性可禁用传送就地渲染"
            },
            {
              "id": "fragment-teleport-suspense-14-0-4-d2",
              "tag": "Suspense",
              "desc": "支持async setup()组件和defineAsyncComponent懒加载组件"
            },
            {
              "id": "fragment-teleport-suspense-14-0-4-d3",
              "tag": "Suspense目前仍为实验性功",
              "desc": "Suspense目前仍为实验性功能生产环境需谨慎"
            }
          ]
        },
        {
          "id": "虚拟dom优化与tree-shaking-14-0-5",
          "tag": "虚拟DOM优化与Tree-shaking",
          "desc": "Vue3虚拟DOM重写引入静态标记(PatchFlag)和静态提升(Block Tree)；编译器分析模板节点类型动态节点标记PatchFlagdiff时仅对比标记节点跳过静态内容",
          "details": [
            {
              "id": "虚拟dom优化与tree-shaking-14-0-5-d0",
              "tag": "PatchFlag类型",
              "desc": "TEXT/CLASS/STYLE/PROPS等位掩码组合高效判断"
            },
            {
              "id": "虚拟dom优化与tree-shaking-14-0-5-d1",
              "tag": "Tree-shaking",
              "desc": "Vue3全局API改为具名导出未使用的API打包时自动移除"
            },
            {
              "id": "虚拟dom优化与tree-shaking-14-0-5-d2",
              "tag": "缓存事件处理器",
              "desc": "绑定的事件函数提升为常量缓存更新时仅对比引用"
            },
            {
              "id": "虚拟dom优化与tree-shaking-14-0-5-d3",
              "tag": "模板编译优化",
              "desc": "v-if/v-for分支提升为独立Block动态子节点扁平化收集"
            }
          ]
        },
        {
          "id": "vue3与vue2差异对比-14-0-6",
          "tag": "Vue3与Vue2差异对比",
          "desc": "Vue3全面重构核心响应式、虚拟DOM和编译器性能提升显著",
          "details": [
            {
              "id": "vue3与vue2差异对比-14-0-6-d0",
              "tag": "性能提升",
              "desc": "初始渲染+55%、更新渲染+33%、内存占用-54%"
            },
            {
              "id": "vue3与vue2差异对比-14-0-6-d1",
              "tag": "API变化",
              "desc": "new Vue()→createApp()、Vue.component→app.component"
            },
            {
              "id": "vue3与vue2差异对比-14-0-6-d2",
              "tag": "移除特性",
              "desc": "$on/$off/$once事件总线、filter过滤器、$children、$destroy"
            },
            {
              "id": "vue3与vue2差异对比-14-0-6-d3",
              "tag": "新增特性",
              "desc": "defineComponent、defineExpose、emits选项、CSS v-bind()动态样式"
            }
          ]
        }
      ]
    },
    {
      "id": "14-2-pinia-状态管理-14-1",
      "title": "14.2 Pinia 状态管理",
      "points": [
        {
          "id": "pinia核心概念state-getter-action-14-1-0",
          "tag": "Pinia核心概念State/Getter/Action",
          "desc": "Pinia由State/Getter/Action三要素组成无Mutation概念；State定义在state函数返回对象中Getter定义在getters对象中Action定义在actions对象中可为async函数",
          "details": [
            {
              "id": "pinia核心概念state-getter-action-14-1-0-d0",
              "tag": "defineStore两种风格",
              "desc": "Options API风格和Setup风格(ref/computed/function定义)"
            },
            {
              "id": "pinia核心概念state-getter-action-14-1-0-d1",
              "tag": "State修改方式",
              "desc": "直接修改、$patch(对象/函数)批量修改、Action内部修改、$reset()重置"
            },
            {
              "id": "pinia核心概念state-getter-action-14-1-0-d2",
              "tag": "Getter可接受state参数和其他getter参数支持返回函数实现参数化getter",
              "desc": "Getter函数签名(state,otherGetters)可引用其他getter；返回函数时实现参数化如getters.filterBy(state)=>(key)=>state.list.filter(...)"
            },
            {
              "id": "pinia核心概念state-getter-action-14-1-0-d3",
              "tag": "Action天然",
              "desc": "Action天然支持async/await内部可通过this访问整个store实例"
            }
          ]
        },
        {
          "id": "piniavsvuex区别-14-1-1",
          "tag": "Pinia vs Vuex区别",
          "desc": "Pinia移除Mutation层简化架构State修改直接通过Action或$patch完成无需Mutation函数；Pinia无需嵌套模块每个defineStore即独立store天然模块化",
          "details": [
            {
              "id": "piniavsvuex区别-14-1-1-d0",
              "tag": "Vuex核心问题",
              "desc": "Mutation冗余、模块嵌套复杂、TypeScript需大量手动类型声明"
            },
            {
              "id": "piniavsvuex区别-14-1-1-d1",
              "tag": "Pinia优势",
              "desc": "扁平化Store无嵌套、$patch替代Mutation+commit、无需namespaced"
            },
            {
              "id": "piniavsvuex区别-14-1-1-d2",
              "tag": "Pinia的Action同时承担Vuex的Mutation(commit)和Action(dispatch)职能",
              "desc": "Pinia统一用Action修改State，无需commit/dispatch区分，同步异步操作均在Action中直接修改state"
            },
            {
              "id": "piniavsvuex区别-14-1-1-d3",
              "tag": "Pinia不再需要dispatch/commit调用方式直接函数调用更直观",
              "desc": "Pinia的Action通过store.xxx()直接调用，无需Vuex的commit/dispatch分发机制，代码更简洁可链式调用"
            }
          ]
        },
        {
          "id": "持久化与插件系统-14-1-2",
          "tag": "持久化与插件系统",
          "desc": "Pinia持久化通过pinia-plugin-persistedstate插件自动将State同步到localStorage/sessionStorage；插件系统通过pinia.use()注册可扩展Store功能",
          "details": [
            {
              "id": "持久化与插件系统-14-1-2-d0",
              "tag": "配置",
              "desc": "persist:{enabled:true,key:'customKey',storage:sessionStorage,paths:['user']}"
            },
            {
              "id": "持久化与插件系统-14-1-2-d1",
              "tag": "插件开发",
              "desc": "函数返回对象可给store添加属性/方法监听$state变化"
            },
            {
              "id": "持久化与插件系统-14-1-2-d2",
              "tag": "$subscribe订阅State变化类似Vuex的subscribe",
              "desc": "Pinia的$subscribe监听State整体变化触发回调，可持久化快照；Vuex的subscribe只监听单个mutation"
            },
            {
              "id": "持久化与插件系统-14-1-2-d3",
              "tag": "自定义serializer/storage实现加密存储等高级策略",
              "desc": "pinia-plugin-persistedstate支持自定义serializer序列化(如加密)和storage目标(如IndexedDB)，不只是简单localStorage"
            }
          ]
        },
        {
          "id": "store组合与跨store通信-14-1-3",
          "tag": "Store组合与跨Store通信",
          "desc": "Pinia支持在Action中直接引入其他Store调用其Action/State实现跨Store组合通信",
          "details": [
            {
              "id": "store组合与跨store通信-14-1-3-d0",
              "tag": "跨Store调用",
              "desc": "在action中调用const userStore=useUserStore(); userStore.logout()"
            },
            {
              "id": "store组合与跨store通信-14-1-3-d1",
              "tag": "组合Store模式",
              "desc": "defineStore内部使用多个Store实例整合逻辑"
            },
            {
              "id": "store组合与跨store通信-14-1-3-d2",
              "tag": "注意点",
              "desc": "Store间循环引用需在Action中延迟引用避免初始化死循环"
            },
            {
              "id": "store组合与跨store通信-14-1-3-d3",
              "tag": "Store组合函数可",
              "desc": "Store组合函数可返回额外计算逻辑不限于现有Store简单拼接"
            }
          ]
        }
      ]
    },
    {
      "id": "14-3-vite-构建工具-14-2",
      "title": "14.3 Vite 构建工具",
      "points": [
        {
          "id": "vite原理基于esm的devserver-14-2-0",
          "tag": "Vite原理基于ESM的Dev Server",
          "desc": "Vite开发服务器利用浏览器原生ESM支持按请求路径即时编译转换模块返回无需预打包整个应用",
          "details": [
            {
              "id": "vite原理基于esm的devserver-14-2-0-d0",
              "tag": "冷启动提速原理",
              "desc": "无需打包整个应用依赖图启动时间与项目规模弱相关"
            },
            {
              "id": "vite原理基于esm的devserver-14-2-0-d1",
              "tag": "模块请求流程",
              "desc": "浏览器import→Vite拦截请求→识别文件类型→转换编译→返回ESM格式代码"
            },
            {
              "id": "vite原理基于esm的devserver-14-2-0-d2",
              "tag": "预打包目的",
              "desc": "第三方npm包多为CJS/UMD格式需转ESM减少HTTP请求合并小依赖"
            },
            {
              "id": "vite原理基于esm的devserver-14-2-0-d3",
              "tag": "esbuild角色",
              "desc": "开发模式用esbuild处理TS/JSX转换比tsc快10-100倍"
            }
          ]
        },
        {
          "id": "vitevswebpack对比-14-2-1",
          "tag": "Vite vs Webpack对比",
          "desc": "Webpack开发模式需预打包全部模块生成bundle后启动dev server项目越大启动越慢；Vite开发模式无bundle按需编译冷启动速度几乎不受项目规模影响",
          "details": [
            {
              "id": "vitevswebpack对比-14-2-1-d0",
              "tag": "冷启动",
              "desc": "Webpack数十秒至分钟级(全量打包)、Vite毫秒至秒级(按需编译)"
            },
            {
              "id": "vitevswebpack对比-14-2-1-d1",
              "tag": "HMR速度",
              "desc": "Webpack随项目增长变慢Vite几乎恒定"
            },
            {
              "id": "vitevswebpack对比-14-2-1-d2",
              "tag": "打包工具",
              "desc": "Webpack自带bundle生产构建、Vite开发esbuild+生产Rollup"
            },
            {
              "id": "vitevswebpack对比-14-2-1-d3",
              "tag": "迁移成本",
              "desc": "配置理念差异较大需逐步适配（迁移成本的详细说明：Vite vs Webpack对比中关于迁移成本的内容）"
            }
          ]
        },
        {
          "id": "rollup生产构建与预优化-14-2-2",
          "tag": "Rollup生产构建与预优化",
          "desc": "Vite生产构建基于Rollup执行利用Rollup成熟的ESM Tree-shaking和代码分割能力产出优化产物",
          "details": [
            {
              "id": "rollup生产构建与预优化-14-2-2-d0",
              "tag": "预优化触发时机",
              "desc": "首次启动、lockfile变更、dependencies变化、--force参数"
            },
            {
              "id": "rollup生产构建与预优化-14-2-2-d1",
              "tag": "预优化策略",
              "desc": "CJS→ESM转换、合并小模块减少请求、esbuild极速处理"
            },
            {
              "id": "rollup生产构建与预优化-14-2-2-d2",
              "tag": "预优化缓存",
              "desc": ".vite/deps目录存储预打包结果缓存文件名基于lockfile哈希"
            },
            {
              "id": "rollup生产构建与预优化-14-2-2-d3",
              "tag": "Rollup Tree-shaking",
              "desc": "Rollup Tree-shaking基于ESM静态分析消除未使用导出"
            }
          ]
        },
        {
          "id": "vite插件系统-14-2-3",
          "tag": "Vite插件系统",
          "desc": "Vite插件体系兼容Rollup插件(生产构建阶段)并扩展独有钩子(开发服务阶段)",
          "details": [
            {
              "id": "vite插件系统-14-2-3-d0",
              "tag": "独有钩子",
              "desc": "configureServer配置dev server、transformIndexHtml转换HTML入口、hotUpdate自定义HMR"
            },
            {
              "id": "vite插件系统-14-2-3-d1",
              "tag": "常用插件",
              "desc": "vite-plugin-vue、@vitejs/plugin-vue-jsx、vite-plugin-svg"
            },
            {
              "id": "vite插件系统-14-2-3-d2",
              "tag": "插件执行顺序",
              "desc": "enforce:'pre'|'post'|默认中间"
            },
            {
              "id": "vite插件系统-14-2-3-d3",
              "tag": "虚拟模块",
              "desc": "插件resolveId返回id+load返回内容可创建虚拟模块"
            }
          ]
        },
        {
          "id": "环境变量与构建优化-14-2-4",
          "tag": "环境变量与构建优化",
          "desc": "Vite环境变量通过.env文件加载暴露给客户端的变量必须VITE_前缀；import.meta.env在代码中访问环境变量",
          "details": [
            {
              "id": "环境变量与构建优化-14-2-4-d0",
              "tag": "环境变量优先级",
              "desc": ".env.[mode].local>.env.[mode]>.env.local>.env"
            },
            {
              "id": "环境变量与构建优化-14-2-4-d1",
              "tag": "VITE_前缀原理",
              "desc": "仅包含VITE_开头的变量防止服务端敏感信息泄露"
            },
            {
              "id": "环境变量与构建优化-14-2-4-d2",
              "tag": "CSS处理",
              "desc": "PostCSS自动生效、CSS Modules(.module.css)、预处理器自动安装"
            },
            {
              "id": "环境变量与构建优化-14-2-4-d3",
              "tag": "构建优化",
              "desc": "manualChunks自定义代码分割、build.minify指定压缩工具(esbuild更快)"
            }
          ]
        }
      ]
    },
    {
      "id": "14-4-vue3-进阶-14-3",
      "title": "14.4 Vue3 进阶",
      "points": [
        {
          "id": "自定义hooks实践-14-3-0",
          "tag": "自定义Hooks实践",
          "desc": "自定义Hook是Composition API的核心复用模式将组件逻辑提取为独立可复用函数；Hook函数以use前缀命名内部使用ref/computed/watch等组合API组合逻辑",
          "details": [
            {
              "id": "自定义hooks实践-14-3-0-d0",
              "tag": "典型Hook结构",
              "desc": "export function useXxx(params){const state=ref();return{state,method};}"
            },
            {
              "id": "自定义hooks实践-14-3-0-d1",
              "tag": "常用Hook场景",
              "desc": "数据请求(useFetch)、表单验证(useForm)、鼠标/键盘事件(useMouse)"
            },
            {
              "id": "自定义hooks实践-14-3-0-d2",
              "tag": "Hook与组件通信",
              "desc": "Hook可接受ref/computed作为参数实现父子逻辑联动"
            },
            {
              "id": "自定义hooks实践-14-3-0-d3",
              "tag": "Hook设计原则",
              "desc": "单一职责、显式参数(不依赖this)、返回值最小暴露"
            }
          ]
        },
        {
          "id": "性能优化策略-14-3-1",
          "tag": "性能优化策略",
          "desc": "Vue3性能优化涵盖渲染层、组件层和架构层多维度策略",
          "details": [
            {
              "id": "性能优化策略-14-3-1-d0",
              "tag": "Virtual Scroll虚拟滚动仅渲染可视区域DOM节点解决长列表性能瓶颈",
              "desc": "虚拟滚动通过计算scrollTop+offset+itemHeight确定可视区间，只渲染可见DOM节点，万级数据仅维护数十个DOM"
            },
            {
              "id": "性能优化策略-14-3-1-d1",
              "tag": "keep-alive缓存组件实例",
              "desc": "keep-alive缓存组件实例避免重复创建销毁include/exclude/max控制策略"
            },
            {
              "id": "性能优化策略-14-3-1-d2",
              "tag": "异步组件defineAsyncComponent延迟加载非首屏组件配合Suspense处理加载状态",
              "desc": "defineAsyncComponent配合import()动态导入，Suspense提供loading/error/fallback插槽，非首屏组件按需加载减少首屏体积"
            },
            {
              "id": "性能优化策略-14-3-1-d3",
              "tag": "v-once/v-memo标记静态内容跳过更新diff",
              "desc": "v-once让节点只渲染一次后续跳过diff；v-memo接收依赖数组值不变时跳过整个子树patch，大幅减少比对开销"
            },
            {
              "id": "性能优化策略-14-3-1-d4",
              "tag": "shallowRef/shallowReactive仅表层响应式避免大对象深度代理开销",
              "desc": "shallowRef只在.value赋值时触发更新不追踪内部属性；shallowReactive只代理顶层属性，深层修改不触发响应式"
            }
          ]
        },
        {
          "id": "ssr与nuxt3-14-3-2",
          "tag": "SSR与Nuxt3",
          "desc": "Vue3 SSR将组件渲染为服务端HTML字符串发送客户端hydration接管DOM恢复交互",
          "details": [
            {
              "id": "ssr与nuxt3-14-3-2-d0",
              "tag": "SSR优势",
              "desc": "首屏加载快、SEO友好（SSR优势的详细说明：SSR与Nuxt3中关于SSR优势的内容）"
            },
            {
              "id": "ssr与nuxt3-14-3-2-d1",
              "tag": "SSR关键问题",
              "desc": "服务端无DOM/BOM、生命周期仅执行到onMounted之前"
            },
            {
              "id": "ssr与nuxt3-14-3-2-d2",
              "tag": "Nuxt3核心特性",
              "desc": "Nitro服务引擎、auto-imports自动导入、layers模块化扩展"
            },
            {
              "id": "ssr与nuxt3-14-3-2-d3",
              "tag": "ISR增量静态生成",
              "desc": "首次SSR生成静态页面缓存后续请求返回缓存页面"
            }
          ]
        },
        {
          "id": "typescript集成-14-3-3",
          "tag": "TypeScript集成",
          "desc": "Vue3全面TypeScript重写提供原生TS支持",
          "details": [
            {
              "id": "typescript集成-14-3-3-d0",
              "tag": "defineComponent",
              "desc": "为Options API组件提供类型推断"
            },
            {
              "id": "typescript集成-14-3-3-d1",
              "tag": "defineProps/defineEmits",
              "desc": "SFC编译器宏基于泛型声明推断类型仅限<script setup>"
            },
            {
              "id": "typescript集成-14-3-3-d2",
              "tag": "ref类型",
              "desc": "ref<string>('hello')指定泛型"
            },
            {
              "id": "typescript集成-14-3-3-d3",
              "tag": "类型工具",
              "desc": "PropType<T>定义复杂prop类型、ExtractPropTypes提取运行时类型"
            }
          ]
        },
        {
          "id": "响应式api进阶-14-3-4",
          "tag": "响应式API进阶",
          "desc": "computed返回只读ref自动追踪依赖缓存计算值；watch精确监听特定响应式源执行副作用回调",
          "details": [
            {
              "id": "响应式api进阶-14-3-4-d0",
              "tag": "computed缓存机制",
              "desc": "依赖不变时多次访问返回同一缓存值惰性求值"
            },
            {
              "id": "响应式api进阶-14-3-4-d1",
              "tag": "watch vs watchEffect",
              "desc": "watch需明确指定监听源默认惰性，watchEffect自动收集依赖立即执行"
            },
            {
              "id": "响应式api进阶-14-3-4-d2",
              "tag": "watch配置",
              "desc": "deep:true深度监听、immediate:true立即执行、flush:'post'|'sync'|'pre'"
            },
            {
              "id": "响应式api进阶-14-3-4-d3",
              "tag": "高级API",
              "desc": "shallowReactive表层响应式、toRaw还原原始对象、markRaw阻止代理"
            }
          ]
        },
        {
          "id": "自定义渲染器-14-3-5",
          "tag": "自定义渲染器",
          "desc": "Vue3通过createRenderer API可创建自定义渲染器将Vue组件渲染到任意目标平台",
          "details": [
            {
              "id": "自定义渲染器-14-3-5-d0",
              "tag": "createRenderer",
              "desc": "传入nodeOps(节点操作接口)+patchOptions(属性比对逻辑)"
            },
            {
              "id": "自定义渲染器-14-3-5-d1",
              "tag": "nodeOps核心接口",
              "desc": "createElement/insertChild/removeChild/setElementText/setElementProp"
            },
            {
              "id": "自定义渲染器-14-3-5-d2",
              "tag": "实际案例",
              "desc": "vue-native渲染到原生组件、@vue-three渲染到Three.js 3D场景"
            },
            {
              "id": "自定义渲染器-14-3-5-d3",
              "tag": "渲染器与运行时分离",
              "desc": "核心逻辑复用率极高跨平台只需600行适配层"
            }
          ]
        }
      ]
    },
    {
      "id": "14-5-vue-router-4-14-4",
      "title": "14.5 Vue Router 4",
      "points": [
        {
          "id": "路由模式与createrouter-14-4-0",
          "tag": "路由模式与createRouter",
          "desc": "Vue Router 4为Vue3专属路由库使用createRouter创建路由实例支持hash/history/abstract三种模式",
          "details": [
            {
              "id": "路由模式与createrouter-14-4-0-d0",
              "tag": "createRouter取代new VueRouter",
              "desc": "import{createRouter,createWebHistory}from vue-router"
            },
            {
              "id": "路由模式与createrouter-14-4-0-d1",
              "tag": "createWebHistory()对应history模式URL无#号需服务器配置fallback",
              "desc": "history模式利用HTML5 pushState/replaceState生成干净URL，需服务器配置所有路径回退到index.html防止404"
            },
            {
              "id": "路由模式与createrouter-14-4-0-d2",
              "tag": "createWebHashHistory()对应hash模式URL带#号兼容性好无需服务器配置",
              "desc": "hash模式通过location.hash+hashchange事件路由，URL带#号SEO不友好但无需服务器fallback配置兼容性最佳"
            },
            {
              "id": "路由模式与createrouter-14-4-0-d3",
              "tag": "createMemoryHistory()对应abstract模式用于SSR和测试环境",
              "desc": "abstract模式在内存中维护路由历史不依赖浏览器URL，SSR时无window对象可用，测试环境隔离URL副作用"
            },
            {
              "id": "路由模式与createrouter-14-4-0-d4",
              "tag": "history模式nginx配置",
              "desc": "try_files $uri $uri/ /index.html避免刷新404"
            }
          ]
        },
        {
          "id": "导航守卫全面升级-14-4-1",
          "tag": "导航守卫全面升级",
          "desc": "Vue Router 4导航守卫API更简洁全局守卫返回值语义更明确",
          "details": [
            {
              "id": "导航守卫全面升级-14-4-1-d0",
              "tag": "router.beforeEach可直接返回false或路由路径替代next()",
              "desc": "Vue Router 4守卫返回false取消导航，返回路径字符串/路由对象重定向，不再需要显式调用next()函数"
            },
            {
              "id": "导航守卫全面升级-14-4-1-d1",
              "tag": "全局后置守卫router.afterEach新增failure参数捕获导航失败原因",
              "desc": "afterEach(to,from,failure)第三个参数failure在导航被守卫中断或重复时捕获失败原因，便于错误追踪和日志记录"
            },
            {
              "id": "导航守卫全面升级-14-4-1-d2",
              "tag": "路由独享守卫beforeEnter可直接在路由配置中写函数数组",
              "desc": "Vue Router 4的beforeEnter支持数组形式传入多个守卫函数按顺序执行，比Vue2只能写单个函数更灵活"
            },
            {
              "id": "导航守卫全面升级-14-4-1-d3",
              "tag": "组件内守卫onBeforeRouteLeave/onBeforeRouteUpdate需在setup中注册",
              "desc": "组合式API中用onBeforeRouteLeave/onBeforeRouteUpdate替代Vue2的beforeRouteLeave/beforeRouteUpdate选项式钩子"
            },
            {
              "id": "导航守卫全面升级-14-4-1-d4",
              "tag": "守卫执行顺序与Vue2不同",
              "desc": "beforeEach→beforeRouteUpdate→afterEach"
            }
          ]
        },
        {
          "id": "动态路由与addroute-14-4-2",
          "tag": "动态路由与addRoute",
          "desc": "Vue Router 4支持运行时动态添加删除路由适配权限系统需求",
          "details": [
            {
              "id": "动态路由与addroute-14-4-2-d0",
              "tag": "router.addRoute(route)动态添加单个路由配置",
              "desc": "addRoute接收路由配置对象{name,path,component}动态添加路由，常用于权限系统按角色动态加载菜单路由"
            },
            {
              "id": "动态路由与addroute-14-4-2-d1",
              "tag": "router.addRoute(parentName,route)为已有路由添加嵌套子路由",
              "desc": "addRoute(parentName,route)将新路由作为指定父路由的children添加，实现动态嵌套路由如权限子系统子菜单"
            },
            {
              "id": "动态路由与addroute-14-4-2-d2",
              "tag": "router.removeRoute(routeName)动态删除已注册路由",
              "desc": "removeRoute按路由name删除动态添加的路路配置，用户权限变更时移除不再授权的路由防止非法访问"
            },
            {
              "id": "动态路由与addroute-14-4-2-d3",
              "tag": "router.hasRoute(routeName)检查路由是否存在",
              "desc": "hasRoute返回boolean判断指定name的路由是否已注册，权限系统可据此判断用户是否可访问某页面"
            },
            {
              "id": "动态路由与addroute-14-4-2-d4",
              "tag": "router.getRoutes()获取所有已注册路由完整列表",
              "desc": "getRoutes返回包含所有动态和静态路由的完整数组，便于调试和权限系统批量校验路由可用性"
            },
            {
              "id": "动态路由与addroute-14-4-2-d5",
              "tag": "典型应用",
              "desc": "登录后根据用户权限动态注册有权限的路由"
            }
          ]
        },
        {
          "id": "路由懒加载与过渡动画-14-4-3",
          "tag": "路由懒加载与过渡动画",
          "desc": "Vue Router 4配合Vite实现高效路由懒加载和过渡动画",
          "details": [
            {
              "id": "路由懒加载与过渡动画-14-4-3-d0",
              "tag": "路由懒加载component",
              "desc": "()=>import(@/views/User.vue)Vite自动代码分割"
            },
            {
              "id": "路由懒加载与过渡动画-14-4-3-d1",
              "tag": "命名chunk()",
              "desc": ">import(/*webpackChunkName:user*/./User.vue)"
            },
            {
              "id": "路由懒加载与过渡动画-14-4-3-d2",
              "tag": "路由过渡router-view v-slot",
              "desc": "{Component}配合transition实现切换动画"
            },
            {
              "id": "路由懒加载与过渡动画-14-4-3-d3",
              "tag": "Suspense配合router-view v-slot",
              "desc": "{Component}处理异步组件加载"
            },
            {
              "id": "路由懒加载与过渡动画-14-4-3-d4",
              "tag": "scrollBehavior(to,from,savedPosition)控制路由切换后页面滚动位置",
              "desc": "savedPosition保留浏览器前进后退时的滚动位置；返回{x:0,y:0}滚动到顶部，返回锚点selector定位到元素"
            }
          ]
        },
        {
          "id": "compositionapi路由钩子-14-4-4",
          "tag": "Composition API路由钩子",
          "desc": "Vue Router 4提供Composition API风格路由函数替代this.$route/$router",
          "details": [
            {
              "id": "compositionapi路由钩子-14-4-4-d0",
              "tag": "useRouter()在setup中获取router实例等同this.$router",
              "desc": "useRouter()返回路由实例可直接调用push/replace/go等方法，替代Vue2中this.$router的选项式访问方式"
            },
            {
              "id": "compositionapi路由钩子-14-4-4-d1",
              "tag": "useRoute()在setup中获取当前路由信息等同this.$route返回reactive对象",
              "desc": "useRoute()返回的reactive路由对象自动跟踪params/query/hash变化，watch监听route.params即可响应路由参数变更"
            },
            {
              "id": "compositionapi路由钩子-14-4-4-d2",
              "tag": "onBeforeRouteLeave组件内离开守卫",
              "desc": "onBeforeRouteLeave在setup中注册离开当前路由前的拦截逻辑，返回false阻止导航，适合未保存表单确认场景"
            },
            {
              "id": "compositionapi路由钩子-14-4-4-d3",
              "tag": "onBeforeRouteUpdate组件内更新守卫",
              "desc": "onBeforeRouteUpdate在同路由不同参数切换时触发(如/user/:id)，用于复用组件时响应参数变化重新加载数据"
            },
            {
              "id": "compositionapi路由钩子-14-4-4-d4",
              "tag": "useRoute()",
              "desc": "useRoute()是reactive的可直接watch监听路由变化"
            }
          ]
        }
      ]
    },
    {
      "id": "14-6-vue3组件库生态-14-5",
      "title": "14.6 Vue3组件库生态",
      "points": [
        {
          "id": "elementplus-14-5-0",
          "tag": "Element Plus",
          "desc": "Element Plus是Element UI的Vue3重构版本全面支持Composition API和TypeScript",
          "details": [
            {
              "id": "elementplus-14-5-0-d0",
              "tag": "从Element UI迁移组件API基本兼容需注意v-model语法变化",
              "desc": "Vue3 v-model默认prop名为modelValue事件为update:modelValue，替代Vue2的value+input事件，需迁移现有v-model绑定"
            },
            {
              "id": "elementplus-14-5-0-d1",
              "tag": "TypeScript支持所有组件",
              "desc": "TypeScript支持所有组件提供完整类型声明无需额外@types包"
            },
            {
              "id": "elementplus-14-5-0-d2",
              "tag": "暗黑模式内置Dark Mode",
              "desc": "暗黑模式内置Dark Mode通过useDark()切换CSS变量驱动全局主题"
            },
            {
              "id": "elementplus-14-5-0-d3",
              "tag": "按需导入配合unplugin-vue-components和unplugin-auto-import自动按需引入",
              "desc": "unplugin自动解析模板中组件名按需引入对应模块，无需手动import每个组件，大幅减少最终打包体积"
            },
            {
              "id": "elementplus-14-5-0-d4",
              "tag": "国际化内置多语言支持",
              "desc": "国际化内置多语言支持通过useI18n配置locale"
            },
            {
              "id": "elementplus-14-5-0-d5",
              "tag": "虚拟化表格el-table-v2",
              "desc": "虚拟化表格el-table-v2支持万级数据虚拟滚动渲染性能大幅提升"
            }
          ]
        },
        {
          "id": "antdesignvue3x-14-5-1",
          "tag": "Ant Design Vue 3.x",
          "desc": "Ant Design Vue 3.x完全基于Vue3重构遵循Ant Design设计规范",
          "details": [
            {
              "id": "antdesignvue3x-14-5-1-d0",
              "tag": "设计语言遵循Ant Design 4.0设计规范组件风格与React版一致",
              "desc": "Ant Design Vue 3.x遵循Ant Design 4.0设计体系，视觉风格和交互规范与React版Ant Design保持一致便于跨框架统一"
            },
            {
              "id": "antdesignvue3x-14-5-1-d1",
              "tag": "Form表单重构不再需要v-decorator改用v-model+rules声明式校验",
              "desc": "Vue3版Form用v-model双向绑定字段值，rules配置校验规则，替代Vue2版v-decorator装饰器模式更直观简洁"
            },
            {
              "id": "antdesignvue3x-14-5-1-d2",
              "tag": "按需",
              "desc": "按需加载配合babel-plugin-import或unplugin-vue-components自动按需引入"
            },
            {
              "id": "antdesignvue3x-14-5-1-d3",
              "tag": "主题定制ConfigProvider全局配置主题通过modifyVars修改Less变量",
              "desc": "ConfigProvider包裹应用通过modifyVars覆盖Less变量定制主题色/字号等，支持动态切换主题无需重建样式"
            },
            {
              "id": "antdesignvue3x-14-5-1-d4",
              "tag": "国际化内置多语言",
              "desc": "国际化内置多语言支持moment.js→day.js替换体积更小"
            },
            {
              "id": "antdesignvue3x-14-5-1-d5",
              "tag": "组件丰富度50+组件涵盖表单/数据展示/导航/反馈/布局全场景",
              "desc": "Ant Design Vue提供50+组件覆盖表单输入、数据表格、导航菜单、反馈弹窗、布局容器等企业级全交互场景"
            }
          ]
        },
        {
          "id": "naiveui-14-5-2",
          "tag": "Naive UI",
          "desc": "Naive UI是Vue3原生组件库TypeScript编写不依赖第三方CSS框架",
          "details": [
            {
              "id": "naiveui-14-5-2-d0",
              "tag": "TypeScript优先100%TypeScript编写类型推断最完善无需额外类型包",
              "desc": "Naive UI源码100%TS编写组件Props/Events/Slots类型完整推断，IDE智能提示覆盖率最高无需安装@types包"
            },
            {
              "id": "naiveui-14-5-2-d1",
              "tag": "主题系统",
              "desc": "主题系统基于CSS-in-JS(themeOverrides对象)深度定制无需预处理器"
            },
            {
              "id": "naiveui-14-5-2-d2",
              "tag": "暗黑模式内置darkTheme",
              "desc": "暗黑模式内置darkTheme通过n-config-provider切换"
            },
            {
              "id": "naiveui-14-5-2-d3",
              "tag": "Tree-shaking友好ESM导出按需引入产物体积可控",
              "desc": "Naive UI组件均ESM模块化导出，Vite/Webpack可精准Tree-shaking移除未使用组件，按需引入产物体积小"
            },
            {
              "id": "naiveui-14-5-2-d4",
              "tag": "无第三方依赖不依赖moment/lodash等库体积小全量约300KB gzip",
              "desc": "Naive UI零外部依赖自实现日期/工具函数，全量gzip约300KB对比Element Plus依赖moment超600KB更轻量"
            },
            {
              "id": "naiveui-14-5-2-d5",
              "tag": "独特组件n-data-table高级表格/n-tree-select树选择/n-icon自定义图标",
              "desc": "n-data-table支持排序/筛选/分页/固定列等高级功能；n-tree-select下拉树选择器是其他库少有的独特组件"
            }
          ]
        },
        {
          "id": "组件库选型对比-14-5-3",
          "tag": "组件库选型对比",
          "desc": "三大主流Vue3组件库各有特色需根据项目需求选择",
          "details": [
            {
              "id": "组件库选型对比-14-5-3-d0",
              "tag": "Element Plus生态最大社区活跃中文文档完善适合中后台管理系统",
              "desc": "Element Plus社区贡献者最多插件生态丰富，中文文档和教程覆盖率高，是Vue3中后台管理系统首选组件库"
            },
            {
              "id": "组件库选型对比-14-5-3-d1",
              "tag": "Ant Design Vue设计规范严格国际化好适合企业级复杂交互场景",
              "desc": "Ant Design Vue遵循蚂蚁设计体系规范严格一致，国际化i18n方案完善支持30+语言，适合多语言企业级应用"
            },
            {
              "id": "组件库选型对比-14-5-3-d2",
              "tag": "Naive UI TS优先轻量无依赖主题定制灵活适合定制化需求强的项目",
              "desc": "Naive UI TS类型最完善零依赖体积最小，主题通过n-config-provider+themeOverrides深度定制适合高度定制化项目"
            },
            {
              "id": "组件库选型对比-14-5-3-d3",
              "tag": "Vant 4移动端组件库",
              "desc": "Vant 4移动端组件库适合H5和小程序场景"
            },
            {
              "id": "组件库选型对比-14-5-3-d4",
              "tag": "TDesign Vue Next腾讯设计体系跨框架统一设计语言",
              "desc": "TDesign遵循腾讯设计体系统一Web/移动/小程序设计语言，跨React/Vue多框架保持视觉一致性"
            },
            {
              "id": "组件库选型对比-14-5-3-d5",
              "tag": "Arco Design Vue字节跳动设计体系组件质量高",
              "desc": "Arco Design来自字节跳动飞书设计体系，组件交互细节打磨精细，暗黑模式和国际化支持完善"
            }
          ]
        },
        {
          "id": "vant4与其他移动端库-14-5-4",
          "tag": "Vant 4与其他移动端库",
          "desc": "Vue3移动端组件库选择影响H5和小程序开发体验",
          "details": [
            {
              "id": "vant4与其他移动端库-14-5-4-d0",
              "tag": "Vant 4有赞出品轻量可靠70+组件",
              "desc": "Vant 4有赞出品轻量可靠70+组件支持Vue3+TypeScript开箱即用"
            },
            {
              "id": "vant4与其他移动端库-14-5-4-d1",
              "tag": "Varlet Material Design风格Vue3移动端组件库支持暗黑模式和多语言",
              "desc": "Varlet遵循Material Design规范设计，支持暗黑模式动态切换和i18n多语言，专为Vue3移动端H5场景打造"
            },
            {
              "id": "vant4与其他移动端库-14-5-4-d2",
              "tag": "NutUI 4京东出品Vue3",
              "desc": "NutUI 4京东出品Vue3移动端组件库支持Taro多端适配H5+小程序"
            },
            {
              "id": "vant4与其他移动端库-14-5-4-d3",
              "tag": "uni-app+uni-ui跨端方案一套代码编译到H5/小程序/App",
              "desc": "uni-app使用Vue语法一套代码编译到iOS/Android/H5/微信小程序等多端，uni-ui提供跨端兼容的基础组件集"
            },
            {
              "id": "vant4与其他移动端库-14-5-4-d4",
              "tag": "组件库选型纯H5选Vant4/Varlet跨端选NutUI或uni-ui",
              "desc": "纯H5场景选Vant4轻量成熟或Varlet风格灵活；需要跨端编译小程序/App时选NutUI(京东)或uni-ui(跨端兼容)"
            }
          ]
        }
      ]
    },
    {
      "id": "14-7-vue3测试体系-14-6",
      "title": "14.7 Vue3测试体系",
      "points": [
        {
          "id": "vitest单元测试-14-6-0",
          "tag": "Vitest单元测试",
          "desc": "Vitest是Vite生态的单元测试框架与Vite共享配置极速启动兼容Jest API",
          "details": [
            {
              "id": "vitest单元测试-14-6-0-d0",
              "tag": "Vitest vs Jest Vitest基于Vite转换模块启动极快Jest需自行配置转换较慢",
              "desc": "Vitest复用Vite的插件管道和模块转换管线启动毫秒级，Jest需为每种文件类型配置transform启动慢秒级"
            },
            {
              "id": "vitest单元测试-14-6-0-d1",
              "tag": "兼容Jest API expect/describe/it/jest.mock/spyOn等Jest用户零学习成本",
              "desc": "VitestAPI设计兼容Jest核心方法expect/describe/it/vi.mock/vi.spyOn，现有Jest测试代码只需改jest为vi即可迁移"
            },
            {
              "id": "vitest单元测试-14-6-0-d2",
              "tag": "组件测试配合@vue/test-utils挂载组件mount/shallowMount验证渲染和行为",
              "desc": "@vue/test-utils提供mount完整渲染+shallowMount浅渲染替换子组件，配合Vitest验证组件DOM输出和交互行为"
            },
            {
              "id": "vitest单元测试-14-6-0-d3",
              "tag": "覆盖率coverageprovider",
              "desc": "istanbul或v8生成覆盖率报告"
            },
            {
              "id": "vitest单元测试-14-6-0-d4",
              "tag": "快照测试expect(result).toMatchSnapshot()验证组件渲染输出",
              "desc": "toMatchSnapshot将组件渲染HTML序列化为快照文件，后续运行比对差异，结构变更时需--update主动更新快照"
            },
            {
              "id": "vitest单元测试-14-6-0-d5",
              "tag": "Watch模式vitest --watch文件变更自动重跑相关测试",
              "desc": "vitest --watch监听源文件变更自动重跑依赖该文件的测试用例，开发时实时反馈无需手动执行测试命令"
            }
          ]
        },
        {
          "id": "vuetestutils2-14-6-1",
          "tag": "Vue Test Utils 2",
          "desc": "@vue/test-utils是Vue3官方组件测试工具库提供挂载/交互/断言API",
          "details": [
            {
              "id": "vuetestutils2-14-6-1-d0",
              "tag": "mount()完整挂载组件含所有子组件",
              "desc": "mount()完整挂载组件含所有子组件适合集成测试"
            },
            {
              "id": "vuetestutils2-14-6-1-d1",
              "tag": "shallowMount()浅挂载替换子组件为占位符适合单元测试隔离依赖",
              "desc": "shallowMount将子组件渲染为占位stub隔离子组件副作用，聚焦测试当前组件逻辑不关心子组件实现细节"
            },
            {
              "id": "vuetestutils2-14-6-1-d2",
              "tag": "find()/findAll()",
              "desc": "find()/findAll()通过选择器查找DOM元素或子组件"
            },
            {
              "id": "vuetestutils2-14-6-1-d3",
              "tag": "trigger()",
              "desc": "trigger()触发DOM事件如trigger(click)或trigger(input,{value:xx})"
            },
            {
              "id": "vuetestutils2-14-6-1-d4",
              "tag": "setValue()/setChecked()便捷修改表单元素值模拟用户输入",
              "desc": "setValue修改input/select值触发v-model更新；setChecked切换checkbox状态，简化表单交互测试避免手动模拟DOM事件"
            },
            {
              "id": "vuetestutils2-14-6-1-d5",
              "tag": "emitted()获取组件emit的事件列表验证事件触发和参数",
              "desc": "wrapper.emitted()返回组件已触发的事件名和参数数组，emitted('click')[0]获取首次click事件的参数用于断言"
            }
          ]
        },
        {
          "id": "cypresse2e测试-14-6-2",
          "tag": "Cypress E2E测试",
          "desc": "Cypress是现代端到端测试框架真实浏览器环境运行适合验收测试",
          "details": [
            {
              "id": "cypresse2e测试-14-6-2-d0",
              "tag": "Cypress vs Selenium Cypress在同一浏览器进程中运行无需WebDriver更快更稳定",
              "desc": "Cypress直接在浏览器Chromium进程内运行操控DOM，Selenium通过WebDriver协议跨进程通信延迟高且易超时"
            },
            {
              "id": "cypresse2e测试-14-6-2-d1",
              "tag": "cy.visit()导航到页面cy.get()选择元素cy.contains()查找文本",
              "desc": "cy.visit加载URL页面；cy.get用CSS选择器定位DOM元素；cy.contains按文本内容查找元素适合按钮/链接定位"
            },
            {
              "id": "cypresse2e测试-14-6-2-d2",
              "tag": "cy.intercept()拦截和模拟API请求控制后端响应数据",
              "desc": "cy.intercept拦截指定URL请求可返回模拟fixture数据或修改真实响应，隔离后端依赖使E2E测试不依赖服务状态"
            },
            {
              "id": "cypresse2e测试-14-6-2-d3",
              "tag": "时间旅行测试",
              "desc": "时间旅行测试运行时可在每个命令步骤间跳转查看DOM状态截图"
            },
            {
              "id": "cypresse2e测试-14-6-2-d4",
              "tag": "自动重试断言失败时Cypress自动重试直到超时减少假失败",
              "desc": "Cypress断言失败不立即报错而是自动重试等待DOM更新或异步完成，默认4秒超时减少因动画或延迟导致的假失败"
            },
            {
              "id": "cypresse2e测试-14-6-2-d5",
              "tag": "Vue3集成@cypress/vue组件测试+@cypress/code-coverage覆盖率收集",
              "desc": "@cypress/vue在Cypress中挂载单个Vue组件做组件级CT测试，@cypress/code-coverage收集Istanbul覆盖率数据"
            }
          ]
        },
        {
          "id": "测试策略与覆盖率-14-6-3",
          "tag": "测试策略与覆盖率",
          "desc": "合理的测试策略平衡投入产出比覆盖率不是唯一目标",
          "details": [
            {
              "id": "测试策略与覆盖率-14-6-3-d0",
              "tag": "测试金字塔70%单元测试+20%集成测试+10%E2E测试投入产出最优",
              "desc": "单元测试成本最低覆盖逻辑分支最多占70%；集成测试验证模块协作占20%；E2E成本最高仅覆盖关键流程占10%"
            },
            {
              "id": "测试策略与覆盖率-14-6-3-d1",
              "tag": "单元测试重点纯函数/计算逻辑/状态",
              "desc": "单元测试重点纯函数/计算逻辑/状态管理store/自定义Hook"
            },
            {
              "id": "测试策略与覆盖率-14-6-3-d2",
              "tag": "组件测试重点用户交互(点击输入)/props渲染/事件emit/条件渲染",
              "desc": "重点验证按钮点击触发正确事件、props变化更新渲染、emit传出正确参数、v-if/v-show条件切换DOM可见性"
            },
            {
              "id": "测试策略与覆盖率-14-6-3-d3",
              "tag": "E2E测试重点核心业务流程(登录下单支付)/页面路由跳转/关键数据展示",
              "desc": "E2E覆盖用户核心操作路径：登录认证流程、下单支付链路、路由跳转正确性、关键数据列表加载和展示验证"
            },
            {
              "id": "测试策略与覆盖率-14-6-3-d4",
              "tag": "覆盖率目标核心逻辑80%+/组件交互60%+/整体不低于50%",
              "desc": "核心业务逻辑函数分支覆盖率80%以上保证关键路径正确；组件交互覆盖60%；整体50%以上避免遗漏重要模块"
            },
            {
              "id": "测试策略与覆盖率-14-6-3-d5",
              "tag": "避免过度测试UI样式/第三方库行为/简单getter不需要单独测试",
              "desc": "CSS样式变更频繁测试价值低；第三方库已有自身测试无需重复；纯getter无逻辑分支测试成本大于收益应跳过"
            }
          ]
        },
        {
          "id": "mock与stub策略-14-6-4",
          "tag": "Mock与Stub策略",
          "desc": "测试中Mock和Stub隔离外部依赖保证测试独立性和稳定性",
          "details": [
            {
              "id": "mock与stub策略-14-6-4-d0",
              "tag": "vi.mock(module)Vitest全局Mock模块替代真实实现返回可控数据",
              "desc": "vi.mock('axios')自动替换整个模块为模拟实现，返回可控数据避免真实HTTP请求，保证测试稳定不依赖外部服务"
            },
            {
              "id": "mock与stub策略-14-6-4-d1",
              "tag": "vi.spyOn(object,method)监听方法调用记录参数和返回值不替换实现",
              "desc": "vi.spyOn包裹方法记录调用次数/参数但不改变原实现行为，适合验证函数是否被正确调用同时保留真实逻辑"
            },
            {
              "id": "mock与stub策略-14-6-4-d2",
              "tag": "vi.fn()",
              "desc": "vi.fn()创建空Mock函数可配置返回值和调用验证"
            },
            {
              "id": "mock与stub策略-14-6-4-d3",
              "tag": "API Mock vi.mock(@/api/user,()",
              "desc": ">({getUser:vi.fn().mockResolvedValue(mockData)}))"
            },
            {
              "id": "mock与stub策略-14-6-4-d4",
              "tag": "组件Mock shallowMount时stubs",
              "desc": "{ChildComponent:true}替换子组件"
            },
            {
              "id": "mock与stub策略-14-6-4-d5",
              "tag": "时间Mock vi.useFakeTimers()控制setTimeout/setInterval精准测试异步逻辑",
              "desc": "vi.useFakeTimers()替换真实计时器为模拟版本，vi.advanceTimersByTime(ms)精确推进时间验证定时器回调行为"
            }
          ]
        }
      ]
    }
  ]
};

// typescript.js — 十五、TypeScript 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['typescript'] = {
  "id": "typescript",
  "title": "十五、TypeScript",
  "tag": "TypeScript",
  "order": 15,
  "icon": "🟧",
  "cssIndex": 14,
  "subs": [
    {
      "id": "15-1-ts核心概念-15-0",
      "title": "15.1 TS核心概念",
      "points": [
        {
          "id": "类型系统-15-0-0",
          "tag": "类型系统",
          "desc": "TS的类型系统分为原始类型、对象类型和特殊类型是编译时的静态检查机制",
          "details": [
            {
              "id": "类型系统-15-0-0-d0",
              "tag": "原始类型",
              "desc": "string/number/boolean/null/undefined/symbol/bigint"
            },
            {
              "id": "类型系统-15-0-0-d1",
              "tag": "对象类型",
              "desc": "object/array/function/object literal用interface或type描述形状"
            },
            {
              "id": "类型系统-15-0-0-d2",
              "tag": "any",
              "desc": "放弃类型检查应尽量避免使用（any的详细说明：类型系统中关于any的内容）"
            },
            {
              "id": "类型系统-15-0-0-d3",
              "tag": "unknown",
              "desc": "any的安全替代版使用前必须做类型检查或断言"
            },
            {
              "id": "类型系统-15-0-0-d4",
              "tag": "never",
              "desc": "永不存在值的类型函数抛异常返回never"
            },
            {
              "id": "类型系统-15-0-0-d5",
              "tag": "void",
              "desc": "函数无返回值时的返回类型（void的详细说明：类型系统中关于void的内容）"
            }
          ]
        },
        {
          "id": "接口与类型别名-15-0-1",
          "tag": "接口与类型别名",
          "desc": "interface定义对象形状和契约type alias定义类型的别名两者有相似功能但有细微差异",
          "details": [
            {
              "id": "接口与类型别名-15-0-1-d0",
              "tag": "interface",
              "desc": "支持声明合并(同名interface自动合并)、extends继承、class implements实现"
            },
            {
              "id": "接口与类型别名-15-0-1-d1",
              "tag": "type alias",
              "desc": "支持联合类型、交叉类型、映射类型、条件类型、不支持声明合并"
            },
            {
              "id": "接口与类型别名-15-0-1-d2",
              "tag": "选择原则",
              "desc": "公开API用interface便于扩展，内部复杂组合用type"
            },
            {
              "id": "接口与类型别名-15-0-1-d3",
              "tag": "interface声明合并",
              "desc": "同名interface属性合并同名非函数属性必须类型一致"
            }
          ]
        },
        {
          "id": "枚举-15-0-2",
          "tag": "枚举",
          "desc": "enum用于定义一组命名常量分为数字枚举、字符串枚举和常量枚举",
          "details": [
            {
              "id": "枚举-15-0-2-d0",
              "tag": "数字枚举",
              "desc": "默认从0自增支持反向映射(Direction[0]='Up')"
            },
            {
              "id": "枚举-15-0-2-d1",
              "tag": "字符串枚举",
              "desc": "每个成员必须显式赋值不支持反向映射"
            },
            {
              "id": "枚举-15-0-2-d2",
              "tag": "常量枚举",
              "desc": "const enum编译时内联替换运行时不存在枚举对象"
            },
            {
              "id": "枚举-15-0-2-d3",
              "tag": "最佳实践",
              "desc": "优先用const enum或as const对象替代常规enum"
            }
          ]
        },
        {
          "id": "泛型-15-0-3",
          "tag": "泛型",
          "desc": "泛型允许在定义时不确定类型而在使用时指定类型实现类型安全的复用",
          "details": [
            {
              "id": "泛型-15-0-3-d0",
              "tag": "基本用法",
              "desc": "function identity<T>(arg:T):T"
            },
            {
              "id": "泛型-15-0-3-d1",
              "tag": "多个泛型参数",
              "desc": "function map<T,U>(arr:T[],fn:(item:T)=>U):U[]"
            },
            {
              "id": "泛型-15-0-3-d2",
              "tag": "泛型约束",
              "desc": "function logLength<T extends {length:number}>"
            },
            {
              "id": "泛型-15-0-3-d3",
              "tag": "keyof约束",
              "desc": "function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]"
            },
            {
              "id": "泛型-15-0-3-d4",
              "tag": "默认泛型类型",
              "desc": "interface PaginatedResponse<T=any>"
            }
          ]
        },
        {
          "id": "联合类型与交叉类型-15-0-4",
          "tag": "联合类型与交叉类型",
          "desc": "联合类型表示或的关系(多种类型之一)交叉类型表示且的关系(同时满足多种类型)",
          "details": [
            {
              "id": "联合类型与交叉类型-15-0-4-d0",
              "tag": "联合类型",
              "desc": "type Status='active'|'inactive'|'pending'"
            },
            {
              "id": "联合类型与交叉类型-15-0-4-d1",
              "tag": "可辨识联合",
              "desc": "type Shape=Circle|Square每种类型有独有kind字面量属性"
            },
            {
              "id": "联合类型与交叉类型-15-0-4-d2",
              "tag": "交叉类型",
              "desc": "type Admin=User&{permissions:string[]}合并所有类型属性"
            },
            {
              "id": "联合类型与交叉类型-15-0-4-d3",
              "tag": "交叉冲突",
              "desc": "同名属性类型不一致时交叉结果为never"
            },
            {
              "id": "联合类型与交叉类型-15-0-4-d4",
              "tag": "Partial<T>={ [K in keyof T]?",
              "desc": "T[K] }映射类型（Partial<T>={ [K in keyof T]?的详细说明：联合类型与交叉类型中关于Partial<T>={ [K in keyof T]?的内容）"
            }
          ]
        },
        {
          "id": "类型断言与类型守卫-15-0-5",
          "tag": "类型断言与类型守卫",
          "desc": "类型断言告诉编译器你比它更了解类型类型守卫在运行时检查以收窄类型",
          "details": [
            {
              "id": "类型断言与类型守卫-15-0-5-d0",
              "tag": "as断言",
              "desc": "const input=event.target as HTMLInputElement"
            },
            {
              "id": "类型断言与类型守卫-15-0-5-d1",
              "tag": "双重断言",
              "desc": "极度不安全应避免使用（双重断言的详细说明：类型断言与类型守卫中关于双重断言的内容）"
            },
            {
              "id": "类型断言与类型守卫-15-0-5-d2",
              "tag": "非空断言",
              "desc": "const el=document.getElementById('app')!"
            },
            {
              "id": "类型断言与类型守卫-15-0-5-d3",
              "tag": "is自定义守卫",
              "desc": "function isString(val:any):val is string"
            },
            {
              "id": "类型断言与类型守卫-15-0-5-d4",
              "tag": "typeof/instanceof/in守卫",
              "desc": "运行时检查收窄类型范围（typeof/instanceof/in守卫的详细说明：类型断言与类型守卫中关于typeof/instanceof/in守卫的内容）"
            }
          ]
        },
        {
          "id": "字面量类型与模板字面量类型-15-0-6",
          "tag": "字面量类型与模板字面量类型",
          "desc": "字面量类型将值精确到具体的字面量模板字面量类型用于组合生成新类型",
          "details": [
            {
              "id": "字面量类型与模板字面量类型-15-0-6-d0",
              "tag": "字符串字面量",
              "desc": "type Direction='left'|'right'|'up'|'down'"
            },
            {
              "id": "字面量类型与模板字面量类型-15-0-6-d1",
              "tag": "as const断言",
              "desc": "将数组/对象的值推断为字面量类型而非宽泛类型"
            },
            {
              "id": "字面量类型与模板字面量类型-15-0-6-d2",
              "tag": "模板字面量",
              "desc": "type EventName=`on${Capitalize<Event>}`动态拼接字符串类型"
            },
            {
              "id": "字面量类型与模板字面量类型-15-0-6-d3",
              "tag": "内置工具类型与模板",
              "desc": "Uppercase/Lowercase/Capitalize/Uncapitalize"
            }
          ]
        }
      ]
    },
    {
      "id": "15-2-ts高级类型-15-1",
      "title": "15.2 TS高级类型",
      "points": [
        {
          "id": "条件类型-15-1-0",
          "tag": "条件类型",
          "desc": "条件类型根据类型关系做逻辑判断类似三元运算符作用于类型层面",
          "details": [
            {
              "id": "条件类型-15-1-0-d0",
              "tag": "基本语法",
              "desc": "T extends U ? X : Y"
            },
            {
              "id": "条件类型-15-1-0-d1",
              "tag": "分布式条件类型",
              "desc": "当T为联合类型时分别对每个成员计算再合并"
            },
            {
              "id": "条件类型-15-1-0-d2",
              "tag": "非分布式",
              "desc": "用[T] extends [U]包裹后不再分布式展开"
            },
            {
              "id": "条件类型-15-1-0-d3",
              "tag": "常见内置",
              "desc": "Exclude<T,U>/Extract<T,U>/NonNullable<T>"
            },
            {
              "id": "条件类型-15-1-0-d4",
              "tag": "嵌套条件",
              "desc": "type DeepPartial<T>=T extends object?{[K in keyof T]?:DeepPartial<T[K]>}:T"
            }
          ]
        },
        {
          "id": "映射类型-15-1-1",
          "tag": "映射类型",
          "desc": "映射类型基于已有类型通过变换生成新类型是TS类型系统的核心元编程能力",
          "details": [
            {
              "id": "映射类型-15-1-1-d0",
              "tag": "基础映射",
              "desc": "type Readonly<T>={readonly[K in keyof T]:T[K]}"
            },
            {
              "id": "映射类型-15-1-1-d1",
              "tag": "keyof操作符",
              "desc": "keyof T返回T所有属性名的联合类型"
            },
            {
              "id": "映射类型-15-1-1-d2",
              "tag": "Record<K,V>/Partial<T>/Required<T>/Pick<T,K>/Omit<T,K>",
              "desc": "Record将K键映射为V值类型；Partial所有属性变可选；Required反之；Pick选取子集；Omit排除子集属性"
            },
            {
              "id": "映射类型-15-1-1-d3",
              "tag": "重映射(since 4.1)",
              "desc": "{[K in keyof T as NewKey]:T[K]}用as重写键名"
            }
          ]
        },
        {
          "id": "infer关键字-15-1-2",
          "tag": "infer关键字",
          "desc": "infer在条件类型的extends子句中声明待推断的类型变量用于从复杂类型中提取子类型",
          "details": [
            {
              "id": "infer关键字-15-1-2-d0",
              "tag": "基本用法",
              "desc": "type ReturnType<T>=T extends(...args:any[])=>infer R?R:never"
            },
            {
              "id": "infer关键字-15-1-2-d1",
              "tag": "多infer",
              "desc": "type FirstAndLast<T>=T extends[infer F,...any[],infer L]?[F,L]:never"
            },
            {
              "id": "infer关键字-15-1-2-d2",
              "tag": "递归infer",
              "desc": "type UnwrapPromise<T>=T extends Promise<infer U>?UnwrapPromise<U>:T"
            },
            {
              "id": "infer关键字-15-1-2-d3",
              "tag": "常见提取",
              "desc": "ReturnType/Parameters/InstanceType"
            },
            {
              "id": "infer关键字-15-1-2-d4",
              "tag": "面试高频",
              "desc": "手写ReturnType/Parameters/DeepPartial等类型体操题"
            }
          ]
        },
        {
          "id": "递归类型-15-1-3",
          "tag": "递归类型",
          "desc": "递归类型指类型定义引用自身用于处理嵌套数据结构和深层类型变换",
          "details": [
            {
              "id": "递归类型-15-1-3-d0",
              "tag": "递归Partial",
              "desc": "type DeepPartial<T>=T extends object?{[K in keyof T]?:DeepPartial<T[K]>}:T"
            },
            {
              "id": "递归类型-15-1-3-d1",
              "tag": "递归Readonly",
              "desc": "type DeepReadonly<T>=T extends object?{readonly[K in keyof T]:DeepReadonly<T[K]>}:T"
            },
            {
              "id": "递归类型-15-1-3-d2",
              "tag": "递归解包",
              "desc": "多层Promise扁平化（递归解包的详细说明：递归类型中关于递归解包的内容）"
            },
            {
              "id": "递归类型-15-1-3-d3",
              "tag": "TS递归限制",
              "desc": "编译器对递归类型有深度限制约10层超出会报错"
            },
            {
              "id": "递归类型-15-1-3-d4",
              "tag": "实际场景",
              "desc": "JSON类型定义、树形结构类型、深度路由类型"
            }
          ]
        },
        {
          "id": "命名空间与声明文件-15-1-4",
          "tag": "命名空间与声明文件",
          "desc": "命名空间用于组织代码和避免全局污染d.ts声明文件为JS库提供类型信息",
          "details": [
            {
              "id": "命名空间与声明文件-15-1-4-d0",
              "tag": "命名空间",
              "desc": "namespace Utils{export function helper(){}}通过Utils.helper访问"
            },
            {
              "id": "命名空间与声明文件-15-1-4-d1",
              "tag": "声明文件",
              "desc": "declare module 'lodash'为无类型的JS库补充类型定义"
            },
            {
              "id": "命名空间与声明文件-15-1-4-d2",
              "tag": "@types包",
              "desc": "npm install @types/node社区维护主流库类型声明"
            },
            {
              "id": "命名空间与声明文件-15-1-4-d3",
              "tag": "模块增强",
              "desc": "declare module 'express'{interface Request{user?:User}}为已有模块追加类型声明"
            }
          ]
        },
        {
          "id": "类型体操常见题型-15-1-5",
          "tag": "类型体操常见题型",
          "desc": "类型体操指通过组合TS高级类型能力解决复杂类型推导问题面试常见手写题",
          "details": [
            {
              "id": "类型体操常见题型-15-1-5-d0",
              "tag": "手写DeepPartial",
              "desc": "递归遍历所有嵌套属性变为可选（手写DeepPartial的详细说明：类型体操常见题型中关于手写DeepPartial的内容）"
            },
            {
              "id": "类型体操常见题型-15-1-5-d1",
              "tag": "手写DeepMerge",
              "desc": "两个深层对象类型合并同名对象属性递归合并"
            },
            {
              "id": "类型体操常见题型-15-1-5-d2",
              "tag": "手写LengthOfString",
              "desc": "递归将字符串拆为字符元组再取length"
            },
            {
              "id": "类型体操常见题型-15-1-5-d3",
              "tag": "手写Flip",
              "desc": "将对象类型的键值互换（手写Flip的详细说明：类型体操常见题型中关于手写Flip的内容）"
            },
            {
              "id": "类型体操常见题型-15-1-5-d4",
              "tag": "手写Curry",
              "desc": "将多参数函数类型柯里化面试最高难度级别"
            }
          ]
        }
      ]
    },
    {
      "id": "15-3-ts工程实践-15-2",
      "title": "15.3 TS工程实践",
      "points": [
        {
          "id": "tsconfigjson配置-15-2-0",
          "tag": "tsconfig.json配置",
          "desc": "tsconfig.json是TS项目的编译配置文件控制编译器行为和类型检查严格程度",
          "details": [
            {
              "id": "tsconfigjson配置-15-2-0-d0",
              "tag": "strict全家桶",
              "desc": "strict=true开启所有严格检查"
            },
            {
              "id": "tsconfigjson配置-15-2-0-d1",
              "tag": "target",
              "desc": "编译输出的JS目标版本(es5/es6/es2020/esnext)"
            },
            {
              "id": "tsconfigjson配置-15-2-0-d2",
              "tag": "module",
              "desc": "模块系统(commonjs/es6/es2015/esnext)"
            },
            {
              "id": "tsconfigjson配置-15-2-0-d3",
              "tag": "paths与baseUrl",
              "desc": "配置模块路径别名如{'@/*':['src/*']}"
            },
            {
              "id": "tsconfigjson配置-15-2-0-d4",
              "tag": "include/exclude",
              "desc": "指定编译范围如include:['src/**/*']"
            }
          ]
        },
        {
          "id": "编译策略-15-2-1",
          "tag": "编译策略",
          "desc": "TS代码编译为JS有多种策略影响构建速度和类型检查方式",
          "details": [
            {
              "id": "编译策略-15-2-1-d0",
              "tag": "tsc编译",
              "desc": "先类型检查再转换语法类型错误会阻止编译输出"
            },
            {
              "id": "编译策略-15-2-1-d1",
              "tag": "tsc --noEmit",
              "desc": "仅类型检查不输出文件适合CI/CD"
            },
            {
              "id": "编译策略-15-2-1-d2",
              "tag": "babel+@babel/preset-typescript",
              "desc": "仅剥离类型注释不做类型检查构建速度快"
            },
            {
              "id": "编译策略-15-2-1-d3",
              "tag": "swc",
              "desc": "Rust编写的超快编译器剥离类型注释速度远快于tsc和babel"
            },
            {
              "id": "编译策略-15-2-1-d4",
              "tag": "构建分离策略",
              "desc": "swc/babel负责JS转换tsc --noEmit负责类型检查并行执行"
            }
          ]
        },
        {
          "id": "与vue3集成-15-2-2",
          "tag": "与Vue3集成",
          "desc": "Vue3全面支持TS需要掌握组件定义、响应式类型和Props类型标注",
          "details": [
            {
              "id": "与vue3集成-15-2-2-d0",
              "tag": "defineComponent",
              "desc": "包裹组件选项对象提供类型推导（defineComponent的详细说明：与Vue3集成中关于defineComponent的内容）"
            },
            {
              "id": "与vue3集成-15-2-2-d1",
              "tag": "<script setup>",
              "desc": "语法糖自动推断props/emits/ref类型"
            },
            {
              "id": "与vue3集成-15-2-2-d2",
              "tag": "defineProps<{}>",
              "desc": "泛型声明props类型无需runtime声明"
            },
            {
              "id": "与vue3集成-15-2-2-d3",
              "tag": "ref类型",
              "desc": "ref<string>('hello')或ref<string|string[]>([])指定泛型"
            }
          ]
        },
        {
          "id": "与react集成-15-2-3",
          "tag": "与React集成",
          "desc": "React+TS需要正确标注组件、Hook、事件和状态类型",
          "details": [
            {
              "id": "与react集成-15-2-3-d0",
              "tag": "函数组件直接标注",
              "desc": "function App({title}:{title:string}):JSX.Element"
            },
            {
              "id": "与react集成-15-2-3-d1",
              "tag": "useState类型",
              "desc": "const[val,set]=useState<string>('')初始值null时useState<string|null>(null)"
            },
            {
              "id": "与react集成-15-2-3-d2",
              "tag": "useRef类型",
              "desc": "const el=useRef<HTMLInputElement>(null)"
            },
            {
              "id": "与react集成-15-2-3-d3",
              "tag": "事件类型",
              "desc": "onClick={(e:React.MouseEvent<HTMLButtonElement>)=>...}"
            },
            {
              "id": "与react集成-15-2-3-d4",
              "tag": "Hook返回类型",
              "desc": "复杂Hook用interface定义返回类型"
            }
          ]
        },
        {
          "id": "类型声明与模块增强-15-2-4",
          "tag": "类型声明与模块增强",
          "desc": "@types提供社区维护的类型声明模块增强允许扩展已有类型",
          "details": [
            {
              "id": "类型声明与模块增强-15-2-4-d0",
              "tag": "@types查找",
              "desc": "tsconfig的typeRoots默认node_modules/@types"
            },
            {
              "id": "类型声明与模块增强-15-2-4-d1",
              "tag": "自定义.d.ts",
              "desc": "项目内创建types/global.d.ts声明全局类型"
            },
            {
              "id": "类型声明与模块增强-15-2-4-d2",
              "tag": "模块增强",
              "desc": "declare module 'vue-router'{interface RouteMeta{requiresAuth?:boolean}}"
            },
            {
              "id": "类型声明与模块增强-15-2-4-d3",
              "tag": "全局增强",
              "desc": "declare global{interface Window{myApp:MyApp}}"
            },
            {
              "id": "类型声明与模块增强-15-2-4-d4",
              "tag": "声明合并策略",
              "desc": "interface合并属性namespace合并导出class合并静态侧和实例侧"
            }
          ]
        }
      ]
    }
  ]
};
