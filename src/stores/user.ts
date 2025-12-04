import { loginApi, type LoginParams, type LoginResult } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  //数据
  //token在登录成功之后
  const token = ref(localStorage.getItem('token') || '')
  //业务逻辑
  const login = async (params: LoginParams) => {
    try {
      const result = await loginApi(params)
      const accessToken = result.data?.token
      if (accessToken) {
        token.value = accessToken
        // 持久化到浏览器
        localStorage.setItem('token', accessToken)
      }
      return true
    } catch (error) {
      //response拦截器会把失败的请求抛出错误 在这里会被处理
      return Promise.reject(error) // 把错误抛给组件去显示
    }
  }

  //最后不要忘了return出去
  return {
    token,
    login,
  }
})
