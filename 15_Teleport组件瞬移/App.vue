<template>
   <h2>Teleport组件标签(瞬移)</h2>
   <Child />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Child from './components/child.vue'
export default defineComponent({
  components:{
    Child
  },
  setup() {
    return{}
  } 
})
</script>

<style lang="css" scoped>

 
</style>
