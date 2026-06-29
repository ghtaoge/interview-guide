// config.js — 全局配置
// 管理员密码使用 SHA-256 + 盐值哈希存储
// 生成密码哈希: 在浏览器 console 中运行
//   async function h(p){const s="javaguide2026salt";const d=new TextEncoder().encode(s+p);
//     const b=await crypto.subtle.digest("SHA-256",d);return "sha256$javaguide2026salt$"+
//     Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,"0")).join("")}
//   h("你的密码").then(console.log)

window.__MODULE_CONFIG__ = {
  modules: [
    { id: "java-basic", file: "data/java-basic.js", order: 1, tag: "Java 基础" },
    { id: "java-collection", file: "data/java-basic.js", order: 2, tag: "集合" },
    { id: "java-concurrent", file: "data/java-basic.js", order: 3, tag: "并发" },
    { id: "jvm", file: "data/java-basic.js", order: 4, tag: "JVM" },
    { id: "java-io", file: "data/java-basic.js", order: 5, tag: "IO" },
    { id: "computer-basic", file: "data/computer-basic.js", order: 6, tag: "计算机基础" },
    { id: "mysql", file: "data/mysql.js", order: 7, tag: "MySQL" },
    { id: "redis", file: "data/redis.js", order: 8, tag: "Redis" },
    { id: "spring", file: "data/spring.js", order: 9, tag: "Spring" },
    { id: "system-design", file: "data/system-design.js", order: 10, tag: "分布式" },
    { id: "computer-network", file: "data/system-design.js", order: 11, tag: "计算机网络" },
    { id: "javascript", file: "data/frontend-js-vue.js", order: 12, tag: "JavaScript" },
    { id: "vue2", file: "data/frontend-js-vue.js", order: 13, tag: "Vue2" },
    { id: "vue3", file: "data/frontend-js-vue.js", order: 14, tag: "Vue3" },
    { id: "typescript", file: "data/frontend-js-vue.js", order: 15, tag: "TypeScript" },
    { id: "scene", file: "data/scene-html-webpack.js", order: 16, tag: "场景题" },
    { id: "html-css", file: "data/scene-html-webpack.js", order: 17, tag: "HTML与CSS" },
    { id: "webpack", file: "data/scene-html-webpack.js", order: 18, tag: "Webpack" },
    { id: "docker", file: "data/devops.js", order: 19, tag: "Docker" },
    { id: "kubernetes", file: "data/devops.js", order: 20, tag: "Kubernetes" },
    { id: "nginx", file: "data/devops.js", order: 21, tag: "Nginx" },
    { id: "distributed-system", file: "data/distributed.js", order: 22, tag: "分布式系统" },
    { id: "high-performance", file: "data/distributed.js", order: 23, tag: "高性能" },
    { id: "high-availability", file: "data/distributed.js", order: 24, tag: "高可用" },
    { id: "interview-prep", file: "data/distributed.js", order: 25, tag: "面试准备" },
    { id: "elasticsearch", file: "data/db-middleware.js", order: 26, tag: "ElasticSearch" },
    { id: "mongodb", file: "data/db-middleware.js", order: 27, tag: "MongoDB" },
    { id: "postgresql", file: "data/db-middleware.js", order: 28, tag: "PostgreSQL" },
    { id: "maven", file: "data/db-middleware.js", order: 29, tag: "Maven" },
    { id: "minio", file: "data/db-middleware.js", order: 30, tag: "Minio" },
    { id: "netty", file: "data/db-middleware.js", order: 31, tag: "Netty" },
    { id: "ai-framework", file: "data/ai-msg.js", order: 32, tag: "AI与Agent" },
    { id: "hr-interview", file: "data/tools-spec.js", order: 33, tag: "HR面试" },
    { id: "rabbitmq-kafka", file: "data/ai-msg.js", order: 34, tag: "消息队列" },
    { id: "nacos-sentinel", file: "data/ai-msg.js", order: 35, tag: "Nacos/Sentinel" },
    { id: "dubbo", file: "data/tools-spec.js", order: 36, tag: "Dubbo" },
    { id: "diagnostic-tools", file: "data/tools-spec.js", order: 37, tag: "诊断工具" },
    { id: "easyexcel", file: "data/tools-spec.js", order: 38, tag: "EasyExcel" },
    { id: "coding-standards", file: "data/tools-spec.js", order: 39, tag: "编程规范" },
    { id: "performance-optimization", file: "data/tools-spec.js", order: 40, tag: "性能优化" },
    { id: "data-structures", file: "data/tools-spec.js", order: 41, tag: "数据结构" },
    { id: "git", file: "data/devops.js", order: 42, tag: "Git" },
    { id: "cicd", file: "data/devops.js", order: 43, tag: "CI/CD" }
  ],
  admin: {
    // 替换下方哈希值为你的实际密码哈希
    // 盐值: javaguide2026salt
    // 默认密码: 1996
    passwordHash: "sha256$javaguide2026salt$69928682c0dbb7e5475bc36d858a8ba84861185265e145814e64fb8de44d93ed",
    sessionDuration: 3600000
  },
  ui: {
    title: "全栈面试宝典",
    version: "2.8"
  }
};