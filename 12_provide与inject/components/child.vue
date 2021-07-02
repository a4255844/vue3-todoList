<template>
   <h2>我是子组件child</h2>
   <GrandChild/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import GrandChild from './GrandChild.vue'
export default defineComponent({
  components:{
    GrandChild
  },
  setup() {
    return {

    }
  }
}) 
 


</script>

<style>

</style>