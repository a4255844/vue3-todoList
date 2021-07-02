<template>
  <h2>provide 与 inject</h2>
  <p>当前的颜色:{{color}}</p>
  <button @click="color='red'">红色</button>
  <button @click="color='yellow'">黄色</button>
  <button @click="color='green'">绿色</button>
  <hr>
  <Child/>
</template>

<script lang="ts">
import {defineComponent, provide, ref} from 'vue'
import Child from './components/child.vue'
export default defineComponent({
  components:{
    Child
  },
  setup() {
    /* provide和inject 实现跨层级组件通讯,类似自定义事件 */
    const color = ref('red')
    //直接给孙子组件传递数据
    provide('color',color)
    return {
      color
    }
  } 
})
</script>

<style lang="css" scoped>

 
</style>
