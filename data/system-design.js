// system-design.js — 十、系统设计 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['system-design'] = {
  "id": "system-design",
  "title": "十、系统设计",
  "tag": "分布式",
  "order": 10,
  "icon": "🚀",
  "cssIndex": 9,
  "subs": [
    {
      "id": "10-1-设计原则-10-0",
      "title": "10.1 设计原则",
      "points": [
        {
          "id": "cap定理-10-0-0",
          "tag": "CAP定理",
          "desc": "分布式系统三个特性最多同时满足两个:Consistency一致性(所有节点同一时间看到相同数据)、Availability可用性(每个请求都能收到响应)、Partition tolerance分区容错(网络分区时系统继续运行)。CP(强一致性+分区容错: ZooKeeper/etcd,写操作可能失败)。AP(可用性+分区容错: Cassandra/DNS/Cassandra,可能读到旧数据).BASE理论: Basically Available Soft state Eventual consistency",
          "details": [
            {
              "id": "cap定理-10-0-0-d0",
              "tag": "CAP三选二",
              "desc": "CP(ZooKeeper/etcd) AP(Cassandra/DNS)"
            },
            {
              "id": "cap定理-10-0-0-d1",
              "tag": "BASE",
              "desc": "基本可用+软状态+最终一致性（BASE的详细说明：CAP定理中关于BASE的内容）"
            },
            {
              "id": "cap定理-10-0-0-d2",
              "tag": "CAP定理",
              "desc": "分布式最多同时满足C一致性A可用性P分区容忍三者之二不可兼得"
            },
            {
              "id": "cap定理-10-0-0-d3",
              "tag": "CP系统",
              "desc": "Zookeeper/Etcd牺牲可用性保证一致性适合配置管理分布式锁"
            },
            {
              "id": "cap定理-10-0-0-d4",
              "tag": "AP系统",
              "desc": "Eureka/Cassandra牺牲一致性保证可用性适合注册发现最终一致"
            },
            {
              "id": "cap定理-10-0-0-d5",
              "tag": "BASE",
              "desc": "Basically Available基本可用+Soft State软状态+Eventually Consistent最终一致"
            }
          ]
        },
        {
          "id": "高可用ha-10-0-1",
          "tag": "高可用HA",
          "desc": "冗余:多副本部署避免单点故障。故障检测:心跳/健康检查。故障转移:主备切换自动/手动。熔断: Hystrix/Sentinel(错误率达到阈值打开熔断器快速失败,半开后试探恢复)。降级: 返回兜底数据/默认值/友好提示。限流: 令牌桶/漏桶/滑动窗口(入口保护QPS)。超时: 设置合理的连接/读/写超时避免级联雪崩",
          "details": []
        },
        {
          "id": "高扩展-10-0-2",
          "tag": "高扩展",
          "desc": "垂直扩展(升级硬件CPU/内存简单但有上限贵)。水平扩展(增加机器节点,需无状态设计+数据分片+负载均衡)。无状态: 会话信息存Redis/外部化不依赖本地。数据分片: ShardingSphere分库分表。缓存: 多级缓存减轻DB压力。消息队列: 异步削峰解耦",
          "details": []
        }
      ]
    },
    {
      "id": "10-2-负载均衡-10-1",
      "title": "10.2 负载均衡",
      "points": [
        {
          "id": "四层负载均衡-10-1-0",
          "tag": "四层负载均衡",
          "desc": "L4(传输层):基于IP+端口分发(F5/LVS/Nginx stream)。不关心应用层内容,性能高适合TCP/UDP协议转发。LVS(Linux Virtual Server):工作在内核空间(DR/TUN/NAT三种模式),DR模式性能最好(请求响应都经过LB修改MAC地址)",
          "details": [
            {
              "id": "四层负载均衡-10-1-0-d0",
              "tag": "L4",
              "desc": "IP+端口分发 F5/LVS/Nginx stream"
            },
            {
              "id": "四层负载均衡-10-1-0-d1",
              "tag": "LVS DR模式",
              "desc": "内核空间+改MAC最高效（LVS DR模式的详细说明：四层负载均衡中关于LVS DR模式的内容）"
            },
            {
              "id": "四层负载均衡-10-1-0-d2",
              "tag": "负载均衡算法",
              "desc": "轮询/加权轮询/最少连接/源地址Hash/随机5种策略选择"
            },
            {
              "id": "四层负载均衡-10-1-0-d3",
              "tag": "四层LB(L4)",
              "desc": "传输层IP+端口转发LVS/NAT/DR/TUN模式性能极高"
            },
            {
              "id": "四层负载均衡-10-1-0-d4",
              "tag": "七层LB(L7)",
              "desc": "应用层URL/Header/Cookie路由Nginx/HAProxy功能丰富"
            },
            {
              "id": "四层负载均衡-10-1-0-d5",
              "tag": "Nginx配置",
              "desc": "upstream+proxy_pass+weight+max_fails+fail_timeout+backup"
            }
          ]
        },
        {
          "id": "七层负载均衡-10-1-1",
          "tag": "七层负载均衡",
          "desc": "L7(应用层):基于URL/Header/Cookie等HTTP内容分发(Nginx/HAProxy)。功能丰富(会话保持/SSL卸载/健康检查/ACL规则)但性能低于L4。Nginx upstream:轮询(round robin)/加权(weight)/IP哈希(ip_hash源地址粘性)/最少连接(least_conn)/fair(响应时间短优先)",
          "details": []
        },
        {
          "id": "服务发现-10-1-2",
          "tag": "服务发现",
          "desc": "客户端侧:从注册中心获取服务列表本地缓存+定时刷新,客户端选择目标(Ribbon随机/轮询权重)。服务端侧:通过DNS轮询或VIP+LB集群入口。Consul/Eureka/Nacos:服务注册(心跳续约)+发现(拉取列表)+健康检查(探活剔除故障节点)",
          "details": []
        }
      ]
    },
    {
      "id": "10-3-分布式事务-10-2",
      "title": "10.3 分布式事务",
      "points": [
        {
          "id": "2pc两阶段提交-10-2-0",
          "tag": "2PC两阶段提交",
          "desc": "准备阶段(Prepare):协调者向所有参与者发送prepare请求,参与者执行本地事务写undo/redo日志但不提交,返回Yes/No。提交阶段(Commit):全部Yes则发送Commit(参与者提交释放资源),任一No则发送Rollback(回滚释放)。缺点:同步阻塞(协调者单点/所有参与者阻塞等待)/数据不一致(协调者Commit时部分参与者收不到)/性能差(两次RTT+锁持有时间长)",
          "details": [
            {
              "id": "2pc两阶段提交-10-2-0-d0",
              "tag": "Prepare全Yes",
              "desc": "Prepare全Yes→Commit / 任一No→Rollback"
            },
            {
              "id": "2pc两阶段提交-10-2-0-d1",
              "tag": "缺点",
              "desc": "同步阻塞/单点/性能差（缺点的详细说明：2PC两阶段提交中关于缺点的内容）"
            },
            {
              "id": "2pc两阶段提交-10-2-0-d2",
              "tag": "2PC/XA",
              "desc": "协调者Prepare→Commit/Rollback强一致但阻塞+单点协调者风险"
            },
            {
              "id": "2pc两阶段提交-10-2-0-d3",
              "tag": "TCC",
              "desc": "Try预留→Confirm确认→Cancel补偿柔性事务每服务3接口复杂"
            },
            {
              "id": "2pc两阶段提交-10-2-0-d4",
              "tag": "本地消息表",
              "desc": "业务+写消息表同事务→定时扫描→MQ→消费端最终一致简单"
            },
            {
              "id": "2pc两阶段提交-10-2-0-d5",
              "tag": "Seata",
              "desc": "AT自动补偿+TCC+Saga+XA多种模式Spring Cloud生态集成"
            }
          ]
        },
        {
          "id": "3pc三阶段提交-10-2-1",
          "tag": "3PC三阶段提交",
          "desc": "增加CanCommit预询问(减少不必要的Prepare开销)和PreCommit预处理(超时自动中断)。引入超时机制:参与者等待超时自动中止/协调者等待超时自动中止。但仍存在数据不一致风险(Coordinator发出Commit后部分收不到)。实际生产中极少使用",
          "details": []
        },
        {
          "id": "tcc补偿型-10-2-2",
          "tag": "TCC补偿型",
          "desc": "Try(预留资源:冻结余额扣减库存锁定),Confirm(确认执行业务:实际扣减解冻),Cancel(取消回滚:释放资源恢复余额)。特点:业务侵入性强(需实现三个接口)/性能比2PC好(无全局锁长持)。适用:强一致性要求的核心业务(支付/库存扣减)。框架:Seata TCC/HMily/TCC-Transaction",
          "details": []
        },
        {
          "id": "saga模式-10-2-3",
          "tag": "Saga模式",
          "desc": "将长事务拆分为多个本地短事务,每个事务有对应的补偿操作(正向+逆向补偿)。编排模式:中央协调器(Orchestrator)按顺序调用每个服务+失败后逆序调用补偿。协同模式:各服务间通过事件驱动(Choreography)无需中心协调。优点:无长期锁高性能。缺点:补偿逻辑复杂/无法保证读一致性(中间状态可被读到)",
          "details": []
        },
        {
          "id": "可靠消息最终一致性-10-2-4",
          "tag": "可靠消息最终一致性",
          "desc": "本地消息表:业务和消息在同一DB事务保证原子性(MQ轮询发送)。事务消息(Half Message):RocketMQ半消息→执行本地事务→Commit/Rollback消息→消费者消费。最大努力通知:主动查询重试+N次失败后告警人工介入+对账系统兜底。适用于:可接受最终一致性的非核心场景(积分/通知/异步解耦)",
          "details": []
        }
      ]
    }
  ]
};

// computer-network.js — 十一、计算机网络 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['computer-network'] = {
  "id": "computer-network",
  "title": "十一、计算机网络",
  "tag": "计算机网络",
  "order": 11,
  "icon": "🛡️",
  "cssIndex": 10,
  "subs": [
    {
      "id": "11-1-http与websocket-11-0",
      "title": "11.1 HTTP与WebSocket",
      "points": [
        {
          "id": "http请求方法-11-0-0",
          "tag": "HTTP请求方法",
          "desc": "GET(获取资源幂等可缓存)/POST(提交数据非幂等不可缓存)/PUT(全量更新替换)/PATCH(部分更新)/DELETE(删除资源)/HEAD(只返回头不返回体,检查资源是否存在)/OPTIONS(查询支持的HTTP方法,CORS预检请求)。POST vs PUT:POST非幂等多次提交创建多个资源,PUT幂等多次提交同一URL结果相同",
          "details": [
            {
              "id": "http请求方法-11-0-0-d0",
              "tag": "GET幂等可",
              "desc": "GET幂等可缓存 POST非幂等不可缓存"
            },
            {
              "id": "http请求方法-11-0-0-d1",
              "tag": "PUT全量替换 PATCH部分更新",
              "desc": "PUT需提交完整资源替换原数据，PATCH只发送变更字段局部更新，更省带宽"
            },
            {
              "id": "http请求方法-11-0-0-d2",
              "tag": "OPTIONS",
              "desc": "CORS预检 HEAD=只返回头"
            }
          ]
        },
        {
          "id": "http常见header-11-0-1",
          "tag": "HTTP常见Header",
          "desc": "请求头:Accept(期望MIME)/Content-Type(请求体格式application/json/form-data)/Authorization(Bearer Token认证)/Cache-Control(no-cache)/Host(目标主机)/User-Agent/Referer/Cookie。响应头:Content-Type/Content-Length/Content-Encoding(gzip)/Set-Cookie/Access-Control-Allow-Origin(CORS)/ETag/Last-Modified/Location(重定向)/X-Request-Id(链路追踪)",
          "details": [
            {
              "id": "http常见header-11-0-1-d0",
              "tag": "请求",
              "desc": "Accept/Content-Type/Authorization/Host/Cookie"
            },
            {
              "id": "http常见header-11-0-1-d1",
              "tag": "响应",
              "desc": "Content-Type/Set-Cookie/CORS头/ETag/Location"
            }
          ]
        },
        {
          "id": "http缓存机制-11-0-2",
          "tag": "HTTP缓存机制",
          "desc": "强缓存(不发请求直接用本地):Cache-Control(max-age=秒/public/private/no-cache/no-store)>Expires(HTTP1.0绝对时间已过时)。协商缓存(发请求验证是否可用):ETag(if-None-Match优先)>Last-Modified(if-Modified-Since)。命中强缓存返回200(from cache);命中协商缓存返回304 Not Modified不传body;未命中正常200返回新资源",
          "details": [
            {
              "id": "http缓存机制-11-0-2-d0",
              "tag": "强缓存",
              "desc": "Cache-Control(max-age) > Expires"
            },
            {
              "id": "http缓存机制-11-0-2-d1",
              "tag": "协商缓存",
              "desc": "ETag > Last-Modified"
            },
            {
              "id": "http缓存机制-11-0-2-d2",
              "tag": "200(from cache)/304/200 三种响应",
              "desc": "强缓存命中返回200(from cache)不发请求；协商缓存命中304不传body；未命中200传新资源"
            }
          ]
        },
        {
          "id": "cors跨域-11-0-3",
          "tag": "CORS跨域",
          "desc": "浏览器安全策略限制跨域请求。简单请求(GET/HEAD/POST且Content-Type为text/plain/form-data/x-www-form-urlencoded)直接发但响应需Access-Control-Allow-Origin。非简单请求先发OPTIONS预检请求,服务端需返回Allow-Origin/Allow-Methods/Allow-Headers/Allow-Credentials。携带Cookie需Allow-Credentials=true且Origin不能为*",
          "details": [
            {
              "id": "cors跨域-11-0-3-d0",
              "tag": "简单请求直接发 非简单先OPTIONS预检",
              "desc": "简单请求满足GET/HEAD/POST+简单Content-Type直接发；非简单先发OPTIONS预检获CORS头许可"
            },
            {
              "id": "cors跨域-11-0-3-d1",
              "tag": "携带Cookie",
              "desc": "Credentials=true Origin不能为*"
            },
            {
              "id": "cors跨域-11-0-3-d2",
              "tag": "服务端4个响应头",
              "desc": "Origin/Methods/Headers/Credentials"
            }
          ]
        },
        {
          "id": "websocket协议-11-0-4",
          "tag": "WebSocket协议",
          "desc": "基于HTTP升级机制:客户端发Upgrade:websocket请求,服务端返回101 Switching Protocols握手成功后转为全双工长连接。特点:双向通信(服务端主动推送)/低开销(帧头2-10字节vs HTTP数百字节)/无同源限制/支持二进制帧。心跳ping/pong保活。断线重连策略:指数退避+最大重试次数+重连状态提示",
          "details": [
            {
              "id": "websocket协议-11-0-4-d0",
              "tag": "HTTP Upgrade 101握手",
              "desc": "HTTP Upgrade 101握手→全双工长连接"
            },
            {
              "id": "websocket协议-11-0-4-d1",
              "tag": "帧头2-10字节 vs HTTP数百字节",
              "desc": "WebSocket帧头仅2-10字节开销极低，HTTP每次请求携带数百字节头信息开销大"
            },
            {
              "id": "websocket协议-11-0-4-d2",
              "tag": "ping/pong心跳+指数退避重连",
              "desc": "ping/pong帧保活检测连接状态；断线重连用指数退避策略避免服务器压力，设最大重试次数"
            }
          ]
        }
      ]
    },
    {
      "id": "11-2-https与tls深入-11-1",
      "title": "11.2 HTTPS与TLS深入",
      "points": [
        {
          "id": "tls13改进-11-1-0",
          "tag": "TLS 1.3改进",
          "desc": "vs TLS 1.2(4次RTT):TLS 1.3只需1-RTT甚至0-RTT(恢复会话)。移除不安全算法(RC4/DES/3DES/CBC/AES-CCM/SHA1/MD5/RSA密钥交换)。强制ECDHE密钥交换(前向安全性:私钥泄露不影响历史会话)。支持0-RTT:首次连接缓存session ticket,重连时在ClientHello携带预共享密钥PSK+early data",
          "details": [
            {
              "id": "tls13改进-11-1-0-d0",
              "tag": "TLS1.3",
              "desc": "1-RTT(新连接)/0-RTT(恢复)"
            },
            {
              "id": "tls13改进-11-1-0-d1",
              "tag": "移除RSA密钥交换强制ECDHE(前向安全)",
              "desc": "RSA密钥交换私钥泄露可解密历史会话；ECDHE每次协商临时密钥，私钥泄露不影响历史记录"
            },
            {
              "id": "tls13改进-11-1-0-d2",
              "tag": "0-RTT有重放风险仅限安全GET等幂等请求",
              "desc": "0-RTT携带PSK+early data可能被攻击者截获重放，仅用于幂等GET请求避免状态变更风险"
            }
          ]
        },
        {
          "id": "数字证书体系-11-1-1",
          "tag": "数字证书体系",
          "desc": "证书包含:域名/公钥/签发CA/有效期/签名算法/指纹。证书链:终端证书→中间CA→根CA(预埋浏览器/OS)。验证:浏览器逐级验证签名直到根CA。DV(域名验证自动颁发10分钟)/OV(组织验证人工审核3-7天)/EV(扩展验证最严格绿色地址栏,7-10天)。自签名证书仅开发测试用",
          "details": [
            {
              "id": "数字证书体系-11-1-1-d0",
              "tag": "证书链",
              "desc": "终端→中间CA→根CA(预埋)"
            },
            {
              "id": "数字证书体系-11-1-1-d1",
              "tag": "DV自动/OV人工/EV最严格",
              "desc": "DV仅验证域名10分钟自动颁发；OV验证组织身份3-7天；EV最严格7-10天浏览器显示绿色地址栏"
            },
            {
              "id": "数字证书体系-11-1-1-d2",
              "tag": "证书",
              "desc": "域名+公钥+CA签名+有效期（证书的详细说明：数字证书体系中关于证书的内容）"
            }
          ]
        },
        {
          "id": "对称与非对称加密-11-1-2",
          "tag": "对称与非对称加密",
          "desc": "对称加密(AES-128/256-GCM):同一密钥加密解密,速度快适合大量数据传输。非对称加密(RSA/ECC):公钥加密私钥解密(或私钥签名公钥验签),速度慢用于密钥交换和签名。TLS混合方案:非对称(ECDHE)交换会话密钥→对称(AES-GCM)加密数据。RSA密钥交换无前向安全,ECDHE有前向安全",
          "details": [
            {
              "id": "对称与非对称加密-11-1-2-d0",
              "tag": "对称AES-GCM快 非对称RSA/ECC慢",
              "desc": "AES-GCM同密钥加解密速度极快适合大数据量；RSA/ECC公私钥加解密慢仅用于密钥交换和签名"
            },
            {
              "id": "对称与非对称加密-11-1-2-d1",
              "tag": "TLS",
              "desc": "非对称交换密钥→对称加密数据（TLS的详细说明：对称与非对称加密中关于TLS的内容）"
            },
            {
              "id": "对称与非对称加密-11-1-2-d2",
              "tag": "ECDHE前向安全 RSA无前向安全",
              "desc": "ECDHE每次生成临时密钥前向安全；RSA用固定私钥交换，私钥泄露可追溯解密所有历史会话"
            }
          ]
        },
        {
          "id": "hsts与证书透明度-11-1-3",
          "tag": "HSTS与证书透明度",
          "desc": "HSTS(HTTP Strict Transport Security):响应头Strict-Transport-Security:max-age=秒;includeSubDomains;preload,强制浏览器只发HTTPS不再降级HTTP防SSL stripping攻击。CT(Certificate Transparency):证书颁发前提交到公开日志服务器可审计,防止恶意证书(CT log+SCT嵌入证书)。preload列表:提交hstspreload.org加入浏览器内置HTTPS白名单",
          "details": [
            {
              "id": "hsts与证书透明度-11-1-3-d0",
              "tag": "HSTS",
              "desc": "强制HTTPS防降级攻击（HSTS的详细说明：HSTS与证书透明度中关于HSTS的内容）"
            },
            {
              "id": "hsts与证书透明度-11-1-3-d1",
              "tag": "CT",
              "desc": "证书颁发前提交公开日志审计（CT的详细说明：HSTS与证书透明度中关于CT的内容）"
            },
            {
              "id": "hsts与证书透明度-11-1-3-d2",
              "tag": "preload",
              "desc": "浏览器内置HTTPS白名单（preload的详细说明：HSTS与证书透明度中关于preload的内容）"
            }
          ]
        }
      ]
    },
    {
      "id": "11-3-cdn与dns-11-2",
      "title": "11.3 CDN与DNS",
      "points": [
        {
          "id": "cdn原理-11-2-0",
          "tag": "CDN原理",
          "desc": "内容分发网络:将源站内容缓存到全球边缘节点,用户就近访问减少延迟。回源:边缘节点无缓存或缓存过期时向源站请求内容。缓存策略:Cache-Control/Expires控制TTL, stale-while-revalidate允许过期时异步刷新旧数据继续服务。动态加速:TCP优化/路由优化/压缩/预连接减少非缓存请求延迟",
          "details": [
            {
              "id": "cdn原理-11-2-0-d0",
              "tag": "边缘节点缓存就近",
              "desc": "CDN将源站内容缓存到全球边缘节点，用户就近访问降低延迟，无缓存时回源请求"
            },
            {
              "id": "cdn原理-11-2-0-d1",
              "tag": "回源",
              "desc": "无缓存或过期时请求源站（回源的详细说明：CDN原理中关于回源的内容）"
            },
            {
              "id": "cdn原理-11-2-0-d2",
              "tag": "stale-while-revalidate",
              "desc": "异步刷新旧数据继续服务（stale-while-revalidate的详细说明：CDN原理中关于stale-while-revalidate的内容）"
            }
          ]
        },
        {
          "id": "dns解析全过程-11-2-1",
          "tag": "DNS解析全过程",
          "desc": "1.浏览器DNS缓存(Chrome://net-internals/#dns)→2.OS DNS缓存(ipconfig/displaydns)→3.本地DNS递归解析器(运营商/ISP)→4.根DNS服务器(.)→5.顶级域TLD(.com/.cn)→6.权威DNS服务器(域名注册商配置的NS记录)→7.返回IP给浏览器。递归查询(客户端只问一次递归器代为完成全部迭代)vs迭代查询(客户端自己逐级查询)",
          "details": [
            {
              "id": "dns解析全过程-11-2-1-d0",
              "tag": "浏览器",
              "desc": "浏览器缓存→OS缓存→本地递归器→根→TLD→权威"
            },
            {
              "id": "dns解析全过程-11-2-1-d1",
              "tag": "递归",
              "desc": "客户端问一次递归器代为完成（递归的详细说明：DNS解析全过程中关于递归的内容）"
            },
            {
              "id": "dns解析全过程-11-2-1-d2",
              "tag": "迭代",
              "desc": "客户端逐级查询各级DNS（迭代的详细说明：DNS解析全过程中关于迭代的内容）"
            }
          ]
        },
        {
          "id": "dns记录类型-11-2-2",
          "tag": "DNS记录类型",
          "desc": "A(域名→IPv4地址)/AAAA(域名→IPv6)/CNAME(域名→另一个域名,CDN常用alias)/MX(邮件路由,优先级数字越小越高)/NS(指定权威DNS服务器)/TXT(任意文本,SPF/DKIM/验证所有权)/SRV(服务发现指定端口)/PTR(IP→域名反向解析)/SOA(区域权威信息主DNS+管理员邮箱+序列号)",
          "details": [
            {
              "id": "dns记录类型-11-2-2-d0",
              "tag": "A",
              "desc": "IPv4 AAAA=IPv6 CNAME=别名(CDN)"
            },
            {
              "id": "dns记录类型-11-2-2-d1",
              "tag": "MX",
              "desc": "邮件 NS=权威DNS TXT=SPF验证"
            },
            {
              "id": "dns记录类型-11-2-2-d2",
              "tag": "SRV",
              "desc": "SRV记录指定服务主机和端口用于服务发现，PTR是IP到域名的反向解析"
            }
          ]
        },
        {
          "id": "dns负载均衡-11-2-3",
          "tag": "DNS负载均衡",
          "desc": "Round Robin DNS:同一域名返回多个IP轮询分配(简单但无法感知负载健康状态)。权重DNS:按比例返回不同IP。GeoDNS:根据用户地理位置返回最近的IP(CDN常用)。Anycast DNS:同一IP广播到多个节点路由自动选最近(全球负载均衡)。DNS缓存导致切换慢(TTL未过期旧IP继续使用)",
          "details": [
            {
              "id": "dns负载均衡-11-2-3-d0",
              "tag": "Round Robin轮询/权重按比例/Geo按地理位置",
              "desc": "Round Robin简单轮询无负载感知；权重DNS按比例分配；GeoDNS按地理位置返回最近IP"
            },
            {
              "id": "dns负载均衡-11-2-3-d1",
              "tag": "Anycast",
              "desc": "同IP多节点路由选最近（Anycast的详细说明：DNS负载均衡中关于Anycast的内容）"
            },
            {
              "id": "dns负载均衡-11-2-3-d2",
              "tag": "DNS",
              "desc": "DNS缓存TTL未过期期间旧IP继续生效，导致服务切换后流量无法即时迁移"
            }
          ]
        }
      ]
    }
  ]
};
