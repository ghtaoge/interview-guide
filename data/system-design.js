// system-design.js — 十一、计算机网络 模块数据 (system-design模块已删除,内容重叠于distributed/high-performance/high-availability模块)
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['computer-network'] = {
  "id": "computer-network",
  "title": "二十、计算机网络",
  "tag": "计算机网络",
  "order": 20,
  "icon": "🛡️",
  "cssIndex": 19,
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
              "tag": "GET幂等可缓存",
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
            },
            {
              "id": "http请求方法-11-0-0-d3",
              "tag": "DELETE幂等",
              "desc": "DELETE幂等删除同一资源多次结果相同(第一次删除成功后续返回404),但需注意DELETE后的GET行为变化"
            },
            {
              "id": "http请求方法-11-0-0-d4",
              "tag": "POST vs PUT核心区别",
              "desc": "POST非幂等多次提交创建多个不同资源(如多次下单)/PUT幂等同一URL多次提交结果相同(如更新用户信息),幂等性是RESTful设计关键原则"
            },
            {
              "id": "http请求方法-11-0-0-d5",
              "tag": "GET vs POST数据传递",
              "desc": "GET参数在URL查询字符串(?key=val)有长度限制~2KB且可见不安全/POST参数在请求体无长度限制适合传大数据和敏感信息,生产API设计:查询用GET创建用POST"
            },
            {
              "id": "http请求方法-11-0-0-d6",
              "tag": "HEAD与缓存验证",
              "desc": "HEAD只返回响应头不返回体,用于检查资源是否存在/获取Content-Length/Last-Modified等元信息不发请求体节省带宽,可用于缓存有效性验证"
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
            },
            {
              "id": "http常见header-11-0-1-d2",
              "tag": "Content-Type常见值",
              "desc": "application/json(API请求)/application/x-www-form-urlencoded(表单)/multipart/form-data(文件上传)/text/html(网页)/text/plain(纯文本),前后端需确保Content-Type匹配否则解析失败"
            },
            {
              "id": "http常见header-11-0-1-d3",
              "tag": "Authorization认证头",
              "desc": "Basic(Base64编码user:pass安全性低)/Bearer(JWT Token现代API认证标准)/Digest(摘要认证比Basic安全),生产统一用Bearer Token+HTTPS"
            },
            {
              "id": "http常见header-11-0-1-d4",
              "tag": "X-Request-Id链路追踪",
              "desc": "唯一请求标识贯穿整个调用链(网关→服务→MQ→数据库),生产配合SkyWalking/Zipkin实现全链路追踪,排查问题时根据X-Request-Id快速定位"
            },
            {
              "id": "http常见header-11-0-1-d5",
              "tag": "Content-Encoding压缩",
              "desc": "gzip(最通用)/br(Brotli压缩率更高新标准)/deflate(旧标准),请求头Accept-Encoding:gzip,br告知服务器支持的压缩方式,生产启用gzip压缩文本资源减少70%传输量"
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
            },
            {
              "id": "http缓存机制-11-0-2-d3",
              "tag": "Cache-Control指令详解",
              "desc": "max-age=秒(缓存有效期)/public(任意缓存可存)/private(仅浏览器缓存)/no-cache(跳过强缓存每次协商验证)/no-store(完全不缓存最严格),生产API:no-cache保证数据新鲜静态资源:max-age=31536000长期缓存+文件名哈希版本更新"
            },
            {
              "id": "http缓存机制-11-0-2-d4",
              "tag": "ETag vs Last-Modified选择",
              "desc": "ETag基于内容哈希精确(文件内容变化才更新)/Last-Modified基于时间秒级精度(1秒内多次修改无法区分),生产推荐ETag优先但分布式环境需保证各节点ETag一致"
            },
            {
              "id": "http缓存机制-11-0-2-d5",
              "tag": "缓存位置优先级",
              "desc": "Service Worker缓存(可编程控制)→Memory Cache(内存快速但容量小)→Disk Cache(磁盘持久容量大)→Push Cache(HTTP/2推送缓存会话级),浏览器按优先级查找可用缓存"
            },
            {
              "id": "http缓存机制-11-0-2-d6",
              "tag": "生产缓存策略",
              "desc": "HTML:no-cache协商验证保证更新/API:no-store不缓存敏感数据/JS/CSS:max-age=31536000+contenthash文件名(内容变文件名变强制刷新)/图片:max-age=30天+ETag验证,不同资源类型不同策略"
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
            },
            {
              "id": "cors跨域-11-0-3-d3",
              "tag": "预检请求缓存",
              "desc": "Access-Control-Max-Age=秒设置预检结果缓存时间,减少OPTIONS请求次数,生产建议设86400(24小时)减少跨域预检开销"
            },
            {
              "id": "cors跨域-11-0-3-d4",
              "tag": "简单请求判定条件",
              "desc": "满足全部条件才算简单请求:方法GET/HEAD/POST+Content-Type仅text/plain/form-data/x-www-form-urlencoded+无自定义Header+无事件监听,否则为非简单请求需预检"
            },
            {
              "id": "cors跨域-11-0-3-d5",
              "tag": "生产CORS配置陷阱",
              "desc": "Allow-Origin不能为*时需动态返回请求Origin(白名单校验)/Allow-Headers需包含实际请求所有自定义头/Cookie场景前端fetch需设credentials:include+后端Allow-Credentials=true+Allow-Origin为具体域名"
            },
            {
              "id": "cors跨域-11-0-3-d6",
              "tag": "Nginx反向代理解决跨域",
              "desc": "同源部署:前端和API通过Nginx同域名同端口代理,浏览器不触发CORS/Nginx配置proxy_pass转发API请求+add_header Allow-Origin,生产推荐Nginx代理比CORS更简单可靠"
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
            },
            {
              "id": "websocket协议-11-0-4-d3",
              "tag": "WebSocket vs HTTP长轮询",
              "desc": "HTTP长轮询:客户端反复请求服务端hold连接直到有数据(每次新建连接开销大)/WebSocket:一次握手建立长连接双向通信(持续连接服务端主动推送),实时场景WebSocket比长轮询延迟低10倍以上"
            },
            {
              "id": "websocket协议-11-0-4-d4",
              "tag": "生产WebSocket架构",
              "desc": "Nginx反向代理配置proxy_set_header Upgrade/Connection支持WebSocket/连接认证:握手时验证token/Redis Pub/Sub跨服务推送消息到WebSocket连接/集群:Sticky Session或Redis广播保证同一用户连同一节点"
            },
            {
              "id": "websocket协议-11-0-4-d5",
              "tag": "WebSocket安全与限流",
              "desc": "wss(WebSocket Secure=WebSocket+TLS)加密传输防止窃听/连接限流:单IP最大连接数防滥用/消息大小限制防大帧攻击/心跳超时断开僵尸连接,生产安全配置必不可少"
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
            },
            {
              "id": "tls13改进-11-1-0-d3",
              "tag": "移除不安全算法",
              "desc": "TLS 1.3移除RC4/DES/3DES/CBC模式/AES-CCM/SHA1/MD5/RSA密钥交换,仅保留5种密码套件(AES-GCM/ChaCha20-Poly1305),大幅减少配置选项消除弱算法"
            },
            {
              "id": "tls13改进-11-1-0-d4",
              "tag": "握手流程简化",
              "desc": "TLS 1.2需2-RTT(ClientHello→ServerHello+Certificate+ServerHelloDone→KeyExchange+ChangeCipherSpec→Finished),TLS 1.3合并为1-RTT(ClientHello含key_share→ServerHello+Certificate+Finished一起发),减少往返延迟"
            },
            {
              "id": "tls13改进-11-1-0-d5",
              "tag": "加密握手消息",
              "desc": "TLS 1.3在ServerHello之后的所有握手消息都加密传输(包括Certificate/Finished),TLS 1.2的证书明文传输可被中间人窥探,TLS 1.3增强隐私保护"
            },
            {
              "id": "tls13改进-11-1-0-d6",
              "tag": "生产启用TLS 1.3",
              "desc": "Nginx:ssl_protocols TLSv1.2 TLSv1.3;/Java:JDK 11+默认支持/OpenSSL 1.1.1+支持/浏览器Chrome/Firefox/Safari已支持,生产建议TLSv1.2+TLSv1.3共存逐步迁移"
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
            },
            {
              "id": "数字证书体系-11-1-1-d3",
              "tag": "证书验证流程",
              "desc": "浏览器收到服务器证书→提取证书链→逐级验证签名(终端证书用中间CA公钥验签/中间CA用根CA公钥验签)→根CA在浏览器预埋信任库中→验证通过建立TLS连接,任一级签名不匹配则拒绝连接"
            },
            {
              "id": "数字证书体系-11-1-1-d4",
              "tag": "中间CA的作用",
              "desc": "根CA离线保管私钥极少直接签发证书(安全),中间CA持根CA签发的证书作为代理签发终端证书,层级隔离:根CA泄露后果灾难性→中间CA泄露可吊销影响有限,生产常用Let's Encrypt(DV免费)或DigiCert/GlobalSign(OV/EV商业)"
            },
            {
              "id": "数字证书体系-11-1-1-d5",
              "tag": "证书吊销机制",
              "desc": "CRL(Certificate Revocation List证书吊销列表定期下载离线验证但体积大更新慢)/OCSP(Online Certificate Status Protocol实时查询证书状态更高效),生产推荐OCSP stapling(服务器缓存OCSP响应减少客户端查询延迟)"
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
            },
            {
              "id": "对称与非对称加密-11-1-2-d3",
              "tag": "AES-GCM vs AES-CBC",
              "desc": "AES-GCM(认证加密:加密+认证一体防篡改TLS 1.2+1.3强制)/AES-CBC(仅加密需额外HMAC认证TLS 1.3已移除),GCM提供机密性+完整性+认证三重保护,CBC可能遭padding oracle攻击"
            },
            {
              "id": "对称与非对称加密-11-1-2-d4",
              "tag": "RSA vs ECC密钥大小",
              "desc": "RSA 2048位≈ECC 256位安全强度相当但ECC密钥短10倍传输快/RSA 3072位≈ECC 384位,ECC计算更快更适合移动端和IoT设备,生产推荐ECC(P-256/X25519)密钥交换"
            },
            {
              "id": "对称与非对称加密-11-1-2-d5",
              "tag": "数字签名流程",
              "desc": "发送方:对消息做哈希(SHA-256)→私钥签名哈希→发送原文+签名/接收方:公钥验签→自己哈希原文→对比两个哈希一致则验证通过,签名保证完整性+真实性+不可否认性"
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
            },
            {
              "id": "hsts与证书透明度-11-1-3-d3",
              "tag": "HSTS工作原理",
              "desc": "首次访问通过302重定向或用户输入HTTPS→服务器返回Strict-Transport-Security头→浏览器记录max-age→后续访问自动将HTTP转为HTTPS(内部307重定向)→max-age过期前不再降级HTTP,首次访问仍有降级风险需preload弥补"
            },
            {
              "id": "hsts与证书透明度-11-1-3-d4",
              "tag": "CT日志审计",
              "desc": "CT(Certificate Transparency)公开日志服务器记录所有证书颁发:CA颁发证书前提交到CT log→日志返回SCT(Signed Certificate Timestamp)嵌入证书→浏览器验证SCT→任何人可查询日志发现异常证书,防止CA恶意或错误颁发证书"
            },
            {
              "id": "hsts与证书透明度-11-1-3-d5",
              "tag": "SSL Stripping攻击",
              "desc": "攻击者在中间人位置将HTTPS降级为HTTP(用户输入http://时攻击者拦截改为http://再转发到服务器),用户无感知数据明文传输,HSTS强制浏览器永不降级HTTP有效防御SSL Stripping攻击"
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
            },
            {
              "id": "cdn原理-11-2-0-d3",
              "tag": "CDN命中流程",
              "desc": "用户请求→DNS解析(CNAME指向CDN)→GSLB全局负载均衡选最近节点→边缘节点检查缓存→有缓存直接返回/无缓存回源拉取→缓存后返回用户,整个过程自动就近"
            },
            {
              "id": "cdn原理-11-2-0-d4",
              "tag": "CDN缓存层级",
              "desc": "边缘节点(Edge直接服务用户)→区域节点(Region中间层缓存热点)→中心节点(Center回源前最后一层),三级缓存减少回源压力,命中率边缘70%→区域20%→中心10%"
            },
            {
              "id": "cdn原理-11-2-0-d5",
              "tag": "动态加速(DSA)",
              "desc": "CDN不仅缓存静态资源还优化动态请求:TCP连接优化(预连接减少握手)/路由优化(智能选最快路径)/压缩(Gzip/Brotli)/WebSocket长连接加速,API动态请求也能通过CDN加速"
            },
            {
              "id": "cdn原理-11-2-0-d6",
              "tag": "生产CDN配置要点",
              "desc": "静态资源(JS/CSS/图片)设长TTL+文件名哈希版本化/HTML/API设短TTL或no-cache/回源Host正确配置/HTTPS证书部署到CDN节点/跨域CORS头CDN层添加/缓存刷新:CDN控制台手动刷新或API调用"
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
            },
            {
              "id": "dns解析全过程-11-2-1-d3",
              "tag": "DNS缓存层级",
              "desc": "浏览器DNS缓存(Chrome约60秒/可配置)→OS DNS缓存(hosts文件+系统缓存)→本地递归解析器缓存(ISP运营商缓存TTL决定)→各权威DNS不缓存直接返回,缓存减少递归查询提升解析速度"
            },
            {
              "id": "dns解析全过程-11-2-1-d4",
              "tag": "DNS缓存与TTL",
              "desc": "TTL(Time To Live)决定缓存有效期:短TTL(60秒)变更快但查询多/长TTL(86400秒)缓存久但变更慢,DNS切换IP时旧TTL未过期仍解析旧IP导致流量延迟,生产关键域名建议短TTL(300秒)方便快速切换"
            },
            {
              "id": "dns解析全过程-11-2-1-d5",
              "tag": "DNS解析优化",
              "desc": "HTTPDNS(绕过运营商直接请求授权DNS防DNS劫持/污染,移动端常用)/DNS预解析(<link rel=dns-prefetch href=//cdn.com>前端提前解析减少首次访问延迟)/LocalDNS问题:运营商劫持/缓存不刷新/解析不一致"
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
            },
            {
              "id": "dns记录类型-11-2-2-d3",
              "tag": "TXT记录用途",
              "desc": "SPF(Sender Policy Framework)指定合法发件IP防邮件伪造/DKIM(DomainKeys Identified Mail)公钥验证邮件签名/Domain Verification域名所有权验证(Google/Meta等平台)/企业域名配置灵活文本载体"
            },
            {
              "id": "dns记录类型-11-2-2-d4",
              "tag": "CNAME在生产中的应用",
              "desc": "CDN加速:www.example.com CNAME→cdn-provider.com让CDN接管流量/多域名统一:shop.example.com CNAME→www.example.com统一入口/CNAME不能与A记录共存(同一主机名不能同时有CNAME和A)/CNAME链限制:最多10层避免解析超时"
            },
            {
              "id": "dns记录类型-11-2-2-d5",
              "tag": "SOA记录",
              "desc": "Start of Authority区域权威信息:主DNS服务器(MNAME)+管理员邮箱(RNAME用.替代@)+序列号(Zone版本用于同步)+刷新间隔(Slave多久检查更新)+重试间隔+过期时间+最小TTL,SOA是Zone的管理元数据"
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
            },
            {
              "id": "dns负载均衡-11-2-3-d3",
              "tag": "GeoDNS实战",
              "desc": "根据用户IP地理位置返回最近服务器IP:亚洲用户→亚洲节点/欧洲用户→欧洲节点/美洲用户→美洲节点,CDN+GeoDNS组合实现全球就近访问,配置通过DNS服务商(Cloudflare/Route53/DNSPod)设置地理分区策略"
            },
            {
              "id": "dns负载均衡-11-2-3-d4",
              "tag": "Anycast原理与优势",
              "desc": "同一IP在多个节点发布BGP路由→路由器根据最短路径选最近节点→用户自动访问最近服务器,优势:无需DNS地理判断/故障自动路由切换/全球负载均衡,CDN和DNS根服务器都用Anycast(Cloudflare/Google DNS)"
            },
            {
              "id": "dns负载均衡-11-2-3-d5",
              "tag": "DNS负载均衡局限与改进",
              "desc": "局限:无健康检查(故障IP仍返回)/缓存延迟(TTL未过期旧IP生效)/无法感知真实负载/客户端DNS缓存不可控→改进:短TTL+应用层健康检查+混合方案(DNS层粗粒度负载+Nginx/LB细粒度健康检查),生产DNS只做初步分流LB做精确分配"
            }
          ]
        }
      ]
    }
  ]
};
