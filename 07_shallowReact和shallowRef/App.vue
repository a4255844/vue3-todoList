<template>
  <h2>shallowReactive 和 shallowRef</h2>
  <h3>m1 : {{m1}}</h3>
  <h3>m2 : {{m2}}</h3>
  <h3>m3 : {{m3}}</h3>
  <h3>m4 : {{m4}}</h3>
  <button @click="updateData">更新数据</button>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, shallowReactive, shallowRef  } from 'vue'
// toRefs一般配合hook使用,返回响应式属性

export default defineComponent({
  
  setup() {
    const m1 = ref({
      name :'鸣人',
      age : 18,
      car : {
        name : '奔驰',
        color : 'red'
      }
    })
    const m2 = reactive({
      name :'鸣人',
      age : 18,
      car : {
        name : '奔驰',
        color : 'red'
      }
    })
    const m3 = shallowRef({
      name :'鸣人',
      age : 18,
      car : {
        name : '奔驰',
        color : 'red'
      }
    })
    const m4 = shallowReactive({
      name :'鸣人',
      age : 18,
      car : {
        name : '奔驰',
        color : 'red'
      }
    })
    const updateData = ()=> {
      console.log('更新数据');
      // ref 深度劫持监视
      // m1.value.name += '=='
      // m1.value.car.name += '++'
      //reactive 深度劫持监视
      // m2.name +='11'
      // m2.car.name +='22'
      // shallowRef 浅监视,对象属性数据不会变化
      // m3.value.name += '33'
      // m3.value.car.name +='44'
      //shallowReactive 浅监视, 对象属性数据第一层可以变化,其他层不变
      // m4.name += '55'  
      m4.car.name += '66'
    }
    /* 
      什么时候用浅响应式
        一般情况下使用ref和reactive即可
        如果有一个对象数据,结构比较深,但变化时只是外层属性变化==> shallowReactive
        如果有一个对象数据,后面会产生新的对象来替换==>shallRef
            
    */
    return {
      m1,
      m2,
      m3,
      m4,
      updateData
    }
  },
})
</script>
