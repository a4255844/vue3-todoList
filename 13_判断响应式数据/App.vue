<template>
  <h2>响应式数据的判断</h2>
</template>

<script lang="ts">
import {defineComponent,ref,isRef, isReactive, reactive, isReadonly, readonly, isProxy} from 'vue'
export default defineComponent({
  setup() {
    // isRef: 检查一个值是否为一个ref对象
    console.log(isRef(ref({})));
    // isReactive: 检查一个对象是否是由reactive创建的响应式对象
    console.log(isReactive(reactive({})));
    // isReadonly: 检查一个对象是否是由readonly 创建的只读代理
    console.log(isReadonly(readonly({})));
    // isProxy: 检查一个对象是否由 reactive 或者 readonly 方法创建的代理
    console.log(isProxy(readonly({})));
    console.log(isProxy(reactive({})));
    
    
    
    return {
      
    }
  } 
})
</script>

<style lang="css" scoped>

 
</style>
