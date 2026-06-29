// docker.js — 十九、Docker 容器技术 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['docker'] = {
  "id": "docker",
  "title": "十九、Docker 容器技术",
  "tag": "Docker",
  "order": 19,
  "icon": "🐻",
  "cssIndex": 18,
  "subs": [
    {
      "id": "19-1-docker-核心概念-19-0",
      "title": "19.1 Docker 核心概念",
      "points": [
        {
          "id": "docker是什么-19-0-0",
          "tag": "Docker 是什么",
          "desc": "Docker 是开源容器引擎，将应用及其依赖打包为轻量级、可移植的容器，实现'一次构建，到处运行'。容器共享宿主机 OS 内核，启动毫秒级，资源开销远小于虚拟机",
          "details": [
            {
              "id": "docker是什么-19-0-0-d0",
              "tag": "容器 vs 虚拟机",
              "desc": "容器共享宿主机内核，VM 独立 Guest OS；容器启动秒级/VM 分钟级；容器 MB 级/VM GB 级"
            },
            {
              "id": "docker是什么-19-0-0-d1",
              "tag": "核心组件",
              "desc": "Docker Daemon( dockerd 守护进程)、Docker Client( docker CLI)、Registry(镜像仓库 Hub/私有)"
            },
            {
              "id": "docker是什么-19-0-0-d2",
              "tag": "Docker 用 Go 语言编写，",
              "desc": "Docker 用 Go 语言编写，基于 Linux namespace(Cgroup)实现资源隔离和限制"
            },
            {
              "id": "docker是什么-19-0-0-d3",
              "tag": "OCI 标准(Open Container Initiative)",
              "desc": "定义容器运行时和镜像格式的开放标准"
            }
          ]
        },
        {
          "id": "docker架构-19-0-1",
          "tag": "Docker 架构",
          "desc": "Client-Server 架构：Client 通过 REST API 与 Daemon 通信；Daemon 负责构建/运行/分发容器；Registry 存储镜像",
          "details": [
            {
              "id": "docker架构-19-0-1-d0",
              "tag": "Docker Client",
              "desc": "docker build/run/pull 命令通过 UNIX Socket(/var/run/docker.sock)或 TCP 与 daemon 通信"
            },
            {
              "id": "docker架构-19-0-1-d1",
              "tag": "Docker Daemon( dockerd)",
              "desc": "管理镜像/容器/网络/数据卷，监听 API 请求"
            },
            {
              "id": "docker架构-19-0-1-d2",
              "tag": "containerd",
              "desc": "管理容器生命周期的工业级核心运行时(启动/停止/暂停/删除)"
            },
            {
              "id": "docker架构-19-0-1-d3",
              "tag": "runc",
              "desc": "OCI 标准容器运行时，基于 libcontainer 创建和运行容器(实际创建 namespaces/cgroups)"
            },
            {
              "id": "docker架构-19-0-1-d4",
              "tag": "Docker Registry",
              "desc": "镜像仓库，默认 Docker Hub，私有 Harbor/ACR/ECR"
            }
          ]
        },
        {
          "id": "核心三要素-19-0-2",
          "tag": "核心三要素",
          "desc": "镜像(Image)+容器(Container)+仓库(Registry)是 Docker 三大核心概念，分别对应构建/运行/分发",
          "details": [
            {
              "id": "核心三要素-19-0-2-d0",
              "tag": "镜像 Image",
              "desc": "只读模板，分层文件系统(UnionFS)，每层是一个只读文件系统快照"
            },
            {
              "id": "核心三要素-19-0-2-d1",
              "tag": "容器 Container",
              "desc": "镜像的可运行实例 = 镜像只读层 + 容器读写层(Copy-on-Write)"
            },
            {
              "id": "核心三要素-19-0-2-d2",
              "tag": "仓库 Registry",
              "desc": "镜像集中存储和分发中心，docker push/pull，默认 Docker Hub"
            },
            {
              "id": "核心三要素-19-0-2-d3",
              "tag": "镜像命名",
              "desc": "registry/namespace/repository:tag，如 nginx:1.25-alpine"
            }
          ]
        },
        {
          "id": "底层技术namespace-cgroups-19-0-3",
          "tag": "底层技术 Namespace/Cgroups",
          "desc": "Docker 依赖 Linux 内核两大特性实现资源隔离(Namespace)和资源限制(Cgroups)",
          "details": [
            {
              "id": "底层技术namespace-cgroups-19-0-3-d0",
              "tag": "Namespace 隔离",
              "desc": "PID(进程隔离)/NET(网络隔离)/IPC/MNT(挂载点)/UTS(主机名)/USER(用户)/Cgroup 七种"
            },
            {
              "id": "底层技术namespace-cgroups-19-0-3-d1",
              "tag": "Cgroups 限制",
              "desc": "限制 CPU/内存/磁盘 IO/网络带宽等资源使用上限防止单容器耗尽宿主机资源"
            },
            {
              "id": "底层技术namespace-cgroups-19-0-3-d2",
              "tag": "UnionFS 联合文件系统",
              "desc": "overlay2 主流，将多层镜像叠加为一个统一视图"
            },
            {
              "id": "底层技术namespace-cgroups-19-0-3-d3",
              "tag": "Copy-on-Write(写时复制)",
              "desc": "修改容器文件时只在容器读写层复制修改不影咆镜像层"
            }
          ]
        }
      ]
    },
    {
      "id": "19-2-镜像与容器管理-19-1",
      "title": "19.2 镜像与容器管理",
      "points": [
        {
          "id": "镜像管理命令-19-1-0",
          "tag": "镜像管理命令",
          "desc": "docker image 系列命令管理本地镜像，理解镜像分层结构和缓存机制",
          "details": [
            {
              "id": "镜像管理命令-19-1-0-d0",
              "tag": "docker images/docker image ls",
              "desc": "列出本地镜像(REPOSITORY/TAG/IMAGE ID/SIZE)"
            },
            {
              "id": "镜像管理命令-19-1-0-d1",
              "tag": "docker pull/push",
              "desc": "拉取/推送镜像，docker pull nginx:alpine 指定 tag"
            },
            {
              "id": "镜像管理命令-19-1-0-d2",
              "tag": "docker rmi/docker image rm",
              "desc": "删除镜像，-f 强制删除；docker image prune 删除悬空镜像"
            },
            {
              "id": "镜像管理命令-19-1-0-d3",
              "tag": "docker save/load",
              "desc": "导出镜像为 tar(docker save -o nginx.tar nginx:latest)/从 tar 导入"
            },
            {
              "id": "镜像管理命令-19-1-0-d4",
              "tag": "docker tag",
              "desc": "给镜像打标签，docker tag nginx:latest myrepo/nginx:v1.0"
            },
            {
              "id": "镜像管理命令-19-1-0-d5",
              "tag": "docker history",
              "desc": "查看镜像构建历史和各层大小（docker history的详细说明：镜像管理命令中关于docker history的内容）"
            }
          ]
        },
        {
          "id": "容器生命周期管理-19-1-1",
          "tag": "容器生命周期管理",
          "desc": "docker run/create/start/stop/rm 管理容器全生命周期",
          "details": [
            {
              "id": "容器生命周期管理-19-1-1-d0",
              "tag": "docker run",
              "desc": "创建并启动容器，-d 后台运行、-it 交互终端、--name 命名、--rm 退出自动删除"
            },
            {
              "id": "容器生命周期管理-19-1-1-d1",
              "tag": "docker run 参数",
              "desc": "-p 端口映射(-p 8080:80)、-v 挂载卷(-v /host:/container)、-e 环境变量、--restart 重启策略"
            },
            {
              "id": "容器生命周期管理-19-1-1-d2",
              "tag": "docker ps",
              "desc": "列出容器，-a 显示所有(含已停止)；docker start/stop/restart 启动/停止/重启"
            },
            {
              "id": "容器生命周期管理-19-1-1-d3",
              "tag": "docker rm",
              "desc": "删除容器，-f 强制删除运行中容器；docker container prune 清理所有停止容器"
            },
            {
              "id": "容器生命周期管理-19-1-1-d4",
              "tag": "docker exec -it <容器> /bin/bash",
              "desc": "进入运行中容器执行命令（docker exec -it <容器> /bin/bash的详细说明：容器生命周期管理中关于docker exec -it <容器> /bin/bash的内容）"
            },
            {
              "id": "容器生命周期管理-19-1-1-d5",
              "tag": "docker logs -f <容器>",
              "desc": "查看容器日志，--tail 100 最后 N 行，--since 时间范围"
            }
          ]
        },
        {
          "id": "资源限制与监控-19-1-2",
          "tag": "资源限制与监控",
          "desc": "docker run 时设置资源限制 + docker stats 实时监控",
          "details": [
            {
              "id": "资源限制与监控-19-1-2-d0",
              "tag": "-m/--memory",
              "desc": "内存限制，如 --memory=512m；--memory-swap 交换空间限制"
            },
            {
              "id": "资源限制与监控-19-1-2-d1",
              "tag": "--cpus",
              "desc": "CPU 限制，--cpus=1.5 限制 1.5 核；--cpuset-cpus 绑定特定 CPU 核心"
            },
            {
              "id": "资源限制与监控-19-1-2-d2",
              "tag": "--blkio-weight",
              "desc": "磁盘 IO 权重(10-1000)；--device-read/write-bps 限制磁盘读写速率"
            },
            {
              "id": "资源限制与监控-19-1-2-d3",
              "tag": "docker stats",
              "desc": "实时查看容器 CPU/内存/网络/磁盘 IO 使用情况"
            },
            {
              "id": "资源限制与监控-19-1-2-d4",
              "tag": "docker top <容器>",
              "desc": "查看容器内运行的进程（docker top <容器>的详细说明：资源限制与监控中关于docker top <容器>的内容）"
            },
            {
              "id": "资源限制与监控-19-1-2-d5",
              "tag": "docker inspect <容器>",
              "desc": "查看容器完整配置信息(JSON格式)"
            }
          ]
        }
      ]
    },
    {
      "id": "19-3-dockerfile-最佳实践-19-2",
      "title": "19.3 Dockerfile 最佳实践",
      "points": [
        {
          "id": "dockerfile核心指令-19-2-0",
          "tag": "Dockerfile 核心指令",
          "desc": "Dockerfile 是构建镜像的脚本，每条指令创建一个新的镜像层",
          "details": [
            {
              "id": "dockerfile核心指令-19-2-0-d0",
              "tag": "FROM",
              "desc": "指定基础镜像，推荐 alpine/slim 变小；多阶段构建用多个 FROM"
            },
            {
              "id": "dockerfile核心指令-19-2-0-d1",
              "tag": "RUN",
              "desc": "执行构建命令(RUN apt-get update && apt-get install -y xxx)，每条 RUN 创建一个新层"
            },
            {
              "id": "dockerfile核心指令-19-2-0-d2",
              "tag": "COPY vs ADD",
              "desc": "COPY 简单复制文件；ADD 额外支持自动解压 tar/远程 URL(推荐用 COPY)"
            },
            {
              "id": "dockerfile核心指令-19-2-0-d3",
              "tag": "CMD vs ENTRYPOINT",
              "desc": "CMD 默认命令(docker run 可覆盖)；ENTRYPOINT 入口命令(run 参数作为参数追加)"
            },
            {
              "id": "dockerfile核心指令-19-2-0-d4",
              "tag": "WORKDIR",
              "desc": "设置工作目录(推荐用绝对路径)，等效 cd 但持久化"
            },
            {
              "id": "dockerfile核心指令-19-2-0-d5",
              "tag": "ENV/ARG",
              "desc": "ENV 环境变量(运行时也可用)；ARG 构建参数(仅构建时可用 --build-arg 传入)"
            },
            {
              "id": "dockerfile核心指令-19-2-0-d6",
              "tag": "EXPOSE",
              "desc": "声明容器监听端口(文档作用，实际还需 -p 映射)；VOLUME 声明匿名卷"
            },
            {
              "id": "dockerfile核心指令-19-2-0-d7",
              "tag": "HEALTHCHECK",
              "desc": "健康检查指令(CMD 命令返回 0=健康 1=不健康)，如 curl -f http://localhost/health"
            }
          ]
        },
        {
          "id": "多阶段构建-19-2-1",
          "tag": "多阶段构建",
          "desc": "多阶段构建(Multi-stage Build)在一个 Dockerfile 中用多个 FROM，分离编译环境和运行环境",
          "details": [
            {
              "id": "多阶段构建-19-2-1-d0",
              "tag": "语法",
              "desc": "多个 FROM 语句，最后一个 FROM 决定最终镜像；COPY --from=0 从阶段 0 复制文件"
            },
            {
              "id": "多阶段构建-19-2-1-d1",
              "tag": "优势",
              "desc": "编译依赖(JDK/Node SDK/GCC)不进入最终镜像，体积减小 90%+"
            },
            {
              "id": "多阶段构建-19-2-1-d2",
              "tag": "COPY --from",
              "desc": "builder /app/dist /usr/share/nginx/html 从构建阶段复制产物"
            },
            {
              "id": "多阶段构建-19-2-1-d3",
              "tag": "阶段命名",
              "desc": "FROM node:18 AS builder，后续 COPY --from=builder"
            },
            {
              "id": "多阶段构建-19-2-1-d4",
              "tag": "Go/Rust 静态编译镜像可从 scratch 空镜像开始，体积仅几 MB",
              "desc": "scratch无OS层无shell，静态链接程序直接COPY至镜像；多阶段用AS命名构建阶段，最终阶段仅COPY编译产物，镜像体积极小"
            }
          ]
        },
        {
          "id": "优化技巧-19-2-2",
          "tag": "优化技巧",
          "desc": "镜像体积和构建速度优化",
          "details": [
            {
              "id": "优化技巧-19-2-2-d0",
              "tag": "选择最小基础镜像",
              "desc": "alpine(~5MB) / distroless(仅运行时) / slim(精简 Debian)"
            },
            {
              "id": "优化技巧-19-2-2-d1",
              "tag": "合并 RUN 指令",
              "desc": "多个 RUN 合并为一个减少镜像层数，&& 串联，清理缓存(apt-get clean)"
            },
            {
              "id": "优化技巧-19-2-2-d2",
              "tag": ".dockerignore 文件",
              "desc": "排除 node_modules/.git/Dockerfile 减少构建上下文"
            },
            {
              "id": "优化技巧-19-2-2-d3",
              "tag": "利用构建缓存",
              "desc": "先 COPY package.json 再 RUN npm install 利用 npm 层缓存"
            },
            {
              "id": "优化技巧-19-2-2-d4",
              "tag": "镜像层扁平化",
              "desc": "--squash 实验性特性将所有层合并为一层"
            },
            {
              "id": "优化技巧-19-2-2-d5",
              "tag": "按变更频率排序",
              "desc": "最稳定的层放前面(OS 更新→依赖安装→代码复制)"
            }
          ]
        }
      ]
    },
    {
      "id": "19-4-docker-compose-19-3",
      "title": "19.4 Docker Compose",
      "points": [
        {
          "id": "compose核心概念-19-3-0",
          "tag": "Compose 核心概念",
          "desc": "Docker Compose 通过 YAML 文件(docker-compose.yml)定义和管理多容器应用，一键启动整个应用栈",
          "details": [
            {
              "id": "compose核心概念-19-3-0-d0",
              "tag": "docker compose up",
              "desc": "启动所有服务，-d 后台运行，--build 重新构建镜像"
            },
            {
              "id": "compose核心概念-19-3-0-d1",
              "tag": "docker compose down",
              "desc": "停止并删除所有容器/网络，-v 同时删除数据卷"
            },
            {
              "id": "compose核心概念-19-3-0-d2",
              "tag": "docker compose ps",
              "desc": "查看 Compose 管理的容器状态"
            },
            {
              "id": "compose核心概念-19-3-0-d3",
              "tag": "docker compose logs -f <service>",
              "desc": "查看指定服务日志（docker compose logs -f <service>的详细说明：Compose 核心概念中关于docker compose logs -f <service>的内容）"
            },
            {
              "id": "compose核心概念-19-3-0-d4",
              "tag": "docker compose exec <service> sh：进入服务容器",
              "desc": "exec在已运行容器内执行命令不新建容器；区别于run新建临时容器；常用exec -it交互式进入调试，service名对应YAML中定义的服务"
            }
          ]
        },
        {
          "id": "docker-composeyml常用配置-19-3-1",
          "tag": "docker-compose.yml 常用配置",
          "desc": "YAML 文件定义 services/networks/volumes 三大顶层元素",
          "details": [
            {
              "id": "docker-composeyml常用配置-19-3-1-d0",
              "tag": "services",
              "desc": "定义各容器，image 或 build 指定镜像源，ports 端口映射，volumes 卷挂载"
            },
            {
              "id": "docker-composeyml常用配置-19-3-1-d1",
              "tag": "environment 环境变量 或 env_file 从文件加载；depends_on 启动依赖顺序(不等待就绪)",
              "desc": "environment直接在YAML声明变量；env_file引用.env文件批量加载；depends_on仅控制启动顺序，不保证服务健康就绪需配合healthcheck"
            },
            {
              "id": "docker-composeyml常用配置-19-3-1-d2",
              "tag": "networks",
              "desc": "自定义网络驱动 bridge/overlay；services 通过 networks 加入指定网络"
            },
            {
              "id": "docker-composeyml常用配置-19-3-1-d3",
              "tag": "volumes",
              "desc": "命名卷 docker volume create 管理，比 bind mount(路径挂载)更推荐"
            },
            {
              "id": "docker-composeyml常用配置-19-3-1-d4",
              "tag": "deploy.resources",
              "desc": "限制资源 limits(cpus/memory)和 reservations(预留)"
            },
            {
              "id": "docker-composeyml常用配置-19-3-1-d5",
              "tag": "restart",
              "desc": "重启策略 no/always/on-failure/unless-stopped"
            }
          ]
        },
        {
          "id": "composevskubernetes-19-3-2",
          "tag": "Compose vs Kubernetes",
          "desc": "Compose 适合开发/测试/单机部署，K8s 适合生产集群编排",
          "details": [
            {
              "id": "composevskubernetes-19-3-2-d0",
              "tag": "Compose 优势",
              "desc": "配置简单 YAML 一个文件，学习曲线低，本地开发快速"
            },
            {
              "id": "composevskubernetes-19-3-2-d1",
              "tag": "Compose 局限",
              "desc": "单机运行不支持跨主机集群，无自动扩缩容/自愈/滚动更新"
            },
            {
              "id": "composevskubernetes-19-3-2-d2",
              "tag": "Compose 适用",
              "desc": "本地开发环境、CI/CD 测试环境、单服务器简单应用部署"
            },
            {
              "id": "composevskubernetes-19-3-2-d3",
              "tag": "K8s 适用",
              "desc": "生产集群、多服务编排、弹性伸缩、灰度发布、多环境管理"
            }
          ]
        }
      ]
    },
    {
      "id": "19-5-docker-网络与存储-19-4",
      "title": "19.5 Docker 网络与存储",
      "points": [
        {
          "id": "网络模式-19-4-0",
          "tag": "网络模式",
          "desc": "Docker 提供 bridge/host/none/overlay/macvlan 五种网络驱动，默认 bridge",
          "details": [
            {
              "id": "网络模式-19-4-0-d0",
              "tag": "bridge(默认)",
              "desc": "docker0 虚拟网桥 NAT 模式，容器间默认通过 IP 通信，--link(已废弃)或用自定义网络"
            },
            {
              "id": "网络模式-19-4-0-d1",
              "tag": "自定义 bridge",
              "desc": "docker network create 创建，容器名自动 DNS 解析，推荐替代默认 bridge"
            },
            {
              "id": "网络模式-19-4-0-d2",
              "tag": "host",
              "desc": "容器直接使用宿主机网络栈(--network host)，性能最好但端口冲突风险"
            },
            {
              "id": "网络模式-19-4-0-d3",
              "tag": "none",
              "desc": "容器无网络(--network none)，完全隔离，仅 lo 回环"
            },
            {
              "id": "网络模式-19-4-0-d4",
              "tag": "overlay",
              "desc": "跨宿主机容器通信(Swarm 模式)，VXLAN 隧道封装"
            },
            {
              "id": "网络模式-19-4-0-d5",
              "tag": "macvlan",
              "desc": "容器直接分配物理网络 MAC 地址，像物理设备一样接入局域网"
            }
          ]
        },
        {
          "id": "数据管理volumevsbindmount-19-4-1",
          "tag": "数据管理 Volume vs Bind Mount",
          "desc": "Docker 三种数据持久化方式：Volume(推荐)/Bind Mount/tmpfs",
          "details": [
            {
              "id": "数据管理volumevsbindmount-19-4-1-d0",
              "tag": "Volume(卷)",
              "desc": "Docker 管理的存储(docker volume create)，/var/lib/docker/volumes/，推荐用于持久化数据"
            },
            {
              "id": "数据管理volumevsbindmount-19-4-1-d1",
              "tag": "Bind Mount(绑定挂载)",
              "desc": "宿主机路径直接映射到容器，开发和配置文件实时同步常用"
            },
            {
              "id": "数据管理volumevsbindmount-19-4-1-d2",
              "tag": "tmpfs(内存)",
              "desc": "数据仅存内存容器停止即丢失，适合临时敏感数据"
            },
            {
              "id": "数据管理volumevsbindmount-19-4-1-d3",
              "tag": "Volume 优势",
              "desc": "可跨容器共享、卷驱动插件支持 NFS/云存储、Docker 自动管理权限和路径"
            },
            {
              "id": "数据管理volumevsbindmount-19-4-1-d4",
              "tag": "docker volume ls/inspect/prune 管理卷",
              "desc": "ls列出所有卷；inspect显示卷详情(挂载点/大小)；prune删除未使用的卷释放磁盘；Volume由Docker管理存储于/var/lib/docker/volumes/"
            }
          ]
        }
      ]
    },
    {
      "id": "19-6-docker-安全与优化-19-5",
      "title": "19.6 Docker 安全与优化",
      "points": [
        {
          "id": "安全最佳实践-19-5-0",
          "tag": "安全最佳实践",
          "desc": "Docker 安全贯穿镜像、容器运行、网络和守护进程多个层面",
          "details": [
            {
              "id": "安全最佳实践-19-5-0-d0",
              "tag": "最小权限原则",
              "desc": "容器不以 root 运行，Dockerfile 中 USER 指定非 root 用户"
            },
            {
              "id": "安全最佳实践-19-5-0-d1",
              "tag": "只读根文件系统",
              "desc": "docker run --read-only 使容器文件系统只读，tmpfs 挂载需要写入的目录"
            },
            {
              "id": "安全最佳实践-19-5-0-d2",
              "tag": "限制能力",
              "desc": "--cap-drop=ALL --cap-add=NET_BIND_SERVICE 去除内核 capabilities"
            },
            {
              "id": "安全最佳实践-19-5-0-d3",
              "tag": "镜像漏洞扫描",
              "desc": "docker scan/Trivy/Clair 扫描镜像 CVE 漏洞，持续更新基础镜像"
            },
            {
              "id": "安全最佳实践-19-5-0-d4",
              "tag": "Docker Daemon 安全",
              "desc": "不暴露 dockerd 端口(2375/2376)，TLS 加密通信，rootless mode"
            },
            {
              "id": "安全最佳实践-19-5-0-d5",
              "tag": "Secrets 管理",
              "desc": "docker secret 管理敏感数据(密码/Token)，不写在 Dockerfile/环境变量中"
            }
          ]
        },
        {
          "id": "docker日志与监控-19-5-1",
          "tag": "Docker 日志与监控",
          "desc": "容器日志驱动和监控方案",
          "details": [
            {
              "id": "docker日志与监控-19-5-1-d0",
              "tag": "日志驱动(json-file 默认/local/syslog/journald/gelf/fluentd)：docker run --log-driver",
              "desc": "json-file默认驱动易膨胀需配--log-opt限大小；local驱动自带压缩与轮转；gelf/fluentd对接ELK等日志平台实现集中采集分析"
            },
            {
              "id": "docker日志与监控-19-5-1-d1",
              "tag": "docker logs 仅适",
              "desc": "docker logs 仅适用于 json-file/local 驱动；生产推荐 EFK(ES+Fluentd+Kibana)/Loki"
            },
            {
              "id": "docker日志与监控-19-5-1-d2",
              "tag": "cAdvisor",
              "desc": "Google 开源容器监控工具，收集 CPU/内存/网络/磁盘指标给 Prometheus"
            },
            {
              "id": "docker日志与监控-19-5-1-d3",
              "tag": "Prometheus + Grafana",
              "desc": "docker 暴露 metrics，Prometheus 采集，Grafana 可视化看板"
            },
            {
              "id": "docker日志与监控-19-5-1-d4",
              "tag": "容器资源限制防 OOM",
              "desc": "--memory + --oom-kill-disable 控制 OOM Killer 行为"
            }
          ]
        }
      ]
    }
  ]
};

// kubernetes.js — 二十、Kubernetes 容器编排 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['kubernetes'] = {
  "id": "kubernetes",
  "title": "二十、Kubernetes 容器编排",
  "tag": "Kubernetes",
  "order": 20,
  "icon": "🔥",
  "cssIndex": 19,
  "subs": [
    {
      "id": "20-1-k8s-核心概念与架构-20-0",
      "title": "20.1 K8s 核心概念与架构",
      "points": [
        {
          "id": "k8s是什么-20-0-0",
          "tag": "K8s 是什么",
          "desc": "Kubernetes(K8s)是 Google 开源的容器编排平台，自动化容器部署、伸缩和管理。源自 Borg 系统，2015 年捐赠给 CNCF",
          "details": [
            {
              "id": "k8s是什么-20-0-0-d0",
              "tag": "核心能力",
              "desc": "服务发现与负载均衡/自动装箱(调度)/自愈(重启/替换/重新调度)/水平扩缩/滚动更新与回滚"
            },
            {
              "id": "k8s是什么-20-0-0-d1",
              "tag": "声明式 API",
              "desc": "用户声明期望状态(Deployment yaml)，Controller 持续调谐实际状态向期望状态靠近"
            },
            {
              "id": "k8s是什么-20-0-0-d2",
              "tag": "架构思想",
              "desc": "控制回路(Control Loop)，Observe→Diff→Act 循环"
            },
            {
              "id": "k8s是什么-20-0-0-d3",
              "tag": "K8s 不是 PaaS",
              "desc": "不限制应用框架/语言/中间件，不提供 CI/CD/日志/监控(可集成)"
            }
          ]
        },
        {
          "id": "master-controlplane组件-20-0-1",
          "tag": "Master/Control Plane 组件",
          "desc": "控制平面负责集群全局决策和事件响应，生产部署通常 3 个 Master 节点 HA",
          "details": [
            {
              "id": "master-controlplane组件-20-0-1-d0",
              "tag": "kube-apiserver",
              "desc": "集群统一入口，RESTful API，kubectl 所有操作经过它，水平可扩展"
            },
            {
              "id": "master-controlplane组件-20-0-1-d1",
              "tag": "etcd",
              "desc": "分布式 KV 存储，Raft 共识算法，存储所有集群状态数据，定期备份至关重要"
            },
            {
              "id": "master-controlplane组件-20-0-1-d2",
              "tag": "kube-scheduler",
              "desc": "调度器，Watch 新 Pod 选择最优 Node 绑定(过滤→打分：资源/亲和性/污点)"
            },
            {
              "id": "master-controlplane组件-20-0-1-d3",
              "tag": "kube-controller-manager",
              "desc": "运行各种 Controller(Deployment/ReplicaSet/Node/Service/Endpoint…)，每个 Controller 是独立控制回路"
            },
            {
              "id": "master-controlplane组件-20-0-1-d4",
              "tag": "cloud-controller-manager",
              "desc": "云厂商 Controller(Node/Route/Service LB)，与云平台 API 交互"
            }
          ]
        },
        {
          "id": "node组件-20-0-2",
          "tag": "Node 组件",
          "desc": "每个工作节点运行的核心组件",
          "details": [
            {
              "id": "node组件-20-0-2-d0",
              "tag": "kubelet",
              "desc": "节点代理，接收 PodSpec 确保容器按声明运行，上报 Node 和 Pod 状态给 API Server"
            },
            {
              "id": "node组件-20-0-2-d1",
              "tag": "kube-proxy",
              "desc": "网络代理，实现 Service 抽象，维护节点网络规则(iptables/IPVS)，转发流量到 Pod"
            },
            {
              "id": "node组件-20-0-2-d2",
              "tag": "Container Runtime",
              "desc": "CRI(Container Runtime Interface)标准的容器运行时，containerd/CRI-O/docker(已弃用 dockershim)"
            },
            {
              "id": "node组件-20-0-2-d3",
              "tag": "Pod",
              "desc": "K8s 最小部署单元，一个 Pod 包含一个或多个紧密耦合的容器，共享网络/IPC/存储卷"
            }
          ]
        },
        {
          "id": "核心资源对象-20-0-3",
          "tag": "核心资源对象",
          "desc": "理解 K8s 常用资源对象及其层级关系",
          "details": [
            {
              "id": "核心资源对象-20-0-3-d0",
              "tag": "Pod→ReplicaSet→Deployment",
              "desc": "Pod 是最小单元，RS 保证副本数，Deployment 管理 RS 滚动升级回滚"
            },
            {
              "id": "核心资源对象-20-0-3-d1",
              "tag": "Service→Endpoints",
              "desc": "Service 提供稳定访问入口(ClusterIP/NodePort/LoadBalancer)，Endpoints 动态跟踪 Pod IP"
            },
            {
              "id": "核心资源对象-20-0-3-d2",
              "tag": "ConfigMap/Secret",
              "desc": "非敏感/敏感配置解耦，以环境变量或 Volume 方式挂载到 Pod"
            },
            {
              "id": "核心资源对象-20-0-3-d3",
              "tag": "Ingress",
              "desc": "七层负载均衡，域名路由到不同 Service，配合 Ingress Controller(nginx-ingress/traefik)"
            },
            {
              "id": "核心资源对象-20-0-3-d4",
              "tag": "PV/PVC",
              "desc": "PersistentVolume 集群存储资源池，PVC 声明消费，StorageClass 动态创建"
            },
            {
              "id": "核心资源对象-20-0-3-d5",
              "tag": "Namespace",
              "desc": "逻辑隔离(资源配额+网络策略+RBAC)，非物理隔离，划分环境/团队"
            }
          ]
        }
      ]
    },
    {
      "id": "20-2-pod-与容器设计-20-1",
      "title": "20.2 Pod 与容器设计",
      "points": [
        {
          "id": "pod详解-20-1-0",
          "tag": "Pod 详解",
          "desc": "Pod 是 K8s 调度和运行的最小原子单元，一个 Pod 内所有容器共享 Network/IPC 命名空间",
          "details": [
            {
              "id": "pod详解-20-1-0-d0",
              "tag": "共享资源",
              "desc": "同一 Pod 内容器共享网络命名空间(同一 IP/端口空间 localhost 通信)和 IPC 命名空间"
            },
            {
              "id": "pod详解-20-1-0-d1",
              "tag": "Pod 生命周期",
              "desc": "Pending(调度中)→Running(绑定 Node 运行)→Succeeded/Failed(终止)→Unknown"
            },
            {
              "id": "pod详解-20-1-0-d2",
              "tag": "Init 容器",
              "desc": "在主容器启动前按顺序执行，常用于初始化(等待依赖就绪/权限设置/配置模板)"
            },
            {
              "id": "pod详解-20-1-0-d3",
              "tag": "Sidecar 模式",
              "desc": "辅助容器增强主容器功能(日志收集/配置刷新/代理转发)，同一 Pod 共享存储"
            },
            {
              "id": "pod详解-20-1-0-d4",
              "tag": "Pod 设计原则",
              "desc": "单一职责(一个 Pod 一个主进程)，紧密耦合放同一 Pod，松散耦合不同 Pod"
            }
          ]
        },
        {
          "id": "健康检查probe-20-1-1",
          "tag": "健康检查 Probe",
          "desc": "三种探针保障 Pod 可用性，kubelet 负责执行探测",
          "details": [
            {
              "id": "健康检查probe-20-1-1-d0",
              "tag": "livenessProbe(存活探针)",
              "desc": "检测容器是否存活，失败→重启容器(restartPolicy)，避免僵尸容器"
            },
            {
              "id": "健康检查probe-20-1-1-d1",
              "tag": "readinessProbe(就绪探针)",
              "desc": "检测容器是否可接收流量，失败→从 Service Endpoints 移除，适合预热/依赖服务就绪检查"
            },
            {
              "id": "健康检查probe-20-1-1-d2",
              "tag": "startupProbe(启动探针)",
              "desc": "仅容器启动时执行，成功后才切换 livenessProbe，防止启动慢的容器被误杀"
            },
            {
              "id": "健康检查probe-20-1-1-d3",
              "tag": "探测方式",
              "desc": "exec(执行命令返回码0)/httpGet(HTTP 200-399)/tcpSocket(TCP 端口可达)/grpc"
            },
            {
              "id": "健康检查probe-20-1-1-d4",
              "tag": "配置参数",
              "desc": "initialDelaySeconds/failureThreshold(失败阈值)/periodSeconds/successThreshold/timeoutSeconds"
            }
          ]
        },
        {
          "id": "资源请求与限制-20-1-2",
          "tag": "资源请求与限制",
          "desc": "Resource Requests(调度依据)和 Limits(运行时上限)是 Pod 资源管理的核心",
          "details": [
            {
              "id": "资源请求与限制-20-1-2-d0",
              "tag": "requests",
              "desc": "调度器确保 Node 可分配资源≥Pod 总 requests；容器至少获得 requests 量"
            },
            {
              "id": "资源请求与限制-20-1-2-d1",
              "tag": "limits",
              "desc": "容器运行不可超过 limits，CPU 超限会被 throttle，内存超限触发 OOMKilled"
            },
            {
              "id": "资源请求与限制-20-1-2-d2",
              "tag": "CPU 单位",
              "desc": "1 = 1 核 vCPU，0.5 = 500m；内存单位：Mi/Gi"
            },
            {
              "id": "资源请求与限制-20-1-2-d3",
              "tag": "QoS 等级",
              "desc": "Guaranteed(requests=limits)、Burstable(requests<limits)、BestEffort(未设置)"
            },
            {
              "id": "资源请求与限制-20-1-2-d4",
              "tag": "BestEffort 优先被驱逐；Guaranteed 最后被驱逐；生产关键服务设置 Guaranteed",
              "desc": "BestEfford未设requests/limits内存不足最先驱逐；Burstable设了requests但limits>requests中间驱逐；Guaranteed requests=limits最稳最后驱逐"
            },
            {
              "id": "资源请求与限制-20-1-2-d5",
              "tag": "LimitRange",
              "desc": "设置 Namespace 内默认 requests/limits；ResourceQuota：Namespace 总资源配额"
            }
          ]
        }
      ]
    },
    {
      "id": "20-3-controller-控制器-20-2",
      "title": "20.3 Controller 控制器",
      "points": [
        {
          "id": "deployment部署管理-20-2-0",
          "tag": "Deployment 部署管理",
          "desc": "Deployment 管理 ReplicaSet，ReplicaSet 管理 Pod，支持声明式更新/回滚/扩缩",
          "details": [
            {
              "id": "deployment部署管理-20-2-0-d0",
              "tag": "Deployment",
              "desc": "定义 Pod 模板+副本数+更新策略；创建 RS→管理 Pod 生命周期"
            },
            {
              "id": "deployment部署管理-20-2-0-d1",
              "tag": "滚动更新(RollingUpdate)",
              "desc": "新 RS 逐步创建 Pod，旧 RS 逐步删除 Pod；maxSurge(峰值超出数)+maxUnavailable(最大不可用数)控制"
            },
            {
              "id": "deployment部署管理-20-2-0-d2",
              "tag": "Recreate",
              "desc": "先全删旧 Pod 再全建新 Pod，有停服时间；适合数据库等不可并存场景"
            },
            {
              "id": "deployment部署管理-20-2-0-d3",
              "tag": "回滚",
              "desc": "kubectl rollout undo deploy/xxx --to-revision=N，记录历史 RS(默认10个)"
            },
            {
              "id": "deployment部署管理-20-2-0-d4",
              "tag": "rollout 命令",
              "desc": "status(更新状态)/history(历史记录)/pause(暂停)/resume(恢复) 精细控制"
            },
            {
              "id": "deployment部署管理-20-2-0-d5",
              "tag": "更新策略金丝雀发布",
              "desc": "先更新少量→观察→全量；蓝绿部署：新环境全量切 DNS"
            }
          ]
        },
        {
          "id": "statefulset有状态应用-20-2-1",
          "tag": "StatefulSet 有状态应用",
          "desc": "StatefulSet 管理需要持久化标识的有状态应用(数据库/消息队列/分布式存储)",
          "details": [
            {
              "id": "statefulset有状态应用-20-2-1-d0",
              "tag": "Pod 命名规则",
              "desc": "<statefulset>-<序号> 从 0 到 N-1 稳定标识，有序启动(0→N-1)和倒序停止(N-1→0)"
            },
            {
              "id": "statefulset有状态应用-20-2-1-d1",
              "tag": "稳定网络标识",
              "desc": "同一 Pod 重启 IP 可能变但 DNS 名不变(pod-0.svc-headless.ns.svc.cluster.local)"
            },
            {
              "id": "statefulset有状态应用-20-2-1-d2",
              "tag": "稳定持久化存储",
              "desc": "每个 Pod 绑定独立 PVC，Pod 重新调度到其他 Node PVC 跟随"
            },
            {
              "id": "statefulset有状态应用-20-2-1-d3",
              "tag": "volumeClaimTemplates",
              "desc": "StatefulSet 自动为每个 Pod 创建 PVC，删除 StatefulSet 不会删除 PVC/存储"
            },
            {
              "id": "statefulset有状态应用-20-2-1-d4",
              "tag": "适用场景",
              "desc": "MySQL 主从/Redis Sentinel/Kafka/Zookeeper/Elasticsearch"
            },
            {
              "id": "statefulset有状态应用-20-2-1-d5",
              "tag": "Headless Service",
              "desc": "clusterIP:None，DNS 直接解析为 Pod IP，配合 StatefulSet 使用"
            }
          ]
        },
        {
          "id": "daemonset-job-cronjob-20-2-2",
          "tag": "DaemonSet/Job/CronJob",
          "desc": "其他常用 Controller 各自负责特定场景",
          "details": [
            {
              "id": "daemonset-job-cronjob-20-2-2-d0",
              "tag": "DaemonSet",
              "desc": "每个 Node 运行一个 Pod 副本，新 Node 加入自动调度；典型：日志收集 Fluentd/监控 NodeExporter/网络 CNI"
            },
            {
              "id": "daemonset-job-cronjob-20-2-2-d1",
              "tag": "Job",
              "desc": "一次性任务，保证指定数量的 Pod 成功完成(completions)，支持并行(parallelism: N)"
            },
            {
              "id": "daemonset-job-cronjob-20-2-2-d2",
              "tag": "CronJob",
              "desc": "定时任务，schedule 字段 Cron 表达式(分 时 日 月 星期)，创建 Job 执行"
            },
            {
              "id": "daemonset-job-cronjob-20-2-2-d3",
              "tag": "HorizontalPodAutoscaler(HPA)",
              "desc": "根据 CPU/内存/自定义指标自动调整 Pod 副本数(需 metrics-server)"
            },
            {
              "id": "daemonset-job-cronjob-20-2-2-d4",
              "tag": "HPA 算法",
              "desc": "期望副本 = ceil(当前副本 × 当前指标 / 目标指标)；可设 minReplicas/maxReplicas"
            }
          ]
        }
      ]
    },
    {
      "id": "20-4-service-服务发现与网络-20-3",
      "title": "20.4 Service 服务发现与网络",
      "points": [
        {
          "id": "service四层负载均衡-20-3-0",
          "tag": "Service 四层负载均衡",
          "desc": "Service 将一组 Pod 抽象为稳定访问入口，通过 Label Selector 关联 Pod",
          "details": [
            {
              "id": "service四层负载均衡-20-3-0-d0",
              "tag": "ClusterIP(默认)",
              "desc": "集群内部虚拟 IP(Service IP)，只能集群内访问，kube-proxy 维护转发规则"
            },
            {
              "id": "service四层负载均衡-20-3-0-d1",
              "tag": "NodePort",
              "desc": "在每个 Node 上开放端口(30000-32767)，NodeIP:NodePort→ClusterIP→Pod，适合开发/调试"
            },
            {
              "id": "service四层负载均衡-20-3-0-d2",
              "tag": "LoadBalancer",
              "desc": "云厂商 LB(CLB/ALB/NLB)暴露公网服务，分配公网 IP 负载到 NodePort"
            },
            {
              "id": "service四层负载均衡-20-3-0-d3",
              "tag": "ExternalName",
              "desc": "DNS CNAME 别名，将 Service 映射到外部域名'外挂'服务"
            },
            {
              "id": "service四层负载均衡-20-3-0-d4",
              "tag": "Service 类型选择",
              "desc": "内部间→ClusterIP，对外简单 HTTP→LoadBalancer+Ingress，非 HTTP→NodePort/LoadBalancer"
            }
          ]
        },
        {
          "id": "iptablesvsipvs模式-20-3-1",
          "tag": "iptables vs IPVS 模式",
          "desc": "kube-proxy 实现 Service 流量转发的两种模式",
          "details": [
            {
              "id": "iptablesvsipvs模式-20-3-1-d0",
              "tag": "iptables 模式",
              "desc": "规则链随机选择后端 Pod，规则全量替换(O(N)复杂度)，大规模集群性能差"
            },
            {
              "id": "iptablesvsipvs模式-20-3-1-d1",
              "tag": "IPVS 模式",
              "desc": "Linux 内核四层负载均衡，支持 rr/wrr/lc/sed 多种调度算法，性能高(O(1)查找)"
            },
            {
              "id": "iptablesvsipvs模式-20-3-1-d2",
              "tag": "IPVS 优势",
              "desc": "延迟低/吞吐高/规则变更增量更新；需要加载内核模块 ip_vs"
            },
            {
              "id": "iptablesvsipvs模式-20-3-1-d3",
              "tag": "DNS 服务发现",
              "desc": "CoreDNS 为 Service 和 Pod 分配 DNS A/AAAA 记录"
            },
            {
              "id": "iptablesvsipvs模式-20-3-1-d4",
              "tag": "Headless Service",
              "desc": "clusterIP:None，DNS 返回所有 Pod IP(A 记录)而非 Service IP"
            }
          ]
        },
        {
          "id": "ingress七层负载均衡-20-3-2",
          "tag": "Ingress 七层负载均衡",
          "desc": "Ingress 提供 HTTP/HTTPS 路由能力，域名/路径→Service 映射",
          "details": [
            {
              "id": "ingress七层负载均衡-20-3-2-d0",
              "tag": "Ingress Resource",
              "desc": "定义路由规则(host/path→service:port)的声明式资源"
            },
            {
              "id": "ingress七层负载均衡-20-3-2-d1",
              "tag": "Ingress Controller",
              "desc": "真正实现流量转发的组件(nginx-ingress/traefik/istio-gateway/contour)"
            },
            {
              "id": "ingress七层负载均衡-20-3-2-d2",
              "tag": "nginx-ingress",
              "desc": "基于 Nginx 反向代理，支持 SSL 终结/重写/限流/CORS/金丝雀"
            },
            {
              "id": "ingress七层负载均衡-20-3-2-d3",
              "tag": "TLS 证书",
              "desc": "Ingress 通过 Secret(tls 类型)引用 TLS 私钥和证书"
            },
            {
              "id": "ingress七层负载均衡-20-3-2-d4",
              "tag": "Ingress vs Gateway API",
              "desc": "Gateway API 是新一代标准(角色/可扩展性更优)，GAMMA 支持 Service Mesh"
            }
          ]
        },
        {
          "id": "网络插件cni-20-3-3",
          "tag": "网络插件 CNI",
          "desc": "Container Network Interface(CNI)为容器分配 IP 和跨主机通信",
          "details": [
            {
              "id": "网络插件cni-20-3-3-d0",
              "tag": "Flannel",
              "desc": "简单 overlay 网络(VXLAN/host-gw)，vxlan 封装开销约 10-20%"
            },
            {
              "id": "网络插件cni-20-3-3-d1",
              "tag": "Calico",
              "desc": "高性能纯三层网络(BGP 路由)，支持网络策略(NetworkPolicy)，不封装无性能损耗"
            },
            {
              "id": "网络插件cni-20-3-3-d2",
              "tag": "Cilium(eBPF)",
              "desc": "新一代网络插件，内核级包处理和可观测性(无代理 Sidecar)"
            },
            {
              "id": "网络插件cni-20-3-3-d3",
              "tag": "NetworkPolicy",
              "desc": "防火墙规则控制 Pod 间流量(Ingress/Egress)，需 CNI 支持"
            },
            {
              "id": "网络插件cni-20-3-3-d4",
              "tag": "Pod 通信三大路径",
              "desc": "同一 Pod(lo)、同 Node 不同 Pod(docker0 网桥)、跨 Node Pod(overlay 隧道/路由)"
            }
          ]
        }
      ]
    },
    {
      "id": "20-5-存储与配置管理-20-4",
      "title": "20.5 存储与配置管理",
      "points": [
        {
          "id": "persistentvolume-pvc-storageclass-20-4-0",
          "tag": "PersistentVolume/PVC/StorageClass",
          "desc": "K8s 存储体系三层架构：管理员定义 PV/StorageClass，用户创建 PVC 声明",
          "details": [
            {
              "id": "persistentvolume-pvc-storageclass-20-4-0-d0",
              "tag": "PV(PersistentVolume)",
              "desc": "集群管理员预先分配或 SC 动态创建，独立于 Pod 生命周期(Retain/Delete)"
            },
            {
              "id": "persistentvolume-pvc-storageclass-20-4-0-d1",
              "tag": "PVC(PersistentVolumeClaim)",
              "desc": "用户声明存储需求(大小/读写模式/SC)，系统自动匹配 PV 绑定"
            },
            {
              "id": "persistentvolume-pvc-storageclass-20-4-0-d2",
              "tag": "StorageClass(SC)",
              "desc": "定义存储 provisioner(AWS EBS/GCE PD/NFS/CSI 插件)和参数，实现动态存储"
            },
            {
              "id": "persistentvolume-pvc-storageclass-20-4-0-d3",
              "tag": "accessModes",
              "desc": "RWO(单节点读写)/ROX(多节点只读)/RWX(多节点读写)"
            },
            {
              "id": "persistentvolume-pvc-storageclass-20-4-0-d4",
              "tag": "VolumeMode",
              "desc": "Filesystem(文件系统，默认)/Block(裸块设备)"
            },
            {
              "id": "persistentvolume-pvc-storageclass-20-4-0-d5",
              "tag": "CSI(Container Storage Interface)",
              "desc": "标准化存储接口，云厂商实现 CSI 驱动对接各类存储"
            }
          ]
        },
        {
          "id": "configmap-secret配置解耦-20-4-1",
          "tag": "ConfigMap/Secret 配置解耦",
          "desc": "ConfigMap 和 Secret 将配置与镜像解耦，实现配置热更新(需应用支持 reload)",
          "details": [
            {
              "id": "configmap-secret配置解耦-20-4-1-d0",
              "tag": "ConfigMap",
              "desc": "存储非敏感配置(key-value)，以环境变量(envFrom)或文件(volume mount)注入 Pod"
            },
            {
              "id": "configmap-secret配置解耦-20-4-1-d1",
              "tag": "Secret",
              "desc": "存储敏感信息(base64 编码)，类型：Opaque(任意)/tls(证书)/docker-registry(镜像仓库凭证)"
            },
            {
              "id": "configmap-secret配置解耦-20-4-1-d2",
              "tag": "Secret base64 不",
              "desc": "Secret base64 不是加密仅是编码！配合 etcd 加密 rest 和 RBAC 控制访问"
            },
            {
              "id": "configmap-secret配置解耦-20-4-1-d3",
              "tag": "Immutable ConfigMap/Secret(beta)",
              "desc": "创建后不可修改，提升性能(减少 kubelet watch 压力)"
            },
            {
              "id": "configmap-secret配置解耦-20-4-1-d4",
              "tag": "SubPath",
              "desc": "Volume 挂载子路径而非整个卷，避免覆盖容器内已有目录"
            }
          ]
        }
      ]
    },
    {
      "id": "20-6-调度-安全与运维-20-5",
      "title": "20.6 调度、安全与运维",
      "points": [
        {
          "id": "调度策略-20-5-0",
          "tag": "调度策略",
          "desc": "kube-scheduler 如何选择最优 Node 运行 Pod",
          "details": [
            {
              "id": "调度策略-20-5-0-d0",
              "tag": "调度流程",
              "desc": "过滤(Filtering)→打分(Scoring)→选定(Binding)"
            },
            {
              "id": "调度策略-20-5-0-d1",
              "tag": "nodeSelector(简单)",
              "desc": "Pod 指定 nodeSelector 标签，Node 必须有对应标签"
            },
            {
              "id": "调度策略-20-5-0-d2",
              "tag": "nodeAffinity(节点亲和性)",
              "desc": "requiredDuringScheduling(硬)/preferredDuringScheduling(软)调度条件"
            },
            {
              "id": "调度策略-20-5-0-d3",
              "tag": "podAffinity/podAntiAffinity",
              "desc": "Pod 间亲和/反亲和(如缓存与 Web 部署在同节点/不同节点)"
            },
            {
              "id": "调度策略-20-5-0-d4",
              "tag": "Taints(污点) + Tolerations(容忍)",
              "desc": "Node 打污点排斥 Pod，Pod 加容忍可调度上去"
            },
            {
              "id": "调度策略-20-5-0-d5",
              "tag": "topologySpreadConstraints",
              "desc": "跨拓扑域(Zone/Node)均匀分布 Pod 提高高可用"
            }
          ]
        },
        {
          "id": "rbac权限控制-20-5-1",
          "tag": "RBAC 权限控制",
          "desc": "Role-Based Access Control 控制对 K8s API 资源的访问权限",
          "details": [
            {
              "id": "rbac权限控制-20-5-1-d0",
              "tag": "四对象",
              "desc": "Role/ClusterRole(定义权限集)+ RoleBinding/ClusterRoleBinding(绑定到用户/组/SA)"
            },
            {
              "id": "rbac权限控制-20-5-1-d1",
              "tag": "Role(命名空间级) vs ClusterRole(集群级)",
              "desc": "Role权限限定在单个namespace内如pod读写；ClusterRole跨namespace或集群级资源如node/pv管理；ClusterRoleBinding授予全集群权限"
            },
            {
              "id": "rbac权限控制-20-5-1-d2",
              "tag": "ServiceAccount",
              "desc": "Pod 身份，绑定 Role 使其可调用 API Server(如 Prometheus 采集指标)"
            },
            {
              "id": "rbac权限控制-20-5-1-d3",
              "tag": "kubectl auth can-i 检查权限",
              "desc": "kubectl auth can-i create pods --as system:serviceaccount:default:my-sa"
            },
            {
              "id": "rbac权限控制-20-5-1-d4",
              "tag": "最小权限原则",
              "desc": "为每个应用创建专用 SA，只授予必需权限"
            }
          ]
        },
        {
          "id": "滚动更新与灰度发布-20-5-2",
          "tag": "滚动更新与灰度发布",
          "desc": "K8s 原生滚动升级组件及高级发布策略",
          "details": [
            {
              "id": "滚动更新与灰度发布-20-5-2-d0",
              "tag": "Deployment 滚动更新",
              "desc": "maxSurge=25%+maxUnavailable=25%，逐步替换旧 Pod"
            },
            {
              "id": "滚动更新与灰度发布-20-5-2-d1",
              "tag": "金丝雀发布",
              "desc": "创建新 Deployment/RS(N replicas=1)接收少量流量验证→通过后更新主 Deployment"
            },
            {
              "id": "滚动更新与灰度发布-20-5-2-d2",
              "tag": "蓝绿部署",
              "desc": "准备两套完整环境(蓝=旧/绿=新)，Service Selector 切换版本"
            },
            {
              "id": "滚动更新与灰度发布-20-5-2-d3",
              "tag": "Argo Rollouts/Flagger",
              "desc": "提供金丝雀/蓝绿/渐进式交付，集成 Ingress Controller 流量分配"
            },
            {
              "id": "滚动更新与灰度发布-20-5-2-d4",
              "tag": "发布失败自动回滚",
              "desc": "Deployment progressDeadlineSeconds 超时自动回滚(.spec.progressDeadlineSeconds)"
            }
          ]
        },
        {
          "id": "弹性伸缩-20-5-3",
          "tag": "弹性伸缩",
          "desc": "HPA 水平扩缩 + VPA 垂直扩缩 + Cluster Autoscaler 集群扩缩",
          "details": [
            {
              "id": "弹性伸缩-20-5-3-d0",
              "tag": "HPA(HorizontalPodAutoscaler)",
              "desc": "CPU/内存/自定义指标→自动调副本数，=ceil(当前副本×当前值/目标值)"
            },
            {
              "id": "弹性伸缩-20-5-3-d1",
              "tag": "VPA(VerticalPodAutoscaler)",
              "desc": "自动调整 Pod requests/limits，分析历史用量推荐值；需重启 Pod"
            },
            {
              "id": "弹性伸缩-20-5-3-d2",
              "tag": "Cluster Autoscaler",
              "desc": "Node 资源不足时自动扩节点，Pod 长时间 Pending 触发；空闲节点缩容"
            },
            {
              "id": "弹性伸缩-20-5-3-d3",
              "tag": "KEDA(Kubernetes Event-driven Autoscaling)：基于事件驱动伸缩(消息队列积压/Cron/数据库查询)，支持伸缩到 0",
              "desc": "KEDA监听外部事件源指标(如Kafka lag/RabbitMQ队列深度)触发Pod伸缩；伸缩到0实现无流量时零资源消耗，比HPA纯CPU指标更智能"
            },
            {
              "id": "弹性伸缩-20-5-3-d4",
              "tag": "Karpenter(AWS)",
              "desc": "新一代 Node 弹性伸缩，直接管理 EC2，比 CA 更快更灵活"
            }
          ]
        },
        {
          "id": "k8s监控与日志-20-5-4",
          "tag": "K8s 监控与日志",
          "desc": "Prometheus 监控 + EFK/Loki 日志的云原生可观测性方案",
          "details": [
            {
              "id": "k8s监控与日志-20-5-4-d0",
              "tag": "Prometheus + Grafana",
              "desc": "cAdvisor 采集容器指标→Prometheus Operator 管理→Grafana 可视化"
            },
            {
              "id": "k8s监控与日志-20-5-4-d1",
              "tag": "监控黄金指标",
              "desc": "延迟/流量/错误/饱和度(RED 方法)，K8s 增加 Pod 重启次数/OOM/调度延迟"
            },
            {
              "id": "k8s监控与日志-20-5-4-d2",
              "tag": "kube-state-metrics",
              "desc": "暴露 K8s 资源对象状态指标(Deployment 副本数/Pod 状态等)"
            },
            {
              "id": "k8s监控与日志-20-5-4-d3",
              "tag": "日志方案",
              "desc": "DaemonSet Fluentd/Fluent Bit 收集容器日志(stdout/stderr)→ES/Kafka/Loki"
            },
            {
              "id": "k8s监控与日志-20-5-4-d4",
              "tag": "Loki 轻量级日志",
              "desc": "类似 Prometheus 标签索引但不对日志全文索引，比 ELK 轻量成本更低"
            },
            {
              "id": "k8s监控与日志-20-5-4-d5",
              "tag": "K9s",
              "desc": "终端 UI 工具，实时查看和管理集群资源，操作效率高"
            }
          ]
        }
      ]
    }
  ]
};

// nginx.js — 二十一、Nginx 高性能 Web 服务器 模块数据
// 此文件由 tools/convert.js 生成，可手动编辑维护

window.__MODULES__ = window.__MODULES__ || {};
window.__MODULES__['nginx'] = {
  "id": "nginx",
  "title": "二十一、Nginx 高性能 Web 服务器",
  "tag": "Nginx",
  "order": 21,
  "icon": "🟢",
  "cssIndex": 20,
  "subs": [
    {
      "id": "21-1-nginx-核心概念-21-0",
      "title": "21.1 Nginx 核心概念",
      "points": [
        {
          "id": "nginx是什么-21-0-0",
          "tag": "Nginx 是什么",
          "desc": "Nginx 是高性能 HTTP/反向代理/IMAP/POP3 服务器，俄罗斯 Igor Sysoev 开发。C 编写，事件驱动异步非阻塞，单机可支撑 5W+ 并发连接",
          "details": [
            {
              "id": "nginx是什么-21-0-0-d0",
              "tag": "核心特性",
              "desc": "高并发(epoll/kqueue 事件驱动)、低内存(每连接仅 2-4KB)、热部署(平滑升级不中断服务)"
            },
            {
              "id": "nginx是什么-21-0-0-d1",
              "tag": "应用场景",
              "desc": "静态资源服务/反向代理与负载均衡/SSL 终结/HTTP 缓存/WebSocket 代理/流媒体"
            },
            {
              "id": "nginx是什么-21-0-0-d2",
              "tag": "Nginx vs Apache",
              "desc": "Nginx 异步事件驱动应对高并发强；Apache 同步多进程/线程模型连接数受限"
            },
            {
              "id": "nginx是什么-21-0-0-d3",
              "tag": "master+worker 架构",
              "desc": "master 管理 worker 进程；worker 实际处理请求(数量=CPU 核数)"
            }
          ]
        },
        {
          "id": "架构与进程模型-21-0-1",
          "tag": "架构与进程模型",
          "desc": "Master-Worker 多进程架构，Master 管理 Worker，Worker 实际处理请求",
          "details": [
            {
              "id": "架构与进程模型-21-0-1-d0",
              "tag": "Master 进程",
              "desc": "root 运行，读取配置/绑定端口/管理 Worker 生命周期/热重载( reload)和平滑升级"
            },
            {
              "id": "架构与进程模型-21-0-1-d1",
              "tag": "Worker 进程",
              "desc": "nobody/非 root 运行，处理请求(epoll 事件驱动)，CPU 亲和性绑定减少上下文切换"
            },
            {
              "id": "架构与进程模型-21-0-1-d2",
              "tag": "Worker 数量",
              "desc": "worker_processes auto(CPU 核数)或设为核数；worker_connections 每 Worker 最大连接数"
            },
            {
              "id": "架构与进程模型-21-0-1-d3",
              "tag": "最大并发连接数",
              "desc": "worker_processes × worker_connections，受系统文件描述符限制(worker_rlimit_nofile)"
            },
            {
              "id": "架构与进程模型-21-0-1-d4",
              "tag": "accept_mutex(默认 off)",
              "desc": "Worker 间锁争抢新连接；off 时所有 Worker 通过 epoll EPOLLEXCLUSIVE 避免惊群"
            }
          ]
        },
        {
          "id": "配置文件结构-21-0-2",
          "tag": "配置文件结构",
          "desc": "nginx.conf 配置层级：全局→events→http→server→location，就近覆盖原则",
          "details": [
            {
              "id": "配置文件结构-21-0-2-d0",
              "tag": "main 全局",
              "desc": "worker_processes/user/error_log/pid"
            },
            {
              "id": "配置文件结构-21-0-2-d1",
              "tag": "events 块",
              "desc": "worker_connections(最大连接数)/use epoll/multi_accept"
            },
            {
              "id": "配置文件结构-21-0-2-d2",
              "tag": "http 块",
              "desc": "include mime.types/default_type/access_log/sendfile/keepalive_timeout"
            },
            {
              "id": "配置文件结构-21-0-2-d3",
              "tag": "server 块(虚拟主机)",
              "desc": "listen 端口/server_name 域名"
            },
            {
              "id": "配置文件结构-21-0-2-d4",
              "tag": "location 块",
              "desc": "URI 匹配规则(前缀/正则/=精确/^~前缀优先)"
            }
          ]
        },
        {
          "id": "location匹配规则-21-0-3",
          "tag": "location 匹配规则",
          "desc": "location 五种匹配符，优先级：精确= > 前缀^~ > 正则~* > 正则~ > 前缀",
          "details": [
            {
              "id": "location匹配规则-21-0-3-d0",
              "tag": "= /path",
              "desc": "精确匹配，命中即停止搜索，优先级最高"
            },
            {
              "id": "location匹配规则-21-0-3-d1",
              "tag": "^~ /path",
              "desc": "前缀匹配，命中后不再匹配正则（^~ /path的详细说明：location 匹配规则中关于^~ /path的内容）"
            },
            {
              "id": "location匹配规则-21-0-3-d2",
              "tag": "~ /regex/",
              "desc": "区分大小写正则匹配（~ /regex/的详细说明：location 匹配规则中关于~ /regex/的内容）"
            },
            {
              "id": "location匹配规则-21-0-3-d3",
              "tag": "~* /regex/",
              "desc": "不区分大小写正则匹配（~* /regex/的详细说明：location 匹配规则中关于~* /regex/的内容）"
            },
            {
              "id": "location匹配规则-21-0-3-d4",
              "tag": "/path",
              "desc": "普通前缀匹配，按最长前缀匹配（/path的详细说明：location 匹配规则中关于/path的内容）"
            },
            {
              "id": "location匹配规则-21-0-3-d5",
              "tag": "无修饰符",
              "desc": "通用匹配，最低优先级（无修饰符的详细说明：location 匹配规则中关于无修饰符的内容）"
            },
            {
              "id": "location匹配规则-21-0-3-d6",
              "tag": "匹配流程",
              "desc": "先精确=→前缀匹配(记最长)→若最长前缀带^~则直接使用→否则按顺序正则→第一个命中正则→无则最长前缀"
            }
          ]
        }
      ]
    },
    {
      "id": "21-2-反向代理与负载均衡-21-1",
      "title": "21.2 反向代理与负载均衡",
      "points": [
        {
          "id": "反向代理核心配置-21-1-0",
          "tag": "反向代理核心配置",
          "desc": "proxy_pass 指令实现反向代理，将请求转发到后端服务器，转发时修改请求头",
          "details": [
            {
              "id": "反向代理核心配置-21-1-0-d0",
              "tag": "proxy_pass http",
              "desc": "//backend; 将请求转发到 upstream backend"
            },
            {
              "id": "反向代理核心配置-21-1-0-d1",
              "tag": "proxy_set_header Host $host; 向后端传递原请求 Host",
              "desc": "默认proxy_pass转发时Host变为上游地址，$host保留客户端原始域名，使后端虚拟主机路由和URL生成基于原域名正确工作"
            },
            {
              "id": "反向代理核心配置-21-1-0-d2",
              "tag": "proxy_set_header X-Real-IP $remote_addr; X-Forwarded-For $proxy_add_x_forwarded_for; 传递真实客户端 IP",
              "desc": "$remote_addr取直连IP为X-Real-IP；$proxy_add_x_forwarded_for追加当前IP到已有链路，后端可追溯完整代理路径获真实客户端IP"
            },
            {
              "id": "反向代理核心配置-21-1-0-d3",
              "tag": "proxy_connect_timeout/read_timeout/send_timeout：超时配置防止上游雪崩",
              "desc": "connect_timeout限与上游建连等待时间；read_timeout限读取上游响应时间；send_timeout限向上游发送请求体时间；超时返回502保护整体可用"
            },
            {
              "id": "反向代理核心配置-21-1-0-d4",
              "tag": "proxy_buffering on/off; 代理缓冲开关(开",
              "desc": "先缓存上游完整响应再返回/关: 流式实时返回)"
            },
            {
              "id": "反向代理核心配置-21-1-0-d5",
              "tag": "proxy_redirect",
              "desc": "修改后端返回的 Location/Refresh 头中的 URL"
            }
          ]
        },
        {
          "id": "负载均衡upstream-21-1-1",
          "tag": "负载均衡 upstream",
          "desc": "upstream 定义后端服务器组，支持多种分配算法和健康检查",
          "details": [
            {
              "id": "负载均衡upstream-21-1-1-d0",
              "tag": "upstream backend { server 10.0.0.1:8080 weight",
              "desc": "3; server 10.0.0.2:8080; }"
            },
            {
              "id": "负载均衡upstream-21-1-1-d1",
              "tag": "负载算法(默认轮询)",
              "desc": "weight(加权轮询)/ip_hash(IP 哈希会话保持)/least_conn(最少连接数)/hash $request_uri(URL 哈希)"
            },
            {
              "id": "负载均衡upstream-21-1-1-d2",
              "tag": "后端参数",
              "desc": "weight 权重、max_fails 最大失败次数、fail_timeout 失败超时、backup 备用、down 标记下线"
            },
            {
              "id": "负载均衡upstream-21-1-1-d3",
              "tag": "ip_hash 原理",
              "desc": "对客户端 IP 哈希固定分发到同一后端，适合有状态应用(需配合 hash)"
            },
            {
              "id": "负载均衡upstream-21-1-1-d4",
              "tag": "健康检查(被动)",
              "desc": "上述 max_fails + fail_timeout 实现；主动健康检查需 nginx_upstream_check_module(商业版)"
            }
          ]
        },
        {
          "id": "超时与重试-21-1-2",
          "tag": "超时与重试",
          "desc": "合理配置超时和重试策略防止故障扩散",
          "details": [
            {
              "id": "超时与重试-21-1-2-d0",
              "tag": "proxy_connect_timeout",
              "desc": "连接后端超时(默认 60s)，超时则尝试下一服务器"
            },
            {
              "id": "超时与重试-21-1-2-d1",
              "tag": "proxy_read_timeout",
              "desc": "读取后端响应超时(默认 60s)，长连接/慢接口适当增大"
            },
            {
              "id": "超时与重试-21-1-2-d2",
              "tag": "proxy_next_upstream",
              "desc": "重试条件 error/timeout/http_500/http_502/http_503；proxy_next_upstream_tries 最大重试次数"
            },
            {
              "id": "超时与重试-21-1-2-d3",
              "tag": "proxy_next_upstream_timeout",
              "desc": "重试总超时时间，超出不再重试（proxy_next_upstream_timeout的详细说明：超时与重试中关于proxy_next_upstream_timeout的内容）"
            },
            {
              "id": "超时与重试-21-1-2-d4",
              "tag": "proxy_send_timeout",
              "desc": "向上游发送请求超时（proxy_send_timeout的详细说明：超时与重试中关于proxy_send_timeout的内容）"
            }
          ]
        },
        {
          "id": "websocket代理-21-1-3",
          "tag": "WebSocket 代理",
          "desc": "Nginx 反向代理 WebSocket 需升级协议头",
          "details": [
            {
              "id": "websocket代理-21-1-3-d0",
              "tag": "关键配置",
              "desc": "proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection 'upgrade';"
            },
            {
              "id": "websocket代理-21-1-3-d1",
              "tag": "原理",
              "desc": "WebSocket 握手是 HTTP Upgrade 请求，Nginx 需显式传递 Upgrade/Connection 头"
            },
            {
              "id": "websocket代理-21-1-3-d2",
              "tag": "proxy_read_timeout 需设较大值(如 3600s)避免 WS 连接空闲被断",
              "desc": "WebSocket长连接可能长时间无数据交互，默认60s超时会断开；设3600s允许1小时空闲保活；还需配Upgrade和Connection头完成协议升级"
            }
          ]
        }
      ]
    },
    {
      "id": "21-3-静态资源服务与缓存-21-2",
      "title": "21.3 静态资源服务与缓存",
      "points": [
        {
          "id": "静态文件服务-21-2-0",
          "tag": "静态文件服务",
          "desc": "Nginx 作为静态资源服务器性能极高，零拷贝 sendfile 减少内核态/用户态拷贝",
          "details": [
            {
              "id": "静态文件服务-21-2-0-d0",
              "tag": "root /path/to/files; 设置文件根目录；location / { root /var/www/html; }",
              "desc": "root指令将URI拼接至目录路径定位文件，如/css/app.css映射为/var/www/html/css/app.css；alias可替换路径用于非根目录映射"
            },
            {
              "id": "静态文件服务-21-2-0-d1",
              "tag": "sendfile on; 零拷贝技术，在内核态直接传输文件不经过用户态",
              "desc": "传统read+write经内核缓冲→用户缓冲→socket缓冲两次拷贝；sendfile由内核DMA直接从文件描述符传输至socket，省去用户态拷贝开销"
            },
            {
              "id": "静态文件服务-21-2-0-d2",
              "tag": "tcp_nopush on; 配合 sendfile，累积足够数据包再发送(减少网络包碎片)",
              "desc": "tcp_nopush启用TCP Cork算法延迟发送，等待足够数据填充MTU大小再推送；配合sendfile将HTTP头和体一并发送减少小包数量降低延迟"
            },
            {
              "id": "静态文件服务-21-2-0-d3",
              "tag": "gzip on; gzip_comp_level 6; gzip_types text/plain text/css application/json; 响应压缩减少传输量",
              "desc": "comp_level 1-9权衡CPU与压缩率，6为常用平衡值；gzip_types必须声明需压缩的MIME类型否则仅压缩text/html；json类型对REST API尤为重要"
            },
            {
              "id": "静态文件服务-21-2-0-d4",
              "tag": "autoindex on; 目录浏览功",
              "desc": "autoindex on; 目录浏览功能(下载站场景)"
            },
            {
              "id": "静态文件服务-21-2-0-d5",
              "tag": "limit_rate 限制下载速度",
              "desc": "limit_rate按字节/秒限单连接传输速率防带宽被少数大文件下载占满；limit_rate_after设前N字节不限速保障小文件快速响应再限大文件"
            }
          ]
        },
        {
          "id": "浏览器缓存控制-21-2-1",
          "tag": "浏览器缓存控制",
          "desc": "expires 和 Cache-Control 头控制浏览器缓存策略",
          "details": [
            {
              "id": "浏览器缓存控制-21-2-1-d0",
              "tag": "expires 30d; 设置强缓存过期时间",
              "desc": "Expires/Cache-Control:max-age=2592000"
            },
            {
              "id": "浏览器缓存控制-21-2-1-d1",
              "tag": "Cache-Control",
              "desc": "no-cache：协商缓存(每次验证)；no-store：不缓存；public/private"
            },
            {
              "id": "浏览器缓存控制-21-2-1-d2",
              "tag": "add_header Cache-Control 'public, max-age",
              "desc": "86400'; HTTP/1.1 标准缓存头"
            },
            {
              "id": "浏览器缓存控制-21-2-1-d3",
              "tag": "静态资源指纹化",
              "desc": "文件名带 hash 配合 expires max 实现永久缓存"
            }
          ]
        },
        {
          "id": "代理缓存proxycache-21-2-2",
          "tag": "代理缓存 proxy_cache",
          "desc": "proxy_cache 将上游响应缓存在磁盘，后续请求直接返回缓存，减轻上游压力",
          "details": [
            {
              "id": "代理缓存proxycache-21-2-2-d0",
              "tag": "proxy_cache_path /data/nginx/cache levels",
              "desc": "1:2 keys_zone=my_cache:10m max_size=10g inactive=60m;"
            },
            {
              "id": "代理缓存proxycache-21-2-2-d1",
              "tag": "proxy_cache_key $scheme$host$request_uri; 定义缓存 Key",
              "desc": "缓存Key区分协议(http/https)、域名和完整URI含查询参数；相同URI不同参数生成不同缓存条目，确保查询参数敏感响应正确缓存隔离"
            },
            {
              "id": "代理缓存proxycache-21-2-2-d2",
              "tag": "proxy_cache_valid 200 302 60m; 指定响应码缓存时间",
              "desc": "200成功响应缓存60分钟；302临时重定向同缓存；404可设1m短缓存防误缓存错误页；未指定码默认10m；配合proxy_cache_min_uses设最少请求次数才缓存"
            },
            {
              "id": "代理缓存proxycache-21-2-2-d3",
              "tag": "proxy_cache_bypass $http_pragma; 特定条件绕过缓存",
              "desc": "bypass变量非0或非空时跳过缓存直接请求上游；常用条件如$http_cache_control=no-cache；proxy_no_cache阻止响应存入缓存与bypass配合使用"
            },
            {
              "id": "代理缓存proxycache-21-2-2-d4",
              "tag": "proxy_cache_purge",
              "desc": "第三方模块 Purge 清除指定缓存"
            }
          ]
        }
      ]
    },
    {
      "id": "21-4-https-与安全配置-21-3",
      "title": "21.4 HTTPS 与安全配置",
      "points": [
        {
          "id": "ssl-tls配置-21-3-0",
          "tag": "SSL/TLS 配置",
          "desc": "Nginx 作为 SSL 终结器，负责 HTTPS 加解密和证书管理",
          "details": [
            {
              "id": "ssl-tls配置-21-3-0-d0",
              "tag": "listen 443 ssl http2; ssl_certificate /path/cert.pem; ssl_certificate_key /path/key.pem;",
              "desc": "ssl_certificate指定PEM格式证书文件含完整证书链；ssl_certificate_key指定对应私钥文件；http2启用HTTP/2多路复用减少TLS握手开销"
            },
            {
              "id": "ssl-tls配置-21-3-0-d1",
              "tag": "ssl_protocols TLSv1.2 TLSv1.3; 禁用 TLSv1.0/1.1(不安全)",
              "desc": "TLSv1.0/1.1存在POODLE/BEAST等已知漏洞已被主流浏览器弃用；TLSv1.3简化握手为1-RTT更安全更快；TLSv1.2兼容旧客户端仍需保留"
            },
            {
              "id": "ssl-tls配置-21-3-0-d2",
              "tag": "ssl_ciphers HIGH",
              "desc": "!aNULL:!MD5; 配置加密套件，最新推荐 ECDHE+AES"
            },
            {
              "id": "ssl-tls配置-21-3-0-d3",
              "tag": "ssl_session_cache shared",
              "desc": "SSL:10m; ssl_session_timeout 10m; SSL 会话缓存减少握手开销"
            },
            {
              "id": "ssl-tls配置-21-3-0-d4",
              "tag": "ssl_prefer_server_ciphers on; 优先使用服务端加密套件",
              "desc": "开启后服务端按ssl_ciphers列表顺序选择套件而非客户端偏好，防止客户端选择弱套件如RC4；配合ssl_ciphers指定ECDHE+AESGCM强套件优先"
            },
            {
              "id": "ssl-tls配置-21-3-0-d5",
              "tag": "HTTP 强制 HTTPS",
              "desc": "return 301 https://$host$request_uri;"
            }
          ]
        },
        {
          "id": "安全头配置-21-3-1",
          "tag": "安全头配置",
          "desc": "HTTP 安全响应头提升应用安全性",
          "details": [
            {
              "id": "安全头配置-21-3-1-d0",
              "tag": "add_header Strict-Transport-Security 'max-age",
              "desc": "63072000; includeSubDomains; preload'; HSTS 强制 HTTPS"
            },
            {
              "id": "安全头配置-21-3-1-d1",
              "tag": "add_header X-Frame-Options 'SAMEORIGIN'; 防点击劫持",
              "desc": "SAMEORIGIN仅允许同源页面iframe嵌入；DENY完全禁止嵌入；ALLOW-FROM指定白名单(已弃用)；防止恶意站点iframe覆盖透明按钮诱骗用户点击"
            },
            {
              "id": "安全头配置-21-3-1-d2",
              "tag": "add_header X-Content-Type-Options 'nosniff'; 防 MIME 类型嗅探",
              "desc": "nosniff阻止浏览器猜测文件实际类型，强制按Content-Type声明处理；防止将上传的text文件误执行为JS/html，降低XSS和内容注入风险"
            },
            {
              "id": "安全头配置-21-3-1-d3",
              "tag": "add_header X-XSS-Protection '1; mode",
              "desc": "block'; XSS 过滤器(旧浏览器)"
            },
            {
              "id": "安全头配置-21-3-1-d4",
              "tag": "add_header Content-Security-Policy 'default-src self'; CSP 内容安全策略防 XSS",
              "desc": "default-src self限制所有资源仅加载同源；script-src可进一步限制JS来源禁止inline；report-uri配置违规上报地址；CSP是防XSS注入的核心防线"
            },
            {
              "id": "安全头配置-21-3-1-d5",
              "tag": "add_header Referrer-Policy 'strict-origin-when-cross-origin'; 控制 Referer 信息",
              "desc": "同源请求发送完整Referer；跨源仅发送Origin(不含路径)；HTTPS→HTTP不发送；平衡隐私保护与统计需求，比no-referrer保留更多合法分析数据"
            }
          ]
        },
        {
          "id": "访问控制与限流-21-3-2",
          "tag": "访问控制与限流",
          "desc": "ngx_http_limit_req_module 和 limit_conn_module 实现请求频率和并发连接限制",
          "details": [
            {
              "id": "访问控制与限流-21-3-2-d0",
              "tag": "limit_req_zone $binary_remote_addr zone",
              "desc": "req:10m rate=10r/s; 定义限制区域(单 IP 10r/s)"
            },
            {
              "id": "访问控制与限流-21-3-2-d1",
              "tag": "limit_req zone",
              "desc": "req burst=20 nodelay; 应用限制，burst 突发容量，nodelay 立即处理"
            },
            {
              "id": "访问控制与限流-21-3-2-d2",
              "tag": "limit_conn_zone $binary_remote_addr zone",
              "desc": "conn:10m; limit_conn conn 10; 限制单 IP 并发连接"
            },
            {
              "id": "访问控制与限流-21-3-2-d3",
              "tag": "allow/deny",
              "desc": "IP 黑白名单(allow 192.168.0.0/24; deny all;)"
            },
            {
              "id": "访问控制与限流-21-3-2-d4",
              "tag": "ngx_http_auth_basic_module",
              "desc": "HTTP Basic 认证(auth_basic 'Restricted'; auth_basic_user_file /path/htpasswd;)"
            },
            {
              "id": "访问控制与限流-21-3-2-d5",
              "tag": "geo+map 模块",
              "desc": "根据 IP 归因区域+变量映射实现 GEO 访问控制"
            }
          ]
        }
      ]
    },
    {
      "id": "21-5-nginx-性能优化-21-4",
      "title": "21.5 Nginx 性能优化",
      "points": [
        {
          "id": "系统层面优化-21-4-0",
          "tag": "系统层面优化",
          "desc": "内核参数和系统资源调整提升 Nginx 并发能力",
          "details": [
            {
              "id": "系统层面优化-21-4-0-d0",
              "tag": "worker_connections 值配合 worker_rlimit_nofile 调大；ulimit -n 65535",
              "desc": "最大并发=worker_processes×worker_connections；rlimit_nofile需≥worker_connections避免文件描述符耗尽；系统ulimit也需同步调大否则连接被OS拒绝"
            },
            {
              "id": "系统层面优化-21-4-0-d1",
              "tag": "内核参数调优",
              "desc": "net.core.somaxconn 增大监听队列/ net.ipv4.tcp_tw_reuse 快速复用 TIME_WAIT"
            },
            {
              "id": "系统层面优化-21-4-0-d2",
              "tag": "sendfile + tcp_nopush + tcp_nodelay 组合优化文件传输性能",
              "desc": "sendfile零拷贝内核直传；tcp_nopush延迟发送凑满包减少碎片；tcp_nodelay禁用Nagle算法小包立即发；三者配合大文件高效传输小响应低延迟"
            },
            {
              "id": "系统层面优化-21-4-0-d3",
              "tag": "Open File Cache",
              "desc": "open_file_cache max=10000 inactive=60s; open_file_cache_valid 80s; 缓存文件元数据"
            },
            {
              "id": "系统层面优化-21-4-0-d4",
              "tag": "DNS 解析缓存",
              "desc": "resolver 8.8.8.8 valid=300s; 配合 proxy_pass 中的动态域名"
            }
          ]
        },
        {
          "id": "连接与请求处理优化-21-4-1",
          "tag": "连接与请求处理优化",
          "desc": "Worker 处理模型和连接参数调优",
          "details": [
            {
              "id": "连接与请求处理优化-21-4-1-d0",
              "tag": "multi_accept on; 一次 Accept 所有新连接(高并发小请求开启)",
              "desc": "开启后worker一次epoll_wait处理全部待Accept连接而非逐个；高并发短连接场景减少Accept队列溢出；事件模型为epoll时效果显著kqueue模式差异不大"
            },
            {
              "id": "连接与请求处理优化-21-4-1-d1",
              "tag": "keepalive_timeout 65; keepalive_requests 100; 单长连接最大请求数",
              "desc": "timeout控制长连接空闲保活时长；requests限制单连接最大请求数防连接过久占用资源；上游也需配keepalive使Nginx与后端复用连接减少TCP建连开销"
            },
            {
              "id": "连接与请求处理优化-21-4-1-d2",
              "tag": "上游连接池 keepalive",
              "desc": "upstream 内 keepalive 32; proxy_http_version 1.1; proxy_set_header Connection '';"
            },
            {
              "id": "连接与请求处理优化-21-4-1-d3",
              "tag": "worker_cpu_affinity 绑定 worker 到固定 CPU 核减少上下文切换",
              "desc": "每个worker绑定专属CPU核避免跨核迁移导致缓存失效和切换开销；auto模式由Nginx自动分配；多核服务器手动绑定提升吞吐稳定性"
            },
            {
              "id": "连接与请求处理优化-21-4-1-d4",
              "tag": "accept_mutex off; 高版本 Nginx 下避免锁竞争(使用 EPOLLEXCLUSIVE)",
              "desc": "accept_mutex互斥锁防惊群效应但引入锁开销；Nginx1.11.3+epoll默认用EPOLLEXCLUSIVE内核级排他唤醒替代互斥锁；高并发下关闭mutex减少锁争用"
            },
            {
              "id": "连接与请求处理优化-21-4-1-d5",
              "tag": "减少日志 IO",
              "desc": "access_log off; 或 access_log buffer=64k flush=5s; 缓冲写入"
            }
          ]
        },
        {
          "id": "压缩与缓存-21-4-2",
          "tag": "压缩与缓存",
          "desc": "gzip 压缩和缓存策略减少带宽和延迟",
          "details": [
            {
              "id": "压缩与缓存-21-4-2-d0",
              "tag": "gzip on; gzip_min_length 1024; 小于 1KB 不压缩",
              "desc": "小文件压缩后可能反而变大(压缩头+数据)且浪费CPU；min_length设1024字节阈值仅压缩超过1KB的响应；配合gzip_buffers调整压缩缓冲区大小"
            },
            {
              "id": "压缩与缓存-21-4-2-d1",
              "tag": "gzip_comp_level 5~6 平衡 CPU 和压缩率(默认 1)",
              "desc": "级别1压缩最快但压缩率低约30%；级别9最慢压缩率约50%；5~6是性价比最优区间压缩率约45%且CPU消耗适中；生产环境不推荐超过6"
            },
            {
              "id": "压缩与缓存-21-4-2-d2",
              "tag": "gzip_types 按需指定(REST API 常用 application/json)；gzip_vary on 添加 Vary: Accept-Encoding",
              "desc": "默认仅压缩text/html必须显式添加json/css/js/svg等类型；gzip_vary on插入Vary头告知CDN/缓存按Accept-Encoding分别存储压缩和非压缩版本"
            },
            {
              "id": "压缩与缓存-21-4-2-d3",
              "tag": "gzip_proxied any; 代理请求也压缩",
              "desc": "默认代理请求不压缩；any对所有经过代理的请求启用压缩；配合proxy_set_header Accept-Encoding使上游响应经Nginx二次压缩再返客户端"
            },
            {
              "id": "压缩与缓存-21-4-2-d4",
              "tag": "反向代理缓存策略",
              "desc": "Cache-Control 头 + proxy_cache 组合；热点 API 持久化缓存"
            }
          ]
        }
      ]
    },
    {
      "id": "21-6-nginx-高级配置-21-5",
      "title": "21.6 Nginx 高级配置",
      "points": [
        {
          "id": "rewrite重写与重定向-21-5-0",
          "tag": "rewrite 重写与重定向",
          "desc": "rewrite 指令实现 URL 重写和重定向",
          "details": [
            {
              "id": "rewrite重写与重定向-21-5-0-d0",
              "tag": "rewrite regex replacement {flag}; flag: last(重新匹配 location)/break(停止当前)/redirect(302)/permanent(301)",
              "desc": "last重写后重新location匹配可能循环需控制次数；break重写后继续当前location内规则不重新匹配；redirect临时302浏览器不缓存；permanent永久301浏览器缓存"
            },
            {
              "id": "rewrite重写与重定向-21-5-0-d1",
              "tag": "return 301 https",
              "desc": "//$host$request_uri; 相比 rewrite 更高效(无正则开销)"
            },
            {
              "id": "rewrite重写与重定向-21-5-0-d2",
              "tag": "if 陷阱",
              "desc": "if($http_user_agent){...} 会造成意外行为，优先用 map/return"
            },
            {
              "id": "rewrite重写与重定向-21-5-0-d3",
              "tag": "常用场景",
              "desc": "HTTP→HTTPS 跳转、www→non-www 统一域名、老旧 URL 兼容迁移"
            }
          ]
        },
        {
          "id": "跨域cors配置-21-5-1",
          "tag": "跨域 CORS 配置",
          "desc": "Nginx 配置 CORS 响应头解决跨域问题",
          "details": [
            {
              "id": "跨域cors配置-21-5-1-d0",
              "tag": "简单 CORS",
              "desc": "add_header Access-Control-Allow-Origin *; add_header Access-Control-Allow-Methods GET,POST,OPTIONS;"
            },
            {
              "id": "跨域cors配置-21-5-1-d1",
              "tag": "预检请求(OPTIONS)处理",
              "desc": "if($request_method=OPTIONS){return 204;}"
            },
            {
              "id": "跨域cors配置-21-5-1-d2",
              "tag": "Access-Control-Allow-Headers 声明允许自定义请求头",
              "desc": "预检OPTIONS请求中浏览器检查此头判断自定义头(如x-token/Authorization)是否被允许；未声明的头触发预检失败导致跨域请求被浏览器拦截"
            },
            {
              "id": "跨域cors配置-21-5-1-d3",
              "tag": "Access-Control-Allow-Credentials true 配合前端 withCredentials 支持带 Cookie 跨域(此时 Origin 不能*)",
              "desc": "credentials=true允许跨域携带Cookie和Auth头；安全要求此时Allow-Origin必须为具体域名不能为*；Allow-Headers和Methods也不能为*需逐一列举"
            },
            {
              "id": "跨域cors配置-21-5-1-d4",
              "tag": "Access-Control-Max-Age 缓存预检结果时间减少 OPTIONS 请求",
              "desc": "设Max-Age为3600(1小时)使浏览器缓存预检结果，同源跨域请求1小时内免发OPTIONS直接发送实际请求；减轻服务器预检负担提升跨域响应速度"
            }
          ]
        },
        {
          "id": "流媒体与长连接-21-5-2",
          "tag": "流媒体与长连接",
          "desc": "Nginx 支持 RTMP/HLS/WebSocket/SSE 等流媒体和长连接协议",
          "details": [
            {
              "id": "流媒体与长连接-21-5-2-d0",
              "tag": "RTMP 模块( nginx-rtmp-module)",
              "desc": "支持 RTMP 推流/HLS 拉流，视频直播"
            },
            {
              "id": "流媒体与长连接-21-5-2-d1",
              "tag": "WebSocket 代理",
              "desc": "proxy_http_version 1.1 + Upgrade/Connection 头"
            },
            {
              "id": "流媒体与长连接-21-5-2-d2",
              "tag": "SSE(Server-Sent Events)",
              "desc": "proxy_buffering off; 关闭代理缓存实现流式推送"
            },
            {
              "id": "流媒体与长连接-21-5-2-d3",
              "tag": "gRPC 代理",
              "desc": "grpc_pass grpc://backend; HTTP/2 长连接 RPC"
            },
            {
              "id": "流媒体与长连接-21-5-2-d4",
              "tag": "TCP/UDP 四层代理(stream 模块)",
              "desc": "stream{server{listen 3306;proxy_pass mysql;}}代理数据库"
            }
          ]
        },
        {
          "id": "日志配置与切割-21-5-3",
          "tag": "日志配置与切割",
          "desc": "access_log 与 error_log 配置 + logrotate 日志切割",
          "details": [
            {
              "id": "日志配置与切割-21-5-3-d0",
              "tag": "access_log /var/log/nginx/access.log combined buffer",
              "desc": "64k flush=5s; 缓冲写入减少 IO"
            },
            {
              "id": "日志配置与切割-21-5-3-d1",
              "tag": "log_format 自定义格式",
              "desc": "log_format json escape=json '{...}'; JSON 格式方便日志收集"
            },
            {
              "id": "日志配置与切割-21-5-3-d2",
              "tag": "error_log 级别",
              "desc": "debug/info/notice/warn/error/crit；不可设 alert/emerg"
            },
            {
              "id": "日志配置与切割-21-5-3-d3",
              "tag": "日志切割",
              "desc": "logrotate 工具 + postrotate 'nginx -s reopen' 定期切割"
            },
            {
              "id": "日志配置与切割-21-5-3-d4",
              "tag": "access_log off; 极端高并发场景关闭访问日志；error_log 始终保留",
              "desc": "关闭access_log省去每请求写磁盘I/O在极端流量下提升吞吐；error_log记录启动失败和运行异常必须保留用于故障排查；可用条件写日志如if=$loggable"
            },
            {
              "id": "日志配置与切割-21-5-3-d5",
              "tag": "分析工具",
              "desc": "GoAccess 实时分析 Nginx 日志生成 HTML 报告"
            }
          ]
        },
        {
          "id": "lua扩展openresty-21-5-4",
          "tag": "Lua 扩展 OpenResty",
          "desc": "OpenResty = Nginx + LuaJIT，可在 Nginx 内直接编写业务逻辑",
          "details": [
            {
              "id": "lua扩展openresty-21-5-4-d0",
              "tag": "核心组件",
              "desc": "ngx_lua 模块嵌入 LuaJIT，在 Nginx 各阶段(rewrite/access/content/log)执行 Lua 脚本"
            },
            {
              "id": "lua扩展openresty-21-5-4-d1",
              "tag": "典型应用",
              "desc": "WAF 防火墙(实时拦截恶意请求)、API 网关(鉴权/限流/协议转换)、AB 测试(分流)"
            },
            {
              "id": "lua扩展openresty-21-5-4-d2",
              "tag": "access_by_lua_block",
              "desc": "访问控制(IP 黑名单/JWT 校验)；content_by_lua_block：直接生成响应"
            },
            {
              "id": "lua扩展openresty-21-5-4-d3",
              "tag": "lua-resty-redis/mysql",
              "desc": "Lua 协程非阻塞连接 Redis/MySQL"
            },
            {
              "id": "lua扩展openresty-21-5-4-d4",
              "tag": "性能开销",
              "desc": "LuaJIT 接近 C 语言性能，单请求开销 <0.1ms"
            },
            {
              "id": "lua扩展openresty-21-5-4-d5",
              "tag": "与 API 网关方案选型",
              "desc": "OpenResty 极致性能，Kong/APISIX 功能更完整开发效率更高"
            }
          ]
        }
      ]
    }
  ]
};
