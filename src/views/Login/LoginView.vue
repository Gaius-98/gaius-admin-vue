<template>
  <div class="login">
    <div
      class="login-left"
      :style="{
        background: `url(${themeCfg.loginBg})`,
        backgroundSize: '100% 100%'
      }"
    ></div>
    <div class="login-right">
      <div class="project-title">{{ themeCfg.projectName }}</div>
      <div class="login-right-form">
        <div class="form-title">用户登录</div>
        <a-form :model="authForm" :label-col="{ span: 8 }" hideRequiredMark @finish="onLogin">
          <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入账号' }]"
          >
            <a-input v-model:value="authForm.username" />
          </a-form-item>
          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
            <a-input-password v-model:value="authForm.password" />
          </a-form-item>
          <a-form-item
            label="验证码"
            name="captcha"
            :rules="[{ required: true, message: '请输入验证码' }]"
          >
            <a-input v-model:value="authForm.captcha">
              <template #addonAfter>
                <div v-html="captchaSvg" @click="getCaptcha()" style="height: 100%"></div>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit" style="width: 100%"> 登录 </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import api from './api'
import { useRouter } from 'vue-router'
import auth from '@/utils/auth'
const systemStore = useSystemStore()
const { themeCfg } = storeToRefs(systemStore)
const authForm = reactive({
  username: '',
  password: '',
  captcha: ''
})
const router = useRouter()
const onLogin = () => {
  api.login(authForm).then((res) => {
    const { code, data } = res
    if (code == 200) {
      auth.set(data)
      router.push('/home')
    }
  })
}
const captchaSvg = ref('')
const getCaptcha = async () => {
  const { data } = await api.getCaptcha()
  captchaSvg.value = data
}
onMounted(() => {
  getCaptcha()
})
</script>
<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  .login-left {
    flex: 4;
    height: 100%;
  }
  .login-right {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 100%;
    .project-title {
      font-size: 25px;
      color: v-bind('themeCfg.colorPrimary');
    }
    .login-right-form {
      width: calc(100% - 40px);
      padding: 20px;
      .form-title {
        font-size: 25px;
        text-align: center;
        color: v-bind('themeCfg.colorPrimary');
        padding: 20px;
      }
    }
  }
}
</style>
