// elasticsearch.js — 二十六、ElasticSearch 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['elasticsearch'] = {
  "id": "elasticsearch",
  "title": "十一、ElasticSearch 搜索引擎",
  "tag": "ElasticSearch",
  "order": 11,
  "icon": "📋",
  "cssIndex": 10,
  "subs": [
    {
      "id": "26-1-es核心概念-26-0",
      "title": "26.1 ES核心概念",
      "points": [
        {
          "id": "es索引与分片设计-26-0-0",
          "tag": "ES索引与分片设计",
          "desc": "ElasticSearch索引是文档的逻辑容器，物理上划分为多个分片（Shard每个分片是独立Lucene索引实例），分片数创建时设定不可更改建议3-5个主分片。每个分片可有副本（Replica提供冗余和高可用主分片故障时副本自动提升），副本数可动态调整默认1个。分片设计使ES水平扩展将数据分散到多节点并行处理提升搜索吞吐量。生产环境主分片数根据数据增长预估设定副本数根据可用性需求和搜索并发压力动态增减。",
          "details": [
            {
              "id": "es索引与分片设计-26-0-0-d0",
              "tag": "索引",
              "desc": "ES文档的逻辑容器，物理上划分为多个分片，创建后分片数不可更改"
            },
            {
              "id": "es索引与分片设计-26-0-0-d1",
              "tag": "分片",
              "desc": "每个分片是独立Lucene索引实例，创建时设定不可更改，建议3-5个主分片"
            },
            {
              "id": "es索引与分片设计-26-0-0-d2",
              "tag": "副本",
              "desc": "提供冗余和高可用，主分片故障时副本自动提升，副本数可动态调整默认1"
            },
            {
              "id": "es索引与分片设计-26-0-0-d3",
              "tag": "水平扩展",
              "desc": "分片设计使数据分散到多节点并行处理，提升搜索吞吐量"
            },
            {
              "id": "es索引与分片设计-26-0-0-d4",
              "tag": "高可用",
              "desc": "副本提供冗余，主分片故障时副本自动提升为新主分片保证服务不中断"
            },
            {
              "id": "es索引与分片设计-26-0-0-d5",
              "tag": "Lucene",
              "desc": "ES底层搜索引擎，每个分片本质是一个独立Lucene索引实例"
            },
            {
              "id": "es索引与分片设计-26-0-0-d6",
              "tag": "分片策略",
              "desc": "主分片数根据数据增长预估设定，副本数根据可用性和搜索并发动态增减"
            },
            {
              "id": "es索引与分片设计-26-0-0-d7",
              "tag": "集群规模",
              "desc": "生产环境需根据数据量、搜索并发和可用性需求规划节点数和分片布局"
            }
          ]
        },
        {
          "id": "es倒排索引原理-26-0-1",
          "tag": "ES倒排索引原理",
          "desc": "倒排索引是ES实现高速全文检索的核心数据结构按词项查找包含该词项的文档列表。ES通过分析器对文本分词为每个词项建立倒排条目包含词项字典和倒排列表。ES在Lucene基础上引入FST（Finite State Transducer）对词项字典压缩和快速查找使用Roaring Bitmap对倒排列表压缩。段（Segment）是不可变数据单元一旦写入不再修改删除通过标记位实现更新实质是先标记删除再新增。这种不可变设计使倒排索引可高效缓存和压缩是ES搜索性能远超传统数据库的关键。",
          "details": [
            {
              "id": "es倒排索引原理-26-0-1-d0",
              "tag": "倒排索引",
              "desc": "按词项查找包含该词项的文档列表，是ES高速全文检索的核心数据结构"
            },
            {
              "id": "es倒排索引原理-26-0-1-d1",
              "tag": "词项",
              "desc": "分析器对文本分词后产生的最小索引单元，每个词项对应一个倒排条目"
            },
            {
              "id": "es倒排索引原理-26-0-1-d2",
              "tag": "PostingList",
              "desc": "倒排列表，记录包含某词项的所有文档ID，使用Roaring Bitmap压缩存储"
            },
            {
              "id": "es倒排索引原理-26-0-1-d3",
              "tag": "分词",
              "desc": "分析器将文本拆分为词项的过程，是建立倒排索引的前提"
            },
            {
              "id": "es倒排索引原理-26-0-1-d4",
              "tag": "FST",
              "desc": "Finite State Transducer，对词项字典压缩和快速查找，降低内存占用"
            },
            {
              "id": "es倒排索引原理-26-0-1-d5",
              "tag": "RoaringBitmap",
              "desc": "对倒排列表压缩的高效位图结构，比传统位图更节省空间"
            },
            {
              "id": "es倒排索引原理-26-0-1-d6",
              "tag": "段合并",
              "desc": "多个小段合并为大段，清理标记删除文档，提升查询效率"
            },
            {
              "id": "es倒排索引原理-26-0-1-d7",
              "tag": "全文检索",
              "desc": "基于倒排索引按词项快速定位文档，性能远超传统数据库LIKE查询"
            }
          ]
        },
        {
          "id": "es文档与映射-26-0-2",
          "tag": "ES文档与映射",
          "desc": "ES文档以JSON格式表示映射定义文档结构和字段类型规则。text类型全文检索分词建立倒排索引；keyword类型精确匹配排序聚合不分词。映射一旦创建字段类型不可更改可通过创建新索引reindex变更。嵌套类型（nested）保持对象数组内部独立性。动态映射写入未知字段时自动推断类型显式映射创建索引时预定义规则。",
          "details": [
            {
              "id": "es文档与映射-26-0-2-d0",
              "tag": "文档",
              "desc": "ES中数据以JSON格式表示的基本单元，包含字段和值"
            },
            {
              "id": "es文档与映射-26-0-2-d1",
              "tag": "映射",
              "desc": "定义文档结构和字段类型规则，一旦创建字段类型不可更改"
            },
            {
              "id": "es文档与映射-26-0-2-d2",
              "tag": "text类型",
              "desc": "全文检索字段类型，分词建立倒排索引，不适合排序和聚合"
            },
            {
              "id": "es文档与映射-26-0-2-d3",
              "tag": "keyword类型",
              "desc": "精确匹配字段类型，不分词，适合排序聚合和term查询"
            },
            {
              "id": "es文档与映射-26-0-2-d4",
              "tag": "动态映射",
              "desc": "写入未知字段时自动推断类型，可配置动态映射规则控制推断行为"
            },
            {
              "id": "es文档与映射-26-0-2-d5",
              "tag": "nested类型",
              "desc": "保持对象数组内部独立性，每个嵌套对象独立索引可独立查询"
            },
            {
              "id": "es文档与映射-26-0-2-d6",
              "tag": "reindex",
              "desc": "通过创建新索引+reindex变更字段类型，是修改映射的唯一方式"
            },
            {
              "id": "es文档与映射-26-0-2-d7",
              "tag": "字段类型",
              "desc": "映射定义的字段数据类型，如text/keyword/integer/date等决定索引行为"
            }
          ]
        },
        {
          "id": "es分析器与分词-26-0-3",
          "tag": "ES分析器与分词",
          "desc": "分析器由Character Filters+Tokenizer+Token Filters三部分组成。内置分析器：standard（标准分词+小写）、simple（非字母分割+小写）、whitespace（空格分割）、keyword（不分词）。中文分词推荐IK Analyzer插件（ik_max_word最细粒度ik_smart最粗粒度）。自定义分析器通过组合各组件实现特定业务分词需求如同义词扩展停用词过滤等。",
          "details": [
            {
              "id": "es分析器与分词-26-0-3-d0",
              "tag": "分析器",
              "desc": "由Character Filters+Tokenizer+Token Filters三部分组成的分词处理链"
            },
            {
              "id": "es分析器与分词-26-0-3-d1",
              "tag": "Tokenizer",
              "desc": "分析器核心组件，将文本切分为词项流，如standard/swhitespace/keyword"
            },
            {
              "id": "es分析器与分词-26-0-3-d2",
              "tag": "IK分词",
              "desc": "中文分词推荐IK Analyzer插件，ik_max_word最细粒度ik_smart最粗粒度"
            },
            {
              "id": "es分析器与分词-26-0-3-d3",
              "tag": "中文分词",
              "desc": "中文需专用分词插件如IK Analyzer，支持最大粒度和智能粒度两种模式"
            },
            {
              "id": "es分析器与分词-26-0-3-d4",
              "tag": "Token Filter",
              "desc": "对Tokenizer输出的词项进行后处理，如小写转换、同义词扩展、停用词过滤"
            },
            {
              "id": "es分析器与分词-26-0-3-d5",
              "tag": "Character Filter",
              "desc": "分析器第一层组件，在分词前对原始文本预处理如HTML标签剥离、字符替换"
            },
            {
              "id": "es分析器与分词-26-0-3-d6",
              "tag": "standard分析器",
              "desc": "ES默认分析器，基于Unicode文本分段+小写转换，适用于大多数语言"
            },
            {
              "id": "es分析器与分词-26-0-3-d7",
              "tag": "自定义分析器",
              "desc": "通过组合CharFilter+Tokenizer+TokenFilter实现特定业务分词需求"
            }
          ]
        }
      ]
    },
    {
      "id": "26-2-es查询与聚合-26-1",
      "title": "26.2 ES查询与聚合",
      "points": [
        {
          "id": "es查询dsl-26-1-0",
          "tag": "ES查询DSL",
          "desc": "ES查询DSL基于JSON描述查询条件。全文查询：match分词匹配最常用、multi_match多字段匹配、match_phrase短语匹配要求词项顺序位置。精确查询：term精确匹配keyword字段用、terms多值匹配、range范围查询gt/gte/lt/lte。复合查询：bool组合must/should/must_not/filter子查询filter不计算评分性能更好。特殊查询：wildcard通配符慎用、fuzzy模糊匹配允许编辑距离。优先使用filter减少评分计算避免wildcard前缀*性能灾难。",
          "details": [
            {
              "id": "es查询dsl-26-1-0-d0",
              "tag": "match查询",
              "desc": "最常用全文查询，对搜索文本分词后与索引词项匹配并计算相关度评分"
            },
            {
              "id": "es查询dsl-26-1-0-d1",
              "tag": "term查询",
              "desc": "精确匹配单个值，不分词，适用于keyword字段和数值日期等非文本查询"
            },
            {
              "id": "es查询dsl-26-1-0-d2",
              "tag": "bool查询",
              "desc": "组合must/should/must_not/filter子查询，filter不计算评分性能更好"
            },
            {
              "id": "es查询dsl-26-1-0-d3",
              "tag": "filter优化",
              "desc": "filter子句不计算评分可利用缓存，优先使用filter替代must提升性能"
            },
            {
              "id": "es查询dsl-26-1-0-d4",
              "tag": "match_phrase",
              "desc": "短语匹配要求词项顺序和位置连续，比match更精确但性能稍低"
            },
            {
              "id": "es查询dsl-26-1-0-d5",
              "tag": "multi_match",
              "desc": "多字段全文匹配查询，支持best_fields/most_fields/cross_fields策略"
            },
            {
              "id": "es查询dsl-26-1-0-d6",
              "tag": "range查询",
              "desc": "范围查询支持gt/gte/lt/lte操作符，适用于数值和日期字段"
            },
            {
              "id": "es查询dsl-26-1-0-d7",
              "tag": "DSL语法",
              "desc": "基于JSON描述查询条件，支持全文/精确/复合/特殊等多种查询类型"
            }
          ]
        },
        {
          "id": "es聚合分析-26-1-1",
          "tag": "ES聚合分析",
          "desc": "ES聚合三种类型：Bucket Aggregation桶聚合按规则分组（terms按字段值/date_histogram按时间/range按数值范围）、Metrics Aggregation指标聚合计算统计值（avg/sum/min/max/cardinality）、Pipeline Aggregation管道聚合基于其他聚合二次计算（moving_avg/cumulative_sum）。聚合可嵌套形成多层分析。cardinality用HyperLogLog++约2%误差。性能优化：设size限制返回桶数、用doc_values而非fielddata、避免高基数字段terms聚合。",
          "details": [
            {
              "id": "es聚合分析-26-1-1-d0",
              "tag": "聚合分析",
              "desc": "三种类型：Bucket分组/Metrics统计/Pipeline二次计算，可嵌套多层"
            },
            {
              "id": "es聚合分析-26-1-1-d1",
              "tag": "Bucket聚合",
              "desc": "按规则分组如terms按字段值/date_histogram按时间/range按数值范围"
            },
            {
              "id": "es聚合分析-26-1-1-d2",
              "tag": "terms聚合",
              "desc": "按字段值分组统计文档数，避免高基数字段聚合性能差"
            },
            {
              "id": "es聚合分析-26-1-1-d3",
              "tag": "date_histogram",
              "desc": "按时间间隔分组如按天/月/年，时序数据分析核心聚合"
            },
            {
              "id": "es聚合分析-26-1-1-d4",
              "tag": "Metrics聚合",
              "desc": "计算统计值如avg/sum/min/max/cardinality，cardinality用HyperLogLog++"
            },
            {
              "id": "es聚合分析-26-1-1-d5",
              "tag": "Pipeline聚合",
              "desc": "基于其他聚合结果二次计算如moving_avg/cumulative_sum"
            },
            {
              "id": "es聚合分析-26-1-1-d6",
              "tag": "cardinality",
              "desc": "近似去重计数，基于HyperLogLog++算法约2%误差"
            },
            {
              "id": "es聚合分析-26-1-1-d7",
              "tag": "doc_values",
              "desc": "列式存储结构支持排序和聚合，比fielddata更高效且不占JVM堆内存"
            }
          ]
        },
        {
          "id": "es滚动查询与深度分页-26-1-2",
          "tag": "ES滚动查询与深度分页",
          "desc": "Scroll API用于大批量数据导出创建搜索上下文保持快照不变每次返回一批数据+scroll_id继续获取适合非实时批量处理。search_after用于实时深度分页基于上一页最后数据排序值获取下一页避免from+size深分页性能问题（默认index.max_result_window限制10000）。nested查询用于查询nested类型字段内对象保持数组内对象独立性。scroll+slice可并行分片导出加速。",
          "details": [
            {
              "id": "es滚动查询与深度分页-26-1-2-d0",
              "tag": "nested查询",
              "desc": "查询nested类型字段内对象，保持数组内对象独立性可独立过滤"
            },
            {
              "id": "es滚动查询与深度分页-26-1-2-d1",
              "tag": "Scroll API",
              "desc": "创建搜索上下文保持快照不变，每次返回一批数据+scroll_id继续获取"
            },
            {
              "id": "es滚动查询与深度分页-26-1-2-d2",
              "tag": "search_after",
              "desc": "实时深度分页基于上一页最后排序值获取下一页，避免from+size性能问题"
            },
            {
              "id": "es滚动查询与深度分页-26-1-2-d3",
              "tag": "深度分页",
              "desc": "from+size超过10000性能灾难，默认限制max_result_window为10000"
            },
            {
              "id": "es滚动查询与深度分页-26-1-2-d4",
              "tag": "join类型",
              "desc": "ES中的父子文档关系类型，同一分片内通过路由保证父子文档在一起"
            },
            {
              "id": "es滚动查询与深度分页-26-1-2-d5",
              "tag": "快照导出",
              "desc": "Scroll创建搜索上下文快照，适合非实时大批量数据导出场景"
            },
            {
              "id": "es滚动查询与深度分页-26-1-2-d6",
              "tag": "slice并行",
              "desc": "scroll+slice可并行分片导出加速，每个slice独立获取数据"
            },
            {
              "id": "es滚动查询与深度分页-26-1-2-d7",
              "tag": "批量导出",
              "desc": "Scroll API适合大批量数据导出，配合slice可并行加速处理"
            }
          ]
        }
      ]
    },
    {
      "id": "26-3-es集群与数据同步-26-2",
      "title": "26.3 ES集群与数据同步",
      "points": [
        {
          "id": "es集群架构与脑裂防护-26-2-0",
          "tag": "ES集群架构与脑裂防护",
          "desc": "ES集群节点类型：Master Node主节点负责集群管理至少3个防脑裂、Data Node数据节点存储索引执行搜索IO和CPU密集、Coordinating Node协调节点只路由汇总结果不做搜索、Ingest Node预处理节点索引前Pipeline处理。脑裂防护：minimum_master_nodes设为master数/2+1确保只有多数master同意才能选举新主防止网络分区两个主节点。分片分配感知让分片优先分配到不同机架/机房故障时优先另一机架分配副本。",
          "details": [
            {
              "id": "es集群架构与脑裂防护-26-2-0-d0",
              "tag": "Master节点",
              "desc": "负责集群管理如索引创建分片分配至少3个防止脑裂"
            },
            {
              "id": "es集群架构与脑裂防护-26-2-0-d1",
              "tag": "Data节点",
              "desc": "存储索引数据执行搜索，IO和CPU密集，专设节点分离计算与存储"
            },
            {
              "id": "es集群架构与脑裂防护-26-2-0-d2",
              "tag": "协调节点",
              "desc": "只路由汇总结果不做搜索，减轻Data节点负担适合大集群"
            },
            {
              "id": "es集群架构与脑裂防护-26-2-0-d3",
              "tag": "脑裂防护",
              "desc": "minimum_master_nodes设为master数/2+1确保只有多数master同意才能选举"
            },
            {
              "id": "es集群架构与脑裂防护-26-2-0-d4",
              "tag": "分片",
              "desc": "优先分配到不同机架/机房，故障时优先另一机架分配副本保证冗余"
            },
            {
              "id": "es集群架构与脑裂防护-26-2-0-d5",
              "tag": "minimum_master_nodes",
              "desc": "设为master候选节点数/2+1，确保网络分区时只有多数派能选举新主"
            },
            {
              "id": "es集群架构与脑裂防护-26-2-0-d6",
              "tag": "机架感知",
              "desc": "分片优先分配到不同机架/机房，故障时优先另一机架分配副本"
            },
            {
              "id": "es集群架构与脑裂防护-26-2-0-d7",
              "tag": "集群",
              "desc": "多节点协作管理索引和搜索，Master负责元数据Data负责存储和计算"
            }
          ]
        },
        {
          "id": "es写入调优与ilm-26-2-1",
          "tag": "ES写入调优与ILM",
          "desc": "ES写入调优：1.Bulk批量写入500-1000条减少请求开销2.refresh_interval默认1秒改为30秒写入完成恢复3.写入时先设number_of_replicas=0减少副本同步4.translog异步刷新5.使用自动生成ID避免检查存在开销6.合理分片数单分片不超50GB。索引模板定义默认设置。数据流适合时序数据按时间滚动创建backing index。ILM自动化生命周期Hot→Warm→Cold→Delete配合数据流实现日志自动管理。",
          "details": [
            {
              "id": "es写入调优与ilm-26-2-1-d0",
              "tag": "Bulk写入",
              "desc": "批量写入500-1000条减少请求开销，是ES写入调优的首选手段"
            },
            {
              "id": "es写入调优与ilm-26-2-1-d1",
              "tag": "refresh_interval",
              "desc": "控制索引刷新频率默认1秒，写入密集期可改为30秒减少段生成开销"
            },
            {
              "id": "es写入调优与ilm-26-2-1-d2",
              "tag": "副本延迟",
              "desc": "写入时先设number_of_replicas=0减少副本同步，写入完成后再恢复副本"
            },
            {
              "id": "es写入调优与ilm-26-2-1-d3",
              "tag": "索引模板",
              "desc": "定义新索引的默认设置映射和别名，自动应用于匹配模式的新索引"
            },
            {
              "id": "es写入调优与ilm-26-2-1-d4",
              "tag": "ILM策略",
              "desc": "自动化生命周期Hot→Warm→Cold→Delete，配合数据流实现日志自动管理"
            },
            {
              "id": "es写入调优与ilm-26-2-1-d5",
              "tag": "数据流",
              "desc": "适合时序数据按时间滚动创建backing index，与ILM配合自动管理"
            },
            {
              "id": "es写入调优与ilm-26-2-1-d6",
              "tag": "段合并",
              "desc": "合并小段为大段清理删除标记，大段搜索更高效但合并消耗IO资源"
            },
            {
              "id": "es写入调优与ilm-26-2-1-d7",
              "tag": "translog",
              "desc": "事务日志保证写入持久性，异步刷新减少磁盘IO开销"
            }
          ]
        },
        {
          "id": "es与mysql数据同步方案-26-2-2",
          "tag": "ES与MySQL数据同步方案",
          "desc": "同步方案对比：同步双写（简单耦合强不推荐）、异步MQ双写（解耦需保证MQ可靠性和幂等）、Canal监听binlog（零侵入推荐Canal伪装MySQL slave解析binlog→MQ→消费者写ES）、Logstash JDBC（定时SQL适合非实时批量）、全量+增量组合（首次全量dump后续Canal增量）。Canal→ES需注意：消费者幂等处理、MySQL表结构变更时ES映射需同步、大数据量建议Bulk+降低refresh_interval、定时数据校验对比关键字段。",
          "details": [
            {
              "id": "es与mysql数据同步方案-26-2-2-d0",
              "tag": "Canal",
              "desc": "伪装MySQL slave解析binlog零侵入同步到ES，推荐方案需保证幂等"
            },
            {
              "id": "es与mysql数据同步方案-26-2-2-d1",
              "tag": "binlog监听",
              "desc": "Canal解析MySQL binlog获取数据变更事件，通过MQ异步写入ES"
            },
            {
              "id": "es与mysql数据同步方案-26-2-2-d2",
              "tag": "MQ双写",
              "desc": "异步消息队列解耦双写，需保证MQ可靠性和消费者幂等处理"
            },
            {
              "id": "es与mysql数据同步方案-26-2-2-d3",
              "tag": "Logstash",
              "desc": "JDBC输入插件定时SQL查询适合非实时批量同步，配置简单但延迟高"
            },
            {
              "id": "es与mysql数据同步方案-26-2-2-d4",
              "tag": "全量增量",
              "desc": "首次全量dump后续Canal增量，组合方案兼顾完整性和实时性"
            },
            {
              "id": "es与mysql数据同步方案-26-2-2-d5",
              "tag": "数据一致性",
              "desc": "需定时校验对比MySQL与ES关键字段，处理消费者幂等和映射同步"
            },
            {
              "id": "es与mysql数据同步方案-26-2-2-d6",
              "tag": "零侵入",
              "desc": "Canal监听binlog不需修改业务代码，对MySQL应用完全零侵入"
            },
            {
              "id": "es与mysql数据同步方案-26-2-2-d7",
              "tag": "Bulk写入ES",
              "desc": "大数据量同步建议Bulk批量写入+降低refresh_interval提升效率"
            }
          ]
        }
      ]
    }
  ]
};

// mongodb.js — 二十七、MongoDB 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['mongodb'] = {
  "id": "mongodb",
  "title": "十、MongoDB 文档数据库",
  "tag": "MongoDB",
  "order": 10,
  "icon": "🔍",
  "cssIndex": 9,
  "subs": [
    {
      "id": "27-1-mongodb核心概念-27-0",
      "title": "27.1 MongoDB核心概念",
      "points": [
        {
          "id": "mongodb文档模型与bson-27-0-0",
          "tag": "MongoDB文档模型与BSON",
          "desc": "MongoDB是文档型数据库数据以BSON（Binary JSON）格式存储支持嵌套文档和数组适合半结构化和非结构化数据。BSON在JSON基础上增加日期/二进制/ObjectId(12字节含时间戳+机器+进程+计数器)/整数/正则等类型。文档最大16MB嵌套层级不超过100。集合无需预定义Schema支持动态添加字段。固定集合（Capped Collection）固定大小按插入顺序存储适合日志场景超过大小自动覆盖最老文档。",
          "details": [
            {
              "id": "mongodb文档模型与bson-27-0-0-d0",
              "tag": "BSON格式",
              "desc": "Binary JSON扩展类型支持日期/二进制/ObjectId/整数/正则，比JSON类型更丰富"
            },
            {
              "id": "mongodb文档模型与bson-27-0-0-d1",
              "tag": "文档模型",
              "desc": "数据以JSON风格文档存储，支持嵌套和数组，适合半结构化和非结构化数据"
            },
            {
              "id": "mongodb文档模型与bson-27-0-0-d2",
              "tag": "嵌套文档",
              "desc": "文档内可嵌套子文档和数组，天然支持层次结构无需多表JOIN"
            },
            {
              "id": "mongodb文档模型与bson-27-0-0-d3",
              "tag": "ObjectId",
              "desc": "12字节唯一标识含时间戳+机器+进程+计数器，保证分布式唯一性"
            },
            {
              "id": "mongodb文档模型与bson-27-0-0-d4",
              "tag": "动态Schema",
              "desc": "集合无需预定义结构，支持动态添加字段，适合模式频繁变化场景"
            },
            {
              "id": "mongodb文档模型与bson-27-0-0-d5",
              "tag": "固定集合",
              "desc": "Capped Collection固定大小按插入顺序存储，超限自动覆盖最老文档适合日志"
            },
            {
              "id": "mongodb文档模型与bson-27-0-0-d6",
              "tag": "半结构化数据",
              "desc": "字段不固定模式频繁变化如用户画像IoT数据，MongoDB天然适配"
            },
            {
              "id": "mongodb文档模型与bson-27-0-0-d7",
              "tag": "16MB限制",
              "desc": "单文档最大16MB嵌套层级不超过100，大文件应存GridFS而非单个文档"
            }
          ]
        },
        {
          "id": "mongodb副本集与分片集群-27-0-1",
          "tag": "MongoDB副本集与分片集群",
          "desc": "副本集由Primary（主节点接收写）、Secondary（从节点复制数据可提供读）和Arbiter（仲裁不存数据只参与选举）组成。选举机制Raft协议需要多数节点同意防脑裂。读偏好：primary/primaryPreferred/secondary/secondaryPreferred/nearest。写关注：w:1主确认/w:majority多数确认最安全/w:all所有确认。分片集群：mongos路由节点→Config Server元数据→Shard数据分片（每个分片是副本集）。分片键：范围分片适合范围查询但可能不均匀、哈希分片均匀分布但范围查询效率差。",
          "details": [
            {
              "id": "mongodb副本集与分片集群-27-0-1-d0",
              "tag": "副本集",
              "desc": "Primary接收写+Secondary复制读+Arbiter仲裁选举，Raft协议防脑裂"
            },
            {
              "id": "mongodb副本集与分片集群-27-0-1-d1",
              "tag": "Primary选举",
              "desc": "基于Raft协议需多数节点同意，Primary故障自动选举新主防脑裂"
            },
            {
              "id": "mongodb副本集与分片集群-27-0-1-d2",
              "tag": "Raft协议",
              "desc": "选举需多数节点同意防脑裂，Arbiter不存数据只参与投票节省资源"
            },
            {
              "id": "mongodb副本集与分片集群-27-0-1-d3",
              "tag": "Read Preference",
              "desc": "读偏好控制路由：primary/primaryPreferred/secondary/secondaryPreferred/nearest"
            },
            {
              "id": "mongodb副本集与分片集群-27-0-1-d4",
              "tag": "Write Concern",
              "desc": "写关注级别：w:1主确认/w:majority多数确认最安全/w:all全部确认"
            },
            {
              "id": "mongodb副本集与分片集群-27-0-1-d5",
              "tag": "分片集群",
              "desc": "mongos路由→Config Server元数据→Shard数据分片，每个分片是副本集"
            },
            {
              "id": "mongodb副本集与分片集群-27-0-1-d6",
              "tag": "mongos",
              "desc": "路由查询到正确分片，聚合操作需在mongos协调多分片结果"
            },
            {
              "id": "mongodb副本集与分片集群-27-0-1-d7",
              "tag": "Shard Key",
              "desc": "分片键决定数据分布，范围分片适合范围查询哈希分片均匀分布"
            }
          ]
        }
      ]
    },
    {
      "id": "27-2-mongodb索引与聚合-27-1",
      "title": "27.2 MongoDB索引与聚合",
      "points": [
        {
          "id": "mongodb索引类型与esr原则-27-1-0",
          "tag": "MongoDB索引类型与ESR原则",
          "desc": "索引类型：单字段索引、复合索引（遵循最左前缀）、多键索引（自动为数组每个元素建索引）、地理空间索引（2d/2dsphere）、全文索引（text）、哈希索引、唯一索引。复合索引ESR原则（Equality→Sort→Range）：等值条件列在前排序列中间范围列在后。部分索引（partialFilterExpression）只对满足条件文档建索引减少索引大小。TTL索引自动删除过期文档适合日志和会话。explain()查看执行计划验证索引使用情况。",
          "details": [
            {
              "id": "mongodb索引类型与esr原则-27-1-0-d0",
              "tag": "复合索引",
              "desc": "多字段组合索引遵循最左前缀和ESR原则， Equality→Sort→Range顺序"
            },
            {
              "id": "mongodb索引类型与esr原则-27-1-0-d1",
              "tag": "ESR原则",
              "desc": "复合索引字段顺序：等值Equality在前→排序Sort居中→范围Range在后"
            },
            {
              "id": "mongodb索引类型与esr原则-27-1-0-d2",
              "tag": "多键索引",
              "desc": "自动为数组每个元素建索引，查询数组内任意匹配值都能命中"
            },
            {
              "id": "mongodb索引类型与esr原则-27-1-0-d3",
              "tag": "TTL索引",
              "desc": "自动删除过期文档，适合日志和会话数据管理设定过期秒数"
            },
            {
              "id": "mongodb索引类型与esr原则-27-1-0-d4",
              "tag": "全文索引",
              "desc": "text类型索引支持全文搜索，权重控制搜索优先级，中文需指定语言"
            },
            {
              "id": "mongodb索引类型与esr原则-27-1-0-d5",
              "tag": "部分索引",
              "desc": "partialFilterExpression只对满足条件文档建索引，减少索引大小和维护开销"
            },
            {
              "id": "mongodb索引类型与esr原则-27-1-0-d6",
              "tag": "explain()",
              "desc": "查看查询执行计划验证索引命中情况，分析winningPlan和rejectedPlans"
            },
            {
              "id": "mongodb索引类型与esr原则-27-1-0-d7",
              "tag": "最左前缀",
              "desc": "复合索引必须从最左字段开始匹配，跳过前列后续列无法利用索引"
            }
          ]
        },
        {
          "id": "mongodb聚合管道-27-1-1",
          "tag": "MongoDB聚合管道",
          "desc": "聚合管道通过多个Stage串联对文档转换和统计。常用阶段：match过滤相当于WHERE、group分组统计相当于GROUP BY+聚合函数、sort排序、limit/skip分页、project字段投影相当于SELECT、lookup左连接其他集合相当于LEFT JOIN、unwind展开数组每个元素变独立文档、addFields添加计算字段、facet多管道并行输出多个聚合结果、bucket/bucketAuto分桶统计。聚合优化：match尽早放置减少数据量、project尽早去除不需要字段、lookup避免大集合连接（超100MB需allowDiskUse）。MapReduce是旧版聚合方式已不推荐性能差使用聚合管道替代。",
          "details": [
            {
              "id": "mongodb聚合管道-27-1-1-d0",
              "tag": "聚合管道",
              "desc": "多个Stage串联对文档转换和统计，是替代MapReduce的现代方案"
            },
            {
              "id": "mongodb聚合管道-27-1-1-d1",
              "tag": "match",
              "desc": "聚合管道过滤阶段相当于WHERE，应尽早放置减少后续数据量"
            },
            {
              "id": "mongodb聚合管道-27-1-1-d2",
              "tag": "group",
              "desc": "聚合管道分组统计相当于GROUP BY+聚合函数如$sum/$avg/$max"
            },
            {
              "id": "mongodb聚合管道-27-1-1-d3",
              "tag": "lookup",
              "desc": "左连接其他集合相当于LEFT JOIN，避免大集合连接超100MB需allowDiskUse"
            },
            {
              "id": "mongodb聚合管道-27-1-1-d4",
              "tag": "unwind",
              "desc": "展开数组每个元素变为独立文档，便于对数组内元素进行后续聚合"
            },
            {
              "id": "mongodb聚合管道-27-1-1-d5",
              "tag": "project",
              "desc": "字段投影相当于SELECT，尽早去除不需要字段减少数据传输量"
            },
            {
              "id": "mongodb聚合管道-27-1-1-d6",
              "tag": "facet",
              "desc": "多管道并行在同一输入上执行多个聚合返回多个结果集"
            },
            {
              "id": "mongodb聚合管道-27-1-1-d7",
              "tag": "MapReduce替代",
              "desc": "MapReduce已不推荐性能差，聚合管道是现代替代方案执行效率更高"
            }
          ]
        }
      ]
    },
    {
      "id": "27-3-mongodb与关系型数据库对比-27-2",
      "title": "27.3 MongoDB与关系型数据库对比",
      "points": [
        {
          "id": "mongodb适用场景与选型-27-2-0",
          "tag": "MongoDB适用场景与选型",
          "desc": "MongoDB适用：半结构化数据（字段不固定模式频繁变化如用户画像IoT数据）、高并发读写（单文档操作无跨表事务约束）、嵌套数据存储（JSON天然支持无需多表JOIN）、实时分析（聚合管道强大）、内容管理（灵活Schema适应多类型）、地理位置应用（2dsphere索引）。MongoDB局限：多文档事务4.0前不支持（4.0+支持但开销大不建议跨分片）、JOIN能力弱（lookup性能有限）、数据一致性依赖应用（需应用做校验）、磁盘占用大（BSON比JSON大）、内存消耗高。选型：灵活Schema嵌套数据→MongoDB；强事务复杂JOIN→MySQL；混合→MySQL主+MongoDB辅助。",
          "details": [
            {
              "id": "mongodb适用场景与选型-27-2-0-d0",
              "tag": "适用场景",
              "desc": "灵活Schema+嵌套数据+高并发读写+实时分析+地理位置应用"
            },
            {
              "id": "mongodb适用场景与选型-27-2-0-d1",
              "tag": "半结构化数据",
              "desc": "字段不固定如用户画像IoT数据，MongoDB动态Schema天然适配"
            },
            {
              "id": "mongodb适用场景与选型-27-2-0-d2",
              "tag": "嵌套",
              "desc": "JSON天然支持嵌套存储无需多表JOIN，减少关联查询开销"
            },
            {
              "id": "mongodb适用场景与选型-27-2-0-d3",
              "tag": "事务局限",
              "desc": "4.0前不支持多文档事务，4.0+支持但跨分片开销大不建议"
            },
            {
              "id": "mongodb适用场景与选型-27-2-0-d4",
              "tag": "JOIN",
              "desc": "lookup性能有限不适合复杂关联，嵌套设计可减少JOIN需求"
            },
            {
              "id": "mongodb适用场景与选型-27-2-0-d5",
              "tag": "BSON空间",
              "desc": "BSON比JSON多类型元数据磁盘占用更大，需关注存储成本"
            },
            {
              "id": "mongodb适用场景与选型-27-2-0-d6",
              "tag": "数据校验",
              "desc": "MongoDB弱一致性需应用层做数据校验，可使用validation规则约束"
            },
            {
              "id": "mongodb适用场景与选型-27-2-0-d7",
              "tag": "选型对比",
              "desc": "灵活Schema→MongoDB；强事务→MySQL；混合→MySQL主+MongoDB辅助"
            }
          ]
        },
        {
          "id": "mongodb事务与一致性-27-2-1",
          "tag": "MongoDB事务与一致性",
          "desc": "MongoDB 4.0引入多文档事务（仅副本集）4.2扩展到分片集群。事务限制：单事务默认60秒、分片事务需mongos协调两阶段提交开销大。CAP权衡：MongoDB默认CP系统（Primary不可用时拒绝写保证一致性）但Read Preference可调整AP倾向。写关注+读关注组合实现不同一致性：w:majority+r:local强一致、w:1+r:secondaryAllowed最终一致读可能旧数据。最终一致性通过oplog（操作日志类似binlog）实现Secondary从Primary异步拉取oplog存在复制延迟。",
          "details": [
            {
              "id": "mongodb事务与一致性-27-2-1-d0",
              "tag": "多文档事务",
              "desc": "MongoDB 4.0引入仅副本集，4.2扩展到分片集群，单事务默认60秒"
            },
            {
              "id": "mongodb事务与一致性-27-2-1-d1",
              "tag": "startTransaction",
              "desc": "开启多文档事务API，需指定readConcern/writeConcern保证一致性"
            },
            {
              "id": "mongodb事务与一致性-27-2-1-d2",
              "tag": "分片事务",
              "desc": "4.2支持但需mongos协调两阶段提交开销大，尽量避免跨分片事务"
            },
            {
              "id": "mongodb事务与一致性-27-2-1-d3",
              "tag": "CAP权衡",
              "desc": "MongoDB默认CP系统，Primary不可用时拒绝写，Read Preference可调AP倾向"
            },
            {
              "id": "mongodb事务与一致性-27-2-1-d4",
              "tag": "写关注",
              "desc": "控制写确认级别：w:majority多数节点确认最安全，w:1仅主确认"
            },
            {
              "id": "mongodb事务与一致性-27-2-1-d5",
              "tag": "读关注",
              "desc": "控制读一致性：local读最新/majority读多数确认/snapshot事务隔离读"
            },
            {
              "id": "mongodb事务与一致性-27-2-1-d6",
              "tag": "oplog",
              "desc": "操作日志类似binlog，Secondary从Primary异步拉取oplog存在复制延迟"
            },
            {
              "id": "mongodb事务与一致性-27-2-1-d7",
              "tag": "一致性级别",
              "desc": "w:majority+r:local强一致，w:1+r:secondaryAllowed最终一致读可能旧数据"
            }
          ]
        }
      ]
    }
  ]
};

// maven.js — 二十九、Maven 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['maven'] = {
  "id": "maven",
  "title": "十九、Maven 项目构建",
  "tag": "Maven",
  "order": 19,
  "icon": "🐘",
  "cssIndex": 18,
  "subs": [
    {
      "id": "29-1-maven核心-29-0",
      "title": "29.1 Maven核心",
      "points": [
        {
          "id": "mavenpom与生命周期-29-0-0",
          "tag": "Maven POM与生命周期",
          "desc": "Maven通过POM管理项目构建定义坐标（groupId/artifactId/version）依赖插件和构建配置。生命周期三套：clean（清理构建产物）、default（validate→compile→test→package→install→deploy完整流程）、site（生成文档站点）。每个Phase绑定零或多个插件Goal如compile绑定maven-compiler-plugin。超级POM定义默认配置如默认目录结构src/main/java。",
          "details": [
            {
              "id": "mavenpom与生命周期-29-0-0-d0",
              "tag": "POM",
              "desc": "Project Object Model定义坐标依赖插件和构建配置，是Maven项目核心"
            },
            {
              "id": "mavenpom与生命周期-29-0-0-d1",
              "tag": "生命周期",
              "desc": "三套生命周期：clean清理/default构建/site文档，Phase有序执行不可跳过"
            },
            {
              "id": "mavenpom与生命周期-29-0-0-d2",
              "tag": "clean",
              "desc": "clean生命周期清理构建产物，pre-clean→clean→post-clean三个Phase"
            },
            {
              "id": "mavenpom与生命周期-29-0-0-d3",
              "tag": "default",
              "desc": "default核心生命周期validate→compile→test→package→install→deploy"
            },
            {
              "id": "mavenpom与生命周期-29-0-0-d4",
              "tag": "Phase",
              "desc": "生命周期中的构建阶段，执行某Phase会顺序执行之前所有Phase"
            },
            {
              "id": "mavenpom与生命周期-29-0-0-d5",
              "tag": "Goal",
              "desc": "插件的具体执行单元，一个Phase可绑定零或多个Goal如compile绑定compiler"
            },
            {
              "id": "mavenpom与生命周期-29-0-0-d6",
              "tag": "插件绑定",
              "desc": "每个Phase绑定零或多个插件Goal，如compile绑定maven-compiler-plugin"
            },
            {
              "id": "mavenpom与生命周期-29-0-0-d7",
              "tag": "超级POM",
              "desc": "定义默认配置如默认目录结构src/main/java，所有POM隐式继承"
            }
          ]
        },
        {
          "id": "maven依赖管理-29-0-1",
          "tag": "Maven依赖管理",
          "desc": "坐标定位唯一依赖。scope范围：compile默认全阶段/test仅测试/provided编译运行由环境提供/runtime运行时如JDBC/system本地jar。依赖传递（A→B→C自动传递但test和provided不传递）。冲突解决最近优先（路径短版本优先）最先声明（路径相同先声明优先）。optional可选依赖不向下游传递。exclusions排除不需要的传递依赖。dependencyManagement在父POM声明版本号子模块无需指定version。BOM（Bill of Materials）如Spring Boot统一管理一组依赖版本。",
          "details": [
            {
              "id": "maven依赖管理-29-0-1-d0",
              "tag": "依赖",
              "desc": "坐标定位唯一依赖，通过groupId/artifactId/version精确定位构件"
            },
            {
              "id": "maven依赖管理-29-0-1-d1",
              "tag": "scope范围",
              "desc": "compile默认全阶段/test仅测试/provided环境提供/runtime运行时/system本地"
            },
            {
              "id": "maven依赖管理-29-0-1-d2",
              "tag": "依赖传递",
              "desc": "A→B→C自动传递但test和provided不传递，可能引入不需要的依赖"
            },
            {
              "id": "maven依赖管理-29-0-1-d3",
              "tag": "冲突解决",
              "desc": "最近优先路径短版本优先，最先声明路径相同先声明优先"
            },
            {
              "id": "maven依赖管理-29-0-1-d4",
              "tag": "最近优先",
              "desc": "依赖路径短的版本优先，路径相同则最先声明的优先"
            },
            {
              "id": "maven依赖管理-29-0-1-d5",
              "tag": "optional",
              "desc": "可选依赖不向下游传递，声明方使用但不会强制传递给依赖方"
            },
            {
              "id": "maven依赖管理-29-0-1-d6",
              "tag": "exclusions",
              "desc": "排除不需要的传递依赖，精确控制依赖树避免引入冲突版本"
            },
            {
              "id": "maven依赖管理-29-0-1-d7",
              "tag": "dependencyManagement",
              "desc": "父POM声明版本号子模块无需指定version，统一管理依赖版本"
            }
          ]
        },
        {
          "id": "maven仓库与坐标-29-0-2",
          "tag": "Maven仓库与坐标",
          "desc": "仓库分本地（~/.m2/repository）中央（Maven Central）私服（企业Nexus/Artifactory代理中央+发布内部构件）。查找顺序：本地→私服→中央。私服配置settings.xml mirror和profile。release仓库稳定版本不可覆盖snapshot仓库开发版本可覆盖。SNAPSHOT版本自动更新时间戳后缀Maven每天检查更新。发布时改为RELEASE去掉SNAPSHOT。",
          "details": [
            {
              "id": "maven仓库与坐标-29-0-2-d0",
              "tag": "本地仓库",
              "desc": "~/.m2/repository缓存下载的构件，构建时优先从本地查找"
            },
            {
              "id": "maven仓库与坐标-29-0-2-d1",
              "tag": "中央仓库",
              "desc": "Maven Central社区公共仓库，包含绝大多数开源构件"
            },
            {
              "id": "maven仓库与坐标-29-0-2-d2",
              "tag": "私服Nexus",
              "desc": "企业Nexus/Artifactory代理中央+发布内部构件，加速下载保证稳定"
            },
            {
              "id": "maven仓库与坐标-29-0-2-d3",
              "tag": "mirror",
              "desc": "settings.xml配置镜像替代中央仓库，私服加速下载控制访问"
            },
            {
              "id": "maven仓库与坐标-29-0-2-d4",
              "tag": "release仓库",
              "desc": "稳定版本发布后不可覆盖，保证构建可重复性和一致性"
            },
            {
              "id": "maven仓库与坐标-29-0-2-d5",
              "tag": "snapshot版本",
              "desc": "开发版本自动更新带时间戳后缀，Maven每天检查更新"
            },
            {
              "id": "maven仓库与坐标-29-0-2-d6",
              "tag": "坐标格式",
              "desc": "groupId组织/artifactId模块/version版本三者唯一定位一个构件"
            },
            {
              "id": "maven仓库与坐标-29-0-2-d7",
              "tag": "settings.xml",
              "desc": "Maven全局配置文件定义镜像仓库认证和Profile，优先级高于POM"
            }
          ]
        },
        {
          "id": "maven插件体系-29-0-3",
          "tag": "Maven插件体系",
          "desc": "核心插件：maven-compiler-plugin编译、maven-surefire-plugin运行单元测试、maven-jar-plugin打包jar、maven-war-plugin打包war、maven-source-plugin生成源码jar、maven-javadoc-plugin文档jar、maven-deploy-plugin发布到远程仓库。插件配置在build/plugins或build/pluginManagement中。Goal绑定到生命周期Phase。自定义插件通过Mojo继承AbstractMojo标注Mojo注解实现execute()方法。",
          "details": [
            {
              "id": "maven插件体系-29-0-3-d0",
              "tag": "maven-compiler",
              "desc": "编译插件配置source/target版本和编码参数，控制Java编译行为"
            },
            {
              "id": "maven插件体系-29-0-3-d1",
              "tag": "maven-surefire",
              "desc": "运行单元测试插件，支持JUnit/TestNG配置包含排除测试类"
            },
            {
              "id": "maven插件体系-29-0-3-d2",
              "tag": "maven-jar",
              "desc": "打包jar插件，可配置mainClass和manifest生成可执行jar"
            },
            {
              "id": "maven插件体系-29-0-3-d3",
              "tag": "pluginManagement",
              "desc": "父POM声明插件版本和配置子模块继承无需重复声明版本"
            },
            {
              "id": "maven插件体系-29-0-3-d4",
              "tag": "Goal绑定",
              "desc": "插件Goal绑定到生命周期Phase执行，也可独立调用如mvn dependency:tree"
            },
            {
              "id": "maven插件体系-29-0-3-d5",
              "tag": "Mojo开发",
              "desc": "继承AbstractMojo标注@Mojo注解实现execute()方法开发自定义插件"
            },
            {
              "id": "maven插件体系-29-0-3-d6",
              "tag": "生命周期绑定",
              "desc": "Goal绑定到Phase在对应阶段自动执行，未绑定则需手动调用"
            },
            {
              "id": "maven插件体系-29-0-3-d7",
              "tag": "自定义插件",
              "desc": "通过Mojo开发实现execute()方法，可添加自定义构建逻辑"
            }
          ]
        }
      ]
    },
    {
      "id": "29-2-maven进阶-29-1",
      "title": "29.2 Maven进阶",
      "points": [
        {
          "id": "maven依赖冲突排查-29-1-0",
          "tag": "Maven依赖冲突排查",
          "desc": "排查方法：mvn dependency:tree打印完整依赖树；mvn dependency:tree -Dverbose显示冲突详情（omitted for duplicate/conflict）；mvn dependency:analyze分析未使用和未声明依赖。IDEA Maven Helper可视化定位冲突。解决策略：1.exclusion排除传递依赖2.dependencyManagement锁定版本3.直接依赖覆盖路径最短优先。典型冲突：slf4j多个binding冲突（只能有一个binding排除其他）、guava版本冲突、Jackson版本不一致需统一。",
          "details": [
            {
              "id": "maven依赖冲突排查-29-1-0-d0",
              "tag": "dependency",
              "desc": "tree（dependency的详细说明：Maven依赖冲突排查中关于dependency的内容）"
            },
            {
              "id": "maven依赖冲突排查-29-1-0-d1",
              "tag": "冲突排查",
              "desc": "mvn dependency:tree打印依赖树，-Dverbose显示冲突详情定位版本冲突"
            },
            {
              "id": "maven依赖冲突排查-29-1-0-d2",
              "tag": "verbose树",
              "desc": "-Dverbose显示冲突详情如omitted for duplicate/conflict精准定位问题"
            },
            {
              "id": "maven依赖冲突排查-29-1-0-d3",
              "tag": "exclusion",
              "desc": "在依赖声明中排除传递依赖，精确移除冲突或不需要的版本"
            },
            {
              "id": "maven依赖冲突排查-29-1-0-d4",
              "tag": "dependencyManagement",
              "desc": "锁定版本号统一冲突解决策略，子模块无需指定version"
            },
            {
              "id": "maven依赖冲突排查-29-1-0-d5",
              "tag": "直接依赖覆盖",
              "desc": "直接声明依赖版本路径最短优先，覆盖传递依赖的冲突版本"
            },
            {
              "id": "maven依赖冲突排查-29-1-0-d6",
              "tag": "slf4j冲突",
              "desc": "多个binding冲突只能有一个，排除多余binding如log4j/jdk14"
            },
            {
              "id": "maven依赖冲突排查-29-1-0-d7",
              "tag": "guava冲突",
              "desc": "不同模块引入不同guava版本需统一，通常exclusion+强制指定版本"
            }
          ]
        },
        {
          "id": "maven多模块聚合-29-1-1",
          "tag": "Maven多模块聚合",
          "desc": "父POM（packaging=pom）定义modules列表和公共配置（dependencyManagement/pluginManagement/properties）。子模块POM parent引用父POM坐标继承配置只需定义自身特有依赖和插件。聚合构建在父目录执行mvn install按Reactor排序自动构建所有子模块。常见结构：api/service/dao/common/web。模块间依赖web→service→dao→common。聚合modules决定构建哪些模块继承parent决定配置来源两者通常结合。",
          "details": [
            {
              "id": "maven多模块聚合-29-1-1-d0",
              "tag": "多模块",
              "desc": "父POM定义modules和公共配置子模块继承，聚合构建管理大型项目"
            },
            {
              "id": "maven多模块聚合-29-1-1-d1",
              "tag": "父POM",
              "desc": "packaging=pom定义modules列表和公共dependencyManagement/pluginManagement"
            },
            {
              "id": "maven多模块聚合-29-1-1-d2",
              "tag": "modules",
              "desc": "父POM声明子模块列表决定聚合构建包含哪些模块"
            },
            {
              "id": "maven多模块聚合-29-1-1-d3",
              "tag": "聚合构建",
              "desc": "父目录执行mvn install按Reactor排序自动构建所有子模块"
            },
            {
              "id": "maven多模块聚合-29-1-1-d4",
              "tag": "Reactor排序",
              "desc": "根据模块间依赖关系自动确定构建顺序，依赖模块先构建"
            },
            {
              "id": "maven多模块聚合-29-1-1-d5",
              "tag": "dependencyManagement",
              "desc": "父POM声明版本号子模块继承无需指定version统一版本管理"
            },
            {
              "id": "maven多模块聚合-29-1-1-d6",
              "tag": "模块依赖",
              "desc": "web→service→dao→common层级依赖，单向依赖避免循环"
            },
            {
              "id": "maven多模块聚合-29-1-1-d7",
              "tag": "继承",
              "desc": "子模块parent引用父POM坐标继承配置，只需定义自身特有依赖"
            }
          ]
        },
        {
          "id": "maven打包与私服部署-29-1-2",
          "tag": "Maven打包与私服部署",
          "desc": "打包策略：jar默认、war Web项目、pom聚合不产出、maven-shade-plugin创建fat jar含所有依赖适合微服务、maven-assembly-plugin自定义打包支持zip/tar、spring-boot-maven-plugin Spring Boot可执行jar含内嵌Tomcat。私服部署：settings.xml配置server认证→POM配置distributionManagement（repository+snapshotRepository）→mvn deploy自动发布。Nexus管理：创建release/snapshot hosted仓库、proxy代理中央仓库、group组合对外统一入口。版本规范：开发SNAPSHOT频繁更新→发布正式版本不可覆盖→下个开发版本SNAPSHOT。",
          "details": [
            {
              "id": "maven打包与私服部署-29-1-2-d0",
              "tag": "shade打包",
              "desc": "maven-shade-plugin创建fat jar含所有依赖，适合微服务独立部署"
            },
            {
              "id": "maven打包与私服部署-29-1-2-d1",
              "tag": "assembly打包",
              "desc": "maven-assembly-plugin自定义打包支持zip/tar格式，灵活组装输出"
            },
            {
              "id": "maven打包与私服部署-29-1-2-d2",
              "tag": "Spring Boot jar",
              "desc": "spring-boot-maven-plugin生成可执行jar含内嵌Tomcat和依赖层"
            },
            {
              "id": "maven打包与私服部署-29-1-2-d3",
              "tag": "私服",
              "desc": "settings.xml配置server认证+POM配置distributionManagement+mvn deploy发布"
            },
            {
              "id": "maven打包与私服部署-29-1-2-d4",
              "tag": "Nexus仓库",
              "desc": "hosted内部发布/proxy代理中央/group组合入口，统一企业仓库管理"
            },
            {
              "id": "maven打包与私服部署-29-1-2-d5",
              "tag": "release版本",
              "desc": "正式版本不可覆盖保证可重复构建，发布时去掉SNAPSHOT标记"
            },
            {
              "id": "maven打包与私服部署-29-1-2-d6",
              "tag": "SNAPSHOT",
              "desc": "开发版本带时间戳自动更新频繁迭代，发布时改为正式版本"
            },
            {
              "id": "maven打包与私服部署-29-1-2-d7",
              "tag": "maven-release-plugin",
              "desc": "自动化版本发布流程：准备→执行→清理，自动修改版本号和创建tag"
            }
          ]
        },
        {
          "id": "mavenprofile与环境隔离-29-1-3",
          "tag": "Maven Profile与环境隔离",
          "desc": "Profile实现多环境构建（dev/test/prod不同配置）。Profile包含id/activation/properties/build配置/dependencies。激活方式：命令行-Pdev、settings.xml activeProfiles、POM activeByDefault、多profile可同时激活合并配置。多环境资源：src/main/resources下创建环境目录通过maven-resources-plugin在不同profile复制对应配置并替换变量占位符。Spring Boot项目通常用自身profile（application-dev.yml）但Maven profile可控制依赖差异和构建参数。",
          "details": [
            {
              "id": "mavenprofile与环境隔离-29-1-3-d0",
              "tag": "Profile",
              "desc": "实现多环境构建dev/test/prod不同配置，包含id/activation/properties"
            },
            {
              "id": "mavenprofile与环境隔离-29-1-3-d1",
              "tag": "多环境",
              "desc": "dev/test/prod不同配置通过Profile切换，构建时-P参数激活"
            },
            {
              "id": "mavenprofile与环境隔离-29-1-3-d2",
              "tag": "activation",
              "desc": "Profile激活条件如JDK版本/OS/文件存在/属性值，可activeByDefault"
            },
            {
              "id": "mavenprofile与环境隔离-29-1-3-d3",
              "tag": "-P参数",
              "desc": "命令行-Pdev激活指定Profile，可同时激活多个如-Pdev,local"
            },
            {
              "id": "mavenprofile与环境隔离-29-1-3-d4",
              "tag": "activeByDefault",
              "desc": "POM中Profile默认激活标志，命令行激活其他Profile时默认自动失效"
            },
            {
              "id": "mavenprofile与环境隔离-29-1-3-d5",
              "tag": "resources过滤",
              "desc": "maven-resources-plugin替换变量占位符${xxx}，按Profile复制对应配置"
            },
            {
              "id": "mavenprofile与环境隔离-29-1-3-d6",
              "tag": "环境隔离",
              "desc": "通过Profile+资源过滤实现不同环境配置自动切换构建产出"
            },
            {
              "id": "mavenprofile与环境隔离-29-1-3-d7",
              "tag": "Spring Boot配合",
              "desc": "Boot用自身profile但Maven profile可控制依赖差异和构建参数互补"
            }
          ]
        }
      ]
    }
  ]
};

// netty.js — 三十一、Netty 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['netty'] = {
  "id": "netty",
  "title": "七、Netty 网络框架",
  "tag": "Netty",
  "order": 7,
  "icon": "☁️",
  "cssIndex": 6,
  "subs": [
    {
      "id": "31-1-netty核心架构-31-0",
      "title": "31.1 Netty核心架构",
      "points": [
        {
          "id": "nettyreactor模型-31-0-0",
          "tag": "Netty Reactor模型",
          "desc": "Netty基于主从Reactor多线程模型：BossGroup（主Reactor默认1线程NioEventLoop）Accept连接建立将连接注册到WorkerGroup；WorkerGroup（从Reactor默认CPU*2线程）负责已建立连接IO读写和业务处理。NioEventLoop核心线程组件包含Executor+Selector+TaskQueue每个EventLoop绑定一个Selector管理多个ChannelIO事件同时执行TaskQueue非IO任务IO和非IO时间比例由ioRatio控制默认50%。Channel是网络连接抽象绑定一个EventLoop实现线程安全。ChannelPipeline是Channel事件处理链——入站事件（数据读取→解码→业务处理）经过InboundHandler出站事件（业务→编码→数据写入）经过OutboundHandler。",
          "details": [
            {
              "id": "nettyreactor模型-31-0-0-d0",
              "tag": "Reactor模型",
              "desc": "主从Reactor多线程：BossGroup Accept连接→WorkerGroup IO读写+业务"
            },
            {
              "id": "nettyreactor模型-31-0-0-d1",
              "tag": "BossGroup",
              "desc": "主Reactor默认1线程Accept连接建立后将连接注册到WorkerGroup"
            },
            {
              "id": "nettyreactor模型-31-0-0-d2",
              "tag": "WorkerGroup",
              "desc": "从Reactor默认CPU*2线程负责已建立连接IO读写和业务处理"
            },
            {
              "id": "nettyreactor模型-31-0-0-d3",
              "tag": "NioEventLoop",
              "desc": "核心线程组件含Executor+Selector+TaskQueue，IO和非IO时间由ioRatio控制"
            },
            {
              "id": "nettyreactor模型-31-0-0-d4",
              "tag": "Channel",
              "desc": "网络连接抽象绑定一个EventLoop实现线程安全，生命周期回调管理"
            },
            {
              "id": "nettyreactor模型-31-0-0-d5",
              "tag": "Pipeline",
              "desc": "Channel事件处理链入站经InboundHandler出站经OutboundHandler"
            },
            {
              "id": "nettyreactor模型-31-0-0-d6",
              "tag": "InboundHandler",
              "desc": "处理入站事件如数据读取→解码→业务处理，按注册顺序执行"
            },
            {
              "id": "nettyreactor模型-31-0-0-d7",
              "tag": "OutboundHandler",
              "desc": "处理出站事件如业务→编码→数据写入，按注册逆序执行"
            }
          ]
        },
        {
          "id": "nettybytebuf与内存管理-31-0-1",
          "tag": "Netty ByteBuf与内存管理",
          "desc": "ByteBuf替代JDK ByteBuffer核心优势：读写指针独立不需flip切换、动态扩容、池化缓冲区减少GC、复合缓冲区零拷贝合并。分类：HeapByteBuf堆内存JVM管理vs DirectByteBuf直接内存OS管理无GC开销适合IO减少内核拷贝；PooledByteBuf池化复用推荐vs Unpooled非池化。内存泄漏检测：ByteBuf引用计数refCnt管理release减1归零释放未release的DirectByteBuf造成泄漏。检测级别DISABLED/SIMPLE默认1%采样/ADVANCED/PARANOID100%采样开发调试用。PooledByteBufAllocator基于jemalloc算法Arena分区+Page分配+SubPage细分+ThreadLocal缓存减少锁竞争。",
          "details": [
            {
              "id": "nettybytebuf与内存管理-31-0-1-d0",
              "tag": "ByteBuf",
              "desc": "替代JDK ByteBuffer读写指针独立不需flip动态扩容池化减少GC"
            },
            {
              "id": "nettybytebuf与内存管理-31-0-1-d1",
              "tag": "读写指针独立",
              "desc": "ByteBuf读写分离不需ByteBuffer的flip切换，读写互不干扰更高效"
            },
            {
              "id": "nettybytebuf与内存管理-31-0-1-d2",
              "tag": "动态扩容",
              "desc": "ByteBuf写入超容量自动扩容默认翻倍，不像ByteBuffer需手动分配"
            },
            {
              "id": "nettybytebuf与内存管理-31-0-1-d3",
              "tag": "池化缓冲区",
              "desc": "PooledByteBuf池化复用减少GC压力，推荐PooledByteBufAllocator"
            },
            {
              "id": "nettybytebuf与内存管理-31-0-1-d4",
              "tag": "DirectByteBuf",
              "desc": "直接内存OS管理无GC开销适合IO减少一次内核拷贝但需手动release"
            },
            {
              "id": "nettybytebuf与内存管理-31-0-1-d5",
              "tag": "引用计数",
              "desc": "refCnt管理release减1归零释放，未release的DirectByteBuf造成内存泄漏"
            },
            {
              "id": "nettybytebuf与内存管理-31-0-1-d6",
              "tag": "内存泄漏",
              "desc": "未release的DirectByteBuf泄漏，检测级别SIMPLE/ADVANCED/PARANOID开发用"
            },
            {
              "id": "nettybytebuf与内存管理-31-0-1-d7",
              "tag": "jemalloc",
              "desc": "PooledByteBufAllocator基于jemalloc算法Arena+Page+SubPage+ThreadLocal缓存"
            }
          ]
        }
      ]
    },
    {
      "id": "31-2-netty进阶-31-1",
      "title": "31.2 Netty进阶",
      "points": [
        {
          "id": "netty粘包拆包与编解码-31-1-0",
          "tag": "Netty粘包拆包与编解码",
          "desc": "TCP流式协议不保证消息边界导致粘包（合并读取）或拆包（拆分读取）。Netty内置解码器：FixedLengthFrameDecoder固定长度帧、DelimiterBasedFrameDecoder分隔符帧、LengthFieldBasedFrameDecoder长度字段帧最通用消息头含长度+消息体、LineBasedFrameDecoder换行符帧。编解码器：StringEncoder/StringDecoder、MessageToMessageCodec自定义转换、ByteToMessageDecoder字节流→消息解码基类、MessageToByteEncoder消息→字节编码基类。Handler生命周期handlerAdded→channelRegistered→channelActive→channelRead→channelReadComplete→channelInactive→handlerRemoved。编解码器顺序：解码器必须在业务Handler前编码器必须在业务Handler后。",
          "details": [
            {
              "id": "netty粘包拆包与编解码-31-1-0-d0",
              "tag": "粘包拆包",
              "desc": "TCP流式协议不保证消息边界，需解码器按规则切分消息帧"
            },
            {
              "id": "netty粘包拆包与编解码-31-1-0-d1",
              "tag": "FixedLength",
              "desc": "FixedLengthFrameDecoder固定长度帧简单但不够灵活浪费带宽"
            },
            {
              "id": "netty粘包拆包与编解码-31-1-0-d2",
              "tag": "DelimiterBased",
              "desc": "DelimiterBasedFrameDecoder按分隔符切分帧适合文本协议如HTTP换行"
            },
            {
              "id": "netty粘包拆包与编解码-31-1-0-d3",
              "tag": "LengthFieldBased",
              "desc": "最通用解码器消息头含长度+消息体，支持长度字段偏移和调整"
            },
            {
              "id": "netty粘包拆包与编解码-31-1-0-d4",
              "tag": "编解码器",
              "desc": "ByteToMessageDecoder解码+MessageToByteEncoder编码，解码在前编码在后"
            },
            {
              "id": "netty粘包拆包与编解码-31-1-0-d5",
              "tag": "ByteToMessageDecoder",
              "desc": "字节流→消息解码基类，累积字节直到足够组成完整消息对象"
            },
            {
              "id": "netty粘包拆包与编解码-31-1-0-d6",
              "tag": "MessageToByteEncoder",
              "desc": "消息→字节编码基类，将业务对象序列化为ByteBuf输出"
            },
            {
              "id": "netty粘包拆包与编解码-31-1-0-d7",
              "tag": "ChannelHandler生命周期",
              "desc": "handlerAdded→channelRegistered→channelActive→channelRead→channelReadComplete→channelInactive→handlerRemoved"
            }
          ]
        },
        {
          "id": "netty心跳与websocket实现-31-1-1",
          "tag": "Netty心跳与WebSocket实现",
          "desc": "心跳机制检测连接存活防止半开连接。IdleStateHandler空闲检测——readerIdleTime/writerIdleTime/allIdleTime触发IdleStateEvent在userEventTriggered()处理发送心跳或关闭连接。典型配置服务端30秒读空闲客户端15秒写空闲主动发心跳。WebSocket实现Netty内置支持——HttpServerCodec处理HTTP请求和握手、HttpObjectAggregator聚合消息片段、WebSocketServerProtocolHandler处理握手升级和帧处理、TextWebSocketFrame/BinaryWebSocketFrame/PongWebSocketFrame/CloseWebSocketFrame帧类型。Pipeline配置HttpServerCodec→HttpObjectAggregator→WebSocketServerProtocolHandler(path='/ws')→自定义Handler处理业务帧。",
          "details": [
            {
              "id": "netty心跳与websocket实现-31-1-1-d0",
              "tag": "IdleStateHandler",
              "desc": "空闲检测触发IdleStateEvent，配置readerIdleTime/writerIdleTime/allIdleTime"
            },
            {
              "id": "netty心跳与websocket实现-31-1-1-d1",
              "tag": "心跳机制",
              "desc": "检测连接存活防止半开连接，服务端30秒读空闲客户端15秒写空闲发心跳"
            },
            {
              "id": "netty心跳与websocket实现-31-1-1-d2",
              "tag": "读空闲",
              "desc": "超过readerIdleTime未收到数据触发IdleStateEvent，发送心跳或关闭连接"
            },
            {
              "id": "netty心跳与websocket实现-31-1-1-d3",
              "tag": "userEventTriggered",
              "desc": "处理IdleStateEvent回调方法，在此判断空闲类型发送心跳或断开连接"
            },
            {
              "id": "netty心跳与websocket实现-31-1-1-d4",
              "tag": "WebSocket",
              "desc": "Netty内置支持HttpServerCodec→Aggregator→ProtocolHandler→自定义Handler"
            },
            {
              "id": "netty心跳与websocket实现-31-1-1-d5",
              "tag": "WebSocketFrame",
              "desc": "帧类型TextWebSocketFrame/Binary/Pong/Close对应不同WebSocket消息"
            },
            {
              "id": "netty心跳与websocket实现-31-1-1-d6",
              "tag": "HttpServerCodec",
              "desc": "处理HTTP请求和WebSocket握手升级的编解码器组合"
            },
            {
              "id": "netty心跳与websocket实现-31-1-1-d7",
              "tag": "握手升级",
              "desc": "WebSocketServerProtocolHandler处理HTTP→WS协议升级和帧处理"
            }
          ]
        },
        {
          "id": "netty零拷贝与性能优化-31-1-2",
          "tag": "Netty零拷贝与性能优化",
          "desc": "零拷贝减少数据在内核和用户空间拷贝次数。Netty零拷贝实现：CompositeByteBuf逻辑组合多个ByteBuf无需物理拷贝、Unpooled.wrappedBuffer包装byte数组零拷贝、ByteBuf.slice()切片共享底层数组零拷贝、FileRegion文件直接从磁盘通过Channel传输到网络使用transferTo零拷贝、配合Linux sendfile系统调用JDK NIO transferTo映射到sendfile。性能优化综合：PooledByteBufAllocator池化缓冲区减少GC、DirectByteBuf直接内存减少一次拷贝、合理EventLoop线程数CPU*2、调整ioRatio比例IO密集70-80、开启Epoll Linux用EpollEventLoop更高效NativeEpoll、WriteBufferWaterMark控制写缓冲水位高低水位避免OOM、关闭autoRead手动控制读取节奏防止读取过快处理跟不上。",
          "details": [
            {
              "id": "netty零拷贝与性能优化-31-1-2-d0",
              "tag": "零拷贝",
              "desc": "减少内核和用户空间拷贝次数CompositeByteBuf/wrappedBuffer/slice/FileRegion"
            },
            {
              "id": "netty零拷贝与性能优化-31-1-2-d1",
              "tag": "CompositeByteBuf",
              "desc": "逻辑组合多个ByteBuf无需物理拷贝合并，减少内存分配和数据复制"
            },
            {
              "id": "netty零拷贝与性能优化-31-1-2-d2",
              "tag": "FileRegion",
              "desc": "文件直接从磁盘通过Channel传输到网络使用transferTo零拷贝"
            },
            {
              "id": "netty零拷贝与性能优化-31-1-2-d3",
              "tag": "sendfile",
              "desc": "Linux系统调用数据从文件直接到网卡绕过用户空间，Netty FileRegion映射"
            },
            {
              "id": "netty零拷贝与性能优化-31-1-2-d4",
              "tag": "PooledByteBufAllocator",
              "desc": "池化缓冲区分配器基于jemalloc减少GC压力，推荐生产使用"
            },
            {
              "id": "netty零拷贝与性能优化-31-1-2-d5",
              "tag": "DirectByteBuf",
              "desc": "直接内存减少一次内核拷贝适合IO密集场景，但需手动release防泄漏"
            },
            {
              "id": "netty零拷贝与性能优化-31-1-2-d6",
              "tag": "Epoll优化",
              "desc": "Linux用EpollEventLoop比NIO更高效NativeEpoll减少系统调用开销"
            },
            {
              "id": "netty零拷贝与性能优化-31-1-2-d7",
              "tag": "WriteBufferWaterMark",
              "desc": "控制写缓冲高低水位避免OOM，超高水位禁写低于低水位恢复写入"
            }
          ]
        }
      ]
    },
    {
      "id": "31-2-netty组件深入-31-0",
      "title": "31.2 Netty核心组件深入",
      "points": [
        {
          "id": "channelpipeline-31-2-0",
          "tag": "ChannelPipeline 与 ChannelHandler",
          "desc": "ChannelPipeline是ChannelHandler链式容器入站从head到tail出站从tail到head;InboundHandler处理入站数据OutboundHandler处理出站数据;HandlerContext上下文触发下一个Handler;addLast/addFirst指定Handler顺序决定数据流向",
          "details": [
            {
              "id": "channelpipeline-31-2-0-d0",
              "tag": "Pipeline",
              "desc": "ChannelHandler链式容器入站head→tail传播出站tail→head传播每个Channel有唯一Pipeline"
            },
            {
              "id": "channelpipeline-31-2-0-d1",
              "tag": "InboundHandler",
              "desc": "channelRead读取数据channelActive连接建立fireXXX传播到下一个Handler"
            },
            {
              "id": "channelpipeline-31-2-0-d2",
              "tag": "OutboundHandler",
              "desc": "write写数据flush刷新close关闭连接出站方向tail→head反向传播"
            },
            {
              "id": "channelpipeline-31-2-0-d3",
              "tag": "HandlerContext",
              "desc": "ChannelHandlerContext持有Handler引用ctx.fireChannelRead(msg)传播事件"
            },
            {
              "id": "channelpipeline-31-2-0-d4",
              "tag": "添加顺序",
              "desc": "addLast/addFirst/addBefore/addAfter顺序决定编解码先后和数据流向"
            }
          ]
        },
        {
          "id": "netty线程模型-31-2-1",
          "tag": "Netty 线程模型",
          "desc": "主从Reactor多线程bossGroup(Acceptor)接收连接workGroup(I/O+业务)处理数据;NioEventLoop最小执行单元持有Selector+TaskQueue单线程串行无锁;EventLoopGroup线程池bossGroup默认1线程workGroup默认CPU*2;Handler可指定不同EventLoopGroup实现线程隔离",
          "details": [
            {
              "id": "netty线程模型-31-2-1-d0",
              "tag": "主从Reactor",
              "desc": "bossGroup(Acceptor线程组)接收新连接workGroup(I/O线程组)处理已建立连接读写"
            },
            {
              "id": "netty线程模型-31-2-1-d1",
              "tag": "NioEventLoop",
              "desc": "最小执行单元持有Selector+TaskQueue单线程串行执行I/O和Task无锁并发安全"
            },
            {
              "id": "netty线程模型-31-2-1-d2",
              "tag": "EventLoopGroup",
              "desc": "bossGroup默认1线程只AcceptworkGroup默认CPU*2负责I/O读写和业务"
            },
            {
              "id": "netty线程模型-31-2-1-d3",
              "tag": "线程绑定",
              "desc": "Channel注册到某EventLoop后一直由该EventLoop处理不会切换线程无锁"
            },
            {
              "id": "netty线程模型-31-2-1-d4",
              "tag": "线程隔离",
              "desc": "Handler指定不同EventLoopGroup耗时业务独立线程不阻塞I/O线程"
            }
          ]
        },
        {
          "id": "netty编解码器-31-2-2",
          "tag": "Netty 编解码器体系",
          "desc": "ByteToMessageDecoder字节→对象MessageToMessageDecoder对象→对象;MessageToByteEncoder对象→字节MessageToMessageEncoder对象→对象;ByteToMessageCodec组合编解码;内置:FixedLength/DelimiterBased/LengthFieldBased解决粘包拆包",
          "details": [
            {
              "id": "netty编解码器-31-2-2-d0",
              "tag": "解码器",
              "desc": "ByteToMessageDecoder字节→对象MessageToMessageDecoder对象→对象转换"
            },
            {
              "id": "netty编解码器-31-2-2-d1",
              "tag": "编码器",
              "desc": "MessageToByteEncoder对象→字节MessageToMessageEncoder对象→对象转换"
            },
            {
              "id": "netty编解码器-31-2-2-d2",
              "tag": "Codec组合",
              "desc": "ByteToMessageCodec同时实现解码和编码简化配置"
            },
            {
              "id": "netty编解码器-31-2-2-d3",
              "tag": "粘包解码器",
              "desc": "FixedLengthFrameDecoder定长/DelimiterBased分隔符/LengthFieldBased长度字段三种常用"
            },
            {
              "id": "netty编解码器-31-2-2-d4",
              "tag": "ReplayingDecoder",
              "desc": "扩展ByteToMessageDecoder自动检查字节是否足够不够等待自动重试无需手动检查"
            }
          ]
        }
      ]
    },
    {
      "id": "31-3-netty实战与优化-31-0",
      "title": "31.3 Netty实战与优化",
      "points": [
        {
          "id": "netty实战场景-31-3-0",
          "tag": "Netty 实战场景",
          "desc": "RPC框架:Dubbo/gRPC底层基于Netty;IM即时通讯:长连接+WebSocket双向通信;游戏服务器:高并发低延迟千万级连接;物联网网关:MQTT协议海量设备连接",
          "details": [
            {
              "id": "netty实战场景-31-3-0-d0",
              "tag": "RPC框架",
              "desc": "Dubbo/gRPC底层基于Netty实现远程调用负责网络传输和序列化"
            },
            {
              "id": "netty实战场景-31-3-0-d1",
              "tag": "IM系统",
              "desc": "长连接+WebSocket双向通信消息推送心跳保活百万级在线"
            },
            {
              "id": "netty实战场景-31-3-0-d2",
              "tag": "游戏服务器",
              "desc": "高并发低延迟帧同步/状态同步千万级连接自定义二进制协议"
            },
            {
              "id": "netty实战场景-31-3-0-d3",
              "tag": "物联网网关",
              "desc": "MQTT/CoAP协议海量设备连接协议解析数据上报指令下发"
            }
          ]
        },
        {
          "id": "netty内存管理-31-3-1",
          "tag": "Netty 内存管理",
          "desc": "PooledByteBufAllocator池化分配默认减少GC;基于jemalloc算法Arena+PoolThreadCache;DirectByteBuf堆外内存零拷贝性能高需手动释放;HeapByteBuf堆内存GC管理;泄漏检测ResourceLeakDetector四级;引用计数refCnt/release归零释放",
          "details": [
            {
              "id": "netty内存管理-31-3-1-d0",
              "tag": "池化分配",
              "desc": "PooledByteBufAllocator默认池化减少GC基于jemalloc Arena+PoolThreadCache"
            },
            {
              "id": "netty内存管理-31-3-1-d1",
              "tag": "堆外内存",
              "desc": "DirectByteBuf零拷贝IO性能高但需手动release否则泄漏"
            },
            {
              "id": "netty内存管理-31-3-1-d2",
              "tag": "堆内存",
              "desc": "HeapByteBufJVM堆内GC管理但IO需额外拷贝到堆外性能略低"
            },
            {
              "id": "netty内存管理-31-3-1-d3",
              "tag": "泄漏检测",
              "desc": "ResourceLeakDetector四级disable/simple/advanced/paranoid默认simple"
            },
            {
              "id": "netty内存管理-31-3-1-d4",
              "tag": "引用计数",
              "desc": "ByteBuf引用计数refCnt()release()减1归零释放池化ByteBuf必须release"
            }
          ]
        },
        {
          "id": "nettytcp参数-31-3-2",
          "tag": "Netty TCP参数优化",
          "desc": "SO_BACKLOG连接队列长度高并发调1024;TCP_NODELAY禁用Nagle算法减少延迟;SO_KEEPALIVE保活探测;SO_SNDBUF/SO_RCVBUF缓冲区大小;WriteBufferWaterMark写缓冲区水位线防溢出",
          "details": [
            {
              "id": "nettytcp参数-31-3-2-d0",
              "tag": "SO_BACKLOG",
              "desc": "连接队列默认128高并发调1024+防队列溢出拒绝连接"
            },
            {
              "id": "nettytcp参数-31-3-2-d1",
              "tag": "TCP_NODELAY",
              "desc": "禁用Nagle算法小包立即发送减少延迟实时场景必须关闭"
            },
            {
              "id": "nettytcp参数-31-3-2-d2",
              "tag": "SO_KEEPALIVE",
              "desc": "保活探测检测死连接自动关闭避免僵尸连接占用资源"
            },
            {
              "id": "nettytcp参数-31-3-2-d3",
              "tag": "缓冲区",
              "desc": "SO_SNDBUF/SO_RCVBUF根据数据量调整减少系统调用次数"
            },
            {
              "id": "nettytcp参数-31-3-2-d4",
              "tag": "水位线",
              "desc": "WriteBufferWaterMark低32KB高64KB超出高水位isWritable()=false防溢出"
            }
          ]
        }
      ]
    }
  ]
};
