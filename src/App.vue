<template>
  <h2>测试</h2>
  <el-button type="primary" size="default" :icon="Check" @click="handleLogin">测试登录接口</el-button>

</template>

<script setup lang="ts">
import type { LoginParams, LoginResult, UserInfo } from '@/api/user';
import { getUserInfo, login } from '@/api/user';
import { Check } from '@element-plus/icons-vue';
import { ref } from 'vue';

//模拟登录
const loginData = ref<LoginParams>({
  username: 'admin',
  password: '123456777',
})

const handleLogin = async () => {
  try {
    const res: LoginResult = await login(loginData.value)
    console.log(res)

    const userInfo: UserInfo = await getUserInfo()
    console.log(userInfo)

  } catch (error) {
    // 处理错误  如果response 返回的不是200 会被响应拦截器抛出错误  可以在这里处理错误
    console.error(error)
  }
}

</script>

<style lang="scss" scoped>
h2 {
  color: $primary-color;
}
</style>
