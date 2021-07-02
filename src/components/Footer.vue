<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
      <span>已完成{{count}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn" @click="clearFinish">
      清除已完成任务
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import {Todo} from '../types/todo'
export default defineComponent({
  props:{
    todos: {
      type:Array as () => Todo[],
      required:true
    },
    removeFinishTodo:{
      type:Function,
      required:true
    },
    isCheckAll:{
      type:Function,
      required:true
    }
  },
  setup(props) {
    const count = computed(()=>{
      return  props.todos.reduce((pre,item)=>pre + (item.isCompleted ? 1:0),0)
    })
    const checkAll = computed({
      get() {
        return count.value>0 && count.value === props.todos.length
      },
      set(val) {
        props.isCheckAll(val)
      }
    })
    const clearFinish = ()=>{
      props.removeFinishTodo()
    }
    return {
      count,
      clearFinish,
      checkAll
    }
  },
})
</script>


<style scoped>
.todo-footer input {
  margin-left: 10px;
  margin-right: 20px;
}

.todo-footer .btn {
  float: right;
}
</style>
