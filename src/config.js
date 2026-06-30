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
    { id: "data-structures", order: 2, tag: "数据结构" },
    { id: "design-patterns", order: 3, tag: "设计模式" },
    { id: "java-io", order: 4, tag: "IO" },
    { id: "java-collection", order: 5, tag: "集合" },
    { id: "java-concurrent", order: 6, tag: "并发" },
    { id: "jvm", order: 7, tag: "JVM" },
    { id: "spring", order: 8, tag: "Spring" },
    { id: "maven", order: 9, tag: "Maven" },
    { id: "netty", order: 10, tag: "Netty" },
    { id: "mysql", order: 11, tag: "MySQL" },
    { id: "redis", order: 12, tag: "Redis" },
    { id: "mongodb", order: 13, tag: "MongoDB" },
    { id: "elasticsearch", order: 14, tag: "ElasticSearch" },
    { id: "rabbitmq-kafka", order: 15, tag: "消息队列" },
    { id: "distributed-system", order: 16, tag: "分布式系统" },
    { id: "high-performance", order: 17, tag: "高性能" },
    { id: "high-availability", order: 18, tag: "高可用" },
    { id: "computer-basic", order: 19, tag: "计算机基础" },
    { id: "computer-network", order: 20, tag: "计算机网络" },
    { id: "git", order: 21, tag: "Git" },
    { id: "cicd", order: 22, tag: "CI/CD" },
    { id: "docker", order: 23, tag: "Docker" },
    { id: "kubernetes", order: 24, tag: "Kubernetes" },
    { id: "nginx", order: 25, tag: "Nginx" },
    { id: "diagnostic-perf", order: 26, tag: "诊断与优化" },
    { id: "javascript", order: 27, tag: "JavaScript" },
    { id: "html-css", order: 28, tag: "HTML与CSS" },
    { id: "vue2", order: 29, tag: "Vue2" },
    { id: "vue3", order: 30, tag: "Vue3" },
    { id: "typescript", order: 31, tag: "TypeScript" },
    { id: "webpack", order: 32, tag: "Webpack" },
    { id: "ai-framework", order: 33, tag: "AI与Agent" },
    { id: "easyexcel", order: 34, tag: "EasyExcel" },
    { id: "scene", order: 35, tag: "场景题" },
    { id: "interview-prep", order: 36, tag: "面试准备" },
    { id: "hr-interview", order: 37, tag: "HR面试" }
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
