<template>
  <div class="todoheader">
    <input
      type="text"
      placeholder="请输入内容，按回车键确认"
      v-model="text"
      @keyup.enter="add"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props:{
    addTodo:{
      type : Function,
      required:true
    }
  },
  setup(props) {
    const text = ref('')
    const add = () =>{
      if(!text.value.trim()) return
      const todo = {  //生成todo对象
        id : Date.now(),
        title: text.value,
        isComnleted: false
      }
      console.log(props);
      
      props.addTodo(todo) //调用父组件传过来的方法添加数据
      text.value = '' //清空输入框
    }
    return {
      text,
      add
    }
  },
})
</script>

<style scoped>
.todo-container .todoheader input {
  height: 30px;
  width: 580px;
  padding-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
</style>
