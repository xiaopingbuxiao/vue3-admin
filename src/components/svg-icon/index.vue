<template>
  <svg class="svg-icon">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
import { defineComponent, computed, } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
  setup (props) {
    const iconName = computed(() => {
      return `#icon-${props.iconClass}`
    })
    return {
      iconName,
    }
  },
})

</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
