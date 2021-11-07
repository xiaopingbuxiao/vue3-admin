
<script>

import { defineComponent, } from 'vue'
import Result from '../../components/result/index.vue'

export default defineComponent({
  setup () {
    return () => {
      return <Result status={404}></Result>
    }
  },
})

</script>
