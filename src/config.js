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
    { id: "computer-network", order: 10, tag: "计算机网络" },
    { id: "javascript", order: 11, tag: "JavaScript" },
    { id: "vue2", order: 12, tag: "Vue2" },
    { id: "vue3", order: 13, tag: "Vue3" },
    { id: "typescript", order: 14, tag: "TypeScript" },
    { id: "scene", order: 15, tag: "场景题" },
    { id: "html-css", order: 16, tag: "HTML与CSS" },
    { id: "webpack", order: 17, tag: "Webpack" },
    { id: "docker", order: 18, tag: "Docker" },
    { id: "kubernetes", order: 19, tag: "Kubernetes" },
    { id: "nginx", order: 20, tag: "Nginx" },
    { id: "distributed-system", order: 21, tag: "分布式系统" },
    { id: "high-performance", order: 22, tag: "高性能" },
    { id: "high-availability", order: 23, tag: "高可用" },
    { id: "interview-prep", order: 24, tag: "面试准备" },
    { id: "elasticsearch", order: 25, tag: "ElasticSearch" },
    { id: "mongodb", order: 26, tag: "MongoDB" },
    { id: "maven", order: 27, tag: "Maven" },
    { id: "netty", order: 28, tag: "Netty" },
    { id: "ai-framework", order: 29, tag: "AI与Agent" },
    { id: "hr-interview", order: 30, tag: "HR面试" },
    { id: "rabbitmq-kafka", order: 31, tag: "消息队列" },
    { id: "diagnostic-perf", order: 32, tag: "诊断与优化" },
    { id: "easyexcel", order: 33, tag: "EasyExcel" },
    { id: "data-structures", order: 34, tag: "数据结构" },
    { id: "git", order: 35, tag: "Git" },
    { id: "cicd", order: 36, tag: "CI/CD" },
    { id: "design-patterns", order: 37, tag: "设计模式" }
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
