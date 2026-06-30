// java-basic.js — 一、Java 基础 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['java-basic'] = {
  "id": "java-basic",
  "title": "一、Java 基础",
  "tag": "Java 基础",
  "order": 1,
  "icon": "☕",
  "cssIndex": 0,
  "subs": [
    {
      "id": "1-1-基础概念-1-0",
      "title": "1.1 基础概念",
      "points": [
        {
          "id": "jvm-jdk-jre区别-1-0-0",
          "tag": "JVM/JDK/JRE 区别",
          "desc": "JVM 运行字节码；JRE=JVM+核心类库（运行环境）；JDK=JRE+开发工具（javac 等）。开发用 JDK，运行只需 JRE。JVM 有 HotSpot、OpenJ9 等实现",
          "details": [
            {
              "id": "jvm-jdk-jre区别-1-0-0-d0",
              "tag": "JVM",
              "desc": "虚拟机，执行字节码，有 HotSpot/OpenJ9 等实现"
            },
            {
              "id": "jvm-jdk-jre区别-1-0-0-d1",
              "tag": "JRE",
              "desc": "JVM + rt.jar 等核心类库，运行 Java 程序的最小环境"
            },
            {
              "id": "jvm-jdk-jre区别-1-0-0-d2",
              "tag": "JDK",
              "desc": "JRE + javac/jdb/jstack 等开发工具"
            },
            {
              "id": "jvm-jdk-jre区别-1-0-0-d3",
              "tag": "javac 编译 .java -> .class，JVM 加载执行 .class",
              "desc": "javac将源码编译为字节码.class文件，JVM通过类加载器加载并解释或JIT编译执行"
            }
          ]
        },
        {
          "id": "oraclejdkvsopenjdk-1-0-1",
          "tag": "Oracle JDK vs OpenJDK",
          "desc": "Oracle 商用收费，OpenJDK 开源免费，代码高度一致。Oracle JDK 有少量商业特性（Flight Recorder 等）。生产推荐 OpenJDK 发行版：Adoptium/Temurin、Amazon Corretto、阿里 Dragonwell",
          "details": [
            {
              "id": "oraclejdkvsopenjdk-1-0-1-d0",
              "tag": "Oracle JDK",
              "desc": "Flight Recorder/JMC/JSSE crypto商业特性"
            },
            {
              "id": "oraclejdkvsopenjdk-1-0-1-d1",
              "tag": "OpenJDK",
              "desc": "开源社区维护无商业特性代码高度一致(>99%)"
            },
            {
              "id": "oraclejdkvsopenjdk-1-0-1-d2",
              "tag": "推荐生产",
              "desc": "Adoptium/Temurin/Corretto/Dragonwell免费替代"
            },
            {
              "id": "oraclejdkvsopenjdk-1-0-1-d3",
              "tag": "Oracle JDK 17+",
              "desc": "可免费用于生产(不可商用支持)NFTC协议"
            },
            {
              "id": "oraclejdkvsopenjdk-1-0-1-d4",
              "tag": "GraalVM",
              "desc": "AOT编译+多语言运行+Truffle框架适合微服务云原生"
            }
          ]
        },
        {
          "id": "编译型还是解释型-1-0-2",
          "tag": "编译型还是解释型",
          "desc": "混合型：先通过 javac 编译成字节码(.class)，JVM 解释执行字节码。HotSpot JVM 还有 JIT 即时编译器（C1/C2）将热点代码编译为本地机器码提升性能",
          "details": [
            {
              "id": "编译型还是解释型-1-0-2-d0",
              "tag": "编译型",
              "desc": "Java先编译为字节码(.class)再JIT编译为机器码混合策略"
            },
            {
              "id": "编译型还是解释型-1-0-2-d1",
              "tag": "JIT分层",
              "desc": "C1(Client快速优化)→C2(Server深度优化)渐进编译"
            },
            {
              "id": "编译型还是解释型-1-0-2-d2",
              "tag": "解释执行",
              "desc": "首次运行字节码逐条解释不等待编译启动快"
            },
            {
              "id": "编译型还是解释型-1-0-2-d3",
              "tag": "AOT编译",
              "desc": "GraalVM Native Image提前编译为本地可执行启动极快"
            },
            {
              "id": "编译型还是解释型-1-0-2-d4",
              "tag": "热点探测",
              "desc": "方法调用计数+回边计数超阈值触发JIT编译优化"
            }
          ]
        },
        {
          "id": "java只有值传递-1-0-3",
          "tag": "Java 只有值传递",
          "desc": "基本类型传值副本，引用类型传地址副本（不是引用本身）。方法内修改引用对象属性会影响原对象，但重新赋值引用参数不影响原引用",
          "details": [
            {
              "id": "java只有值传递-1-0-3-d0",
              "tag": "基本类型 int/long 等传值的副本，方法内修改不影响原变量",
              "desc": "基本类型参数传递的是值副本，方法内对参数的修改仅影响副本，原变量值不变"
            },
            {
              "id": "java只有值传递-1-0-3-d1",
              "tag": "引用类型传的",
              "desc": "引用类型传的是地址值的副本（不是引用本身）"
            },
            {
              "id": "java只有值传递-1-0-3-d2",
              "tag": "方法内",
              "desc": "方法内修改对象属性会影响原对象（因为指向同一地址）"
            },
            {
              "id": "java只有值传递-1-0-3-d3",
              "tag": "方法内重新 new 或赋值不影响原引用",
              "desc": "引用类型传地址副本，方法内重新赋值或new只改变副本指向，原引用仍指向原对象"
            }
          ]
        },
        {
          "id": "8种基本类型-1-0-4",
          "tag": "8 种基本类型",
          "desc": "byte(1B)/short(2B)/int(4B)/long(8B)/float(4B)/double(8B)/char(2B)/boolean(1B)。对应包装类 Byte/Short/Integer/Long/Float/Double/Character/Boolean",
          "details": [
            {
              "id": "8种基本类型-1-0-4-d0",
              "tag": "整型",
              "desc": "byte(1)/short(2)/int(4)/long(8)默认int long需加L后缀"
            },
            {
              "id": "8种基本类型-1-0-4-d1",
              "tag": "浮点",
              "desc": "float(4)/double(8)默认double float需加F后缀精度有限"
            },
            {
              "id": "8种基本类型-1-0-4-d2",
              "tag": "字符",
              "desc": "char(2)Unicode编码单引号赋值可存中文"
            },
            {
              "id": "8种基本类型-1-0-4-d3",
              "tag": "布尔",
              "desc": "boolean JVM实现用int(1byte)只有true/false"
            },
            {
              "id": "8种基本类型-1-0-4-d4",
              "tag": "自动提升",
              "desc": "byte→short→int→long→float→double运算时自动向上转换"
            }
          ]
        },
        {
          "id": "自动装箱拆箱-1-0-5",
          "tag": "自动装箱拆箱",
          "desc": "装箱 `valueOf()`、拆箱 `xxxValue()`，频繁操作有性能开销。注意：包装类未初始化时为 null，自动拆箱会 NPE；循环中 `Integer i=0; for(...){i++;}` 每次都装箱拆箱",
          "details": [
            {
              "id": "自动装箱拆箱-1-0-5-d0",
              "tag": "装箱",
              "desc": "Integer.valueOf(128)缓存-128~127范围内复用对象超出新建"
            },
            {
              "id": "自动装箱拆箱-1-0-5-d1",
              "tag": "拆箱",
              "desc": "intValue()自动拆箱NPE风险:null对象拆箱抛NullPointerException"
            },
            {
              "id": "自动装箱拆箱-1-0-5-d2",
              "tag": "Integer缓存",
              "desc": "IntegerCache.cache数组预存-128~127valueOf复用节省内存"
            },
            {
              "id": "自动装箱拆箱-1-0-5-d3",
              "tag": "面试陷阱",
              "desc": "Integer a=127,b=127;a==b为true;Integer c=128,d=128;a==b为false"
            },
            {
              "id": "自动装箱拆箱-1-0-5-d4",
              "tag": "最佳实践",
              "desc": "基本类型比较用==;包装类比较用equals();POJO用包装类允许null"
            }
          ]
        },
        {
          "id": "integer缓存池-1-0-6",
          "tag": "Integer 缓存池",
          "desc": "`IntegerCache` 缓存 -128~127，`valueOf()` 在范围内返回缓存对象，`==` 为 true。超出范围 new 新对象 `==` 为 false。Byte/Short/Long/Character 也有类似缓存。可通过 `-XX:AutoBoxCacheMax` 调整上限",
          "details": [
            {
              "id": "integer缓存池-1-0-6-d0",
              "tag": "IntegerCache 内部类，",
              "desc": "IntegerCache 内部类，缓存 -128~127 范围的 Integer 对象"
            },
            {
              "id": "integer缓存池-1-0-6-d1",
              "tag": "valueOf() 在范围内返回缓存对象，== 比较为 true",
              "desc": "Integer.valueOf(-128~127)返回IntegerCache缓存对象，同一缓存实例==比较结果为true"
            },
            {
              "id": "integer缓存池-1-0-6-d2",
              "tag": "new Integer(127) 绕过",
              "desc": "new Integer(127) 绕过缓存，每次创建新对象"
            },
            {
              "id": "integer缓存池-1-0-6-d3",
              "tag": "Byte/Short/Long/Character 也有类似缓存机制",
              "desc": "Byte缓存0~127，Short/Long缓存-128~127，Character缓存0~127，均使用各自内部Cache类"
            },
            {
              "id": "integer缓存池-1-0-6-d4",
              "tag": "-XX",
              "desc": "AutoBoxCacheMax 可调整上限"
            }
          ]
        }
      ]
    },
    {
      "id": "1-2--与-equalshashcode-1-1",
      "title": "1.2 == 与 equals/hashCode",
      "points": [
        {
          "id": "vsequals-1-1-0",
          "tag": "== vs equals()",
          "desc": "`==` 比较基本类型值或引用类型内存地址；`equals()` 默认比较地址（Object 类），String/Integer 等重写后比较内容。经典题：`new String('a')` 创建 2 个对象（堆 + 常量池）",
          "details": [
            {
              "id": "vsequals-1-1-0-d0",
              "tag": "==比较",
              "desc": "基本类型比值;引用类型比地址(堆中对象同一性)"
            },
            {
              "id": "vsequals-1-1-0-d1",
              "tag": "equals默认",
              "desc": "Object类equals等同于==;String重写equals比较字符内容"
            },
            {
              "id": "vsequals-1-1-0-d2",
              "tag": "hashCode契约",
              "desc": "equals相同则hashCode必须相同;hashCode相同equals不一定相同"
            },
            {
              "id": "vsequals-1-1-0-d3",
              "tag": "重写规则",
              "desc": "equals重写必须同时重写hashCode保证HashMap一致性"
            },
            {
              "id": "vsequals-1-1-0-d4",
              "tag": "实用方法",
              "desc": "Objects.equals()避免null NPE;Objects.hash()计算hashCode"
            }
          ]
        },
        {
          "id": "hashcode契约-1-1-1",
          "tag": "hashCode 契约",
          "desc": "equals 相等则 hashCode 必相等；hashCode 相等 equals 不一定相等（哈希冲突）。重写 equals 必须重写 hashCode。HashMap 先用 hashCode 定位桶，再用 equals 比较键",
          "details": [
            {
              "id": "hashcode契约-1-1-1-d0",
              "tag": "核心契约",
              "desc": "equals相同→hashCode必须相同;hashCode相同→equals未必相同(哈希冲突)"
            },
            {
              "id": "hashcode契约-1-1-1-d1",
              "tag": "重写规则",
              "desc": "重写equals必须同时重写hashCode否则HashMap会出bug"
            },
            {
              "id": "hashcode契约-1-1-1-d2",
              "tag": "HashMap流程",
              "desc": "先hashCode定位桶→再equals比较键→哈希冲突时链表/红黑树"
            },
            {
              "id": "hashcode契约-1-1-1-d3",
              "tag": "String实现",
              "desc": "按字符内容计算hash保证equals相同的字符串hashCode一致"
            },
            {
              "id": "hashcode契约-1-1-1-d4",
              "tag": "常见错误",
              "desc": "只重写equals不重写hashCode导致同一对象分到不同桶数据丢失"
            }
          ]
        }
      ]
    },
    {
      "id": "1-3-string-相关-1-2",
      "title": "1.3 String 相关",
      "points": [
        {
          "id": "string不可变-1-2-0",
          "tag": "String 不可变",
          "desc": "final 类 + final byte[]（JDK9+，JDK8 为 char[]），保证线程安全、字符串常量池复用、hashCode 可缓存。每次拼接（+）生成新 String 对象",
          "details": [
            {
              "id": "string不可变-1-2-0-d0",
              "tag": "类被 final 修饰不可",
              "desc": "类被 final 修饰不可继承"
            },
            {
              "id": "string不可变-1-2-0-d1",
              "tag": "内部 byte[]（JDK9+）/char[]（JDK8）被 final 修饰不可变",
              "desc": "String类final修饰不可继承，内部存储数组final修饰且私有无setter，外部无法修改内容"
            },
            {
              "id": "string不可变-1-2-0-d2",
              "tag": "优点1",
              "desc": "线程安全，多线程下无需同步（优点1的详细说明：String 不可变中关于优点1的内容）"
            },
            {
              "id": "string不可变-1-2-0-d3",
              "tag": "优点2",
              "desc": "字符串常量池可复用相同字面量（优点2的详细说明：String 不可变中关于优点2的内容）"
            },
            {
              "id": "string不可变-1-2-0-d4",
              "tag": "优点3",
              "desc": "hashCode 只需计算一次并缓存"
            },
            {
              "id": "string不可变-1-2-0-d5",
              "tag": "每次 + 拼接都",
              "desc": "每次 + 拼接都生成新 String 对象"
            }
          ]
        },
        {
          "id": "string-stringbuilder-stringbuffer-1-2-1",
          "tag": "String/StringBuilder/StringBuffer",
          "desc": "String 不可变；Builder 可变线程不安全性能最好（单线程首选）；Buffer 可变线程安全 synchronized（多线程）。拼接优先 `StringBuilder.append()`，编译器会把 `+` 优化为 StringBuilder",
          "details": [
            {
              "id": "string-stringbuilder-stringbuffer-1-2-1-d0",
              "tag": "String不可变",
              "desc": "final类+char[]被final修饰+无修改方法+线程安全+常量池复用"
            },
            {
              "id": "string-stringbuilder-stringbuffer-1-2-1-d1",
              "tag": "StringBuilder可变",
              "desc": "char[]非final+append/insert/delete操作+非线程安全+单线程首选"
            },
            {
              "id": "string-stringbuilder-stringbuffer-1-2-1-d2",
              "tag": "StringBuffer可变",
              "desc": "同StringBuilder+synchronized方法线程安全+多线程用性能差"
            },
            {
              "id": "string-stringbuilder-stringbuffer-1-2-1-d3",
              "tag": "性能",
              "desc": "String拼接(每次新建)→StringBuilder(原地修改)→StringBuffer(加锁慢)"
            },
            {
              "id": "string-stringbuilder-stringbuffer-1-2-1-d4",
              "tag": "JDK9优化",
              "desc": "String底层byte[]+coder(LATIN1/UTF16)紧凑字符串节省内存空间"
            }
          ]
        },
        {
          "id": "字符串常量池-1-2-2",
          "tag": "字符串常量池",
          "desc": "JDK7 后从方法区（永久代）移到堆中（避免 OOM）。相同字面量引用常量池同一对象。`new String('a')` 创建堆对象 + 常量池对象（如不存在）",
          "details": [
            {
              "id": "字符串常量池-1-2-2-d0",
              "tag": "JDK6 及之前在方法区（永久代）",
              "desc": "JDK6字符串常量池位于方法区永久代，永久代大小有限易OOM，JDK7后迁至堆内存"
            },
            {
              "id": "字符串常量池-1-2-2-d1",
              "tag": "JDK7 移入 Java 堆中（",
              "desc": "JDK7 移入 Java 堆中（避免永久代 OOM）"
            },
            {
              "id": "字符串常量池-1-2-2-d2",
              "tag": "相同字面量引用常量池中同一个对象",
              "desc": "编译期确定的字符串字面量自动进入常量池，相同字面量指向同一引用，节省内存"
            },
            {
              "id": "字符串常量池-1-2-2-d3",
              "tag": "new String('a')",
              "desc": "new String('a') 创建堆对象 + 常量池对象"
            },
            {
              "id": "字符串常量池-1-2-2-d4",
              "tag": "intern() 可手动将字符串加入常量池",
              "desc": "调用intern()时若常量池已有等值字符串返回池中引用，否则将此字符串加入池并返回引用"
            }
          ]
        },
        {
          "id": "intern-1-2-3",
          "tag": "intern()",
          "desc": "native 方法。常量池有 equals 相等的字符串则返回引用；不存在则 JDK6 复制到常量池，JDK7+ 存堆引用。经典题：`new String('a')+new String('b').intern()='ab'` JDK7+ 为 true",
          "details": [
            {
              "id": "intern-1-2-3-d0",
              "tag": "intern作用",
              "desc": "将字符串引用移入常量池返回池中唯一引用节省内存"
            },
            {
              "id": "intern-1-2-3-d1",
              "tag": "常量池位置",
              "desc": "JDK7前PermGen(易OOM)→JDK7+移入Heap可GC回收"
            },
            {
              "id": "intern-1-2-3-d2",
              "tag": "intern时机",
              "desc": "字面量和String常量编译期自动入池;new String不入池需手动intern"
            },
            {
              "id": "intern-1-2-3-d3",
              "tag": "面试陷阱",
              "desc": "new String('a')+new String('b').intern()='ab' JDK7+为true"
            },
            {
              "id": "intern-1-2-3-d4",
              "tag": "实用场景",
              "desc": "大量重复字符串(字典值/状态码)用intern节省内存避免重复对象"
            }
          ]
        }
      ]
    },
    {
      "id": "1-4-泛型与序列化-1-3",
      "title": "1.4 泛型与序列化",
      "points": [
        {
          "id": "泛型类型擦除-1-3-0",
          "tag": "泛型类型擦除",
          "desc": "编译后擦除为上界（默认 Object）。`List<String>` 和 `List<Integer>` 运行时都是 List。可通过反射 `getGenericSuperclass()` 获取 ParameterizedType 拿到泛型实参",
          "details": [
            {
              "id": "泛型类型擦除-1-3-0-d0",
              "tag": "编译期检查",
              "desc": "泛型保证类型安全编译期发现错误避免运行时ClassCastException"
            },
            {
              "id": "泛型类型擦除-1-3-0-d1",
              "tag": "擦除规则",
              "desc": "无限定擦除为Object有上界擦除为上界类型运行时无泛型信息"
            },
            {
              "id": "泛型类型擦除-1-3-0-d2",
              "tag": "运行时等价",
              "desc": "List<String>与List<Integer>运行时同一Class对象无法区分"
            },
            {
              "id": "泛型类型擦除-1-3-0-d3",
              "tag": "桥方法",
              "desc": "编译器生成bridge方法保持多态兼容子类签名与父类擦除后签名匹配"
            },
            {
              "id": "泛型类型擦除-1-3-0-d4",
              "tag": "类型获取",
              "desc": "反射Field.getGenericType()获取ParameterizedType拿到泛型实参"
            }
          ]
        },
        {
          "id": "通配符pecs-1-3-1",
          "tag": "通配符 PECS",
          "desc": "`<?>` 无界只读 null；`<? extends T>` 上界协变只读（Producer Extends）；`<? super T>` 下界逆变只写（Consumer Super）。频繁读取用 extends，频繁插入用 super",
          "details": [
            {
              "id": "通配符pecs-1-3-1-d0",
              "tag": "PECS原则",
              "desc": "Producer Extends Consumer Super选择通配符的方向"
            },
            {
              "id": "通配符pecs-1-3-1-d1",
              "tag": "? extends T",
              "desc": "上界通配符只能读不能写适合从集合获取数据"
            },
            {
              "id": "通配符pecs-1-3-1-d2",
              "tag": "? super T",
              "desc": "下界通配符只能写不能读适合往集合放入数据"
            },
            {
              "id": "通配符pecs-1-3-1-d3",
              "tag": "上界举例",
              "desc": "List<? extends Number>可读Number子类但不能add任何元素"
            },
            {
              "id": "通配符pecs-1-3-1-d4",
              "tag": "下界举例",
              "desc": "List<? super Integer>可写Integer及其父类但get只能得Object"
            }
          ]
        },
        {
          "id": "序列化-1-3-2",
          "tag": "序列化",
          "desc": "实现 Serializable，ObjectOutputStream.writeObject()/readObject()。transient 不序列化，static 不参与。反序列化不调用构造方法。serialVersionUID 不匹配抛 InvalidClassException，建议显式定义",
          "details": [
            {
              "id": "序列化-1-3-2-d0",
              "tag": "Serializable",
              "desc": "标记接口无方法表示可序列化ObjectOutputStream.writeObject"
            },
            {
              "id": "序列化-1-3-2-d1",
              "tag": "transient",
              "desc": "修饰字段序列化时跳过不持久化反序列化后为默认值"
            },
            {
              "id": "序列化-1-3-2-d2",
              "tag": "serialVersionUID",
              "desc": "版本控制反序列化ID不一致抛InvalidClassException建议显式声明"
            },
            {
              "id": "序列化-1-3-2-d3",
              "tag": "Externalizable",
              "desc": "自定义序列化需实现writeExternal/readExternal精确控制"
            },
            {
              "id": "序列化-1-3-2-d4",
              "tag": "安全注意",
              "desc": "反序列化可被攻击需ObjectInputFilter白名单过滤验证输入数据"
            }
          ]
        }
      ]
    },
    {
      "id": "1-5-反射与代理-1-4",
      "title": "1.5 反射与代理",
      "points": [
        {
          "id": "反射核心类-1-4-0",
          "tag": "反射核心类",
          "desc": "Class/Field/Method/Constructor。获取 Class：`Class.forName()` / `obj.getClass()` / `ClassName.class`。应用：Spring IoC、MyBatis、注解处理。反射性能较差，可缓存 Method 对象优化",
          "details": [
            {
              "id": "反射核心类-1-4-0-d0",
              "tag": "Class对象",
              "desc": "反射入口通过类名/对象/ClassLoader获取三种方式"
            },
            {
              "id": "反射核心类-1-4-0-d1",
              "tag": "Field",
              "desc": "反射访问和修改类字段包括private需setAccessible(true)"
            },
            {
              "id": "反射核心类-1-4-0-d2",
              "tag": "Method",
              "desc": "反射调用类方法invoke执行任意方法突破访问限制"
            },
            {
              "id": "反射核心类-1-4-0-d3",
              "tag": "Constructor",
              "desc": "反射创建对象newInstance突破构造限制灵活实例化"
            },
            {
              "id": "反射核心类-1-4-0-d4",
              "tag": "setAccessible",
              "desc": "绕过访问控制检查操作私有成员但受安全管理器约束"
            }
          ]
        },
        {
          "id": "jdk动态代理-1-4-1",
          "tag": "JDK 动态代理",
          "desc": "基于接口，`Proxy.newProxyInstance(classLoader, interfaces, InvocationHandler)` 运行时生成实现指定接口的代理类。`InvocationHandler.invoke()` 拦截方法调用。目标类必须实现接口",
          "details": [
            {
              "id": "jdk动态代理-1-4-1-d0",
              "tag": "基于接口",
              "desc": "目标类必须实现接口才能被代理无法代理无接口的类"
            },
            {
              "id": "jdk动态代理-1-4-1-d1",
              "tag": "Proxy生成",
              "desc": "newProxyInstance动态生成代理类字节码加载到JVM"
            },
            {
              "id": "jdk动态代理-1-4-1-d2",
              "tag": "InvocationHandler",
              "desc": "拦截所有方法调用统一处理逻辑invoke(proxy,method,args)"
            },
            {
              "id": "jdk动态代理-1-4-1-d3",
              "tag": "局限",
              "desc": "只能代理接口方法不能代理类方法无接口的类无法使用"
            },
            {
              "id": "jdk动态代理-1-4-1-d4",
              "tag": "原理",
              "desc": "运行时生成实现接口的代理类调用时转发到handler.invoke"
            }
          ]
        },
        {
          "id": "cglib代理-1-4-2",
          "tag": "CGLIB 代理",
          "desc": "基于继承，通过 ASM 生成目标类子类。`MethodInterceptor.intercept()` 拦截。不能代理 final 类/方法。Spring AOP：有接口用 JDK 代理，无接口用 CGLIB。SpringBoot 2.0+ 默认 CGLIB",
          "details": [
            {
              "id": "cglib代理-1-4-2-d0",
              "tag": "基于继承",
              "desc": "生成目标类子类覆盖方法实现代理无需接口"
            },
            {
              "id": "cglib代理-1-4-2-d1",
              "tag": "MethodInterceptor",
              "desc": "拦截方法调用Enhancer.create创建代理对象"
            },
            {
              "id": "cglib代理-1-4-2-d2",
              "tag": "不能代理final",
              "desc": "final类不可继承final方法不可覆盖无法生成子类"
            },
            {
              "id": "cglib代理-1-4-2-d3",
              "tag": "无需接口",
              "desc": "可代理任意非final类优于JDK代理适用范围更广"
            },
            {
              "id": "cglib代理-1-4-2-d4",
              "tag": "Spring选择",
              "desc": "有接口用JDK代理无接口用CGLIB代理;Boot2.x默认CGLIB"
            }
          ]
        }
      ]
    },
    {
      "id": "1-6-其他-1-5",
      "title": "1.6 其他",
      "points": [
        {
          "id": "bigdecimal-1-5-0",
          "tag": "BigDecimal",
          "desc": "高精度计算用 String 构造器（`new BigDecimal('0.1')` 非 `new BigDecimal(0.1)`）。`compareTo()` 比较非 `equals()`（equals 认为 1.0≠1.00）。`setScale()` 设小数位 + RoundingMode.HALF_UP",
          "details": [
            {
              "id": "bigdecimal-1-5-0-d0",
              "tag": "不可变性",
              "desc": "BigDecimal运算返回新对象原值不变安全使用"
            },
            {
              "id": "bigdecimal-1-5-0-d1",
              "tag": "任意精度",
              "desc": "内部用int[]存储避免double精度丢失(0.1+0.2!=0.3)"
            },
            {
              "id": "bigdecimal-1-5-0-d2",
              "tag": "构造方式",
              "desc": "推荐String或valueOf构造忌用double构造精度不准确"
            },
            {
              "id": "bigdecimal-1-5-0-d3",
              "tag": "比较方式",
              "desc": "compareTo比较值大小equals比较值+精度(1.0!=1.00)"
            },
            {
              "id": "bigdecimal-1-5-0-d4",
              "tag": "舍入模式",
              "desc": "setScale指定精度和RoundingMode(HALF_UP四舍五入/HALF_EVEN银行家)"
            }
          ]
        },
        {
          "id": "unsafe-1-5-1",
          "tag": "Unsafe",
          "desc": "sun.misc.Unsafe 提供直接操作内存（allocateMemory/putLong）、CAS（compareAndSwapInt）、线程挂起恢复（park/unpark）、allocateInstance（不调用构造方法创建对象）。Atomic 类底层依赖 Unsafe",
          "details": [
            {
              "id": "unsafe-1-5-1-d0",
              "tag": "直接内存",
              "desc": "allocateMemory/freeMemory操作堆外内存不受GC管理"
            },
            {
              "id": "unsafe-1-5-1-d1",
              "tag": "CAS操作",
              "desc": "compareAndSwapInt原子更新无锁并发比synchronized轻量"
            },
            {
              "id": "unsafe-1-5-1-d2",
              "tag": "绕过安全",
              "desc": "直接访问私有字段无视访问修饰符无安全检查"
            },
            {
              "id": "unsafe-1-5-1-d3",
              "tag": "线程调度",
              "desc": "park/unpark精准阻塞唤醒线程比wait/notify更灵活"
            },
            {
              "id": "unsafe-1-5-1-d4",
              "tag": "危险警告",
              "desc": "无安全检查使用不当可导致JVM崩溃仅框架内部使用"
            }
          ]
        },
        {
          "id": "spi机制-1-5-2",
          "tag": "SPI 机制",
          "desc": "Service Provider Interface。META-INF/services/ 放接口全限定名文件，内容为实现类全限定名。`ServiceLoader.load()` 加载。应用：JDBC DriverManager、SpringBoot 自动装配、Dubbo 扩展点",
          "details": [
            {
              "id": "spi机制-1-5-2-d0",
              "tag": "ServiceLoader",
              "desc": "META-INF/services/接口全限定名文件加载实现类"
            },
            {
              "id": "spi机制-1-5-2-d1",
              "tag": "解耦设计",
              "desc": "调用方只依赖接口不依赖具体实现类运行时动态发现"
            },
            {
              "id": "spi机制-1-5-2-d2",
              "tag": "JDBC驱动",
              "desc": "DriverManager通过SPI发现驱动实现自动注册"
            },
            {
              "id": "spi机制-1-5-2-d3",
              "tag": "SpringBoot",
              "desc": "自动配置用SpringFactoriesLoader类似SPI机制"
            },
            {
              "id": "spi机制-1-5-2-d4",
              "tag": "双亲委派突破",
              "desc": "SPI接口Bootstrap加载实现需线程上下文类加载器"
            }
          ]
        },
        {
          "id": "枚举单例-1-5-3",
          "tag": "枚举单例",
          "desc": "枚举本质是继承 Enum 的 final 类，每个常量是 static 实例。天然线程安全、防反射攻击（反射创建枚举抛异常）、防序列化破坏。Effective Java 推荐最佳单例",
          "details": [
            {
              "id": "枚举单例-1-5-3-d0",
              "tag": "天然单例",
              "desc": "枚举值在类加载时JVM保证唯一实例无线程安全问题"
            },
            {
              "id": "枚举单例-1-5-3-d1",
              "tag": "防反射",
              "desc": "反射创建枚举抛IllegalArgumentException无法newInstance破坏"
            },
            {
              "id": "枚举单例-1-5-3-d2",
              "tag": "防序列化重建",
              "desc": "枚举反序列化返回已有实例不新建保证唯一"
            },
            {
              "id": "枚举单例-1-5-3-d3",
              "tag": "防克隆",
              "desc": "枚举不支持Cloneable无法克隆保证实例唯一"
            },
            {
              "id": "枚举单例-1-5-3-d4",
              "tag": "最优选择",
              "desc": "Effective Java推荐枚举实现单例最安全最简洁"
            }
          ]
        },
        {
          "id": "stream-api深入-1-5-4",
          "tag": "Stream API深入",
          "desc": "Stream API流式处理集合数据(filter/map/reduce/collect/flatMap/groupingBy/partitioningBy)。创建:Collection.stream()/Stream.of()/Arrays.stream()。中间操作lazy(filter/map/flatMap/sorted/distinct/peek/limit/skip)无中间结果直到终端操作触发。终端操作terminal(collect/forEach/reduce/count/min/max/findFirst/findAny/toArray)。收集器Collectors:toList/toSet/toMap/groupingBy分类/partitioningBy分区/counting统计/summingInt求和/reducing归约。并行流parallelStream():ForkJoinPool线程池默认CPU核数注意线程安全避免共享可变状态。面试重点:中间vs终端操作/lazy机制/groupingBy用法/并行流线程安全",
          "details": [
            {
              "id": "stream-api深入-1-5-4-d0",
              "tag": "中间操作lazy",
              "desc": "filter/map/flatMap/sorted/distinct/peek/limit/skip不立即执行只是记录操作,直到终端操作触发整个管道流水线执行"
            },
            {
              "id": "stream-api深入-1-5-4-d1",
              "tag": "终端操作terminal",
              "desc": "collect收集/forEach遍历/reduce归约/count计数/min/max极值/findFirst/findAny/toArray,触发执行后Stream不能再使用"
            },
            {
              "id": "stream-api深入-1-5-4-d2",
              "tag": "Collectors收集器",
              "desc": "toList/toSet/toMap/groupingBy(classifier,downstream)/partitioningBy(predicate)/counting/summingInt/averagingDouble/reducing/joining拼接字符串"
            },
            {
              "id": "stream-api深入-1-5-4-d3",
              "tag": "groupingBy多层分组",
              "desc": "groupingBy(classifier,groupingBy(subClassifier))多层嵌套分组+downstream下游收集器如counting/summing统计每分组"
            },
            {
              "id": "stream-api深入-1-5-4-d4",
              "tag": "reduce归约",
              "desc": "reduce(identity,accumulator)有初始值/reduce(accumulator)无初始值返回Optional/reduce(identity,accumulator,combiner)并行流合并"
            },
            {
              "id": "stream-api深入-1-5-4-d5",
              "tag": "flatMap扁平化",
              "desc": "flatMap将Stream<Stream<T>>展开为Stream<T>,如List<List<String>>→Stream<String>;map是一对一flatMap是一对多"
            },
            {
              "id": "stream-api深入-1-5-4-d6",
              "tag": "并行流parallelStream",
              "desc": "ForkJoinPool默认CPU核数线程池,适合大数据量CPU密集计算;注意线程安全避免共享可变状态/避免在parallelStream中使用synchronized"
            },
            {
              "id": "stream-api深入-1-5-4-d7",
              "tag": "Stream vs for循环",
              "desc": "Stream表达力强(声明式)/可并行/可链式;for循环性能略好(简单遍历)/调试方便;复杂过滤分组用Stream简单遍历用for"
            }
          ]
        },
        {
          "id": "lambda与函数式接口-1-5-5",
          "tag": "Lambda与函数式接口",
          "desc": "Lambda表达式简洁表示可传递的匿名函数(parameters)->{body}。函数式接口@FunctionalInterface仅一个抽象方法(Runnable/Callable/Consumer/Supplier/Function/BiFunction/Predicate/Comparator)。方法引用类名::方法名(静态/实例/构造器)。变量捕获:Lambda可捕获外部局部变量但必须是final或effectively final(不可修改)。类型推断:编译器根据上下文推断Lambda参数类型无需显式声明。面试重点:函数式接口分类/Lambda vs匿名类/方法引用形式/变量捕获限制",
          "details": [
            {
              "id": "lambda与函数式接口-1-5-5-d0",
              "tag": "Lambda语法",
              "desc": "(a,b)->a+b无参数()->表达式/单参数x->表达式/多参数(a,b)->{多行语句return}/类型推断可省略参数类型"
            },
            {
              "id": "lambda与函数式接口-1-5-5-d1",
              "tag": "函数式接口",
              "desc": "@FunctionalInterface仅一个抽象方法:Consumer<T>消费(accept)/Supplier<T>供给(get)/Function<T,R>转换(apply)/Predicate<T>判断(test)/Comparator比较"
            },
            {
              "id": "lambda与函数式接口-1-5-5-d2",
              "tag": "方法引用",
              "desc": "静态方法引用(Integer::parseInt)/实例方法引用(str::length)/构造器引用(ArrayList::new)/类型方法引用(String::toUpperCase)"
            },
            {
              "id": "lambda与函数式接口-1-5-5-d3",
              "tag": "变量捕获限制",
              "desc": "Lambda捕获外部局部变量必须是final或effectively final(编译后不修改),因为Lambda可能在另一线程执行捕获的是副本而非引用"
            },
            {
              "id": "lambda与函数式接口-1-5-5-d4",
              "tag": "Lambda vs匿名类",
              "desc": "Lambda只能实现函数式接口(单方法)/匿名类可实现任意接口抽象类;Lambda不创建新类(invokedynamic)/匿名类生成.class文件;Lambdathis指向外部类匿名类this指向自身"
            },
            {
              "id": "lambda与函数式接口-1-5-5-d5",
              "tag": "常用函数式接口",
              "desc": "Consumer消费void/Supplier供给T/Function转换T→R/BiFunction双参T,U→R/Predicate判断boolean/UnaryOperator一元T→T/BinaryOperator二元T,T→T"
            },
            {
              "id": "lambda与函数式接口-1-5-5-d6",
              "tag": "Optional函数式用法",
              "desc": "Optional.map(Function)/filter(Predicate)/flatMap(Function)/ifPresent(Consumer)/orElseGet(Supplier)/orElseThrow(Supplier)链式操作避免null检查"
            }
          ]
        },
        {
          "id": "optional深入-1-5-6",
          "tag": "Optional深入",
          "desc": "Optional<T>容器对象避免null引用导致NPE。创建:Optional.of(value非null)/Optional.ofNullable(value可为null)/Optional.empty()。操作:isPresent()有值/ifPresent(Consumer)有值消费/get()取值(无值抛NoSuchElementException)/orElse(default)无值返回默认/orElseGet(Supplier)无值延迟计算默认/orElseThrow(Supplier)无值抛自定义异常。转换:map(Function)转换值/filter(Predicate)过滤/flatMap(Function)嵌套Optional展开。面试重点:Optional最佳实践/避免get()/orElse vs orElseGet/链式操作",
          "details": [
            {
              "id": "optional深入-1-5-6-d0",
              "tag": "创建方式",
              "desc": "Optional.of(value)值不能为null否则NPE/Optional.ofNullable(value)值可为null安全/Optional.empty()空Optional;不要用Optional做字段类型"
            },
            {
              "id": "optional深入-1-5-6-d1",
              "tag": "检查与获取",
              "desc": "isPresent()判断有值/ifPresent(Consumer)有值执行消费/get()直接取值无值抛NoSuchElementException(不推荐使用)"
            },
            {
              "id": "optional深入-1-5-6-d2",
              "tag": "orElse系列",
              "desc": "orElse(default)无值返回默认值(总是计算default)/orElseGet(Supplier)无值延迟计算默认值(推荐)/orElseThrow(Supplier)无值抛自定义异常"
            },
            {
              "id": "optional深入-1-5-6-d3",
              "tag": "map/flatMap",
              "desc": "map(Function)有值则转换返回新Optional/flatMap(Function)返回的Optional自动展开避免Optional<Optional<T>>嵌套"
            },
            {
              "id": "optional深入-1-5-6-d4",
              "tag": "filter",
              "desc": "filter(Predicate)有值且满足条件返回原Optional/不满足返回empty(),适合链式过滤如opt.filter(x->x>0).orElse(0)"
            },
            {
              "id": "optional深入-1-5-6-d5",
              "tag": "最佳实践",
              "desc": "方法返回值用Optional包装/不要用Optional做字段或构造器参数/不要用Optional.get()直接取值/不要用Optional代替null做集合元素/链式操作优于if-else检查"
            },
            {
              "id": "optional深入-1-5-6-d6",
              "tag": "避免陷阱",
              "desc": "orElse()总是计算默认值即使Optional有值(性能浪费)→用orElseGet()延迟计算;直接get()无值时抛异常→用orElse/orElseThrow替代"
            }
          ]
        },
        {
          "id": "虚拟线程与java新特性-1-5-7",
          "tag": "虚拟线程与Java新特性",
          "desc": "JDK21虚拟线程Virtual Threads轻量级线程(Millions级)由JVM调度而非OS,适合IO密集高并发场景(每个请求一个线程模型回归)。创建:Thread.startVirtualThread(Runnable)/Executors.newVirtualThreadPerTaskExecutor()/Thread.ofVirtual().name(\"vt\").start(r)。关键:虚拟线程遇IO阻塞时自动卸载carrier线程(平台线程),不阻塞OS线程;pinning问题:synchronized/native方法内阻塞不卸载需改ReentrantLock。其他JDK8-21:switch表达式(JDK14)/text blocks(JDK15)/sealed classes(JDK17)/pattern matching switch(JDK21)/record类(JDK16)。面试重点:虚拟线程vs平台线程/pinning问题/适用场景",
          "details": [
            {
              "id": "虚拟线程与java新特性-1-5-7-d0",
              "tag": "虚拟线程原理",
              "desc": "JVM管理的轻量级线程,栈帧存储在堆内存而非OS栈,遇IO阻塞自动unmount从carrier线程卸载,不占用OS线程资源,可创建百万级"
            },
            {
              "id": "虚拟线程与java新特性-1-5-7-d1",
              "tag": "创建方式",
              "desc": "Thread.startVirtualThread(runnable)/Thread.ofVirtual().name(\"vt\").start(r)/Executors.newVirtualThreadPerTaskExecutor()每任务一个虚拟线程池"
            },
            {
              "id": "虚拟线程与java新特性-1-5-7-d2",
              "tag": "vs平台线程",
              "desc": "平台线程:1:1映射OS线程创建销毁开销大数量受限(~数千)/虚拟线程:M:1映射少量carrier线程JVM调度创建开销极小可百万级,适合IO密集"
            },
            {
              "id": "虚拟线程与java新特性-1-5-7-d3",
              "tag": "Pinning问题",
              "desc": "synchronized块内IO阻塞时虚拟线程无法unmount(pin到carrier线程)导致carrier线程被占浪费;解决:改用ReentrantLock(j.u.c锁)避免synchronized"
            },
            {
              "id": "虚拟线程与java新特性-1-5-7-d4",
              "tag": "适用场景",
              "desc": "IO密集(HTTP请求/数据库查询/文件读写/网络调用)每个请求一个虚拟线程回归简单编程模型;不适合CPU密集计算(虚拟线程无加速效果)"
            },
            {
              "id": "虚拟线程与java新特性-1-5-7-d5",
              "tag": "switch表达式(JDK14)",
              "desc": "switch可返回值作为表达式使用,case无需break箭头语法→,yield返回值;支持多值匹配case A,B,C→"
            },
            {
              "id": "虚拟线程与java新特性-1-5-7-d6",
              "tag": "sealed classes(JDK17)",
              "desc": "sealed class限定哪些类可以extends/implements,permits列表明确子类范围;配合pattern matching instanceof实现安全类型分层"
            },
            {
              "id": "虚拟线程与java新特性-1-5-7-d7",
              "tag": "record类(JDK16)",
              "desc": "不可变数据载体record Point(int x,int y)自动生成equals/hashCode/toString/compact constructor;适合DTO/配置/事件对象,不可变天然线程安全"
            }
          ]
        },
        {
          "id": "注解深入-1-5-8",
          "tag": "注解(Annotation)深入",
          "desc": "注解是代码元数据标记不影响逻辑运行;元注解@Target/@Retention/@Inherited/@Documented;运行时注解通过反射读取AnnotationProcessor编译期处理生成代码;Spring注解基于运行时反射+编译期处理",
          "details": [
            {
              "id": "注解深入-1-5-8-d0",
              "tag": "元注解",
              "desc": "@Target(ElementType)指定适用位置@Retention指定生命周期SOURCE→CLASS→RUNTIME"
            },
            {
              "id": "注解深入-1-5-8-d1",
              "tag": "@Retention",
              "desc": "SOURCE编译期丢弃(如@Override)CLASS保留在class文件但JVM忽略RUNTIME运行时可反射获取"
            },
            {
              "id": "注解深入-1-5-8-d2",
              "tag": "自定义注解",
              "desc": "定义@interface+元注解+属性default值反射getAnnotation()读取运行时处理"
            },
            {
              "id": "注解深入-1-5-8-d3",
              "tag": "AnnotationProcessor",
              "desc": "编译期注解处理器继承AbstractProcessorLombok/SpringBoot基于此机制生成代码"
            },
            {
              "id": "注解深入-1-5-8-d4",
              "tag": "Spring注解体系",
              "desc": "@Component/@Service注册Bean/@Autowired注入/@Transactional事务运行时反射+编译期APT双重处理"
            }
          ]
        },
        {
          "id": "java模块化jpms-1-5-9",
          "tag": "Java 模块化(JPMS)",
          "desc": "Java9引入模块系统module-info.java定义exports/requires/provides/uses;强封装非exports包不可访问;模块路径取代类路径;jlink裁剪JRE减小部署体积;--add-opens允许反射访问模块内部",
          "details": [
            {
              "id": "java模块化jpms-1-5-9-d0",
              "tag": "module-info.java",
              "desc": "模块声明exports暴露包requires依赖provides/uses服务强封装非exports包外部不可访问"
            },
            {
              "id": "java模块化jpms-1-5-9-d1",
              "tag": "强封装",
              "desc": "非exports包不可被外部模块访问即使public也不行解决类路径混乱和JAR地狱"
            },
            {
              "id": "java模块化jpms-1-5-9-d2",
              "tag": "--add-opens",
              "desc": "反射访问模块内部需--add-opensSpringBoot/Hibernate等框架常需此参数"
            },
            {
              "id": "java模块化jpms-1-5-9-d3",
              "tag": "jlink",
              "desc": "根据模块依赖裁剪JRE生成定制运行时镜像部署体积从数百MB→数十MB"
            },
            {
              "id": "java模块化jpms-1-5-9-d4",
              "tag": "模块路径",
              "desc": "取代类路径显式声明依赖关系而非类路径隐式扫描更可靠可预测"
            }
          ]
        },
        {
          "id": "record与接口新特性-1-5-10",
          "tag": "Record类与接口新特性",
          "desc": "Java14+Record类简洁数据载体自动生成equals/hashCode/toString/getter不可变天然线程安全;Java8接口default方法Java9private方法Java17sealed类限制继承范围",
          "details": [
            {
              "id": "record与接口新特性-1-5-10-d0",
              "tag": "Record类",
              "desc": "Java14+record Point(int x, int y){}自动生成equals/hashCode/toString/getter不可变天然线程安全"
            },
            {
              "id": "record与接口新特性-1-5-10-d1",
              "tag": "default方法",
              "desc": "Java8+接口default方法提供默认实现用于接口演进不破坏已有子类实现"
            },
            {
              "id": "record与接口新特性-1-5-10-d2",
              "tag": "private方法",
              "desc": "Java9+接口private方法内部复用default逻辑减少代码重复不暴露给实现类"
            },
            {
              "id": "record与接口新特性-1-5-10-d3",
              "tag": "sealed类",
              "desc": "Java17+sealed class Shape permits Circle,Square{}限制继承范围增强类型安全"
            }
          ]
        }
      ]
    },
    {
      "id": "1-7-锁的分类与原理-1-6",
      "title": "1.7 锁的分类与原理",
      "points": [
        {
          "id": "锁的分类概览-1-6-0",
          "tag": "锁的分类概览",
          "desc": "公平锁(按排队顺序FIFO获取锁ReentrantLock fair=true)/非公平锁(允许插队CAS抢先获取默认模式性能更好吞吐高)/可重入锁(同线程可重复获取同一锁state递增ReentrantLock/synchronized都支持)/独占锁(同一时刻只有一个线程持有如ReentrantLock)/共享锁(多线程可同时持有如Semaphore/CountDownLatch/ReadWriteLock读锁)/自旋锁(获取失败不阻塞而是循环CAS重试适合锁持有时间短)/适应性自旋(JDK6+根据上次自旋成功率动态调整自旋次数)/乐观锁(CAS无锁假设无冲突适合读多写少)/悲观锁(synchronized/ReentrantLock先加锁再操作适合写多)/偏向锁→轻量级锁→重量级锁(锁升级过程JDK6+synchronized优化)/读写锁(ReadWriteLock读共享写独占读多写少场景)",
          "details": [
            {
              "id": "锁的分类概览-1-6-0-d0",
              "tag": "公平锁",
              "desc": "按FIFO排队获取ReentrantLock fair=true保证无饥饿"
            },
            {
              "id": "锁的分类概览-1-6-0-d1",
              "tag": "非公平锁",
              "desc": "允许插队CAS抢锁默认模式吞吐更高但可能饥饿"
            },
            {
              "id": "锁的分类概览-1-6-0-d2",
              "tag": "可重入锁",
              "desc": "同线程可重复获取state递增ReentrantLock和synchronized都支持"
            },
            {
              "id": "锁的分类概览-1-6-0-d3",
              "tag": "独占锁",
              "desc": "同一时刻只一个线程持有如ReentrantLock写锁"
            },
            {
              "id": "锁的分类概览-1-6-0-d4",
              "tag": "共享锁",
              "desc": "多线程可同时持有如Semaphore/CountDownLatch/ReadWriteLock读锁"
            },
            {
              "id": "锁的分类概览-1-6-0-d5",
              "tag": "偏向锁→轻量级锁→重量级锁",
              "desc": "synchronized锁升级优化"
            }
          ]
        },
        {
          "id": "reentrantlock原理-1-6-1",
          "tag": "ReentrantLock原理",
          "desc": "基于AQS实现。公平锁:lock()调用tryAcquire()先检查CLH队列是否有前驱节点(hasQueuedPredecessors)有则入队等待无则CAS获取/非公平锁:lock()直接CAS尝试获取(compareAndSetState(0,1))失败才入队允许插队。可重入:获取锁后state递增(从1→2→3)每次unlock递减到0释放。Condition条件:newCondition()创建ConditionObject队列(signal/await精准唤醒)。lockInterruptibly()可响应中断/tryLock(timeout)超时获取",
          "details": [
            {
              "id": "reentrantlock原理-1-6-1-d0",
              "tag": "公平锁",
              "desc": "tryAcquire检查CLH队列前驱节点有则入队FIFO保证公平"
            },
            {
              "id": "reentrantlock原理-1-6-1-d1",
              "tag": "非公平锁",
              "desc": "直接CAS获取compareAndSetState(0,1)失败才入队吞吐高"
            },
            {
              "id": "reentrantlock原理-1-6-1-d2",
              "tag": "可重入",
              "desc": "state递增(1→2→3)每次unlock递减到0释放锁"
            },
            {
              "id": "reentrantlock原理-1-6-1-d3",
              "tag": "Condition",
              "desc": "newCondition()创建独立等待队列signal/await精准唤醒"
            },
            {
              "id": "reentrantlock原理-1-6-1-d4",
              "tag": "lockInterruptibly",
              "desc": "可响应中断避免死锁tryLock超时获取"
            },
            {
              "id": "reentrantlock原理-1-6-1-d5",
              "tag": "sync属性",
              "desc": "FairSync/NonfairSync两个内部类分别实现公平/非公平"
            }
          ]
        },
        {
          "id": "死锁-1-6-2",
          "tag": "死锁",
          "desc": "四个必要条件:①互斥(资源同一时刻只能被一个线程使用)②占有等待(持有资源同时等待其他资源)③不可抢占(已获取资源不能被强制释放)④循环等待(线程间形成环形资源等待链)。检测:jstack打印线程堆栈检测死锁/Arthas thread -b找到阻塞线程。预防:固定加锁顺序(所有线程按同一顺序获取锁)/tryLock超时获取(获取不到自动放弃不永久等待)/减小锁粒度(减少锁竞争范围)。避免:银行家算法(分配资源前检查是否会导致不安全状态)",
          "details": [
            {
              "id": "死锁-1-6-2-d0",
              "tag": "互斥",
              "desc": "资源同一时刻只能被一个线程使用基本属性"
            },
            {
              "id": "死锁-1-6-2-d1",
              "tag": "占有等待",
              "desc": "持有资源同时等待其他资源不释放已有"
            },
            {
              "id": "死锁-1-6-2-d2",
              "tag": "不可抢占",
              "desc": "已获取资源不能被强制释放只能主动释放"
            },
            {
              "id": "死锁-1-6-2-d3",
              "tag": "循环等待",
              "desc": "线程间形成环形等待链A等B B等C C等A"
            },
            {
              "id": "死锁-1-6-2-d4",
              "tag": "检测",
              "desc": "jstack/Arthas thread -b打印线程堆栈检测死锁"
            },
            {
              "id": "死锁-1-6-2-d5",
              "tag": "预防",
              "desc": "固定加锁顺序/tryLock超时/减小锁粒度减少竞争"
            }
          ]
        },
        {
          "id": "locksupport-1-6-3",
          "tag": "LockSupport",
          "desc": "park()/unpark()线程阻塞唤醒机制。park()阻塞当前线程(可指定Blocker对象便于诊断)/unpark(thread)唤醒指定线程(先unpark后park不阻塞先许可后消费)。与wait/notify区别:①不需要synchronized锁块②unpark可精准唤醒指定线程(notify随机)③先unpark后park不会阻塞(先发放许可)④park可响应中断但不抛InterruptedException(检查Thread.interrupted())。底层:Unsafe.park/unpark调用OS信号量或futex实现",
          "details": [
            {
              "id": "locksupport-1-6-3-d0",
              "tag": "park()",
              "desc": "阻塞当前线程类似Thread.sleep但不占锁可指定Blocker"
            },
            {
              "id": "locksupport-1-6-3-d1",
              "tag": "unpark(thread)",
              "desc": "唤醒指定线程精准唤醒优于notify随机唤醒"
            },
            {
              "id": "locksupport-1-6-3-d2",
              "tag": "先unpark后park不阻塞",
              "desc": "许可已发放直接消费无需等待（先unpark后park不阻塞的详细说明：LockSupport中关于先unpark后park不阻塞的内容）"
            },
            {
              "id": "locksupport-1-6-3-d3",
              "tag": "无需synchronized",
              "desc": "不像wait必须在锁块中调用灵活使用"
            },
            {
              "id": "locksupport-1-6-3-d4",
              "tag": "响应中断",
              "desc": "park可被中断但不抛InterruptedException需手动检查"
            },
            {
              "id": "locksupport-1-6-3-d5",
              "tag": "底层Unsafe",
              "desc": "调用OS信号量或futex机制实现轻量级阻塞唤醒"
            }
          ]
        }
      ]
    },
    {
      "id": "1-8-java异常体系-1-7",
      "title": "1.8 Java异常体系",
      "points": [
        {
          "id": "异常体系结构-1-7-0",
          "tag": "异常体系结构",
          "desc": "Throwable(所有错误和异常的超类)→Error(系统级不可恢复JVM问题如OutOfMemoryError/StackOverflowError/VirtualMachineError不应catch)/Exception→RuntimeException(非检查异常运行时抛出如NullPointerException/IndexOutOfBoundsException可catch可不catch)+CheckedException(检查异常编译期强制处理如IOException/SQLException必须try-catch或throws)",
          "details": [
            {
              "id": "异常体系结构-1-7-0-d0",
              "tag": "Throwable",
              "desc": "所有错误和异常的根类两个分支Error和Exception"
            },
            {
              "id": "异常体系结构-1-7-0-d1",
              "tag": "Error",
              "desc": "系统级不可恢复JVM问题OutOfMemoryError/StackOverflowError不应catch"
            },
            {
              "id": "异常体系结构-1-7-0-d2",
              "tag": "RuntimeException",
              "desc": "非检查异常编译不强制处理NullPointerException等"
            },
            {
              "id": "异常体系结构-1-7-0-d3",
              "tag": "CheckedException",
              "desc": "检查异常编译期强制try-catch或throws声明IOException等"
            },
            {
              "id": "异常体系结构-1-7-0-d4",
              "tag": "检查vs非检查",
              "desc": "检查异常必须处理非检查可选处理编译器检查区别"
            },
            {
              "id": "异常体系结构-1-7-0-d5",
              "tag": "throws",
              "desc": "方法签名声明可能抛出的检查异常调用者必须处理或继续throws"
            }
          ]
        },
        {
          "id": "常见异常分类-1-7-1",
          "tag": "常见异常分类",
          "desc": "NullPointerException(空指针引用调用方法)/ArrayIndexOutOfBoundsException(数组越界)/ClassCastException(类型转换错误父→子不安全)/NumberFormatException(数字格式解析失败)/ArithmeticException(算术异常整数除零)/StackOverflowError(递归过深栈溢出)/OutOfMemoryError(内存溢出堆/元空间/直接内存)/IllegalArgumentException(非法参数)/ConcurrentModificationException(并发修改集合fail-fast)/SQLException(数据库异常)",
          "details": [
            {
              "id": "常见异常分类-1-7-1-d0",
              "tag": "NullPointerException",
              "desc": "最常见空引用调用方法或访问属性必检"
            },
            {
              "id": "常见异常分类-1-7-1-d1",
              "tag": "ArrayIndexOutOfBoundsException:数组下标超范围0~length-1",
              "desc": "访问数组时下标超出0到length-1范围即抛此异常，常见于循环边界判断错误"
            },
            {
              "id": "常见异常分类-1-7-1-d2",
              "tag": "ClassCastException",
              "desc": "类型强转错误父类转子类不安全先instanceof检查"
            },
            {
              "id": "常见异常分类-1-7-1-d3",
              "tag": "NumberFormatException",
              "desc": "字符串转数字格式不对Integer.parseInt(abc)"
            },
            {
              "id": "常见异常分类-1-7-1-d4",
              "tag": "StackOverflowError",
              "desc": "递归过深或死递归方法调用栈溢出需限制深度"
            },
            {
              "id": "常见异常分类-1-7-1-d5",
              "tag": "OutOfMemoryError",
              "desc": "堆/元空间/直接内存溢出需调整JVM参数或排查泄漏"
            }
          ]
        },
        {
          "id": "try-catch-finally-1-7-2",
          "tag": "try-catch-finally",
          "desc": "finally总是执行(除非System.exit()或JVM崩溃)/try中有return时finally先执行再返回return值/catch匹配顺序从精确(子类)到宽泛(父类)不能先catch父类后catch子类/finally中修改return值不影响已确定的返回值(基本类型)/finally中抛异常会覆盖try/catch中的原始异常/多重catch:JDK7+支持catch(A|B|C e)多异常合并处理。try-with-resources(JDK7+):AutoCloseable资源自动关闭替代finally close()",
          "details": [
            {
              "id": "try-catch-finally-1-7-2-d0",
              "tag": "finally总是执行",
              "desc": "除非System.exit()或JVM崩溃否则必定执行"
            },
            {
              "id": "try-catch-finally-1-7-2-d1",
              "tag": "try有return",
              "desc": "finally先执行再返回但基本类型返回值已确定finally修改无效"
            },
            {
              "id": "try-catch-finally-1-7-2-d2",
              "tag": "catch顺序",
              "desc": "从精确子类到宽泛父类不能颠倒否则编译错误"
            },
            {
              "id": "try-catch-finally-1-7-2-d3",
              "tag": "finally抛异常",
              "desc": "会覆盖try/catch原始异常丢失原始错误信息"
            },
            {
              "id": "try-catch-finally-1-7-2-d4",
              "tag": "多异常catch",
              "desc": "catch(A|B|C e)合并处理多个异常JDK7+语法糖"
            },
            {
              "id": "try-catch-finally-1-7-2-d5",
              "tag": "try-with-resources",
              "desc": "AutoCloseable自动关闭替代finally中的close()"
            }
          ]
        },
        {
          "id": "自定义异常最佳实践-1-7-3",
          "tag": "自定义异常最佳实践",
          "desc": "业务异常继承RuntimeException(非检查异常无需强制try-catch)/定义errorCode+message枚举(统一错误码管理便于前端解析)/携带上下文信息(传入原始参数便于排查)/全局异常处理:@RestControllerAdvice+@ExceptionHandler按异常类型统一处理返回标准格式{code,message,data}/异常链:new自定义异常(cause)保留原始异常堆栈/不要忽略异常(空catch块是严重bug)/异常vs错误码:异常用于不可恢复/错误码用于可恢复业务判断",
          "details": [
            {
              "id": "自定义异常最佳实践-1-7-3-d0",
              "tag": "继承RuntimeException",
              "desc": "业务异常非检查无需强制try-catch代码简洁"
            },
            {
              "id": "自定义异常最佳实践-1-7-3-d1",
              "tag": "errorCode+message",
              "desc": "统一错误码枚举管理便于前端解析和日志排查"
            },
            {
              "id": "自定义异常最佳实践-1-7-3-d2",
              "tag": "全局处理",
              "desc": "@RestControllerAdvice+@ExceptionHandler统一响应{code,message,data}"
            },
            {
              "id": "自定义异常最佳实践-1-7-3-d3",
              "tag": "异常链",
              "desc": "new BizEx(cause)保留原始异常堆栈不丢失根因"
            },
            {
              "id": "自定义异常最佳实践-1-7-3-d4",
              "tag": "不要忽略",
              "desc": "空catch块是严重bug至少记录日志或throw"
            },
            {
              "id": "自定义异常最佳实践-1-7-3-d5",
              "tag": "异常vs错误码",
              "desc": "异常用于不可恢复场景错误码用于可恢复业务判断"
            }
          ]
        }
      ]
    },
    {
      "id": "1-9-oop基础-1-8",
      "title": "1.9 面向对象",
      "points": [
        {
          "id": "面向对象三大特性-1-9-0",
          "tag": "面向对象三大特性",
          "desc": "封装隐藏内部实现只暴露必要接口保护数据完整性;继承子类复用父类代码扩展功能Java单继承多实现;多态同一引用调用不同实现运行时动态绑定父类引用调用子类覆写方法",
          "details": [
            {
              "id": "面向对象三大特性-1-9-0-d0",
              "tag": "封装",
              "desc": "隐藏内部实现细节只暴露公共接口访问修饰符控制可见性保护数据完整性getter/setter校验"
            },
            {
              "id": "面向对象三大特性-1-9-0-d1",
              "tag": "继承",
              "desc": "子类继承父类属性和方法实现代码复用Java单继承一个类只能extends一个父类但可implements多个接口"
            },
            {
              "id": "面向对象三大特性-1-9-0-d2",
              "tag": "多态",
              "desc": "同一引用类型调用同一方法产生不同行为父类引用指向子类对象调用覆写方法运行时动态绑定"
            },
            {
              "id": "面向对象三大特性-1-9-0-d3",
              "tag": "动态绑定",
              "desc": "JVM在运行时根据对象实际类型而非引用类型决定调用哪个方法实现虚方法表(vtable)查找"
            },
            {
              "id": "面向对象三大特性-1-9-0-d4",
              "tag": "编译看左运行看右",
              "desc": "编译期检查引用类型(左)是否有该方法运行期执行对象实际类型(右)的覆写版本成员变量/静态方法看左实例方法看右"
            },
            {
              "id": "面向对象三大特性-1-9-0-d5",
              "tag": "多态条件",
              "desc": "继承/实现关系+方法覆写+父类引用指向子类对象三者缺一不可否则多态不成立"
            }
          ]
        },
        {
          "id": "抽象类vs接口-1-9-1",
          "tag": "抽象类 vs 接口",
          "desc": "抽象类可有构造器/成员变量/具体方法单继承用于is-a关系部分实现;接口无构造器只有常量多实现用于can-do关系定义契约;Java8+接口有default/static方法Java9+有private方法接口逐渐演变为可部分实现",
          "details": [
            {
              "id": "抽象类vs接口-1-9-1-d0",
              "tag": "抽象类",
              "desc": "可有构造器/成员变量/抽象方法+具体方法单继承extends用于is-a关系模板方法模式部分实现"
            },
            {
              "id": "抽象类vs接口-1-9-1-d1",
              "tag": "接口",
              "desc": "无构造器无实例变量只有常量(public static final)抽象方法多实现implements用于can-do关系定义行为契约"
            },
            {
              "id": "抽象类vs接口-1-9-1-d2",
              "tag": "default方法",
              "desc": "Java8+接口可定义default方法提供默认实现不强制子类覆写用于接口演进添加新方法不破坏已有实现"
            },
            {
              "id": "抽象类vs接口-1-9-1-d3",
              "tag": "选择原则",
              "desc": "is-a关系用抽象类(Animal→Dog)can-do能力用接口(Serializable/Comparable)接口优先当需要共享状态或构造器时才用抽象类"
            },
            {
              "id": "抽象类vs接口-1-9-1-d4",
              "tag": "接口演进",
              "desc": "Java8 default/static方法→Java9 private方法→接口逐渐具备部分实现能力但核心仍是行为契约不是数据容器"
            },
            {
              "id": "抽象类vs接口-1-9-1-d5",
              "tag": "多实现冲突",
              "desc": "类实现多个接口有同名default方法时必须显式覆写指定用哪个接口的实现InterfaceName.super.method()"
            }
          ]
        },
        {
          "id": "重写与重载-1-9-2",
          "tag": "重写(Override) vs 重载(Overload)",
          "desc": "重写是子类重新定义父类方法运行时多态方法签名必须相同访问权限≥父类不能比父类抛更宽异常;重载是同类中方法名相同参数列表不同编译时多态返回类型可不同但不能仅靠返回类型区分",
          "details": [
            {
              "id": "重写与重载-1-9-2-d0",
              "tag": "重写Override",
              "desc": "子类重新定义父类方法方法签名(名称+参数)必须相同运行时多态动态绑定"
            },
            {
              "id": "重写与重载-1-9-2-d1",
              "tag": "重写规则",
              "desc": "访问权限≥父类(public>protected>default)返回类型≤父类(协变返回)异常≤父类不能final/static/private方法"
            },
            {
              "id": "重写与重载-1-9-2-d2",
              "tag": "重载Overload",
              "desc": "同类中方法名相同参数列表不同(类型/数量/顺序)编译时多态静态绑定"
            },
            {
              "id": "重写与重载-1-9-2-d3",
              "tag": "重载规则",
              "desc": "参数列表必须不同返回类型可不同但不能仅靠返回类型区分与访问修饰符/异常无关"
            },
            {
              "id": "重写与重载-1-9-2-d4",
              "tag": "@Override",
              "desc": "编译器检查是否正确覆写父类方法防止拼写错误或签名不匹配导致变成了新方法而非覆写"
            }
          ]
        },
        {
          "id": "组合vs继承-1-9-3",
          "tag": "组合 vs 继承",
          "desc": "组合(has-a)将已有类作为成员变量灵活可运行时替换遵循DRY原则低耦合;继承(is-a)直接复用父类高耦合父类改动影响子类不能运行时改变父类;优先组合必要时继承组合+接口委托是最佳实践",
          "details": [
            {
              "id": "组合vs继承-1-9-3-d0",
              "tag": "组合has-a",
              "desc": "将已有类作为成员变量注入灵活运行时可替换对象遵循DRY不重复原则低耦合"
            },
            {
              "id": "组合vs继承-1-9-3-d1",
              "tag": "继承is-a",
              "desc": "直接继承父类代码紧耦合父类改动直接影响子类不能运行时切换父类破坏封装"
            },
            {
              "id": "组合vs继承-1-9-3-d2",
              "tag": "优先组合",
              "desc": "组合更灵活低耦合易于测试(可mock)继承层次深时维护困难组合+接口委托是最佳实践"
            },
            {
              "id": "组合vs继承-1-9-3-d3",
              "tag": "何时继承",
              "desc": "当确实是is-a关系且子类需要扩展父类核心行为而非仅复用代码时才用继承否则用组合"
            }
          ]
        },
        {
          "id": "内部类-1-9-4",
          "tag": "内部类",
          "desc": "成员内部类依附外部类实例可访问外部私有成员;静态内部类不依附实例等同顶级类;局部内部类方法内定义作用域仅该方法;匿名内部类无名字一次性实现接口或继承类Lambda简化匿名内部类;内部类用途:封装辅助类回调迭代器实现",
          "details": [
            {
              "id": "内部类-1-9-4-d0",
              "tag": "成员内部类",
              "desc": "依附外部类实例可访问外部类所有成员(含private)创建需先有外部实例outer.new Inner()"
            },
            {
              "id": "内部类-1-9-4-d1",
              "tag": "静态内部类",
              "desc": "不依附外部实例等同顶级类仅可访问外部静态成员new Outer.StaticInner()无需外部实例"
            },
            {
              "id": "内部类-1-9-4-d2",
              "tag": "匿名内部类",
              "desc": "无名字一次性实现接口或继承抽象类Lambda表达式简化单方法接口的匿名内部类"
            },
            {
              "id": "内部类-1-9-4-d3",
              "tag": "局部内部类",
              "desc": "方法内定义作用域仅限该方法可访问方法final/effectively final局部变量"
            },
            {
              "id": "内部类-1-9-4-d4",
              "tag": "用途场景",
              "desc": "封装辅助类不暴露外部/回调机制/迭代器实现(Map.Entry)/Builder模式/多继承模拟"
            }
          ]
        },
        {
          "id": "访问修饰符-1-9-5",
          "tag": "访问修饰符与封装",
          "desc": "public所有类可见、protected同包+子类可见、default(无修饰)同包可见、private仅本类可见;封装原则:字段private方法public最小可见性;getter/setter校验输入保护数据完整性",
          "details": [
            {
              "id": "访问修饰符-1-9-5-d0",
              "tag": "public",
              "desc": "所有类可见最宽范围用于对外暴露的核心API和常量"
            },
            {
              "id": "访问修饰符-1-9-5-d1",
              "tag": "protected",
              "desc": "同包+子类可见用于继承体系中子类可访问但外部不可的行为"
            },
            {
              "id": "访问修饰符-1-9-5-d2",
              "tag": "default包级",
              "desc": "无修饰符同包可见用于包内协作内部实现类间共享"
            },
            {
              "id": "访问修饰符-1-9-5-d3",
              "tag": "private",
              "desc": "仅本类可见最窄范围用于内部实现细节字段声明防止外部直接修改"
            },
            {
              "id": "访问修饰符-1-9-5-d4",
              "tag": "封装原则",
              "desc": "字段private方法public最小可见性getter/setter校验输入保护数据完整性"
            }
          ]
        }
      ]
    }
  ]
};

// java-collection.js — 二、Java 集合框架 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['java-collection'] = {
  "id": "java-collection",
  "title": "三、Java 集合框架",
  "tag": "集合",
  "order": 3,
  "icon": "📋",
  "cssIndex": 2,
  "subs": [
    {
      "id": "2-1-list-2-0",
      "title": "2.1 List",
      "points": [
        {
          "id": "arraylist-2-0-0",
          "tag": "ArrayList",
          "desc": "动态数组，默认初始容量 10（首次 add 时创建），扩容 1.5 倍 `oldCap+(oldCap>>1)`。随机访问 O(1)，插入删除 O(n)。`Arrays.copyOf()` 复制。非线程安全。频繁插入删除用 LinkedList，随机访问用 ArrayList",
          "details": [
            {
              "id": "arraylist-2-0-0-d0",
              "tag": "基于动态数组，默认初始容量 10（首次 add 时创建）",
              "desc": "ArrayList底层Object[]数组，首次add时才初始化容量10（懒初始化），避免空数组浪费内存"
            },
            {
              "id": "arraylist-2-0-0-d1",
              "tag": "扩容",
              "desc": "oldCap + (oldCap >> 1) = 1.5 倍"
            },
            {
              "id": "arraylist-2-0-0-d2",
              "tag": "Arrays.copyOf() 底层 System.arraycopy() 复制元素",
              "desc": "扩容时Arrays.copyOf新建更大数组，底层调System.arraycopy()native方法高效批量复制元素"
            },
            {
              "id": "arraylist-2-0-0-d3",
              "tag": "随机",
              "desc": "随机访问 O(1)，中间插入删除 O(n) 需移动元素"
            },
            {
              "id": "arraylist-2-0-0-d4",
              "tag": "非线程安全，多线程用 CopyOnWriteArrayList 或 synchronizedList",
              "desc": "ArrayList无同步机制多线程并发修改会数据错乱，可用CopyOnWriteArrayList写时复制或Collections.synchronizedList包装"
            }
          ]
        },
        {
          "id": "linkedlist-2-0-1",
          "tag": "LinkedList",
          "desc": "双向链表，Node 含 prev/item/next。实现 List+Deque 接口。随机访问 O(n)，头尾增删 O(1)。查找优化：`index < size/2` 从头遍历否则从尾。非线程安全",
          "details": [
            {
              "id": "linkedlist-2-0-1-d0",
              "tag": "数据结构",
              "desc": "双向链表Node包含item/prev/next三字段每个节点额外存储两个指针"
            },
            {
              "id": "linkedlist-2-0-1-d1",
              "tag": "随机访问",
              "desc": "需遍历链表时间复杂度O(n)不适合频繁随机访问场景"
            },
            {
              "id": "linkedlist-2-0-1-d2",
              "tag": "头部增删",
              "desc": "只修改头节点指针时间复杂度O(1)适合头尾频繁操作"
            },
            {
              "id": "linkedlist-2-0-1-d3",
              "tag": "尾部增删",
              "desc": "只修改尾节点指针时间复杂度O(1)队列/栈场景首选"
            },
            {
              "id": "linkedlist-2-0-1-d4",
              "tag": "内存开销",
              "desc": "每个节点额外存储prev+next两个引用比ArrayList占用更多内存"
            }
          ]
        },
        {
          "id": "vector-2-0-2",
          "tag": "Vector",
          "desc": "线程安全动态数组（方法 synchronized 修饰），扩容 2 倍。性能差已过时。替代：CopyOnWriteArrayList（读多写少）/Collections.synchronizedList()",
          "details": [
            {
              "id": "vector-2-0-2-d0",
              "tag": "线程安全",
              "desc": "所有公共方法synchronized修饰保证线程安全但并发性能差"
            },
            {
              "id": "vector-2-0-2-d1",
              "tag": "扩容策略",
              "desc": "容量不足时扩容为2倍(capacity+0)比ArrayList1.5倍更激进"
            },
            {
              "id": "vector-2-0-2-d2",
              "tag": "与ArrayList对比",
              "desc": "ArrayList扩容1.5倍无synchronized单线程性能远优于Vector"
            },
            {
              "id": "vector-2-0-2-d3",
              "tag": "弃用建议",
              "desc": "需线程安全用Collections.synchronizedList或CopyOnWriteArrayList替代"
            },
            {
              "id": "vector-2-0-2-d4",
              "tag": "历史原因",
              "desc": "Vector是JDK1.0遗留类ArrayList是JDK1.2现代推荐"
            }
          ]
        }
      ]
    },
    {
      "id": "2-2-set-2-1",
      "title": "2.2 Set",
      "points": [
        {
          "id": "hashset-2-1-0",
          "tag": "HashSet",
          "desc": "基于 HashMap 实现，元素作 key，value 为固定 PRESENT 对象。无序不重复，add/remove/contains O(1)。允许 null。初始容量 16 负载因子 0.75",
          "details": [
            {
              "id": "hashset-2-1-0-d0",
              "tag": "底层实现",
              "desc": "基于HashMapkey存元素value存PRESENT常量(private static final Object)"
            },
            {
              "id": "hashset-2-1-0-d1",
              "tag": "PRESENT常量",
              "desc": "占位用HashSet只需key不需要value所以用固定Object占位"
            },
            {
              "id": "hashset-2-1-0-d2",
              "tag": "无序性",
              "desc": "HashMap哈希决定位置遍历顺序不确定每次可能不同"
            },
            {
              "id": "hashset-2-1-0-d3",
              "tag": "允许null",
              "desc": "最多一个null元素HashMap允许一个null key"
            },
            {
              "id": "hashset-2-1-0-d4",
              "tag": "初始容量",
              "desc": "构造可指定initialCapacity影响性能默认16加载因子0.75"
            }
          ]
        },
        {
          "id": "linkedhashset-2-1-1",
          "tag": "LinkedHashSet",
          "desc": "基于 LinkedHashMap，维护双向链表保持插入顺序。迭代按插入顺序。性能略低于 HashSet（维护链表开销）",
          "details": [
            {
              "id": "linkedhashset-2-1-1-d0",
              "tag": "继承关系",
              "desc": "继承HashSet内部LinkedHashMap实现维护双向链表"
            },
            {
              "id": "linkedhashset-2-1-1-d1",
              "tag": "双向链表",
              "desc": "维护head/tail指针记录插入或访问顺序遍历确定性输出"
            },
            {
              "id": "linkedhashset-2-1-1-d2",
              "tag": "遍历有序",
              "desc": "按插入顺序或访问顺序遍历输出结果确定方便调试"
            },
            {
              "id": "linkedhashset-2-1-1-d3",
              "tag": "性能代价",
              "desc": "链表维护增加内存开销插入删除略慢但遍历快"
            },
            {
              "id": "linkedhashset-2-1-1-d4",
              "tag": "适用场景:需要有序Set如LRU缓存淘汰策略",
              "desc": "accessOrder=true"
            }
          ]
        },
        {
          "id": "treeset-2-1-2",
          "tag": "TreeSet",
          "desc": "基于 TreeMap（红黑树）。自然排序（Comparable）或定制排序（Comparator）。add/remove/contains O(log n)。不支持 null（NPE）",
          "details": [
            {
              "id": "treeset-2-1-2-d0",
              "tag": "底层实现",
              "desc": "基于TreeMap红黑树保证元素有序排序"
            },
            {
              "id": "treeset-2-1-2-d1",
              "tag": "排序方式",
              "desc": "自然排序Comparable或定制Comparator两种选择"
            },
            {
              "id": "treeset-2-1-2-d2",
              "tag": "不允许null",
              "desc": "compareTo(null)抛NullPointerExceptionnull无法排序比较"
            },
            {
              "id": "treeset-2-1-2-d3",
              "tag": "性能特征",
              "desc": "增删查O(logN)比HashSet略慢但有序性保证"
            },
            {
              "id": "treeset-2-1-2-d4",
              "tag": "排序稳定性",
              "desc": "相等元素compareTo返回0视为重复不插入保证唯一性"
            }
          ]
        }
      ]
    },
    {
      "id": "2-3-map重点-2-2",
      "title": "2.3 Map（重点）",
      "points": [
        {
          "id": "hashmap结构-2-2-0",
          "tag": "HashMap 结构",
          "desc": "JDK8: 数组+链表+红黑树。数组长度始终为 2 的幂（位运算取模）。链表≥8 且数组≥64 转红黑树；红黑树节点≤6 退化链表。链转树阈值 8 基于泊松分布概率论（λ=0.5 时链长≥8 概率极低）",
          "details": [
            {
              "id": "hashmap结构-2-2-0-d0",
              "tag": "JDK8",
              "desc": "数组（桶）+ 链表 + 红黑树"
            },
            {
              "id": "hashmap结构-2-2-0-d1",
              "tag": "数组长度始终为 2 的幂（方便 hash & (n-1) 取模）",
              "desc": "容量2的幂使hash&(n-1)等价hash%n取模运算但位运算更快，且扩容后元素分布均匀"
            },
            {
              "id": "hashmap结构-2-2-0-d2",
              "tag": "链表长度 >",
              "desc": "8 且数组长度 >= 64 时转红黑树"
            },
            {
              "id": "hashmap结构-2-2-0-d3",
              "tag": "红黑树节点 < 6 时退化回链表",
              "desc": "红黑树节点数≤6时退化回链表，阈值6而非8避免频繁链转树和树转链的来回切换"
            },
            {
              "id": "hashmap结构-2-2-0-d4",
              "tag": "JDK7 只有数组+链表，头插法并发扩容会死循环",
              "desc": "JDK7 HashMap无红黑树结构，头插法在并发resize时链表指针倒置可能形成环状链表导致死循环"
            }
          ]
        },
        {
          "id": "hashmap参数-2-2-1",
          "tag": "HashMap 参数",
          "desc": "初始容量 16，负载因子 0.75（时空平衡），threshold=capacity×loadFactor。size>threshold 触发扩容。链转树阈值 8，树转链阈值 6",
          "details": [
            {
              "id": "hashmap参数-2-2-1-d0",
              "tag": "初始容量 16（必须 2 的幂）",
              "desc": "默认初始容量16=2^4，tableSizeFor()确保任意传入容量向上取整为最接近的2的幂"
            },
            {
              "id": "hashmap参数-2-2-1-d1",
              "tag": "负载因子 0.75（时间与空间的平衡）",
              "desc": "0.75是折中值：过低浪费空间且扩容频繁，过高哈希冲突增多查询变慢，0.75时冲突概率约1/8"
            },
            {
              "id": "hashmap参数-2-2-1-d2",
              "tag": "threshold",
              "desc": "capacity × loadFactor，size 超过则扩容"
            },
            {
              "id": "hashmap参数-2-2-1-d3",
              "tag": "链转树阈值 8（泊松分布概率论 λ=0.5 时概率极低）",
              "desc": "理想hash下链长服从泊松分布λ=0.5，链长≥8概率仅亿分之六，阈值8是极少冲突时的优化触发点"
            },
            {
              "id": "hashmap参数-2-2-1-d4",
              "tag": "树转链阈值 6（",
              "desc": "树转链阈值 6（避免频繁转换）"
            }
          ]
        },
        {
          "id": "hash扰动函数-2-2-2",
          "tag": "hash 扰动函数",
          "desc": "`(h=key.hashCode()) ^ (h>>>16)`。高 16 位异或到低 16 位，让高位参与 `hash&(n-1)` 运算（只取低位），减少哈希冲突。n 为 2 的幂保证 `hash&(n-1)` 等价于 `hash%n` 但更快",
          "details": [
            {
              "id": "hash扰动函数-2-2-2-d0",
              "tag": "(h",
              "desc": "key.hashCode()) ^ (h >>> 16)"
            },
            {
              "id": "hash扰动函数-2-2-2-d1",
              "tag": "高 16 位异或到低 16 位参与运算",
              "desc": "扰动函数(h^(h>>>16))将高位信息混合到低位，使低位hash值更具随机性减少冲突"
            },
            {
              "id": "hash扰动函数-2-2-2-d2",
              "tag": "因为 n 较小时 hash & (n-1) 只用到低位",
              "desc": "当数组长度n较小时hash&(n-1)仅取低4~5位，高位完全未参与定位，扰动函数弥补此缺陷"
            },
            {
              "id": "hash扰动函数-2-2-2-d3",
              "tag": "减少哈希冲突，使元素分布更均匀",
              "desc": "扰动后低位包含高位信息，元素在各桶中分布更均匀，避免大量元素集中在少数桶导致链表过长"
            },
            {
              "id": "hash扰动函数-2-2-2-d4",
              "tag": "n 为 2 的幂时 hash & (n-1) ≡ hash % n 但更快",
              "desc": "2的幂n使n-1全为1的二进制掩码，hash&(n-1)等效取模但位运算比除法取模快一个数量级"
            }
          ]
        },
        {
          "id": "put流程-2-2-3",
          "tag": "put 流程",
          "desc": "1.hash(key)计算 hash 2.`hash&(n-1)` 定位桶 3.桶空直接放入 4.桶非空 key 相同则覆盖 value 5.是 TreeNode 则红黑树插入 6.链表尾插，链长≥8 转红黑树 7.`++size>threshold` 扩容 resize()",
          "details": [
            {
              "id": "put流程-2-2-3-d0",
              "tag": "1. 计算 hash(key) 扰动后的哈希值",
              "desc": "put第一步调用hash()方法对key.hashCode()做扰动处理(h^(h>>>16))，得到优化后的哈希值"
            },
            {
              "id": "put流程-2-2-3-d1",
              "tag": "2. hash & (n-1) 定位桶位置",
              "desc": "用扰动后的hash值与数组长度减1做位运算hash&(n-1)，快速定位该key应放入的桶索引"
            },
            {
              "id": "put流程-2-2-3-d2",
              "tag": "3. 桶为空直接放入新 Node",
              "desc": "若定位到的桶位置为null，直接创建新Node节点放入该桶，无需额外处理"
            },
            {
              "id": "put流程-2-2-3-d3",
              "tag": "4. 桶非空且 key 相同则覆盖 value",
              "desc": "桶非空时遍历比较key的hash和equals，若完全相同则属于更新操作，替换旧value并返回旧值"
            },
            {
              "id": "put流程-2-2-3-d4",
              "tag": "5.",
              "desc": "5. 是 TreeNode 则走红黑树插入"
            },
            {
              "id": "put流程-2-2-3-d5",
              "tag": "6. 链表尾插（JDK8），链长 ≥ 8 转红黑树",
              "desc": "JDK8改为尾插法避免并发扩容成环，链表遍历插入尾部，链长≥8且数组≥64时转为红黑树提升查询"
            },
            {
              "id": "put流程-2-2-3-d6",
              "tag": "7. ++size > threshold 触发 resize() 扩容",
              "desc": "每次成功插入后size加1，若size超过阈值threshold(capacity×loadFactor)则调用resize()扩容两倍"
            }
          ]
        },
        {
          "id": "扩容机制-2-2-4",
          "tag": "扩容机制",
          "desc": "容量翻倍。JDK8 优化：元素新位置=原位置 或 原位置+旧容量（由 hash 新增高一位 bit 决定）。避免了 JDK7 头插法扩容的链表成环死循环问题。多线程仍可能数据覆盖",
          "details": [
            {
              "id": "扩容机制-2-2-4-d0",
              "tag": "容量翻倍（×2），保持 2 的幂",
              "desc": "resize时新容量=旧容量×2，始终保持2的幂特性，确保hash&(n-1)取模运算的正确性"
            },
            {
              "id": "扩容机制-2-2-4-d1",
              "tag": "JDK8 优化",
              "desc": "元素新位置 = 原位置 或 原位置 + 旧容量"
            },
            {
              "id": "扩容机制-2-2-4-d2",
              "tag": "由 hash 新增的高位 bit 决定（0 不动，1 移动）",
              "desc": "扩容后元素新位置=原位置或原位置+旧容量，由hash值新增的那一位bit决定：0则不动，1则偏移旧容量"
            },
            {
              "id": "扩容机制-2-2-4-d3",
              "tag": "JDK7 头插法并发扩容导致链表成环（死循环 CPU 100%）",
              "desc": "JDK7头插法在并发resize时线程A和B同时倒置链表指针，可能使链表next指针形成环导致get操作死循环"
            },
            {
              "id": "扩容机制-2-2-4-d4",
              "tag": "JDK8 尾插法解决了成环问题，但多线程仍可能数据覆盖",
              "desc": "JDK8尾插法保持链表原顺序避免成环，但并发put时线程A和B可能同时写入同一桶导致数据丢失覆盖"
            }
          ]
        },
        {
          "id": "concurrenthashmapjdk7-2-2-5",
          "tag": "ConcurrentHashMap JDK7",
          "desc": "Segment[]+HashEntry[]，Segment 继承 ReentrantLock。默认 16 个 Segment（并发度 16）。不同 Segment 可并发，锁粒度是 Segment。put 需两次 hash（先定位 Segment 再定位桶）",
          "details": [
            {
              "id": "concurrenthashmapjdk7-2-2-5-d0",
              "tag": "Segment[] + HashEntry[]，Segment 继承 ReentrantLock",
              "desc": "JDK7 ConcurrentHashMap分段锁设计，每个Segment是ReentrantLock，锁住整个Segment段内所有HashEntry"
            },
            {
              "id": "concurrenthashmapjdk7-2-2-5-d1",
              "tag": "默认 16 个 Segment，并发度 16",
              "desc": "默认16个Segment段即并发度16，最多16个线程可同时操作不同Segment段，可通过构造器调整并发度"
            },
            {
              "id": "concurrenthashmapjdk7-2-2-5-d2",
              "tag": "不同 Segment 可并发操作",
              "desc": "不同Segment段各自独立加锁，多线程操作不同段时互不阻塞并发执行，锁粒度为Segment段级别"
            },
            {
              "id": "concurrenthashmapjdk7-2-2-5-d3",
              "tag": "put 需两次 hash",
              "desc": "先定位 Segment 再定位桶"
            },
            {
              "id": "concurrenthashmapjdk7-2-2-5-d4",
              "tag": "锁粒度",
              "desc": "锁粒度是 Segment 级别"
            }
          ]
        },
        {
          "id": "concurrenthashmapjdk8-2-2-6",
          "tag": "ConcurrentHashMap JDK8",
          "desc": "Node[]+链表/红黑树+CAS+synchronized。空桶 `casTabAt()` CAS 写入；非空桶 synchronized 锁桶头节点。sizeCtl 控制初始化和扩容。transfer() 多线程协助扩容（ForwardingNode）。并发度=桶数，锁粒度更细",
          "details": [
            {
              "id": "concurrenthashmapjdk8-2-2-6-d0",
              "tag": "Node[] + 链表/红黑树 + CAS + synchronized",
              "desc": "JDK8 ConcurrentHashMap取消Segment，改用Node数组+链表/红黑树+CAS+synchronized细粒度锁方案"
            },
            {
              "id": "concurrenthashmapjdk8-2-2-6-d1",
              "tag": "空桶用 casTabAt() CAS 写入（无锁）",
              "desc": "空桶位置用UNSAFE.compareAndSwapObject(CAS)无锁写入新Node，成功则完成，失败则自旋重试"
            },
            {
              "id": "concurrenthashmapjdk8-2-2-6-d2",
              "tag": "非空桶 synchronized 锁桶头节点",
              "desc": "桶已有元素时用synchronized锁住桶头节点（对象头Monitor），同一桶内操作串行化，不同桶可并发"
            },
            {
              "id": "concurrenthashmapjdk8-2-2-6-d3",
              "tag": "sizeCtl 控制初始化和扩容",
              "desc": "sizeCtl为0未初始化，-1正在初始化，负N表示N-1个线程正在扩容，正数表示下次扩容阈值"
            },
            {
              "id": "concurrenthashmapjdk8-2-2-6-d4",
              "tag": "transfer() 多线程协助扩容（ForwardingNode 标志已迁移）",
              "desc": "扩容时桶头放ForwardingNode占位，其他线程put时发现ForwardingNode则加入协助扩容，多线程分片迁移数据"
            },
            {
              "id": "concurrenthashmapjdk8-2-2-6-d5",
              "tag": "并发度=桶数，锁粒度更细性能更好",
              "desc": "JDK8并发度等于桶数组长度而非Segment数(16)，锁粒度从段级降到桶级，并发性能大幅提升"
            }
          ]
        }
      ]
    },
    {
      "id": "2-4-queue-2-3",
      "title": "2.4 Queue",
      "points": [
        {
          "id": "priorityqueue-2-3-0",
          "tag": "PriorityQueue",
          "desc": "二叉小顶堆（数组存储）。offer/poll/peek O(log n)。不保证同优先级顺序。不允许 null。元素需 Comparable 或 Comparator。应用：TopK 问题、任务调度",
          "details": [
            {
              "id": "priorityqueue-2-3-0-d0",
              "tag": "数据结构",
              "desc": "最小堆完全二叉树数组实现父节点<=子节点保证堆顶最小"
            },
            {
              "id": "priorityqueue-2-3-0-d1",
              "tag": "出队操作",
              "desc": "取堆顶后下沉调整(siftDown)重新满足堆性质复杂度O(logN)"
            },
            {
              "id": "priorityqueue-2-3-0-d2",
              "tag": "入队操作",
              "desc": "插入末尾后上浮调整(siftUp)重新满足堆性质复杂度O(logN)"
            },
            {
              "id": "priorityqueue-2-3-0-d3",
              "tag": "默认排序",
              "desc": "自然排序元素需实现Comparable接口定义比较规则"
            },
            {
              "id": "priorityqueue-2-3-0-d4",
              "tag": "定制排序",
              "desc": "构造时传入Comparator自定义优先级规则灵活控制出队顺序"
            }
          ]
        },
        {
          "id": "arrayblockingqueue-2-3-1",
          "tag": "ArrayBlockingQueue",
          "desc": "数组有界阻塞队列。单个 ReentrantLock + 两个 Condition（notEmpty/notFull）。put 队满阻塞，take 队空阻塞。公平/非公平模式。经典生产者-消费者模型",
          "details": [
            {
              "id": "arrayblockingqueue-2-3-1-d0",
              "tag": "有界队列",
              "desc": "构造时指定capacity不可动态扩容量固定防止OOM"
            },
            {
              "id": "arrayblockingqueue-2-3-1-d1",
              "tag": "锁机制",
              "desc": "ReentrantLock一把锁保护put和take操作保证线程安全"
            },
            {
              "id": "arrayblockingqueue-2-3-1-d2",
              "tag": "Condition",
              "desc": "notFull阻塞生产(notFull.await)notEmpty阻塞消费(notEmpty.await)"
            },
            {
              "id": "arrayblockingqueue-2-3-1-d3",
              "tag": "公平模式",
              "desc": "fair=true按FIFO顺序获取锁避免饥饿但性能略低"
            },
            {
              "id": "arrayblockingqueue-2-3-1-d4",
              "tag": "底层结构",
              "desc": "Object[]循环数组takeIndex/putIndex循环利用空间"
            }
          ]
        },
        {
          "id": "linkedblockingqueue-2-3-2",
          "tag": "LinkedBlockingQueue",
          "desc": "链表阻塞队列。默认容量 Integer.MAX_VALUE（OOM 风险！）。putLock/takeLock 两把锁，读写可并行，吞吐量>ArrayBlockingQueue。Executors.newFixedThreadPool 使用此队列",
          "details": [
            {
              "id": "linkedblockingqueue-2-3-2-d0",
              "tag": "可选有界",
              "desc": "构造不指定容量默认Integer.MAX_VALUE近乎无界可能OOM"
            },
            {
              "id": "linkedblockingqueue-2-3-2-d1",
              "tag": "两把锁",
              "desc": "putLock和takeLock分离生产消费可并行提高并发度"
            },
            {
              "id": "linkedblockingqueue-2-3-2-d2",
              "tag": "锁分离",
              "desc": "生产消费互不阻塞并发度高于ArrayBlockingQueue"
            },
            {
              "id": "linkedblockingqueue-2-3-2-d3",
              "tag": "节点结构",
              "desc": "链表Node含item/next与LinkedList类似动态扩容"
            },
            {
              "id": "linkedblockingqueue-2-3-2-d4",
              "tag": "风险",
              "desc": "默认近乎无界高吞吐可能堆积导致OOM生产需限速"
            }
          ]
        },
        {
          "id": "delayqueue-2-3-3",
          "tag": "DelayQueue",
          "desc": "基于 PriorityQueue 的延迟队列。元素实现 Delayed 接口（getDelay 返回剩余延迟）。只有到期元素能被 take 取出。应用：定时任务、缓存过期、订单超时取消、重试延迟",
          "details": [
            {
              "id": "delayqueue-2-3-3-d0",
              "tag": "元素要求",
              "desc": "必须实现Delayed接口的getDelay和compareTo定义到期规则"
            },
            {
              "id": "delayqueue-2-3-3-d1",
              "tag": "排序规则",
              "desc": "按到期时间排序延迟越小越先出队PriorityQueue+Delayed"
            },
            {
              "id": "delayqueue-2-3-3-d2",
              "tag": "到期判断",
              "desc": "getDelay<=0时元素到期可被取出执行延迟任务"
            },
            {
              "id": "delayqueue-2-3-3-d3",
              "tag": "Leader线程",
              "desc": "最先到期元素被leader等待减少无效轮询其他线程await"
            },
            {
              "id": "delayqueue-2-3-3-d4",
              "tag": "应用场景",
              "desc": "定时任务调度缓存过期清理延迟消息订单超时取消"
            }
          ]
        }
      ]
    },
    {
      "id": "2-5-其他-2-4",
      "title": "2.5 其他",
      "points": [
        {
          "id": "linkedhashmap-2-4-0",
          "tag": "LinkedHashMap",
          "desc": "继承 HashMap，增加 before/after 指针维护双向链表。accessOrder=false 插入顺序（默认），true 访问顺序（访问后移到链表尾）。重写 `removeEldestEntry()` 可实现 LRU 缓存",
          "details": [
            {
              "id": "linkedhashmap-2-4-0-d0",
              "tag": "继承HashMap",
              "desc": "增加head/tail双向链表维护顺序保持HashMap性能"
            },
            {
              "id": "linkedhashmap-2-4-0-d1",
              "tag": "accessOrder",
              "desc": "false插入顺序true访问顺序(LRU)构造时指定"
            },
            {
              "id": "linkedhashmap-2-4-0-d2",
              "tag": "afterNodeAccess",
              "desc": "访问时将节点移到链表尾部实现LRU最近访问在尾"
            },
            {
              "id": "linkedhashmap-2-4-0-d3",
              "tag": "afterNodeInsertion",
              "desc": "可覆写removeEldestEntry淘汰最老节点自动缓存淘汰"
            },
            {
              "id": "linkedhashmap-2-4-0-d4",
              "tag": "LRU缓存",
              "desc": "accessOrder=true+removeEldestEntry实现自动淘汰最久未访问"
            }
          ]
        },
        {
          "id": "copyonwritearraylist-2-4-1",
          "tag": "CopyOnWriteArrayList",
          "desc": "写时复制：写操作加 ReentrantLock + 复制新数组，读操作无锁直接读。适合读多写少（监听器列表、配置列表）。缺点：写开销大（复制数组）、弱一致性（可能读到旧数据）",
          "details": [
            {
              "id": "copyonwritearraylist-2-4-1-d0",
              "tag": "写时复制",
              "desc": "add/set/remove操作复制新数组替换引用保证读一致性"
            },
            {
              "id": "copyonwritearraylist-2-4-1-d1",
              "tag": "读无锁",
              "desc": "读取原数组引用不加锁线程安全且快速适合读多写少"
            },
            {
              "id": "copyonwritearraylist-2-4-1-d2",
              "tag": "写加锁",
              "desc": "ReentrantLock保证写操作互斥不并发修改避免数据不一致"
            },
            {
              "id": "copyonwritearraylist-2-4-1-d3",
              "tag": "迭代安全",
              "desc": "迭代器遍历快照数组不抛ConcurrentModificationException"
            },
            {
              "id": "copyonwritearraylist-2-4-1-d4",
              "tag": "适用场景",
              "desc": "读多写少如事件监听列表配置项列表不适合频繁写操作"
            }
          ]
        },
        {
          "id": "fail-fast-2-4-2",
          "tag": "fail-fast",
          "desc": "遍历时检测 modCount 变化，不一致抛 ConcurrentModificationException（ArrayList/HashMap）。fail-safe：遍历时复制一份（CopyOnWriteArrayList/ConcurrentHashMap），不抛异常但可能读到旧数据",
          "details": [
            {
              "id": "fail-fast-2-4-2-d0",
              "tag": "modCount",
              "desc": "集合结构修改时modCount自增计数器记录修改次数"
            },
            {
              "id": "fail-fast-2-4-2-d1",
              "tag": "迭代检查",
              "desc": "Iterator每次next/checkForComodification对比计数是否一致"
            },
            {
              "id": "fail-fast-2-4-2-d2",
              "tag": "触发条件",
              "desc": "遍历期间add/remove/clear导致modCount变化与迭代器期望不符"
            },
            {
              "id": "fail-fast-2-4-2-d3",
              "tag": "异常类型",
              "desc": "ConcurrentModificationException快速失败机制提醒并发修改"
            },
            {
              "id": "fail-fast-2-4-2-d4",
              "tag": "避免方法",
              "desc": "使用Iterator.remove()安全删除或用Concurrent集合类允许并发修改"
            }
          ]
        },
        {
          "id": "comparablevscomparator-2-4-3",
          "tag": "Comparable vs Comparator",
          "desc": "Comparable 内部比较（实现 compareTo()，自然排序）；Comparator 外部比较器（实现 compare()，定制排序）。Collections.sort() 两者都支持。Comparator 可配合 lambda：`list.sort((a,b)->a-b)`",
          "details": [
            {
              "id": "comparablevscomparator-2-4-3-d0",
              "tag": "Comparable",
              "desc": "类内部实现compareTo定义自然排序规则单一排序方式"
            },
            {
              "id": "comparablevscomparator-2-4-3-d1",
              "tag": "Comparator",
              "desc": "外部定义compare方法定制排序策略灵活多种排序"
            },
            {
              "id": "comparablevscomparator-2-4-3-d2",
              "tag": "优先级",
              "desc": "Comparator传入排序优先于Comparable自然排序自定义覆盖默认"
            },
            {
              "id": "comparablevscomparator-2-4-3-d3",
              "tag": "TreeMap排序",
              "desc": "无Comparator则用Comparable否则用Comparator灵活切换"
            },
            {
              "id": "comparablevscomparator-2-4-3-d4",
              "tag": "设计意图",
              "desc": "Comparable是默认排序(类自带)Comparator是灵活定制(外部注入)"
            }
          ]
        }
      ]
    }
  ]
};

// java-concurrent.js — 三、Java 并发编程 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['java-concurrent'] = {
  "id": "java-concurrent",
  "title": "四、Java 并发编程",
  "tag": "并发",
  "order": 4,
  "icon": "💠",
  "cssIndex": 3,
  "subs": [
    {
      "id": "3-1-线程基础-3-0",
      "title": "3.1 线程基础",
      "points": [
        {
          "id": "6种状态-3-0-0",
          "tag": "6 种状态",
          "desc": "NEW(创建未 start)→RUNNABLE(可运行含就绪+运行)→BLOCKED(等待 synchronized 锁)→WAITING(wait/join 无超时)→TIMED_WAITING(sleep/wait/join 带超时)→TERMINATED(执行完毕)",
          "details": [
            {
              "id": "6种状态-3-0-0-d0",
              "tag": "NEW",
              "desc": "new 了但没 start()"
            },
            {
              "id": "6种状态-3-0-0-d1",
              "tag": "RUNNABLE",
              "desc": "可运行（含就绪和运行，Java 不区分）"
            },
            {
              "id": "6种状态-3-0-0-d2",
              "tag": "BLOCKED",
              "desc": "等待 synchronized 锁"
            },
            {
              "id": "6种状态-3-0-0-d3",
              "tag": "WAITING",
              "desc": "wait()/join() 无超时"
            },
            {
              "id": "6种状态-3-0-0-d4",
              "tag": "TIMED_WAITING",
              "desc": "sleep()/wait(time)/join(time)"
            },
            {
              "id": "6种状态-3-0-0-d5",
              "tag": "TERMINATED",
              "desc": "run() 执行完毕（TERMINATED的详细说明：6 种状态中关于TERMINATED的内容）"
            }
          ]
        },
        {
          "id": "创建方式-3-0-1",
          "tag": "创建方式",
          "desc": "1.继承 Thread 重写 run() 2.实现 Runnable 传 Thread 3.Callable+FutureTask（有返回值）4.线程池 ExecutorService（推荐）。推荐线程池避免频繁创建销毁，统一管理",
          "details": [
            {
              "id": "创建方式-3-0-1-d0",
              "tag": "继承Thread",
              "desc": "重写run方法直接start启动简单直观但Java单继承限制"
            },
            {
              "id": "创建方式-3-0-1-d1",
              "tag": "实现Runnable",
              "desc": "更推荐解耦任务与线程可共享Runnable实例灵活"
            },
            {
              "id": "创建方式-3-0-1-d2",
              "tag": "Callable+Future",
              "desc": "有返回值可抛异常配合FutureTask获取异步结果"
            },
            {
              "id": "创建方式-3-0-1-d3",
              "tag": "线程池",
              "desc": "ExecutorService提交Runnable/Callable最优方式统一管理"
            },
            {
              "id": "创建方式-3-0-1-d4",
              "tag": "实际本质",
              "desc": "只有Thread代表线程其他只是任务载体Runnable/Callable不创建线程"
            }
          ]
        },
        {
          "id": "sleepvswait-3-0-2",
          "tag": "sleep vs wait",
          "desc": "sleep()是 Thread 静态方法不释放锁，时间到自动唤醒；wait()是 Object 方法释放锁，需 notify/notifyAll 唤醒，必须在 synchronized 块中调用。wait/notify 必须在同一对象的锁上",
          "details": [
            {
              "id": "sleepvswait-3-0-2-d0",
              "tag": "sleep",
              "desc": "sleep 是 Thread 静态方法，wait 是 Object 方法"
            },
            {
              "id": "sleepvswait-3-0-2-d1",
              "tag": "sleep 不释放锁，wait 释放锁",
              "desc": "sleep()是Thread静态方法休眠期间持锁不释放，wait()是Object实例方法进入等待时释放锁允许其他线程获取"
            },
            {
              "id": "sleepvswait-3-0-2-d2",
              "tag": "sleep 时间到自动唤醒，wait 需 notify/notifyAll 唤醒",
              "desc": "sleep()指定毫秒后自动恢复运行，wait()进入WAITING状态需其他线程调用notify()或notifyAll()主动唤醒"
            },
            {
              "id": "sleepvswait-3-0-2-d3",
              "tag": "wait 必须在 synchronized 块中调用",
              "desc": "wait()调用前必须获取该对象的监视器锁（synchronized），否则抛IllegalMonitorStateException异常"
            },
            {
              "id": "sleepvswait-3-0-2-d4",
              "tag": "wait/notify 必须在同一个对象的锁上调用",
              "desc": "wait()和notify()/notifyAll()必须在同一对象监视器上配对使用，否则线程无法正确唤醒等待方"
            }
          ]
        },
        {
          "id": "startvsrun-3-0-3",
          "tag": "start vs run",
          "desc": "start()创建新线程并调用 run()；直接调 run()只是普通方法调用在当前线程执行。一个 Thread 只能 start()一次（IllegalThreadStateException）",
          "details": [
            {
              "id": "startvsrun-3-0-3-d0",
              "tag": "start()",
              "desc": "调用native start0()创建新OS线程异步执行run方法体"
            },
            {
              "id": "startvsrun-3-0-3-d1",
              "tag": "run()",
              "desc": "直接调用在当前线程同步执行不创建新线程只是普通方法调用"
            },
            {
              "id": "startvsrun-3-0-3-d2",
              "tag": "重复start",
              "desc": "同一Thread对象start两次抛IllegalThreadStateException"
            },
            {
              "id": "startvsrun-3-0-3-d3",
              "tag": "调用顺序",
              "desc": "start→新线程→run方法体内容异步执行"
            },
            {
              "id": "startvsrun-3-0-3-d4",
              "tag": "常见错误",
              "desc": "直接调用run()以为创建了新线程实际未创建仍在主线程执行"
            }
          ]
        },
        {
          "id": "守护线程-3-0-4",
          "tag": "守护线程",
          "desc": "setDaemon(true)必须在 start()前设置。所有非守护线程结束 JVM 退出，守护线程直接终止。典型：GC 线程。注意：守护线程中 finally 不一定执行",
          "details": [
            {
              "id": "守护线程-3-0-4-d0",
              "tag": "setDaemon",
              "desc": "必须在start前设置否则抛IllegalThreadStateException"
            },
            {
              "id": "守护线程-3-0-4-d1",
              "tag": "服务角色",
              "desc": "为用户线程提供后台支持如GC线程就是JVM内置守护线程"
            },
            {
              "id": "守护线程-3-0-4-d2",
              "tag": "退出机制",
              "desc": "所有用户线程结束JVM立即退出守护线程被强制终止"
            },
            {
              "id": "守护线程-3-0-4-d3",
              "tag": "finally风险",
              "desc": "守护线程finally块可能不执行资源可能泄漏需注意"
            },
            {
              "id": "守护线程-3-0-4-d4",
              "tag": "典型用途",
              "desc": "心跳检测日志清理监控统计等后台辅助任务不阻JVM退出"
            }
          ]
        }
      ]
    },
    {
      "id": "3-2-synchronized-与-volatile-3-1",
      "title": "3.2 synchronized 与 volatile",
      "points": [
        {
          "id": "synchronized原理-3-1-0",
          "tag": "synchronized 原理",
          "desc": "同步代码块：monitorenter/monitorexit + Monitor 对象；同步方法：ACC_SYNCHRONIZED 标志。锁升级：无锁→偏向锁（单线程 CAS 记录线程 ID）→轻量级锁（CAS 自旋）→重量级锁（OS 互斥量）。JDK6 后引入锁优化",
          "details": [
            {
              "id": "synchronized原理-3-1-0-d0",
              "tag": "同步代码块",
              "desc": "monitorenter/monitorexit 指令操作 Monitor 对象"
            },
            {
              "id": "synchronized原理-3-1-0-d1",
              "tag": "同步方法",
              "desc": "方法表 ACC_SYNCHRONIZED 标志"
            },
            {
              "id": "synchronized原理-3-1-0-d2",
              "tag": "锁升级",
              "desc": "无锁 → 偏向锁（CAS 记录线程 ID）"
            },
            {
              "id": "synchronized原理-3-1-0-d3",
              "tag": "",
              "desc": "→ 轕量级锁（CAS 自旋适应）"
            },
            {
              "id": "synchronized原理-3-1-0-d4",
              "tag": "",
              "desc": "→ 重量级锁（OS 互斥量 Mutex）"
            },
            {
              "id": "synchronized原理-3-1-0-d5",
              "tag": "JDK6 后引入锁升级优化",
              "desc": "JDK6引入偏向锁→轻量级锁→重量级锁三级升级，从无竞争CAS到自旋到OS互斥量，减少不必要的重量级锁开销"
            }
          ]
        },
        {
          "id": "synchronizedvsreentrantlock-3-1-1",
          "tag": "synchronized vs ReentrantLock",
          "desc": "sync：关键字 JVM 层面、自动释放锁、不可中断、非公平；RL：API 层面、手动 unlock(finally)、可中断 lockInterruptibly()、可公平/非公平、可绑定多个 Condition",
          "details": [
            {
              "id": "synchronizedvsreentrantlock-3-1-1-d0",
              "tag": "实现层面",
              "desc": "synchronized JVM内置关键字ReentrantLock API类层面"
            },
            {
              "id": "synchronizedvsreentrantlock-3-1-1-d1",
              "tag": "公平性",
              "desc": "synchronized非公平ReentrantLock可选公平锁(fair=true)"
            },
            {
              "id": "synchronizedvsreentrantlock-3-1-1-d2",
              "tag": "可中断",
              "desc": "synchronized不可响应中断ReentrantLock可lockInterruptibly"
            },
            {
              "id": "synchronizedvsreentrantlock-3-1-1-d3",
              "tag": "超时获取",
              "desc": "synchronized无超时ReentrantLock支持tryLock带时间参数"
            },
            {
              "id": "synchronizedvsreentrantlock-3-1-1-d4",
              "tag": "Condition",
              "desc": "synchronized单wait/notifyReentrantLock多Condition精准唤醒"
            }
          ]
        },
        {
          "id": "volatile可见性-3-1-2",
          "tag": "volatile 可见性",
          "desc": "volatile 写立即刷新主内存，读从主内存读取（非工作内存/CPU 缓存）。保证所有线程看到的值一致。但不能保证 i++ 原子性（读-改-写三步），需配合 AtomicInteger 或 synchronized",
          "details": [
            {
              "id": "volatile可见性-3-1-2-d0",
              "tag": "volatile 写操作立即刷新到主内存",
              "desc": "volatile变量写后JMM强制将工作内存值刷新到主内存，其他线程读时可见最新值而非CPU缓存旧值"
            },
            {
              "id": "volatile可见性-3-1-2-d1",
              "tag": "volatile 读操作从主内存读取（非工作内存/CPU 缓存）",
              "desc": "volatile变量读时JMM强制从主内存加载而非CPU缓存，保证读到的是其他线程最新写入的值"
            },
            {
              "id": "volatile可见性-3-1-2-d2",
              "tag": "保证所有线程看到的值一致",
              "desc": "volatile通过强制读写主内存实现可见性，所有线程对volatile变量的读取都看到最新写入值保证一致性"
            },
            {
              "id": "volatile可见性-3-1-2-d3",
              "tag": "但不",
              "desc": "但不能保证 i++ 原子性（读-改-写三步非原子）"
            },
            {
              "id": "volatile可见性-3-1-2-d4",
              "tag": "需配合 AtomicInteger 或 synchronized 保证原子性",
              "desc": "volatile仅保证可见性和有序性不保证原子性，i++复合操作需AtomicInteger(CAS)或synchronized(加锁)保证原子"
            }
          ]
        },
        {
          "id": "volatile有序性-3-1-3",
          "tag": "volatile 有序性",
          "desc": "通过内存屏障禁止指令重排序。volatile 写前 StoreStore（前序写完成），写后 StoreLoad；读前 LoadLoad，读后 LoadStore。经典应用：双重检查锁定 DCL 单例 volatile 修饰实例",
          "details": [
            {
              "id": "volatile有序性-3-1-3-d0",
              "tag": "通过插入内存屏障禁止指令重排序",
              "desc": "JMM在volatile读写前后插入4种内存屏障(StoreStore/StoreLoad/LoadLoad/LoadStore)，阻止编译器和CPU重排序"
            },
            {
              "id": "volatile有序性-3-1-3-d1",
              "tag": "volatile 写前插入 StoreStore 屏障（前面写操作先完成）",
              "desc": "StoreStore屏障确保volatile写之前所有普通写操作已刷新到主内存，防止前面写被重排到volatile写之后"
            },
            {
              "id": "volatile有序性-3-1-3-d2",
              "tag": "volatile 写后插入 StoreLoad 屏障",
              "desc": "StoreLoad屏障是4种屏障中开销最大的，确保volatile写后的读操作不会看到重排序后其他线程的旧数据"
            },
            {
              "id": "volatile有序性-3-1-3-d3",
              "tag": "volatile 读前插入 LoadLoad 屏障",
              "desc": "LoadLoad屏障确保volatile读之前的所有读操作已完成，防止volatile读被重排到前面读操作之前导致读到旧值"
            },
            {
              "id": "volatile有序性-3-1-3-d4",
              "tag": "volatile 读后插入 LoadStore 屏障",
              "desc": "LoadStore屏障确保volatile读之后的所有写操作不会重排到读之前，保证读到的值不会被后续写覆盖干扰"
            },
            {
              "id": "volatile有序性-3-1-3-d5",
              "tag": "经典应用",
              "desc": "DCL 单例 volatile 修饰实例"
            }
          ]
        }
      ]
    },
    {
      "id": "3-3-cas-与-atomic-3-2",
      "title": "3.3 CAS 与 Atomic",
      "points": [
        {
          "id": "cas原理-3-2-0",
          "tag": "CAS 原理",
          "desc": "Compare And Swap：内存位置 V、预期值 A、新值 B。V==A 则更新为 B 返回 true，否则返回 false。CPU 指令 cmpxchg 保证原子性。Java 通过 Unsafe.compareAndSwapInt() 调用。自旋 CAS 直到成功",
          "details": [
            {
              "id": "cas原理-3-2-0-d0",
              "tag": "Compare And Swap",
              "desc": "Compare And Swap 比较并交换"
            },
            {
              "id": "cas原理-3-2-0-d1",
              "tag": "三个操作数",
              "desc": "内存位置 V、预期值 A、新值 B"
            },
            {
              "id": "cas原理-3-2-0-d2",
              "tag": "当 V",
              "desc": "=A 时将 V 更新为 B，返回 true"
            },
            {
              "id": "cas原理-3-2-0-d3",
              "tag": "V!=A 则不操作返回 false",
              "desc": "CAS比较内存值V与预期值A，若V!=A说明已被其他线程修改则放弃更新返回false，自旋重试直到V==A时更新为B"
            },
            {
              "id": "cas原理-3-2-0-d4",
              "tag": "CPU 指令 cmpxchg",
              "desc": "CPU 指令 cmpxchg 保证原子性"
            },
            {
              "id": "cas原理-3-2-0-d5",
              "tag": "自旋 CAS 直到成功（可",
              "desc": "自旋 CAS 直到成功（可能消耗 CPU）"
            }
          ]
        },
        {
          "id": "aba问题-3-2-1",
          "tag": "ABA 问题",
          "desc": "值 A→B→A，CAS 认为没变。解决方案：AtomicStampedReference（加 int 版本号）或 AtomicMarkableReference（加 boolean 标记）。数据库乐观锁也类似（version 字段）",
          "details": [
            {
              "id": "aba问题-3-2-1-d0",
              "tag": "值从 A→B→A，CAS 认为没被",
              "desc": "值从 A→B→A，CAS 认为没被修改过"
            },
            {
              "id": "aba问题-3-2-1-d1",
              "tag": "AtomicStampedReference",
              "desc": "加 int 版本号（AtomicStampedReference的详细说明：ABA 问题中关于AtomicStampedReference的内容）"
            },
            {
              "id": "aba问题-3-2-1-d2",
              "tag": "AtomicMarkableReference",
              "desc": "加 boolean 标记（AtomicMarkableReference的详细说明：ABA 问题中关于AtomicMarkableReference的内容）"
            },
            {
              "id": "aba问题-3-2-1-d3",
              "tag": "数据库乐观锁也类似（version 字段每次更新+1）",
              "desc": "乐观锁用version字段每次UPDATE时version=version+1并校验版本号，与AtomicStampedReference加版本号思路一致"
            }
          ]
        },
        {
          "id": "atomic类-3-2-2",
          "tag": "Atomic 类",
          "desc": "基本：AtomicInteger/AtomicLong/AtomicBoolean；引用：AtomicReference/AtomicStampedReference；数组：AtomicIntegerArray；字段：AtomicIntegerFieldUpdater；高并发累加：LongAdder（分段 CAS 优于 AtomicLong）",
          "details": [
            {
              "id": "atomic类-3-2-2-d0",
              "tag": "AtomicInteger",
              "desc": "CAS无锁更新整数比synchronized更轻量高并发性能提升"
            },
            {
              "id": "atomic类-3-2-2-d1",
              "tag": "AtomicLong",
              "desc": "同理Long类型原子操作底层Unsafe.compareAndSwapLong"
            },
            {
              "id": "atomic类-3-2-2-d2",
              "tag": "AtomicReference",
              "desc": "CAS更新对象引用保证引用原子切换不可中断"
            },
            {
              "id": "atomic类-3-2-2-d3",
              "tag": "底层原理",
              "desc": "Unsafe.compareAndSwapInt基于CPU原子指令无锁并发"
            },
            {
              "id": "atomic类-3-2-2-d4",
              "tag": "ABA问题",
              "desc": "CAS检测值不变但可能被改过再改回用AtomicStampedReference解决"
            }
          ]
        }
      ]
    },
    {
      "id": "3-4-threadlocal-3-3",
      "title": "3.4 ThreadLocal",
      "points": [
        {
          "id": "原理-3-3-0",
          "tag": "原理",
          "desc": "每个 Thread 维护 ThreadLocalMap。key=ThreadLocal 对象（弱引用 WeakReference），value=变量副本（强引用）。set() 以当前 ThreadLocal 为 key 存入当前线程的 ThreadLocalMap，get() 同理取出",
          "details": [
            {
              "id": "原理-3-3-0-d0",
              "tag": "写后屏障",
              "desc": "StoreStore+StoreLoad保证写操作对其他线程可见不重排序"
            },
            {
              "id": "原理-3-3-0-d1",
              "tag": "读前屏障",
              "desc": "LoadLoad+LoadStore保证读操作读到最新写入值"
            },
            {
              "id": "原理-3-3-0-d2",
              "tag": "禁止重排",
              "desc": "写操作不与后续任何操作重排序读操作不与前面重排序"
            },
            {
              "id": "原理-3-3-0-d3",
              "tag": "实现差异",
              "desc": "不同JVM实现不同x86只需StoreLoad其他平台更强"
            },
            {
              "id": "原理-3-3-0-d4",
              "tag": "不保证原子",
              "desc": "volatile++非原子操作仍需AtomicInteger保证复合操作原子性"
            }
          ]
        },
        {
          "id": "内存泄漏-3-3-1",
          "tag": "内存泄漏",
          "desc": "key 弱引用 GC 后变 null，但 value 强引用无法回收。线程池中线程长期存活→value 泄漏。解决方案：使用后 try-finally 中 `remove()` 清除。InheritableThreadLocal 可被子线程继承",
          "details": [
            {
              "id": "内存泄漏-3-3-1-d0",
              "tag": "key",
              "desc": "key 是弱引用，GC 后 key 变为 null"
            },
            {
              "id": "内存泄漏-3-3-1-d1",
              "tag": "但 value",
              "desc": "但 value 是强引用无法被回收"
            },
            {
              "id": "内存泄漏-3-3-1-d2",
              "tag": "线程池中线程长期存活",
              "desc": "线程池中线程长期存活 → value 一直无法回收 → 泄漏"
            },
            {
              "id": "内存泄漏-3-3-1-d3",
              "tag": "解决方案",
              "desc": "使用后 try-finally 中 remove() 清除"
            }
          ]
        }
      ]
    },
    {
      "id": "3-5-jmm-3-4",
      "title": "3.5 JMM",
      "points": [
        {
          "id": "主-工作内存-3-4-0",
          "tag": "主/工作内存",
          "desc": "所有共享变量存主内存，每线程有工作内存（对应 CPU 缓存/寄存器）。线程对变量的操作在工作内存中进行，不能直接读写主内存。8 种操作：read/load/use/assign/store/write/lock/unlock",
          "details": [
            {
              "id": "主-工作内存-3-4-0-d0",
              "tag": "主内存",
              "desc": "所有线程共享存储变量原始值堆中共享数据区域"
            },
            {
              "id": "主-工作内存-3-4-0-d1",
              "tag": "工作内存",
              "desc": "每线程私有存储变量副本线程间不可直接访问需通过主内存"
            },
            {
              "id": "主-工作内存-3-4-0-d2",
              "tag": "8种操作",
              "desc": "lock/read/load/use/assign/store/write/unlock原子操作规范"
            },
            {
              "id": "主-工作内存-3-4-0-d3",
              "tag": "可见性规则",
              "desc": "线程修改必须store→write回主内存其他线程read→load获取"
            },
            {
              "id": "主-工作内存-3-4-0-d4",
              "tag": "volatile特殊",
              "desc": "volatile写立即write回主内存读立即从主内存load保证可见"
            }
          ]
        },
        {
          "id": "happens-before-3-4-1",
          "tag": "happens-before",
          "desc": "1.程序次序(单线程内代码顺序) 2.管程锁定(unlock 先于后续 lock) 3.volatile(写先于后续读) 4.线程启动(start 先于线程内动作) 5.线程终止 6.线程中断 7.对象终结 8.传递性(A→B 且 B→C 则 A→C)",
          "details": [
            {
              "id": "happens-before-3-4-1-d0",
              "tag": "1. 程序次序规则（单线程内代码",
              "desc": "1. 程序次序规则（单线程内代码执行顺序）"
            },
            {
              "id": "happens-before-3-4-1-d1",
              "tag": "2. 管程锁定规则（unlock 先于后续 lock）",
              "desc": "同一个监视器锁上，unlock操作happens-before后续对该锁的lock操作，保证锁释放后其他线程可见修改"
            },
            {
              "id": "happens-before-3-4-1-d2",
              "tag": "3. volatile 变量规则（写先于后续读）",
              "desc": "对volatile变量的写操作happens-before后续对该变量的读操作，确保volatile写后的新值对所有后续读线程可见"
            },
            {
              "id": "happens-before-3-4-1-d3",
              "tag": "4. 线程启动规则（start() 先于线程内操作）",
              "desc": "Thread.start()调用happens-before该线程内的所有操作，保证主线程启动子线程前的修改对子线程可见"
            },
            {
              "id": "happens-before-3-4-1-d4",
              "tag": "5. 线程终止规则（线程内操作先于 terminate()）",
              "desc": "线程内所有操作happens-before对该线程的Thread.join()返回，保证子线程修改在join后对主线程可见"
            },
            {
              "id": "happens-before-3-4-1-d5",
              "tag": "6. 线程中断规则",
              "desc": "对线程的interrupt()调用happens-before被中断线程检测到中断(isInterrupted()或InterruptedException)"
            },
            {
              "id": "happens-before-3-4-1-d6",
              "tag": "7. 对象终结规则",
              "desc": "对象的初始化完成(构造函数执行完)happens-before它的finalize()方法开始执行，保证finalize时对象状态完整"
            },
            {
              "id": "happens-before-3-4-1-d7",
              "tag": "8. 传递性（A",
              "desc": "8. 传递性（A→B 且 B→C 则 A→C）"
            }
          ]
        },
        {
          "id": "内存屏障-3-4-2",
          "tag": "内存屏障",
          "desc": "LoadLoad(读 1→读 2)、StoreStore(写 1→写 2)、LoadStore(读→写)、StoreLoad(写→读，开销最大)。volatile 写前 StoreStore 写后 StoreLoad，读前 LoadLoad 读后 LoadStore",
          "details": [
            {
              "id": "内存屏障-3-4-2-d0",
              "tag": "LoadLoad",
              "desc": "前面load不会与后面load重排序保证读取顺序"
            },
            {
              "id": "内存屏障-3-4-2-d1",
              "tag": "StoreStore",
              "desc": "前面store不会与后面store重排序保证写入顺序"
            },
            {
              "id": "内存屏障-3-4-2-d2",
              "tag": "LoadStore",
              "desc": "前面load不会与后面store重排序保证读后写顺序"
            },
            {
              "id": "内存屏障-3-4-2-d3",
              "tag": "StoreLoad",
              "desc": "前面store不会与后面load重排序最costly最重要保证写后读"
            },
            {
              "id": "内存屏障-3-4-2-d4",
              "tag": "volatile实现",
              "desc": "写插入StoreStore+StoreLoad读插入LoadLoad+LoadStore四屏障"
            }
          ]
        }
      ]
    },
    {
      "id": "3-6-线程池重点-3-5",
      "title": "3.6 线程池（重点）",
      "points": [
        {
          "id": "七大参数-3-5-0",
          "tag": "七大参数",
          "desc": "corePoolSize 核心线程数/maximumPoolSize 最大线程数/keepAliveTime 空闲存活时间/unit 时间单位/workQueue 任务队列/threadFactory 线程工厂/handler 拒绝策略。推荐手动 new ThreadPoolExecutor 配置",
          "details": [
            {
              "id": "七大参数-3-5-0-d0",
              "tag": "corePoolSize",
              "desc": "核心线程数（不会被回收）（corePoolSize的详细说明：七大参数中关于corePoolSize的内容）"
            },
            {
              "id": "七大参数-3-5-0-d1",
              "tag": "maximumPoolSize",
              "desc": "最大线程数（maximumPoolSize的详细说明：七大参数中关于maximumPoolSize的内容）"
            },
            {
              "id": "七大参数-3-5-0-d2",
              "tag": "keepAliveTime",
              "desc": "非核心线程空闲存活时间（keepAliveTime的详细说明：七大参数中关于keepAliveTime的内容）"
            },
            {
              "id": "七大参数-3-5-0-d3",
              "tag": "unit",
              "desc": "时间单位（unit的详细说明：七大参数中关于unit的内容）"
            },
            {
              "id": "七大参数-3-5-0-d4",
              "tag": "workQueue",
              "desc": "任务队列（workQueue的详细说明：七大参数中关于workQueue的内容）"
            },
            {
              "id": "七大参数-3-5-0-d5",
              "tag": "threadFactory",
              "desc": "线程工厂（threadFactory的详细说明：七大参数中关于threadFactory的内容）"
            },
            {
              "id": "七大参数-3-5-0-d6",
              "tag": "handler",
              "desc": "拒绝策略（handler的详细说明：七大参数中关于handler的内容）"
            }
          ]
        },
        {
          "id": "工作流程-3-5-1",
          "tag": "工作流程",
          "desc": "1.线程数<corePoolSize→创建核心线程 2.核心满→任务入 workQueue 3.队列满且线程数<maximumPoolSize→创建非核心线程 4.达最大→执行拒绝策略。注意：队列不满不创建非核心线程",
          "details": [
            {
              "id": "工作流程-3-5-1-d0",
              "tag": "1. 线程数 < corePoolSize",
              "desc": "1. 线程数 < corePoolSize → 创建核心线程"
            },
            {
              "id": "工作流程-3-5-1-d1",
              "tag": "2. 核心线程满",
              "desc": "2. 核心线程满 → 任务入 workQueue"
            },
            {
              "id": "工作流程-3-5-1-d2",
              "tag": "3. 队列满且线程数 < maximumPoolSize",
              "desc": "3. 队列满且线程数 < maximumPoolSize → 创建非核心线程"
            },
            {
              "id": "工作流程-3-5-1-d3",
              "tag": "4. 线程数达 maximumPoolSize",
              "desc": "4. 线程数达 maximumPoolSize → 执行拒绝策略"
            },
            {
              "id": "工作流程-3-5-1-d4",
              "tag": "注意",
              "desc": "队列不满不创建非核心线程！（注意的详细说明：工作流程中关于注意的内容）"
            }
          ]
        },
        {
          "id": "四种拒绝策略-3-5-2",
          "tag": "四种拒绝策略",
          "desc": "AbortPolicy(抛 RejectedExecutionException 默认)/CallerRunsPolicy(调用线程执行任务，降低提交速度)/DiscardPolicy(静默丢弃)/DiscardOldestPolicy(丢弃队列最旧任务再提交)",
          "details": [
            {
              "id": "四种拒绝策略-3-5-2-d0",
              "tag": "AbortPolicy",
              "desc": "抛 RejectedExecutionException（默认）"
            },
            {
              "id": "四种拒绝策略-3-5-2-d1",
              "tag": "CallerRunsPolicy",
              "desc": "由提交线程执行任务（降速）（CallerRunsPolicy的详细说明：四种拒绝策略中关于CallerRunsPolicy的内容）"
            },
            {
              "id": "四种拒绝策略-3-5-2-d2",
              "tag": "DiscardPolicy",
              "desc": "静默丢弃（DiscardPolicy的详细说明：四种拒绝策略中关于DiscardPolicy的内容）"
            },
            {
              "id": "四种拒绝策略-3-5-2-d3",
              "tag": "DiscardOldestPolicy",
              "desc": "丢弃最旧任务再尝试（DiscardOldestPolicy的详细说明：四种拒绝策略中关于DiscardOldestPolicy的内容）"
            }
          ]
        },
        {
          "id": "executors四种池-3-5-3",
          "tag": "Executors 四种池",
          "desc": "FixedThreadPool(固定线程,无界 LinkedBlockingQueue)/SingleThreadExecutor(单线程,无界队列)/CachedThreadPool(0 核心 MAX 最大,SynchronousQueue)/ScheduledThreadPool(定时,DelayedWorkQueue)",
          "details": [
            {
              "id": "executors四种池-3-5-3-d0",
              "tag": "FixedThreadPool",
              "desc": "固定线程数核心=最大无界LinkedBlockingQueue可能OOM"
            },
            {
              "id": "executors四种池-3-5-3-d1",
              "tag": "SingleThreadExecutor",
              "desc": "核心=最大=1单线程顺序执行无界队列可能OOM"
            },
            {
              "id": "executors四种池-3-5-3-d2",
              "tag": "CachedThreadPool",
              "desc": "核心=0最大=MAX短任务即时创建60s空闲回收线程数无限"
            },
            {
              "id": "executors四种池-3-5-3-d3",
              "tag": "ScheduledThreadPool",
              "desc": "定时/周期执行DelayedWorkQueue调度队列"
            },
            {
              "id": "executors四种池-3-5-3-d4",
              "tag": "共同问题",
              "desc": "Fixed/Single用无界队列Cached线程数无上限皆有OOM风险需手动创建"
            }
          ]
        },
        {
          "id": "不推荐executors-3-5-4",
          "tag": "不推荐 Executors",
          "desc": "Fixed 和 Single 用无界队列 LinkedBlockingQueue→任务堆积 OOM；Cached 最大线程 Integer.MAX_VALUE→创建大量线程 OOM。阿里规范要求手动创建 ThreadPoolExecutor",
          "details": [
            {
              "id": "不推荐executors-3-5-4-d0",
              "tag": "Fixed/Single风险",
              "desc": "LinkedBlockingQueue无界任务堆积导致OOM内存溢出"
            },
            {
              "id": "不推荐executors-3-5-4-d1",
              "tag": "Cached风险",
              "desc": "最大线程Integer.MAX_VALUE高并发创建大量线程崩溃系统"
            },
            {
              "id": "不推荐executors-3-5-4-d2",
              "tag": "阿里规范",
              "desc": "禁止用Executors创建线程池必须手动ThreadPoolExecutor可控"
            },
            {
              "id": "不推荐executors-3-5-4-d3",
              "tag": "推荐方式",
              "desc": "自定义核心数最大数队列容量拒绝策略可控可监控可调优"
            },
            {
              "id": "不推荐executors-3-5-4-d4",
              "tag": "拒绝策略",
              "desc": "AbortPolicy抛异常+CallerRunsPolicy调用者执行+Discard丢弃+DiscardOldest丢弃最老"
            }
          ]
        },
        {
          "id": "线程数设置-3-5-5",
          "tag": "线程数设置",
          "desc": "CPU 密集型：线程数=CPU 核数+1（减少上下文切换）；IO 密集型：线程数=CPU 核数×2 或 N/(1-阻塞系数)。混合型：拆分 CPU 密集和 IO 密集任务分别用不同线程池",
          "details": [
            {
              "id": "线程数设置-3-5-5-d0",
              "tag": "CPU密集型",
              "desc": "线程数N+1避免过多线程争抢CPU上下文切换开销"
            },
            {
              "id": "线程数设置-3-5-5-d1",
              "tag": "IO密集型",
              "desc": "线程数2N或N*(1+W/C)W等待时间C计算时间"
            },
            {
              "id": "线程数设置-3-5-5-d2",
              "tag": "N指CPU核数",
              "desc": "Runtime.getRuntime().availableProcessors()获取"
            },
            {
              "id": "线程数设置-3-5-5-d3",
              "tag": "经验公式",
              "desc": "线程数=(CPU核数*目标利用率*(1+等待时间/计算时间))"
            },
            {
              "id": "线程数设置-3-5-5-d4",
              "tag": "实际调整",
              "desc": "先按公式设置再通过监控压测逐步调优找到最佳配置"
            }
          ]
        }
      ]
    },
    {
      "id": "3-7-aqs-3-6",
      "title": "3.7 AQS",
      "points": [
        {
          "id": "核心思想-3-6-0",
          "tag": "核心思想",
          "desc": "AbstractQueuedSynchronizer。资源空闲→当前线程获取；占用→入等待队列阻塞，资源释放后唤醒队首。volatile int state 表示同步状态（CAS 修改）。子类重写 tryAcquire/tryRelease 等模板方法",
          "details": [
            {
              "id": "核心思想-3-6-0-d0",
              "tag": "核心state",
              "desc": "volatile int state表示锁状态0未锁>0重入计数+CLH队列"
            },
            {
              "id": "核心思想-3-6-0-d1",
              "tag": "CLH队列",
              "desc": "双向链表排队等待获取锁的线程节点FIFO公平排队"
            },
            {
              "id": "核心思想-3-6-0-d2",
              "tag": "模板方法",
              "desc": "tryAcquire/tryRelease子类自定义获取释放逻辑不重复实现"
            },
            {
              "id": "核心思想-3-6-0-d3",
              "tag": "独占模式",
              "desc": "同一时刻只有一个线程获取锁如ReentrantLockstate=1"
            },
            {
              "id": "核心思想-3-6-0-d4",
              "tag": "共享模式",
              "desc": "多线程可同时获取如Semaphore/CountDownLatchstate>0"
            }
          ]
        },
        {
          "id": "clh队列-3-6-1",
          "tag": "CLH 队列",
          "desc": "CLH(Craig Landin Hagersten)变体 FIFO 双向链表。Node 含：waitStatus/prev/next/thread/nextWaiter。head 哑节点，tail 尾插。前驱节点释放后唤醒后继节点",
          "details": [
            {
              "id": "clh队列-3-6-1-d0",
              "tag": "双向链表",
              "desc": "Node含prev/next/thread/waitStatus前驱后继线程引用"
            },
            {
              "id": "clh队列-3-6-1-d1",
              "tag": "head节点",
              "desc": "指向当前持有锁的线程节点或哨兵空节点不存储有效数据"
            },
            {
              "id": "clh队列-3-6-1-d2",
              "tag": "tail指针",
              "desc": "指向队列最后加入的等待节点新节点CAS入队尾保证并发安全"
            },
            {
              "id": "clh队列-3-6-1-d3",
              "tag": "入队操作",
              "desc": "CAS设置tail.next保证并发安全无锁入队避免竞争"
            },
            {
              "id": "clh队列-3-6-1-d4",
              "tag": "出队操作",
              "desc": "持锁线程释放后唤醒后继节点设置新head传递锁所有权"
            }
          ]
        },
        {
          "id": "独占vs共享-3-6-2",
          "tag": "独占 vs 共享",
          "desc": "独占：同一时刻一个线程执行（ReentrantLock），tryAcquire/tryRelease。共享：多线程可同时执行（Semaphore/CountDownLatch），tryAcquireShared 返回>=0 表示成功",
          "details": [
            {
              "id": "独占vs共享-3-6-2-d0",
              "tag": "独占模式",
              "desc": "state=1表示持有锁可重入state递增如ReentrantLock"
            },
            {
              "id": "独占vs共享-3-6-2-d1",
              "tag": "共享模式",
              "desc": "state>0表示获取许可数如Semaphore acquire/release"
            },
            {
              "id": "独占vs共享-3-6-2-d2",
              "tag": "读写锁",
              "desc": "读锁共享state高位读计数低位写计数读写分离"
            },
            {
              "id": "独占vs共享-3-6-2-d3",
              "tag": "tryAcquireShared",
              "desc": "返回>=0表示获取成功可传播唤醒后续共享节点"
            },
            {
              "id": "独占vs共享-3-6-2-d4",
              "tag": "CountDownLatch",
              "desc": "countDown递减stateawait检查state==0释放所有等待线程"
            }
          ]
        },
        {
          "id": "waitstatus-3-6-3",
          "tag": "waitStatus",
          "desc": "CANCELLED(1)线程已取消/SIGNAL(-1)后继节点需被唤醒/CONDITION(-2)在 Condition 队列等待/PROPAGATE(-3)共享模式向后传播/INITIAL(0)初始",
          "details": [
            {
              "id": "waitstatus-3-6-3-d0",
              "tag": "CANCELLED(1)",
              "desc": "线程取消获取锁超时或中断不再排队可安全移除"
            },
            {
              "id": "waitstatus-3-6-3-d1",
              "tag": "SIGNAL(-1)",
              "desc": "后继节点需被唤醒释放锁时必须unpark后继保证传递"
            },
            {
              "id": "waitstatus-3-6-3-d2",
              "tag": "CONDITION(-2)",
              "desc": "等待Condition信号从CLH队列转移到Condition队列等待"
            },
            {
              "id": "waitstatus-3-6-3-d3",
              "tag": "PROPAGATE(-3)",
              "desc": "共享模式传播唤醒确保后续共享节点也被唤醒不遗漏"
            },
            {
              "id": "waitstatus-3-6-3-d4",
              "tag": "INITIAL(0)",
              "desc": "新节点初始状态尚未设置等待状态刚入队默认值"
            }
          ]
        },
        {
          "id": "基于aqs的同步器-3-6-4",
          "tag": "基于 AQS 的同步器",
          "desc": "ReentrantLock(独占)/ReentrantReadWriteLock(读共享写独占)/Semaphore(共享)/CountDownLatch(共享)/CyclicBarrier(基于 ReentrantLock+Condition)/ThreadPoolExecutor.Worker(独占)",
          "details": [
            {
              "id": "基于aqs的同步器-3-6-4-d0",
              "tag": "ReentrantLock",
              "desc": "独占锁可重入公平/非公平两种模式state递增递减"
            },
            {
              "id": "基于aqs的同步器-3-6-4-d1",
              "tag": "Semaphore",
              "desc": "共享锁控制并发访问线程数acquire/release许可数"
            },
            {
              "id": "基于aqs的同步器-3-6-4-d2",
              "tag": "CountDownLatch",
              "desc": "共享同步器countDown减计数await等归零一次使用"
            },
            {
              "id": "基于aqs的同步器-3-6-4-d3",
              "tag": "ReentrantReadWriteLock",
              "desc": "读共享写独占写锁可降级读锁不可升级"
            },
            {
              "id": "基于aqs的同步器-3-6-4-d4",
              "tag": "CyclicBarrier",
              "desc": "所有线程await到达屏障后继续可循环重用reset重置"
            }
          ]
        }
      ]
    },
    {
      "id": "3-8-并发工具-3-7",
      "title": "3.8 并发工具",
      "points": [
        {
          "id": "countdownlatch-3-7-0",
          "tag": "CountDownLatch",
          "desc": "倒计时器，一/多线程等待其他线程完成。countDown()减 1，await()等到 0。不可重用。应用：主线程等待多个子任务完成后汇总",
          "details": [
            {
              "id": "countdownlatch-3-7-0-d0",
              "tag": "一次使用",
              "desc": "countDown到0后不可重置不可再次await只能用一次"
            },
            {
              "id": "countdownlatch-3-7-0-d1",
              "tag": "countDown",
              "desc": "计数减1不阻塞调用线程继续执行异步减计数"
            },
            {
              "id": "countdownlatch-3-7-0-d2",
              "tag": "await",
              "desc": "阻塞当前线程直到计数归零才释放等待其他线程完成"
            },
            {
              "id": "countdownlatch-3-7-0-d3",
              "tag": "一等多",
              "desc": "主线程await等N个子线程都countDown完成汇合"
            },
            {
              "id": "countdownlatch-3-7-0-d4",
              "tag": "多等一",
              "desc": "N个线程同时await等某个条件满足(计数归零)同时释放"
            }
          ]
        },
        {
          "id": "cyclicbarrier-3-7-1",
          "tag": "CyclicBarrier",
          "desc": "循环屏障，一组线程到达屏障阻塞，最后一个到达后全部继续。await()等待。可重用(reset)。可指定 barrierAction。应用：多线程分段计算后汇总",
          "details": [
            {
              "id": "cyclicbarrier-3-7-1-d0",
              "tag": "循环使用",
              "desc": "所有线程到达后自动重置可反复使用不像CountDownLatch一次性"
            },
            {
              "id": "cyclicbarrier-3-7-1-d1",
              "tag": "await",
              "desc": "线程到达屏障位置阻塞等待其他线程全部到达"
            },
            {
              "id": "cyclicbarrier-3-7-1-d2",
              "tag": "barrierAction",
              "desc": "所有线程到达后优先执行的动作回调函数先执行再释放"
            },
            {
              "id": "cyclicbarrier-3-7-1-d3",
              "tag": "reset",
              "desc": "手动重置屏障回到初始状态中断等待线程重新开始"
            },
            {
              "id": "cyclicbarrier-3-7-1-d4",
              "tag": "与CountDownLatch对比",
              "desc": "CyclicBarrier可重用parties可指定await回调CountDownLatch不可"
            }
          ]
        },
        {
          "id": "semaphore-3-7-2",
          "tag": "Semaphore",
          "desc": "信号量，控制同时访问资源的线程数（限流）。acquire()获取许可（阻塞），release()释放。公平（排队）/非公平（抢占）",
          "details": [
            {
              "id": "semaphore-3-7-2-d0",
              "tag": "acquire",
              "desc": "获取一个许可许可不足则阻塞等待直到有许可释放"
            },
            {
              "id": "semaphore-3-7-2-d1",
              "tag": "release",
              "desc": "释放一个许可归还许可供其他线程获取增加可用许可数"
            },
            {
              "id": "semaphore-3-7-2-d2",
              "tag": "限流控制",
              "desc": "限制同时访问某资源的线程数量控制并发度"
            },
            {
              "id": "semaphore-3-7-2-d3",
              "tag": "公平模式",
              "desc": "fair=true按等待顺序获取许可FIFO避免饥饿保证公平"
            },
            {
              "id": "semaphore-3-7-2-d4",
              "tag": "典型场景",
              "desc": "数据库连接池限流接口限并发访问数控制防止过载"
            }
          ]
        },
        {
          "id": "reentrantreadwritelock-3-7-3",
          "tag": "ReentrantReadWriteLock",
          "desc": "读锁共享（多线程同时读），写锁独占（单线程写）。适合读多写少。支持锁降级（写→读），不支持锁升级（死锁风险）",
          "details": [
            {
              "id": "reentrantreadwritelock-3-7-3-d0",
              "tag": "读锁共享",
              "desc": "多线程可同时持有读锁并发读取无阻塞提高读吞吐"
            },
            {
              "id": "reentrantreadwritelock-3-7-3-d1",
              "tag": "写锁独占",
              "desc": "持有写锁时排斥所有读锁和写锁保证写操作一致性"
            },
            {
              "id": "reentrantreadwritelock-3-7-3-d2",
              "tag": "锁降级",
              "desc": "写锁→获取读锁→释放写锁安全降级为读锁保证数据可见"
            },
            {
              "id": "reentrantreadwritelock-3-7-3-d3",
              "tag": "锁不可升级",
              "desc": "持有读锁时获取写锁会死锁禁止升级避免循环等待"
            },
            {
              "id": "reentrantreadwritelock-3-7-3-d4",
              "tag": "stamp优化",
              "desc": "ReadLock可转StampedLock乐观读性能更好无CAS开销"
            }
          ]
        },
        {
          "id": "stampedlock-3-7-4",
          "tag": "StampedLock",
          "desc": "Java8 引入。乐观读锁 `tryOptimisticRead()` 不加锁，读后 `validate()` 校验是否有写。性能>>ReadWriteLock。不支持重入，不适合嵌套调用",
          "details": [
            {
              "id": "stampedlock-3-7-4-d0",
              "tag": "乐观读",
              "desc": "tryOptimisticRead获取stamp不加锁validate校验是否被修改"
            },
            {
              "id": "stampedlock-3-7-4-d1",
              "tag": "validate",
              "desc": "校验stamp期间是否有写操作有则转悲观读锁保证数据一致"
            },
            {
              "id": "stampedlock-3-7-4-d2",
              "tag": "性能优势",
              "desc": "乐观读无CAS无锁远优于ReadWriteLock读密集场景性能好"
            },
            {
              "id": "stampedlock-3-7-4-d3",
              "tag": "不可重入",
              "desc": "同一线程不可重复获取写锁或读锁无重入支持需自行保证"
            },
            {
              "id": "stampedlock-3-7-4-d4",
              "tag": "转换模式",
              "desc": "readLock→writeLock需先释放读锁再获取写锁不能直接升级"
            }
          ]
        },
        {
          "id": "completablefuture-3-7-5",
          "tag": "CompletableFuture",
          "desc": "Java8 异步编程。supplyAsync(异步执行有返回值)/thenApply(转换)/thenAccept(消费)/thenCombine(合并两个)/allOf/anyOf。支持链式回调和异常处理 exceptionally()",
          "details": [
            {
              "id": "completablefuture-3-7-5-d0",
              "tag": "创建任务",
              "desc": "supplyAsync有返回值runAsync无返回值指定Executor或默认ForkJoinPool"
            },
            {
              "id": "completablefuture-3-7-5-d1",
              "tag": "串行转换",
              "desc": "thenApply同步转换thenApplyAsync异步转换结果类型"
            },
            {
              "id": "completablefuture-3-7-5-d2",
              "tag": "串行消费",
              "desc": "thenAccept处理结果不返回thenRun不关心结果只执行动作"
            },
            {
              "id": "completablefuture-3-7-5-d3",
              "tag": "组合编排",
              "desc": "thenCombine合并两个任务结果thenCompose串联异步流"
            },
            {
              "id": "completablefuture-3-7-5-d4",
              "tag": "异常处理",
              "desc": "exceptionally捕获等价catchhandle同时处理正常和异常值"
            },
            {
              "id": "completablefuture深入-3-7-5-d5",
              "tag": "组合操作",
              "desc": "thenCombine合并两个独立结果thenCompose串联依赖操作whenComplete附加回调不改变结果"
            },
            {
              "id": "completablefuture深入-3-7-5-d6",
              "tag": "allOf/anyOf",
              "desc": "allOf等待全部完成anyOf等待任一完成批量并行执行并发调用多个服务聚合结果"
            },
            {
              "id": "completablefuture深入-3-7-5-d7",
              "tag": "异常处理",
              "desc": "exceptionally捕获异常返回默认值handle同时处理正常值和异常completeOnTimeout超时返回默认值"
            },
            {
              "id": "completablefuture深入-3-7-5-d8",
              "tag": "超时控制",
              "desc": "orTimeout(duration,unit)超时抛TimeoutExceptioncompleteOnTimeout超时返回默认值Java9+新增"
            },
            {
              "id": "completablefuture深入-3-7-5-d9",
              "tag": "自定义线程池",
              "desc": "默认ForkJoinPool.commonPool()共享线程池可能竞争重要任务应指定独立Executor避免共享池影响"
            }
          ]
        },
        {
          "id": "forkjoinpool-3-7-6",
          "tag": "ForkJoinPool",
          "desc": "分治思想+工作窃取（Work-Stealing）。大任务 fork 拆分小任务，join 等待结果。空闲线程从其他线程队列尾部窃取任务。parallelStream 底层用 ForkJoinPool.commonPool()",
          "details": [
            {
              "id": "forkjoinpool-3-7-6-d0",
              "tag": "分治思想",
              "desc": "大任务Fork拆分为子任务Join合并子任务结果递归分解"
            },
            {
              "id": "forkjoinpool-3-7-6-d1",
              "tag": "工作窃取",
              "desc": "空闲线程从其他线程队列尾部窃取任务提高利用率减少空闲"
            },
            {
              "id": "forkjoinpool-3-7-6-d2",
              "tag": "ForkJoinTask",
              "desc": "RecursiveTask有返回值RecursiveAction无返回值两种基类"
            },
            {
              "id": "forkjoinpool-3-7-6-d3",
              "tag": "双端队列",
              "desc": "每个线程维护自己的工作队列LIFO自己FIFO窃取高效"
            },
            {
              "id": "forkjoinpool-3-7-6-d4",
              "tag": "适用场景",
              "desc": "递归分解并行计算如并行排序大矩阵运算大数据并行处理"
            }
          ]
        }
      ]
    }
  ]
};

// jvm.js — 四、JVM 虚拟机 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['jvm'] = {
  "id": "jvm",
  "title": "五、JVM 虚拟机",
  "tag": "JVM",
  "order": 5,
  "icon": "🧩",
  "cssIndex": 4,
  "subs": [
    {
      "id": "4-1-内存区域-4-0",
      "title": "4.1 内存区域",
      "points": [
        {
          "id": "程序计数器-4-0-0",
          "tag": "程序计数器",
          "desc": "线程私有，记录当前线程执行的字节码行号。分支/循环/跳转/异常/线程恢复依赖它。Native 方法时为 undefined。唯一不会 OOM 的区域",
          "details": [
            {
              "id": "程序计数器-4-0-0-d0",
              "tag": "线程私有，记录字节码行号",
              "desc": "程序计数器线程私有记录当前执行字节码指令地址，分支循环跳转异常恢复依赖它确定下一条执行指令"
            },
            {
              "id": "程序计数器-4-0-0-d1",
              "tag": "分支/循环/跳转/异常/线程",
              "desc": "分支/循环/跳转/异常/线程恢复依赖它"
            },
            {
              "id": "程序计数器-4-0-0-d2",
              "tag": "执行 Native 方法时值为 undefined",
              "desc": "执行Native方法时PC计数器无有效值(undefined)，因为Native方法非字节码无法用行号记录执行位置"
            },
            {
              "id": "程序计数器-4-0-0-d3",
              "tag": "唯一不会发生 OOM 的区域",
              "desc": "程序计数器容量极小仅存一个地址值，JVM规范明确不会抛OutOfMemoryError，是唯一无OOM风险的内存区域"
            }
          ]
        },
        {
          "id": "虚拟机栈-4-0-1",
          "tag": "虚拟机栈",
          "desc": "线程私有，存栈帧。每方法调用创建栈帧：局部变量表(Slot 存参数和局部变量)/操作数栈(计算中间结果)/动态链接(运行时常量池引用)/方法返回地址。栈深度超限→StackOverflowError(递归)，无法扩展→OOM",
          "details": [
            {
              "id": "虚拟机栈-4-0-1-d0",
              "tag": "线程私有，存储栈帧",
              "desc": "虚拟机栈线程私有，每个方法调用创建一个栈帧压入栈顶，方法返回时弹出栈帧，栈深度超限抛StackOverflowError"
            },
            {
              "id": "虚拟机栈-4-0-1-d1",
              "tag": "栈帧",
              "desc": "局部变量表 + 操作数栈 + 动态链接 + 返回地址"
            },
            {
              "id": "虚拟机栈-4-0-1-d2",
              "tag": "递归过深",
              "desc": "递归过深 → StackOverflowError"
            },
            {
              "id": "虚拟机栈-4-0-1-d3",
              "tag": "无法扩展",
              "desc": "无法扩展 → OutOfMemoryError"
            }
          ]
        },
        {
          "id": "堆-4-0-2",
          "tag": "堆",
          "desc": "线程共享，存对象实例和数组，GC 主区域。新生代(Eden+S0+S1 比例 8:1:1)+老年代。对象先分配 Eden，GC 后存活进 Survivor，多次 GC 后进老年代。OOM: `java.lang.OutOfMemoryError: Java heap space`",
          "details": [
            {
              "id": "堆-4-0-2-d0",
              "tag": "线程共享，存放对象实例和数组",
              "desc": "堆是线程共享的最大内存区域，所有对象实例和数组都在堆上分配，是GC的主要工作区域"
            },
            {
              "id": "堆-4-0-2-d1",
              "tag": "新生代",
              "desc": "Eden + S0 + S1（8:1:1）"
            },
            {
              "id": "堆-4-0-2-d2",
              "tag": "老年代",
              "desc": "长期存活对象和大对象（老年代的详细说明：堆中关于老年代的内容）"
            },
            {
              "id": "堆-4-0-2-d3",
              "tag": "对象先",
              "desc": "对象先分配 Eden，GC 后进 Survivor"
            },
            {
              "id": "堆-4-0-2-d4",
              "tag": "OOM",
              "desc": "java.lang.OutOfMemoryError: Java heap space"
            }
          ]
        },
        {
          "id": "方法区元空间-4-0-3",
          "tag": "方法区→元空间",
          "desc": "存类信息/常量/静态变量/JIT 代码。JDK7 永久代(PermGen,JVM 内存)→JDK8 元空间(Metaspace,本地内存)。元空间优势：避免永久代 OOM(大小受限于物理内存)。`-XX:MetaspaceSize`/`-XX:MaxMetaspaceSize`",
          "details": [
            {
              "id": "方法区元空间-4-0-3-d0",
              "tag": "存储类信息/常量/静态变量/JIT 代码",
              "desc": "方法区存储已加载类的结构信息(字段方法)、运行时常量池、静态变量及JIT编译后的本地代码缓存"
            },
            {
              "id": "方法区元空间-4-0-3-d1",
              "tag": "JDK7 永久代 PermGen（JVM 内存）",
              "desc": "JDK7方法区实现为永久代位于JVM堆内存中，大小由-XX:MaxPermSize固定限制，动态生成类多时易OOM"
            },
            {
              "id": "方法区元空间-4-0-3-d2",
              "tag": "JDK8 元空间 Metaspace（本地内存）",
              "desc": "JDK8方法区实现为元空间使用本地内存(非JVM堆)，大小仅受物理内存限制，避免了永久代空间不足的OOM"
            },
            {
              "id": "方法区元空间-4-0-3-d3",
              "tag": "优势",
              "desc": "不受 JVM 内存限制，避免永久代 OOM"
            },
            {
              "id": "方法区元空间-4-0-3-d4",
              "tag": "字符串常量池 JDK7 从永久代移到堆",
              "desc": "JDK7将字符串常量池从永久代移至Java堆，因为永久代空间有限字符串常量过多易导致PermGen OOM"
            }
          ]
        },
        {
          "id": "运行时常量池-4-0-4",
          "tag": "运行时常量池",
          "desc": "方法区一部分，存编译期字面量和符号引用。JDK7 后字符串常量池从方法区移到堆（避免永久代 OOM）。运行时 intern() 也可添加",
          "details": [
            {
              "id": "运行时常量池-4-0-4-d0",
              "tag": "位置演变",
              "desc": "JDK6方法区(永久代)JDK7+移到Java堆中与类常量池分离"
            },
            {
              "id": "运行时常量池-4-0-4-d1",
              "tag": "内容来源",
              "desc": "class文件常量池符号引用→运行时解析为直接引用动态绑定"
            },
            {
              "id": "运行时常量池-4-0-4-d2",
              "tag": "动态性",
              "desc": "运行期可动态添加String.intern()将字符串入池运行时扩充"
            },
            {
              "id": "运行时常量池-4-0-4-d3",
              "tag": "String常量池",
              "desc": "JDK7前永久代JDK7+堆中与类常量池分离独立管理"
            },
            {
              "id": "运行时常量池-4-0-4-d4",
              "tag": "OOM风险",
              "desc": "常量池无上限限制大量intern可能导致堆OOM需控制"
            }
          ]
        },
        {
          "id": "直接内存-4-0-5",
          "tag": "直接内存",
          "desc": "NIO DirectByteBuffer 分配的堆外内存，不受 JVM 堆大小限制（受物理内存限制）。避免 Java 堆↔Native 堆数据拷贝，提升 IO 性能。`-XX:MaxDirectMemorySize` 限制。Netty 大量使用",
          "details": [
            {
              "id": "直接内存-4-0-5-d0",
              "tag": "NIO分配",
              "desc": "DirectByteBuffer.allocateDirect分配堆外内存不受Young GC管理"
            },
            {
              "id": "直接内存-4-0-5-d1",
              "tag": "不受GC管",
              "desc": "堆外内存不受Young GC管理但Full GC可回收间接清理"
            },
            {
              "id": "直接内存-4-0-5-d2",
              "tag": "回收机制",
              "desc": "Cleaner虚引用回收DirectByteBuffer时释放堆外内存被动触发"
            },
            {
              "id": "直接内存-4-0-5-d3",
              "tag": "OOM风险",
              "desc": "堆外内存无明确上限-XX:MaxDirectMemorySize限制大小防溢出"
            },
            {
              "id": "直接内存-4-0-5-d4",
              "tag": "性能优势",
              "desc": "避免堆内→堆外拷贝零拷贝IO大文件网络传输性能高减少GC压力"
            }
          ]
        }
      ]
    },
    {
      "id": "4-2-对象与-gc-roots-4-1",
      "title": "4.2 对象与 GC Roots",
      "points": [
        {
          "id": "对象创建-4-1-0",
          "tag": "对象创建",
          "desc": "1.类加载检查(是否已加载) 2.分配内存(指针碰撞/空闲列表+TLAB) 3.初始化零值 4.设置对象头(Mark Word+类型指针) 5.执行 `<init>` 构造方法。TLAB 线程本地分配缓冲区避免竞争",
          "details": [
            {
              "id": "对象创建-4-1-0-d0",
              "tag": "类加载检查",
              "desc": "new触发常量池符号引用→检查类是否已加载解析初始化"
            },
            {
              "id": "对象创建-4-1-0-d1",
              "tag": "分配内存",
              "desc": "指针碰撞(连续空间)或空闲列表(碎片空间)两种方式选择"
            },
            {
              "id": "对象创建-4-1-0-d2",
              "tag": "初始化零值",
              "desc": "内存分配后字段设为零值不包含对象头和实例数据保证安全"
            },
            {
              "id": "对象创建-4-1-0-d3",
              "tag": "设置对象头",
              "desc": "存储MarkWord(KlassPointer锁信息GC分代年龄)元数据"
            },
            {
              "id": "对象创建-4-1-0-d4",
              "tag": "执行init",
              "desc": "构造方法<init>赋值程序员定义的初始值完成对象创建"
            }
          ]
        },
        {
          "id": "对象布局-4-1-1",
          "tag": "对象布局",
          "desc": "对象头(Mark Word:hashCode/GC 年龄/锁标志/偏向线程 ID + 类型指针 + 数组长度[数组才有]) + 实例数据(字段值) + 对齐填充(8 字节对齐)。64 位 JVM 对象头 12-16 字节",
          "details": [
            {
              "id": "对象布局-4-1-1-d0",
              "tag": "对象头",
              "desc": "MarkWord(32/64bit存锁+GC年龄)+KlassPointer类型指针定位类元数据"
            },
            {
              "id": "对象布局-4-1-1-d1",
              "tag": "MarkWord内容",
              "desc": "无锁存hashCode偏向锁存线程ID轻量锁存LockRecord指针"
            },
            {
              "id": "对象布局-4-1-1-d2",
              "tag": "实例数据",
              "desc": "对象真正存储的字段数据包括父类继承的字段按类型排列"
            },
            {
              "id": "对象布局-4-1-1-d3",
              "tag": "对齐填充",
              "desc": "8字节对齐保证对象大小是8的倍数便于寻址提高性能"
            },
            {
              "id": "对象布局-4-1-1-d4",
              "tag": "指针压缩",
              "desc": "-XX:+UseCompressedOops64位JVMKlassPointer4字节节省空间"
            }
          ]
        },
        {
          "id": "gcroots-4-1-2",
          "tag": "GC Roots",
          "desc": "虚拟机栈引用对象/本地方法栈引用/方法区静态属性引用/方法区常量引用/synchronized 持有对象/JNI 引用。从 GC Roots 搜索引用链，不可达则可回收",
          "details": [
            {
              "id": "gcroots-4-1-2-d0",
              "tag": "可达性分析的起点",
              "desc": "GC Roots是可达性分析算法的起始根节点集合，从Roots向下搜索引用链，链外不可达对象即可回收垃圾"
            },
            {
              "id": "gcroots-4-1-2-d1",
              "tag": "1. 虚拟机栈中引用的对象",
              "desc": "方法执行时局部变量表引用的对象作为GC Root，方法在栈中时其引用的对象不可被回收"
            },
            {
              "id": "gcroots-4-1-2-d2",
              "tag": "2. 本地方法栈 JNI 引用",
              "desc": "Native方法中通过JNI引用的Java对象也是GC Root，保证本地代码持有引用时对象不会被GC回收"
            },
            {
              "id": "gcroots-4-1-2-d3",
              "tag": "3. 方法区静态属性引用",
              "desc": "类的static变量引用的对象作为GC Root，类未卸载时静态引用指向的对象始终可达不可回收"
            },
            {
              "id": "gcroots-4-1-2-d4",
              "tag": "4. 方法区常量引用",
              "desc": "运行时常量池中final常量引用的对象是GC Root，常量不失效期间其引用对象不会被回收"
            },
            {
              "id": "gcroots-4-1-2-d5",
              "tag": "5. synchronized 持有的对象",
              "desc": "被synchronized锁持有的对象作为GC Root，锁未释放时对象可达不会被回收，防止GC回收正在使用的锁对象"
            }
          ]
        },
        {
          "id": "四种引用-4-1-3",
          "tag": "四种引用",
          "desc": "强引用 StrongReference(永不回收，OOM 也不回收)/软引用 SoftReference(内存不足回收，适合缓存)/弱引用 WeakReference(下次 GC 回收，ThreadLocalMap 的 key)/虚引用 PhantomReference(跟踪回收过程，配 ReferenceQueue)",
          "details": [
            {
              "id": "四种引用-4-1-3-d0",
              "tag": "强引用",
              "desc": "永不回收（OOM 也不回收）（强引用的详细说明：四种引用中关于强引用的内容）"
            },
            {
              "id": "四种引用-4-1-3-d1",
              "tag": "软引用",
              "desc": "内存不足时回收（适合缓存）（软引用的详细说明：四种引用中关于软引用的内容）"
            },
            {
              "id": "四种引用-4-1-3-d2",
              "tag": "弱引用",
              "desc": "下次 GC 必回收（ThreadLocalMap key）"
            },
            {
              "id": "四种引用-4-1-3-d3",
              "tag": "虚引用",
              "desc": "跟踪回收过程，配 ReferenceQueue"
            }
          ]
        }
      ]
    },
    {
      "id": "4-3-gc-算法-4-2",
      "title": "4.3 GC 算法",
      "points": [
        {
          "id": "标记-清除-4-2-0",
          "tag": "标记-清除",
          "desc": "标记存活对象→清除其他。缺点：内存碎片(分配大对象时找不到连续空间触发 FullGC)、效率不稳定(对象多时慢)。CMS 基于此算法",
          "details": [
            {
              "id": "标记-清除-4-2-0-d0",
              "tag": "标记存活对象 → 清除其他",
              "desc": "标记-清除算法先标记所有从GC Roots可达的存活对象，然后统一清除未标记对象，释放其占用空间"
            },
            {
              "id": "标记-清除-4-2-0-d1",
              "tag": "缺点",
              "desc": "内存碎片（空间不连续）（缺点的详细说明：标记-清除中关于缺点的内容）"
            },
            {
              "id": "标记-清除-4-2-0-d2",
              "tag": "碎片过多时",
              "desc": "碎片过多时分配大对象提前触发 Full GC"
            },
            {
              "id": "标记-清除-4-2-0-d3",
              "tag": "CMS 收集器基于标记-清除算法",
              "desc": "CMS收集器采用标记-清除算法追求最短停顿，但清除后产生大量内存碎片，大对象分配时可能触发FullGC压缩"
            }
          ]
        },
        {
          "id": "标记-复制-4-2-1",
          "tag": "标记-复制",
          "desc": "内存分两块，存活对象复制到另一半，清空当前块。优点：无碎片、简单高效。缺点：可用内存减半。适合新生代(存活率低)。Serial/ParNew 用此算法",
          "details": [
            {
              "id": "标记-复制-4-2-1-d0",
              "tag": "内存分两块，存活对象",
              "desc": "内存分两块，存活对象复制到另一块"
            },
            {
              "id": "标记-复制-4-2-1-d1",
              "tag": "优点",
              "desc": "无碎片，分配快（优点的详细说明：标记-复制中关于优点的内容）"
            },
            {
              "id": "标记-复制-4-2-1-d2",
              "tag": "缺点",
              "desc": "可用内存减半（缺点的详细说明：标记-复制中关于缺点的内容）"
            },
            {
              "id": "标记-复制-4-2-1-d3",
              "tag": "适合新生代（存活率低）",
              "desc": "标记-复制算法适合新生代因对象存活率低(约10%)，只需复制少量存活对象到另一半空间效率高浪费少"
            }
          ]
        },
        {
          "id": "标记-整理-4-2-2",
          "tag": "标记-整理",
          "desc": "标记存活→向一端移动→清理边界外。优点：无碎片。缺点：移动对象开销大(GC 停顿长)。适合老年代。Serial Old/Parallel Old/G1 用此算法",
          "details": [
            {
              "id": "标记-整理-4-2-2-d0",
              "tag": "存活对象向一端移动",
              "desc": "标记-整理算法先将存活对象向内存一端移动紧凑排列，然后清理边界外所有空间，消除碎片但移动开销大"
            },
            {
              "id": "标记-整理-4-2-2-d1",
              "tag": "优点",
              "desc": "无碎片（优点的详细说明：标记-整理中关于优点的内容）"
            },
            {
              "id": "标记-整理-4-2-2-d2",
              "tag": "缺点",
              "desc": "移动开销大，停顿长（缺点的详细说明：标记-整理中关于缺点的内容）"
            },
            {
              "id": "标记-整理-4-2-2-d3",
              "tag": "适合老年代（对象存活率高）",
              "desc": "标记-整理适合老年代因对象存活率高不适合复制算法(浪费空间)，整理消除碎片避免大对象分配触发FullGC"
            }
          ]
        },
        {
          "id": "分代收集-4-2-3",
          "tag": "分代收集",
          "desc": "新生代存活率低→复制算法；老年代存活率高→标记清除/标记整理。不同代用不同算法，各有优势",
          "details": [
            {
              "id": "分代收集-4-2-3-d0",
              "tag": "新生代Minor GC",
              "desc": "Eden+Survivor区频繁但回收速度快短停顿"
            },
            {
              "id": "分代收集-4-2-3-d1",
              "tag": "老年代Major GC",
              "desc": "Old区较少但耗时较长标记-压缩算法停顿时间长"
            },
            {
              "id": "分代收集-4-2-3-d2",
              "tag": "Full GC",
              "desc": "全堆新生代+老年代+元空间最慢应尽量避免减少触发"
            },
            {
              "id": "分代收集-4-2-3-d3",
              "tag": "晋升机制",
              "desc": "Survivor年龄达阈值或动态年龄判断对象进入Old区长期存活"
            },
            {
              "id": "分代收集-4-2-3-d4",
              "tag": "GC触发",
              "desc": "Eden满触发Minor GCOld满或担保失败触发Full GC最耗性能"
            }
          ]
        }
      ]
    },
    {
      "id": "4-4-垃圾收集器-4-3",
      "title": "4.4 垃圾收集器",
      "points": [
        {
          "id": "cms-4-3-0",
          "tag": "CMS",
          "desc": "Concurrent Mark Sweep，最短停顿。4 阶段：1.初始标记(STW 标记 GC Roots 直接引用) 2.并发标记(GC 线程与用户线程并发，遍历引用链) 3.重新标记(STW 修正并发标记期间变动) 4.并发清除。缺点：CPU 敏感/浮动垃圾/内存碎片/Concurrent Mode Failure。JDK14 移除",
          "details": [
            {
              "id": "cms-4-3-0-d0",
              "tag": "以获取最短停顿时间为目标",
              "desc": "CMS设计目标是最小化GC停顿时间，大部分标记和清除阶段与用户线程并发执行，适合对响应时间敏感的应用"
            },
            {
              "id": "cms-4-3-0-d1",
              "tag": "4 阶段",
              "desc": "初始标记 STW → 并发标记 → 重新标记 STW → 并发清除"
            },
            {
              "id": "cms-4-3-0-d2",
              "tag": "缺点",
              "desc": "CPU 敏感/浮动垃圾/内存碎片/Concurrent Mode Failure"
            },
            {
              "id": "cms-4-3-0-d3",
              "tag": "JDK14 移除",
              "desc": "CMS因内存碎片、浮动垃圾和Concurrent Mode Failure等问题，在JDK9被标记废弃，JDK14正式移除，推荐使用G1"
            }
          ]
        },
        {
          "id": "g1-4-3-1",
          "tag": "G1",
          "desc": "JDK9 默认。堆划分为 Region(1-32MB)，每个 Region 可充当 Eden/Survivor/Old/Humongous。可预测停顿(`-XX:MaxGCPauseMillis`)。标记整理+复制(无碎片)。回收：初始标记→并发标记→最终标记→筛选回收(按收益排序回收 Region)",
          "details": [
            {
              "id": "g1-4-3-1-d0",
              "tag": "JDK9 默认垃圾收集器",
              "desc": "G1从JDK9起取代CMS成为默认收集器，面向大堆内存可预测停顿时间，适合多核大内存服务器场景"
            },
            {
              "id": "g1-4-3-1-d1",
              "tag": "堆划分为 Region（1-32MB）",
              "desc": "G1将堆划分为大小相等的Region(1~32MB)，每个Region可动态角色Eden/Survivor/Old/Humongous，灵活回收"
            },
            {
              "id": "g1-4-3-1-d2",
              "tag": "可预测停顿",
              "desc": "-XX:MaxGCPauseMillis"
            },
            {
              "id": "g1-4-3-1-d3",
              "tag": "标记整理+复制（无碎片）",
              "desc": "G1从整体看是标记-整理算法无碎片，局部(Region间)看是复制算法，兼顾空间利用和碎片避免"
            },
            {
              "id": "g1-4-3-1-d4",
              "tag": "回收",
              "desc": "初始标记→并发标记→最终标记→筛选回收"
            }
          ]
        },
        {
          "id": "zgc-4-3-2",
          "tag": "ZGC",
          "desc": "JDK11 引入(JDK15 正式)。支持 TB 级堆，STW<10ms。染色指针(64 位指针借用几位标记状态)+读屏障(读时修复指针)。并发标记/转移/重定位，几乎全程并发",
          "details": [
            {
              "id": "zgc-4-3-2-d0",
              "tag": "JDK11 引入 ZGC",
              "desc": "ZGC在JDK11作为实验特性引入，JDK15成为正式特性，面向超大堆内存设计STW亚毫秒级极低停顿"
            },
            {
              "id": "zgc-4-3-2-d1",
              "tag": "支持 TB 级堆",
              "desc": "ZGC可管理从8MB到16TB级别的堆内存，通过多重映射和动态分区支持超大堆而不增加GC停顿时间"
            },
            {
              "id": "zgc-4-3-2-d2",
              "tag": "STW < 10ms",
              "desc": "ZGC的STW停顿时间控制在亚毫秒级别(通常<1ms)，最坏情况下也不超过10ms，与堆大小无关"
            },
            {
              "id": "zgc-4-3-2-d3",
              "tag": "染色指针 + 读屏障",
              "desc": "染色指针借用64位地址中几位存储对象标记状态(Marked/Remapped/Finalized)，读屏障在读时自修复指针实现并发转移"
            },
            {
              "id": "zgc-4-3-2-d4",
              "tag": "几乎全程并发",
              "desc": "ZGC的标记、转移、重定位几乎全部与用户线程并发执行，仅极短的初始标记等阶段需STW，实现亚毫秒停顿"
            }
          ]
        },
        {
          "id": "shenandoah-4-3-3",
          "tag": "Shenandoah",
          "desc": "JDK12 引入(Red Hat)。超低延迟。转发指针(Brooks Pointer)对象头额外指针指向自身或新对象，实现并发整理。与 ZGC 类似但实现不同",
          "details": [
            {
              "id": "shenandoah-4-3-3-d0",
              "tag": "并发压缩",
              "desc": "Brooks指针转发对象引用到新位置移动与并发访问共存"
            },
            {
              "id": "shenandoah-4-3-3-d1",
              "tag": "低延迟目标",
              "desc": "GC暂停<10ms甚至<1ms适合大堆延迟敏感应用实时交易"
            },
            {
              "id": "shenandoah-4-3-3-d2",
              "tag": "与G1对比",
              "desc": "G1压缩需STW(Stop-The-World)Shenandoah并发压缩突破STW瓶颈"
            },
            {
              "id": "shenandoah-4-3-3-d3",
              "tag": "Evacuation",
              "desc": "并发搬运对象写屏障更新Brooks转发指针保证一致性"
            },
            {
              "id": "shenandoah-4-3-3-d4",
              "tag": "适用场景",
              "desc": "大堆内存(>50GB)低延迟要求实时交易大数据分析响应时间敏感"
            }
          ]
        },
        {
          "id": "serial-parnew-parallel-4-3-4",
          "tag": "Serial/ParNew/Parallel",
          "desc": "Serial 单线程 STW(Client 模式)；ParNew=Serial 多线程(Server 新生代)；Parallel Scavenge 关注吞吐量(=用户时间/总时间)，适合后台计算。对应老年代：Serial Old/Parallel Old",
          "details": [
            {
              "id": "serial-parnew-parallel-4-3-4-d0",
              "tag": "Serial",
              "desc": "单线程收集器Client模式默认简单但停顿长不适合服务端"
            },
            {
              "id": "serial-parnew-parallel-4-3-4-d1",
              "tag": "ParNew",
              "desc": "Serial多线程版本配合CMS新生代并行收集减少停顿时间"
            },
            {
              "id": "serial-parnew-parallel-4-3-4-d2",
              "tag": "Parallel Scavenge",
              "desc": "吞吐量优先自适应调节策略关注CPU利用率适合后台"
            },
            {
              "id": "serial-parnew-parallel-4-3-4-d3",
              "tag": "Parallel Old",
              "desc": "Parallel Scavenge老年代版本标记-压缩算法配合使用"
            },
            {
              "id": "serial-parnew-parallel-4-3-4-d4",
              "tag": "选择策略",
              "desc": "响应优先选CMS/ZGC吞吐优先选Parallel Scavenge场景驱动"
            }
          ]
        }
      ]
    },
    {
      "id": "4-5-内存分配策略-4-4",
      "title": "4.5 内存分配策略",
      "points": [
        {
          "id": "对象优先eden-4-4-0",
          "tag": "对象优先 Eden",
          "desc": "Eden 满触发 Minor GC。Minor GC 只回收新生代(快)。Survivor 区作为 Eden 到老年代的缓冲",
          "details": [
            {
              "id": "对象优先eden-4-4-0-d0",
              "tag": "Eden优先",
              "desc": "新对象优先在Eden区分配空间占新生代80%比例最大"
            },
            {
              "id": "对象优先eden-4-4-0-d1",
              "tag": "Minor GC回收",
              "desc": "Eden满触发Minor GC存活对象进入Survivor复制算法"
            },
            {
              "id": "对象优先eden-4-4-0-d2",
              "tag": "Survivor区",
              "desc": "From和To两个区交替使用复制算法保证其中一个空"
            },
            {
              "id": "对象优先eden-4-4-0-d3",
              "tag": "GC日志",
              "desc": "Eden区+From区存活对象复制到To区清空Eden+From高效"
            },
            {
              "id": "对象优先eden-4-4-0-d4",
              "tag": "快速分配",
              "desc": "TLAB(Thread Local Allocation Buffer)线程本地分配避免竞争"
            }
          ]
        },
        {
          "id": "大对象直接老年代-4-4-1",
          "tag": "大对象直接老年代",
          "desc": "`-XX:PretenureSizeThreshold` 设置阈值，超过的大对象(长数组/大字符串)直接分配到老年代，避免 Eden↔Survivor 之间复制",
          "details": [
            {
              "id": "大对象直接老年代-4-4-1-d0",
              "tag": "大对象定义",
              "desc": "超过-XX:PretenureSizeThreshold设定的字节数的大数组/大字符串"
            },
            {
              "id": "大对象直接老年代-4-4-1-d1",
              "tag": "直接进Old",
              "desc": "避免在Eden→Survivor间大量复制降低GC效率减少开销"
            },
            {
              "id": "大对象直接老年代-4-4-1-d2",
              "tag": "典型大对象",
              "desc": "长数组大字符串大文件byte缓冲区超过阈值直接分配Old"
            },
            {
              "id": "大对象直接老年代-4-4-1-d3",
              "tag": "阈值设置",
              "desc": "PretenureSizeThreshold只对Serial和ParNew有效其他收集器忽略"
            },
            {
              "id": "大对象直接老年代-4-4-1-d4",
              "tag": "优化建议",
              "desc": "短命大对象应避免分配否则快速填满Old触发Full GC需控制"
            }
          ]
        },
        {
          "id": "长期存活进老年代-4-4-2",
          "tag": "长期存活进老年代",
          "desc": "每个对象有 GC 年龄(Mark Word 中 4bit，最大 15)。`-XX:MaxTenuringThreshold` 默认 15，每次 Minor GC 存活年龄+1，达阈值进老年代",
          "details": [
            {
              "id": "长期存活进老年代-4-4-2-d0",
              "tag": "年龄计数",
              "desc": "每次Minor GC后Survivor中对象年龄+1递增记录存活次数"
            },
            {
              "id": "长期存活进老年代-4-4-2-d1",
              "tag": "晋升阈值",
              "desc": "-XX:MaxTenuringThreshold默认15CMS为6可配置调整"
            },
            {
              "id": "长期存活进老年代-4-4-2-d2",
              "tag": "年龄达阈值",
              "desc": "对象年龄>=MaxTenuringThreshold晋升到Old区长期存活"
            },
            {
              "id": "长期存活进老年代-4-4-2-d3",
              "tag": "动态判断优先",
              "desc": "实际晋升年龄可能更低取决于动态年龄判断更灵活"
            },
            {
              "id": "长期存活进老年代-4-4-2-d4",
              "tag": "目标",
              "desc": "让Survivor区保持合理利用率避免过多长期存活对象占空间浪费"
            }
          ]
        },
        {
          "id": "动态年龄判断-4-4-3",
          "tag": "动态年龄判断",
          "desc": "Survivor 中相同年龄所有对象大小总和超过 Survivor 空间一半，该年龄及以上对象直接进老年代。避免 Survivor 空间不足",
          "details": [
            {
              "id": "动态年龄判断-4-4-3-d0",
              "tag": "规则",
              "desc": "Survivor中相同年龄所有对象大小总和>Survivor空间一半触发"
            },
            {
              "id": "动态年龄判断-4-4-3-d1",
              "tag": "晋升年龄",
              "desc": "年龄>=该年龄的最小值即可晋升不必等到MaxTenuringThreshold"
            },
            {
              "id": "动态年龄判断-4-4-3-d2",
              "tag": "优先级",
              "desc": "动态年龄判断优先于MaxTenuringThreshold阈值实际更早晋升"
            },
            {
              "id": "动态年龄判断-4-4-3-d3",
              "tag": "计算方式",
              "desc": "从年龄1开始累加对象大小超过一半时年龄+1晋升灵活适应"
            },
            {
              "id": "动态年龄判断-4-4-3-d4",
              "tag": "目的",
              "desc": "避免Survivor区被长期存活对象占满降低复制效率影响GC性能"
            }
          ]
        },
        {
          "id": "空间分配担保-4-4-4",
          "tag": "空间分配担保",
          "desc": "Minor GC 前检查老年代连续可用空间是否>新生代所有对象总空间(或历次晋升平均大小)。不够则检查是否允许担保失败，不允许则 Full GC",
          "details": [
            {
              "id": "空间分配担保-4-4-4-d0",
              "tag": "检查条件",
              "desc": "Minor GC前老年代最大可用连续空间>新生代所有对象总大小"
            },
            {
              "id": "空间分配担保-4-4-4-d1",
              "tag": "允许冒险",
              "desc": "HandlePromotionFailure=true时只检查>新生代晋升平均大小宽松"
            },
            {
              "id": "空间分配担保-4-4-4-d2",
              "tag": "担保失败",
              "desc": "Minor GC后存活对象>老年代可用空间则触发Full GC兜底"
            },
            {
              "id": "空间分配担保-4-4-4-d3",
              "tag": "风险",
              "desc": "冲新生代对象全部存活需老年代完全担保极端情况Full GC"
            },
            {
              "id": "空间分配担保-4-4-4-d4",
              "tag": "配置",
              "desc": "-XX:-HandlePromotionFailure关闭冒险每次必须完全担保保守策略"
            }
          ]
        }
      ]
    },
    {
      "id": "4-6-jvm调优实战-4-5",
      "title": "4.6 JVM调优实战",
      "points": [
        {
          "id": "gc日志分析-4-5-0",
          "tag": "GC日志分析",
          "desc": "-Xlog:gc*(JDK9+)或-XX:+PrintGCDetails(JDK8)输出GC日志。日志格式解读:Minor GC(PSYoungGen:新生代回收)标识年轻代GC/Major GC(ParOldGen)标识老年代部分回收/Full GC(全堆回收含新生代+老年代+元空间最慢应尽量避免)。GCViewer/GCEasy在线分析工具:可视化GC频率/停顿时间/回收效率/内存趋势。关键指标:GC频率(每分钟几次)/平均停顿时间/最长停顿时间/GC后堆内存回收率",
          "details": [
            {
              "id": "gc日志分析-4-5-0-d0",
              "tag": "-Xlog",
              "desc": "gc*:JDK9+统一日志配置输出详细GC信息"
            },
            {
              "id": "gc日志分析-4-5-0-d1",
              "tag": "Minor GC",
              "desc": "只回收新生代(Eden+Survivor)频率高停顿短影响小"
            },
            {
              "id": "gc日志分析-4-5-0-d2",
              "tag": "Major GC",
              "desc": "回收老年代频率低停顿较长需关注"
            },
            {
              "id": "gc日志分析-4-5-0-d3",
              "tag": "Full GC",
              "desc": "全堆+元空间回收最慢应尽量避免分析触发原因"
            },
            {
              "id": "gc日志分析-4-5-0-d4",
              "tag": "GCViewer/GCEasy",
              "desc": "在线工具可视化分析GC频率/停顿/回收率/趋势"
            },
            {
              "id": "gc日志分析-4-5-0-d5",
              "tag": "关键指标",
              "desc": "GC频率/平均停顿时间/最长停顿时间/GC后内存回收率"
            }
          ]
        },
        {
          "id": "内存泄漏排查-4-5-1",
          "tag": "内存泄漏排查",
          "desc": "步骤:①jmap -histo <pid>查看对象统计(按占用大小排序定位大对象类型)②jmap -dump:format=b,file=heap.hprof <pid>生成堆dump文件③MAT(Memory Analyzer)打开dump分析④MAT自动生成Leak Suspect Report(泄漏嫌疑报告)⑤查看Dominator Tree(支配者树)找到占用最大对象⑥追踪GC Roots引用链找到泄漏根因⑦常见原因:ThreadLocal未remove/静态集合持续增长/缓存未淘汰/资源未close",
          "details": [
            {
              "id": "内存泄漏排查-4-5-1-d0",
              "tag": "jmap -histo",
              "desc": "按对象占用大小排序定位大对象类型快速排查"
            },
            {
              "id": "内存泄漏排查-4-5-1-d1",
              "tag": "jmap -dump",
              "desc": "生成堆转储hprof文件完整堆快照供深入分析"
            },
            {
              "id": "内存泄漏排查-4-5-1-d2",
              "tag": "MAT分析",
              "desc": "Eclipse Memory Analyzer专业堆dump分析工具"
            },
            {
              "id": "内存泄漏排查-4-5-1-d3",
              "tag": "Leak Suspect",
              "desc": "MAT自动检测泄漏嫌疑报告一键定位疑似泄漏点"
            },
            {
              "id": "内存泄漏排查-4-5-1-d4",
              "tag": "Dominator Tree",
              "desc": "支配者树展示对象引用关系找到占用最大对象"
            },
            {
              "id": "内存泄漏排查-4-5-1-d5",
              "tag": "常见泄漏",
              "desc": "ThreadLocal未remove/静态Map持续增长/缓存无淘汰/资源未close"
            }
          ]
        },
        {
          "id": "cpu飙高排查-4-5-2",
          "tag": "CPU飙高排查",
          "desc": "步骤:①top命令定位CPU占用最高的Java进程PID②top -H -p <PID>定位该进程内CPU最高的线程TID③printf %x <TID>将线程ID转十六进制④jstack <PID> | grep <hexTID>打印该线程堆栈⑤分析堆栈:死循环(代码bug)/频繁GC(GC线程占比高)/线程阻塞(锁竞争)/热点方法(计算密集)。Arthas在线诊断:thread命令查看线程CPU占用/thread -n 3看最忙3个线程/profile生成火焰图定位热点方法",
          "details": [
            {
              "id": "cpu飙高排查-4-5-2-d0",
              "tag": "top",
              "desc": "定位CPU最高的Java进程PID第一步快速发现异常进程"
            },
            {
              "id": "cpu飙高排查-4-5-2-d1",
              "tag": "top -H -p",
              "desc": "定位进程内最高CPU线程TID精确定位问题线程"
            },
            {
              "id": "cpu飙高排查-4-5-2-d2",
              "tag": "jstack+grep",
              "desc": "线程堆栈转十六进制grep匹配定位线程执行代码"
            },
            {
              "id": "cpu飙高排查-4-5-2-d3",
              "tag": "死循环",
              "desc": "代码bug导致循环无法退出CPU持续100%定位循环位置"
            },
            {
              "id": "cpu飙高排查-4-5-2-d4",
              "tag": "频繁GC",
              "desc": "GC线程CPU高说明对象创建过快GC频繁需优化内存分配"
            },
            {
              "id": "cpu飙高排查-4-5-2-d5",
              "tag": "Arthas",
              "desc": "thread/thread -n 3/profile火焰图在线诊断无需重启"
            }
          ]
        },
        {
          "id": "常见oom类型-4-5-3",
          "tag": "常见OOM类型",
          "desc": "Java heap space(堆内存溢出:对象太多/内存泄漏/Xmx太小)/Metaspace(元空间溢出:动态生成类过多/CGLIB代理类大量创建/反射大量使用)/GC overhead limit exceeded(GC回收效率过低超过98%时间做GC但只回收<2%内存)/Direct buffer memory(堆外内存溢出:NIO DirectByteBuffer分配过多)/unable to create new native thread(线程数超过OS限制:Xss过大/线程池无上限)/Requested array size exceeds VM limit(数组长度超Integer.MAX_VALUE)",
          "details": [
            {
              "id": "常见oom类型-4-5-3-d0",
              "tag": "Java heap space",
              "desc": "对象太多或内存泄漏-Xmx太小需增大或排查泄漏"
            },
            {
              "id": "常见oom类型-4-5-3-d1",
              "tag": "Metaspace",
              "desc": "动态生成类过多CGLIB代理大量创建-XX:MaxMetaspaceSize限制"
            },
            {
              "id": "常见oom类型-4-5-3-d2",
              "tag": "GC overhead limit",
              "desc": "GC效率过低98%时间GC只回收<2%内存严重性能问题"
            },
            {
              "id": "常见oom类型-4-5-3-d3",
              "tag": "Direct buffer memory",
              "desc": "NIO堆外内存分配过多-XX:MaxDirectMemorySize限制"
            },
            {
              "id": "常见oom类型-4-5-3-d4",
              "tag": "unable to create new thread",
              "desc": "线程数超OS限制-Xss过大减少栈大小"
            },
            {
              "id": "常见oom类型-4-5-3-d5",
              "tag": "Requested array size exceeds VM limit:数组长度超Integer.MAX_VALUE限制",
              "desc": "尝试创建长度超过Integer.MAX_VALUE(约21亿)的数组时抛此错误，JVM实现数组长度用int限制最大2^31-1"
            }
          ]
        },
        {
          "id": "jvm参数调优策略-4-5-4",
          "tag": "JVM参数调优策略",
          "desc": "堆大小:-Xms=-Xmx(生产环境避免动态扩容减少GC波动)/新生代比例:-XX:NewRatio=2(新生代1/3老年代2/3)或-XX:SurvivorRatio=8(Eden:S0:S1=8:1:1)/GC收集器选择:低延迟选G1/ZGC/高吞吐选Parallel Scavenge/监控GC频率和停顿时间调整参数/避免Full GC(调大新生代/优化代码减少大对象/避免内存泄漏)/线程栈:-Xss256k(减少线程内存占用)/元空间:-XX:MaxMetaspaceSize=256m(限制防止无限增长)",
          "details": [
            {
              "id": "jvm参数调优策略-4-5-4-d0",
              "tag": "Xms=Xmx",
              "desc": "生产环境设为相同值避免堆动态扩缩容减少GC波动"
            },
            {
              "id": "jvm参数调优策略-4-5-4-d1",
              "tag": "NewRatio/SurvivorRatio",
              "desc": "调整新生代比例Eden:Survivor=8:1:1默认"
            },
            {
              "id": "jvm参数调优策略-4-5-4-d2",
              "tag": "GC选择",
              "desc": "低延迟G1(-XX:MaxGCPauseMillis)/高吞吐Parallel Scavenge"
            },
            {
              "id": "jvm参数调优策略-4-5-4-d3",
              "tag": "避免FullGC",
              "desc": "调大新生代/减少大对象/修复内存泄漏/优化查询"
            },
            {
              "id": "jvm参数调优策略-4-5-4-d4",
              "tag": "Xss",
              "desc": "线程栈大小256k默认1m减少线程内存占用支持更多线程"
            },
            {
              "id": "jvm参数调优策略-4-5-4-d5",
              "tag": "MaxMetaspaceSize",
              "desc": "限制元空间256m防止类加载过多导致无限增长"
            }
          ]
        }
      ]
    },
    {
      "id": "4-7-类加载机制-4-6",
      "title": "4.7 类加载机制",
      "points": [
        {
          "id": "5阶段-4-6-0",
          "tag": "5 阶段",
          "desc": "加载(读 class 二进制→方法区→堆 Class 对象)→验证(文件格式/元数据/字节码/符号引用)→准备(static 变量分配内存设零值，final static 赋实际值)→解析(符号引用→直接引用)→初始化(执行 `<clinit>()`，static 赋值+static 块，JVM 保证线程安全)",
          "details": [
            {
              "id": "5阶段-4-6-0-d0",
              "tag": "加载",
              "desc": "读 .class → 方法区 → 堆 Class 对象"
            },
            {
              "id": "5阶段-4-6-0-d1",
              "tag": "验证",
              "desc": "文件格式/元数据/字节码/符号引用"
            },
            {
              "id": "5阶段-4-6-0-d2",
              "tag": "准备",
              "desc": "static 变量分配内存设零值"
            },
            {
              "id": "5阶段-4-6-0-d3",
              "tag": "解析",
              "desc": "符号引用 → 直接引用（解析的详细说明：5 阶段中关于解析的内容）"
            },
            {
              "id": "5阶段-4-6-0-d4",
              "tag": "初始化",
              "desc": "执行 <clinit>()（static 赋值+static 块），线程安全"
            }
          ]
        },
        {
          "id": "初始化触发-4-6-1",
          "tag": "初始化触发",
          "desc": "1.new/getstatic/putstatic/invokstatic 2.反射 Class.forName() 3.初始化子类先初始化父类 4.JVM 启动主类(含 main) 5.MethodHandle 对应的类 6.接口有 default 方法时实现类初始化",
          "details": [
            {
              "id": "初始化触发-4-6-1-d0",
              "tag": "4条字节码",
              "desc": "new/getstatic/putstatic/invokestatic触发类初始化"
            },
            {
              "id": "初始化触发-4-6-1-d1",
              "tag": "反射调用",
              "desc": "Class.forName()或newInstance()触发初始化主动使用"
            },
            {
              "id": "初始化触发-4-6-1-d2",
              "tag": "子类初始化",
              "desc": "初始化子类先初始化父类但接口初始化不要求父接口"
            },
            {
              "id": "初始化触发-4-6-1-d3",
              "tag": "main方法",
              "desc": "执行类的main方法触发该类初始化程序入口"
            },
            {
              "id": "初始化触发-4-6-1-d4",
              "tag": "被动引用",
              "desc": "子类引用父类static变量不触发子类初始化常量也不触发特殊"
            }
          ]
        },
        {
          "id": "类卸载-4-6-2",
          "tag": "类卸载",
          "desc": "1.该类所有实例被回收 2.加载该类的 ClassLoader 被回收 3.该类 Class 对象没被引用。Bootstrap 加载的核心类不会被卸载",
          "details": [
            {
              "id": "类卸载-4-6-2-d0",
              "tag": "三个条件",
              "desc": "所有实例回收+ClassLoader回收+Class对象无引用满足才卸载"
            },
            {
              "id": "类卸载-4-6-2-d1",
              "tag": "实例回收",
              "desc": "Java堆中该类所有实例已被GC回收无存活对象"
            },
            {
              "id": "类卸载-4-6-2-d2",
              "tag": "ClassLoader回收",
              "desc": "加载该类的ClassLoader已被GC回收自定义ClassLoader"
            },
            {
              "id": "类卸载-4-6-2-d3",
              "tag": "Class对象回收",
              "desc": "Class对象无任何引用且不可通过反射访问难以满足"
            },
            {
              "id": "类卸载-4-6-2-d4",
              "tag": "极难发生",
              "desc": "自定义ClassLoader+大量类加载卸载场景才可能如JSP重启热部署"
            }
          ]
        }
      ]
    },
    {
      "id": "4-8-类加载器与双亲委派-4-7",
      "title": "4.8 类加载器与双亲委派",
      "points": [
        {
          "id": "分类-4-7-0",
          "tag": "分类",
          "desc": "Bootstrap(C++加载 `<JAVA_HOME>/lib` 核心 rt.jar)/Extension(加载 `<JAVA_HOME>/lib/ext`)/Application(加载 classpath)/自定义(继承 ClassLoader 重写 findClass)",
          "details": [
            {
              "id": "分类-4-7-0-d0",
              "tag": "Bootstrap",
              "desc": "C++实现加载rt.jar核心库无Java对象getParent返回null最顶"
            },
            {
              "id": "分类-4-7-0-d1",
              "tag": "Extension",
              "desc": "加载ext目录扩展库javax包等系统扩展功能"
            },
            {
              "id": "分类-4-7-0-d2",
              "tag": "Application",
              "desc": "加载classpath用户类默认ClassLoader项目代码"
            },
            {
              "id": "分类-4-7-0-d3",
              "tag": "自定义",
              "desc": "继承URLClassLoader实现findClass定制加载逻辑热部署"
            },
            {
              "id": "分类-4-7-0-d4",
              "tag": "加载路径",
              "desc": "各类加载器有固定搜索范围按层级递增Bootstrap最核心"
            }
          ]
        },
        {
          "id": "双亲委派-4-7-1",
          "tag": "双亲委派",
          "desc": "loadClass()先委派 parent.loadClass()，父加载不了才自己 findClass()。优点：避免重复加载(同一类只加载一次)、保证核心 API 不被篡改(java.lang.Object 只能 Bootstrap 加载)",
          "details": [
            {
              "id": "双亲委派-4-7-1-d0",
              "tag": "loadClass() 先委派父",
              "desc": "loadClass() 先委派父加载器"
            },
            {
              "id": "双亲委派-4-7-1-d1",
              "tag": "父",
              "desc": "父加载不了才自己 findClass()"
            },
            {
              "id": "双亲委派-4-7-1-d2",
              "tag": "优点",
              "desc": "避免重复加载 + 保证核心 API 不被篡改"
            },
            {
              "id": "双亲委派-4-7-1-d3",
              "tag": "java.lang.Object 只",
              "desc": "java.lang.Object 只能 Bootstrap 加载"
            }
          ]
        },
        {
          "id": "打破双亲委派-4-7-2",
          "tag": "打破双亲委派",
          "desc": "重写 loadClass()而非 findClass()(Tomcat WebAppClassLoader 每个 Web 应用独立类加载器)、OSGi 网状类加载、SPI 机制(线程上下文类加载器 ContextClassLoader 解决父加载器请求子加载器加载)",
          "details": [
            {
              "id": "打破双亲委派-4-7-2-d0",
              "tag": "SPI加载",
              "desc": "接口Bootstrap加载实现类线程上下文类加载器加载突破双亲委派"
            },
            {
              "id": "打破双亲委派-4-7-2-d1",
              "tag": "线程上下文",
              "desc": "Thread.getContextClassLoader()子类加载器加载SPI实现解耦"
            },
            {
              "id": "打破双亲委派-4-7-2-d2",
              "tag": "热部署",
              "desc": "自定义ClassLoader重新加载已修改类实现代码热替换不停机更新"
            },
            {
              "id": "打破双亲委派-4-7-2-d3",
              "tag": "Tomcat",
              "desc": "WebappClassLoader每个Web应用独立打破双亲委派隔离类防止冲突"
            },
            {
              "id": "打破双亲委派-4-7-2-d4",
              "tag": "OSGi",
              "desc": "模块化网状加载基于包依赖而非树形双亲委派更灵活动态"
            }
          ]
        }
      ]
    },
    {
      "id": "4-9-调优工具-4-8",
      "title": "4.9 调优工具",
      "points": [
        {
          "id": "命令行-4-8-0",
          "tag": "命令行",
          "desc": "jps(列出 Java 进程)/jstat(GC 统计,`-gcutil` 查看各区使用率)/jmap(堆 dump,`-histo` 查看对象统计)/jstack(线程 dump,死锁检测)/jinfo(查看修改 JVM 参数)/jcmd(多功能命令)",
          "details": [
            {
              "id": "命令行-4-8-0-d0",
              "tag": "jps",
              "desc": "查看所有Java进程PID类似ps但只显示Java进程快速定位"
            },
            {
              "id": "命令行-4-8-0-d1",
              "tag": "jstat",
              "desc": "监控GC统计信息类加载编译等实时查看GC频率和时间间隔"
            },
            {
              "id": "命令行-4-8-0-d2",
              "tag": "jinfo",
              "desc": "查看和修改JVM运行参数实时查看SystemProperties和Flags配置"
            },
            {
              "id": "命令行-4-8-0-d3",
              "tag": "jmap",
              "desc": "生成堆转储dump文件查看堆内存对象统计直方图分析内存"
            },
            {
              "id": "命令行-4-8-0-d4",
              "tag": "jstack",
              "desc": "打印线程堆栈信息排查死锁线程阻塞问题定位线程问题"
            }
          ]
        },
        {
          "id": "可视化-4-8-1",
          "tag": "可视化",
          "desc": "VisualVM(JDK 自带,堆线程 CPU 监控)/JConsole(JMX 监控)/Mission Control(JFR 鷴行记录器)/JProfiler(商业)/Arthas(阿里开源,在线诊断:watch/trace/dashboard/sc)",
          "details": [
            {
              "id": "可视化-4-8-1-d0",
              "tag": "JConsole",
              "desc": "JDK自带轻量级监控面板线程内存GC类加载可视化简单易用"
            },
            {
              "id": "可视化-4-8-1-d1",
              "tag": "JVisualVM",
              "desc": "更强大监控分析堆dump线程分析插件扩展功能丰富"
            },
            {
              "id": "可视化-4-8-1-d2",
              "tag": "JMC",
              "desc": "Mission Control高级监控JFR事件录制飞行记录分析专业"
            },
            {
              "id": "可视化-4-8-1-d3",
              "tag": "Arthas",
              "desc": "阿里开源线上诊断工具热更新监控方法调用排查问题无需重启"
            },
            {
              "id": "可视化-4-8-1-d4",
              "tag": "MAT",
              "desc": "Eclipse Memory Analyzer专业堆dump分析内存泄漏定位深度分析"
            }
          ]
        },
        {
          "id": "常用参数-4-8-2",
          "tag": "常用参数",
          "desc": "`-Xms`/`-Xmx`(堆初始/最大,建议相等避免动态扩容)/`-Xmn`(新生代)/`-Xss`(栈大小)/`-XX:MetaspaceSize`/`-XX:+UseG1GC`/`-XX:MaxGCPauseMillis`/`-XX:+PrintGCDetails`/`-Xloggc:gc.log`",
          "details": [
            {
              "id": "常用参数-4-8-2-d0",
              "tag": "Xms/Xmx",
              "desc": "堆初始大小和最大大小生产环境建议设为相同值避免动态扩缩"
            },
            {
              "id": "常用参数-4-8-2-d1",
              "tag": "Xmn",
              "desc": "新生代大小影响Minor GC频率和晋升速率调优关键参数"
            },
            {
              "id": "常用参数-4-8-2-d2",
              "tag": "MetaSpaceSize",
              "desc": "元空间初始大小JDK8+取代PermGen默认无上限需限制"
            },
            {
              "id": "常用参数-4-8-2-d3",
              "tag": "NewRatio",
              "desc": "新生代与老年代比例默认2即新生代1/3老年代2/3调整分代"
            },
            {
              "id": "常用参数-4-8-2-d4",
              "tag": "SurvivorRatio",
              "desc": "Eden与Survivor比例默认8即Eden80%两个S各10%优化"
            }
          ]
        }
      ]
    }
  ]
};

// java-io.js — 五、Java IO 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['java-io'] = {
  "id": "java-io",
  "title": "二、Java IO/NIO",
  "tag": "IO",
  "order": 2,
  "icon": "🔄",
  "cssIndex": 1,
  "subs": [
    {
      "id": "5-1-io-基础-5-0",
      "title": "5.1 IO 基础",
      "points": [
        {
          "id": "io分类-5-0-0",
          "tag": "IO 分类",
          "desc": "按流向：输入流(InputStream/Reader)输出流(OutputStream/Writer)。按操作单元：字节流(8bit)字符流(16bit,Reader/Writer处理文本避免乱码)。按角色：节点流(直接操作数据源)/处理流(装饰器模式包装节点流增强功能)",
          "details": [
            {
              "id": "io分类-5-0-0-d0",
              "tag": "字节流",
              "desc": "InputStream/OutputStream (8bit)"
            },
            {
              "id": "io分类-5-0-0-d1",
              "tag": "字符流",
              "desc": "Reader/Writer (16bit,处理文本)"
            },
            {
              "id": "io分类-5-0-0-d2",
              "tag": "节点流",
              "desc": "直接操作数据源（节点流的详细说明：IO 分类中关于节点流的内容）"
            },
            {
              "id": "io分类-5-0-0-d3",
              "tag": "处理流",
              "desc": "装饰器模式包装增强（处理流的详细说明：IO 分类中关于处理流的内容）"
            }
          ]
        },
        {
          "id": "bio阻塞io-5-0-1",
          "tag": "BIO 阻塞IO",
          "desc": "传统Java IO模型。每个连接一个独立线程处理(ServerSocket.accept()阻塞等待连接,InputStream.read()阻塞等待数据)。线程数=连接数,高并发时线程资源耗尽。适用:连接数少且固定的场景",
          "details": [
            {
              "id": "bio阻塞io-5-0-1-d0",
              "tag": "每个连接一个线程",
              "desc": "BIO模型每个客户端连接分配独立线程处理，连接数等于线程数，高并发时线程资源耗尽系统崩溃"
            },
            {
              "id": "bio阻塞io-5-0-1-d1",
              "tag": "accept()/read()阻塞",
              "desc": "ServerSocket.accept()阻塞等待新连接，InputStream.read()阻塞等待数据，线程在IO等待期间无法做其他工作"
            },
            {
              "id": "bio阻塞io-5-0-1-d2",
              "tag": "线程数=连接数,高并发耗尽资源",
              "desc": "BIO线程数与连接数1:1，高并发场景下数千连接需要数千线程，线程栈内存和调度开销导致系统资源耗尽"
            }
          ]
        },
        {
          "id": "nio非阻塞io-5-0-2",
          "tag": "NIO 非阻塞IO",
          "desc": "JDK1.4引入。核心组件:Channel(通道,双向传输)+Buffer(缓冲区,数据容器)+Selector(选择器,多路复用)。configureBlocking(false)非阻塞模式,read()立即返回不阻塞。单线程可管理多连接",
          "details": [
            {
              "id": "nio非阻塞io-5-0-2-d0",
              "tag": "Channel + Buffer + Selector",
              "desc": "NIO三核心：Channel双向通道读写数据，Buffer数据容器读写缓冲，Selector多路复用器监控多个Channel事件"
            },
            {
              "id": "nio非阻塞io-5-0-2-d1",
              "tag": "configureBlocking(false)非阻塞",
              "desc": "设置Channel为非阻塞模式后accept()/read()立即返回无数据返回0不阻塞线程，线程可轮询多个Channel"
            },
            {
              "id": "nio非阻塞io-5-0-2-d2",
              "tag": "单线程可管理多连接",
              "desc": "一个Selector线程可注册监控数百个Channel的IO事件，通过事件驱动方式单线程高效管理多连接避免线程膨胀"
            }
          ]
        },
        {
          "id": "aio异步io-5-0-3",
          "tag": "AIO 异步IO",
          "desc": "JDK7引入(NIO.2)。基于事件和回调。AsynchronousSocketChannel/AsynchronousServerSocketChannel注册CompletionHandler回调。Linux底层用io_uring或AIO系统调用。实际生产用得少(Netty基于NIO模拟)",
          "details": [
            {
              "id": "aio异步io-5-0-3-d0",
              "tag": "事件驱动+CompletionHandler回调",
              "desc": "AIO基于事件和回调机制，发起IO操作后立即返回，操作完成时系统通知CompletionHandler回调处理结果"
            },
            {
              "id": "aio异步io-5-0-3-d1",
              "tag": "生产少用,Netty",
              "desc": "生产少用,Netty基于NIO"
            }
          ]
        }
      ]
    },
    {
      "id": "5-2-nio核心组件-5-1",
      "title": "5.2 NIO核心组件",
      "points": [
        {
          "id": "buffer缓冲区-5-1-0",
          "tag": "Buffer缓冲区",
          "desc": "底层数组(HeapByteBuffer Java堆/DirectByteBuffer堆外内存)。核心属性:capacity容量/position读写位置limit读写界限mark标记。flip()切换读写(position归0,limit置原position)。clear()清空/compact()压缩未读数据",
          "details": [
            {
              "id": "buffer缓冲区-5-1-0-d0",
              "tag": "capacity/position/limit/mark",
              "desc": "Buffer四属性：capacity缓冲区总容量，position当前读写位置，limit读写上限界限，mark标记位置供reset回退"
            },
            {
              "id": "buffer缓冲区-5-1-0-d1",
              "tag": "DirectByteBuffer堆外内存零拷贝",
              "desc": "DirectByteBuffer分配在堆外本地内存，IO操作无需从堆内拷贝到堆外减少一次CPU拷贝，适合大文件网络传输"
            }
          ]
        },
        {
          "id": "channel通道-5-1-1",
          "tag": "Channel通道",
          "desc": "FileChannel(文件读写,文件锁,MappedByteBuffer内存映射)/SocketChannel(TCP客户端)/ServerSocketChannel(TCP服务端)/DatagramChannel(UDP)。Channel双向(vs Stream单向)。支持scatter分散读取和gather聚集写入",
          "details": [
            {
              "id": "channel通道-5-1-1-d0",
              "tag": "FileChannel/SocketChannel/DatagramChannel",
              "desc": "FileChannel文件读写，SocketChannel TCP客户端，ServerSocketChannel TCP服务端，DatagramChannel UDP通信"
            },
            {
              "id": "channel通道-5-1-1-d1",
              "tag": "Scatter/Gather分散聚集",
              "desc": "Scatter从一个Channel读取数据分散写入多个Buffer，Gather从多个Buffer聚集数据写入一个Channel，减少拷贝"
            },
            {
              "id": "channel通道-5-1-1-d2",
              "tag": "MappedByteBuffer内存映射文件",
              "desc": "FileChannel.map()将文件区域映射到内存地址，读写直接操作内存无需系统调用read/write，大文件随机访问极快"
            }
          ]
        },
        {
          "id": "selector选择器-5-1-2",
          "tag": "Selector选择器",
          "desc": "NIO多路复用核心。select()阻塞监控所有已注册Channel的IO事件。SelectionKey就绪事件:OP_ACCEPT新连接/OP_READ可读/OP_WRITE可写/OP_CONNECT连接完成。selectedKeys()获取就绪集合逐一处理。Reactor模式基础",
          "details": [
            {
              "id": "selector选择器-5-1-2-d0",
              "tag": "select()阻塞监控所有Channel IO事件",
              "desc": "Selector.select()阻塞等待至少一个Channel有IO事件就绪，返回就绪SelectionKey集合供线程逐一处理"
            },
            {
              "id": "selector选择器-5-1-2-d1",
              "tag": "4种就绪事件类型",
              "desc": "OP_ACCEPT新连接到达、OP_READ数据可读、OP_WRITE缓冲区可写、OP_CONNECT连接建立完成四种事件类型"
            },
            {
              "id": "selector选择器-5-1-2-d2",
              "tag": "Reactor模式基础",
              "desc": "Selector多路复用是Reactor模式的实现基础，单线程事件循环检测IO事件分发给对应Handler处理，非阻塞高效"
            }
          ]
        },
        {
          "id": "reactor模式-5-1-3",
          "tag": "Reactor模式",
          "desc": "单Reactor单线程(Selector+Handler简单但无法利用多核)/单Reactor多线程(主React accept+Worker线程池处理IO)/主从Reactor多线程(main Reactor accept+sub Reactor管Connection+Worker处理业务)。Netty基于主从Reactor优化实现",
          "details": [
            {
              "id": "reactor模式-5-1-3-d0",
              "tag": "三种模式演进：单Reactor单线程→单Reactor多线程→主从Reactor",
              "desc": "演进：单线程Handler串行瓶颈→多线程Worker池并行IO→主从Reactor分工Accept与IO处理解耦，Netty用主从模式"
            },
            {
              "id": "reactor模式-5-1-3-d1",
              "tag": "Netty",
              "desc": "Netty采用主从Reactor"
            }
          ]
        }
      ]
    },
    {
      "id": "5-3-零拷贝-5-2",
      "title": "5.3 零拷贝",
      "points": [
        {
          "id": "传统io数据拷贝-5-2-0",
          "tag": "传统IO数据拷贝",
          "desc": "读文件发网络:磁盘->内核Buffer(read)->用户Buffer->socket Buffer(write)->网卡。共4次拷贝(2次DMA+2次CPU复制)+2次系统调用(read+write)+4次上下文切换。CPU复制是性能瓶颈",
          "details": [
            {
              "id": "传统io数据拷贝-5-2-0-d0",
              "tag": "4次拷贝(2DMA+2CPU)",
              "desc": "传统IO读文件发网络：磁盘DMA→内核buf→CPU复制→用户buf→CPU复制→socket buf→DMA→网卡，4次数据拷贝"
            },
            {
              "id": "传统io数据拷贝-5-2-0-d1",
              "tag": "2次系统调用+4次上下文切换",
              "desc": "read()和write()两次系统调用各触发用户态→内核态切换及返回，共4次上下文切换，每次切换保存恢复寄存器开销大"
            }
          ]
        },
        {
          "id": "mmap内存映射-5-2-1",
          "tag": "mmap内存映射",
          "desc": "mmap()将文件映射到用户空间虚拟地址。读文件发网络减少1次CPU拷贝(内核到用户无需copy)。仍需经过用户空间,大文件可能OOM导致内存不足",
          "details": [
            {
              "id": "mmap内存映射-5-2-1-d0",
              "tag": "mmap减少1次CPU拷贝",
              "desc": "mmap将文件映射到用户空间虚拟地址，read时数据直接在映射区访问无需从内核buf复制到用户buf，减少1次CPU拷贝"
            },
            {
              "id": "mmap内存映射-5-2-1-d1",
              "tag": "仍过用户空间,大文件OOM风险",
              "desc": "mmap仍需数据经过用户空间(send时从映射区到socket buf)，且映射大文件占用大量虚拟内存可能导致OOM"
            }
          ]
        },
        {
          "id": "sendfile零拷贝-5-2-2",
          "tag": "sendfile零拷贝",
          "desc": "Linux 2.1引入。sendfile()直接在内核中将文件数据复制到socket Buffer不经用户空间。2次DMA拷贝+1次系统调用。DMAgather(2.4+)进一步优化:仅1次拷贝!",
          "details": [
            {
              "id": "sendfile零拷贝-5-2-2-d0",
              "tag": "sendfile",
              "desc": "2次拷贝+1次系统调用（sendfile的详细说明：sendfile零拷贝中关于sendfile的内容）"
            },
            {
              "id": "sendfile零拷贝-5-2-2-d1",
              "tag": "DMAgather",
              "desc": "仅1次拷贝!（DMAgather的详细说明：sendfile零拷贝中关于DMAgather的内容）"
            }
          ]
        },
        {
          "id": "java零拷贝实现-5-2-3",
          "tag": "Java零拷贝实现",
          "desc": "FileChannel.transferTo()/transferFrom()底层调sendfile。MappedByteBuffer底层调mmap。Netty FileRegion.transferTo()使用sendfile。Kafka高性能原因之一就是使用transferTo零拷贝",
          "details": [
            {
              "id": "java零拷贝实现-5-2-3-d0",
              "tag": "FileChannel.transferTo()底层调sendfile",
              "desc": "FileChannel.transferTo()调用OS sendfile，数据从文件直接到网卡不经过用户空间，仅2次DMA拷贝无CPU参与"
            },
            {
              "id": "java零拷贝实现-5-2-3-d1",
              "tag": "MappedByteBuffer底层调mmap",
              "desc": "MappedByteBuffer通过FileChannel.map()调用OS mmap系统调用，将文件映射到内存实现减少1次CPU拷贝的零拷贝"
            },
            {
              "id": "java零拷贝实现-5-2-3-d2",
              "tag": "Netty/Kafka都使用零拷贝技术",
              "desc": "Netty用FileRegion+sendfile，Kafka用FileChannel.transferTo()零拷贝传输日志文件，两者均避免数据经过用户空间"
            }
          ]
        }
      ]
    },
    {
      "id": "5-4-nio2文件api-5-3",
      "title": "5.4 NIO.2 文件API",
      "points": [
        {
          "id": "path与files-5-4-0",
          "tag": "Path 与 Files API",
          "desc": "Path替代File更现代Paths.get()创建resolve拼接normalize规范化;Files工具类copy/move/delete/createFile/list/walk;Files.readString/writeString一行读写远比File+InputStream简洁",
          "details": [
            {
              "id": "path与files-5-4-0-d0",
              "tag": "Path",
              "desc": "替代File更现代Paths.get()创建resolve拼接子路径relativize计算相对路径normalize规范化"
            },
            {
              "id": "path与files-5-4-0-d1",
              "tag": "Files",
              "desc": "静态工具类copy/move/delete/createFile/list/walk一行代码完成复杂文件操作"
            },
            {
              "id": "path与files-5-4-0-d2",
              "tag": "readString",
              "desc": "Files.readString/writeString一行读写Java11+远比File+InputStream简洁"
            },
            {
              "id": "path与files-5-4-0-d3",
              "tag": "File vs Path",
              "desc": "File是旧APIPath是新API推荐PathFile.toPath()/Path.toFile()互转"
            }
          ]
        },
        {
          "id": "watchservice目录监控-5-4-1",
          "tag": "WatchService 目录监控",
          "desc": "NIO.2文件系统事件监听Path.register(watchService,事件类型)→take()→pollEvents()→reset();底层OS事件通知Linux inotify高效非轮询;用途配置热加载/日志监控/文件同步",
          "details": [
            {
              "id": "watchservice目录监控-5-4-1-d0",
              "tag": "WatchService",
              "desc": "NIO.2事件监听ENTRY_CREATE/ENTRY_MODIFY/ENTRY_DELETE三种事件类型"
            },
            {
              "id": "watchservice目录监控-5-4-1-d1",
              "tag": "工作流程",
              "desc": "Path.register→take()等待→pollEvents()取出→reset()重置继续监听循环处理"
            },
            {
              "id": "watchservice目录监控-5-4-1-d2",
              "tag": "底层机制",
              "desc": "Linux inotify/Windows ReadDirectoryChangesW基于OS事件通知高效非轮询非定时扫描"
            },
            {
              "id": "watchservice目录监控-5-4-1-d3",
              "tag": "应用场景",
              "desc": "配置文件热加载/日志目录监控触发处理/文件同步检测变更自动推送"
            }
          ]
        }
      ]
    },
    {
      "id": "5-5-网络编程基础-5-4",
      "title": "5.5 网络编程基础",
      "points": [
        {
          "id": "socket编程-5-5-0",
          "tag": "Socket 编程",
          "desc": "Socket是TCP网络通信基础APIServerSocket.accept()服务端监听Socket客户端连接;TCP三次握手四次挥手;短连接vs长连接keep-alive;理解Socket编程才能理解Netty/BIO/NIO异步模型",
          "details": [
            {
              "id": "socket编程-5-5-0-d0",
              "tag": "ServerSocket",
              "desc": "服务端new ServerSocket(port)→accept()阻塞等待客户端连接返回Socket"
            },
            {
              "id": "socket编程-5-5-0-d1",
              "tag": "Socket客户端",
              "desc": "new Socket(host,port)建立TCP连接getInputStream()/getOutputStream()读写"
            },
            {
              "id": "socket编程-5-5-0-d2",
              "tag": "TCP连接",
              "desc": "三次握手(SYN→SYN+ACK→ACK)建立四次挥手(FIN→ACK→FIN→ACK)关闭"
            },
            {
              "id": "socket编程-5-5-0-d3",
              "tag": "短连接vs长连接",
              "desc": "短连接每次新建+关闭开销大长连接keep-alive复用减少握手开销"
            },
            {
              "id": "socket编程-5-5-0-d4",
              "tag": "与Netty关系",
              "desc": "Socket是基础理解BIO阻塞后才能理解NIO非阻塞和Netty事件驱动异步模型"
            }
          ]
        },
        {
          "id": "http客户端-5-5-1",
          "tag": "Java HTTP 客户端",
          "desc": "HttpURLConnection旧API功能有限;Java11+HttpClient支持HTTP/2异步;OkHttp最常用第三方HTTP库;SpringRestTemplate/WebClient企业级封装",
          "details": [
            {
              "id": "http客户端-5-5-1-d0",
              "tag": "HttpClient",
              "desc": "Java11+现代API支持HTTP/2异步CompletableFuture配置简洁推荐"
            },
            {
              "id": "http客户端-5-5-1-d1",
              "tag": "OkHttp",
              "desc": "Square开源最常用HTTP客户端连接池拦截器链GZIP压缩"
            },
            {
              "id": "http客户端-5-5-1-d2",
              "tag": "RestTemplate",
              "desc": "Spring封装支持序列化/错误处理/负载均衡WebClient是响应式版本"
            },
            {
              "id": "http客户端-5-5-1-d3",
              "tag": "HttpURLConnection",
              "desc": "JDK内置旧API功能有限不支持HTTP/2实际项目很少直接使用"
            }
          ]
        }
      ]
    }
  ]
};
