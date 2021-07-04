<template>
   <h2>App父级组件: Suspense组件的使用</h2>
   <Suspense>
     <!-- 异步组件 
          异步组件未加载前,先展示v-slot:fallback模板内的内容
          v-slot: fallback 可简写 #fallback
          异步组件加载完成后展示#default内的内容
          可同时支持多个异步组件,全部加载完后统一展示
      -->
     <template #default>
       <AsyncChild />
       <AsyncCompontent />
     </template>
     <template v-slot:fallback>
       <h2>loading....</h2> 
     </template>
   </Suspense>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent, onErrorCaptured, ref} from 'vue'
// const Child = ()=> import('./components/child.vue') // vue2引入异步组件的方式
const AsyncChild = defineAsyncComponent(   //vue3引入异步组件的方式
  ()=> import('./components/child.vue')
)
import AsyncCompontent from './components/AsyncComponent.vue'
export default defineComponent({
  components:{
    AsyncChild,
    AsyncCompontent
  },
  setup() {
    const error =ref<Error | null>(null)
    //用于捕获异步组件Suspense的错误
    onErrorCaptured((e)=>{
      error.value = e
      return true  //传递错误
    })
    return{}
  } 
})
</script>

<style lang="css" scoped>

 
</style>
