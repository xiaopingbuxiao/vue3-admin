
<script>

import { ElButton, ElSpace, } from 'element-plus'
import { defineComponent, } from 'vue'
import { useRouter, } from 'vue-router'
import NotFound from './NotFound'
import ServerError from './ServerError'
import Unauthorized from './Unauthorized'

const ExceptionMap = {
  404: NotFound,
  500: ServerError,
  403: Unauthorized,
}

export default defineComponent({
  name: 'Result',
  props: {
    status: {
      type: Number,
      default: 500,
    },
  },
  setup (props, { slots, }) {
    const routes = useRouter()
    return () => {
      const SVGComponent = ExceptionMap[props.status]
      return (
        <div class="result-component">
          <ElSpace direction="vertical">
            <SVGComponent></SVGComponent>
            {
              slots.default
                ? slots.default()
                : <ElButton type="primary" onClick={() => routes.push({ path: '/', })}>返回首页</ElButton>
            }
          </ElSpace>

        </div>
      )
    }
  },
})
</script>
<style lang="scss" scoped>
.result-component{
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
</style>
