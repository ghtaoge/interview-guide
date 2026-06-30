<template>
  <div class="auth-overlay">
    <div class="auth-card">
      <div class="auth-header">
        <span class="auth-icon">🔐</span>
        <h2>管理员验证</h2>
        <p class="auth-subtitle">请输入密码以访问内容</p>
      </div>
      <div class="auth-body">
        <div class="auth-input-wrap" :class="{ error: errorMsg }">
          <span class="auth-input-icon">🔑</span>
          <input
            v-model="password"
            type="password"
            placeholder="请输入管理员密码"
            class="auth-input"
            @keydown.enter="submit"
          />
          <button v-if="password" class="auth-clear" @click="password = ''">✕</button>
        </div>
        <p v-if="errorMsg" class="auth-error">{{ errorMsg }}</p>
        <button
          class="auth-submit-btn"
          :disabled="verifying"
          @click="submit"
        >
          {{ verifying ? '验证中...' : '验证并进入' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth.js'

const emit = defineEmits(['success'])
const authStore = useAuthStore()
const password = ref('')
const errorMsg = ref('')
const verifying = ref(false)

async function submit() {
  if (!password.value.trim()) {
    errorMsg.value = '密码不能为空'
    return
  }
  errorMsg.value = ''
  verifying.value = true
  try {
    const valid = await authStore.verifyPassword(password.value)
    if (valid) {
      emit('success')
    } else {
      errorMsg.value = '密码错误，请重新输入'
      password.value = ''
    }
  } catch (e) {
    errorMsg.value = '验证失败，请重试'
  } finally {
    verifying.value = false
  }
}
</script>

<style scoped>
.auth-overlay {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: var(--bg); padding: 16px;
}
.auth-card {
  width: 100%; max-width: 380px;
  background: var(--card); border-radius: var(--radius);
  box-shadow: 0 8px 40px rgba(0,0,0,.12); overflow: hidden;
}
.auth-header {
  text-align: center; padding: 28px 24px 16px;
  background: linear-gradient(135deg, #0d9488 0%, #2563eb 50%, #e8833a 100%);
  color: #fff;
}
.auth-icon {
  font-size: 2.2em; display: block; margin-bottom: 8px;
}
.auth-header h2 {
  font-size: 1.2em; font-weight: 600; margin-bottom: 4px; letter-spacing: 1px;
}
.auth-subtitle {
  font-size: .78em; opacity: .7; font-weight: 300;
}
.auth-body {
  padding: 24px 24px 28px;
}
.auth-input-wrap {
  display: flex; align-items: center; gap: 10px;
  background: var(--bg); border-radius: 24px;
  border: 2px solid var(--border); padding: 4px 14px;
  transition: border-color .25s, box-shadow .25s;
}
.auth-input-wrap:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 12px rgba(13,148,136,.2);
}
.auth-input-wrap.error {
  border-color: #ef4444;
  box-shadow: 0 0 8px rgba(239,68,68,.15);
}
.auth-input-icon { font-size: 1em; flex-shrink: 0; opacity: .7 }
.auth-input {
  flex: 1; border: none; outline: none; background: transparent;
  font-size: 15px; color: var(--text); padding: 10px 0;
  caret-color: var(--accent);
}
.auth-input::placeholder { color: var(--text3); opacity: 1 }
.auth-input:-ms-input-placeholder { color: var(--text3) }
.auth-clear {
  width: 24px; height: 24px; border-radius: 50%; border: none;
  background: var(--border); color: var(--text2); cursor: pointer;
  font-size: .7em; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: all .2s;
}
.auth-clear:hover { background: var(--text3); color: var(--card) }
.auth-error {
  font-size: .8em; color: #ef4444; margin-top: 8px; padding-left: 14px;
}
.auth-submit-btn {
  margin-top: 20px; width: 100%; padding: 12px 0;
  border-radius: 24px; border: none; cursor: pointer;
  font-size: 1em; font-weight: 600; letter-spacing: 1px;
  background: linear-gradient(135deg, #0d9488, #2563eb);
  color: #fff; transition: all .3s;
}
.auth-submit-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(13,148,136,.35) }
.auth-submit-btn:disabled { opacity: .6; cursor: not-allowed; transform: none }

/* 移动端 */
@media (max-width: 600px) {
  .auth-card { max-width: 340px }
  .auth-header { padding: 22px 20px 14px }
  .auth-header h2 { font-size: 1.05em }
  .auth-body { padding: 20px 20px 24px }
}
</style>
