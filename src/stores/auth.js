import { ref } from 'vue'
import { defineStore } from 'pinia'
import { moduleConfig } from '../config.js'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  function checkSession() {
    const stored = localStorage.getItem('javaguide_auth')
    if (!stored) return false
    try {
      const data = JSON.parse(stored)
      if (!data.authenticated) return false
      if (Date.now() - data.authTime > moduleConfig.admin.sessionDuration) {
        localStorage.removeItem('javaguide_auth')
        return false
      }
      isAuthenticated.value = true
      return true
    } catch (e) {
      localStorage.removeItem('javaguide_auth')
      return false
    }
  }

  async function verifyPassword(password) {
    const parts = moduleConfig.admin.passwordHash.split('$')
    if (parts.length !== 3) return false
    const salt = parts[1]
    const expectedHash = parts[2]
    const input = salt + password
    const buffer = new TextEncoder().encode(input)
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer)
    const hashHex = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0')).join('')
    if (hashHex === expectedHash) {
      isAuthenticated.value = true
      localStorage.setItem('javaguide_auth', JSON.stringify({
        authenticated: true, authTime: Date.now()
      }))
      return true
    }
    return false
  }

  return { isAuthenticated, checkSession, verifyPassword }
})
