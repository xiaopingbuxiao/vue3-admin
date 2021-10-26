
<template>
  <el-aside :class="['layout-slider', { 'active': !collapse }]">
    <div class="layout-slider_top">
      <img class="logo" src="../assets/logo.png" alt srcset />
    </div>
    <el-menu default-active="2" class="layout-slider_bottom" :collapse="collapse">
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>

import { defineComponent, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const { collapse } = toRefs(store.state.globalState)
    return {
      collapse: collapse
    }
  }
})
</script>

<style lang="scss">
.layout-slider.el-aside {
  width: 64px;
  height: 100%;
  border-right: 1px solid var(--el-border-color-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);

  &.active {
    width: 210px;
  }

  .layout-slider_top {
    height: 60px;
    display: flex;
    align-items: center;
    .logo {
      display: block;
      width: 48px;
    }
  }
  .layout-slider_bottom {
    width: 100%;
    border-right: none; // 去除element menu右边框
  }
}
</style>
