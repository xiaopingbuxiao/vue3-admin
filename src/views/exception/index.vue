
<script>

import { defineComponent } from 'vue'
import Result from '../../components/Result/index.vue'

export default defineComponent({
  setup () {
    return () => {
      return <Result status={404}></Result>
    }
  }
})

</script>
