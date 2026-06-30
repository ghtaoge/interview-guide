// computer-basic.js — 六、计算机基础 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['computer-basic'] = {
  "id": "computer-basic",
  "title": "十六、计算机基础",
  "tag": "计算机基础",
  "order": 16,
  "icon": "💻",
  "cssIndex": 15,
  "subs": [
    {
      "id": "6-1-操作系统-6-0",
      "title": "6.1 操作系统",
      "points": [
        {
          "id": "进程线程区别-6-0-0",
          "tag": "进程线程区别",
          "desc": "进程是资源分配最小单位(独立内存空间/文件描述符),线程是CPU调度最小单位(共享进程内存/栈独立)。进程切换开销大(需刷新TLB/缓存),线程切换轻量。多进程更稳定(一个崩溃不影响其他),多线程通信简单(共享内存)。Python中GIL限制多核利用,多线程适合IO密集型,多进程适合CPU密集型",
          "details": [
            {
              "id": "进程线程区别-6-0-0-d0",
              "tag": "进程",
              "desc": "资源分配最小单位,拥有独立内存空间和文件描述符,进程间需IPC通信"
            },
            {
              "id": "进程线程区别-6-0-0-d1",
              "tag": "线程",
              "desc": "CPU调度单位(共享进程内存/独立栈)"
            },
            {
              "id": "进程线程区别-6-0-0-d2",
              "tag": "进程状态",
              "desc": "创建→就绪→运行→阻塞→终止5种状态转换调度器管理"
            },
            {
              "id": "进程线程区别-6-0-0-d3",
              "tag": "进程通信IPC",
              "desc": "管道(pipe)/消息队列/共享内存+信号量/信号/socket6种方式"
            },
            {
              "id": "进程线程区别-6-0-0-d4",
              "tag": "进程调度",
              "desc": "FCFS先来先服务/SJF短作业优先/RR时间片轮转/优先级调度"
            },
            {
              "id": "进程线程区别-6-0-0-d5",
              "tag": "僵尸进程",
              "desc": "子进程终止父进程未wait回收→占用PID→kill父进程清理"
            }
          ]
        },
        {
          "id": "进程间ipc-6-0-1",
          "tag": "进程间IPC",
          "desc": "管道Pipe(半双工父子进程)/命名FIFO(无关进程)/消息队列(内核缓冲区内核维护)/共享内存+信号量(最快需同步机制)/信号Signal(异步通知)/Socket(跨网络)。生产者消费者模型:共享缓冲区+互斥锁(保护缓冲区)+条件变量(满/空等待唤醒)",
          "details": [
            {
              "id": "进程间ipc-6-0-1-d0",
              "tag": "管道/FIFO/消息队列/共享内存+信号量/信号/Socket",
              "desc": "管道半双工限父子进程,FIFO跨进程,消息队列内核维护,共享内存最快需信号量同步,Socket跨网络"
            },
            {
              "id": "进程间ipc-6-0-1-d1",
              "tag": "生产者消费者",
              "desc": "共享缓冲区+互斥锁+条件变量（生产者消费者的详细说明：进程间IPC中关于生产者消费者的内容）"
            },
            {
              "id": "进程间ipc-6-0-1-d2",
              "tag": "死锁预防:破坏4条件之一",
              "desc": "互斥→共享/请求保持→一次性/不可抢占→超时/循环→有序"
            },
            {
              "id": "进程间ipc-6-0-1-d3",
              "tag": "死锁避免",
              "desc": "银行家算法每次分配前检查系统是否安全状态不进入不安全"
            },
            {
              "id": "进程间ipc-6-0-1-d4",
              "tag": "死锁检测",
              "desc": "资源分配图+恢复(终止进程/资源抢占)允许死锁发生再处理"
            },
            {
              "id": "进程间ipc-6-0-1-d5",
              "tag": "哲学家就餐",
              "desc": "编号奇偶不同顺序拿筷子避免循环等待经典同步问题"
            }
          ]
        },
        {
          "id": "死锁四条件-6-0-2",
          "tag": "死锁四条件",
          "desc": "互斥(资源一次只能被一个占用)→持有并等待(持有资源同时等待其他)→非抢占(不能强行夺取)→循环等待(形成闭环)。预防:破坏任一条件(按序申请破坏环路/超时释放/全部一次性申请)。检测:银行家算法(安全序列判断)。避免:尽量减少锁定范围/按固定顺序加锁",
          "details": [
            {
              "id": "死锁四条件-6-0-2-d0",
              "tag": "互斥+持有并等待+非抢占+循环等待",
              "desc": "互斥+持有并等待+非抢占+循环等待→死锁"
            },
            {
              "id": "死锁四条件-6-0-2-d1",
              "tag": "预防",
              "desc": "破坏一条件 / 检测: 银行家算法"
            },
            {
              "id": "死锁四条件-6-0-2-d2",
              "tag": "虚拟内存",
              "desc": "MMU+页表虚拟地址→物理地址映射+缺页中断从磁盘加载按需分配"
            },
            {
              "id": "死锁四条件-6-0-2-d3",
              "tag": "页面置换",
              "desc": "FIFO先进先出/LRU最近最少使用/LFU最不常用/Clock算法"
            },
            {
              "id": "死锁四条件-6-0-2-d4",
              "tag": "页面大小",
              "desc": "x86默认4KB大页2MB/1GB减少页表项提高TLB命中率"
            },
            {
              "id": "死锁四条件-6-0-2-d5",
              "tag": "内存分配",
              "desc": "伙伴系统2^n页块分配+slab分配器小对象缓存内核管理"
            }
          ]
        },
        {
          "id": "内存管理-6-0-3",
          "tag": "内存管理",
          "desc": "虚拟内存:每个进程有独立连续虚拟地址空间(32位4G/64位128T),MMU页表映射到物理页框。分页:固定大小4KB页,页表记录虚→实映射,TLB加速页表查找。分段:按逻辑(代码段/数据段/栈段)变长。段页式结合两者优点。页面置换:LRU最近最少使用/LFU最少频率/CLOCK时钟算法",
          "details": [
            {
              "id": "内存管理-6-0-3-d0",
              "tag": "虚拟内存+MMU页表+TLB加速",
              "desc": "每进程独立虚拟地址空间,MMU页表映射虚地址到物理页框,TLB缓存页表加速查找避免每次访内存"
            },
            {
              "id": "内存管理-6-0-3-d1",
              "tag": "分页4KB固定 / 段分逻辑变长 / LRU-LFU-CLOCK置换",
              "desc": "分页4KB固定便于管理,分段按代码/数据/栈逻辑划分变长,LRU/LFU/CLOCK三种页面置换算法选择"
            },
            {
              "id": "内存管理-6-0-3-d2",
              "tag": "select",
              "desc": "1024连接上限+遍历全部fd O(n)内核→用户两次拷贝开销大"
            },
            {
              "id": "内存管理-6-0-3-d3",
              "tag": "poll",
              "desc": "无连接上限+仍遍历全部fd O(n)改进select但本质相同"
            },
            {
              "id": "内存管理-6-0-3-d4",
              "tag": "epoll",
              "desc": "事件驱动+红黑树注册fd+只返回活跃fd O(活跃数)+ET/LT两种模式"
            },
            {
              "id": "内存管理-6-0-3-d5",
              "tag": "epoll ET",
              "desc": "边缘触发只通知一次需非阻塞读至EAGAIN避免遗漏高效"
            }
          ]
        },
        {
          "id": "i-o模型-6-0-4",
          "tag": "I/O模型",
          "desc": "阻塞IO(调用等待完成)/非阻塞IO(立即返回轮询)/IO多路复用(select/poll/epoll,单线程监听多个fd)/信号驱动(IO完成后发SIGIO信号)/异步IO(AIO内核完成后回调通知)。epoll高效原因:红黑树管理fd+就绪链表+事件触发(ET边缘触发减少系统调用)/mmap零拷贝",
          "details": [
            {
              "id": "i-o模型-6-0-4-d0",
              "tag": "五种IO模型对比",
              "desc": "阻塞IO等待完成,非阻塞轮询,IO多路复用epoll监听多fd,信号驱动SIGIO通知,异步AIO内核回调"
            },
            {
              "id": "i-o模型-6-0-4-d1",
              "tag": "epoll红黑树+就绪链表+ET边缘",
              "desc": "epoll红黑树+就绪链表+ET边缘触发"
            },
            {
              "id": "i-o模型-6-0-4-d2",
              "tag": "find",
              "desc": "按名称/大小/时间/权限查找 -name -size -mtime -type f/d灵活过滤"
            },
            {
              "id": "i-o模型-6-0-4-d3",
              "tag": "grep",
              "desc": "文本搜索 -i忽略大小写 -r递归 -n显示行号 -E正则扩展"
            },
            {
              "id": "i-o模型-6-0-4-d4",
              "tag": "awk",
              "desc": "列处理 awk '{print $1,$3}' 按列提取+条件+统计计算文本分析"
            },
            {
              "id": "i-o模型-6-0-4-d5",
              "tag": "top/htop",
              "desc": "实时监控CPU/内存/进程 ps aux查看所有进程 kill终止"
            }
          ]
        }
      ]
    },
    {
      "id": "6-2-linux命令-6-1",
      "title": "6.2 Linux命令",
      "points": [
        {
          "id": "文件操作-6-1-0",
          "tag": "文件操作",
          "desc": "ls(-la详细列表/-h人类可读/-R递归)/cp(-r目录/-f强制)/mv移动重名/rm(-rf强制递归删!慎用)/find路径-name '*.log' -mtime +7(7天前)/grep -r 'keyword' 目录(递归搜索内容)/chmod 755 file(权限rwxr-xr-x)/chown user:group file(所有者组)/ln -s target linkname(软链接)/df -h(磁盘用量)/du -sh dir(目录大小)",
          "details": [
            {
              "id": "文件操作-6-1-0-d0",
              "tag": "ls -la/-h/-R",
              "desc": "ls -la列出文件详细信息(权限/大小/所有者)/ls -h人类可读大小(K/M/G)/ls -R递归显示子目录内容,生产常用ls -lah查看文件属性"
            },
            {
              "id": "文件操作-6-1-0-d1",
              "tag": "cp/mv/rm",
              "desc": "cp -r复制目录/mv移动重命名/rm -rf强制递归删除(慎用!)生产环境建议用mv到临时目录替代rm -rf,避免误删不可恢复"
            },
            {
              "id": "文件操作-6-1-0-d2",
              "tag": "find",
              "desc": "find 路径 -name '*.log' -mtime +7 -type f -size +100M 按名称/时间/类型/大小组合查找,find + xargs批量处理,生产查日志/清理过期文件必备"
            },
            {
              "id": "文件操作-6-1-0-d3",
              "tag": "chmod/chown",
              "desc": "chmod 755(rwxr-xr-x)/644(rw-r--r--)权限数字表示/chown user:group改所有者,生产环境敏感文件设600(仅owner可读写),配置文件设644"
            },
            {
              "id": "文件操作-6-1-0-d4",
              "tag": "ln软硬链接",
              "desc": "ln -s源目软链接(跨文件系统删源失效)/ln源目硬链接(同inode删源仍可用),软链接类似快捷方式硬链接类似副本,生产常用软链接做版本切换"
            },
            {
              "id": "文件操作-6-1-0-d5",
              "tag": "df/du磁盘",
              "desc": "df -h查看磁盘分区用量/du -sh *查看每个目录大小,磁盘满时先查du找大目录再查大文件,生产排查磁盘告警必备组合"
            },
            {
              "id": "文件操作-6-1-0-d6",
              "tag": "常用组合",
              "desc": "find . -name '*.log' -mtime +7 | xargs rm 批量删除7天前日志/ls -lS按大小排序找最大文件,生产运维高频组合命令"
            }
          ]
        },
        {
          "id": "文本处理-6-1-1",
          "tag": "文本处理",
          "desc": "cat查看/tac倒序/more分页/less交互式(head前N行/tail后N行/-f跟踪更新)/wc -l统计行数/sort排序(-n数字-r逆序-u去重)/uniq去重(-c计数)/cut -d',' -f2(截取字段)/awk '{print $1,$3}'(列处理)/sed 's/old/new/g'(流编辑器)/tee(输出同时写文件)/tr a-z A-Z(字符替换)/xxd查看二进制",
          "details": [
            {
              "id": "文本处理-6-1-1-d0",
              "tag": "head/tail",
              "desc": "head -20前20行/tail -20后20行/tail -f实时跟踪日志更新(生产看日志必备)/tail -n +100从第100行开始,生产监控日志最常用tail -f"
            },
            {
              "id": "文本处理-6-1-1-d1",
              "tag": "grep",
              "desc": "grep -r递归搜索/-i忽略大小写/-n显示行号/-E正则扩展/-c匹配计数/-l只显示文件名,生产常用grep -rn 'keyword' dir快速定位代码或日志中的关键字"
            },
            {
              "id": "文本处理-6-1-1-d2",
              "tag": "awk",
              "desc": "awk '{print $1,$3}'按列提取/awk -F','指定分隔符/awk '{sum+=$1}END{print sum}'求和统计,文本分析利器,生产日志按列提取IP/时间/状态码"
            },
            {
              "id": "文本处理-6-1-1-d3",
              "tag": "sed",
              "desc": "sed 's/old/new/g'全局替换/sed -i直接修改文件/sed -n '10,20p'提取行范围,流编辑器修改配置文件,生产批量替换配置参数"
            },
            {
              "id": "文本处理-6-1-1-d4",
              "tag": "sort/uniq",
              "desc": "sort -n数字排序/-r逆序/-k2按第2列排序;uniq去重需先sort|-c计数显示重复次数,生产统计日志IP访问频次"
            },
            {
              "id": "文本处理-6-1-1-d5",
              "tag": "cut/wc/tr",
              "desc": "cut -d',' -f2按分隔符截取字段/wc -l统计行数/tr a-z A-Z大小写转换,简单文本处理组合,生产截取CSV字段或统计行数"
            },
            {
              "id": "文本处理-6-1-1-d6",
              "tag": "常用组合",
              "desc": "cat log | grep ERROR | awk '{print $3}' | sort | uniq -c | sort -rn 提取错误IP统计排序(生产日志分析经典管道),管道组合是Linux文本处理核心能力"
            }
          ]
        },
        {
          "id": "网络调试-6-1-2",
          "tag": "网络调试",
          "desc": "ping(连通性ICMP)/telnet(端口通断测试)/curl(POST请求测试: -X POST -H Content-Type头 -d data参数体) -v详细输出 -w '%{http_code}' 只看状态码)/wget下载/netstat -tunlp(端口监听)/ss -tunlp(netstat替代更快)/nslookup/dig DNS解析/traceroute路由追踪/tcpdump -i eth0 port 80抓包(需root)",
          "details": [
            {
              "id": "网络调试-6-1-2-d0",
              "tag": "ping/telnet",
              "desc": "ping测连通性ICMP协议/telnet IP端口测端口是否开放,telnet断开用Ctrl+]再quit,生产先ping测网络再telnet测端口"
            },
            {
              "id": "网络调试-6-1-2-d1",
              "tag": "curl",
              "desc": "curl -v详细输出/-X POST请求/-H Content-Type:application/json头/-d JSON数据体/-w %{http_code}只看状态码,生产接口调试必备,调试REST API首选工具"
            },
            {
              "id": "网络调试-6-1-2-d2",
              "tag": "netstat/ss",
              "desc": "netstat -tunlp查看所有监听端口TCP/UDP/-p显示进程名/ss -tunlp更快替代netstat,排查端口占用和服务启动验证"
            },
            {
              "id": "网络调试-6-1-2-d3",
              "tag": "nslookup/dig",
              "desc": "nslookup域名查IP/dig域名详细DNS记录/dig +short只返回IP,生产排查DNS解析问题,验证域名是否解析正确"
            },
            {
              "id": "网络调试-6-1-2-d4",
              "tag": "traceroute",
              "desc": "traceroute追踪路由路径显示每一跳延迟,排查网络不通时定位哪一跳丢包,生产跨机房网络故障定位"
            },
            {
              "id": "网络调试-6-1-2-d5",
              "tag": "tcpdump",
              "desc": "tcpdump -i eth0 port 80抓HTTP包/-w file.pcap保存文件用Wireshark分析,需root权限生产抓包排查,深度网络问题分析工具"
            },
            {
              "id": "网络调试-6-1-2-d6",
              "tag": "wget",
              "desc": "wget下载文件/-c断点续传/-q静默/-O指定输出文件名,生产批量下载或镜像,大文件下载优先用wget替代curl"
            }
          ]
        },
        {
          "id": "进程管理-6-1-3",
          "tag": "进程管理",
          "desc": "ps aux(USER/PID/%CPU/%MEM/COMMAND)/ps -ef(PPID父进程)/top实时(按P排序CPU/M内存/q退出)/kill -9 PID(强制终止)/kill -0 PID(检查存在)/jobs后台任务/fg/bg前后台切换/nohup command & (断开终端不退出)/crontab -e定时任务(systemctl管理服务)/free -h内存/uptime负载/top -bn1一次快照",
          "details": [
            {
              "id": "进程管理-6-1-3-d0",
              "tag": "ps",
              "desc": "ps aux查看所有进程(USER/PID/%CPU/%MEM/STAT/COMMAND)/ps -ef看PPID父进程关系,排查进程时先ps定位PID,生产常用ps aux | grep java查找Java进程"
            },
            {
              "id": "进程管理-6-1-3-d1",
              "tag": "top/htop",
              "desc": "top实时监控CPU内存/按P排序CPU/M排序内存/q退出/htop更友好交互式,生产监控服务器资源必备,top -bn1一次快照适合脚本采集"
            },
            {
              "id": "进程管理-6-1-3-d2",
              "tag": "kill",
              "desc": "kill -15 PID优雅终止(允许清理)/kill -9 PID强制杀死(不清理)/kill -0 PID检查进程是否存在,生产优先-15允许进程优雅退出释放资源"
            },
            {
              "id": "进程管理-6-1-3-d3",
              "tag": "nohup/后台",
              "desc": "nohup command &断开终端不退出输出到nohup.out/jobs查看后台任务/fg %1切前台/bg %1切后台,生产部署常用nohup启动服务"
            },
            {
              "id": "进程管理-6-1-3-d4",
              "tag": "crontab",
              "desc": "crontab -e编辑定时任务/格式:分时日月周/0 2 * * *每天2点执行/生产:日志清理/备份/监控脚本,分布式环境建议用XXL-Job替代"
            },
            {
              "id": "进程管理-6-1-3-d5",
              "tag": "free/uptime",
              "desc": "free -h内存总量/已用/可用/缓存/uptime系统运行时间+1/5/15分钟平均负载,负载>CPU核数说明过载,生产判断服务器健康度"
            },
            {
              "id": "进程管理-6-1-3-d6",
              "tag": "systemctl",
              "desc": "systemctl start/stop/restart/status服务名/systemctl enable开机自启,生产管理服务生命周期,替代旧版service命令"
            }
          ]
        }
      ]
    }
  ]
};
