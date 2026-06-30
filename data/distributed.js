// distributed-system.js — 二十二、分布式系统 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['distributed-system'] = {
  "id": "distributed-system",
  "title": "十六、分布式系统",
  "tag": "分布式系统",
  "order": 16,
  "icon": "🚀",
  "cssIndex": 15,
  "subs": [
    {
      "id": "22-1-一致性协议-22-0",
      "title": "22.1 一致性协议",
      "points": [
        {
          "id": "raft共识算法-22-0-0",
          "tag": "Raft共识算法",
          "desc": "易理解的共识算法。Leader选举(随机选举超时，获多数票成为 Leader)。日志复制(Leader 追加日志→Follower 复制→多数确认→Commit)。安全性(Leader 完整性/选举限制)。Etcd/Consul/TiKV 使用 Raft",
          "details": [
            {
              "id": "raft共识算法-22-0-0-d0",
              "tag": "Leader选举",
              "desc": "随机选举超时+获多数票成为Leader避免同时选举"
            },
            {
              "id": "raft共识算法-22-0-0-d1",
              "tag": "日志复制",
              "desc": "Leader追加日志→Follower复制→多数确认→Commit保证一致性"
            },
            {
              "id": "raft共识算法-22-0-0-d2",
              "tag": "安全性",
              "desc": "Leader完整性(新Leader包含所有已提交日志)+选举限制(只选有最新日志的节点)"
            },
            {
              "id": "raft共识算法-22-0-0-d3",
              "tag": "应用",
              "desc": "Etcd/Consul/TiKV/Nacos集群模式都基于Raft实现共识"
            },
            {
              "id": "raft共识算法-22-0-0-d4",
              "tag": "vs Paxos",
              "desc": "Raft更易理解(强Leader+有序日志)Paxos更理论化难实现"
            }
          ]
        },
        {
          "id": "zab协议-22-0-1",
          "tag": "ZAB协议",
          "desc": "Zookeeper Atomic Broadcast。消息广播(类 2PC：Leader 发 proposal→Follower ACK→多数 ACK 则 commit)。崩溃恢复(Leader 选举：ZXID 最大者优先，ZXID=epoch+counter)。Zookeeper 专用，类似 Raft 但更早",
          "details": [
            {
              "id": "zab协议-22-0-1-d0",
              "tag": "消息广播",
              "desc": "类2PC Leader发proposal→Follower ACK→多数ACK则commit"
            },
            {
              "id": "zab协议-22-0-1-d1",
              "tag": "崩溃恢复:Leader选举ZXID最大者优先",
              "desc": "ZXID=epoch+counter高位epoch优先"
            },
            {
              "id": "zab协议-22-0-1-d2",
              "tag": "ZAB专用Zookeeper类似Raft但更早发布",
              "desc": "ZAB专为Zookeeper设计，采用类2PC广播+崩溃恢复机制，比Raft更早但未提供通用实现"
            },
            {
              "id": "zab协议-22-0-1-d3",
              "tag": "vs Raft",
              "desc": "ZAB有恢复模式+广播模式Raft更简化统一"
            },
            {
              "id": "zab协议-22-0-1-d4",
              "tag": "ZAB保证",
              "desc": "全局有序(FIFO)+主从有序(Leader先执行)"
            }
          ]
        },
        {
          "id": "gossip协议-22-0-2",
          "tag": "Gossip协议",
          "desc": "去中心化协议。每个节点周期性随机选 k 个邻居交换信息。Push/Pull/Push-Pull 三种模式。反熵(全量同步)和谣传(增量传播)。收敛速度 O(logN)。Cassandra/Consul 使用。优：简单鲁棒；缺：最终一致延迟高",
          "details": [
            {
              "id": "gossip协议-22-0-2-d0",
              "tag": "去中心化",
              "desc": "每个节点周期性随机选k个邻居交换信息无中心节点"
            },
            {
              "id": "gossip协议-22-0-2-d1",
              "tag": "三种模式",
              "desc": "Push(推)/Pull(拉)/Push-Pull(推拉结合效率最高)"
            },
            {
              "id": "gossip协议-22-0-2-d2",
              "tag": "反熵",
              "desc": "全量同步修复所有差异;谣传:增量传播只传播新信息节省带宽"
            },
            {
              "id": "gossip协议-22-0-2-d3",
              "tag": "收敛速度O(logN)传播N节点约logN轮全部节点收到",
              "desc": "每轮每个节点随机选k个邻居交换状态，N节点约logN轮即可全网收敛，实际受fanout和网络延迟影响"
            },
            {
              "id": "gossip协议-22-0-2-d4",
              "tag": "应用",
              "desc": "Cassandra/Consul/Swarm使用;优:简单鲁棒容错;缺:最终一致延迟高"
            }
          ]
        },
        {
          "id": "一致性哈希-22-0-3",
          "tag": "一致性哈希",
          "desc": "将哈希空间组织成虚拟圆环(0~2^32-1)。节点和数据都映射到环上，数据顺时针找到的第一个节点即归属节点。虚拟节点(每个物理节点对应多个虚拟节点)解决数据倾斜。节点增删只影响相邻节点数据",
          "details": [
            {
              "id": "一致性哈希-22-0-3-d0",
              "tag": "虚拟圆环0~2^32-1",
              "desc": "节点和数据都hash映射到环上"
            },
            {
              "id": "一致性哈希-22-0-3-d1",
              "tag": "数据归属",
              "desc": "顺时针找到第一个节点即归属节点简单高效"
            },
            {
              "id": "一致性哈希-22-0-3-d2",
              "tag": "虚拟节点",
              "desc": "每个物理节点对应多个虚拟节点(150-200个)解决数据倾斜"
            },
            {
              "id": "一致性哈希-22-0-3-d3",
              "tag": "增删节点",
              "desc": "只影响相邻节点数据不触发大规模数据迁移"
            },
            {
              "id": "一致性哈希-22-0-3-d4",
              "tag": "应用",
              "desc": "Cassandra/Dynamo/Riak使用;vs Hash取模:增删节点影响小"
            }
          ]
        }
      ]
    },
    {
      "id": "22-2-分布式id-22-1",
      "title": "22.2 分布式ID",
      "points": [
        {
          "id": "雪花算法snowflake-22-1-0",
          "tag": "雪花算法Snowflake",
          "desc": "64 位 long：1bit 符号(0)+41bit 时间戳(69 年)+10bit 机器 ID(5 数据中心+5 机器,1024 节点)+12bit 序列号(同毫秒 4096 个)。趋势递增。时钟回拨问题：等待/报错/借用机器 ID。美团 Leaf-snowflake 用 ZK 注册机器 ID",
          "details": [
            {
              "id": "雪花算法snowflake-22-1-0-d0",
              "tag": "1bit符号(0)+41bit时间戳(69年)+10bit机器ID+12bit序列号(4096/ms)",
              "desc": "64位long结构：首位0保证正数，41位时间戳差值支持69年，10位机器标识1024节点，12位序列号每毫秒4096个ID"
            },
            {
              "id": "雪花算法snowflake-22-1-0-d1",
              "tag": "趋势递增但不严格连续(不同机器不同序列)适合MySQL B+树插入",
              "desc": "单机内序列号递增但跨机器ID跳跃，整体趋势递增避免B+树页分裂，优于UUID随机插入导致索引碎片"
            },
            {
              "id": "雪花算法snowflake-22-1-0-d2",
              "tag": "时钟回拨问题",
              "desc": "等待回拨时间过去/报错拒绝/借用机器ID灵活处理"
            },
            {
              "id": "雪花算法snowflake-22-1-0-d3",
              "tag": "美团Leaf-snowflake用ZK",
              "desc": "美团Leaf-snowflake用ZK注册机器ID+本地文件缓存workerId"
            },
            {
              "id": "雪花算法snowflake-22-1-0-d4",
              "tag": "百度UidGenerator",
              "desc": "_ringbuffer预生成+位计算高性能变种实现"
            }
          ]
        },
        {
          "id": "leaf号段模式-22-1-1",
          "tag": "Leaf号段模式",
          "desc": "美团开源。数据库批量获取号段(step=1000)，内存中递增分配。双 buffer 预加载(buffer 用到一定比例时异步加载下一个)。性能高(不频繁访问 DB)。ID 可能不连续(跳号)",
          "details": [
            {
              "id": "leaf号段模式-22-1-1-d0",
              "tag": "数据库批量获取号段",
              "desc": "step=1000内存中递增分配不频繁访问DB"
            },
            {
              "id": "leaf号段模式-22-1-1-d1",
              "tag": "双buffer预加载",
              "desc": "当前buffer用到一定比例时异步加载下一个号段无缝切换"
            },
            {
              "id": "leaf号段模式-22-1-1-d2",
              "tag": "性能高",
              "desc": "号段内分配纯内存操作无网络开销>传统数据库自增方案"
            },
            {
              "id": "leaf号段模式-22-1-1-d3",
              "tag": "ID可能不连续:号段切换时跳号",
              "desc": "如当前号段1000-2000切换到3000-4000"
            },
            {
              "id": "leaf号段模式-22-1-1-d4",
              "tag": "Leaf-segment+Leaf-snowflake双模式号段+雪花灵活选型",
              "desc": "segment号段模式依赖DB批量获取步长，双buffer预加载避免DB访问瓶颈；snowflake模式用ZK分配workerId应对时钟回拨"
            }
          ]
        }
      ]
    },
    {
      "id": "22-3-分布式锁-22-2",
      "title": "22.3 分布式锁",
      "points": [
        {
          "id": "redis分布式锁-22-2-0",
          "tag": "Redis分布式锁",
          "desc": "`SET key value NX PX 30000`。NX 保证互斥(不存在才设置)。PX 防死锁(过期自动释放)。value 设唯一标识(UUID+线程 ID)。释放用 Lua 脚本原子操作：先 get 比对 value 再 del。问题：锁过期但业务未完成",
          "details": [
            {
              "id": "redis分布式锁-22-2-0-d0",
              "tag": "SET key value NX PX 30000",
              "desc": "NX互斥+PX过期防死锁（SET key value NX PX 30000的详细说明：Redis分布式锁中关于SET key value NX PX 30000的内容）"
            },
            {
              "id": "redis分布式锁-22-2-0-d1",
              "tag": "value设唯一标识(UUID+线程ID)防止误删其他线程的锁",
              "desc": "释放锁时Lua脚本先GET比对value是否为自身持有，匹配才DEL，避免锁过期后被其他线程获取后误删导致连锁失效"
            },
            {
              "id": "redis分布式锁-22-2-0-d2",
              "tag": "释放用Lua脚本原子操作",
              "desc": "先GET比对value再DEL保证安全"
            },
            {
              "id": "redis分布式锁-22-2-0-d3",
              "tag": "问题",
              "desc": "锁过期但业务未完成→其他线程获锁→并发安全问题"
            },
            {
              "id": "redis分布式锁-22-2-0-d4",
              "tag": "适用",
              "desc": "单Redis实例简单场景;复杂场景推荐Redisson"
            }
          ]
        },
        {
          "id": "redisson看门狗-22-2-1",
          "tag": "Redisson看门狗",
          "desc": "Redisson Java 客户端。默认锁 30 秒过期，看门狗每 10 秒检查锁仍持有则续期到 30 秒。可重入锁(Hash 存线程 ID+重入次数)。公平锁/读写锁/联锁 MultiLock。生产推荐 Redisson 而非手写 SETNX",
          "details": [
            {
              "id": "redisson看门狗-22-2-1-d0",
              "tag": "看门狗",
              "desc": "默认锁30秒过期每10秒(lockWatchdogTimeout/3)续期到30秒"
            },
            {
              "id": "redisson看门狗-22-2-1-d1",
              "tag": "可重入锁",
              "desc": "Hash结构存线程ID+重入次数支持嵌套加锁解锁"
            },
            {
              "id": "redisson看门狗-22-2-1-d2",
              "tag": "公平锁/读写锁/联锁MultiLock/红锁RedLock多种锁类型",
              "desc": "公平锁按请求顺序排队；读写锁支持并发读独占写；MultiLock联合多锁；RedLock跨多Redis实例半数成功即获锁"
            },
            {
              "id": "redisson看门狗-22-2-1-d3",
              "tag": "生产推荐Redisson而非手写SETNX看门狗自动续期解决锁过期问题",
              "desc": "Redisson看门狗默认lockWatchdogTimeout=30s，每10s(1/3超时)自动续期，业务未完成锁不丢失，避免手写SETNX锁过期风险"
            },
            {
              "id": "redisson看门狗-22-2-1-d4",
              "tag": "加锁流程",
              "desc": "tryLock→Lua脚本(exists+hset+pexpire)原子操作保证安全"
            }
          ]
        },
        {
          "id": "zookeeper分布式锁-22-2-2",
          "tag": "Zookeeper分布式锁",
          "desc": "创建临时顺序节点/locks/lock_000001。判断是否最小序号节点：是则获取锁；否则监听(Watch)前一个节点删除事件。前节点释放(删除)→Watch 触发→重新判断。CP 强一致不会丢锁。比 Redis 性能低(写需同步到半数 Follower)",
          "details": [
            {
              "id": "zookeeper分布式锁-22-2-2-d0",
              "tag": "临时顺序节点",
              "desc": "/locks/lock_000001保证有序+临时节点会话断自动删除"
            },
            {
              "id": "zookeeper分布式锁-22-2-2-d1",
              "tag": "判断最小序号",
              "desc": "最小序号节点获取锁否则Watch监听前一个节点删除"
            },
            {
              "id": "zookeeper分布式锁-22-2-2-d2",
              "tag": "前节点释放→Watch触发→重新判断",
              "desc": "前节点释放→Watch触发→重新判断避免羊群效应只监听前一个"
            },
            {
              "id": "zookeeper分布式锁-22-2-2-d3",
              "tag": "CP强一致",
              "desc": "ZK保证一致性不会丢锁但性能低于Redis"
            },
            {
              "id": "zookeeper分布式锁-22-2-2-d4",
              "tag": "缺点",
              "desc": "性能低(每次写需同步到半数Follower)+重试开销大不适合高频场景"
            }
          ]
        },
        {
          "id": "redlock算法-22-2-3",
          "tag": "Redlock算法",
          "desc": "Redis 作者提出。向 N 个(通常 5 个)独立 Redis 实例申请锁，超过半数(N/2+1)成功且耗时<锁过期时间则获取成功。争议：Martin Kleppmann 指出时钟漂移和 GC 暂停存在安全问题。实际生产 Redisson Redlock 实现",
          "details": [
            {
              "id": "redlock算法-22-2-3-d0",
              "tag": "向N个(通常5个)独立Redis实例申请锁超过半数(N/2+1)成功",
              "desc": "向5个独立Redis实例依次加锁，需3个以上成功且总耗时小于锁有效期才算获取成功，任一实例故障不影响整体可用性"
            },
            {
              "id": "redlock算法-22-2-3-d1",
              "tag": "加锁耗时必须<锁过期时间否则加锁失败",
              "desc": "加锁耗时必须<锁过期时间否则加锁失败防止慢加锁"
            },
            {
              "id": "redlock算法-22-2-3-d2",
              "tag": "释放锁",
              "desc": "向所有N个实例发送释放命令不只在成功的实例"
            },
            {
              "id": "redlock算法-22-2-3-d3",
              "tag": "争议",
              "desc": "Martin Kleppmann指出时钟漂移和GC暂停存在安全问题"
            },
            {
              "id": "redlock算法-22-2-3-d4",
              "tag": "Redisson Redlock",
              "desc": "Redisson Redlock实现生产可用但多数场景单实例Redisson足够"
            }
          ]
        }
      ]
    },
    {
      "id": "22-4-分布式事务详解-22-3",
      "title": "22.4 分布式事务详解",
      "points": [
        {
          "id": "本地消息表-22-3-0",
          "tag": "本地消息表",
          "desc": "业务操作+写消息表在同一本地事务中。定时任务扫描消息表中 PENDING 状态消息→发送 MQ→消费方处理成功后回调更新消息状态为 SENT。最终一致性。优点：实现简单不引入额外 MQ 组件。缺点：耦合数据库",
          "details": [
            {
              "id": "本地消息表-22-3-0-d0",
              "tag": "业务+写消息表同一本地事务",
              "desc": "业务+写消息表同一本地事务保证原子性"
            },
            {
              "id": "本地消息表-22-3-0-d1",
              "tag": "定时任务扫描PENDING消息",
              "desc": "定时任务扫描PENDING消息→发送MQ→消费成功→更新SENT"
            },
            {
              "id": "本地消息表-22-3-0-d2",
              "tag": "最终一致性",
              "desc": "消息最终被消费业务最终一致（最终一致性的详细说明：本地消息表中关于最终一致性的内容）"
            },
            {
              "id": "本地消息表-22-3-0-d3",
              "tag": "优点",
              "desc": "实现简单不引入额外MQ组件依赖DB事务"
            },
            {
              "id": "本地消息表-22-3-0-d4",
              "tag": "缺点",
              "desc": "消息表耦合业务DB定时扫描有延迟需维护消息状态"
            }
          ]
        },
        {
          "id": "rocketmq事务消息-22-3-1",
          "tag": "RocketMQ事务消息",
          "desc": "1.发送 Half Message(对消费者不可见) 2.执行本地事务 3.提交 Commit(消息可见)/Rollback(删除消息)。本地事务状态未知时 Broker 定时回查 Producer 事务状态(最多 15 次)。解决本地事务与消息发送原子性",
          "details": [
            {
              "id": "rocketmq事务消息-22-3-1-d0",
              "tag": "1.发送Half Message(半消息对消费者不可见)",
              "desc": "Half Message暂存Broker特殊存储区域，消费者暂不可见，等待本地事务结果决定Commit或Rollback，实现事务与消息原子性"
            },
            {
              "id": "rocketmq事务消息-22-3-1-d1",
              "tag": "2.",
              "desc": "2.执行本地事务(成功/失败/未知)"
            },
            {
              "id": "rocketmq事务消息-22-3-1-d2",
              "tag": "3.Commit(消息可见)/Rollback(删除消息)",
              "desc": "本地事务成功则Commit让消费者可见并消费；失败则Rollback删除半消息；未知状态触发Broker定时回查Producer最多15次确认最终状态"
            },
            {
              "id": "rocketmq事务消息-22-3-1-d3",
              "tag": "本地事务未知",
              "desc": "本地事务未知→Broker定时回查Producer事务状态(最多15次15分钟)"
            },
            {
              "id": "rocketmq事务消息-22-3-1-d4",
              "tag": "解决本地事务与消息发送原子性无需本地消息表",
              "desc": "半消息机制将消息发送与本地事务绑定，通过Broker回查保障最终一致性，省去本地消息表和定时扫描的额外存储与复杂度"
            }
          ]
        },
        {
          "id": "seataat模式-22-3-2",
          "tag": "Seata AT模式",
          "desc": "阿里开源。一阶段：业务 SQL 执行时记录 Before/After Image(undo log)，本地事务提交。二阶段：全局 Commit→异步删除 undo log；全局 Rollback→用 undo log 反向 SQL 恢复数据。全局锁防脏写。对业务侵入小(只需 @GlobalTransactional)",
          "details": [
            {
              "id": "seataat模式-22-3-2-d0",
              "tag": "一阶段",
              "desc": "业务SQL执行+记录Before/After Image(undo log)+本地提交"
            },
            {
              "id": "seataat模式-22-3-2-d1",
              "tag": "二阶段Commit",
              "desc": "异步删除undo log轻量（二阶段Commit的详细说明：Seata AT模式中关于二阶段Commit的内容）"
            },
            {
              "id": "seataat模式-22-3-2-d2",
              "tag": "二阶段Rollback",
              "desc": "用undo log反向SQL恢复数据自动补偿"
            },
            {
              "id": "seataat模式-22-3-2-d3",
              "tag": "全局锁:防脏写",
              "desc": "防止其他事务修改正在回滚的数据"
            },
            {
              "id": "seataat模式-22-3-2-d4",
              "tag": "对业务侵入小",
              "desc": "只需@GlobalTransactional注解自动管理"
            }
          ]
        },
        {
          "id": "幂等性保障-22-3-3",
          "tag": "幂等性保障",
          "desc": "多次执行相同操作结果一致。方案：1.数据库唯一索引(防重复插入) 2.Token 机制(请求前获取 Token,使用后失效) 3.乐观锁 version 字段 4.状态机(订单状态不可逆) 5.分布式锁(防并发) 6.去重表(message_id)",
          "details": [
            {
              "id": "幂等性保障-22-3-3-d0",
              "tag": "数据库唯一索引",
              "desc": "防重复插入简单可靠最常用（数据库唯一索引的详细说明：幂等性保障中关于数据库唯一索引的内容）"
            },
            {
              "id": "幂等性保障-22-3-3-d1",
              "tag": "Token机制",
              "desc": "请求前获取Token使用后失效防重复提交"
            },
            {
              "id": "幂等性保障-22-3-3-d2",
              "tag": "乐观锁version字段",
              "desc": "UPDATE SET version=version+1 WHERE version=old"
            },
            {
              "id": "幂等性保障-22-3-3-d3",
              "tag": "状态机",
              "desc": "订单状态不可逆单向流转pending→paid→refunded"
            },
            {
              "id": "幂等性保障-22-3-3-d4",
              "tag": "分布式锁",
              "desc": "防并发重复操作Redis SETNX或Redisson"
            },
            {
              "id": "幂等性保障-22-3-3-d5",
              "tag": "去重表",
              "desc": "message_id唯一索引消费前检查是否已处理"
            }
          ]
        }
      ]
    },
    {
      "id": "22-5-rpc与服务治理-22-4",
      "title": "22.5 RPC与服务治理",
      "points": [
        {
          "id": "dubbo框架-22-4-0",
          "tag": "Dubbo框架",
          "desc": "阿里开源 RPC 框架(Apache 顶级项目)。Netty NIO 通信/Hessian2 序列化/SPI 扩展机制(可替换任意组件)。核心：Provider 注册→Consumer 订阅→负载均衡调用→集群容错(Failover 重试/Failfast 快速失败/Failsafe 忽略异常)。Dubbo3.0 Triple 协议兼容 gRPC",
          "details": [
            {
              "id": "dubbo框架-22-4-0-d0",
              "tag": "Netty NIO通信+Hessian2序列化+SPI扩展可替换任意组件",
              "desc": "Netty非阻塞IO高并发长连接；Hessian2二进制序列化跨语言高效；Dubbo SPI按META-INF配置热插拔替换协议/序列化/负载均衡等组件"
            },
            {
              "id": "dubbo框架-22-4-0-d1",
              "tag": "核心流程",
              "desc": "Provider注册→Consumer订阅→负载均衡→集群容错"
            },
            {
              "id": "dubbo框架-22-4-0-d2",
              "tag": "集群容错",
              "desc": "Failover重试/Failfast快速失败/Failsafe忽略异常/Forking并行"
            },
            {
              "id": "dubbo框架-22-4-0-d3",
              "tag": "负载均衡",
              "desc": "Random随机/RoundRobin轮询/LeastActive最少调用/ConsistentHash一致性哈希"
            },
            {
              "id": "dubbo框架-22-4-0-d4",
              "tag": "Dubbo3.0 Triple协议兼容gRPC+应用级服务发现+Mesh方案",
              "desc": "Triple协议基于HTTP/2兼容gRPC跨语言互通；应用级服务发现替代接口级降低注册中心压力；Mesh方案支持Sidecar模式平滑迁移云原生"
            }
          ]
        },
        {
          "id": "grpc框架-22-4-1",
          "tag": "gRPC框架",
          "desc": "Google 开源。HTTP/2+Protobuf 序列化(体积小速度快)。跨语言(Java/Go/Python/C++等)。四种调用：Unary(一请求一响应)/Server Streaming/Client Streaming/双向 Streaming。.proto IDL 定义接口",
          "details": [
            {
              "id": "grpc框架-22-4-1-d0",
              "tag": "HTTP/2+Protobuf序列化体积小速度快适合微服务间通信",
              "desc": "Protobuf二进制编码比JSON缩小3-10倍、序列化快20-100倍；HTTP/2多路复用单连接并行请求减少连接开销，适合内网微服务高频调用"
            },
            {
              "id": "grpc框架-22-4-1-d1",
              "tag": "跨语言",
              "desc": "Java/Go/Python/C++等同一.proto定义多语言实现"
            },
            {
              "id": "grpc框架-22-4-1-d2",
              "tag": "四种调用",
              "desc": "Unary(一请求一响应)/Server Streaming/Client Streaming/双向Streaming"
            },
            {
              "id": "grpc框架-22-4-1-d3",
              "tag": ".proto IDL定义接口强类型约束编译器生成客户端服务端代码",
              "desc": "proto文件声明式定义消息结构和服务方法，protoc编译器自动生成多语言类型安全代码，接口变更即编译报错杜绝运行时类型不匹配"
            },
            {
              "id": "grpc框架-22-4-1-d4",
              "tag": "vs REST",
              "desc": "更高效(二进制+HTTP/2多路复用)+强类型+流式;但调试不如REST直观"
            }
          ]
        }
      ]
    }
  ]
};

// high-performance.js — 二十三、高性能 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['high-performance'] = {
  "id": "high-performance",
  "title": "十七、高性能架构",
  "tag": "高性能",
  "order": 17,
  "icon": "💠",
  "cssIndex": 16,
  "subs": [
    {
      "id": "23-1-数据库优化-23-0",
      "title": "23.1 数据库优化",
      "points": [
        {
          "id": "读写分离-23-0-0",
          "tag": "读写分离",
          "desc": "主库写从库读，减轻主库压力。Master 写 binlog→Slave 同步。中间件：ShardingSphere-JDBC(客户端)/MyCat(Proxy)/ProxySQL。注意主从延迟(异步复制)，写后立即读需走主库(强制路由)",
          "details": [
            {
              "id": "读写分离-23-0-0-d0",
              "tag": "主库写从库读",
              "desc": "减轻主库压力提升读并发能力（主库写从库读的详细说明：读写分离中关于主库写从库读的内容）"
            },
            {
              "id": "读写分离-23-0-0-d1",
              "tag": "同步方式",
              "desc": "Master写binlog→Dump Thread→Slave IO Thread→SQL Thread"
            },
            {
              "id": "读写分离-23-0-0-d2",
              "tag": "中间件",
              "desc": "ShardingSphere-JDBC(客户端)/MyCat(Proxy)/ProxySQL"
            },
            {
              "id": "读写分离-23-0-0-d3",
              "tag": "主从延迟",
              "desc": "异步复制写后立即读可能读到旧数据需强制路由走主库"
            },
            {
              "id": "读写分离-23-0-0-d4",
              "tag": "强制路由",
              "desc": "ShardingSphere HintManager指定走主库解决写后读一致性"
            }
          ]
        },
        {
          "id": "深度分页优化-23-0-1",
          "tag": "深度分页优化",
          "desc": "`LIMIT 1000000,10` 很慢(扫描 100 万行)。优化：1.子查询 `WHERE id>(SELECT id FROM t LIMIT 1000000,1) LIMIT 10` 2.延迟关联 JOIN(先查 id 再 JOIN) 3.记录上一页最大 id `WHERE id>last_max_id LIMIT 10`(要求 id 递增连续)",
          "details": [
            {
              "id": "深度分页优化-23-0-1-d0",
              "tag": "LIMIT 1000000,10扫描100万行丢弃前999990行极慢",
              "desc": "MySQL深分页需先扫描并排序全部前N行再丢弃，offset越大越慢；本质是全表扫描+排序开销，非索引覆盖时甚至回表百万次"
            },
            {
              "id": "深度分页优化-23-0-1-d1",
              "tag": "子查询优化",
              "desc": "WHERE id>(SELECT id FROM t LIMIT 1000000,1) LIMIT 10利用索引"
            },
            {
              "id": "深度分页优化-23-0-1-d2",
              "tag": "延迟关联",
              "desc": "先查id(SELECT id FROM t LIMIT 1000000,10)再JOIN获取完整数据"
            },
            {
              "id": "深度分页优化-23-0-1-d3",
              "tag": "记录last_id",
              "desc": "WHERE id>last_max_id LIMIT 10要求id递增连续最高效"
            },
            {
              "id": "深度分页优化-23-0-1-d4",
              "tag": "禁止SELECT *",
              "desc": "只查需要的列减少数据传输量配合覆盖索引避免回表"
            }
          ]
        }
      ]
    }
  ]
};

// high-availability.js — 二十四、高可用 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['high-availability'] = {
  "id": "high-availability",
  "title": "十八、高可用架构",
  "tag": "高可用",
  "order": 18,
  "icon": "🛡️",
  "cssIndex": 17,
  "subs": [
    {
      "id": "24-1-限流-24-0",
      "title": "24.1 限流",
      "points": [
        {
          "id": "限流算法-24-0-0",
          "tag": "限流算法",
          "desc": "固定窗口计数器(简单但有临界突刺)/滑动窗口(细粒度解决突刺)/漏桶算法(固定速率流出,不支持突发)/令牌桶算法(固定速率放令牌,支持突发,Guava RateLimiter)。维度：QPS/并发数/User/IP/API/全局",
          "details": [
            {
              "id": "限流算法-24-0-0-d0",
              "tag": "固定窗口:简单但有临界突刺",
              "desc": "窗口边界前后突增请求可能2倍超限"
            },
            {
              "id": "限流算法-24-0-0-d1",
              "tag": "滑动窗口",
              "desc": "细粒度解决突刺(细分为多个小窗口统计更平滑)"
            },
            {
              "id": "限流算法-24-0-0-d2",
              "tag": "漏桶",
              "desc": "固定速率流出不支持突发流量(请求入桶匀速流出保护下游)"
            },
            {
              "id": "限流算法-24-0-0-d3",
              "tag": "令牌桶:固定速率放令牌支持突发",
              "desc": "Guava RateLimiter常用实现"
            },
            {
              "id": "限流算法-24-0-0-d4",
              "tag": "维度",
              "desc": "QPS/并发数/User/IP/API/全局根据场景选择粒度"
            }
          ]
        },
        {
          "id": "限流实现-24-0-1",
          "tag": "限流实现",
          "desc": "Sentinel(阿里,流控+熔断+热点参数)/Resilience4j(轻量级,熔断+限流+重试)/Guava RateLimiter(令牌桶)/Nginx limit_req_zone(接入层限流)/Redis+Lua 脚本(分布式限流)",
          "details": [
            {
              "id": "限流实现-24-0-1-d0",
              "tag": "Sentinel",
              "desc": "阿里开源流控+熔断+热点参数限流+系统保护+集群流控功能最全"
            },
            {
              "id": "限流实现-24-0-1-d1",
              "tag": "Resilience4j",
              "desc": "轻量级熔断+限流+重试+隔离Java8函数式Spring Boot集成"
            },
            {
              "id": "限流实现-24-0-1-d2",
              "tag": "Guava RateLimiter",
              "desc": "令牌桶算法单机限流smoothBursty/smoothWarmingUp"
            },
            {
              "id": "限流实现-24-0-1-d3",
              "tag": "Nginx limit_req_zone",
              "desc": "接入层限流limit_req zone=name burst=5 nodelay"
            },
            {
              "id": "限流实现-24-0-1-d4",
              "tag": "Redis+Lua脚本",
              "desc": "分布式限流INCR+EXPIRE原子操作集群共享计数器"
            }
          ]
        }
      ]
    },
    {
      "id": "24-2-降级与熔断-24-1",
      "title": "24.2 降级与熔断",
      "points": [
        {
          "id": "熔断器模式-24-1-0",
          "tag": "熔断器模式",
          "desc": "三状态：Closed(正常,失败率统计)→Open(失败率超阈值,快速失败不调下游)→Half-Open(冷却后放少量请求试探,成功则 Closed,失败则 Open)。防止雪崩(下游故障导致上游线程耗尽)。实现：Hystrix(停维护)/Resilience4j/Sentinel",
          "details": [
            {
              "id": "熔断器模式-24-1-0-d0",
              "tag": "Closed正常",
              "desc": "请求正常通过统计失败率(滑动窗口比例阈值)"
            },
            {
              "id": "熔断器模式-24-1-0-d1",
              "tag": "Open熔断",
              "desc": "失败率超阈值快速失败不调下游防止雪崩保护上游"
            },
            {
              "id": "熔断器模式-24-1-0-d2",
              "tag": "Half-Open半开",
              "desc": "冷却后放少量请求试探成功→Closed失败→Open"
            },
            {
              "id": "熔断器模式-24-1-0-d3",
              "tag": "防止雪崩",
              "desc": "下游故障导致上游线程耗尽熔断快速失败释放资源"
            },
            {
              "id": "熔断器模式-24-1-0-d4",
              "tag": "实现",
              "desc": "Hystrix(停维护)/Resilience4j/Sentinel推荐用Sentinel"
            }
          ]
        },
        {
          "id": "降级策略-24-1-1",
          "tag": "降级策略",
          "desc": "系统压力过大时关闭非核心功能保证核心链路。策略：默认值(返回空列表/默认值)/缓存降级(返回旧缓存)/静默降级(不显示非核心模块)/人工开关(大促关闭评论推荐)。核心链路不可降级(下单/支付)",
          "details": [
            {
              "id": "降级策略-24-1-1-d0",
              "tag": "默认值降级",
              "desc": "返回空列表/默认值/友好提示保证核心功能可用"
            },
            {
              "id": "降级策略-24-1-1-d1",
              "tag": "缓存降级",
              "desc": "返回旧缓存数据牺牲实时性保证可用性"
            },
            {
              "id": "降级策略-24-1-1-d2",
              "tag": "静默降级",
              "desc": "不显示非核心模块(推荐/评论/广告)保证核心体验"
            },
            {
              "id": "降级策略-24-1-1-d3",
              "tag": "人工开关",
              "desc": "大促关闭评论推荐搜索等非核心功能提前预案"
            },
            {
              "id": "降级策略-24-1-1-d4",
              "tag": "核心链路不可降级",
              "desc": "下单/支付/库存必须保证否则业务不可用"
            }
          ]
        }
      ]
    },
    {
      "id": "24-3-超时与重试-24-2",
      "title": "24.3 超时与重试",
      "points": [
        {
          "id": "超时策略-24-2-0",
          "tag": "超时策略",
          "desc": "连接超时(建立连接)/读取超时(等待响应)。必须设置超时防止资源耗尽(线程/连接池)。超时时间应小于上游超时时间(留出重试余量)。重试：固定间隔(简单)/指数退避(1s/2s/4s/8s)/Jitter 抖动(加随机因子防惊群)。最大重试次数(如 3 次)。只重试可重试异常(超时/503)",
          "details": [
            {
              "id": "超时策略-24-2-0-d0",
              "tag": "连接超时",
              "desc": "建立TCP连接超时通常1-3秒防止连接 hung 住"
            },
            {
              "id": "超时策略-24-2-0-d1",
              "tag": "读取超时",
              "desc": "等待响应超时通常3-30秒根据业务RT设置"
            },
            {
              "id": "超时策略-24-2-0-d2",
              "tag": "超时时间<上游超时时间",
              "desc": "留出重试余量防止级联超时（超时时间<上游超时时间的详细说明：超时策略中关于超时时间<上游超时时间的内容）"
            },
            {
              "id": "超时策略-24-2-0-d3",
              "tag": "指数退避",
              "desc": "1s/2s/4s/8s给故障恢复时间避免雪崩"
            },
            {
              "id": "超时策略-24-2-0-d4",
              "tag": "只重试可重试异常",
              "desc": "超时/503/连接失败;不重试400/401/403/业务异常"
            }
          ]
        }
      ]
    },
    {
      "id": "24-4-灾备与异地多活-24-3",
      "title": "24.4 灾备与异地多活",
      "points": [
        {
          "id": "异地多活-24-3-0",
          "tag": "异地多活",
          "desc": "多机房部署，每个机房可独立提供服务。核心：数据同步(最终一致)/流量切换(DNS/GSLB)/冲突解决(最后写入胜/业务规则)。挑战：数据一致性/延迟/成本。RPO 恢复点目标(可容忍丢失数据量)/RTO 恢复时间目标(可容忍停机时间)",
          "details": [
            {
              "id": "异地多活-24-3-0-d0",
              "tag": "多机房部署",
              "desc": "每个机房可独立提供服务避免单机房故障"
            },
            {
              "id": "异地多活-24-3-0-d1",
              "tag": "数据同步",
              "desc": "最终一致(异步复制)跨机房延迟毫秒级"
            },
            {
              "id": "异地多活-24-3-0-d2",
              "tag": "流量切换",
              "desc": "DNS/GSLB全局负载均衡机房级流量调度"
            },
            {
              "id": "异地多活-24-3-0-d3",
              "tag": "冲突解决",
              "desc": "最后写入胜(Last Write Wins)/业务规则(时间戳+版本号)"
            },
            {
              "id": "异地多活-24-3-0-d4",
              "tag": "RPO",
              "desc": "恢复点目标可容忍丢失数据量;RTO:恢复时间目标可容忍停机时间"
            }
          ]
        }
      ]
    }
  ]
};

// interview-prep.js — 二十五、面试准备 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['interview-prep'] = {
  "id": "interview-prep",
  "title": "三十六、面试准备",
  "tag": "面试准备",
  "order": 36,
  "icon": "💼",
  "cssIndex": 35,
  "subs": [
    {
      "id": "25-1-简历与项目-25-0",
      "title": "25.1 简历与项目",
      "points": [
        {
          "id": "简历规范-25-0-0",
          "tag": "简历规范",
          "desc": "校招不超过2页社招不超过3页。技术栈需与岗位匹配避免夸大(防止被深挖露馅)。工作内容6-8条确保3-4条有技术亮点。减少纯业务描述挖掘技术亮点,避免模糊词汇如负责开发要具体到技术+场景+效果",
          "details": [
            {
              "id": "简历规范-25-0-0-d0",
              "tag": "篇幅",
              "desc": "校招<=2页 社招<=3页（篇幅的详细说明：简历规范中关于篇幅的内容）"
            },
            {
              "id": "简历规范-25-0-0-d1",
              "tag": "6-8条内容,3-4条技术亮点",
              "desc": "简历每段工作写6-8条内容，其中3-4条必须包含技术亮点而非纯业务描述"
            },
            {
              "id": "简历规范-25-0-0-d2",
              "tag": "避免模糊词,量化成果",
              "desc": "用技术+场景+效果替代负责开发等模糊词，如用Redis缓存使响应时间降低60%"
            }
          ]
        },
        {
          "id": "star法则-25-0-1",
          "tag": "STAR法则",
          "desc": "Situation项目背景解决什么问题 / Task你的角色职责 / Action具体做了什么用了什么技术怎么解决 / Result量化成果(QPS提升xx%响应时间降低xx%节省成本xx元)。每个项目准备1-2分钟版和3-5分钟版话术稿",
          "details": [
            {
              "id": "star法则-25-0-1-d0",
              "tag": "S背景 T职责 A做法 R量化",
              "desc": "STAR四要素：项目背景→你的角色→具体做法与技术→量化成果数据"
            },
            {
              "id": "star法则-25-0-1-d1",
              "tag": "1-2分钟自我介绍 / 3-5分钟深挖",
              "desc": "准备精简版和详细版两套话术，1-2分钟做介绍、3-5分钟应对深挖追问"
            },
            {
              "id": "star法则-25-0-1-d2",
              "tag": "必须可量化",
              "desc": "QPS/延迟/节省成本（必须可量化的详细说明：STAR法则中关于必须可量化的内容）"
            }
          ]
        },
        {
          "id": "项目深挖策略-25-0-2",
          "tag": "项目深挖策略",
          "desc": "为每个项目整理:业务背景+技术栈+负责模块+1-2个难点及解决方案+可量化成果。必会题清单根据项目技术栈反推(用Redis就准备持久化缓存穿透等)。面试官会深挖技术选型原因和替代方案对比",
          "details": [
            {
              "id": "项目深挖策略-25-0-2-d0",
              "tag": "项目卡片",
              "desc": "背景+难点+方案+量化成果（项目卡片的详细说明：项目深挖策略中关于项目卡片的内容）"
            },
            {
              "id": "项目深挖策略-25-0-2-d1",
              "tag": "反推必会题",
              "desc": "技术栈->面试题（反推必会题的详细说明：项目深挖策略中关于反推必会题的内容）"
            },
            {
              "id": "项目深挖策略-25-0-2-d2",
              "tag": "技术选型原因+替代方案对比",
              "desc": "面试必挖技术选型：为何选Redis而非Memcached、为何选MQ而非直接DB写入"
            }
          ]
        },
        {
          "id": "没项目经验怎么办-25-0-3",
          "tag": "没项目经验怎么办",
          "desc": "实战项目:慕课网/B站/极客时间教程;推荐手写RPC框架或AI智能面试辅助平台。开源贡献:参与优质开源项目改进或功能增加。比赛经历:阿里云天池大赛获奖项目含金量高",
          "details": [
            {
              "id": "没项目经验怎么办-25-0-3-d0",
              "tag": "实战项目/RPC框架/AI面试平台",
              "desc": "无项目经验时做实战项目积累，推荐手写RPC框架或AI智能面试辅助平台"
            },
            {
              "id": "没项目经验怎么办-25-0-3-d1",
              "tag": "开源贡献/算法竞赛",
              "desc": "参与优质开源项目改进功能、阿里云天池大赛获奖项目含金量高补充简历"
            }
          ]
        }
      ]
    },
    {
      "id": "25-2-复习路线-25-1",
      "title": "25.2 复习路线",
      "points": [
        {
          "id": "考察优先级-25-1-0",
          "tag": "考察优先级",
          "desc": "项目经历与简历深挖 > Java核心/MySQL/Redis > 框架应用 > 系统设计与场景题 > 计算机基础 > 分布式/高并发 > JVM。先花2天打磨简历和项目故事(敲门砖),集中火力攻克MySQL和Redis(性价比最高必问)",
          "details": [
            {
              "id": "考察优先级-25-1-0-d0",
              "tag": "优先级",
              "desc": "项目>核心>框架>设计>基础>JVM"
            },
            {
              "id": "考察优先级-25-1-0-d1",
              "tag": "MySQL+Redis性价比最高必考",
              "desc": "面试考察MySQL和Redis频率最高性价比最大，集中火力攻克这两项必问考点"
            }
          ]
        },
        {
          "id": "java核心必考权重最高-25-1-1",
          "tag": "Java核心必考(权重最高)",
          "desc": "Java并发:线程池/JMM/AQS/ThreadLocal/ConcurrentHashMap(大厂必挖)。集合: HashMap源码(JDK8扩容红黑树转换)/ConcurrentHashMap(JDK7Segment vs JDK8CAS+synchronized)。String不可变/常量池/intern()",
          "details": [
            {
              "id": "java核心必考权重最高-25-1-1-d0",
              "tag": "并发",
              "desc": "线程池/JMM/AQS/TLocal/CHM"
            },
            {
              "id": "java核心必考权重最高-25-1-1-d1",
              "tag": "集合",
              "desc": "HashMap源码/CHM两种实现"
            },
            {
              "id": "java核心必考权重最高-25-1-1-d2",
              "tag": "String/泛型/反射/代理",
              "desc": "Java核心必考点：String不可变与常量池、泛型擦除机制、反射应用场景、动态代理原理"
            }
          ]
        },
        {
          "id": "数据库必考-25-1-2",
          "tag": "数据库必考",
          "desc": "MySQL:索引B+树原理/MVCC事务隔离/锁机制(RecordGapNext-Key)/SQL执行过程(explain)/慢查询优化/分库分表。Redis:数据结构跳表/持久化RDB-AOF混合/缓存三问题穿透击穿雪崩/分布式锁SETNX/集群Cluster16384槽",
          "details": [
            {
              "id": "数据库必考-25-1-2-d0",
              "tag": "MySQL",
              "desc": "索引/MVCC/锁/优化/分库分表"
            },
            {
              "id": "数据库必考-25-1-2-d1",
              "tag": "Redis",
              "desc": "结构/持久化/缓存问题/分布式锁/集群"
            }
          ]
        },
        {
          "id": "框架高频-25-1-3",
          "tag": "框架高频",
          "desc": "Spring: IoC DI/AOP代理/Bean生命周期(8步)/三级缓存循环依赖/SpringBoot自动装配(@EnableAutoConfiguration)/事务失效场景(6种:内部调用/异常吞掉/非public/final/非Spring管理)。MyBatis:#{}vs${}/一级二级缓存/MP增强",
          "details": [
            {
              "id": "框架高频-25-1-3-d0",
              "tag": "Spring",
              "desc": "IOC/AOP/Bean生命周期/循环依赖/自动配置"
            },
            {
              "id": "框架高频-25-1-3-d1",
              "tag": "事务失效",
              "desc": "内部调用/异常吞/final/non-public"
            },
            {
              "id": "框架高频-25-1-3-d2",
              "tag": "MyBatis",
              "desc": "#{}${}/缓存/MP（MyBatis的详细说明：框架高频中关于MyBatis的内容）"
            }
          ]
        }
      ]
    },
    {
      "id": "25-3-高频场景题-25-2",
      "title": "25.3 高频场景题",
      "points": [
        {
          "id": "秒杀系统设计-25-2-0",
          "tag": "秒杀系统设计",
          "desc": "核心问题:超卖(库存扣减原子性)、高并发(限流削峰)、一致性(DB+Redis双写)。方案:前端限流按钮置灰+后端限流(RateLimiter/Sentinel) -> Redis预减库存(DecrBy Lua原子) -> MQ异步下单(削峰保护DB) -> DB最终扣减库存(乐观锁version或唯一索引防超卖)。注意:MQ消费幂等(唯一ID去重)",
          "details": [
            {
              "id": "秒杀系统设计-25-2-0-d0",
              "tag": "限流(前端+RateLimiter)->Redis预减库存",
              "desc": "秒杀链路：前端按钮置灰限流→后端RateLimiter/Sentinel限流→Redis Lua原子预减库存"
            },
            {
              "id": "秒杀系统设计-25-2-0-d1",
              "tag": "MQ",
              "desc": "MQ异步下单削峰->DB乐观锁扣库存"
            },
            {
              "id": "秒杀系统设计-25-2-0-d2",
              "tag": "幂等",
              "desc": "唯一ID/version防重复消费"
            },
            {
              "id": "秒杀系统设计-25-2-0-d3",
              "tag": "前端防刷",
              "desc": "按钮置灰+验证码+RateLimiter限流"
            },
            {
              "id": "秒杀系统设计-25-2-0-d4",
              "tag": "Redis Lua原子扣减",
              "desc": "if decrby stock 1>=0成功else回滚"
            },
            {
              "id": "秒杀系统设计-25-2-0-d5",
              "tag": "库存预热",
              "desc": "活动前加载Redis避免DB瞬间压力"
            }
          ]
        },
        {
          "id": "短链服务tinyurl-25-2-1",
          "tag": "短链服务TinyURL",
          "desc": "需求:长URL转短链接(如abc.xyz/8dKs),访问短链302重定向长URL。设计:ID生成(雪花算法62进制编码a-zA-Z0-9)->存储(MySQL id为主键自增存长URL映射)->查询(Redis缓存热点短链)->重定向(301永久/302临时统计点击量)。扩展:自定义短码/过期时间/访问统计/防盗链",
          "details": [
            {
              "id": "短链服务tinyurl-25-2-1-d0",
              "tag": "ID生成",
              "desc": "雪花->62进制编码（ID生成的详细说明：短链服务TinyURL中关于ID生成的内容）"
            },
            {
              "id": "短链服务tinyurl-25-2-1-d1",
              "tag": "存储",
              "desc": "MySQL(id=短码key,长URLvalue)"
            },
            {
              "id": "短链服务tinyurl-25-2-1-d2",
              "tag": "查询",
              "desc": "Redis缓存+MySQL回源"
            },
            {
              "id": "短链服务tinyurl-25-2-1-d3",
              "tag": "重定向",
              "desc": "301永久 vs 302统计（重定向的详细说明：短链服务TinyURL中关于重定向的内容）"
            },
            {
              "id": "短链服务tinyurl-25-2-1-d4",
              "tag": "布隆过滤器防恶意短链查询",
              "desc": "无效短链直接返回（布隆过滤器防恶意短链查询的详细说明：短链服务TinyURL中关于布隆过滤器防恶意短链查询的内容）"
            },
            {
              "id": "短链服务tinyurl-25-2-1-d5",
              "tag": "自定义短码预生成",
              "desc": "批量生成存DB用户可选可用短码"
            },
            {
              "id": "短链服务tinyurl-25-2-1-d6",
              "tag": "统计维度",
              "desc": "地域/设备/时段/来源UV+PV多维报表"
            }
          ]
        },
        {
          "id": "消息队列可靠性-25-2-2",
          "tag": "消息队列可靠性",
          "desc": "不丢失:生产者确认(Broker ACK/同步异步Confirm)+Broker持久化(磁盘queue/index)+消费者手动Ack(非auto-commit)。不重复:消费端幂等(唯一ID去重/唯一约束/Redis SETNX/状态机)。顺序性:全局有序(单Partition单Consumer差)或分区有序(同Key同Partition同Consumer)。延迟消息:RocketMQ 18级固定等级/Timer任意精度",
          "details": [
            {
              "id": "消息队列可靠性-25-2-2-d0",
              "tag": "不丢",
              "desc": "Producer Confirm+Broker持久化+Consumer Ack"
            },
            {
              "id": "消息队列可靠性-25-2-2-d1",
              "tag": "不重复",
              "desc": "消费端幂等(唯一ID/状态机/SETNX)"
            },
            {
              "id": "消息队列可靠性-25-2-2-d2",
              "tag": "顺序",
              "desc": "同Key路由同Partition"
            },
            {
              "id": "消息队列可靠性-25-2-2-d3",
              "tag": "死信队列DLQ",
              "desc": "消费失败3次进DLQ人工干预（死信队列DLQ的详细说明：消息队列可靠性中关于死信队列DLQ的内容）"
            },
            {
              "id": "消息队列可靠性-25-2-2-d4",
              "tag": "延迟消息",
              "desc": "RocketMQ 18级延迟/RabbitMQ死信+TTL"
            },
            {
              "id": "消息队列可靠性-25-2-2-d5",
              "tag": "事务消息",
              "desc": "半消息+本地事务+commit/rollback保证一致"
            }
          ]
        },
        {
          "id": "分布式id方案-25-2-3",
          "tag": "分布式ID方案",
          "desc": "UUID(无序B+树分裂不推荐)/数据库自增(单点瓶颈)/雪花算法(64位:符号1+时间41+机器10+序列12,时钟回拨问题)/美团Leaf号段(批量取号step=1000双buffer预加载)/Redis INCR(incrBy步长)。推荐: Leaf-segment(高性能)或雪花算法(简单)",
          "details": [
            {
              "id": "分布式id方案-25-2-3-d0",
              "tag": "UUID(不推荐) / DB自增 / 雪花算法",
              "desc": "UUID无序致B+树分裂不推荐、DB自增有单点瓶颈、雪花算法64位需处理时钟回拨"
            },
            {
              "id": "分布式id方案-25-2-3-d1",
              "tag": "Leaf号段(批量预",
              "desc": "Leaf号段(批量预加载) / Redis INCR"
            },
            {
              "id": "分布式id方案-25-2-3-d2",
              "tag": "推荐",
              "desc": "Leaf-segment 或 雪花"
            },
            {
              "id": "分布式id方案-25-2-3-d3",
              "tag": "时钟回拨",
              "desc": "记录上次时间戳回拨<5ms等待超过抛异常"
            },
            {
              "id": "分布式id方案-25-2-3-d4",
              "tag": "Leaf-segment双buffer",
              "desc": "用完前异步预加载无空窗（Leaf-segment双buffer的详细说明：分布式ID方案中关于Leaf-segment双buffer的内容）"
            },
            {
              "id": "分布式id方案-25-2-3-d5",
              "tag": "Leaf-snowflake",
              "desc": "结合ZK分配workerId解决时钟回拨"
            }
          ]
        },
        {
          "id": "定时任务方案-25-2-4",
          "tag": "定时任务方案",
          "desc": "XXL-JOB(调度中心+执行器,分片广播,弹性扩容故障转移)/PowerJob(MapReduce模型,工作流编排)/Spring Scheduled(@Scheduled cron,单机)/Quartz(任务/触发器/调度器复杂但功能全)/延时队列(Redis ZSet score=到期时间轮询/RocketMQ延迟消息)",
          "details": [
            {
              "id": "定时任务方案-25-2-4-d0",
              "tag": "XXL-JOB(推荐",
              "desc": "分片广播+故障转移)（XXL-JOB(推荐的详细说明：定时任务方案中关于XXL-JOB(推荐的内容）"
            },
            {
              "id": "定时任务方案-25-2-4-d1",
              "tag": "PowerJob(MapReduce+工作流)",
              "desc": "PowerJob支持MapReduce分片模型和可视化工作流编排，适合复杂分布式任务调度"
            },
            {
              "id": "定时任务方案-25-2-4-d2",
              "tag": "Quartz",
              "desc": "Quartz任务/触发器/调度器三组件架构功能全但配置复杂，适合单机精细调度场景"
            },
            {
              "id": "定时任务方案-25-2-4-d3",
              "tag": "分片广播",
              "desc": "每个执行器处理不同分片参数提高并发"
            },
            {
              "id": "定时任务方案-25-2-4-d4",
              "tag": "弹性扩容",
              "desc": "执行器动态注册调度中心自动感知新节点"
            },
            {
              "id": "定时任务方案-25-2-4-d5",
              "tag": "失败重试",
              "desc": "可配置重试次数+告警策略+失败路由"
            }
          ]
        },
        {
          "id": "第三方登录-25-2-5",
          "tag": "第三方登录",
          "desc": "OAuth2.0授权码模式:用户点登录->跳转第三方授权页->用户同意授权->回调带code->用code换取access_token->用token获取用户信息(头像昵称openid)->本地创建/关联账号返回JWT。注意:state参数防CSRF攻击,openid做账号绑定唯一标识",
          "details": [
            {
              "id": "第三方登录-25-2-5-d0",
              "tag": "OAuth2.0授权码流程6步",
              "desc": "用户授权→跳转授权页→同意→回调带code→code换token→token获取用户信息→绑定账号"
            },
            {
              "id": "第三方登录-25-2-5-d1",
              "tag": "code换token->token拿用户信息->绑定本地账号",
              "desc": "核心三步：用授权码换access_token、用token调API拿openid/昵称、用openid关联本地账号返回JWT"
            },
            {
              "id": "第三方登录-25-2-5-d2",
              "tag": "state防CSRF openid做绑定标识",
              "desc": "state参数验证回调来源防CSRF攻击，openid作为第三方账号绑定唯一标识防重复关联"
            },
            {
              "id": "第三方登录-25-2-5-d3",
              "tag": "绑定策略",
              "desc": "新用户首次OAuth创建本地账号补充邮箱/手机"
            },
            {
              "id": "第三方登录-25-2-5-d4",
              "tag": "Token",
              "desc": "access短期2h+refresh长期7d双token机制"
            },
            {
              "id": "第三方登录-25-2-5-d5",
              "tag": "多源",
              "desc": "微信+支付宝+GitHub统一绑定one-openid-per-provider"
            }
          ]
        },
        {
          "id": "web实时推送-25-2-6",
          "tag": "Web实时推送",
          "desc": "方案对比:短轮询(客户端定时请求,浪费资源)/长轮询(服务端hold连接有数据才返回,SSE基础)/SSE Server-Sent Events(单向服务器推,HTTP协议简单)/WebSocket(双向通信,适合聊天/协同编辑,需维护心跳保活)。推荐:SSE(通知类)或WebSocket(即时通讯类)",
          "details": [
            {
              "id": "web实时推送-25-2-6-d0",
              "tag": "短轮询<长轮询<SSE<WebSocket(按场景选)",
              "desc": "通知类用SSE单向推送简单可靠，即时通讯类用WebSocket双向通信需维护心跳保活"
            },
            {
              "id": "web实时推送-25-2-6-d1",
              "tag": "SSE",
              "desc": "单向推送简单（SSE的详细说明：Web实时推送中关于SSE的内容）"
            },
            {
              "id": "web实时推送-25-2-6-d2",
              "tag": "WS",
              "desc": "双向聊天/协同编辑+心跳保活（WS的详细说明：Web实时推送中关于WS的内容）"
            },
            {
              "id": "web实时推送-25-2-6-d3",
              "tag": "心跳保活",
              "desc": "客户端30s ping无pong超时断开服务端60s无心跳断开"
            },
            {
              "id": "web实时推送-25-2-6-d4",
              "tag": "断线重连",
              "desc": "指数退避1s→2s→4s→8s避免雪崩式重连风暴"
            },
            {
              "id": "web实时推送-25-2-6-d5",
              "tag": "消息缓存",
              "desc": "离线消息Redis List存储上线后批量拉取+ACK确认"
            }
          ]
        },
        {
          "id": "用户注册登录系统-25-2-7",
          "tag": "用户注册登录系统",
          "desc": "密码存储:bcrypt加盐哈希+防彩虹表攻击。Token设计:JWT双token或Session+Redis。短信验证码限流:Redis SETNX防刷",
          "details": [
            {
              "id": "用户注册登录系统-25-2-7-d0",
              "tag": "密码",
              "desc": "bcrypt自动加盐+自适应成本因子替代MD5/SHA不安全"
            },
            {
              "id": "用户注册登录系统-25-2-7-d1",
              "tag": "JWT双token",
              "desc": "access_token(2h)+refresh_token(7d)续期方案"
            },
            {
              "id": "用户注册登录系统-25-2-7-d2",
              "tag": "短信限流",
              "desc": "Redis SETNX sms:phone 1 60(60秒1次)+图形验证码前置"
            },
            {
              "id": "用户注册登录系统-25-2-7-d3",
              "tag": "分布式Session",
              "desc": "Spring Session+Redis共享多服务登录状态"
            },
            {
              "id": "用户注册登录系统-25-2-7-d4",
              "tag": "OAuth2登录",
              "desc": "微信/支付宝一键登录+本地账号绑定openid关联"
            }
          ]
        },
        {
          "id": "朋友圈-feed流-25-2-8",
          "tag": "朋友圈/Feed流",
          "desc": "推模式(写扩散):发帖推到所有粉丝;拉模式(读扩散):读时拉取;推拉结合:大V拉模式普通用户推",
          "details": [
            {
              "id": "朋友圈-feed流-25-2-8-d0",
              "tag": "推模式",
              "desc": "发帖写Redis粉丝Timeline ZSet简单但大V写入爆炸"
            },
            {
              "id": "朋友圈-feed流-25-2-8-d1",
              "tag": "拉模式",
              "desc": "读时聚合关注者最新帖子计算量大但写入轻量"
            },
            {
              "id": "朋友圈-feed流-25-2-8-d2",
              "tag": "推拉结合",
              "desc": ">1万粉丝大V用拉模式<1万用推模式平衡读写"
            },
            {
              "id": "朋友圈-feed流-25-2-8-d3",
              "tag": "时间线分页",
              "desc": "ZSet ZREVRANGE按时间戳分页高效"
            },
            {
              "id": "朋友圈-feed流-25-2-8-d4",
              "tag": "删除/修改",
              "desc": "推模式下需遍历粉丝Timeline删除或标记删除"
            }
          ]
        },
        {
          "id": "支付系统-25-2-9",
          "tag": "支付系统",
          "desc": "核心:幂等(防重复扣款)+对账(保证一致)+回调(异步通知)+分布式事务(TCC/Saga)",
          "details": [
            {
              "id": "支付系统-25-2-9-d0",
              "tag": "幂等",
              "desc": "支付流水号唯一索引+状态机单向流转pending→paid→refunded"
            },
            {
              "id": "支付系统-25-2-9-d1",
              "tag": "对账",
              "desc": "T+1日对账(银行流水vs本地)差异挂账人工处理"
            },
            {
              "id": "支付系统-25-2-9-d2",
              "tag": "回调",
              "desc": "支付成功MQ通知商户+回调失败重试最多5次指数退避"
            },
            {
              "id": "支付系统-25-2-9-d3",
              "tag": "分布式事务",
              "desc": "TCC或本地消息表+MQ最终一致性保证"
            },
            {
              "id": "支付系统-25-2-9-d4",
              "tag": "退款",
              "desc": "原路退回+退款流水号+状态机refunding→refunded/failed"
            }
          ]
        },
        {
          "id": "配置中心-25-2-10",
          "tag": "配置中心",
          "desc": "长轮询推送变更+灰度发布配置+版本管理+多环境隔离+权限控制",
          "details": [
            {
              "id": "配置中心-25-2-10-d0",
              "tag": "长轮询",
              "desc": "客户端HTTP长连接30s超时变更立即返回减少延迟"
            },
            {
              "id": "配置中心-25-2-10-d1",
              "tag": "灰度发布",
              "desc": "按IP/用户标签/机房灰度推送观察后全量发布"
            },
            {
              "id": "配置中心-25-2-10-d2",
              "tag": "版本管理",
              "desc": "每次变更生成版本号支持回滚到任意历史版本"
            },
            {
              "id": "配置中心-25-2-10-d3",
              "tag": "多环境",
              "desc": "dev/fat/uat/prod独立namespace配置继承+覆盖"
            },
            {
              "id": "配置中心-25-2-10-d4",
              "tag": "权限隔离",
              "desc": "应用级+环境级权限控制非授权不可读不可改"
            }
          ]
        },
        {
          "id": "日志采集-25-2-11",
          "tag": "日志采集",
          "desc": "Agent采集→Kafka缓冲→ES存储→Kibana可视化+日志分级+告警联动",
          "details": [
            {
              "id": "日志采集-25-2-11-d0",
              "tag": "Agent",
              "desc": "Filebeat轻量采集+多行合并(Java堆栈)自动识别"
            },
            {
              "id": "日志采集-25-2-11-d1",
              "tag": "Kafka缓冲",
              "desc": "按服务分topic+partition+消费组隔离保证顺序"
            },
            {
              "id": "日志采集-25-2-11-d2",
              "tag": "ES存储",
              "desc": "按天建索引+冷热分离7天热SSD/30天冷HDD"
            },
            {
              "id": "日志采集-25-2-11-d3",
              "tag": "链路追踪",
              "desc": "TraceId注入MDC日志携带实现跨服务关联"
            },
            {
              "id": "日志采集-25-2-11-d4",
              "tag": "告警",
              "desc": "ERROR日志超阈值5min>50次触发钉钉/短信告警"
            }
          ]
        },
        {
          "id": "数据同步-25-2-12",
          "tag": "数据同步",
          "desc": "Canal监听binlog→解析变更→MQ分发→目标端消费同步+全量+增量+校验",
          "details": [
            {
              "id": "数据同步-25-2-12-d0",
              "tag": "Canal原理",
              "desc": "伪装MySQL slave订阅binlog解析Insert/Update/Delete"
            },
            {
              "id": "数据同步-25-2-12-d1",
              "tag": "增量同步",
              "desc": "Canal实时监听→MQ分发→消费写入保证顺序性"
            },
            {
              "id": "数据同步-25-2-12-d2",
              "tag": "全量同步",
              "desc": "首次DB全量dump→目标批量导入+后续增量接续"
            },
            {
              "id": "数据同步-25-2-12-d3",
              "tag": "数据校验",
              "desc": "定时对账对比源端目标端一致性Hash比对"
            },
            {
              "id": "数据同步-25-2-12-d4",
              "tag": "异常处理",
              "desc": "消费失败死信队列→人工干预→重试→告警"
            }
          ]
        },
        {
          "id": "推荐系统-25-2-13",
          "tag": "推荐系统",
          "desc": "召回(多路粗筛)+排序(精排)两阶段+实时特征+离线训练+AB实验",
          "details": [
            {
              "id": "推荐系统-25-2-13-d0",
              "tag": "召回",
              "desc": "协同过滤+内容推荐+热门+标签多路并行粗筛"
            },
            {
              "id": "推荐系统-25-2-13-d1",
              "tag": "排序",
              "desc": "LR/DNN/Wide&Deep精排模型用户+物品+上下文特征"
            },
            {
              "id": "推荐系统-25-2-13-d2",
              "tag": "实时特征",
              "desc": "Flink流处理实时计算用户最近点击停留时长"
            },
            {
              "id": "推荐系统-25-2-13-d3",
              "tag": "离线训练",
              "desc": "Spark离线训练每日更新模型参数定期刷新"
            },
            {
              "id": "推荐系统-25-2-13-d4",
              "tag": "AB实验",
              "desc": "分流平台多组实验统计显著性和效果指标对比"
            }
          ]
        },
        {
          "id": "接口版本管理-25-2-14",
          "tag": "接口版本管理",
          "desc": "URL版本(v1/v2)+Header版本+网关路由版本控制+兼容策略+废弃流程",
          "details": [
            {
              "id": "接口版本管理-25-2-14-d0",
              "tag": "URL版本",
              "desc": "/api/v1/user→/api/v2/user路径明确易于理解"
            },
            {
              "id": "接口版本管理-25-2-14-d1",
              "tag": "Header版本",
              "desc": "Accept:application/vnd.myapp.v2+json更RESTful"
            },
            {
              "id": "接口版本管理-25-2-14-d2",
              "tag": "网关路由",
              "desc": "API Gateway按版本路由到不同服务实例"
            },
            {
              "id": "接口版本管理-25-2-14-d3",
              "tag": "兼容策略",
              "desc": "新版本兼容旧版本保持2个版本并行逐步迁移"
            },
            {
              "id": "接口版本管理-25-2-14-d4",
              "tag": "废弃流程",
              "desc": "标记deprecated→公告3个月迁移期→下线旧版本"
            }
          ]
        },
        {
          "id": "监控告警-25-2-15",
          "tag": "监控告警",
          "desc": "Prometheus采集指标→Grafana可视化→Alertmanager告警分级→自动扩容",
          "details": [
            {
              "id": "监控告警-25-2-15-d0",
              "tag": "Prometheus",
              "desc": "Pull模式+Service Discovery自动发现+Exporter暴露指标"
            },
            {
              "id": "监控告警-25-2-15-d1",
              "tag": "指标类型",
              "desc": "Counter累计/Gauge当前/Histogram分布/Summary分位"
            },
            {
              "id": "监控告警-25-2-15-d2",
              "tag": "Grafana",
              "desc": "服务健康总览+延迟P99+QPS趋势+错误率+资源使用"
            },
            {
              "id": "监控告警-25-2-15-d3",
              "tag": "告警分级",
              "desc": "P0(5min持续异常→电话钉钉)/P1(30min→钉钉)/P2(1h→邮件)"
            },
            {
              "id": "监控告警-25-2-15-d4",
              "tag": "自动扩容",
              "desc": "HPA基于CPU/内存/自定义指标联动K8s弹性伸缩"
            }
          ]
        },
        {
          "id": "api网关-25-2-16",
          "tag": "API网关",
          "desc": "统一入口:路由转发+认证鉴权+限流熔断+日志追踪+协议转换+灰度路由",
          "details": [
            {
              "id": "api网关-25-2-16-d0",
              "tag": "路由转发",
              "desc": "按路径前缀路由(/customer/**→7002)+负载均衡"
            },
            {
              "id": "api网关-25-2-16-d1",
              "tag": "认证鉴权",
              "desc": "JWT校验+权限拦截+黑名单检查统一入口免重复"
            },
            {
              "id": "api网关-25-2-16-d2",
              "tag": "限流熔断",
              "desc": "Sentinel集成QPS限流+熔断降级+热点参数限流"
            },
            {
              "id": "api网关-25-2-16-d3",
              "tag": "日志追踪",
              "desc": "请求ID X-Request-Id透传+响应时间+错误归集"
            },
            {
              "id": "api网关-25-2-16-d4",
              "tag": "灰度路由",
              "desc": "按请求头/cookie/权重路由到灰度版本实例"
            }
          ]
        },
        {
          "id": "缓存架构-25-2-17",
          "tag": "缓存架构",
          "desc": "多级缓存(本地Caffeine+Redis+CDN)+穿透/击穿/雪崩防护+一致性保障",
          "details": [
            {
              "id": "缓存架构-25-2-17-d0",
              "tag": "本地缓存",
              "desc": "Caffeine过期1min+最大1万条减少Redis访问"
            },
            {
              "id": "缓存架构-25-2-17-d1",
              "tag": "Redis缓存",
              "desc": "热点过期5min+数据变更主动删除更新"
            },
            {
              "id": "缓存架构-25-2-17-d2",
              "tag": "CDN缓存",
              "desc": "静态资源+边缘缓存过期1h+源站回源降级"
            },
            {
              "id": "缓存架构-25-2-17-d3",
              "tag": "穿透防护",
              "desc": "空值缓存null 5min+布隆过滤器前置拦截"
            },
            {
              "id": "缓存架构-25-2-17-d4",
              "tag": "雪崩防护",
              "desc": "随机过期base±10%分散失效+多级缓存兜底"
            }
          ]
        },
        {
          "id": "消息重试与死信-25-2-18",
          "tag": "消息重试与死信",
          "desc": "消费失败自动重试最多3次+超过进DLQ+人工干预+告警+幂等保障",
          "details": [
            {
              "id": "消息重试与死信-25-2-18-d0",
              "tag": "重试策略",
              "desc": "默认3次间隔递增10s→30s→1minRocketMQ内置"
            },
            {
              "id": "消息重试与死信-25-2-18-d1",
              "tag": "死信队列DLQ",
              "desc": "重试耗尽进%DLQ%ConsumerGroup-topic专有topic"
            },
            {
              "id": "消息重试与死信-25-2-18-d2",
              "tag": "人工干预",
              "desc": "运维平台查看DLQ→手动重发/标记丢弃/数据修正"
            },
            {
              "id": "消息重试与死信-25-2-18-d3",
              "tag": "告警联动",
              "desc": "DLQ积压>100条触发P1告警通知业务方处理"
            },
            {
              "id": "消息重试与死信-25-2-18-d4",
              "tag": "幂等保障",
              "desc": "消费端必须幂等唯一ID/状态机避免重复处理"
            }
          ]
        },
        {
          "id": "分布式事务-25-2-19",
          "tag": "分布式事务",
          "desc": "2PC强一致/TCC柔性/本地消息表异步/Saga长流程/Seata多种模式",
          "details": [
            {
              "id": "分布式事务-25-2-19-d0",
              "tag": "2PC/XA",
              "desc": "强一致但同步阻塞性能差只适合单DB不适合跨服务"
            },
            {
              "id": "分布式事务-25-2-19-d1",
              "tag": "TCC",
              "desc": "Try预留→Confirm确认→Cancel补偿每服务3接口复杂"
            },
            {
              "id": "分布式事务-25-2-19-d2",
              "tag": "本地消息表",
              "desc": "业务+消息表同DB事务→扫描→MQ→消费最终一致"
            },
            {
              "id": "分布式事务-25-2-19-d3",
              "tag": "Saga",
              "desc": "正向T1→T2→T3失败反向C3→C2→C1适合长流程"
            },
            {
              "id": "分布式事务-25-2-19-d4",
              "tag": "Seata",
              "desc": "AT自动补偿/TCC/Saga/XA多种模式灵活选择"
            }
          ]
        },
        {
          "id": "多租户数据隔离-25-2-20",
          "tag": "多租户数据隔离",
          "desc": "共享DB字段隔离+租户路由中间件+数据权限自动过滤+缓存隔离",
          "details": [
            {
              "id": "多租户数据隔离-25-2-20-d0",
              "tag": "字段隔离",
              "desc": "表加tenant_id列Interceptor自动注入WHERE tenant_id=X"
            },
            {
              "id": "多租户数据隔离-25-2-20-d1",
              "tag": "租户路由",
              "desc": "Filter从token解析tenantId→ThreadLocal→自动拼接过滤"
            },
            {
              "id": "多租户数据隔离-25-2-20-d2",
              "tag": "缓存隔离",
              "desc": "Redis Key前缀tenant:{id}:*各租户缓存独立"
            },
            {
              "id": "多租户数据隔离-25-2-20-d3",
              "tag": "配置隔离",
              "desc": "Apollo namespace按租户不同配置功能开关限流阈值"
            },
            {
              "id": "多租户数据隔离-25-2-20-d4",
              "tag": "超级租户",
              "desc": "platform_admin跨租户操作Interceptor不注入tenant_id"
            }
          ]
        },
        {
          "id": "数据迁移-25-2-21",
          "tag": "数据迁移",
          "desc": "灰度迁移+双写策略+数据校验+回滚预案零停机平滑迁移",
          "details": [
            {
              "id": "数据迁移-25-2-21-d0",
              "tag": "灰度迁移",
              "desc": "新存储10%流量→50%→100%→旧存储下线逐步放量"
            },
            {
              "id": "数据迁移-25-2-21-d1",
              "tag": "双写策略",
              "desc": "写操作同时写新旧两存储保证新存储数据完整"
            },
            {
              "id": "数据迁移-25-2-21-d2",
              "tag": "数据校验",
              "desc": "定时对账对比新旧存储行数+Hash+采样比对"
            },
            {
              "id": "数据迁移-25-2-21-d3",
              "tag": "回滚预案",
              "desc": "流量切回旧存储秒级完成+新存储保留可再切"
            },
            {
              "id": "数据迁移-25-2-21-d4",
              "tag": "分批迁移",
              "desc": "按userId范围分批避免全量OOM+长时间锁表"
            }
          ]
        }
      ]
    },
    {
      "id": "25-4-面试技巧-25-3",
      "title": "25.4 面试技巧",
      "points": [
        {
          "id": "复习方法-25-3-0",
          "tag": "复习方法",
          "desc": "不要死记硬背理解原理记忆关键词。面试时能用通俗语言解释清楚即可。八股文是日常开发基础也是面试筛选效率手段不可轻视。随机抽题测试能答出核心点和关键词。脱稿演练30秒讲清项目3分钟讲清难点",
          "details": [
            {
              "id": "复习方法-25-3-0-d0",
              "tag": "理解原理记关键词不背原文",
              "desc": "面试时用通俗语言解释原理而非背诵原文，记住核心关键词能还原完整逻辑链"
            },
            {
              "id": "复习方法-25-3-0-d1",
              "tag": "脱稿演练",
              "desc": "30秒项目+3分钟难点（脱稿演练的详细说明：复习方法中关于脱稿演练的内容）"
            }
          ]
        },
        {
          "id": "算法准备-25-3-1",
          "tag": "算法准备",
          "desc": "大厂必考:二分查找/LRU(HashMap+双向链表)/生产者消费者模型(BlockingQueue)/链表反转/快排/TopK(小顶堆)/DFS BFS/动态规划(背包/爬楼梯/最长公共子串)。LeetCode Hot100+剑指Offer。中等难度为主偶尔困难题看思路即可",
          "details": [
            {
              "id": "算法准备-25-3-1-d0",
              "tag": "必刷",
              "desc": "Hot100+剑指Offer（必刷的详细说明：算法准备中关于必刷的内容）"
            },
            {
              "id": "算法准备-25-3-1-d1",
              "tag": "高频",
              "desc": "二分/LRU/生产消费者/链表反转/快排/TopK"
            },
            {
              "id": "算法准备-25-3-1-d2",
              "tag": "中等为主,困难看思路",
              "desc": "算法以中等难度为主重点刷Hot100和剑指Offer，困难题只需看懂思路不必深究"
            }
          ]
        },
        {
          "id": "行为面准备-25-3-2",
          "tag": "行为面准备",
          "desc": "自我介绍1-2分钟(姓名学校+核心技能+最有成就感的项目+为什么匹配岗位)。优点缺点(优点举例子佐证,缺点说真实但在改进的如太关注细节现在学会平衡效率)。离职原因(正面表达追求成长不说前公司坏话)。职业规划(3年资深/5年专家方向)",
          "details": [
            {
              "id": "行为面准备-25-3-2-d0",
              "tag": "自我介绍",
              "desc": "姓名+技能+项目+匹配度（自我介绍的详细说明：行为面准备中关于自我介绍的内容）"
            },
            {
              "id": "行为面准备-25-3-2-d1",
              "tag": "优缺点",
              "desc": "有例证+在改进中（优缺点的详细说明：行为面准备中关于优缺点的内容）"
            },
            {
              "id": "行为面准备-25-3-2-d2",
              "tag": "离职原因",
              "desc": "正面表达追求成长（离职原因的详细说明：行为面准备中关于离职原因的内容）"
            }
          ]
        },
        {
          "id": "面试冲刺-25-3-3",
          "tag": "面试冲刺",
          "desc": "前1-2天:过一遍必会题(项目相关+简历熟练技术点)+练一遍话术(自我介绍流畅不卡壳)+查看目标公司面经(字节偏算法阿里偏高并发)+调试设备保持早睡调整心态。面试中不会的直接说这个还没深入研究但知道...然后引向熟悉的方向",
          "details": [
            {
              "id": "面试冲刺-25-3-3-d0",
              "tag": "冲刺",
              "desc": "必会题+话术练+针对性补短板（冲刺的详细说明：面试冲刺中关于冲刺的内容）"
            },
            {
              "id": "面试冲刺-25-3-3-d1",
              "tag": "不会的",
              "desc": "承认+引导到熟悉方向（不会的的详细说明：面试冲刺中关于不会的的内容）"
            }
          ]
        }
      ]
    }
  ]
};
