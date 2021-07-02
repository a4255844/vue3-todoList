<template>
  <h2>toRef的使用及特点</h2>
  <h3>state:{{state}}</h3>
  <h3>age:{{age}}</h3>
  <h3>money:{{money}}</h3>
  <button @click="update">更新数据</button>
  <hr/>
  <child :age="age"/> 
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRef } from 'vue'
import child from './components/child.vue'
export default defineComponent({
  components:{
    child,
  },
  setup() {
    const state = reactive({
      age:5,
      money:100
    })
    //toRef和ref都是把数据转换成Ref类型
    const age = toRef(state, 'age') 
    const money = ref(state.money)
    //区别
    const update =()=>{
      age.value += 2  //通过toRef转换的数据和state内的属性是关联的
      money.value += 3 //通过ref转换的数据和state内的属性并不关联
    }
    return {
      age,
      money,
      state,
      update
    }
  },
})
</script>
