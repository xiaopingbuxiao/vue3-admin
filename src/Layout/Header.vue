
<template>
  <el-header class="layout-header" :class="{ 'active': !collapse }">
    <fold class="collapse-icon" @click="collapseToggle" />
    <div class="user-info">
      <el-dropdown>
        <el-space :size="0">
          <el-avatar :size="32" :src="circleUrl"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-space>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { createNamespacedHelpers, useStore } from 'vuex'
import { defineComponent, toRefs } from 'vue'
import { Fold } from '@element-plus/icons'
const { mapMutations } = createNamespacedHelpers('globalState')

export default defineComponent({
  setup () {
    const store = useStore()
    const { collapse } = toRefs(store.state.globalState)

    return {
      collapse: collapse,
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  components: {
    Fold
  },
  methods: {
    ...mapMutations([
      'collapseToggle'
    ])
  }
})

</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color-base);
  &.active {
    .collapse-icon {
      transform: rotate(0);
    }
  }
  .collapse-icon {
    width: 24px;
    cursor: pointer;
    transform: rotate(-180deg);
    transition: transform var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
  }
}
</style>
