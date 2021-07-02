<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name : {{state.name}}</h3>
  <h3>age : {{state.age}}</h3> -->
  
  <h3>name : {{name}}</h3>
  <h3>age : {{age}}</h3>
  <h3>name2 : {{name2}}</h3>
  <h3>age2 : {{age2}}</h3>
  <h2>利用ref获取标签</h2>
  <input type="text" ref="inputRef">
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, ref, onMounted  } from 'vue'
// toRefs一般配合hook使用,返回响应式属性
function useFeatureX() { 
   const state = reactive({ 
      name2 : '自来也' ,
      age2 : 47
    })
    return {
      ...toRefs(state)
    }
}
export default defineComponent({
  
  setup() {
    const state = reactive({ 
      name : '自来也' ,
      age : 47
    })

    //toRefs可以吧一个响应式对象转换成普通对象,该普通对象的每个property都是一个ref
    // const state2 = toRefs(state)//此时state2内的属性全部是ref类型
    const {name, age} = toRefs(state)
    setInterval(()=>{
      // state.name += '=='
      // state2.name.value += '===' 
      name.value += '==='
      age2.value += 1
    },2000)
    const {name2 ,age2} = useFeatureX()
    //需求, 当页面加载完毕后,input框自动获取焦点
    /* 默认是空的,当页面完毕后,获取文本框元素 */
    const inputRef = ref<HTMLElement | null>(null)

    onMounted(()=>{
      console.log(inputRef);
      
      inputRef.value?.focus()
    })
    
    return {
      // ...state //拆开后数据就不是响应式了, {name : 自来也, age : 47}
      // ...state2  //拆开后仍然是响应式
      name,
      age,
      name2,
      age2,
      inputRef
    }
  },
})
</script>
