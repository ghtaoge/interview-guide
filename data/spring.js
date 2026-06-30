// spring.js — 九、Spring 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['spring'] = {
  "id": "spring",
  "title": "六、Spring 生态体系",
  "tag": "Spring",
  "order": 6,
  "icon": "🌐",
  "cssIndex": 5,
  "subs": [
    {
      "id": "9-1-ioc容器-9-0",
      "title": "9.1 IoC容器",
      "points": [
        {
          "id": "ioc控制反转-9-0-0",
          "tag": "IoC控制反转",
          "desc": "传统:对象自己创建依赖(new UserServiceImpl())。Spring IoC:将创建和控制权交给容器,通过DI依赖注入(构造器Setter字段三种方式)提供依赖。好处:解耦(对象间松耦合便于替换实现)/集中管理(Bean生命周期统一管控)/便于测试(Mock注入)。ApplicationContext(接口,AnnotationConfigServlet/ClassPathXmlApplicationContext)扩展BeanFactory(懒加载/国际化/事件发布)",
          "details": [
            {
              "id": "ioc控制反转-9-0-0-d0",
              "tag": "IoC vs DI 区别",
              "desc": "IoC是思想(控制反转交给容器),DI是实现(依赖注入容器提供),IoC容器=容器+注入的组合体"
            },
            {
              "id": "ioc控制反转-9-0-0-d1",
              "tag": "三种注入方式",
              "desc": "构造器注入(强制依赖不可变推荐)/Setter注入(可选依赖灵活)/字段注入(@Autowired简洁但Spring不推荐无法脱离容器)"
            },
            {
              "id": "ioc控制反转-9-0-0-d2",
              "tag": "@Autowired注入机制",
              "desc": "按类型byType优先→同类型多个按名称byField名→@Qualifier指定名称→@Primary标记优先Bean"
            },
            {
              "id": "ioc控制反转-9-0-0-d3",
              "tag": "ApplicationContext vs BeanFactory",
              "desc": "ApplicationContext扩展BeanFactory:预加载(非懒加载)+国际化MessageSource+事件发布ApplicationEvent+资源加载Resource+AOP集成"
            },
            {
              "id": "ioc控制反转-9-0-0-d4",
              "tag": "IoC好处",
              "desc": "解耦(接口驱动替换实现)/集中管理(生命周期AOP统一)/便于测试(Mock注入)/灵活扩展(配置切换实现)"
            },
            {
              "id": "ioc控制反转-9-0-0-d5",
              "tag": "常见IoC容器实现",
              "desc": "Spring(Java生态最主流)/Google Guice(轻量纯DI)/CDI(Java EE标准@Inject)/PicoContainer(极简容器)"
            },
            {
              "id": "ioc控制反转-9-0-0-d6",
              "tag": "面试陷阱",
              "desc": "IoC≠DI(IoC是设计原则DI是实现方式)/@Autowired注入null不会NPE而是启动报NoSuchBeanDefinitionException"
            }
          ]
        },
        {
          "id": "bean作用域-9-0-1",
          "tag": "Bean作用域",
          "desc": "singleton(单例默认,整个容器只有一个实例,线程安全注意无状态设计)。prototype(原型每次getBean创建新实例)。request(每次HTTP请求一个实例,Web环境)。session(每次HTTP Session一个实例)。application(ServletContext级别单例)。websocket(WebSocket会话)。自定义Scope实现org.springframework.beans.factory.config.Scope接口",
          "details": [
            {
              "id": "bean作用域-9-0-1-d0",
              "tag": "singleton单例(默认)",
              "desc": "整个容器仅一个实例,IoC容器关闭才销毁,注意无状态设计避免线程安全问题(不用成员变量存请求数据)"
            },
            {
              "id": "bean作用域-9-0-1-d1",
              "tag": "prototype原型",
              "desc": "每次getBean/注入都创建新实例,容器不管理prototype Bean的完整生命周期(不调用destroy方法)"
            },
            {
              "id": "bean作用域-9-0-1-d2",
              "tag": "Web作用域",
              "desc": "request(HTTP请求级别)/session(HTTP会话级别)/application(ServletContext级别)/websocket(WebSocket会话级别)"
            },
            {
              "id": "bean作用域-9-0-1-d3",
              "tag": "singleton中注入prototype陷阱",
              "desc": "singleton Bean注入prototype时prototype只创建一次(因为singleton只初始化一次),解决:用ObjectFactory/Provider或@Lookup方法注入"
            },
            {
              "id": "bean作用域-9-0-1-d4",
              "tag": "自定义Scope",
              "desc": "实现org.springframework.beans.factory.config.Scope接口+CustomScopeConfigurer注册,如ThreadScope(线程级)"
            },
            {
              "id": "bean作用域-9-0-1-d5",
              "tag": "面试陷阱",
              "desc": "Spring singleton≠JVM单例(每个容器一个而非整个JVM一个,不同ApplicationContext各有一份)"
            }
          ]
        },
        {
          "id": "bean生命周期-9-0-2",
          "tag": "Bean生命周期",
          "desc": "1.实例化(反射创建) 2.属性赋值(注入依赖) 3.Aware接口(setBeanName/setBeanFactory/setApplicationContext) 4.BeanPostProcessor.postProcessBeforeInitialization(前置处理) 5.初始化(@PostConstruct/InitializingBean.afterPropertiesSet/init-method) 6.BeanPostProcessor.postProcessAfterInitialization(后置处理/AOP代理在此创建) 7.使用 8.销毁(@PreDestroy/DisposableBean.destroy/destroy-method)",
          "details": [
            {
              "id": "bean生命周期-9-0-2-d0",
              "tag": "1.实例化",
              "desc": "反射或工厂方法创建Bean实例,构造器执行"
            },
            {
              "id": "bean生命周期-9-0-2-d1",
              "tag": "2-3.属性赋值+Aware",
              "desc": "DI注入依赖属性+Aware回调(setBeanName/setBeanFactory/setApplicationContext让Bean感知容器身份)"
            },
            {
              "id": "bean生命周期-9-0-2-d2",
              "tag": "4.BPP前置处理",
              "desc": "BeanPostProcessor.postProcessBeforeInitialization,常用:@Autowired注入在此完成(AutowiredAnnotationBeanPostProcessor)"
            },
            {
              "id": "bean生命周期-9-0-2-d3",
              "tag": "5.初始化三步",
              "desc": "@PostConstruct→InitializingBean.afterPropertiesSet()→自定义init-method,三步按顺序执行"
            },
            {
              "id": "bean生命周期-9-0-2-d4",
              "tag": "6.BPP后置处理(AOP)",
              "desc": "BeanPostProcessor.postProcessAfterInitialization,核心:AOP代理在此创建(AbstractAutoProxyCreator包装目标对象为代理)"
            },
            {
              "id": "bean生命周期-9-0-2-d5",
              "tag": "7.使用+8.销毁",
              "desc": "Bean就绪可供使用;容器关闭时销毁:@PreDestroy→DisposableBean.destroy()→自定义destroy-method"
            },
            {
              "id": "bean生命周期-9-0-2-d6",
              "tag": "面试要点",
              "desc": "AOP代理在第6步创建而非第1步(所以构造器中无法获取代理对象);循环依赖时三级缓存提前暴露代理绕过此限制"
            }
          ]
        },
        {
          "id": "循环依赖-9-0-3",
          "tag": "循环依赖",
          "desc": "Spring三级缓存解决 singleton 循环依赖:一级singletonObjects(完整Bean成品池)→earlySingletonObjects(早期暴露半成品,刚实例化未填充属性)→singletonFactories(Bean工厂ObjectFactory,可包装AOP代理提前暴露)。流程:A创建→实例化A放入三级工厂→注入B→B需要A→三级工厂给B(AOP代理或原始A)→B完成→A拿到B完成。prototype不支持循环依赖(不缓存)",
          "details": [
            {
              "id": "循环依赖-9-0-3-d0",
              "tag": "一级singletonObjects",
              "desc": "完整Bean成品池,已初始化+已填充属性+已创建代理(如有),Bean完全就绪才能进入"
            },
            {
              "id": "循环依赖-9-0-3-d1",
              "tag": "二级earlySingletonObjects",
              "desc": "早期暴露半成品,刚实例化未填充属性的对象,解决A→B→A时B能拿到A的引用(可能被AOP包装为代理)"
            },
            {
              "id": "循环依赖-9-0-3-d2",
              "tag": "三级singletonFactories",
              "desc": "ObjectFactory工厂,核心:getEarlyReference()可动态决定返回原始Bean还是AOP代理,提前暴露但延迟代理创建"
            },
            {
              "id": "循环依赖-9-0-3-d3",
              "tag": "解决流程",
              "desc": "A实例化→放入三级工厂→A填充属性需B→B实例化→B填充属性需A→三级工厂getEarlyReference返回A(AOP或原始)→B完成放入一级→A拿到B→A完成放入一级"
            },
            {
              "id": "循环依赖-9-0-3-d4",
              "tag": "为什么三级而非二级",
              "desc": "二级缓存无法区分AOP场景:若直接在二级放原始Bean,后续AOP代理创建后引用不一致;三级工厂延迟判断,只在被提前引用时才决定返回代理或原始"
            },
            {
              "id": "循环依赖-9-0-3-d5",
              "tag": "prototype不支持",
              "desc": "prototype作用域Bean不缓存到三级缓存,无法提前暴露引用,循环依赖直接报BeanCurrentlyInCreationException"
            },
            {
              "id": "循环依赖-9-0-3-d6",
              "tag": "构造器注入循环依赖",
              "desc": "构造器循环依赖三级缓存也无法解决(因为实例化阶段就需要对方),只能用@Lazy延迟注入或setter/字段注入替代"
            }
          ]
        }
      ]
    },
    {
      "id": "9-2-spring常用注解-9-1",
      "title": "9.2 Spring常用注解",
      "points": [
        {
          "id": "组件注册注解-9-1-0",
          "tag": "组件注册注解",
          "desc": "@Component(通用组件标记自动扫描注册)/@Service(业务逻辑层标记语义化)/@Repository(数据访问层标记语义化+自动转换持久化异常)/@Controller(Web控制器标记)/@RestController(@Controller+@ResponseBody组合返回JSON)/@Configuration(配置类标记声明@Bean方法)/@Bean(在@Configuration类中手动创建Bean相当于XML中<bean>)/@Import(导入其他@Configuration类或普通类快速注册Bean)/@ComponentScan(指定扫描包路径默认扫描启动类所在包及子包)/@Conditional(条件注册Bean系列:OnClass/OnBean/OnMissingBean/OnProperty/OnWebApplication)",
          "details": [
            {
              "id": "组件注册注解-9-1-0-d0",
              "tag": "@Component",
              "desc": "通用组件标记任何类自动扫描注册最基础"
            },
            {
              "id": "组件注册注解-9-1-0-d1",
              "tag": "@Service/@Repository/@Controller:语义化分层标记功能同@Component",
              "desc": "@Repository额外自动转换持久化异常为Spring统一异常体系;@Controller配合视图渲染,@RestController=Controller+ResponseBody直接返回JSON"
            },
            {
              "id": "组件注册注解-9-1-0-d2",
              "tag": "@Configuration+@Bean",
              "desc": "手动创建Bean替代XML<bean>配置类方式"
            },
            {
              "id": "组件注册注解-9-1-0-d3",
              "tag": "@Import",
              "desc": "导入配置类或普通类快速注册无需@ComponentScan扫描"
            },
            {
              "id": "组件注册注解-9-1-0-d4",
              "tag": "@ComponentScan",
              "desc": "指定扫描包路径includeFilters/excludeFilters过滤"
            },
            {
              "id": "组件注册注解-9-1-0-d5",
              "tag": "@Conditional系列",
              "desc": "条件注册OnClass有类才注册/OnProperty属性满足才注册"
            }
          ]
        },
        {
          "id": "依赖注入注解-9-1-1",
          "tag": "依赖注入注解",
          "desc": "@Autowired(Spring自动注入按类型byType优先)/@Qualifier(指定注入Bean名称当同类型多个Bean时@Qualifier(beanName)精确指定)/@Resource(JSR-250标准按名称byName注入找不到名称再按类型)/@Value(注入配置属性值@Value(${app.name})支持SpEL表达式)/@Inject(JSR-330标准按类型注入类似@Autowired无required属性)/@Lazy(延迟注入Bean首次使用时才创建而非启动时)/@Primary(同类型多个Bean时标记首选注入对象优先级高于@Qualifier)",
          "details": [
            {
              "id": "依赖注入注解-9-1-1-d0",
              "tag": "@Autowired",
              "desc": "按类型自动注入required=true找不到抛异常可设false"
            },
            {
              "id": "依赖注入注解-9-1-1-d1",
              "tag": "@Qualifier",
              "desc": "按名称精确指定当同类型多个Bean时@Autowired+@Qualifier配合"
            },
            {
              "id": "依赖注入注解-9-1-1-d2",
              "tag": "@Resource",
              "desc": "JSR-250按名称注入name属性指定找不到名称再按类型更灵活"
            },
            {
              "id": "依赖注入注解-9-1-1-d3",
              "tag": "@Value",
              "desc": "注入配置属性${}和SpEL表达式#{}支持默认值${app.name:default}"
            },
            {
              "id": "依赖注入注解-9-1-1-d4",
              "tag": "@Lazy",
              "desc": "延迟创建首次使用时才实例化减少启动时间资源延迟加载"
            },
            {
              "id": "依赖注入注解-9-1-1-d5",
              "tag": "@Primary",
              "desc": "标记首选Bean同类型多候选时优先注入比@Qualifier更优雅"
            }
          ]
        },
        {
          "id": "web注解-9-1-2",
          "tag": "Web注解",
          "desc": "@RequestMapping(映射URL到方法可指定method/params/headers)/@GetMapping/@PostMapping/@PutMapping/@DeleteMapping/@PatchMapping(简化版指定HTTP方法)/@PathVariable(路径变量提取/users/{id})/@RequestParam(查询参数提取?name=val可设required默认true)/@RequestBody(JSON请求体反序列化为对象Jackson)/@RequestHeader(提取请求头值)/@CookieValue(提取Cookie值)/@ModelAttribute(表单对象自动绑定)/@ResponseBody(返回值序列化为JSON)/@ResponseStatus(指定响应HTTP状态码)/@CrossOrigin(跨域配置allowOrigins/methods/headers)",
          "details": [
            {
              "id": "web注解-9-1-2-d0",
              "tag": "@RequestMapping",
              "desc": "通用URL映射@GetMapping等简化版指定HTTP方法"
            },
            {
              "id": "web注解-9-1-2-d1",
              "tag": "@PathVariable",
              "desc": "路径参数/users/{id}提取URL中的变量值"
            },
            {
              "id": "web注解-9-1-2-d2",
              "tag": "@RequestParam",
              "desc": "查询参数?name=val可设required和defaultValue"
            },
            {
              "id": "web注解-9-1-2-d3",
              "tag": "@RequestBody",
              "desc": "JSON请求体→Java对象Jackson自动反序列化"
            },
            {
              "id": "web注解-9-1-2-d4",
              "tag": "@ResponseBody",
              "desc": "返回值→JSON响应与@Controller组合为@RestController"
            },
            {
              "id": "web注解-9-1-2-d5",
              "tag": "@CrossOrigin",
              "desc": "跨域配置允许指定来源和方法headers"
            }
          ]
        },
        {
          "id": "配置与条件注解-9-1-3",
          "tag": "配置与条件注解",
          "desc": "@ConfigurationProperties(prefix=app)(批量绑定YAML配置到Bean属性类型安全)/@EnableAutoConfiguration(开启自动装配加载spring.factories配置类)/@Profile(dev)(环境隔离指定Bean在哪个环境激活)/@ConditionalOnClass(类路径存在指定类才注册Bean)/@ConditionalOnMissingBean(容器中不存在指定Bean才注册防重复)/@ConditionalOnProperty(prefix=app.feature,havingValue=true)(配置属性满足才注册)/@ConditionalOnWebApplication(仅在Web环境注册)/@ConditionalOnExpression(SpEL表达式满足才注册灵活条件)",
          "details": [
            {
              "id": "配置与条件注解-9-1-3-d0",
              "tag": "@ConfigurationProperties",
              "desc": "批量绑定YAML属性到Bean类型安全需@Component"
            },
            {
              "id": "配置与条件注解-9-1-3-d1",
              "tag": "@EnableAutoConfiguration",
              "desc": "开启自动装配加载spring.factories配置类"
            },
            {
              "id": "配置与条件注解-9-1-3-d2",
              "tag": "@Profile",
              "desc": "环境隔离@Profile(dev)指定Bean只在dev环境激活spring.profiles.active切换"
            },
            {
              "id": "配置与条件注解-9-1-3-d3",
              "tag": "@ConditionalOnClass",
              "desc": "类路径存在指定类才注册如存在DataSource才注册JPA配置"
            },
            {
              "id": "配置与条件注解-9-1-3-d4",
              "tag": "@ConditionalOnMissingBean",
              "desc": "容器中无指定Bean才注册避免覆盖用户自定义"
            },
            {
              "id": "配置与条件注解-9-1-3-d5",
              "tag": "@ConditionalOnProperty",
              "desc": "配置属性满足值才注册如app.feature=true才启用功能"
            }
          ]
        },
        {
          "id": "事务与aop注解-9-1-4",
          "tag": "事务与AOP注解",
          "desc": "@Transactional(声明事务propagation传播行为REQUIRED默认/isolation隔离级别/rollbackFor指定回滚异常默认RuntimeException/noRollbackFor指定不回滚异常/timeout超时秒数)/@Aspect(标记切面类)/@Pointcut(定义切入点表达式execution/within/args/@annotation)/@Before(前置通知目标方法执行前)/@After(后置通知方法执行后不管是否异常)/@AfterReturning(返回通知方法正常返回后)/@AfterThrowing(异常通知方法抛异常后)/@Around(环绕通知最强大控制执行+修改参数返回值)/@DeclareParents(引入新接口给目标类增强)/@Order(指定切面执行顺序数值越小优先级越高)",
          "details": [
            {
              "id": "事务与aop注解-9-1-4-d0",
              "tag": "@Transactional",
              "desc": "声明事务propagation REQUIRED默认rollbackFor=Exception.class建议显式指定"
            },
            {
              "id": "事务与aop注解-9-1-4-d1",
              "tag": "@Aspect",
              "desc": "标记切面类配合@Pointcut/@Before/@After等定义切面逻辑"
            },
            {
              "id": "事务与aop注解-9-1-4-d2",
              "tag": "@Pointcut",
              "desc": "定义切入点表达式execution(* com.service.*.*(..))匹配方法"
            },
            {
              "id": "事务与aop注解-9-1-4-d3",
              "tag": "@Before/@After/@AfterReturning/@AfterThrowing:四种通知时机不同",
              "desc": "@Before目标方法前执行可做参数校验;@AfterThrowing仅异常时执行可记录错误;@AfterReturning仅正常返回时执行可修改返回值;@After始终执行类似finally"
            },
            {
              "id": "事务与aop注解-9-1-4-d4",
              "tag": "@Around",
              "desc": "环绕通知ProceedingJoinPoint.proceed()最强大控制全流程"
            },
            {
              "id": "事务与aop注解-9-1-4-d5",
              "tag": "@Order",
              "desc": "切面执行顺序数值越小优先级越高多个切面时控制顺序"
            }
          ]
        },
        {
          "id": "生命周期注解-9-1-5",
          "tag": "生命周期注解",
          "desc": "@PostConstruct(Bean初始化后执行类似init-method在属性注入完成后调用)/@PreDestroy(Bean销毁前执行类似destroy-method容器关闭时调用释放资源)/@Scope(指定Bean作用域singleton默认/prototype/request/session/application)/@DependsOn(指定Bean依赖顺序确保依赖Bean先创建)/@Singleton(标记单例默认等同@Scope(singleton))/@RefreshScope(Spring Cloud Config动态刷新时重建Bean重新读取配置)",
          "details": [
            {
              "id": "生命周期注解-9-1-5-d0",
              "tag": "@PostConstruct",
              "desc": "Bean初始化后执行在@Autowired注入完成后调用初始化逻辑"
            },
            {
              "id": "生命周期注解-9-1-5-d1",
              "tag": "@PreDestroy",
              "desc": "Bean销毁前执行容器关闭时调用释放连接池等资源"
            },
            {
              "id": "生命周期注解-9-1-5-d2",
              "tag": "@Scope",
              "desc": "指定作用域singleton(默认)/prototype(每次新建)/request/session"
            },
            {
              "id": "生命周期注解-9-1-5-d3",
              "tag": "@DependsOn",
              "desc": "指定依赖顺序确保依赖Bean先创建后创建当前Bean"
            },
            {
              "id": "生命周期注解-9-1-5-d4",
              "tag": "@RefreshScope",
              "desc": "Spring Cloud Config动态配置刷新时销毁并重建Bean"
            },
            {
              "id": "生命周期注解-9-1-5-d5",
              "tag": "生命周期顺序",
              "desc": "实例化→属性注入→@PostConstruct→使用→@PreDestroy→销毁"
            }
          ]
        }
      ]
    },
    {
      "id": "9-3-aop切面-9-2",
      "title": "9.3 AOP切面",
      "points": [
        {
          "id": "aop核心概念-9-2-0",
          "tag": "AOP核心概念",
          "desc": "Aspect(切面:横切关注点模块化如日志/事务/权限,@Aspect)。Join Point(连接点:方法执行点)。Point Cut(切入点:匹配哪些连接点的表达式,execution(* com.service.*.*(..)))。Advice(通知:切面执行的时机,Before/After/AfterReturning/AfterThrowing/Around)。Weaving(织入:将切面应用到目标对象创建代理的过程)。Target(目标对象:被代理的原对象)。Proxy(代理对象)",
          "details": [
            {
              "id": "aop核心概念-9-2-0-d0",
              "tag": "Aspect切面",
              "desc": "横切关注点模块化(@Aspect标注类),包含PointCut+Advice,如日志切面/事务切面/权限切面,一个应用可有多个切面"
            },
            {
              "id": "aop核心概念-9-2-0-d1",
              "tag": "JoinPoint连接点",
              "desc": "程序执行的明确点(Spring AOP仅支持方法执行连接点,AspectJ还支持字段访问/构造器等)"
            },
            {
              "id": "aop核心概念-9-2-0-d2",
              "tag": "PointCut切入点表达式",
              "desc": "匹配连接点的表达式:execution(* com.service..*.*(..))/within包匹配/@annotation注解匹配/args参数类型匹配"
            },
            {
              "id": "aop核心概念-9-2-0-d3",
              "tag": "Advice五种通知",
              "desc": "@Before前置/@After后置(无论异常)/@AfterReturning正常返回/@AfterThrowing异常抛出/@Around环绕(最强大可控制执行)"
            },
            {
              "id": "aop核心概念-9-2-0-d4",
              "tag": "Weaving织入",
              "desc": "将切面应用到目标对象创建代理的过程,Spring AOP运行时织入(JDK/CGLIB代理),AspectJ编译时/加载时织入"
            },
            {
              "id": "aop核心概念-9-2-0-d5",
              "tag": "Introduction引入",
              "desc": "让目标对象实现额外接口(不修改源码),@DeclareParents(value='target+',defaultImpl=Impl.class)动态混入新行为"
            },
            {
              "id": "aop核心概念-9-2-0-d6",
              "tag": "Spring AOP vs AspectJ",
              "desc": "Spring AOP:运行时代理仅方法级别+简单易用+无需额外编译;AspectJ:编译时织入更强大(字段/构造器)+性能更好但需ajc编译器"
            }
          ]
        },
        {
          "id": "jdk动态代理vscglib-9-2-1",
          "tag": "JDK动态代理vsCGLIB",
          "desc": "JDK Proxy(基于接口:目标类实现至少一个接口,Proxy.newProxyInstance(loader,interfaces,invocationHandler),invoke方法拦截)。CGLIB(基于继承:目标类无接口或配置proxy-target-class=true,Enhancer创建子类重写方法,MethodInterceptor.intercept拦截)。Spring Boot 2.x默认优先CGLIB(允许proxyTargetClass=true)。选择:有接口用JDK Proxy,无接口或想代理类方法用CGLIB",
          "details": [
            {
              "id": "jdk动态代理vscglib-9-2-1-d0",
              "tag": "JDK Proxy原理",
              "desc": "基于接口,Proxy.newProxyInstance动态生成实现类,$Proxy0调用InvocationHandler.invoke拦截,目标类必须实现接口"
            },
            {
              "id": "jdk动态代理vscglib-9-2-1-d1",
              "tag": "CGLIB原理",
              "desc": "基于继承,Enhancer创建目标类子类重写非final方法,MethodInterceptor.intercept拦截,不能代理final类/方法"
            },
            {
              "id": "jdk动态代理vscglib-9-2-1-d2",
              "tag": "Spring Boot 2.x默认CGLIB",
              "desc": "spring.aop.proxy-target-class=true默认开启,即使目标类实现了接口也使用CGLIB代理(避免接口变更导致代理失效)"
            },
            {
              "id": "jdk动态代理vscglib-9-2-1-d3",
              "tag": "JDK Proxy局限",
              "desc": "只能代理接口方法,目标类新增的非接口方法无法被拦截;需要目标类至少实现一个接口"
            },
            {
              "id": "jdk动态代理vscglib-9-2-1-d4",
              "tag": "CGLIB局限",
              "desc": "不能代理final类(无法继承)/final方法(无法重写)/private方法(子类不可见);创建代理比JDK慢但运行性能相近"
            },
            {
              "id": "jdk动态代理vscglib-9-2-1-d5",
              "tag": "面试陷阱",
              "desc": "Spring AOP≠AspectJ(Spring是代理-based仅方法级,AspectJ是完整AOP框架);final方法不被AOP代理(事务失效原因之一)"
            },
            {
              "id": "jdk动态代理vscglib-9-2-1-d6",
              "tag": "选择策略",
              "desc": "Spring Boot 2.x:默认全CGLIB无需选择;传统Spring:有接口JDK Proxy,无接口CGLIB;proxy-target-class=true强制CGLIB"
            }
          ]
        },
        {
          "id": "around环绕通知-9-2-2",
          "tag": "@Around环绕通知",
          "desc": "最强大通知(控制目标方法是否执行+修改参数/返回值)。ProceedingJoinPoint.proceed()执行原方法。用法:@Around('execution(* com.service.*.*(..))') public Object around(ProceedingJoinPoint pjp) throws Throwable { Object[] args=pjp.getArgs(); //修改参数 Object result=pjp.proceed(args); //执行 return result; //修改返回值 }",
          "details": [
            {
              "id": "around环绕通知-9-2-2-d0",
              "tag": "ProceedingJoinPoint",
              "desc": "@Around专用参数,getArgs()获取参数/proceed()执行原方法/proceed(args)传入修改参数/getSignature()方法签名"
            },
            {
              "id": "around环绕通知-9-2-2-d1",
              "tag": "控制执行",
              "desc": "proceed()决定是否执行目标方法:不调用=跳过执行(直接返回/抛异常),调用多次=重复执行(重试场景)"
            },
            {
              "id": "around环绕通知-9-2-2-d2",
              "tag": "修改参数和返回值",
              "desc": "proceed(modifiedArgs)传入修改后的参数;return modifiedResult包装或替换返回值(如返回缓存结果而非调用DB)"
            },
            {
              "id": "around环绕通知-9-2-2-d3",
              "tag": "典型应用:缓存",
              "desc": "先查缓存→有则直接返回(不proceed)→无则proceed查DB→将结果放入缓存→返回,完全由@Around控制"
            },
            {
              "id": "around环绕通知-9-2-2-d4",
              "tag": "典型应用:限流/重试",
              "desc": "限流:超过阈值直接拒绝不proceed;重试:catch异常后循环proceed最多N次,适合调用外部不稳定服务"
            },
            {
              "id": "around环绕通知-9-2-2-d5",
              "tag": "环绕通知优先级",
              "desc": "@Around最外层包裹其他通知,执行顺序:Around前→Before→目标方法→AfterReturning→Around后;异常时:Around前→Before→目标异常→AfterThrowing→Around catch"
            },
            {
              "id": "around环绕通知-9-2-2-d6",
              "tag": "注意事项",
              "desc": "必须调用proceed()否则目标方法不执行;必须return结果否则调用方收到null;必须throws Throwable不能吞异常"
            }
          ]
        }
      ]
    },
    {
      "id": "9-4-spring设计模式-9-3",
      "title": "9.4 Spring设计模式",
      "points": [
        {
          "id": "工厂模式-9-3-0",
          "tag": "工厂模式",
          "desc": "BeanFactory(延迟加载按需创建Bean)和ApplicationContext(预加载启动时创建所有单例Bean)都是工厂模式的实现。BeanFactory是基础IoC容器getBean()按名称或类型获取Bean对象/ApplicationContext扩展BeanFactory增加事件发布/AOP/国际化等功能。FactoryBean:自定义Bean创建逻辑getObject()返回实际对象用于创建复杂Bean(如ProxyFactoryBean创建AOP代理)。BeanDefinition:工厂的产品图纸存储Bean配置信息(类名/作用域/依赖/初始化方法)",
          "details": [
            {
              "id": "工厂模式-9-3-0-d0",
              "tag": "BeanFactory",
              "desc": "基础IoC容器延迟加载getBean()按需创建最轻量"
            },
            {
              "id": "工厂模式-9-3-0-d1",
              "tag": "ApplicationContext",
              "desc": "扩展容器预加载+AOP+事件+国际化功能最常用"
            },
            {
              "id": "工厂模式-9-3-0-d2",
              "tag": "FactoryBean",
              "desc": "自定义创建逻辑getObject()创建复杂Bean如AOP代理"
            },
            {
              "id": "工厂模式-9-3-0-d3",
              "tag": "BeanDefinition",
              "desc": "Bean的配置图纸类名/作用域/依赖/初始化/销毁方法"
            },
            {
              "id": "工厂模式-9-3-0-d4",
              "tag": "创建过程",
              "desc": "BeanDefinition→实例化→属性注入→初始化→完整Bean对象"
            },
            {
              "id": "工厂模式-9-3-0-d5",
              "tag": "getBean()",
              "desc": "工厂方法根据BeanDefinition创建或获取已缓存的单例Bean"
            }
          ]
        },
        {
          "id": "单例模式-9-3-1",
          "tag": "单例模式",
          "desc": "Spring默认Bean作用域singleton(整个容器只有一个实例)。Spring单例实现:三级缓存+ConcurrentHashMap存储(singletonObjects Bean成品池)。与传统单例区别:Spring单例是容器范围内的(每个ApplicationContext独立)/传统单例是JVM范围(ClassLoader级别)。线程安全:Spring不保证单例Bean线程安全需无状态设计(不存可变成员变量)。注册式单例:Spring容器相当于单例注册表getBean时查找已有实例或创建新实例",
          "details": [
            {
              "id": "单例模式-9-3-1-d0",
              "tag": "Spring默认singleton",
              "desc": "整个容器只有一个Bean实例ConcurrentHashMap存储"
            },
            {
              "id": "单例模式-9-3-1-d1",
              "tag": "三级缓存",
              "desc": "singletonObjects成品+earlySingletonObjects半成品+singletonFactories工厂"
            },
            {
              "id": "单例模式-9-3-1-d2",
              "tag": "容器范围",
              "desc": "每个ApplicationContext独立单例不同容器可有不同实例"
            },
            {
              "id": "单例模式-9-3-1-d3",
              "tag": "线程安全",
              "desc": "Spring单例Bean不保证线程安全需无状态设计避免可变成员变量"
            },
            {
              "id": "单例模式-9-3-1-d4",
              "tag": "注册式单例",
              "desc": "容器=单例注册表getBean查找已有实例或创建新实例注册"
            },
            {
              "id": "单例模式-9-3-1-d5",
              "tag": "与传统区别",
              "desc": "Spring单例容器范围/JVM传统单例ClassLoader范围更广"
            }
          ]
        },
        {
          "id": "代理模式-9-3-2",
          "tag": "代理模式",
          "desc": "AOP核心基于代理模式。Spring AOP两种代理:JDK动态代理(基于接口Proxy.newProxyInstance生成实现接口的代理类)/CGLIB代理(基于继承Enhancer生成目标类子类覆盖方法)。代理创建时机:BeanPostProcessor.postProcessAfterInitialization阶段(第6步)创建代理替换原始Bean。代理选择策略:有接口默认JDK代理/无接口自动CGLIB/SpringBoot 2.x默认CGLIB(proxyTargetClass=true)。代理链:一个目标可有多个代理(Advisor链)形成代理嵌套执行顺序由@Order决定",
          "details": [
            {
              "id": "代理模式-9-3-2-d0",
              "tag": "JDK动态代理",
              "desc": "基于接口Proxy.newProxyInstance+InvocationHandler适合有接口类"
            },
            {
              "id": "代理模式-9-3-2-d1",
              "tag": "CGLIB代理",
              "desc": "基于继承Enhancer+MethodInterceptor适合无接口或需代理类方法"
            },
            {
              "id": "代理模式-9-3-2-d2",
              "tag": "创建时机",
              "desc": "BeanPostProcessor后置处理阶段AOP代理在此创建替换原始Bean"
            },
            {
              "id": "代理模式-9-3-2-d3",
              "tag": "选择策略",
              "desc": "有接口→JDK/无接口→CGLIB/SpringBoot 2.x默认CGLIB"
            },
            {
              "id": "代理模式-9-3-2-d4",
              "tag": "代理链",
              "desc": "多个Advisor形成代理嵌套执行顺序由@Order/Ordered接口决定"
            },
            {
              "id": "代理模式-9-3-2-d5",
              "tag": "AbstractAutoProxyCreator",
              "desc": "自动代理创建器基础设施核心AOP代理创建逻辑"
            }
          ]
        },
        {
          "id": "模板方法模式-9-3-3",
          "tag": "模板方法模式",
          "desc": "定义算法骨架将可变步骤延迟到子类实现。Spring模板类:JdbcTemplate(execute/update/query定义JDBC操作骨架/子类可自定义RowMapper结果映射)/RestTemplate(doExecute定义HTTP请求骨架/拦截器链可扩展)/RedisTemplate(execute定义Redis操作骨架/序列化器可自定义)/TransactionTemplate(execute定义事务骨架commit/rollback固定)。AbstractApplicationContext.refresh()模板方法定义容器刷新12步骨架各子类可自定义特定步骤。JpaTemplate/HibernateTemplate同理",
          "details": [
            {
              "id": "模板方法模式-9-3-3-d0",
              "tag": "JdbcTemplate",
              "desc": "execute/update/query骨架+RowMapper可变步骤自定义映射"
            },
            {
              "id": "模板方法模式-9-3-3-d1",
              "tag": "RestTemplate",
              "desc": "doExecute骨架+RequestCallback/ResponseExtractor可扩展"
            },
            {
              "id": "模板方法模式-9-3-3-d2",
              "tag": "RedisTemplate",
              "desc": "execute骨架+RedisSerializer可自定义序列化策略"
            },
            {
              "id": "模板方法模式-9-3-3-d3",
              "tag": "TransactionTemplate",
              "desc": "execute骨架+TransactionStatus固定commit/rollback"
            },
            {
              "id": "模板方法模式-9-3-3-d4",
              "tag": "AbstractApplicationContext.refresh():容器刷新12步模板骨架子类可覆写",
              "desc": "refresh()定义Bean创建、依赖注入、AOP代理、事件发布等12步固定流程;子类如GenericApplicationContext可覆写postProcessBeanFactory等步骤自定义扩展"
            },
            {
              "id": "模板方法模式-9-3-3-d5",
              "tag": "优点",
              "desc": "固定流程避免重复代码+可变步骤灵活扩展不修改骨架代码"
            }
          ]
        },
        {
          "id": "观察者模式-9-3-4",
          "tag": "观察者模式",
          "desc": "ApplicationEvent(事件对象) + ApplicationListener(观察者监听事件) + ApplicationEventPublisher(主题发布事件)。Spring内置事件:ContextRefreshedEvent(容器刷新完成)/ContextStartedEvent(容器启动)/ContextStoppedEvent(容器停止)/ContextClosedEvent(容器关闭)/RequestHandledEvent(请求处理完成)。自定义:extends ApplicationEvent + @EventListener注解或实现ApplicationListener + ApplicationEventPublisher.publishEvent()发布。异步:@EventListener+@Async异步处理不阻塞主线程",
          "details": [
            {
              "id": "观察者模式-9-3-4-d0",
              "tag": "ApplicationEvent",
              "desc": "事件对象基类携带事件数据和时间戳"
            },
            {
              "id": "观察者模式-9-3-4-d1",
              "tag": "ApplicationListener",
              "desc": "观察者接口onApplicationEvent处理事件"
            },
            {
              "id": "观察者模式-9-3-4-d2",
              "tag": "ApplicationEventPublisher",
              "desc": "主题接口publishEvent()发布事件通知所有监听者"
            },
            {
              "id": "观察者模式-9-3-4-d3",
              "tag": "内置事件",
              "desc": "ContextRefreshedEvent/ContextStartedEvent/ContextStoppedEvent/ContextClosedEvent"
            },
            {
              "id": "观察者模式-9-3-4-d4",
              "tag": "@EventListener",
              "desc": "注解方式监听更简洁替代实现ApplicationListener接口"
            },
            {
              "id": "观察者模式-9-3-4-d5",
              "tag": "异步",
              "desc": "@EventListener+@Async异步处理不阻塞发布者线程"
            }
          ]
        },
        {
          "id": "策略模式-9-3-5",
          "tag": "策略模式",
          "desc": "Resource接口(资源加载策略):ClassPathResource(classpath加载)/FileSystemResource(文件系统加载)/UrlResource(URL加载)/ServletContextResource(Web应用加载)。ResourceLoader根据资源路径前缀选择不同策略:classpath:→ClassPathResource/file:→FileSystemResource/http:→UrlResource。InstantiationStrategy(Bean实例化策略):SimpleInstantiationStrategy(反射创建)/CglibSubclassingInstantiationStrategy(CGLIB创建)。HttpMessageConverter(消息转换策略):不同ContentType选择不同转换器Jackson/Gson/String",
          "details": [
            {
              "id": "策略模式-9-3-5-d0",
              "tag": "Resource接口",
              "desc": "资源加载策略ClassPath/FileSystem/Url/Servlet不同实现"
            },
            {
              "id": "策略模式-9-3-5-d1",
              "tag": "ResourceLoader",
              "desc": "根据路径前缀选择策略classpath:→ClassPath/file:→FileSystem"
            },
            {
              "id": "策略模式-9-3-5-d2",
              "tag": "InstantiationStrategy",
              "desc": "Bean实例化策略Simple反射/CglibSubclassing两种"
            },
            {
              "id": "策略模式-9-3-5-d3",
              "tag": "HttpMessageConverter",
              "desc": "HTTP消息转换策略不同ContentType选不同转换器"
            },
            {
              "id": "策略模式-9-3-5-d4",
              "tag": "AOP代理策略",
              "desc": "JDK动态代理/CGLIB代理根据目标类选择不同代理方式"
            },
            {
              "id": "策略模式-9-3-5-d5",
              "tag": "DispatcherServlet",
              "desc": "策略模式根据Handler类型选择不同HandlerAdapter"
            }
          ]
        },
        {
          "id": "适配器模式-9-3-6",
          "tag": "适配器模式",
          "desc": "HandlerAdapter适配不同类型的Handler(Controller/HttpRequestHandler/Servlet)。DispatcherServlet.dispatch()遍历所有HandlerAdapter找到支持当前Handler的适配器执行。Spring AOP:AdvisorAdapter将不同类型Advisor(MethodBeforeAdvice/AfterReturningAdvice/ThrowsAdvice)适配为统一MethodInterceptor。Spring MVC:SimpleControllerHandlerAdapter/HttpRequestHandlerAdapter/RequestMappingHandlerAdapter各自适配不同Handler类型。适配器让框架统一处理不同类型对象",
          "details": [
            {
              "id": "适配器模式-9-3-6-d0",
              "tag": "HandlerAdapter",
              "desc": "适配不同Controller类型统一处理DispatcherServlet核心"
            },
            {
              "id": "适配器模式-9-3-6-d1",
              "tag": "多种适配器",
              "desc": "SimpleController/HttpRequestHandler/RequestMapping三种Handler"
            },
            {
              "id": "适配器模式-9-3-6-d2",
              "tag": "AOP AdvisorAdapter",
              "desc": "将不同Advice适配为统一MethodInterceptor拦截器链"
            },
            {
              "id": "适配器模式-9-3-6-d3",
              "tag": "RequestMappingHandlerAdapter",
              "desc": "适配@RequestMapping注解方法最常用适配器"
            },
            {
              "id": "适配器模式-9-3-6-d4",
              "tag": "适配器模式",
              "desc": "让DispatcherServlet不需要知道具体Handler类型统一调用handle()"
            },
            {
              "id": "适配器模式-9-3-6-d5",
              "tag": "优点",
              "desc": "新增Handler类型只需添加新Adapter不修改DispatcherServlet核心代码"
            }
          ]
        },
        {
          "id": "装饰器模式-9-3-7",
          "tag": "装饰器模式",
          "desc": "BeanWrapper对Bean对象进行包装增强(PropertyAccessor属性访问+PropertyEditor属性编辑+类型转换)。HttpServletRequestWrapper装饰Request(重写getParameter/filter输入)。Spring Cache:CacheDecorator包装Cache增加统计/过期策略/序列化功能。Spring Security:SecurityContextHolderDecorator包装SecurityContext增强安全功能。TransactionAwareCacheDecorator包装Cache感知事务事务提交后才实际操作缓存。装饰器模式在Spring中广泛使用:对核心对象进行功能增强而不改变接口",
          "details": [
            {
              "id": "装饰器模式-9-3-7-d0",
              "tag": "BeanWrapper",
              "desc": "装饰Bean对象增加属性访问/编辑/类型转换功能"
            },
            {
              "id": "装饰器模式-9-3-7-d1",
              "tag": "HttpServletRequestWrapper",
              "desc": "装饰Request重写方法过滤参数/XSS防御"
            },
            {
              "id": "装饰器模式-9-3-7-d2",
              "tag": "TransactionAwareCacheDecorator:装饰Cache感知事务提交后才缓存操作",
              "desc": "包装原始Cache对象,事务内缓存操作暂存临时Map,事务commit后才真正写入缓存,rollback时丢弃临时操作,避免事务未提交时缓存已更新导致数据不一致"
            },
            {
              "id": "装饰器模式-9-3-7-d3",
              "tag": "Spring Cache",
              "desc": "CacheDecorator增加统计/过期策略/序列化增强功能"
            },
            {
              "id": "装饰器模式-9-3-7-d4",
              "tag": "Spring Security",
              "desc": "装饰SecurityContext增强认证授权安全功能"
            },
            {
              "id": "装饰器模式-9-3-7-d5",
              "tag": "装饰器核心",
              "desc": "增强功能不改变接口透明包装原对象客户端无感知"
            }
          ]
        }
      ]
    },
    {
      "id": "9-5-springboot-9-4",
      "title": "9.5 SpringBoot",
      "points": [
        {
          "id": "自动装配原理-9-4-0",
          "tag": "自动装配原理",
          "desc": "@SpringBootApplication = @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan。@EnableAutoConfiguration:导入AutoConfigurationImportSelector,加载META-INF/spring.factories(旧版)或META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports(新版2.7+)中的配置类。@Conditional系列注解条件判断(OnClass/OnProperty/OnBean/OnMissingBean)决定哪些Bean注册。@SpringBootTest启动测试",
          "details": [
            {
              "id": "自动装配原理-9-4-0-d0",
              "tag": "@SpringBootApplication三合一",
              "desc": "@SpringBootConfiguration+@EnableAutoConfiguration+@ComponentScan组合注解启动类唯一入口"
            },
            {
              "id": "自动装配原理-9-4-0-d1",
              "tag": "@EnableAutoConfiguration触发",
              "desc": "导入AutoConfigurationImportSelector执行selectImports()扫描自动配置候选列表"
            },
            {
              "id": "自动装配原理-9-4-0-d2",
              "tag": "spring.factories机制",
              "desc": "META-INF/spring.factories(旧版)/AutoConfiguration.imports(2.7+)列出全量配置类按key=EnableAutoConfiguration加载"
            },
            {
              "id": "自动装配原理-9-4-0-d3",
              "tag": "@Conditional条件过滤",
              "desc": "OnClass有类才注册/OnMissingBean容器无才注册/OnProperty配置满足才注册/OnWebApplication仅Web环境加载最终生效的只是子集"
            },
            {
              "id": "自动装配原理-9-4-0-d4",
              "tag": "AutoConfigurationImportSelector",
              "desc": "核心选择器读取候选列表+去重+排除(exclude)+过滤(@Conditional)返回最终要注册的配置类数组"
            },
            {
              "id": "自动装配原理-9-4-0-d5",
              "tag": "自动配置生效流程",
              "desc": "启动→spring.factories全量候选→@Conditional过滤→只注册满足条件的Bean→约定优于配置开箱即用"
            },
            {
              "id": "自动装配原理-9-4-0-d6",
              "tag": "debug查看生效配置",
              "desc": "启动加--debug或application.yml设debug=true输出auto-configuration-report哪些生效哪些未生效及原因"
            },
            {
              "id": "自动装配原理-9-4-0-d7",
              "tag": "@ComponentScan扫描范围",
              "desc": "默认扫描启动类所在包及子包自定义@ComponentScan(basePackages)或basePackageClasses改变扫描路径"
            }
          ]
        },
        {
          "id": "starter机制-9-4-1",
          "tag": "starter机制",
          "desc": "spring-boot-starter-web(自动引入tomcat/springmvc/jackson等依赖+自动配置)。starter = 依赖聚合(autoconfigure + 核心依赖)。自定义Starter: ①创建autoconfigure模块写自动配置类+spring.factoriesimports②创建starter模块依赖autoconfigure③使用者引入starter即可。约定优于配置:默认配置合理开箱即用,通过application.yml覆写",
          "details": [
            {
              "id": "starter机制-9-4-1-d0",
              "tag": "starter依赖聚合",
              "desc": "spring-boot-starter-web聚合tomcat+springmvc+jackson+自动配置一键引入Web开发全套依赖"
            },
            {
              "id": "starter机制-9-4-1-d1",
              "tag": "自定义Starter三步",
              "desc": "①autoconfigure模块写配置类+spring.factories/imports②starter模块依赖autoconfigure③使用者引入starter即可"
            },
            {
              "id": "starter机制-9-4-1-d2",
              "tag": "autoconfigure模块",
              "desc": "核心模块包含自动配置类(@Conditional)+META-INF/spring.factories或AutoConfiguration.imports注册入口"
            },
            {
              "id": "starter机制-9-4-1-d3",
              "tag": "约定优于配置",
              "desc": "默认配置合理开箱即用如嵌入式Tomcat端口8080,通过application.yml覆写任何默认值无需XML配置"
            },
            {
              "id": "starter机制-9-4-1-d4",
              "tag": "@ConditionalOnMissingBean",
              "desc": "自定义Starter中用@ConditionalOnMissingBean保证用户自定义Bean优先覆盖默认配置不冲突"
            },
            {
              "id": "starter机制-9-4-1-d5",
              "tag": "官方starter命名",
              "desc": "官方spring-boot-starter-{name}/第三方{name}-spring-boot-starter命名约定区分来源"
            },
            {
              "id": "starter机制-9-4-1-d6",
              "tag": "starter与autoconfigure分离",
              "desc": "starter只做依赖聚合不含代码/autoconfigure写逻辑分离后starter可独立升级依赖版本不影响配置逻辑"
            }
          ]
        },
        {
          "id": "配置文件优先级-9-4-2",
          "tag": "配置文件优先级",
          "desc": "命令行参数 > SPRING_APPLICATION_JSON环境变量 > Servlet Config > Servlet Context > application-{profile}.yml > application.yml > @PropertySource > 默认值。多环境: application-dev/test/prod.yml + spring.profiles.active=dev 或 --spring.profiles.active=prod。配置绑定:@ConfigurationProperties(prefix='app')绑定到Bean/YAML任意层级",
          "details": [
            {
              "id": "配置文件优先级-9-4-2-d0",
              "tag": "优先级从高到低",
              "desc": "命令行参数>SPRING_APPLICATION_JSON>ServletConfig>ServletContext>application-{profile}.yml>application.yml>@PropertySource>默认值"
            },
            {
              "id": "配置文件优先级-9-4-2-d1",
              "tag": "命令行参数最高",
              "desc": "--server.port=8081最高优先级可在启动时覆盖任何配置常用于运维临时调整如切换profile/端口"
            },
            {
              "id": "配置文件优先级-9-4-2-d2",
              "tag": "profile多环境",
              "desc": "application-dev.yml(开发)/application-test.yml(测试)/application-prod.yml(生产)激活:--spring.profiles.active=prod"
            },
            {
              "id": "配置文件优先级-9-4-2-d3",
              "tag": "@ConfigurationProperties绑定",
              "desc": "@ConfigurationProperties(prefix=app)批量将YAML属性绑定到Bean字段类型安全支持JSR-303校验需@Component"
            },
            {
              "id": "配置文件优先级-9-4-2-d4",
              "tag": "@Value与@ConfigurationProperties",
              "desc": "@Value单属性注入SpEL表达式灵活/@ConfigurationProperties批量绑定类型安全+校验推荐整体配置用后者"
            },
            {
              "id": "配置文件优先级-9-4-2-d5",
              "tag": "YAML优势",
              "desc": "层次结构清晰支持多环境同一文件(spring.profiles分段)/列表映射/避免属性名重复比properties更易维护"
            },
            {
              "id": "配置文件优先级-9-4-2-d6",
              "tag": "@PropertySource局限",
              "desc": "@PropertySource仅支持properties文件不支持YAML/需配合@Value或@ConfigurationProperties使用优先级低于YAML"
            }
          ]
        },
        {
          "id": "springboot启动流程-9-4-3",
          "tag": "SpringBoot启动流程",
          "desc": "1.创建SpringApplication实例(推断应用类型SERVLET/REACTIVE/NONE+加载Initializer+加载Listener) 2.run()启动:创建BootstrapContext→准备Environment→创建ApplicationContext→准备上下文(refresh前:BeanDefinition注册+AutoConfiguration导入)→refresh()容器刷新(核心步骤:Bean创建+自动配置生效)→afterRefresh→调用Runner(CommandLineRunner/ApplicationRunner)→容器就绪。核心在refresh()",
          "details": [
            {
              "id": "springboot启动流程-9-4-3-d0",
              "tag": "SpringApplication实例",
              "desc": "推断类型+加载Initializer+Listener"
            },
            {
              "id": "springboot启动流程-9-4-3-d1",
              "tag": "run()",
              "desc": "BootstrapContext→Environment→ApplicationContext"
            },
            {
              "id": "springboot启动流程-9-4-3-d2",
              "tag": "refresh()核心",
              "desc": "Bean创建+自动配置生效（refresh()核心的详细说明：SpringBoot启动流程中关于refresh()核心的内容）"
            },
            {
              "id": "springboot启动流程-9-4-3-d3",
              "tag": "Runner",
              "desc": "CommandLineRunner/ApplicationRunner执行启动后逻辑"
            }
          ]
        },
        {
          "id": "springbootactuator监控-9-4-4",
          "tag": "SpringBoot Actuator监控",
          "desc": "生产监控端点:/health(健康状态+组件详情)/info(应用信息)/metrics(指标CPU内存线程)/env(环境配置)/beans(Bean列表)/loggers(日志级别动态调整)/mappings(路由映射)/shutdown(优雅关闭需启用)。自定义HealthIndicator实现health()方法。Prometheus+Grafana集成:actuator暴露metrics→Prometheus采集→Grafana可视化",
          "details": [
            {
              "id": "springbootactuator监控-9-4-4-d0",
              "tag": "核心端点",
              "desc": "health/info/metrics/env/beans/loggers/mappings"
            },
            {
              "id": "springbootactuator监控-9-4-4-d1",
              "tag": "自定义HealthIndicator",
              "desc": "自定义HealthIndicator实现health()方法"
            },
            {
              "id": "springbootactuator监控-9-4-4-d2",
              "tag": "management.endpoints.web.exposure.include",
              "desc": "配置Actuator端点暴露策略,默认仅health/info;设为*暴露全部端点(含beans/env等敏感信息);生产环境建议只暴露需要端点如health,info,prometheus"
            },
            {
              "id": "springbootactuator监控-9-4-4-d3",
              "tag": "Prometheus+Micrometer集成",
              "desc": "actuator→采集→可视化"
            }
          ]
        },
        {
          "id": "springboot日志体系-9-4-5",
          "tag": "SpringBoot日志体系",
          "desc": "默认Logback(logback-spring.xml配置)。日志级别:OFF>FATAL>ERROR>WARN>INFO>DEBUG>TRACE>ALL。logging.level.root=INFO全局/logging.level.com.xxx=DEBUG包级别控制。logback-spring.xml比logback.xml优势:支持<springProfile>多环境+<springProperty>引用配置。替换Log4j2:排除spring-boot-starter-logging引入spring-boot-starter-log4j2",
          "details": [
            {
              "id": "springboot日志体系-9-4-5-d0",
              "tag": "默认Logback无需额外",
              "desc": "默认Logback无需额外配置"
            },
            {
              "id": "springboot日志体系-9-4-5-d1",
              "tag": "logging.level.root",
              "desc": "设置全局日志级别如logging.level.root=INFO;可按包细粒度控制如logging.level.com.xxx=DEBUG;Logback默认支持OFF>FATAL>ERROR>WARN>INFO>DEBUG>TRACE>ALL"
            },
            {
              "id": "springboot日志体系-9-4-5-d2",
              "tag": "logback-spring.xml",
              "desc": "logback-spring.xml支持springProfile多环境"
            },
            {
              "id": "springboot日志体系-9-4-5-d3",
              "tag": "替换",
              "desc": "排除logging引入log4j2 starter"
            }
          ]
        },
        {
          "id": "springboot异常处理-9-4-6",
          "tag": "SpringBoot异常处理",
          "desc": "统一异常:@RestControllerAdvice+@ExceptionHandler按类型精确匹配。自定义BusinessException→@ExceptionHandler返回业务错误码+友好提示。系统异常@ExceptionHandler(Exception.class)→500+详细日志。SpringBoot默认/error端点→ErrorController自定义错误页面/JSON响应。响应格式统一:{code,message,data}",
          "details": [
            {
              "id": "springboot异常处理-9-4-6-d0",
              "tag": "@RestControllerAdvice全局异常处理",
              "desc": "@RestControllerAdvice=@ControllerAdvice+ResponseBody组合注解,统一拦截Controller层异常并自动将返回值序列化为JSON,避免每个Controller重复写try-catch"
            },
            {
              "id": "springboot异常处理-9-4-6-d1",
              "tag": "@ExceptionHandler按类型精确匹配",
              "desc": "Spring按异常类型从精确到宽泛匹配Handler方法,如BusinessException优先于RuntimeException,Exception.class作为兜底;多个Handler时最具体类型的方法生效"
            },
            {
              "id": "springboot异常处理-9-4-6-d2",
              "tag": "BusinessException",
              "desc": "BusinessException→业务错误码+友好提示"
            },
            {
              "id": "springboot异常处理-9-4-6-d3",
              "tag": "ErrorController自定义/error端点响应",
              "desc": "实现ErrorController接口覆写getErrorPath()和handleRequest()方法,可自定义/error端点返回JSON格式错误详情或渲染自定义错误页面,替代Spring默认的白标错误页"
            }
          ]
        }
      ]
    },
    {
      "id": "9-6-spring事件机制-9-5",
      "title": "9.6 Spring事件机制",
      "points": [
        {
          "id": "内置事件-9-5-0",
          "tag": "内置事件",
          "desc": "ContextRefreshedEvent(ApplicationContext刷新完成触发所有Bean创建完毕init完成是最常用的内置事件)/ContextStartedEvent(ApplicationContext启动触发ConfigurableApplicationContext.start())/ContextStoppedEvent(ApplicationContext停止触发stop()方法)/ContextClosedEvent(ApplicationContext关闭触发close()释放资源销毁Bean)/RequestHandledEvent(Web应用请求处理完成后触发记录请求信息时间/状态码/异常)。触发时机:refresh()最后一步publishEvent(ContextRefreshedEvent)/start()/stop()/close()/doDispatch()",
          "details": [
            {
              "id": "内置事件-9-5-0-d0",
              "tag": "ContextRefreshedEvent",
              "desc": "容器刷新完成所有Bean初始化完毕最常用"
            },
            {
              "id": "内置事件-9-5-0-d1",
              "tag": "ContextStartedEvent",
              "desc": "容器启动ConfigurableApplicationContext.start()触发"
            },
            {
              "id": "内置事件-9-5-0-d2",
              "tag": "ContextStoppedEvent",
              "desc": "容器停止stop()触发停止处理新请求"
            },
            {
              "id": "内置事件-9-5-0-d3",
              "tag": "ContextClosedEvent",
              "desc": "容器关闭close()触发销毁Bean释放资源"
            },
            {
              "id": "内置事件-9-5-0-d4",
              "tag": "RequestHandledEvent",
              "desc": "Web请求处理完成记录请求信息时间/状态码"
            },
            {
              "id": "内置事件-9-5-0-d5",
              "tag": "触发时机",
              "desc": "refresh()/start()/stop()/close()/doDispatch()各生命周期节点"
            }
          ]
        },
        {
          "id": "自定义事件-9-5-1",
          "tag": "自定义事件",
          "desc": "步骤:①定义事件类extends ApplicationEvent(携带业务数据如orderId/message)②定义监听器实现ApplicationListener<自定义Event>或使用@EventListener注解(更简洁推荐)③发布事件ApplicationEventPublisher.publishEvent(自定义Event对象)④事件发布后Spring遍历所有匹配的Listener依次调用。@EventListener优势:注解方式无需实现接口/方法名任意/spEL条件过滤/@Async异步处理/支持返回值继续发布新事件(事件链)",
          "details": [
            {
              "id": "自定义事件-9-5-1-d0",
              "tag": "extends ApplicationEvent",
              "desc": "定义事件类携带业务数据如orderId/userId"
            },
            {
              "id": "自定义事件-9-5-1-d1",
              "tag": "@EventListener",
              "desc": "注解监听更简洁推荐无需实现接口方法名任意"
            },
            {
              "id": "自定义事件-9-5-1-d2",
              "tag": "ApplicationEventPublisher.publishEvent():发布事件触发所有匹配监听者",
              "desc": "调用publishEvent后Spring遍历ApplicationContext中所有ApplicationListener及@EventListener标注方法,按事件类型匹配并依次调用,默认同步执行可用@Async异步化"
            },
            {
              "id": "自定义事件-9-5-1-d3",
              "tag": "@EventListener条件",
              "desc": "#event.type == \"order\" SpEL过滤只处理特定条件事件"
            },
            {
              "id": "自定义事件-9-5-1-d4",
              "tag": "@EventListener+@Async",
              "desc": "异步处理不阻塞发布者线程独立线程池执行"
            },
            {
              "id": "自定义事件-9-5-1-d5",
              "tag": "事件链",
              "desc": "@EventListener返回值作为新事件继续发布级联触发事件流"
            }
          ]
        },
        {
          "id": "异步事件-9-5-2",
          "tag": "异步事件",
          "desc": "@EventListener+@Async组合实现异步事件处理不阻塞发布者线程。配置:@EnableAsync开启异步支持+自定义Executor(TaskExecutor线程池)/@Async(customExecutor)指定线程池。异步异常处理:实现AsyncUncaughtExceptionHandler处理异步方法未捕获异常。@TransactionalEventListener(phase=TransactionPhase.AFTER_COMMIT):事务提交后才触发事件处理保证事务一致性。其他phase:BEFORE_COMMIT(提交前)/AFTER_COMPLETION(完成后)/AFTER_ROLLBACK(回滚后)。注意:异步事件处理失败不影响发布者主流程需做好补偿",
          "details": [
            {
              "id": "异步事件-9-5-2-d0",
              "tag": "@EventListener+@Async",
              "desc": "异步处理不阻塞发布者独立线程池执行"
            },
            {
              "id": "异步事件-9-5-2-d1",
              "tag": "@EnableAsync",
              "desc": "开启异步支持+自定义TaskExecutor线程池配置"
            },
            {
              "id": "异步事件-9-5-2-d2",
              "tag": "@Async(customExecutor)",
              "desc": "指定线程池不同事件用不同线程池隔离"
            },
            {
              "id": "异步事件-9-5-2-d3",
              "tag": "TransactionalEventListener",
              "desc": "事务提交后触发AFTER_COMMIT保证数据一致性"
            },
            {
              "id": "异步事件-9-5-2-d4",
              "tag": "phase选项",
              "desc": "BEFORE_COMMIT/AFTER_COMMIT/AFTER_ROLLBACK/AFTER_COMPLETION"
            },
            {
              "id": "异步事件-9-5-2-d5",
              "tag": "注意",
              "desc": "异步失败不影响发布者需补偿机制(重试/死信/人工处理)"
            }
          ]
        },
        {
          "id": "事件传播机制-9-5-3",
          "tag": "事件传播机制",
          "desc": "父子ApplicationContext事件自动传播:子容器发布的事件会自动传播到父容器(父容器Listener也能收到子容器事件)。反向:父容器事件不会自动传播到子容器(需手动配置)。过滤:ContextRefreshedEvent在父子容器都会触发Listener需通过ApplicationContext来源判断只处理当前容器事件(event.getApplicationContext() == this.applicationContext)。Spring Cloud Bus:跨服务事件传播(RefreshRemoteEvent广播配置刷新/EnvironmentChangeEvent环境变更)",
          "details": [
            {
              "id": "事件传播机制-9-5-3-d0",
              "tag": "子→父",
              "desc": "子容器发布事件自动传播到父容器父容器Listener收到子事件"
            },
            {
              "id": "事件传播机制-9-5-3-d1",
              "tag": "父→子",
              "desc": "父容器事件不自动传播到子容器需手动publishEvent配置"
            },
            {
              "id": "事件传播机制-9-5-3-d2",
              "tag": "过滤策略",
              "desc": "event.getApplicationContext()==当前容器判断只处理本容器事件"
            },
            {
              "id": "事件传播机制-9-5-3-d3",
              "tag": "ContextRefreshedEvent",
              "desc": "父子容器都会触发需过滤避免重复处理"
            },
            {
              "id": "事件传播机制-9-5-3-d4",
              "tag": "Spring Cloud Bus",
              "desc": "跨服务事件传播/actuator/bus-refresh广播配置刷新"
            },
            {
              "id": "事件传播机制-9-5-3-d5",
              "tag": "微服务事件",
              "desc": "通过MQ(RabbitMQ/Kafka)传播事件跨服务异步通知"
            }
          ]
        }
      ]
    },
    {
      "id": "9-7-spring事务-9-6",
      "title": "9.7 Spring事务",
      "points": [
        {
          "id": "事务传播行为-9-6-0",
          "tag": "事务传播行为",
          "desc": "REQUIRED(默认,有事务加入当前无事务新建)。REQUIRES_NEW(挂起当前事务创建全新事务,内外事务独立回滚不影响)。NESTED(嵌套事务,Savepoint保存点,外回滚内跟着回滚,内回滚不影响外)。SUPPORTS(有事务加入无事务非事务运行)。NOT_SUPPORTED(挂起当前事务非事务运行)。MANDATORY(必须在已有事务中运行否则异常)。NEVER(绝不在事务中运行否则异常)",
          "details": [
            {
              "id": "事务传播行为-9-6-0-d0",
              "tag": "REQUIRED默认",
              "desc": "有事务加入当前事务无事务新建事务最常用保证同一事务内所有操作一致提交或回滚"
            },
            {
              "id": "事务传播行为-9-6-0-d1",
              "tag": "REQUIRES_NEW独立",
              "desc": "挂起当前事务创建全新事务内外独立内回滚不影响外适合日志记录/发通知等需独立提交的场景"
            },
            {
              "id": "事务传播行为-9-6-0-d2",
              "tag": "NESTED嵌套",
              "desc": "在当前事务内创建Savepoint保存点外回滚→内跟着回滚/内回滚→外不受影响类似子事务需DataSource支持"
            },
            {
              "id": "事务传播行为-9-6-0-d3",
              "tag": "SUPPORTS非事务",
              "desc": "有事务加入无事务以非事务方式执行适合查询方法不强制要求事务但有事务时参与保证一致性"
            },
            {
              "id": "事务传播行为-9-6-0-d4",
              "tag": "NOT_SUPPORTED挂起",
              "desc": "挂起当前事务以非事务方式执行适合非关键操作如发邮件/记日志避免事务膨胀超时"
            },
            {
              "id": "事务传播行为-9-6-0-d5",
              "tag": "MANDATORY强制",
              "desc": "必须在已有事务中运行否则抛IllegalTransactionStateException适合核心业务方法强制要求事务调用"
            },
            {
              "id": "事务传播行为-9-6-0-d6",
              "tag": "NEVER禁止",
              "desc": "绝不允许在事务中运行否则抛异常适合不需要事务的操作如只读查询强制保证不误用事务"
            }
          ]
        },
        {
          "id": "事务失效场景-9-6-1",
          "tag": "事务失效场景",
          "desc": "①方法不是public(Spring AOP代理基于CGLIB/JDK proxy,非public无法代理)②方法自调用(this.xxx()绕过代理,AOP不生效,注入自身或AopContext.currentProxy())③异常被吞掉(try-catch没throw,事务管理器不知道异常)④异常类型不对(默认rollbackFor=RuntimeException,checked exception不回滚,指定rollbackFor=Exception.class)⑤数据源未配置事务管理器(DataSourceTransactionManager)⑥@Transactional标注在接口上但Spring Boot JPA有时需在实现类",
          "details": [
            {
              "id": "事务失效场景-9-6-1-d0",
              "tag": "非public方法",
              "desc": "Spring AOP代理仅拦截public方法private/protected/package方法@Transactional无效CGLIB/JDK都无法代理非public"
            },
            {
              "id": "事务失效场景-9-6-1-d1",
              "tag": "自调用绕过代理",
              "desc": "同类内this.method()直接调用绕过AOP代理事务不生效解决方案:注入自身/@Lazy延迟注入/AopContext.currentProxy()(需exposeProxy=true)"
            },
            {
              "id": "事务失效场景-9-6-1-d2",
              "tag": "异常被吞",
              "desc": "try-catch捕获异常未throw事务管理器不知道异常不触发回滚必须在catch中re-throw或手动setRollbackOnly()"
            },
            {
              "id": "事务失效场景-9-6-1-d3",
              "tag": "异常类型不对",
              "desc": "默认rollbackFor=RuntimeExceptionunchecked异常才回滚checked(IOException等)不回滚建议显式指定rollbackFor=Exception.class覆盖所有异常"
            },
            {
              "id": "事务失效场景-9-6-1-d4",
              "tag": "未配置事务管理器",
              "desc": "未注册DataSourceTransactionManager导致@Transactional注解无实际事务支撑Spring Boot自动配置但多数据源需手动配置"
            },
            {
              "id": "事务失效场景-9-6-1-d5",
              "tag": "标注在接口上",
              "desc": "@Transactional标注在接口上时CGLIB代理基于类无法读到接口注解导致失效建议标注在实现类或方法上而非接口"
            },
            {
              "id": "事务失效场景-9-6-1-d6",
              "tag": "数据库引擎不支持",
              "desc": "MySQL MyISAM引擎不支持事务InnoDB才支持若表建在MyISAM上@Transactional完全不生效建表务必选InnoDB引擎"
            }
          ]
        },
        {
          "id": "事务隔离级别-9-6-2",
          "tag": "事务隔离级别",
          "desc": "READ_UNCOMMITTED(脏读) READ_COMMITTED(Oracle默认) REPEATABLE_READ(MySQL默认,SERIALIZABLE(串行)。MySQL InnoDB RR级别+MVCC实现可重复读(快照读)避免大部分幻读,当前读(for update/share)配合Next-KeyLock彻底防幻读。选择原则:大多数情况用默认RR即可,对并发要求不高RC也可,Serializable极少数场景",
          "details": [
            {
              "id": "事务隔离级别-9-6-2-d0",
              "tag": "READ_UNCOMMITTED",
              "desc": "最低隔离可读未提交数据存在脏读/不可重复读/幻读问题实际几乎不使用仅做理论参照"
            },
            {
              "id": "事务隔离级别-9-6-2-d1",
              "tag": "READ_COMMITTED(RC)",
              "desc": "Oracle/PostgreSQL默认只读已提交数据解决脏读但存在不可重复读(同一查询两次结果不同)和幻读"
            },
            {
              "id": "事务隔离级别-9-6-2-d2",
              "tag": "REPEATABLE_READ(RR)",
              "desc": "MySQL InnoDB默认解决脏读+不可重复读MVCC快照读保证同一事务内读一致大部分场景防幻读"
            },
            {
              "id": "事务隔离级别-9-6-2-d3",
              "tag": "SERIALIZABLE串行",
              "desc": "最高隔离完全串行执行锁表解决所有并发问题但性能极差仅用于强一致性要求场景如金融对账"
            },
            {
              "id": "事务隔离级别-9-6-2-d4",
              "tag": "MySQL RR+MVCC",
              "desc": "InnoDB RR级别通过MVCC(undo log版本链)实现快照读避免脏读/不可重复读当前读(for update)配合Next-KeyLock防幻读"
            },
            {
              "id": "事务隔离级别-9-6-2-d5",
              "tag": "Next-KeyLock防幻读",
              "desc": "RecordLock(行锁)+GapLock(间隙锁)组合=Next-KeyLock锁定索引记录及其间隙阻止其他事务在间隙插入新行彻底防幻读"
            },
            {
              "id": "事务隔离级别-9-6-2-d6",
              "tag": "选择原则",
              "desc": "大多数场景用MySQL默认RR即可并发高且容忍不可重复读可用RC追求强一致用SERIALIZABLE@Transactional(isolation=)可显式指定"
            }
          ]
        }
      ]
    },
    {
      "id": "9-8-spring校验与定时-9-7",
      "title": "9.8 Spring校验与定时",
      "points": [
        {
          "id": "beanvalidation-9-7-0",
          "tag": "Bean Validation",
          "desc": "@Valid(触发校验JSR-303标准标记方法参数或字段需校验)/@Validated(Spring扩展支持分组校验)/@NotNull(不允许null)/@NotEmpty(不允许null且字符串/集合/数组非空)/@NotBlank(不允许null且字符串去除空白后非空)/@Size(min,max)(字符串/集合/数组长度范围)/@Min/@Max(数值最小最大)/@Pattern(regexp)(正则匹配)/@Email(邮箱格式)/@Past/@Future(时间过去/未来)/@DecimalMin/@DecimalMax(小数范围)/@Positive/@Negative(正数/负数)",
          "details": [
            {
              "id": "beanvalidation-9-7-0-d0",
              "tag": "@Valid",
              "desc": "触发校验JSR-303标准标记方法参数或字段"
            },
            {
              "id": "beanvalidation-9-7-0-d1",
              "tag": "@Validated",
              "desc": "Spring扩展支持分组校验groups属性指定校验组"
            },
            {
              "id": "beanvalidation-9-7-0-d2",
              "tag": "@NotNull",
              "desc": "不允许null最基本校验所有类型适用"
            },
            {
              "id": "beanvalidation-9-7-0-d3",
              "tag": "@NotEmpty",
              "desc": "不允许null+非空(字符串/集合/数组长度>0)"
            },
            {
              "id": "beanvalidation-9-7-0-d4",
              "tag": "@NotBlank",
              "desc": "不允许null+去除空白后非空(仅字符串)最严格"
            },
            {
              "id": "beanvalidation-9-7-0-d5",
              "tag": "@Size/@Min/@Max/@Pattern/@Email/@Past/@Future:各类特定校验规则",
              "desc": "@Size限制字符串/集合长度范围;@Min/@Max限定数值边界;@Pattern正则匹配;@Email校验邮箱格式;@Past/@Future校验日期必须为过去/未来时间;均需配合@Valid触发"
            }
          ]
        },
        {
          "id": "分组校验-9-7-1",
          "tag": "分组校验",
          "desc": "@Validated(Group.class)指定校验组只执行该组的校验规则。定义:@interface CreateGroup{}/@interface UpdateGroup{}标记分组接口。使用:在字段上@NotNull(groups=CreateGroup.class)创建时校验/@Null(groups=UpdateGroup.class)更新时校验。Controller:@Validated(CreateGroup.class)创建接口/@Validated(UpdateGroup.class)更新接口。Default组:不指定groups的校验默认属于Default组/@Validated不指定组时只校验Default组。多组:@Validated({CreateGroup.class,Default.class})同时校验多组",
          "details": [
            {
              "id": "分组校验-9-7-1-d0",
              "tag": "分组接口",
              "desc": "@interface CreateGroup/@interface UpdateGroup空接口标记分组"
            },
            {
              "id": "分组校验-9-7-1-d1",
              "tag": "字段标注",
              "desc": "@NotNull(groups=CreateGroup.class)指定属于哪个校验组"
            },
            {
              "id": "分组校验-9-7-1-d2",
              "tag": "Controller",
              "desc": "@Validated(CreateGroup.class)指定当前校验哪个组"
            },
            {
              "id": "分组校验-9-7-1-d3",
              "tag": "Default组",
              "desc": "不指定groups默认属于Default组不指定组只校验Default"
            },
            {
              "id": "分组校验-9-7-1-d4",
              "tag": "多组",
              "desc": "@Validated({CreateGroup.class,Default.class})同时校验多组"
            },
            {
              "id": "分组校验-9-7-1-d5",
              "tag": "分组优势",
              "desc": "不同场景不同校验规则创建时必填/更新时可选灵活控制"
            }
          ]
        },
        {
          "id": "自定义校验-9-7-2",
          "tag": "自定义校验",
          "desc": "步骤:①定义注解@Constraint(validatedBy=MobileValidator.class)包含message/groups/payload三属性②实现ConstraintValidator<Mobile,String>覆盖initialize(初始化注解参数)+isValid(校验逻辑返回boolean)③注解使用@Mobile(message=手机号格式错误)标注字段④Controller参数加@Valid触发校验。ConstraintValidator由Spring管理可注入Service调用数据库校验(如校验用户名唯一性)。常用自定义:手机号/身份证/枚举值/跨字段校验(密码确认)",
          "details": [
            {
              "id": "自定义校验-9-7-2-d0",
              "tag": "@Constraint",
              "desc": "定义校验注解validatedBy指定验证器类"
            },
            {
              "id": "自定义校验-9-7-2-d1",
              "tag": "message/groups/payload",
              "desc": "注解三属性必须包含缺一不可（message/groups/payload的详细说明：自定义校验中关于message/groups/payload的内容）"
            },
            {
              "id": "自定义校验-9-7-2-d2",
              "tag": "ConstraintValidator",
              "desc": "实现initialize+isValid两个方法返回boolean"
            },
            {
              "id": "自定义校验-9-7-2-d3",
              "tag": "Spring管理",
              "desc": "ConstraintValidator由容器管理可@Autowired注入Service"
            },
            {
              "id": "自定义校验-9-7-2-d4",
              "tag": "数据库校验",
              "desc": "注入Service调用数据库验证用户名唯一性等业务规则"
            },
            {
              "id": "自定义校验-9-7-2-d5",
              "tag": "常用自定义",
              "desc": "手机号/身份证/枚举值/跨字段密码确认校验"
            }
          ]
        },
        {
          "id": "定时任务-9-7-3",
          "tag": "定时任务",
          "desc": "@EnableScheduling(启动类开启定时任务支持)+@Scheduled(方法标记定时执行)。cron表达式7字段:秒(0-59)/分(0-59)/时(0-23)/日(1-31)/月(1-12)/周(1-7)/年(可选)。常用:0 0 2 * * *每天2点/0 */5 * * * *每5分钟/0 0 0 1 * *每月1号零点。fixedRate(固定频率上次开始后间隔N毫秒无论是否完成)/fixedDelay(固定延迟上次完成后间隔N毫秒等执行完)/initialDelay(首次延迟N毫秒后开始)。注意:默认单线程SchedulingConfigurer配置线程池/分布式环境用XXL-Job避免重复执行",
          "details": [
            {
              "id": "定时任务-9-7-3-d0",
              "tag": "@EnableScheduling",
              "desc": "启动类开启定时任务支持Spring自动调度"
            },
            {
              "id": "定时任务-9-7-3-d1",
              "tag": "@Scheduled(cron)",
              "desc": "cron表达式7字段秒分时日月周(年可选)精确调度"
            },
            {
              "id": "定时任务-9-7-3-d2",
              "tag": "fixedRate",
              "desc": "固定频率上次开始后N毫秒执行不管上次是否完成"
            },
            {
              "id": "定时任务-9-7-3-d3",
              "tag": "fixedDelay",
              "desc": "固定延迟上次完成后等N毫秒再执行保证间隔"
            },
            {
              "id": "定时任务-9-7-3-d4",
              "tag": "initialDelay",
              "desc": "首次延迟N毫秒后开始适用于启动后预热场景"
            },
            {
              "id": "定时任务-9-7-3-d5",
              "tag": "分布式",
              "desc": "默认单线程多任务串行/生产用XXL-Job分布式调度避免重复执行"
            }
          ]
        },
        {
          "id": "异步调用-9-7-4",
          "tag": "异步调用",
          "desc": "@EnableAsync(启动类开启异步支持)+@Async(方法标记异步执行)。原理:Spring AOP代理拦截@Async方法提交到TaskExecutor线程池异步执行。自定义线程池:配置ThreadPoolTaskExecutor(核心数/最大数/队列/拒绝策略)+@Async(customExecutor)指定线程池。返回值:Future/CompletableFuture/ListenableFuture接收异步结果。异常处理:实现AsyncUncaughtExceptionHandler处理异步方法未捕获异常/@Async方法内try-catch自行处理。注意:@Async方法必须是public/不能同类内部调用(绕过代理)/需Spring管理Bean",
          "details": [
            {
              "id": "异步调用-9-7-4-d0",
              "tag": "@EnableAsync",
              "desc": "启动类开启异步支持Spring创建AOP代理拦截异步方法"
            },
            {
              "id": "异步调用-9-7-4-d1",
              "tag": "@Async",
              "desc": "方法标记异步执行Spring代理提交到TaskExecutor线程池"
            },
            {
              "id": "异步调用-9-7-4-d2",
              "tag": "自定义线程池",
              "desc": "ThreadPoolTaskExecutor+@Async(customExecutor)指定"
            },
            {
              "id": "异步调用-9-7-4-d3",
              "tag": "返回值",
              "desc": "CompletableFuture/Future接收异步结果get()获取阻塞等待"
            },
            {
              "id": "异步调用-9-7-4-d4",
              "tag": "AsyncUncaughtExceptionHandler",
              "desc": "处理异步方法未捕获异常全局配置"
            },
            {
              "id": "异步调用-9-7-4-d5",
              "tag": "注意",
              "desc": "必须public方法/不能同类内调/需Spring管理/不能static/final"
            }
          ]
        }
      ]
    },
    {
      "id": "9-9-springmvc-9-8",
      "title": "9.9 SpringMVC",
      "points": [
        {
          "id": "dispatcherservlet流程-9-8-0",
          "tag": "DispatcherServlet流程",
          "desc": "客户端请求→DispatcherServlet前端控制器→HandlerMapping查找Handler→HandlerAdapter执行Handler→Controller处理→返回ModelAndView→ViewResolver解析视图→View渲染响应。核心:DispatcherServlet(中央调度)/HandlerMapping(路由映射)/HandlerAdapter(适配执行)/ViewResolver(视图解析)。@RequestMapping/@GetMapping/@PostMapping映射URL到方法",
          "details": [
            {
              "id": "dispatcherservlet流程-9-8-0-d0",
              "tag": "请求",
              "desc": "请求→DispatcherServlet→HandlerMapping→HandlerAdapter→Controller"
            },
            {
              "id": "dispatcherservlet流程-9-8-0-d1",
              "tag": "返回ModelAndView",
              "desc": "返回ModelAndView→ViewResolver→View渲染"
            },
            {
              "id": "dispatcherservlet流程-9-8-0-d2",
              "tag": "@RequestMapping映射URL到Controller方法",
              "desc": "将HTTP请求URL映射到具体Controller处理方法,支持method/path/params/headers等属性细粒度匹配;@GetMapping/@PostMapping等是简化特化版本,底层均基于RequestMapping"
            },
            {
              "id": "dispatcherservlet流程-9-8-0-d3",
              "tag": "DispatcherServlet",
              "desc": "DispatcherServlet是SpringMVC核心入口"
            }
          ]
        },
        {
          "id": "请求参数绑定-9-8-1",
          "tag": "请求参数绑定",
          "desc": "SpringMVC自动将请求参数绑定到方法参数:@RequestParam(查询参数)/@PathVariable(路径变量)/@RequestBody(JSON请求体→对象)/@RequestHeader(请求头)/@CookieValue(Cookie值)/@ModelAttribute(表单对象)。@RequestBody默认用Jackson反序列化。参数校验:@Valid+@NotNull/@Size/@Pattern等Bean Validation注解",
          "details": [
            {
              "id": "请求参数绑定-9-8-1-d0",
              "tag": "@RequestParam",
              "desc": "URL查询参数name=value"
            },
            {
              "id": "请求参数绑定-9-8-1-d1",
              "tag": "@PathVariable",
              "desc": "路径参数/users/{id}"
            },
            {
              "id": "请求参数绑定-9-8-1-d2",
              "tag": "@RequestBody",
              "desc": "JSON请求体→Java对象(Jackson)"
            },
            {
              "id": "请求参数绑定-9-8-1-d3",
              "tag": "@ModelAttribute",
              "desc": "表单数据自动绑定对象（@ModelAttribute的详细说明：请求参数绑定中关于@ModelAttribute的内容）"
            },
            {
              "id": "请求参数绑定-9-8-1-d4",
              "tag": "参数校验",
              "desc": "@Valid+@NotNull/@Size/@Pattern"
            }
          ]
        },
        {
          "id": "响应处理-9-8-2",
          "tag": "响应处理",
          "desc": "@ResponseBody返回JSON(Jackson序列化)/@RestController=@Controller+@ResponseBody/ResponseEntity自定义状态码和头。统一响应封装:{code,message,data}。文件下载:返回Resource+设置Content-Disposition头。文件上传:MultipartFile接收+transferTo存储。静态资源:默认/static/public/resources目录+WebMvcConfigurer自定义",
          "details": [
            {
              "id": "响应处理-9-8-2-d0",
              "tag": "@ResponseBody",
              "desc": "返回JSON(Jackson自动序列化)"
            },
            {
              "id": "响应处理-9-8-2-d1",
              "tag": "@RestController",
              "desc": "@Controller+@ResponseBody组合"
            },
            {
              "id": "响应处理-9-8-2-d2",
              "tag": "ResponseEntity<T>",
              "desc": "自定义状态码+头+体（ResponseEntity<T>的详细说明：响应处理中关于ResponseEntity<T>的内容）"
            },
            {
              "id": "响应处理-9-8-2-d3",
              "tag": "统一响应格式",
              "desc": "{code,message,data}"
            }
          ]
        },
        {
          "id": "拦截器与过滤器-9-8-3",
          "tag": "拦截器与过滤器",
          "desc": "Filter(Servlet规范,doFilter链式调用,拦截请求/响应,执行顺序按注册顺序)/Interceptor(SpringMVC,HandlerInterceptor三个钩子preHandle/postHandle/afterCompletion,按注册顺序)。Filter在Servlet之前,Interceptor在Handler之前。Filter适合编码转换/跨域/安全/XSS过滤,Interceptor适合权限校验/日志/参数预处理",
          "details": [
            {
              "id": "拦截器与过滤器-9-8-3-d0",
              "tag": "Filter",
              "desc": "Servlet规范,doFilter(),请求进入Servlet前"
            },
            {
              "id": "拦截器与过滤器-9-8-3-d1",
              "tag": "Interceptor",
              "desc": "SpringMVC,preHandle/postHandle/afterCompletion"
            },
            {
              "id": "拦截器与过滤器-9-8-3-d2",
              "tag": "执行顺序",
              "desc": "Filter→Servlet→Interceptor→Handler"
            },
            {
              "id": "拦截器与过滤器-9-8-3-d3",
              "tag": "Filter适合",
              "desc": "编码/XSS/跨域/压缩（Filter适合的详细说明：拦截器与过滤器中关于Filter适合的内容）"
            },
            {
              "id": "拦截器与过滤器-9-8-3-d4",
              "tag": "Interceptor适合",
              "desc": "登录校验/权限/日志（Interceptor适合的详细说明：拦截器与过滤器中关于Interceptor适合的内容）"
            }
          ]
        },
        {
          "id": "全局异常处理-9-8-4",
          "tag": "全局异常处理",
          "desc": "@RestControllerAdvice+@ExceptionHandler统一处理Controller层异常。按异常类型匹配最精确的@ExceptionHandler方法。业务异常ServiceBusinessException返回友好提示,系统异常返回500+日志记录。自定义异常类继承RuntimeException。异常处理顺序:精确类型优先>父类型>兜底Exception",
          "details": [
            {
              "id": "全局异常处理-9-8-4-d0",
              "tag": "@RestControllerAdvice全局异常处理器",
              "desc": "组合@ControllerAdvice+@ResponseBody,扫描所有Controller并统一拦截异常,返回值自动序列化为JSON;通过basePackages属性可限定扫描范围,避免影响无关模块"
            },
            {
              "id": "全局异常处理-9-8-4-d1",
              "tag": "@ExceptionHandler(Exception.class)按类型匹配",
              "desc": "声明方法参数为具体异常类型即可精确匹配,如@ExceptionHandler(BizException.class)仅处理业务异常;@ExceptionHandler(Exception.class)作为兜底捕获所有未匹配异常"
            },
            {
              "id": "全局异常处理-9-8-4-d2",
              "tag": "ServiceBusinessException",
              "desc": "ServiceBusinessException→友好业务提示"
            },
            {
              "id": "全局异常处理-9-8-4-d3",
              "tag": "系统异常→500+详细日志",
              "desc": "系统异常→500+详细日志记录"
            },
            {
              "id": "全局异常处理-9-8-4-d4",
              "tag": "精确类型优先>父类型>兜底Exception",
              "desc": "Spring异常匹配遵循就近原则:最具体的异常子类Handler优先调用,父类型次之,Exception.class最后兜底;若同一类存在多个匹配Handler则取继承链最深的那个"
            }
          ]
        }
      ]
    },
    {
      "id": "9-10-mybatis-9-9",
      "title": "9.10 MyBatis",
      "points": [
        {
          "id": "核心架构-9-9-0",
          "tag": "核心架构",
          "desc": "MyBatis是半自动ORM框架:SQL写在XML或注解中,框架负责参数映射+结果映射+执行SQL。核心组件:SqlSessionFactory(创建SqlSession,单例重量级)/SqlSession(执行SQL,线程不安全,方法级创建用完关闭)/Executor(执行器Simple默认/Reuse复用预处理/Batch批量)/MappedStatement(映射SQL标签+参数+结果)",
          "details": [
            {
              "id": "核心架构-9-9-0-d0",
              "tag": "SqlSessionFactory",
              "desc": "创建SqlSession(单例重量级对象)"
            },
            {
              "id": "核心架构-9-9-0-d1",
              "tag": "SqlSession",
              "desc": "执行SQL的会话(线程不安全用完即关)"
            },
            {
              "id": "核心架构-9-9-0-d2",
              "tag": "Executor",
              "desc": "Simple默认/Reuse复用预处理/Batch批量"
            },
            {
              "id": "核心架构-9-9-0-d3",
              "tag": "MappedStatement",
              "desc": "每个SQL标签对应一个映射对象"
            }
          ]
        },
        {
          "id": "与区别-9-9-1",
          "tag": "#{}与${}区别",
          "desc": "#{}预编译参数占位符(?),安全防SQL注入,MyBatis自动类型处理和加引号。${}字符串直接替换,不预编译,有SQL注入风险,用于动态列名/表名/ORDER BY等不能预编译的位置。安全原则:能用#{}就用#{},必须用${}的场景要严格校验输入合法性",
          "details": [
            {
              "id": "与区别-9-9-1-d0",
              "tag": "#{}",
              "desc": "预编译占位符(?),防SQL注入,自动类型处理"
            },
            {
              "id": "与区别-9-9-1-d1",
              "tag": "${}",
              "desc": "直接字符串替换,不预编译,有注入风险"
            },
            {
              "id": "与区别-9-9-1-d2",
              "tag": "安全原则",
              "desc": "能用#{}就用#{},必须${}要严格校验"
            },
            {
              "id": "与区别-9-9-1-d3",
              "tag": "${}适用",
              "desc": "动态表名/列名/ORDER BY/分组字段"
            }
          ]
        },
        {
          "id": "一级缓存与二级缓存-9-9-2",
          "tag": "一级缓存与二级缓存",
          "desc": "一级缓存(SqlSession级别默认开启):同一SqlSession内相同SQL+参数命中缓存不查DB,commit/close/任何update操作清空。二级缓存(Mapper namespace级别需手动开启):跨SqlSession共享,序列化存储,实体类必须实现Serializable。多表关联查询有缓存脏数据风险建议谨慎使用或禁用",
          "details": [
            {
              "id": "一级缓存与二级缓存-9-9-2-d0",
              "tag": "一级缓存",
              "desc": "SqlSession级别默认开启"
            },
            {
              "id": "一级缓存与二级缓存-9-9-2-d1",
              "tag": "同一SqlSession+相同SQL+参数",
              "desc": "同一SqlSession+相同SQL+参数→命中缓存"
            },
            {
              "id": "一级缓存与二级缓存-9-9-2-d2",
              "tag": "commit/close/update操作清空一级缓存",
              "desc": "SqlSession级别缓存,同一Session内相同SQL+参数命中缓存免查DB;但执行任何INSERT/UPDATE/DELETE操作或commit/close后缓存立即清空,防止脏读保证数据一致性"
            },
            {
              "id": "一级缓存与二级缓存-9-9-2-d3",
              "tag": "二级缓存",
              "desc": "Mapper namespace级别需手动开启"
            },
            {
              "id": "一级缓存与二级缓存-9-9-2-d4",
              "tag": "实体类必须",
              "desc": "实体类必须实现Serializable(序列化存储)"
            },
            {
              "id": "一级缓存与二级缓存-9-9-2-d5",
              "tag": "多表关联查询可",
              "desc": "多表关联查询可能产生脏数据需谨慎"
            }
          ]
        },
        {
          "id": "动态sql-9-9-3",
          "tag": "动态SQL",
          "desc": "if/where/set/foreach/choose(when otherwise)/trim/sql(include)标签组合灵活拼接SQL。if条件判断/where智能去除多余AND/set智能去除多余逗号只更新非null字段/foreach遍历IN列表/choose类似switch-case/trim自定义前后缀。OGNL表达式取值:parameter中属性直接用属性名",
          "details": [
            {
              "id": "动态sql-9-9-3-d0",
              "tag": "<if test='name!=null'>",
              "desc": "条件判断动态拼接（<if test='name!=null'>的详细说明：动态SQL中关于<if test='name!=null'>的内容）"
            },
            {
              "id": "动态sql-9-9-3-d1",
              "tag": "<where>",
              "desc": "智能去除多余AND/OR前缀（<where>的详细说明：动态SQL中关于<where>的内容）"
            },
            {
              "id": "动态sql-9-9-3-d2",
              "tag": "<set>",
              "desc": "智能去除多余逗号,只更新非null字段"
            },
            {
              "id": "动态sql-9-9-3-d3",
              "tag": "<foreach>",
              "desc": "IN查询遍历集合（<foreach>的详细说明：动态SQL中关于<foreach>的内容）"
            },
            {
              "id": "动态sql-9-9-3-d4",
              "tag": "<choose><when>...<otherwise>",
              "desc": "switch-case逻辑（<choose><when>...<otherwise>的详细说明：动态SQL中关于<choose><when>...<otherwise>的内容）"
            }
          ]
        },
        {
          "id": "resultmap映射-9-9-4",
          "tag": "ResultMap映射",
          "desc": "resultMap解决列名与属性名不一致+复杂关联映射。id标签映射主键/result映射普通列/association一对一嵌套(可通过select属性实现N+1查询或join一次查出)/collection一对多嵌套。discriminator鉴别器根据某列值决定用哪个resultMap。延迟加载:association/collection设fetchType=lazy按需加载关联对象减少无效查询",
          "details": [
            {
              "id": "resultmap映射-9-9-4-d0",
              "tag": "resultMap",
              "desc": "列名→属性名映射(解决不一致)"
            },
            {
              "id": "resultmap映射-9-9-4-d1",
              "tag": "id",
              "desc": "主键映射 / result: 普通列映射"
            },
            {
              "id": "resultmap映射-9-9-4-d2",
              "tag": "association",
              "desc": "一对一嵌套(N+1或join)"
            },
            {
              "id": "resultmap映射-9-9-4-d3",
              "tag": "collection",
              "desc": "一对多嵌套映射（collection的详细说明：ResultMap映射中关于collection的内容）"
            },
            {
              "id": "resultmap映射-9-9-4-d4",
              "tag": "discriminator",
              "desc": "根据列值决定用哪个resultMap"
            },
            {
              "id": "resultmap映射-9-9-4-d5",
              "tag": "fetchType=lazy",
              "desc": "延迟加载按需查关联（fetchType=lazy的详细说明：ResultMap映射中关于fetchType=lazy的内容）"
            }
          ]
        },
        {
          "id": "mybatis与hibernate对比-9-9-5",
          "tag": "MyBatis与Hibernate对比",
          "desc": "MyBatis半自动(SQL自己写灵活度高优化空间大)/Hibernate全自动(HQL/Criteria自动生成SQL开发效率高但优化难)。MyBatis适合:业务复杂需精细优化SQL/DBA参与SQL审核/多表关联灵活查询。Hibernate适合:业务简单标准CRUD/快速开发原型/不关心SQL细节。国内主流选择MyBatis(业务复杂需SQL控制场景)",
          "details": [
            {
              "id": "mybatis与hibernate对比-9-9-5-d0",
              "tag": "MyBatis半自动",
              "desc": "SQL自己写,灵活可优化（MyBatis半自动的详细说明：MyBatis与Hibernate对比中关于MyBatis半自动的内容）"
            },
            {
              "id": "mybatis与hibernate对比-9-9-5-d1",
              "tag": "Hibernate全自动",
              "desc": "HQL自动生成SQL（Hibernate全自动的详细说明：MyBatis与Hibernate对比中关于Hibernate全自动的内容）"
            },
            {
              "id": "mybatis与hibernate对比-9-9-5-d2",
              "tag": "MyBatis优势",
              "desc": "SQL优化空间大,DBA可审核"
            },
            {
              "id": "mybatis与hibernate对比-9-9-5-d3",
              "tag": "Hibernate优势",
              "desc": "开发效率高,减少SQL编写（Hibernate优势的详细说明：MyBatis与Hibernate对比中关于Hibernate优势的内容）"
            },
            {
              "id": "mybatis与hibernate对比-9-9-5-d4",
              "tag": "国内主流",
              "desc": "MyBatis(业务复杂需SQL控制)"
            }
          ]
        }
      ]
    },
    {
      "id": "9-11-mybatis-plus-9-10",
      "title": "9.11 MyBatis-Plus",
      "points": [
        {
          "id": "核心特性-9-10-0",
          "tag": "核心特性",
          "desc": "MyBatis-Plus(MP)是MyBatis增强工具只做增强不做改变。核心功能:通用CRUD(BaseMapper)/代码生成器/条件构造器(Wrapper)/分页插件/乐观锁插件/逻辑删除/自动填充/多租户插件。基于MyBatis无缝集成零侵入,所有MyBatis功能照常使用",
          "details": [
            {
              "id": "核心特性-9-10-0-d0",
              "tag": "BaseMapper",
              "desc": "通用CRUD无需写XML,自带select/insert/update/delete"
            },
            {
              "id": "核心特性-9-10-0-d1",
              "tag": "Wrapper",
              "desc": "条件构造器链式调用QueryWrapper/LambdaQueryWrapper"
            },
            {
              "id": "核心特性-9-10-0-d2",
              "tag": "分页插件",
              "desc": "Page对象+PaginationInterceptor自动分页"
            },
            {
              "id": "核心特性-9-10-0-d3",
              "tag": "代码生成器",
              "desc": "AutoGenerator根据表结构生成全套代码"
            },
            {
              "id": "核心特性-9-10-0-d4",
              "tag": "零侵入",
              "desc": "只增强不改变MyBatis原有功能"
            }
          ]
        },
        {
          "id": "wrapper条件构造器-9-10-1",
          "tag": "Wrapper条件构造器",
          "desc": "QueryWrapper/LambdaQueryWrapper链式构建WHERE条件。eq(=)/ne(≠)/gt(>)/lt(<)/ge(≥)/le(≤)/like(模糊)/in/between/orderBy/groupBy/having。LambdaQueryWrapper用Lambda表达式引用列名免硬编码防误写。UpdateWrapper支持set()更新指定列。条件优先级:先where再and/or嵌套",
          "details": [
            {
              "id": "wrapper条件构造器-9-10-1-d0",
              "tag": "eq/ne/gt/lt/ge/le",
              "desc": "等于/不等于/大于等比较（eq/ne/gt/lt/ge/le的详细说明：Wrapper条件构造器中关于eq/ne/gt/lt/ge/le的内容）"
            },
            {
              "id": "wrapper条件构造器-9-10-1-d1",
              "tag": "like/likeLeft/likeRight",
              "desc": "模糊查询(全/左/右)（like/likeLeft/likeRight的详细说明：Wrapper条件构造器中关于like/likeLeft/likeRight的内容）"
            },
            {
              "id": "wrapper条件构造器-9-10-1-d2",
              "tag": "in/notIn/between",
              "desc": "范围查询（in/notIn/between的详细说明：Wrapper条件构造器中关于in/notIn/between的内容）"
            },
            {
              "id": "wrapper条件构造器-9-10-1-d3",
              "tag": "LambdaQueryWrapper",
              "desc": "Lambda引用列名防硬编码（LambdaQueryWrapper的详细说明：Wrapper条件构造器中关于LambdaQueryWrapper的内容）"
            },
            {
              "id": "wrapper条件构造器-9-10-1-d4",
              "tag": "UpdateWrapper.set()",
              "desc": "更新指定列（UpdateWrapper.set()的详细说明：Wrapper条件构造器中关于UpdateWrapper.set()的内容）"
            }
          ]
        },
        {
          "id": "分页与乐观锁-9-10-2",
          "tag": "分页与乐观锁",
          "desc": "分页:配置MybatisPlusInterceptor+PaginationInnerInterceptor→new Page(当前页,每页大小)→BaseMapper.selectPage(page,wrapper)→page.getRecords()当前页数据/page.getTotal()总记录数。乐观锁:@Version注解字段+OptimisticLockerInnerInterceptor→update时自动version=version+1 WHERE version=旧值保证并发安全",
          "details": [
            {
              "id": "分页与乐观锁-9-10-2-d0",
              "tag": "MybatisPlusInterceptor配置分页插件",
              "desc": "注册MybatisPlusInterceptor并添加PaginationInnerInterceptor分页拦截器,拦截查询SQL自动拼接LIMIT/OFFSET子句;需指定DbType数据库类型如MySQL/Oracle以生成对应方言"
            },
            {
              "id": "分页与乐观锁-9-10-2-d1",
              "tag": "Page<Entity>",
              "desc": "current+size+records+total"
            },
            {
              "id": "分页与乐观锁-9-10-2-d2",
              "tag": "selectPage(page,wrapper)自动加分页SQL",
              "desc": "传入Page对象和QueryWrapper,MP拦截器自动在原SQL后拼接LIMIT offset,size分页语句,并额外执行COUNT查询获取总记录数;Page.getRecords()返回当前页数据,Page.getTotal()返回总数"
            },
            {
              "id": "分页与乐观锁-9-10-2-d3",
              "tag": "@Version字段",
              "desc": "乐观锁版本号自动+1（@Version字段的详细说明：分页与乐观锁中关于@Version字段的内容）"
            },
            {
              "id": "分页与乐观锁-9-10-2-d4",
              "tag": "WHERE version=旧值保证并发更新安全",
              "desc": "@Version注解字段配合OptimisticLockerInnerInterceptor,更新时自动在WHERE条件中加入version=旧值且SET version=旧值+1,若version不匹配则更新0行,抛异常提示并发冲突"
            }
          ]
        },
        {
          "id": "逻辑删除与自动填充-9-10-3",
          "tag": "逻辑删除与自动填充",
          "desc": "逻辑删除:@TableLogic注解+logicDeleteValue/logicNotDeleteValue配置→DELETE操作变为UPDATE SET deleted=1→查询自动WHERE deleted=0过滤已删数据。自动填充:@TableField(fill=FieldFill.INSERT/INSERT_UPDATE)注解+实现MetaObjectHandler的insertFill/updateFill方法→创建时间/更新时间等字段自动填充无需手动设值",
          "details": [
            {
              "id": "逻辑删除与自动填充-9-10-3-d0",
              "tag": "@TableLogic",
              "desc": "逻辑删除字段注解（@TableLogic的详细说明：逻辑删除与自动填充中关于@TableLogic的内容）"
            },
            {
              "id": "逻辑删除与自动填充-9-10-3-d1",
              "tag": "DELETE→UPDATE SET deleted=1逻辑删除不真删",
              "desc": "@TableLogic注解标记逻辑删除字段,DELETE操作被拦截改写为UPDATE SET deleted=1,数据物理上仍保留;配合logicDeleteValue/logicNotDeleteValue自定义删除/未删除标识值"
            },
            {
              "id": "逻辑删除与自动填充-9-10-3-d2",
              "tag": "SELECT自动WHERE deleted=0过滤已删数据",
              "desc": "逻辑删除字段使所有查询SQL自动追加WHERE deleted=0条件过滤已删除记录,无需手动写过滤条件;但自定义SQL和JOIN查询需开发者自行添加deleted=0过滤否则可能查到脏数据"
            },
            {
              "id": "逻辑删除与自动填充-9-10-3-d3",
              "tag": "@TableField(fill",
              "desc": "FieldFill.INSERT): 创建时填充"
            },
            {
              "id": "逻辑删除与自动填充-9-10-3-d4",
              "tag": "MetaObjectHandler",
              "desc": "insertFill/updateFill自动设值"
            },
            {
              "id": "逻辑删除与自动填充-9-10-3-d5",
              "tag": "填充字段",
              "desc": "createTime/updateTime/createBy等"
            }
          ]
        },
        {
          "id": "代码生成器-9-10-4",
          "tag": "代码生成器",
          "desc": "AutoGenerator根据数据库表结构自动生成Entity/Mapper/MapperXML/Service/ServiceImpl/Controller全套代码。配置:GlobalConfig(输出路径/作者/是否覆盖)/DataSourceConfig(数据库连接)/PackageConfig(包名)/StrategyConfig(表名前缀去除/命名策略/Lombok/RestController)。支持模板引擎自定义生成模板,大幅提升开发效率",
          "details": [
            {
              "id": "代码生成器-9-10-4-d0",
              "tag": "AutoGenerator快速",
              "desc": "AutoGenerator快速生成全套代码"
            },
            {
              "id": "代码生成器-9-10-4-d1",
              "tag": "GlobalConfig",
              "desc": "输出路径/作者/文件是否覆盖（GlobalConfig的详细说明：代码生成器中关于GlobalConfig的内容）"
            },
            {
              "id": "代码生成器-9-10-4-d2",
              "tag": "DataSourceConfig",
              "desc": "数据库URL/用户名/密码（DataSourceConfig的详细说明：代码生成器中关于DataSourceConfig的内容）"
            },
            {
              "id": "代码生成器-9-10-4-d3",
              "tag": "PackageConfig",
              "desc": "parent包名/entity/mapper/service/controller"
            },
            {
              "id": "代码生成器-9-10-4-d4",
              "tag": "StrategyConfig",
              "desc": "表前缀去除/Lombok/RestController"
            },
            {
              "id": "代码生成器-9-10-4-d5",
              "tag": "支持模板引擎Freemarker/Velocity自定义代码生成模板",
              "desc": "AutoGenerator内置Freemarker和Velocity模板引擎,可自定义Entity/Mapper/Service/Controller等生成模板,按项目规范调整输出格式;配合StrategyConfig设定Lombok/RestController等生成策略"
            }
          ]
        },
        {
          "id": "多租户与sql注入器-9-10-5",
          "tag": "多租户与SQL注入器",
          "desc": "多租户:TenantLineHandler实现getTenantId/getTableName/ignoreTable→TenantLineInnerInterceptor自动在SQL中加tenant_id=当前租户条件实现数据隔离。SQL注入器:自定义通用方法extends AbstractMethod+注册到DefaultSqlInjector→所有Mapper自动继承自定义方法。ISqlInjector批量注入通用SQL方法(如insertBatch批量插入)",
          "details": [
            {
              "id": "多租户与sql注入器-9-10-5-d0",
              "tag": "TenantLineHandler",
              "desc": "获取租户ID+忽略表名单（TenantLineHandler的详细说明：多租户与SQL注入器中关于TenantLineHandler的内容）"
            },
            {
              "id": "多租户与sql注入器-9-10-5-d1",
              "tag": "SQL自动加AND tenant_id=X条件数据隔离",
              "desc": "TenantLineInnerInterceptor拦截所有SQL自动拼接AND tenant_id=当前租户ID,实现多租户数据隔离;通过TenantLineHandler.ignoreTable()排除无需隔离的表如公共配置表"
            },
            {
              "id": "多租户与sql注入器-9-10-5-d2",
              "tag": "ignoreTable",
              "desc": "忽略不需要租户隔离的表（ignoreTable的详细说明：多租户与SQL注入器中关于ignoreTable的内容）"
            },
            {
              "id": "多租户与sql注入器-9-10-5-d3",
              "tag": "SqlInjector",
              "desc": "注入通用SQL方法到BaseMapper"
            },
            {
              "id": "多租户与sql注入器-9-10-5-d4",
              "tag": "AbstractMethod",
              "desc": "自定义通用方法(如insertBatch)"
            },
            {
              "id": "多租户与sql注入器-9-10-5-d5",
              "tag": "批量",
              "desc": "批量注册自定义方法到所有Mapper"
            }
          ]
        },
        {
          "id": "saas系统与多租户架构深入-9-10-6",
          "tag": "SaaS系统与多租户架构深入",
          "desc": "SaaS(Software as a Service)多租户系统核心挑战:数据隔离(共享数据库+租户字段隔离/共享数据库+独立Schema/独立数据库三级模型)、租户定制(功能开关+配置差异化+UI主题)、计费与配额(订阅模型+用量计费+资源限额)、租户生命周期(注册→配置→使用→升级→降级→注销数据回收)",
          "details": [
            {
              "id": "saas系统与多租户架构深入-9-10-6-d0",
              "tag": "SaaS多租户隔离模型",
              "desc": "三级隔离:①独立数据库(每个租户一个DB,隔离最强成本最高,适合金融/医疗合规要求);②共享数据库独立Schema(同一DB不同Schema,PostgreSQL/MySQL逻辑库,中等隔离中等成本);③共享数据库共享表(所有租户同一表用tenant_id字段区分,MP TenantLineInterceptor自动注入,成本最低灵活性最高但需防止租户数据泄漏)"
            },
            {
              "id": "saas系统与多租户架构深入-9-10-6-d1",
              "tag": "MyBatis-Plus多租户实战",
              "desc": "TenantLineInnerInterceptor拦截所有SQL自动拼接tenant_id条件;实现TenantLineHandler接口:getTenantId()从上下文获取当前租户ID,getTableName()返回需隔离的表名,ignoreTable()排除公共表(如sys_config/sys_dict);多租户+分页Interceptor注册顺序:MultiTenant→Pagination→OptimisticLocker;新增数据自动填充tenant_id(TenantLineHandler.getTenantId())"
            },
            {
              "id": "saas系统与多租户架构深入-9-10-6-d2",
              "tag": "租户定制与功能开关",
              "desc": "①功能开关(Feature Flag):租户订阅不同功能包(基础版/专业版/旗舰版),sys_tenant_feature表存储{tenantId→featureCode→enabled},Service层查开关决定是否执行;②配置差异化:sys_tenant_config存储租户级配置覆盖默认值(Logo/主题色/字段映射);③UI定制:租户级CSS+自定义字段+报表模板"
            },
            {
              "id": "saas系统与多租户架构深入-9-10-6-d3",
              "tag": "计费与配额管理",
              "desc": "①订阅模型:月/年订阅+功能包(基础/专业/旗舰),sys_subscription表管理到期时间+自动续费;②用量计费:API调用次数/存储空间/用户数等按量计费,用量数据通过拦截器/日志采集;③资源配额:每个租户设置用户数上限/存储配额/并发限制,超配额自动限流+提醒升级;④账单:月度自动生成账单+对账+发票"
            },
            {
              "id": "saas系统与多租户架构深入-9-10-6-d4",
              "tag": "租户生命周期管理",
              "desc": "①注册→试用:自动创建租户数据(初始化Schema/配置/默认管理员),提供试用期(14/30天);②试用→付费:升级功能包+数据保留无缝过渡;③降级:禁用高级功能但保留数据(只读/限制),提示重新订阅;④注销:软删除租户数据保留30天→到期硬删除+物理清理(数据库/缓存/OSS);⑤迁移:租户数据导出/导入支持从一个实例迁移到另一个"
            },
            {
              "id": "saas系统与多租户架构深入-9-10-6-d5",
              "tag": "租户数据安全与合规",
              "desc": "①防租户数据泄漏:SQL层TenantInterceptor强制隔离+代码层Service校验tenantId匹配;②数据加密:敏感字段(手机号/身份证)AES加密存储+租户独立加密密钥;③审计日志:记录租户级操作日志(sys_audit_log含tenantId)支持合规审计;④数据备份:独立数据库模式按租户备份,共享模式按时间全量备份+增量按tenantId恢复;⑤GDPR/隐私:租户数据导出/删除请求合规处理"
            },
            {
              "id": "saas系统与多租户架构深入-9-10-6-d6",
              "tag": "SaaS架构演进与微服务",
              "desc": "①单体SaaS→微服务拆分:租户管理/认证/计费/核心业务独立服务;②服务间租户上下文传递:HTTP Header(x-tenant-id)+JWT Claims(tenantId)在网关/拦截器中注入;③共享基础设施:Redis缓存租户级Namespace隔离,DB连接池按租户分组,OSS按租户分桶;④扩展性:热租户(大客户)可独立部署实例冷租户共享资源池;⑤Zero-Downtime升级:租户级灰度发布+功能开关渐进式上线"
            }
          ]
        }
      ]
    },
    {
      "id": "9-12-spring-cloud概述-9-11",
      "title": "9.12 Spring Cloud概述",
      "points": [
        {
          "id": "springcloud生态总览-9-11-0",
          "tag": "Spring Cloud生态总览",
          "desc": "Spring Cloud是基于Spring Boot的微服务治理框架，提供一站式分布式系统解决方案。核心组件：服务注册发现(Eureka/Nacos/Consul)、服务调用(OpenFeign/RestTemplate+LoadBalancer)、API网关(Gateway)、配置中心(Config/Nacos)、熔断降级(Sentinel/Resilience4j)、分布式事务(Seata)、链路追踪(Sleuth+Zipkin)。Spring Cloud Alibaba是阿里开源的中文生态增强版",
          "details": [
            {
              "id": "springcloud生态总览-9-11-0-d0",
              "tag": "核心",
              "desc": "服务注册+调用+网关+配置+熔断+事务+链路追踪一站式微服务"
            },
            {
              "id": "springcloud生态总览-9-11-0-d1",
              "tag": "Netflix OSS",
              "desc": "Eureka/Ribbon/Hystrix/Zuul已停维护或进入维护模式"
            },
            {
              "id": "springcloud生态总览-9-11-0-d2",
              "tag": "Spring Cloud Alibaba",
              "desc": "Nacos/Sentinel/Seata/Dubbo活跃维护国内主流"
            },
            {
              "id": "springcloud生态总览-9-11-0-d3",
              "tag": "版本对应",
              "desc": "Spring Boot 2.x→Spring Cloud Hoxton/Spring Boot 3.x→Spring Cloud 2022.x"
            },
            {
              "id": "springcloud生态总览-9-11-0-d4",
              "tag": "选型",
              "desc": "国内推荐Alibaba版(Nacos一站式+Sentinel流控+Seata事务)国外Netflix版仍有使用"
            }
          ]
        },
        {
          "id": "版本对应关系-9-11-1",
          "tag": "版本对应关系",
          "desc": "Spring Cloud版本命名:London地铁线名(Hoxton/Ilford/2022.x代号)。Spring Boot版本严格对应:Boot 2.4.x→Cloud 2020.0(Illford)/Boot 2.6.x→Cloud 2021.x(Jubilee)/Boot 3.0.x→Cloud 2022.x(Kilburn)/Boot 3.2.x→Cloud 2023.x。升级必须按官方兼容矩阵匹配否则启动报错。Spring Cloud Alibaba版本独立:2.2.x对应Boot 2.4/2021.x对应Boot 2.6/2022.x对应Boot 3.0/2023.x对应Boot 3.2",
          "details": [
            {
              "id": "版本对应关系-9-11-1-d0",
              "tag": "版本命名规则",
              "desc": "地铁线名(Hoxton)或年份代号(2020.0/2022.x)"
            },
            {
              "id": "版本对应关系-9-11-1-d1",
              "tag": "Boot 2.4",
              "desc": "Boot 2.4→Cloud 2020.0/Boot 2.6→Cloud 2021.x/Boot 3.x→Cloud 2022.x"
            },
            {
              "id": "版本对应关系-9-11-1-d2",
              "tag": "版本严格匹配",
              "desc": "不兼容会报ClassNotFoundException等启动错误"
            },
            {
              "id": "版本对应关系-9-11-1-d3",
              "tag": "Alibaba版",
              "desc": "2.2.x(Boot2.4)/2021.x(Boot2.6)/2022.x(Boot3.0)/2023.x(Boot3.2)"
            },
            {
              "id": "版本对应关系-9-11-1-d4",
              "tag": "升级策略",
              "desc": "先确认Boot版本→查官方矩阵→选对应Cloud版本→逐模块升级"
            }
          ]
        },
        {
          "id": "springcloudalibaba-9-11-2",
          "tag": "Spring Cloud Alibaba",
          "desc": "阿里开源微服务组件集(Apache顶级项目)。Nacos(注册+配置一体化)/Sentinel(流量防护+熔断)/Seata(分布式事务)/Dubbo(RPC+注册)/RocketMQ(消息)。优势:中文文档完善/国内社区活跃/组件一体化管理/AP+CP切换/生产验证(阿里双十一)。与Netflix OSS对比:Alibaba组件活跃维护Netflix多已停维护或低维护",
          "details": [
            {
              "id": "springcloudalibaba-9-11-2-d0",
              "tag": "Nacos",
              "desc": "注册中心+配置中心一体化AP/CP可切换比Eureka功能更全"
            },
            {
              "id": "springcloudalibaba-9-11-2-d1",
              "tag": "Sentinel",
              "desc": "流量控制+熔断降级+热点参数+系统保护比Hystrix功能丰富"
            },
            {
              "id": "springcloudalibaba-9-11-2-d2",
              "tag": "Seata",
              "desc": "AT/TCC/Saga/XA四种分布式事务模式Spring Cloud生态深度集成"
            },
            {
              "id": "springcloudalibaba-9-11-2-d3",
              "tag": "Dubbo",
              "desc": "高性能RPC+服务注册Spring Cloud Dubbo整合RPC与HTTP两种调用"
            },
            {
              "id": "springcloudalibaba-9-11-2-d4",
              "tag": "RocketMQ",
              "desc": "事务消息+顺序消息+延迟消息Spring Cloud Stream绑定器"
            }
          ]
        }
      ]
    },
    {
      "id": "9-13-服务注册与发现-9-12",
      "title": "9.13 服务注册与发现",
      "points": [
        {
          "id": "eureka注册中心-9-12-0",
          "tag": "Eureka注册中心",
          "desc": "Netflix开源(AP系统)。服务注册:InstanceInfo(Eureka Client)→REST API→Eureka Server注册表。心跳续约:每30秒发送心跳,90秒未收到则剔除。自我保护模式:15分钟内心跳失败率>85%时进入保护不再剔除(防网络分区误删)。集群:Peer-to-Peer多节点相互复制。缺点:已停维护/不支持CP/无配置管理/续约机制易导致下线延迟",
          "details": [
            {
              "id": "eureka注册中心-9-12-0-d0",
              "tag": "AP系统",
              "desc": "优先可用性牺牲强一致性适合注册发现场景"
            },
            {
              "id": "eureka注册中心-9-12-0-d1",
              "tag": "心跳续约",
              "desc": "30秒一次90秒未收到剔除+自我保护(15分钟>85%不剔除)"
            },
            {
              "id": "eureka注册中心-9-12-0-d2",
              "tag": "Peer-to-Peer集群",
              "desc": "节点相互复制注册表数据无Leader"
            },
            {
              "id": "eureka注册中心-9-12-0-d3",
              "tag": "缺点",
              "desc": "已停维护/无配置中心/下线延迟(依赖心跳超时而非主动下线)"
            },
            {
              "id": "eureka注册中心-9-12-0-d4",
              "tag": "Eureka 2.x开发中止推荐迁移Nacos",
              "desc": "Eureka 2.x自2018年起停止开发,不再维护升级;Nacos同时支持AP/CP模式切换,内置配置管理+服务发现+动态DNS,功能更完善;Spring Cloud Alibaba生态已成熟替代"
            }
          ]
        },
        {
          "id": "nacos注册中心-9-12-1",
          "tag": "Nacos注册中心",
          "desc": "阿里开源(AP/CP可切换)。临时实例(AP模式:客户端心跳保活,不健康自动剔除)/持久实例(CP模式:服务端主动探测,Raft协议保证一致性)。注册:Naming Service(namespace+group+service+instance集群cluster)。健康检查:临时实例客户端心跳/持久实例服务端TCP/HTTP探活。Nacos 2.x:gRPC长连接替代HTTP短连接性能提升。支持权重路由/元数据/优雅下线",
          "details": [
            {
              "id": "nacos注册中心-9-12-1-d0",
              "tag": "AP/CP切换",
              "desc": "临时实例(AP客户端心跳)持久实例(CP服务端探测Raft协议)"
            },
            {
              "id": "nacos注册中心-9-12-1-d1",
              "tag": "命名模型",
              "desc": "namespace→group→service→cluster→instance四级隔离"
            },
            {
              "id": "nacos注册中心-9-12-1-d2",
              "tag": "健康检查",
              "desc": "临时=客户端心跳15s/持久=服务端TCP/HTTP探活"
            },
            {
              "id": "nacos注册中心-9-12-1-d3",
              "tag": "Nacos 2.x",
              "desc": "gRPC长连接+连接事件模型替代HTTP短连接性能大提升"
            },
            {
              "id": "nacos注册中心-9-12-1-d4",
              "tag": "权重路由",
              "desc": "实例可设权重0-100负载均衡按权重分配流量优雅上下线"
            }
          ]
        },
        {
          "id": "consul注册中心-9-12-2",
          "tag": "Consul注册中心",
          "desc": "HashiCorp开源(CP系统基于Raft)。多数据中心支持(WAN gossip跨DC同步)。健康检查:HTTP/TCP/Docker/Script+gRPC多种探活方式。服务发现:HTTP API+DNS接口(TTL缓存)。KV存储:强一致性配置存储(Raft协议)。ACLPolicy身份认证+Intent服务拓扑。缺点:Raft写需多数确认性能低于Eureka/内存消耗大",
          "details": [
            {
              "id": "consul注册中心-9-12-2-d0",
              "tag": "CP系统",
              "desc": "Raft协议保证强一致性适合配置管理/分布式锁场景"
            },
            {
              "id": "consul注册中心-9-12-2-d1",
              "tag": "多数据中心",
              "desc": "WAN gossip跨DC同步支持全球部署"
            },
            {
              "id": "consul注册中心-9-12-2-d2",
              "tag": "健康检查",
              "desc": "HTTP/TCP/Docker/Script/gRPC多种方式灵活配置"
            },
            {
              "id": "consul注册中心-9-12-2-d3",
              "tag": "KV存储",
              "desc": "强一致性配置存储+ACL访问控制+Service Mesh(Intent)"
            },
            {
              "id": "consul注册中心-9-12-2-d4",
              "tag": "缺点",
              "desc": "Raft写需多数确认性能低/内存消耗大/不适合大规模纯注册场景"
            }
          ]
        },
        {
          "id": "zookeeper注册中心-9-12-3",
          "tag": "Zookeeper注册中心",
          "desc": "Apache开源(CP系统基于ZAB)。临时节点(Ephemeral):会话断开自动删除→服务下线通知。顺序节点(Sequential):创建时加序号→实现分布式锁。Watch机制:节点变更触发事件通知客户端。缺点:没有健康检查(依赖临时节点会话超时)/性能低(每次写需半数Follower确认)/不适合大规模服务注册(注册表内存消耗大)。Dubbo默认使用ZK",
          "details": [
            {
              "id": "zookeeper注册中心-9-12-3-d0",
              "tag": "CP系统",
              "desc": "ZAB协议保证强一致性适合强一致场景(锁/配置/Leader选举)"
            },
            {
              "id": "zookeeper注册中心-9-12-3-d1",
              "tag": "临时节点",
              "desc": "会话断开自动删除实现服务下线自动剔除"
            },
            {
              "id": "zookeeper注册中心-9-12-3-d2",
              "tag": "顺序节点",
              "desc": "创建加序号+Watch通知实现分布式锁和选主"
            },
            {
              "id": "zookeeper注册中心-9-12-3-d3",
              "tag": "缺点",
              "desc": "无健康检查(依赖会话超时)/性能低/不适合大规模注册"
            },
            {
              "id": "zookeeper注册中心-9-12-3-d4",
              "tag": "Dubbo默认ZK/Spring Cloud推荐Nacos/ZK更适合协调而非注册",
              "desc": "ZK作为CP系统每次写需半数Follower确认性能较低,临时节点依赖会话超时而非主动健康检查;Nacos轻量级且同时支持AP/CP,更适合大规模服务注册场景"
            }
          ]
        }
      ]
    },
    {
      "id": "9-14-服务调用与负载均衡-9-13",
      "title": "9.14 服务调用与负载均衡",
      "points": [
        {
          "id": "openfeign声明式调用-9-13-0",
          "tag": "OpenFeign声明式调用",
          "desc": "基于Retrofit/JAX-RS注解的声明式HTTP客户端。@FeignClient(name='service-name',url='',fallback=XXX.class)定义接口→Spring生成动态代理→拦截器封装请求→LoadBalancer选择实例→发送HTTP请求→反序列化响应。支持超时配置(feign.client.config.default.connectTimeout/readTimeout)/重试(Retryer)/压缩/拦截器(RequestInterceptor)/日志(LoggerLevel BASIC/HEADERS/FULL)。Spring Cloud 2021+弃用Ribbon用LoadBalancer",
          "details": [
            {
              "id": "openfeign声明式调用-9-13-0-d0",
              "tag": "@FeignClient",
              "desc": "声明式接口定义name=服务名url=直连fallback=降级"
            },
            {
              "id": "openfeign声明式调用-9-13-0-d1",
              "tag": "动态代理",
              "desc": "Spring生成Feign代理拦截器封装HTTP请求"
            },
            {
              "id": "openfeign声明式调用-9-13-0-d2",
              "tag": "LoadBalancer",
              "desc": "替代Ribbon选择服务实例负载均衡调用"
            },
            {
              "id": "openfeign声明式调用-9-13-0-d3",
              "tag": "超时",
              "desc": "connectTimeout/readTimeout+重试Retryer.Default(5次间隔100ms)"
            },
            {
              "id": "openfeign声明式调用-9-13-0-d4",
              "tag": "日志",
              "desc": "BASIC(请求方法URL)/HEADERS(请求头)/FULL(请求响应全量)"
            }
          ]
        },
        {
          "id": "springcloudloadbalancer-9-13-1",
          "tag": "Spring Cloud LoadBalancer",
          "desc": "替代Ribbon(Hystrix停维护后Spring官方推出)。核心:ServiceInstanceListSupplier(获取实例列表)+ReactorLoadBalancer(选择算法)。策略:RoundRobin(默认轮询)/Random(随机)/Weighted(权重Nacos元数据weight)。缓存:LoadBalancerCacheAutoConfiguration实例列表本地缓存减轻注册中心压力。支持懒加载(SmartLifecycle)和主动预热。与RestTemplate配合:@LoadBalanced注解开启负载均衡",
          "details": [
            {
              "id": "springcloudloadbalancer-9-13-1-d0",
              "tag": "替代Ribbon",
              "desc": "Spring官方推出基于Reactor非阻塞响应式"
            },
            {
              "id": "springcloudloadbalancer-9-13-1-d1",
              "tag": "RoundRobin轮询默认/Random随机/Weighted权重(基于Nacos weight元数据)",
              "desc": "Spring Cloud LoadBalancer默认RoundRobin均匀轮询;Weighted策略读取Nacos实例元数据中weight字段按权重分配流量;实例列表通过ServiceInstanceListSupplier获取并本地缓存"
            },
            {
              "id": "springcloudloadbalancer-9-13-1-d2",
              "tag": "ServiceInstanceListSupplier",
              "desc": "获取实例列表支持缓存+健康过滤"
            },
            {
              "id": "springcloudloadbalancer-9-13-1-d3",
              "tag": "@LoadBalanced",
              "desc": "RestTemplate+此注解开启负载均衡自动选择实例"
            },
            {
              "id": "springcloudloadbalancer-9-13-1-d4",
              "tag": "支持懒",
              "desc": "支持懒加载(SmartLifecycle)和预热方式避免首次调用延迟"
            }
          ]
        },
        {
          "id": "负载均衡策略对比-9-13-2",
          "tag": "负载均衡策略对比",
          "desc": "Ribbon(旧):RoundRobin(默认)/Random/WeightedResponseTime(响应时间权重)/BestAvailable(最少并发)/ZoneAvoidance(区域亲和)/Retry(重试)。LoadBalancer(新):RoundRobin/Random/Weighted。Nacos内部:WeightedRoundRobin(权重轮询基于实例权重)/WeightedRandom(权重随机)。一致性哈希:相同请求参数路由到同一实例(会话粘性)。选择:一般RoundRobin足够/权重分流用Nacos权重/会话粘性用一致性哈希",
          "details": [
            {
              "id": "负载均衡策略对比-9-13-2-d0",
              "tag": "Ribbon7种策略停维护/RoundRobin默认最常用简单均匀分配",
              "desc": "Ribbon含7种内置策略如WeightedResponseTime/BestAvailable/ZoneAvoidance等但已停止维护;RoundRobin简单均匀分配请求,适合大多数场景;权重分流场景建议用Nacos内置权重路由"
            },
            {
              "id": "负载均衡策略对比-9-13-2-d1",
              "tag": "Weighted",
              "desc": "基于Nacos实例权重元数据分流不同权重实例"
            },
            {
              "id": "负载均衡策略对比-9-13-2-d2",
              "tag": "BestAvailable",
              "desc": "选择最少并发请求的实例适合长连接场景"
            },
            {
              "id": "负载均衡策略对比-9-13-2-d3",
              "tag": "一致性哈希",
              "desc": "相同参数路由同一实例实现会话粘性适合有状态服务"
            },
            {
              "id": "负载均衡策略对比-9-13-2-d4",
              "tag": "权重分流",
              "desc": "Nacos控制台动态调整权重实现灰度发布和流量调度"
            }
          ]
        }
      ]
    },
    {
      "id": "9-15-spring-cloud-gateway-9-14",
      "title": "9.15 Spring Cloud Gateway",
      "points": [
        {
          "id": "gateway核心架构-9-14-0",
          "tag": "Gateway核心架构",
          "desc": "基于Spring WebFlux+Netty的响应式API网关(非阻塞高并发)。三大核心:Route(路由定义id+uri+order+predicates+filters)/Predicate(断言工厂Path/Method/Header/Query/After/Before/Between/Host/Weight)/Filter(过滤器链GlobalFilter+GatewayFilter pre/post阶段)。请求流程:HttpWebHandlerAdapter→DispatcherHandler→RoutePredicateHandlerMapping→FilteringWebHandler→执行Filter链→转发到下游服务",
          "details": [
            {
              "id": "gateway核心架构-9-14-0-d0",
              "tag": "WebFlux+Netty响应式非阻塞高性能适合网关高并发场景",
              "desc": "Gateway基于Spring WebFlux非阻塞模型+Netty服务器,不依赖Servlet容器,单个线程可处理大量并发连接;三大核心Route+Predicate+Filter全部基于Flux/Mono异步链式处理"
            },
            {
              "id": "gateway核心架构-9-14-0-d1",
              "tag": "Route",
              "desc": "id+uri+order+predicates+filters路由定义核心单元"
            },
            {
              "id": "gateway核心架构-9-14-0-d2",
              "tag": "Predicate断言",
              "desc": "Path/Method/Header/Query/Host/After/Weight匹配条件"
            },
            {
              "id": "gateway核心架构-9-14-0-d3",
              "tag": "Filter过滤器",
              "desc": "GlobalFilter(全局)+GatewayFilter(路由级)pre/post两阶段"
            },
            {
              "id": "gateway核心架构-9-14-0-d4",
              "tag": "流程",
              "desc": "请求→匹配路由→执行Filter链(pre)→转发→Filter链(post)→响应"
            }
          ]
        },
        {
          "id": "动态路由与过滤器-9-14-1",
          "tag": "动态路由与过滤器",
          "desc": "动态路由:RouteDefinitionLocator从配置中心/DB加载路由,支持热更新无需重启。过滤器分类:前置(AddRequestHeader/AddRequestParameter/RequestRateLimiter)/后置(AddResponseHeader/SetStatus)/全局(Logging/Authentication/Cors)。自定义GlobalFilter实现GlobalFilter+Ordered接口。路由配置:yml/Java RouteLocator Builder/API编程式。PredicateWeight权重路由实现灰度发布(80%到v1/20%到v2)",
          "details": [
            {
              "id": "动态路由与过滤器-9-14-1-d0",
              "tag": "动态路由",
              "desc": "RouteDefinitionLocator从配置中心加载热更新无需重启"
            },
            {
              "id": "动态路由与过滤器-9-14-1-d1",
              "tag": "自定义GlobalFilter",
              "desc": "实现GlobalFilter+Ordered接口写pre/post逻辑"
            },
            {
              "id": "动态路由与过滤器-9-14-1-d2",
              "tag": "前置Filter",
              "desc": "AddRequestHeader/AddRequestParameter/RequestRateLimiter限流"
            },
            {
              "id": "动态路由与过滤器-9-14-1-d3",
              "tag": "后置Filter",
              "desc": "AddResponseHeader/SetStatus/记录响应日志"
            },
            {
              "id": "动态路由与过滤器-9-14-1-d4",
              "tag": "Weight Predicate",
              "desc": "80%→v1/20%→v2实现灰度发布流量按比例分配"
            }
          ]
        },
        {
          "id": "gateway限流熔断-9-14-2",
          "tag": "Gateway限流熔断",
          "desc": "限流:RequestRateLimiter过滤器+Redis Lua令牌桶算法(rate=每秒令牌数burst=容量)。按IP/用户/路由维度限流(KeyResolver自定义)。熔断:整合Sentinel(spring-cloud-alibaba-sentinel-gateway)→配置流控规则+熔断规则+API分组。CORS:CorsGatewayFilter配置跨域。重试:RetryGatewayFilter配置重试次数+状态码+异常。请求大小限制:RequestSizeGatewayFilter限制请求体大小防大请求攻击",
          "details": [
            {
              "id": "gateway限流熔断-9-14-2-d0",
              "tag": "限流",
              "desc": "RequestRateLimiter+Redis令牌桶rate(每秒令牌)/burst(容量)/KeyResolver"
            },
            {
              "id": "gateway限流熔断-9-14-2-d1",
              "tag": "KeyResolver",
              "desc": "按IP/用户/路由维度限流自定义限流键提取逻辑"
            },
            {
              "id": "gateway限流熔断-9-14-2-d2",
              "tag": "熔断",
              "desc": "整合Sentinel Gateway配置流控+熔断+API分组规则"
            },
            {
              "id": "gateway限流熔断-9-14-2-d3",
              "tag": "CORS",
              "desc": "CorsGatewayFilter配置跨域AllowOrigin/Method/Header"
            },
            {
              "id": "gateway限流熔断-9-14-2-d4",
              "tag": "重试",
              "desc": "RetryGatewayFilter retries=3 statuses=503 exceptions=IOException"
            }
          ]
        },
        {
          "id": "gateway与zuul对比-9-14-3",
          "tag": "Gateway与Zuul对比",
          "desc": "Zuul 1.x:基于Servlet阻塞模型(Filter链+每个请求一个线程)/性能低(线程池耗尽风险)/已停维护。Zuul 2.x:基于Netty非阻塞+异步但未被Spring Cloud官方集成/社区不活跃。Gateway:WebFlux+Netty响应式/官方推荐/性能5-10倍Zuul 1.x/功能丰富/与Spring生态深度集成。选型:新项目必须Gateway/旧Zuul 1.x迁移Gateway/极端性能需求Kong/APISIX",
          "details": [
            {
              "id": "gateway与zuul对比-9-14-3-d0",
              "tag": "Zuul 1.x",
              "desc": "Servlet阻塞模型已停维护性能低不推荐新项目"
            },
            {
              "id": "gateway与zuul对比-9-14-3-d1",
              "tag": "Zuul 2.x",
              "desc": "Netty异步但Spring Cloud未集成社区不活跃"
            },
            {
              "id": "gateway与zuul对比-9-14-3-d2",
              "tag": "Gateway",
              "desc": "WebFlux+Netty响应式性能5-10倍Zuul官方推荐"
            },
            {
              "id": "gateway与zuul对比-9-14-3-d3",
              "tag": "Gateway优势",
              "desc": "与Spring生态深度集成+Filter丰富+动态路由+限流熔断"
            },
            {
              "id": "gateway与zuul对比-9-14-3-d4",
              "tag": "选型",
              "desc": "新项目Gateway/Kong/APISIX极致性能/OpenResty定制需求"
            }
          ]
        }
      ]
    },
    {
      "id": "9-16-配置中心-9-15",
      "title": "9.16 配置中心",
      "points": [
        {
          "id": "nacosconfig动态配置-9-15-0",
          "tag": "Nacos Config动态配置",
          "desc": "namespace(命名空间隔离环境dev/test/prod)+group(分组隔离项目)+dataId(配置文件名${prefix}-${profile}.${format})三级隔离。动态刷新:AutoRefresh配置变化时Nacos推送→客户端@RefreshScope重建Bean+@Value重新绑定/@NacosValue自动更新无需RefreshScope。配置回滚:历史版本管理+变更对比+一键回滚。灰度发布:Beta发布指定IP/比例灰度验证后全量。监听:NacosConfigListener实时监听配置变化执行回调逻辑",
          "details": [
            {
              "id": "nacosconfig动态配置-9-15-0-d0",
              "tag": "三级隔离",
              "desc": "namespace(环境)→group(项目)→dataId(配置文件名)"
            },
            {
              "id": "nacosconfig动态配置-9-15-0-d1",
              "tag": "动态刷新",
              "desc": "@RefreshScope重建Bean/@NacosValue自动更新无需重建"
            },
            {
              "id": "nacosconfig动态配置-9-15-0-d2",
              "tag": "配置回滚",
              "desc": "历史30天版本+变更对比+一键回滚防配置误操作"
            },
            {
              "id": "nacosconfig动态配置-9-15-0-d3",
              "tag": "灰度发布",
              "desc": "Beta发布指定IP/比例灰度验证→全量发布安全上线"
            },
            {
              "id": "nacosconfig动态配置-9-15-0-d4",
              "tag": "NacosConfigListener",
              "desc": "监听配置变化执行回调业务逻辑实时响应"
            }
          ]
        },
        {
          "id": "springcloudconfig-9-15-1",
          "tag": "Spring Cloud Config",
          "desc": "Git/SVN后端存储配置(版本管理+分支隔离)。Server:从Git仓库拉取配置→Client通过HTTP获取。动态刷新:需配合Spring Cloud Bus(RabbitMQ/Kafka)广播刷新事件→所有Client @RefreshScope重建Bean。缺点:依赖Git仓库+Bus组件(额外MQ)+刷新有延迟+无灰度发布+无权限管理。适合:Git运维成熟团队/配置管理要求不高场景",
          "details": [
            {
              "id": "springcloudconfig-9-15-1-d0",
              "tag": "Git/SVN后端:版本管理+分支隔离环境",
              "desc": "dev/test/prod分支"
            },
            {
              "id": "springcloudconfig-9-15-1-d1",
              "tag": "动态刷新",
              "desc": "Spring Cloud Bus(RabbitMQ/Kafka)广播刷新@RefreshScope"
            },
            {
              "id": "springcloudconfig-9-15-1-d2",
              "tag": "缺点",
              "desc": "依赖Git+Bus(MQ)+刷新延迟+无灰度+无权限+无回滚"
            },
            {
              "id": "springcloudconfig-9-15-1-d3",
              "tag": "适合",
              "desc": "Git运维成熟团队/配置管理简单场景/已有RabbitMQ基础设施"
            },
            {
              "id": "springcloudconfig-9-15-1-d4",
              "tag": "Config Server",
              "desc": "从Git拉取→Client HTTP获取/actuator/bus-refresh触发刷新"
            }
          ]
        },
        {
          "id": "apollo配置中心-9-15-2",
          "tag": "Apollo配置中心",
          "desc": "携程开源功能最完善的配置中心。多环境(Env:DEV/FAT/UAT/PRO)+多集群(Cluster)+多命名空间(Namespace:application框架+private应用+public共享)。灰度发布:指定IP/规则灰度→全量发布。权限管理:发布权限+编辑权限分离。审计:每次变更记录操作人+时间+内容+回滚。实时推送:Http长轮询通知客户端配置变化。支持紧急发布(紧急通道绕过审核流程)",
          "details": [
            {
              "id": "apollo配置中心-9-15-2-d0",
              "tag": "多环境+多集群+多命名空间",
              "desc": "三级灵活隔离环境/项目/配置类型"
            },
            {
              "id": "apollo配置中心-9-15-2-d1",
              "tag": "灰度发布",
              "desc": "指定IP/规则灰度→全量发布安全验证"
            },
            {
              "id": "apollo配置中心-9-15-2-d2",
              "tag": "权限管理",
              "desc": "发布权限+编辑权限分离+审核流程防误操作"
            },
            {
              "id": "apollo配置中心-9-15-2-d3",
              "tag": "审计",
              "desc": "操作人+时间+内容+回滚全链路可追溯配置变更"
            },
            {
              "id": "apollo配置中心-9-15-2-d4",
              "tag": "实时推送",
              "desc": "Http长轮询通知客户端+紧急发布通道绕过审核"
            }
          ]
        },
        {
          "id": "配置中心选型对比-9-15-3",
          "tag": "配置中心选型对比",
          "desc": "Nacos Config:注册+配置一体化/中文文档/AP+CP/动态刷新简单/灰度Beta发布/适合中小到中型项目。Apollo:功能最完善(灰度/权限/审计/回滚)/多环境/紧急发布/适合大型企业。Spring Cloud Config:简单Git后端/需Bus/MQ额外依赖/适合小型项目。Consul KV:强一致性Raft/多DC/适合需要KV+注册+Mesh的场景。选型原则:国内中小→Nacos/大型企业→Apollo/已有Git团队→Config/需要Mesh→Consul",
          "details": [
            {
              "id": "配置中心选型对比-9-15-3-d0",
              "tag": "Nacos",
              "desc": "注册+配置一体化最简单适合快速起步中小到中型项目"
            },
            {
              "id": "配置中心选型对比-9-15-3-d1",
              "tag": "Apollo",
              "desc": "功能最完善灰度/权限/审计/回滚适合大型企业多团队"
            },
            {
              "id": "配置中心选型对比-9-15-3-d2",
              "tag": "Config",
              "desc": "最简单依赖Git+Bus/MQ适合小型项目已有MQ基础设施"
            },
            {
              "id": "配置中心选型对比-9-15-3-d3",
              "tag": "Consul KV",
              "desc": "强一致性+多DC+Mesh适合需要配置+锁+Mesh场景"
            },
            {
              "id": "配置中心选型对比-9-15-3-d4",
              "tag": "国内主流",
              "desc": "Nacos(一体化简单)Apollo(功能完善)按团队规模选择"
            }
          ]
        }
      ]
    },
    {
      "id": "9-17-熔断与降级-9-16",
      "title": "9.17 熔断与降级",
      "points": [
        {
          "id": "sentinel核心概念-9-16-0",
          "tag": "Sentinel核心概念",
          "desc": "阿里开源流量防护组件(轻量级高性能)。核心概念:Resource(资源:方法/接口/代码块用@SentinelResource或SphU.entry定义)/Rule(规则:流控FlowRule/熔断DegradeRule/热点ParamFlowRule/系统SystemRule)/Slot Chain(处理器链:NodeSelectorSlot→ClusterBuilderSlot→StatisticSlot→FlowSlot→DegradeSlot→ParamSlot)。数据结构:滑动窗口LeapArray统计QPS/RT/线程数/异常率。控制台:Dashboard可视化配置规则+实时监控+集群流控",
          "details": [
            {
              "id": "sentinel核心概念-9-16-0-d0",
              "tag": "Resource",
              "desc": "@SentinelResource或SphU.entry()定义受保护的资源"
            },
            {
              "id": "sentinel核心概念-9-16-0-d1",
              "tag": "Rule",
              "desc": "流控(FlowRule)+熔断(DegradeRule)+热点(ParamFlowRule)+系统(SystemRule)"
            },
            {
              "id": "sentinel核心概念-9-16-0-d2",
              "tag": "Slot Chain",
              "desc": "Node→Cluster→Statistic→Flow→Degrade→Param六槽链式处理"
            },
            {
              "id": "sentinel核心概念-9-16-0-d3",
              "tag": "滑动窗口LeapArray",
              "desc": "统计QPS/RT/线程数/异常率毫秒级精度"
            },
            {
              "id": "sentinel核心概念-9-16-0-d4",
              "tag": "Dashboard",
              "desc": "可视化规则配置+实时监控+集群流控+机器发现"
            }
          ]
        },
        {
          "id": "sentinel流控规则-9-16-1",
          "tag": "Sentinel流控规则",
          "desc": "FlowRule控制QPS/并发线程数。流控模式:直接(default直接限流)/关联(associatedResource关联资源触发)/链路(entryType入口流量)。流控效果:快速失败(default直接拒绝抛FlowException)/Warm Up(预热coldFactor=3从threshold/3缓慢升到threshold适合突发流量)/排队等待(RateLimiter匀速排队maxQueueTime超时丢弃适合脉冲流量)。集群流控:Token Server集中分配令牌+Token Client请求令牌",
          "details": [
            {
              "id": "sentinel流控规则-9-16-1-d0",
              "tag": "流控模式",
              "desc": "直接(当前资源)/关联(另一资源触发)/链路(指定入口流量)"
            },
            {
              "id": "sentinel流控规则-9-16-1-d1",
              "tag": "快速失败",
              "desc": "直接拒绝抛FlowException最常用简单粗暴"
            },
            {
              "id": "sentinel流控规则-9-16-1-d2",
              "tag": "Warm Up",
              "desc": "预热从threshold/3→threshold适合冷启动突发流量场景"
            },
            {
              "id": "sentinel流控规则-9-16-1-d3",
              "tag": "排队等待",
              "desc": "匀速排队maxQueueTime控制请求速率平滑脉冲流量"
            },
            {
              "id": "sentinel流控规则-9-16-1-d4",
              "tag": "集群流控",
              "desc": "Token Server集中分配令牌集群维度统一限流防单机不均"
            }
          ]
        },
        {
          "id": "sentinel熔断降级-9-16-2",
          "tag": "Sentinel熔断降级",
          "desc": "DegradeRule熔断策略:慢调用比例(RT>阈值且比例>比例阈值→熔断)/异常比例(异常比例>阈值→熔断)/异常数(异常数>阈值→熔断)。熔断状态:OPEN(熔断持续timeWindow秒)→HALF-OPEN(放1个请求试探)→CLOSED(正常)。@SentinelResource:blockHandler限流处理/fallback降级处理/defaultFallback默认降级。整合Feign:feign.sentinel.enabled=true+FallbackFactory实现降级。整合Gateway:sentinel-gateway适配器+配置API分组流控规则",
          "details": [
            {
              "id": "sentinel熔断降级-9-16-2-d0",
              "tag": "慢调用比例",
              "desc": "RT>阈值+比例>比例阈值触发熔断适合响应时间敏感场景"
            },
            {
              "id": "sentinel熔断降级-9-16-2-d1",
              "tag": "异常比例",
              "desc": "异常比例>阈值触发(0.0-1.0)适合异常率监控"
            },
            {
              "id": "sentinel熔断降级-9-16-2-d2",
              "tag": "异常数",
              "desc": "异常数>阈值触发适合精确异常计数场景"
            },
            {
              "id": "sentinel熔断降级-9-16-2-d3",
              "tag": "@SentinelResource",
              "desc": "blockHandler限流/fallback降级/defaultFallback默认"
            },
            {
              "id": "sentinel熔断降级-9-16-2-d4",
              "tag": "Feign整合",
              "desc": "sentinel.enabled=true+FallbackFactory创建降级实例"
            }
          ]
        },
        {
          "id": "resilience4j熔断-9-16-3",
          "tag": "Resilience4j熔断",
          "desc": "轻量级函数式熔断库(Java 8+无依赖替代Hystrix)。CircuitBreaker状态机:CLOSED(正常统计失败率)→OPEN(熔断快失败)→HALF_OPEN(放permitNum个试探请求)。配置:failureRateThreshold(失败率阈值)/slowCallRateThreshold(慢调用阈值)/waitDurationInOpenState(熔断等待)/permittedNumberOfCallsInHalfOpenState(半开试探数)。RateLimiter(限流)/TimeLimiter(超时)/Retry(重试)/Bulkhead(隔离线程池)。Spring Boot整合:resilience4j-spring-boot2 starter+@CircuitBreaker注解",
          "details": [
            {
              "id": "resilience4j熔断-9-16-3-d0",
              "tag": "函数式轻量级",
              "desc": "Java 8+无外部依赖替代Hystrix"
            },
            {
              "id": "resilience4j熔断-9-16-3-d1",
              "tag": "CircuitBreaker",
              "desc": "CLOSED→OPEN→HALF_OPEN状态机"
            },
            {
              "id": "resilience4j熔断-9-16-3-d2",
              "tag": "failureRateThreshold/slowCallRateThreshold/waitDurationInOpenState可配置",
              "desc": "failureRateThreshold设定失败率阈值(默认50%)触发熔断;slowCallRateThreshold设定慢调用比例阈值;waitDurationInOpenState设定OPEN状态持续时间(默认60秒)后进入半开试探"
            },
            {
              "id": "resilience4j熔断-9-16-3-d3",
              "tag": "RateLimiter+TimeLimiter+Retry+Bulkhead四组件组合使用",
              "desc": "RateLimiter基于令牌桶限流控制调用频率;TimeLimiter用CompletableFuture超时控制;Retry配置重试次数和间隔;Bulkhead限制并发调用数(信号量或固定线程池);四者可叠加使用增强容错"
            },
            {
              "id": "resilience4j熔断-9-16-3-d4",
              "tag": "Spring Boot",
              "desc": "resilience4j-spring-boot2 starter+@CircuitBreaker注解"
            }
          ]
        },
        {
          "id": "hystrix与替代方案-9-16-4",
          "tag": "Hystrix与替代方案",
          "desc": "Hystrix:Netflix开源已停维护(2018进入维护模式2020停维护)。模型:命令模式HystrixCommand/观察模式HystrixObservableCommand。线程隔离:每个CommandGroup独立线程池(默认10核心)/信号量隔离(Semaphore无线程池开销)。熔断:CircuitBreaker请求量>circuitBreaker.requestVolumeThreshold+失败率>errorPercentageThreshold→OPEN。替代:Resilience4j(轻量级函数式)/Sentinel(功能丰富中文生态)。迁移:Spring Cloud 2020+移除Hystrix用Resilience4j/Sentinel",
          "details": [
            {
              "id": "hystrix与替代方案-9-16-4-d0",
              "tag": "Hystrix已停维护2018维护模式2020停维护不再推荐",
              "desc": "Hystrix于2018进入维护模式不再新增功能,2020正式停止维护;Spring Cloud 2020版本移除Hystrix依赖,官方推荐迁移至Resilience4j(轻量函数式)或Sentinel(功能丰富中文生态好)"
            },
            {
              "id": "hystrix与替代方案-9-16-4-d1",
              "tag": "线程隔离",
              "desc": "每个CommandGroup独立线程池默认10核心防级联故障"
            },
            {
              "id": "hystrix与替代方案-9-16-4-d2",
              "tag": "信号量隔离",
              "desc": "Semaphore无线程池开销适合轻量级调用"
            },
            {
              "id": "hystrix与替代方案-9-16-4-d3",
              "tag": "替代",
              "desc": "Resilience4j(轻量)/Sentinel(丰富)Spring Cloud 2020+移除Hystrix"
            },
            {
              "id": "hystrix与替代方案-9-16-4-d4",
              "tag": "迁移",
              "desc": "@HystrixCommand→@SentinelResource或@CircuitBreaker注解替换"
            }
          ]
        }
      ]
    },
    {
      "id": "9-18-分布式事务seata-9-17",
      "title": "9.18 分布式事务Seata",
      "points": [
        {
          "id": "seata架构-9-17-0",
          "tag": "Seata架构",
          "desc": "阿里开源分布式事务框架(Apache孵化)。三大角色:TC(Transaction Coordinator事务协调者-Seata Server维护全局事务分支状态)/TM(Transaction Manager事务管理器-发起全局事务@GlobalTransactional)/RM(Resource Manager资源管理器-分支事务参与者注册分支+上报状态)。全局事务XID跨服务传播(HTTP Header/RPC Attachment)。TC集群:Redis存储模式+Raft选举高可用",
          "details": [
            {
              "id": "seata架构-9-17-0-d0",
              "tag": "TC",
              "desc": "事务协调者Seata Server维护全局+分支事务状态"
            },
            {
              "id": "seata架构-9-17-0-d1",
              "tag": "TM",
              "desc": "事务管理者@GlobalTransactional发起全局事务标记XID"
            },
            {
              "id": "seata架构-9-17-0-d2",
              "tag": "RM",
              "desc": "资源管理者分支参与者注册分支+上报本地事务状态"
            },
            {
              "id": "seata架构-9-17-0-d3",
              "tag": "XID传播",
              "desc": "HTTP Header/RPC Attachment跨服务传递全局事务ID"
            },
            {
              "id": "seata架构-9-17-0-d4",
              "tag": "TC集群",
              "desc": "Redis存储+Raft选举保证TC高可用防单点故障"
            }
          ]
        },
        {
          "id": "seataat模式-9-17-1",
          "tag": "Seata AT模式",
          "desc": "自动补偿模式(对业务零侵入)。一阶段:拦截业务SQL→Before Image(查询修改前数据)+After Image(查询修改后数据)→写入undo_log表→提交本地事务(释放本地锁)。二阶段Commit:TC通知→异步删除undo_log(最快)。二阶段Rollback:TC通知→读undo_log→校验After Image防脏写→生成反向SQL恢复数据→删除undo_log。全局锁:一阶段本地提交后获取全局锁防其他全局事务修改同一数据(本地事务可读但其他全局事务写需等全局锁)",
          "details": [
            {
              "id": "seataat模式-9-17-1-d0",
              "tag": "一阶段",
              "desc": "拦截SQL→记录Before/After Image→undo_log→本地提交"
            },
            {
              "id": "seataat模式-9-17-1-d1",
              "tag": "二阶段Commit",
              "desc": "异步删除undo_log最快不阻塞"
            },
            {
              "id": "seataat模式-9-17-1-d2",
              "tag": "二阶段Rollback",
              "desc": "读undo_log→校验After Image防脏写→反向SQL→删除"
            },
            {
              "id": "seataat模式-9-17-1-d3",
              "tag": "全局锁",
              "desc": "一阶段本地提交后获取防止其他全局事务并发修改同一数据"
            },
            {
              "id": "seataat模式-9-17-1-d4",
              "tag": "对业务零侵入",
              "desc": "只需@GlobalTransactional注解无需编写补偿逻辑"
            }
          ]
        },
        {
          "id": "seatatcc模式-9-17-2",
          "tag": "Seata TCC模式",
          "desc": "手动补偿模式(业务侵入性强)。Try:预留资源(冻结余额/锁定库存/创建冻结记录)。Confirm:确认执行(实际扣减/释放冻结)。Cancel:取消回滚(恢复余额/释放库存/删除冻结)。两阶段提交:TM发起→各RM Try成功→TC通知Confirm(任一Try失败→Cancel)。注意:空回滚(Try未执行但收到Cancel→需记录try状态)/悬挂(Cancel先于Try到达→需记录cancel状态防Try执行)/幂等(Confirm/Cancel可能重复执行需去重)。适合:强一致性核心业务(支付/库存)",
          "details": [
            {
              "id": "seatatcc模式-9-17-2-d0",
              "tag": "Try",
              "desc": "预留资源冻结余额锁定库存业务自定义"
            },
            {
              "id": "seatatcc模式-9-17-2-d1",
              "tag": "Confirm",
              "desc": "确认执行实际扣减释放冻结（Confirm的详细说明：Seata TCC模式中关于Confirm的内容）"
            },
            {
              "id": "seatatcc模式-9-17-2-d2",
              "tag": "Cancel",
              "desc": "取消回滚恢复余额释放库存（Cancel的详细说明：Seata TCC模式中关于Cancel的内容）"
            },
            {
              "id": "seatatcc模式-9-17-2-d3",
              "tag": "空回滚",
              "desc": "Try未执行但收到Cancel需记录try状态防止空回滚"
            },
            {
              "id": "seatatcc模式-9-17-2-d4",
              "tag": "悬挂",
              "desc": "Cancel先于Try到达需记录cancel状态防止Try执行"
            },
            {
              "id": "seatatcc模式-9-17-2-d5",
              "tag": "幂等",
              "desc": "Confirm/Cancel可能重复执行需去重防重复"
            }
          ]
        },
        {
          "id": "seatasaga模式-9-17-3",
          "tag": "Seata Saga模式",
          "desc": "长事务解决方案(适合业务流程长/参与者多)。编排式(Orchestrator):状态机驱动JSON定义流程→Seata引擎编排→每步成功→下一步/失败→逆序补偿。协同式(Choreography):事件驱动各服务发布/订阅事件无中心协调。优点:无长期锁/高性能/适合长流程(如跨国转账5天)。缺点:不保证隔离性(中间状态可见)/补偿逻辑复杂/缺乏原子性。Seata状态机:StateMachineParser解析JSON→ServiceTask/ChoiceTask/CompensationTask定义业务步骤+补偿",
          "details": [
            {
              "id": "seatasaga模式-9-17-3-d0",
              "tag": "编排式",
              "desc": "Seata状态机引擎驱动JSON定义流程步骤+补偿"
            },
            {
              "id": "seatasaga模式-9-17-3-d1",
              "tag": "协同式",
              "desc": "事件驱动各服务发布订阅事件无中心协调"
            },
            {
              "id": "seatasaga模式-9-17-3-d2",
              "tag": "优点",
              "desc": "无长期锁高性能适合长流程业务(跨国转账等)"
            },
            {
              "id": "seatasaga模式-9-17-3-d3",
              "tag": "缺点",
              "desc": "不保证隔离性中间状态可见/补偿逻辑复杂"
            },
            {
              "id": "seatasaga模式-9-17-3-d4",
              "tag": "Seata状态机",
              "desc": "JSON定义ServiceTask+ChoiceTask+CompensationTask"
            }
          ]
        }
      ]
    },
    {
      "id": "9-19-链路追踪-9-18",
      "title": "9.19 链路追踪",
      "points": [
        {
          "id": "sleuthzipkin-9-18-0",
          "tag": "Sleuth+Zipkin",
          "desc": "Spring Cloud Sleuth:自动埋点注入Trace ID(全局唯一)+Span ID(单次操作)。传播:HTTP Header(X-B3-TraceId/X-B3-SpanId)/MQ Header跨服务传递。采样策略:Probability(概率采样rate=0.1采样10%)/RateLimiting(限速采样max=10条/秒)。Zipkin Server:收集+存储+查询+可视化Trace数据。Storage:MySQL/Cassandra/Elasticsearch(推荐ES大规模)。Spring Cloud 2022+:Sleuth迁移Micrometer Tracing桥接OpenTelemetry",
          "details": [
            {
              "id": "sleuthzipkin-9-18-0-d0",
              "tag": "Sleuth",
              "desc": "自动埋点Trace ID+Span ID注入到HTTP/MQ Header"
            },
            {
              "id": "sleuthzipkin-9-18-0-d1",
              "tag": "传播",
              "desc": "X-B3-TraceId/X-B3-SpanId跨服务自动传递无需手动"
            },
            {
              "id": "sleuthzipkin-9-18-0-d2",
              "tag": "采样",
              "desc": "Probability概率/RateLimiting限速降低采集量不影响业务"
            },
            {
              "id": "sleuthzipkin-9-18-0-d3",
              "tag": "Zipkin",
              "desc": "收集+存储+查询+可视化Trace链路依赖图"
            },
            {
              "id": "sleuthzipkin-9-18-0-d4",
              "tag": "Spring Cloud 2022+",
              "desc": "Sleuth→Micrometer Tracing→OpenTelemetry桥接"
            }
          ]
        },
        {
          "id": "skywalking集成-9-18-1",
          "tag": "SkyWalking集成",
          "desc": "Apache开源(国产)APM平台。Java Agent无侵入字节码增强(启动加-javaagent:skywalking-agent.jar)。核心:Service(服务)+ServiceInstance(实例)+Endpoint(接口)+Trace(链路)+Span(操作)。存储:Elasticsearch/H2/MySQL。功能:链路追踪+服务拓扑图+指标监控+告警+日志关联。告警:规则配置(Webhook/钉钉/邮件)指标超阈值触发。优势:无侵入+功能丰富+中文社区+性能好(采样异步写入不影响业务RT)",
          "details": [
            {
              "id": "skywalking集成-9-18-1-d0",
              "tag": "Java Agent",
              "desc": "无侵入字节码增强启动加-javaagent参数即可"
            },
            {
              "id": "skywalking集成-9-18-1-d1",
              "tag": "核心模型",
              "desc": "Service→Instance→Endpoint→Trace→Span五层"
            },
            {
              "id": "skywalking集成-9-18-1-d2",
              "tag": "存储",
              "desc": "Elasticsearch推荐大规模/H2开发测试"
            },
            {
              "id": "skywalking集成-9-18-1-d3",
              "tag": "功能",
              "desc": "链路追踪+拓扑图+指标监控+告警+日志关联一体化"
            },
            {
              "id": "skywalking集成-9-18-1-d4",
              "tag": "告警",
              "desc": "Webhook/钉钉/邮件指标超阈值触发自动通知"
            }
          ]
        },
        {
          "id": "opentelemetry统一标准-9-18-2",
          "tag": "OpenTelemetry统一标准",
          "desc": "CNCF可观测性统一标准(Trace+Metric+Log三支柱)。OTel API+SDK:自动/手动埋点+多语言SDK(Java/Go/Python/Node)。Collector:接收+处理+导出数据到任意后端(Zipkin/Jaeger/Prometheus/DataDog)。W3C TraceContext标准:traceparent+tracestate Header跨服务传播。OTLP协议:gRPC/HTTP传输统一格式。Spring Cloud 2022+:Sleuth→Micrometer Observation→OTel Bridge→统一接入。趋势:各追踪系统收敛到OpenTelemetry统一协议",
          "details": [
            {
              "id": "opentelemetry统一标准-9-18-2-d0",
              "tag": "CNCF标准",
              "desc": "Trace+Metric+Log三支柱统一可观测性"
            },
            {
              "id": "opentelemetry统一标准-9-18-2-d1",
              "tag": "OTel SDK",
              "desc": "自动/手动埋点多语言Java/Go/Python/Node"
            },
            {
              "id": "opentelemetry统一标准-9-18-2-d2",
              "tag": "Collector",
              "desc": "接收+处理+导出到Zipkin/Jaeger/Prometheus等"
            },
            {
              "id": "opentelemetry统一标准-9-18-2-d3",
              "tag": "W3C TraceContext",
              "desc": "traceparent+tracestate跨服务传播标准"
            },
            {
              "id": "opentelemetry统一标准-9-18-2-d4",
              "tag": "Spring Cloud 2022+",
              "desc": "Sleuth→Micrometer→OTel桥接统一接入"
            }
          ]
        }
      ]
    },
    {
      "id": "9-20-消息驱动与事件-9-19",
      "title": "9.20 消息驱动与事件",
      "points": [
        {
          "id": "springcloudstream-9-19-0",
          "tag": "Spring Cloud Stream",
          "desc": "消息中间件抽象层(统一编程模型屏蔽MQ差异)。核心:Binding(绑定器:将Channel绑定到MQ Topic/Queue)/Binder(中间件适配:Rabbit/Kafka/RocketMQ)/Channel(输入Sink/输出Source/处理Processor)。函数式编程:Supplier(生产)/Function(处理)/Consumer(消费)+spring.cloud.function.definition配置。分区:partitionKeyExpression分区键+partitionCount分区数保证同Key有序。错误处理:SendToDlq(死信队列)/RetryTemplate(重试)",
          "details": [
            {
              "id": "springcloudstream-9-19-0-d0",
              "tag": "Binding",
              "desc": "将Channel绑定到MQ Topic/Queue屏蔽中间件差异"
            },
            {
              "id": "springcloudstream-9-19-0-d1",
              "tag": "Binder",
              "desc": "RabbitMQ/Kafka/RocketMQ适配器切换MQ无需改业务代码"
            },
            {
              "id": "springcloudstream-9-19-0-d2",
              "tag": "函数式",
              "desc": "Supplier/Function/Consumer+spring.cloud.function.definition配置"
            },
            {
              "id": "springcloudstream-9-19-0-d3",
              "tag": "分区",
              "desc": "partitionKeyExpression+partitionCount同Key有序同分区消费"
            },
            {
              "id": "springcloudstream-9-19-0-d4",
              "tag": "错误处理",
              "desc": "SendToDlq死信队列+RetryTemplate重试+N次失败入死信"
            }
          ]
        },
        {
          "id": "springcloudbus-9-19-1",
          "tag": "Spring Cloud Bus",
          "desc": "事件广播总线(配合Config动态刷新)。核心:连接所有微服务节点到MQ(RabbitMQ/Kafka)/广播事件(RefreshRemoteEvent刷新配置/EnvironmentChangeEvent环境变更)。用法:Config Server变更配置→/actuator/bus-refresh→Bus广播→所有Client @RefreshScope重建Bean。自定义事件:extends RemoteApplicationEvent+@RemoteEvent注解。Destination:指定服务接收(bus-refresh?destination=service-id:**)。Nacos Config自带推送不需Bus",
          "details": [
            {
              "id": "springcloudbus-9-19-1-d0",
              "tag": "核心",
              "desc": "MQ连接所有节点广播配置刷新/环境变更事件"
            },
            {
              "id": "springcloudbus-9-19-1-d1",
              "tag": "用法",
              "desc": "Config变更→/actuator/bus-refresh→Bus广播→全部Client刷新"
            },
            {
              "id": "springcloudbus-9-19-1-d2",
              "tag": "自定义事件",
              "desc": "extends RemoteApplicationEvent广播自定义业务事件"
            },
            {
              "id": "springcloudbus-9-19-1-d3",
              "tag": "Destination",
              "desc": "bus-refresh?destination=service-id:**指定接收服务"
            },
            {
              "id": "springcloudbus-9-19-1-d4",
              "tag": "Nacos自带推送不需Bus/Spring Cloud Config需要Bus刷新",
              "desc": "Nacos Config长连接监听配置变更自动推送至客户端无需额外Bus组件;Spring Cloud Config需配合Bus+MQ(RabbitMQ/Kafka)广播/actuator/bus-refresh才能实现多节点配置动态刷新"
            }
          ]
        }
      ]
    },
    {
      "id": "9-21-spring-security与认证授权-9-20",
      "title": "9.21 Spring Security与认证授权",
      "points": [
        {
          "id": "springsecurity核心架构-9-20-0",
          "tag": "Spring Security核心架构",
          "desc": "Spring Security基于过滤器链(FilterChain)实现认证+授权,核心组件:SecurityFilterChain注册多个Filter按顺序执行(UsernamePasswordAuthenticationFilter→SecurityContextFilter→AuthorizationFilter),AuthenticationManager委托AuthenticationProvider认证(常用DaoAuthenticationProvider查UserDetailsService),SecurityContext持有认证信息供后续授权使用",
          "details": [
            {
              "id": "springsecurity核心架构-9-20-0-d0",
              "tag": "FilterChain机制",
              "desc": "DelegatingFilterProxy桥接Servlet Filter与Spring Bean;SecurityFilterChain由多个Filter组成按优先级排序(FilterOrderRegistration定义顺序);自定义Filter插入指定位置(FilterOrderRegistration.ORDER);SecurityContextPersistenceFilter加载/清理SecurityContext;每个Filter处理特定职责(认证/授权/CORS/CSRF/异常)"
            },
            {
              "id": "springsecurity核心架构-9-20-0-d1",
              "tag": "Authentication认证流程",
              "desc": "AuthenticationManager.authenticate()→委托Provider链;DaoAuthenticationProvider调用UserDetailsService.loadUserByUsername()查DB获取UserDetails→PasswordEncoder.matches()验证密码→成功创建UsernamePasswordAuthenticationToken放入SecurityContext;失败抛AuthenticationException→AuthenticationEntryPoint处理(401/跳转登录页)"
            },
            {
              "id": "springsecurity核心架构-9-20-0-d2",
              "tag": "Authorization授权机制",
              "desc": "AuthorizationManager检查已认证用户是否有权限:①FilterBasedAuthorizationManager(AuthorizationFilter)拦截请求;②@PreAuthorize/@PostAuthorize注解方法级授权(Spel表达式);③hasRole/hasAuthority基于角色/权限;④自定义AuthorizationManager实现复杂规则(数据权限/租户隔离);5AccessDeniedException→AccessDeniedHandler处理(403)"
            },
            {
              "id": "springsecurity核心架构-9-20-0-d3",
              "tag": "SecurityContext与上下文传递",
              "desc": "SecurityContextStrategy决定存储策略:MODE_THREADLOCAL(默认,线程隔离)/MODE_INHERITABLETHREADLOCAL(子线程继承)/MODE_GLOBAL(全局共享);SecurityContext通过SecurityContextHolder.getContext()获取;异步场景(@Async/CompletableFuture)需DelegatingSecurityContextRunnable/Callable传递上下文;Reactive用ReactiveSecurityContextHolder"
            },
            {
              "id": "springsecurity核心架构-9-20-0-d4",
              "tag": "自定义认证扩展",
              "desc": "①自定义UserDetailsService:实现loadUserByUsername()查DB/Redis/LDAP返回UserDetails;②自定义AuthenticationProvider:短信验证码/第三方OAuth/指纹等多因素认证;③自定义Filter:JwtAuthenticationFilter解析Token→构建Authentication→放入Context;④自定义SuccessHandler/FailureHandler:登录成功返回JWT/失败返回错误码;⑤SecurityConfig.httpSecurity配置过滤器链"
            },
            {
              "id": "springsecurity核心架构-9-20-0-d5",
              "tag": "JWT与Token认证",
              "desc": "①JWT(JSON Web Token):Header(Payload+Signature算法)→Payload(userId/tenantId/roles/exp)→Signature(HMAC-SHA256/RS256签名);②签发:登录成功JwtUtil.generateToken(userDetails)返回JWT;③验证:JwtAuthenticationFilter解析Token→验签→查Redis缓存(防伪造+过期)→构建Authentication;④刷新:双Token机制(accessToken短有效期+refreshToken长有效期);⑤无状态:JWT不依赖Session但需Redis做黑名单(强制登出/密码修改后旧Token失效)"
            },
            {
              "id": "springsecurity核心架构-9-20-0-d6",
              "tag": "密码安全与CSRF",
              "desc": "①PasswordEncoder:BCrypt(默认自适应salt+10轮迭代)/SCrypt/PBKDF2,不可逆哈希存储;②DelegatingPasswordEncoder支持多编码格式迁移({bcrypt}前缀标识);③CSRF防护:CsrfFilter生成Token→前端表单隐藏字段/Cookie双提交,CORS跨域请求排除CSRF;④REST API通常禁用CSRF(无状态JWT不需要);⑤密码迁移:旧SHA→新BCrypt,DelegatingPasswordEncoder自动识别旧格式+下次登录升级编码"
            }
          ]
        },
        {
          "id": "oauth2与oidc协议-9-20-1",
          "tag": "OAuth2与OIDC协议",
          "desc": "OAuth2授权框架让用户授权第三方应用访问其资源(不暴露密码),4种授权模式:Authorization Code(最安全,服务端应用),PKCE增强Authorization Code(移动端/SPA),Client Credentials(服务间调用),Resource Owner Password Credentials(已弃用);OIDC(OAuth2扩展)在AccessToken基础上增加IDToken(JWT格式含用户身份信息)实现认证",
          "details": [
            {
              "id": "oauth2与oidc协议-9-20-1-d0",
              "tag": "Authorization Code流程",
              "desc": "①客户端重定向用户到授权服务器(/oauth2/authorize);②用户登录+同意授权;③授权服务器回调客户端(/oauth2/code)携带authorization_code;④客户端用code+client_secret换取access_token(/oauth2/token);⑤access_token访问资源API;PKCE增强:code_verifier(S256哈希)+code_challenge防code截获替换"
            },
            {
              "id": "oauth2与oidc协议-9-20-1-d1",
              "tag": "Token类型与生命周期",
              "desc": "①Access Token:短期有效期(1-24h),Bearer类型Authorization:Bearer xxx;②Refresh Token:长期有效期(30-90d),仅一次使用换取新AccessToken+新RefreshToken(Rotation防止重放);③ID Token(OIDC):JWT格式含sub/name/email/aud/iss/exp,标识用户身份;④Token过期:access过期→用refresh换新;refresh过期→重新授权流程"
            },
            {
              "id": "oauth2与oidc协议-9-20-1-d2",
              "tag": "Spring Authorization Server",
              "desc": "Spring官方OAuth2授权服务器(替代Spring Security OAuth已废弃);配置:RegisteredClient定义客户端(clientId/secret/redirectUri/scopes/grantTypes);AuthorizationServerSettings端点路径;TokenSettings定义token有效期/刷新策略;JWKSource签名密钥(RS256);OAuth2Authorization存储授权状态;支持Authorization Code+PKCE+Client Credentials+Refresh Token"
            },
            {
              "id": "oauth2与oidc协议-9-20-1-d3",
              "tag": "OIDC与身份认证",
              "desc": "OIDC=OAuth2+身份认证层;ID Token(JWT):sub(用户唯一标识)/aud(客户端ID)/iss(授权服务器)/exp(过期)/iat(签发)/nonce(防重放);UserInfo端点:GET /userinfo返回用户详细信息;Scope:openid必须+profile/email/address可选;Claims Request:客户端指定需要的用户属性;验证ID Token:验签+验iss+验aud+验exp+验nonce"
            },
            {
              "id": "oauth2与oidc协议-9-20-1-d4",
              "tag": "资源服务器配置",
              "desc": "ResourceServer配置验证Access Token:①JWT验证:本地验签(JWK Set公钥)无需调用授权服务器;②Introspection验证:调用授权服务器/oauth2/introspect端点校验Token(Opaque Token);③Spring Security oauth2ResourceServer().jwt()配置JWT验证;④权限映射:jwtAuthenticationConverter将JWT claims→GrantedAuthority;⑤scope权限:SCOPE_read/SCOPE_write映射为角色"
            },
            {
              "id": "oauth2与oidc协议-9-20-1-d5",
              "tag": "OAuth2安全最佳实践",
              "desc": "①client_secret仅服务端使用,SPA/移动端用PKCE替代;②Redirect URI精确匹配防止开放重定向;③state参数防CSRF(随机值+回调验证);④Access Token短有效期+Refresh Token Rotation防泄漏;⑤Token不通过URL传递(用Authorization Header);⑥Scope最小权限原则;7PKCE的code_challenge_method=S256(SHA256哈希)而非plain"
            }
          ]
        },
        {
          "id": "sso单点登录实现-9-20-2",
          "tag": "SSO单点登录实现",
          "desc": "SSO(Single Sign-On)一次登录多系统通行,核心机制:认证中心(CAS/OAuth2授权服务器)统一认证→颁发Token/Cookie→子系统验证Token有效性;退出时认证中心广播 logout 通知所有子系统清除Session;SSO协议:CAS(SAML-based票据模型)/OAuth2+OIDC(现代授权框架)/SAML2.0(XML企业级)/Cookie共享(同根域简化方案)",
          "details": [
            {
              "id": "sso单点登录实现-9-20-2-d0",
              "tag": "CAS协议流程",
              "desc": "①用户访问子系统app1→未登录重定向到CAS认证中心(/login?service=app1_url);②CAS中心展示登录页→用户认证成功→生成Service Ticket(ST);③重定向回app1?ticket=ST-xxx;④app1后台用ST向CAS验证(/serviceValidate)→CAS确认ST有效返回用户信息;⑤app1创建本地Session;⑥用户访问app2→同样重定向CAS→CAS发现已有TGT(全局Session)→直接生成新ST→无需再次登录"
            },
            {
              "id": "sso单点登录实现-9-20-2-d1",
              "tag": "OAuth2/OIDC实现SSO",
              "desc": "①用户访问子系统→未登录重定向OAuth2授权服务器;②授权服务器登录→颁发Authorization Code;③子系统用Code换Access Token+ID Token(OIDC);④ID Token含用户身份→子系统创建本地Session;⑤其他子系统→同样重定向→授权服务器发现已有全局Session→直接颁发新Code→无需再次登录;⑥优势:标准化+现代框架(Spring Authorization Server)支持"
            },
            {
              "id": "sso单点登录实现-9-20-2-d2",
              "tag": "SAML2.0企业级SSO",
              "desc": "SAML=Security Assertion Markup Language(XML协议);①IdP(Identity Provider)统一认证中心;②SP(Service Provider)各子系统;③用户访问SP→SP生成SAML AuthnRequest→重定向IdP;④IdP认证→返回SAML Response(数字签名XML含用户属性);⑤SP验证签名+断言→创建本地Session;⑥SAML优势:企业AD/LDAP集成强+数字签名安全+属性丰富;缺点:XML复杂+配置难+移动端不友好"
            },
            {
              "id": "sso单点登录实现-9-20-2-d3",
              "tag": "同根域Cookie共享方案",
              "desc": "最简SSO方案(适用于同一根域名如a.company.com+b.company.com):①认证中心登录成功→设置Cookie domain=.company.com(跨子域共享);②Cookie值=加密Token(JWT或sessionId);③子系统读取Cookie→验证Token有效性→创建本地Session;④退出:认证中心删除Cookie+调用子系统logout接口;⑤限制:仅同根域有效,跨域需CAS/OAuth2/SAML;⑥安全:Cookie HttpOnly+Secure+SameSite=None(跨域需HTTPS)"
            },
            {
              "id": "sso单点登录实现-9-20-2-d4",
              "tag": "SSO退出与Session同步",
              "desc": "①单点退出(SLO):认证中心logout→广播通知所有子系统(回调URL/消息队列/前端轮询)清除Session;②CAS Single Logout:认证中心发送POST logout请求到所有注册子系统;③OAuth2退出:授权服务器delete Token+子系统delete Session;④部分退出:仅退出当前子系统不清除全局Session(用户仍可免登访问其他系统);⑤前端方案:共享localStorage Token→一个系统退出→前端广播清除所有Tab的Token"
            },
            {
              "id": "sso单点登录实现-9-20-2-d5",
              "tag": "Spring Security SSO实战",
              "desc": "①OAuth2 Client集成:spring-security-oauth2-client依赖;②SecurityConfig.oauth2Login()配置授权服务器端点;③application.yml注册OAuth2 Client(clientId/secret/redirectUri/issuer-uri);④OAuth2UserService自定义用户映射(OIDC claims→本地UserDetails);⑤多Client多授权服务器:注册多个Client配置;⑥前端SPA:后端/oauth2/authorize重定向→授权→回调→获取Token→前端存储Token+API请求带Authorization Header"
            },
            {
              "id": "sso单点登录实现-9-20-2-d6",
              "tag": "SSO安全与常见问题",
              "desc": "①Token/ST一次性使用防重放攻击(CAS ST验证后立即失效);②重定向URI白名单防开放重定向漏洞;③CSRF防护:state参数(OAuth2)/SAML RelayState;④时钟同步:JWT/SAML签名验证需时钟同步(允许±30s偏差);⑤跨域Cookie:SameSite=None+HTTPS+前端代理;⑥Session固定攻击:登录后重新生成sessionId;⑦降级策略:认证中心宕机→子系统本地Token缓存短期可用+告警通知"
            }
          ]
        },
        {
          "id": "owasp-top10-9-20-3",
          "tag": "OWASP Top 10安全风险",
          "desc": "OWASP Top 10 2021十大Web安全风险:A01权限控制失效(越权/IDOR/路径遍历)/A02加密失败(敏感数据明文传输存储)/A03注入(SQL/XSS/命令注入)/A04不安全设计(缺少安全架构设计)/A05安全配置错误(默认配置/未关闭调试)/A06过时组件(已知漏洞的依赖)/A07身份认证失败(弱密码/会话管理)/A08软件和数据完整性失败(不安全CI/CD/未验证更新)/A09日志监控不足(缺乏攻击检测)/A10服务端请求伪造SSRF(内网访问/云元数据)",
          "details": [
            {
              "id": "owasp-top10-9-20-3-d0",
              "tag": "A01权限控制",
              "desc": "越权访问(IDOR修改userId参数)/路径遍历(../../etc/passwd)/未授权API调用,防护:权限校验+参数绑定+白名单"
            },
            {
              "id": "owasp-top10-9-20-3-d1",
              "tag": "A02加密失败",
              "desc": "敏感数据(密码/身份证/银行卡)明文存储传输/使用弱算法MD5/SHA1/未启用TLS,防护:bcrypt/Argon2哈希+TLS强制+数据脱敏"
            },
            {
              "id": "owasp-top10-9-20-3-d2",
              "tag": "A03注入",
              "desc": "SQL注入(MyBatis ${}/未校验输入)/XSS存储型反射型/命令注入(|管道绕过),防护:#{}/参数校验/CSRF Token/输出编码"
            },
            {
              "id": "owasp-top10-9-20-3-d3",
              "tag": "A05安全配置错误",
              "desc": "默认密码未改/调试模式开启/cors Allow-Origin:*目录列出/未关闭不必要的HTTP方法,防护:安全基线/配置审计/自动化检查"
            },
            {
              "id": "owasp-top10-9-20-3-d4",
              "tag": "A07身份认证",
              "desc": "弱密码/会话固定/JWT泄露不刷新/多因素认证缺失,防护:密码强度策略+MFA+会话超时+JWT短期+刷新令牌"
            },
            {
              "id": "owasp-top10-9-20-3-d5",
              "tag": "A09日志监控",
              "desc": "缺乏入侵检测/异常登录无告警/攻击日志未集中分析,防护:集中日志ELK/异常检测规则/实时告警/定期审计"
            },
            {
              "id": "owasp-top10-9-20-3-d6",
              "tag": "A10 SSRF",
              "desc": "内网服务未授权访问/云元数据AK泄露/本地文件读取,防护:URL白名单+禁内网IP+限制协议+代理校验"
            }
          ]
        },
        {
          "id": "jwt深入与安全实践-9-20-4",
          "tag": "JWT深入与安全实践",
          "desc": "JWT(JSON Web Token)结构:Header(alg算法typ类型)+Payload(claims声明iss签发者sub主题exp过期aud受众iat签发时间)+Signature(HMACSHA256或RSA签名).Access Token短期(15-30分钟)+Refresh Token长期(7-30天)刷新机制:过期后用Refresh Token换新Access Token无需重新登录.安全陷阱:JWT无法撤销(已签发直到过期才失效)/payload未加密(base64可解码不要存敏感信息)/算法混淆攻击(alg:none绕过签名).防护:短期Token+黑名单(Redis存已注销Token)+HS256固定算法不信任alg头+HTTPS传输+不存密码等敏感claim",
          "details": [
            {
              "id": "jwt深入与安全实践-9-20-4-d0",
              "tag": "JWT三段结构",
              "desc": "Header(alg:HS256/RS256,type:JWT)+Payload(claims:iss/sub/exp/iat/aud自定义)+Signature(BASE64URL(Header)+BASE64URL(Payload)+secret签名),用.分隔三段"
            },
            {
              "id": "jwt深入与安全实践-9-20-4-d1",
              "tag": "Access+Refresh双Token",
              "desc": "Access短期15-30分钟过期需刷新/Refresh长期7-30天用于换新Access/Refresh存Redis可主动撤销,双Token机制避免频繁重新登录"
            },
            {
              "id": "jwt深入与安全实践-9-20-4-d2",
              "tag": "JWT安全陷阱",
              "desc": "alg:none攻击(算法头设none绕过签名验证)/payload未加密base64可解码(不存敏感信息)/无法撤销已签发Token直到过期/密钥泄露所有Token失效"
            },
            {
              "id": "jwt深入与安全实践-9-20-4-d3",
              "tag": "JWT防护措施",
              "desc": "短期Token减少暴露窗口/注销时Redis黑名单+白名单/固定算法不信任alg头/HTTPS传输/不存密码身份证等敏感claim/密钥定期轮换"
            },
            {
              "id": "jwt深入与安全实践-9-20-4-d4",
              "tag": "HS256 vs RS256",
              "desc": "HS256对称密钥签名验证同密钥(简单但密钥分发问题)/RS256非对称私钥签公钥验(微服务间安全签发方持私钥验证方持公钥),生产推荐RS256"
            },
            {
              "id": "jwt深入与安全实践-9-20-4-d5",
              "tag": "JWT vs Session",
              "desc": "JWT无状态服务端不存(微服务友好可水平扩展)/Session有状态服务端存(集中管理易撤销/踢人),JWT适合分布式/Session适合单体+强安全需求"
            },
            {
              "id": "jwt深入与安全实践-9-20-4-d6",
              "tag": "Spring Security JWT集成",
              "desc": "jjwt库签发验证/自定义JwtAuthenticationFilter拦截提取Token/SecurityContext存认证信息/Token过期返回401触发Refresh流程"
            }
          ]
        }
      ]
    }
  ]
};
