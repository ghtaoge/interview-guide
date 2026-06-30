// src/config.js — 模块注册配置 + 管理员配置 (ES模块)
// 管理员密码使用 SHA-256 + 盐值哈希存储
// 生成密码哈希: 在浏览器 console 中运行
//   async function h(p){const s="javaguide2026salt";const d=new TextEncoder().encode(s+p);
//     const b=await crypto.subtle.digest("SHA-256",d);return "sha256$javaguide2026salt$"+
//     Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,"0")).join("")}
//   h("你的密码").then(console.log)

export const moduleConfig = {
  modules: [
    { id: "java-basic", order: 1, tag: "Java 基础" },
    { id: "java-collection", order: 2, tag: "集合" },
    { id: "java-concurrent", order: 3, tag: "并发" },
    { id: "jvm", order: 4, tag: "JVM" },
    { id: "java-io", order: 5, tag: "IO" },
    { id: "computer-basic", order: 6, tag: "计算机基础" },
    { id: "mysql", order: 7, tag: "MySQL" },
    { id: "redis", order: 8, tag: "Redis" },
    { id: "spring", order: 9, tag: "Spring" },
    { id: "system-design", order: 10, tag: "分布式" },
    { id: "computer-network", order: 11, tag: "计算机网络" },
    { id: "javascript", order: 12, tag: "JavaScript" },
    { id: "vue2", order: 13, tag: "Vue2" },
    { id: "vue3", order: 14, tag: "Vue3" },
    { id: "typescript", order: 15, tag: "TypeScript" },
    { id: "scene", order: 16, tag: "场景题" },
    { id: "html-css", order: 17, tag: "HTML与CSS" },
    { id: "webpack", order: 18, tag: "Webpack" },
    { id: "docker", order: 19, tag: "Docker" },
    { id: "kubernetes", order: 20, tag: "Kubernetes" },
    { id: "nginx", order: 21, tag: "Nginx" },
    { id: "distributed-system", order: 22, tag: "分布式系统" },
    { id: "high-performance", order: 23, tag: "高性能" },
    { id: "high-availability", order: 24, tag: "高可用" },
    { id: "interview-prep", order: 25, tag: "面试准备" },
    { id: "elasticsearch", order: 26, tag: "ElasticSearch" },
    { id: "mongodb", order: 27, tag: "MongoDB" },
    { id: "postgresql", order: 28, tag: "PostgreSQL" },
    { id: "maven", order: 29, tag: "Maven" },
    { id: "minio", order: 30, tag: "Minio" },
    { id: "netty", order: 31, tag: "Netty" },
    { id: "ai-framework", order: 32, tag: "AI与Agent" },
    { id: "hr-interview", order: 33, tag: "HR面试" },
    { id: "rabbitmq-kafka", order: 34, tag: "消息队列" },
    { id: "nacos-sentinel", order: 35, tag: "Nacos/Sentinel" },
    { id: "dubbo", order: 36, tag: "Dubbo" },
    { id: "diagnostic-tools", order: 37, tag: "诊断工具" },
    { id: "easyexcel", order: 38, tag: "EasyExcel" },
    { id: "coding-standards", order: 39, tag: "编程规范" },
    { id: "performance-optimization", order: 40, tag: "性能优化" },
    { id: "data-structures", order: 41, tag: "数据结构" },
    { id: "git", order: 42, tag: "Git" },
    { id: "cicd", order: 43, tag: "CI/CD" },
    { id: "design-patterns", order: 44, tag: "设计模式" }
  ],
  admin: {
    // 盐值: javaguide2026salt
    // 默认密码: 1996
    passwordHash: "sha256$javaguide2026salt$69928682c0dbb7e5475bc36d858a8ba84861185265e145814e64fb8de44d93ed",
    sessionDuration: 3600000
  },
  ui: {
    title: "全栈面试宝典",
    version: "3.0"
  }
}
