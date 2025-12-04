<template>
  <div class="login_container">
    <!-- element ui 的Layout布局 一个row分为24列，span=12 占12列，
     :xs表示屏幕宽度小于<768px的时候，此col占几列 -->
    <el-row>
      <el-col :span="12" :xs="0">左边</el-col>
      <el-col :span="12" :xs="24">
        <!-- Element UI 的表单 -->
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎登录系统</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :prefix-icon="Lock" v-model="loginForm.password" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" @click="handleLogin">登录</el-button>

          </el-form-item>
        </el-form>

      </el-col>
    </el-row>

  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useUserStore } from '@/stores/user';
import { Lock, User } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';
import { reactive, ref } from 'vue';

//引入pinia
const userStore = useUserStore();
//按钮状态
const loading = ref(false);

//手机用户的账号和密码
let loginForm = reactive({
  username: '',
  password: '',
});

//登录逻辑
const handleLogin = async () => {
  loading.value = true;
  try {
    await userStore.login(loginForm);
    //跳转到首页
    router.push('/');
    ElNotification({
      title: '登录成功',
      type: 'success',
    });
  } catch (error) {
    console.log(error);
    ElNotification({
      title: error.message,
      type: 'error',
    });
  } finally {
    loading.value = false;
  }
}

</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}

.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;

  h1 {
    color: white;
    font-size: 40px;
  }

  h2 {
    color: white;
    font-size: 20px;
    margin: 20px 0;
  }

  .login_btn {
    width: 100%;
  }
}
</style>
