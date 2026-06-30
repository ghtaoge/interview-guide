<template>
  <div class="auth-overlay">
    <div class="auth-card">
      <div class="auth-header">
        <span class="auth-icon">🔐</span>
        <h2>管理员验证</h2>
        <p class="auth-subtitle">请输入密码以访问内容</p>
      </div>
      <div class="auth-body">
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入管理员密码"
          :error-message="errorMsg"
          clearable
          @keydown.enter="submit"
        >
          <template #left-icon>
            <span style="font-size:1em">🔑</span>
          </template>
        </van-field>
        <van-button
          type="primary"
          block
          round
          :loading="verifying"
          loading-text="验证中..."
          @click="submit"
          class="auth-submit-btn"
        >
          验证并进入
        </van-button>
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
  padding: 20px 24px 24px;
}
.auth-submit-btn {
  margin-top: 16px; font-weight: 600;
  background: #0d9488; border-color: #0d9488;
}

/* 修复全局reset对Vant field的影响 */
:deep(.van-field .van-cell__title) { padding: 10px 0 }
:deep(.van-field .van-cell__value) { padding: 10px 0 }
:deep(.van-field .van-field__control) { padding: 0 }
:deep(.van-field .van-field__left-icon) { margin-right: 8px }
:deep(.van-field .van-field__right-icon) { margin-left: 8px }

/* 移动端 */
@media (max-width: 600px) {
  .auth-card { max-width: 340px }
  .auth-header { padding: 22px 20px 14px }
  .auth-header h2 { font-size: 1.05em }
  .auth-body { padding: 16px 20px 20px }
}
</style>
