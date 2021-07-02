<template>
  <div class="todo-container">
    <h1>todoList</h1>
    <Header :addTodo="addTodo"/>
    <List :todos="todos" :removeTodo="removeTodo"/>
    <Footer
      :todos="todos"
      :removeFinishTodo="removeFinishTodo"
      :isCheckAll="isCheckAll"
    />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { saveTodos, readTodos } from "./utils/storageUtils";
import {defineComponent, onMounted, provide, reactive,toRefs, watch} from 'vue'
import {Todo} from './types/todo'
export default defineComponent ({
  components:{
    Header,
    List,
    Footer,
  },
  setup() {
    const state = reactive<{todos:Todo[]}>({
      todos:[
        {
          id:1,
          title:'宝马',
          isCompleted:false
        },
        {
          id:2,
          title:'奔驰',
          isCompleted:true
        },
        {
          id:3,
          title:'奥迪',
          isCompleted:false
        }
      ]
    })
    const addTodo = (todo:Todo)=>{
      state.todos.unshift(todo)
    }
    const removeTodo = (index:number)=>{
      state.todos.splice(index,1)
    }
    const updateTodo = (index:number,val:boolean)=>{
      state.todos[index].isCompleted = val
    }
    const removeFinishTodo =()=>{
      state.todos =  state.todos.filter(item=>!item.isCompleted)
    }
    const isCheckAll = (val:boolean) =>{
      state.todos.forEach(item => item.isCompleted = val) 
    }
    // 使用provide和inject与孙子组件通信
    provide('removeTodo', removeTodo)
    provide('updateTodo', updateTodo)
    // watch(()=>state.todos,(value)=>{
    //   saveTodos(value)
    // },{deep:true})
    // 简写
    watch(()=>state.todos,saveTodos,{deep:true})
    onMounted(()=>{
      state.todos =  readTodos()
    })
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      removeFinishTodo,
      isCheckAll,
    }
  }
})
</script>

<style scoped>
.todo-container {
  width: 590px;
  margin: 50px auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
