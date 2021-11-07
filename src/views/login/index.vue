
<template>
  <div class="login-view">
    <div class="login-wrapper">
      <div class="login-title">后台管理系统</div>
      <el-form ref="formInstance" :rules="rules" :model="loginInfo">
        <el-form-item prop="name">
          <el-input v-model="loginInfo.name" placeholder="用户名：admin">
            <template #prefix>
              <SvgIcon iconClass="user"></SvgIcon>
            </template>
            <template #suffix>
              <SvgIcon @click="clearInput" iconClass="close"></SvgIcon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginInfo.password" :type="passwordAttr.type" placeholder="密码：123456">
            <template #prefix>
              <SvgIcon iconClass="password"></SvgIcon>
            </template>
            <template #suffix>
              <SvgIcon @click="toggle" :iconClass="passwordAttr.icon"></SvgIcon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>

import { ref, computed, reactive, } from 'vue'
import { useRouter, } from 'vue-router'

const type = ref(false)
const toggle = () => {
  type.value = !type.value
}
const passwordAttr = computed(() => {
  return {
    type: type.value ? 'text' : 'password',
    icon: type.value ? 'eye-open' : 'eye-close',
  }
})

const loginInfo = reactive({ name: '', password: '', })
const clearInput = () => {
  loginInfo.name = ''
}

const router = useRouter()

const formInstance = ref()
const onSubmit = async () => {
  try {
    await formInstance.value.validate()
    router.push({ path: '/home', })
  } catch (error) {
  }
}

const rules = {
  name: [
    { required: true, message: '用户名不能为空', trigger: 'blur', }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur', }
  ],
}

</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/bg.svg");
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .login-title {
    padding: 20px 0;
    font-size: 24px;
  }
  .placeholder-icon {
    display: flex;
    align-items: center;
    padding: 0 4px;
  }
  .login-wrapper {
    width: 320px;
  }
}
</style>
