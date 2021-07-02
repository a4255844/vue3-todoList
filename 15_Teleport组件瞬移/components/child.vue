<template>
   <button @click="isShow =true">
     打开一个对话框
   </button>
   <!-- Teleport标签to属性将标签内的内容瞬移到body标签内 -->
   <Teleport to="body">
      <div v-if="isShow">
          对话框的内容
          <button @click="isShow = false">关闭对话框</button>

      </div>
   </Teleport>
  
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
export default defineComponent({
  setup() {
    const isShow = ref(false)
    return {
      isShow
    }
  } 
})
</script>

<style lang="css" scoped>

 
</style>
