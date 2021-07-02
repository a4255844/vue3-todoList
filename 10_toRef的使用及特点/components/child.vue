<template>
   <h2>我是子组件child</h2>
   <h3>age:{{age}}</h3>
   <h3>length:{{length}}</h3>
</template>

<script lang="ts">
import {computed, defineComponent, Ref, toRef} from 'vue'
function hookFunc(age:Ref) { //接受Ref类型的数据
  return computed(()=>{
    return age.value.toString().length
  })
}
export default defineComponent({
   props:{
    age:{
      type : Number,
      required : true
    }
  },
  setup(props) {
    //toRef用于把数据转换成Ref类型
    const length = hookFunc(toRef(props,'age'))
    return {
      length
    }
  }
}) 
 


</script>

<style>

</style>