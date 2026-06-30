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
    { id: "java-io", order: 2, tag: "IO" },
    { id: "java-collection", order: 3, tag: "集合" },
    { id: "java-concurrent", order: 4, tag: "并发" },
    { id: "jvm", order: 5, tag: "JVM" },
    { id: "spring", order: 6, tag: "Spring" },
    { id: "netty", order: 7, tag: "Netty" },
    { id: "mysql", order: 8, tag: "MySQL" },
    { id: "redis", order: 9, tag: "Redis" },
    { id: "mongodb", order: 10, tag: "MongoDB" },
    { id: "elasticsearch", order: 11, tag: "ElasticSearch" },
    { id: "rabbitmq-kafka", order: 12, tag: "消息队列" },
    { id: "distributed-system", order: 13, tag: "分布式系统" },
    { id: "high-performance", order: 14, tag: "高性能" },
    { id: "high-availability", order: 15, tag: "高可用" },
    { id: "computer-basic", order: 16, tag: "计算机基础" },
    { id: "computer-network", order: 17, tag: "计算机网络" },
    { id: "git", order: 18, tag: "Git" },
    { id: "maven", order: 19, tag: "Maven" },
    { id: "cicd", order: 20, tag: "CI/CD" },
    { id: "docker", order: 21, tag: "Docker" },
    { id: "kubernetes", order: 22, tag: "Kubernetes" },
    { id: "nginx", order: 23, tag: "Nginx" },
    { id: "diagnostic-perf", order: 24, tag: "诊断与优化" },
    { id: "javascript", order: 25, tag: "JavaScript" },
    { id: "html-css", order: 26, tag: "HTML与CSS" },
    { id: "vue2", order: 27, tag: "Vue2" },
    { id: "vue3", order: 28, tag: "Vue3" },
    { id: "typescript", order: 29, tag: "TypeScript" },
    { id: "webpack", order: 30, tag: "Webpack" },
    { id: "data-structures", order: 31, tag: "数据结构" },
    { id: "design-patterns", order: 32, tag: "设计模式" },
    { id: "ai-framework", order: 33, tag: "AI与Agent" },
    { id: "coding-security", order: 34, tag: "编码安全" },
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
