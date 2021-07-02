<template>
  <div>
    <ul class="todo-main">
      <Item
        v-for="(todo,index) in todos" :key="todo.id"
        :index="index"
        :todo="todo"
        :removeTodo="removeTodo"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './Item.vue'
import {Todo} from '../types/todo'
export default defineComponent({
  components:{
    Item,
  },
  props:{
    todos: {
      type : Array as ()=> Todo[]
      // required:true
    },
    removeTodo:{
      type: Function,
      required:true

    }
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>
