<template>
   <h2 :style="{color}">我是孙子组件</h2>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
export default defineComponent({
  setup() {
    //注入操作
  const color =  inject('color')
    return{
      color
    }
  } 
})
</script>

<style lang="css" scoped>

 
</style>
