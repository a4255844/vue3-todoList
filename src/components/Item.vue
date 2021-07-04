<template>
  <div>
    <li
      @mouseenter="mouseHandler(true)"
      @mouseleave="mouseHandler(false)"
      :class="{active:isShow}"
    >
      <label>
        <input type="checkbox" v-model="isComplete" />
        <span>{{todo.title}}</span>
        <button class="btn" v-show="isShow" @click="deleteHandler">删除</button>
      </label>
    </li>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref} from 'vue'
import {Todo} from '../types/todo'
export default defineComponent({
  props:{
    todo:{
      type:Object as ()=>Todo, //指定接口
      required:true
    },
    index:{
      type : Number
    },
    // removeTodo: {
    //   type:Function,
    //   required:true
      
    // }

  },
  setup(props) {
    const isShow = ref(false)
    const mouseHandler =(type:boolean)=>{
      if(type) {
        isShow.value =true
      }else {
        isShow.value = false
      }
    }
    const removeTodo = inject('removeTodo',Function,true) //inject接收函数
    const updateTodo = inject('updateTodo',Function,true) //inject接收函数
    const deleteHandler = () =>{
      console.log(props);
      if(window.confirm()) {
        removeTodo(props.index)
      }
      // props.removeTodo(props.index)
    }
   const isComplete =  computed({
     get() {
       return props.todo.isCompleted
     },
     set(val) {
      //  props.todo?.isCompleted = val
      updateTodo(props.index,val)
     }
   })
    return {
      isShow,
      mouseHandler,
      deleteHandler,
      isComplete
    }
  },
})
</script>

<style scoped>
.todo-main input {
  margin-left: 10px;
}

li {
  list-style: none;
  height: 36px;
  width: 100%;
  line-height: 36px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
.active {
  background: skyblue;
}
li button {
  float: right;
  margin: 6px 10px 0 0;
}
</style>
