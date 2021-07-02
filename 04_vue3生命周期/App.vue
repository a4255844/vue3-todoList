<template>
  <h2>父级组件</h2>
  <button @click="isShow = !isShow">切换</button>
  <br />
   <Child v-if="isShow" />
</template>

<script lang="ts">
import {defineComponent,reactive,ref, } from 'vue'
import Child from './components/child.vue'
export default defineComponent({
  components:{
    Child
  },
  setup() {
    const isShow = ref(true)
   
    
    return {
      isShow  
    }
  },
})
</script>
