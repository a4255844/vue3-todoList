<template>
  <h2>Child子级组件</h2>
  <button @click="update">更新msg</button>
  <div>msg : {{msg}}</div>
</template>

<script>
import {defineComponent, ref , onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
export default  defineComponent ({
  // vue2中的生命周期钩子
  beforeCreate(){
      console.log('vue2中的beforeCreate');
  },
  created() {
      console.log('vue2中的created');
      
  },
  beforeMount() {
      console.log('vue2中的beforeMount');

  },
  mounted() {
      console.log('vue2中的mounted');

  },
  beforeUpdate(){
      console.log('vue2中的beforeUpdate');

  },
  updated(){
      console.log('vue2中的updated');
      
  },

//   vue3中beforeDestroy 和 destroyed 已经被废弃,请使用下面名字代替
  beforeUnmount(){
      console.log('vue2中的beforeUnmount');
      
  },
  unmounted() {
      console.log('vue2中的unmounted');
  },
  setup() {
    console.log('vue3中的setup'); //vue3中没有beforeCreate和created两个钩子,均采用setup代替
    const msg = ref('abc')
    const update = () =>{
        msg.value += '==='
    }
    // vue3中的生命周期钩子
    onBeforeMount(()=>{
       console.log('vue3中的onBeforeMount');  	
    }) 
    onMounted(()=>{
       console.log('vue3中的onMounted');  	

    })
    onBeforeUpdate(()=>{
       console.log('vue3中的onBeforeUpdate');  	
        
    })
    onUpdated(()=>{
       console.log('vue3中的onUpdated');  	

    })
    onBeforeUnmount(()=>{
       console.log('vue3中的onBeforeUnmount');  	

    })
    onUnmounted(()=>{
       console.log('vue3中的onUnmounted');  	

    })
    
    return {
        msg,
        update
    }  
  }
})
   

</script>

<style>

</style>