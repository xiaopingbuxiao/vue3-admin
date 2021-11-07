
<template>
  <el-space wrap>
    <img class="logo" v-if="!collapse" src="~@/assets/logo.png" alt srcset />
    <el-tag :type="env.type">{{ env.env }}</el-tag>
  </el-space>
</template>
<script>
import { defineComponent, toRefs, reactive, } from 'vue'
import { useStore, } from 'vuex'
import config from '../../config'

export default defineComponent({
  setup () {
    const store = useStore()
    const { collapse, } = toRefs(store.state.globalState)
    const env = config.env === 'prod'
      ? reactive({ env: config.env, type: 'danger', })
      : reactive({ env: config.env, type: '', })
    return {
      collapse: collapse,
      env,
    }
  },
})
</script>
