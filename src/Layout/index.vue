
<template>
  <el-container class="laylout">
    <Slider></Slider>
    <el-container direction="vertical">
      <VHeader></VHeader>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, } from 'vue'
import Header from './Header.vue'
import Slider from './Slider.vue'
export default defineComponent({
  data () {
    return {
      status: 404,
    }
  },
  components: {
    Slider,
    VHeader: Header,
  },
})
</script>

<style lang="scss" scoped>
.laylout {
  height: 100%;
}
</style>
