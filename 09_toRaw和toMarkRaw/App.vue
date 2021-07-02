<template>
  <h2>toRaw 和 toMarkRaw</h2>
  <h3>state:{{state}}</h3>
  <h3>user :{{user}}</h3>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testToMarkRaw">测试toMarkRaw</button>
</template>

<script lang="ts">
import {defineComponent, markRaw, reactive, toRaw, } from 'vue'
interface testUser {
  name:string;
  age:number;
  like?:string[];
}
export default defineComponent({
  
  setup() {
    const state = reactive<testUser>({
      name:'小明',
      age: 20,
    })
    const user = toRaw(state)
    //把代理对象变成普通对象,数据变化界面不变化
    const testToRaw = ()=>{
      user.name += '=='
      console.log(user);
      
    }
    const testToMarkRaw = () =>{
      // state.like = ['吃','喝']
      // state.like[0] += '=='
      const like = ['吃','喝']
      // markRaw标记的对象数据,从此以后都不能成为代理对象
      state.like = markRaw(like) 
      // state.like =like //不被markRaw标记,它会成为响应式对象
      setInterval(()=>{
        if (state.like) {
          state.like[0] += '=='
          console.log('定时器启动了 ');
          
        }
      },1000)
    }
    return {
      state,
      user,
      testToRaw,
      testToMarkRaw,
    }
  },
})
</script>
