<template>
  <h2>readonly 和 shallowReadonly</h2>
  <h3>state:{{state2}}</h3>
  <button @click="updateData">更新数据</button>
</template>

<script lang="ts">
import {defineComponent, reactive, readonly, ref, shallowReadonly  } from 'vue'
// toRefs一般配合hook使用,返回响应式属性

export default defineComponent({
  
  setup() {
   
    const state = reactive({
      name :'佐助',
      age :18,
      car:{
        name : '宝马',
        color : 'blue'
      }
    })
    // const state2 = readonly(state) //将state对象转换为只读对象
    const state2 = shallowReadonly(state)  //转换为浅只读对象
    const updateData = () =>{
      // state2.name +='==' //只读属性不可修改
      state2.car.name += '++' //浅只读后,内层属性可以修改
    }
    return {
      state,
      state2,
      updateData
    }
  },
})
</script>
