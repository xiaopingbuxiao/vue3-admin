
<template>
  <div class="login-view">
    <div class="login-wrapper">
      <div class="login-title">后台管理系统</div>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="用户名：admin">
            <template #prefix>
              <el-icon>
                <avatar />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" type="password" placeholder="密码：123456">
            <template #prefix>
              <el-icon>
                <avatar />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
      <SvgIcon iconClass="shouye">

      </SvgIcon>
    </div>
  </div>
</template>

<script>
import { Avatar, } from '@element-plus/icons'

import { defineComponent, } from 'vue'

export default defineComponent({
  setup () {

  },
  data () {
    return {
      form: {
        name: '',
      },
      Avatar,
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
  },
  components: {
    Avatar,
  },
})

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
  .placeholder-icon{
    display: flex;
    align-items: center;
    padding: 0 4px;
  }
  .login-wrapper {
    width: 320px;
  }
}
</style>
