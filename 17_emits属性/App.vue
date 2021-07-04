<template>
  <h2>17_emits属性</h2>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  //用来校验自定义事件,清晰的展示事件列表
  emits:{
     // 没有验证函数
     click: null,
     //带验证的函数,返回一个布尔值,通过发送的数据来进行校验
     submit: payload => {
      if (payload.email && payload.password) {
        return true
      } else {
        console.warn(`Invalid submit event payload!`)
        return false
      }
    }
  },
  setup(props,context) {
    //发送事件
    context.emit('submit',{
      email :'esa',
      // password:123123
    })
    return {}
  } 
})
</script>

<style lang="css" scoped>

 
</style>
