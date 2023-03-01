<template>
  <div>
    <div class="center">
      <div>---------------------Test----------------------</div>
      <div>
        {{ str }}
      </div>
      <div class="indent">
        {{ num }}
      </div>

      <ComponentOptionApi />
    </div>

    <ComponentCompositionApi />
  </div>
</template>

<script lang="ts">
// Работает без "defineComponent"
import { ref } from 'vue';

import ComponentOptionApi from './components/ComponentOptionApi.vue'
import ComponentCompositionApi from './components/ComponentCompositionApi.vue';

export default {
  components: {
    ComponentOptionApi,
    ComponentCompositionApi
  },
  setup() {
    const str = ref<string>('str')

    const a: number = 3
    // a = '4'

    // str.value = 3
    console.log(str.value)

    return { str }
  },
  data() {
    return {
      num: 5 as number
    }
  }
}
</script>

<!-- Как можно -->
<!--

<script setup lang="ts">
</script>

<script lang="ts">
export default {
    components: {},
    setup() {},
    data() {return {}},
}
</script>

-->

<style scoped>
.center {
  text-align: center;
}

.indent {
  margin-bottom: 10px;
}
</style>
