<template>
 <h2>父级组件</h2>
 <h3>msg:{{msg}}</h3>
 <button @click="msg = msg+ '=='">更新msg</button>
 <Child :msg="msg" :msg1="msg1" @test="testHandle"/>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import Child from './components/Child.vue'
export default defineComponent({
  components:{
    Child
  },
  setup() {
    const msg = ref('hello')
    const msg1 = ref('hi')
    const testHandle = (txt:string)=>{
      msg.value += txt
    }
    return {
      msg,
      msg1,
      testHandle
    }
  },
})
</script>
