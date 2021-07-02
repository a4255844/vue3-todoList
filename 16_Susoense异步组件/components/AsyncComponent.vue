<template>
   <h2>测试setup返回promise</h2>
   <h3>{{msg}}</h3>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios'
export default defineComponent({
  //setup 如果返回promise Suspense组件也会对其生效,在padding状态时展示loading效果
  // setup() {
  //   return new Promise((resolve,reject) =>{
  //     setTimeout(() => {
  //       resolve({
  //         msg:'promise成功返回的数据'
  //       })
  //     }, 2000);
  //   })
  // } 
  // setup() {
  //   return axios.get('/data/address.json').then(response =>{
  //     return {
  //       msg : response.data
  //     }
  //   })
  // }
 async setup() {
    const result = await axios.get('/data/address.json')
    return {
      msg : result.data
    }
  }
})
</script>

<style lang="css" scoped>

 
</style>
