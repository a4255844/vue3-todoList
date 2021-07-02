<template>
  <h2>child子组件</h2>
  <h3>msg:{{msg}}</h3>
  <button @click="emitXXX">分发事件</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:['msg'],
  //setup细节问题
  //setup实在beforeCreate生命周期回调之前就执行了,而且就执行一次
  //此时组件的实例对象this为undefined,这意味着data/computed/methods/props
  //不能通过this访问, 其实所有的composition API相关回调函数都不可以用
  beforeCreate() {
     console.log('beforeCreate()执行了');
  },
    /* 
      setup的返回值是一个对象,内部的属性和方法是给html模板用的
      如果使用了vue2中的data和methods,它们会和setup合并,尽量避免混合使用,因为setup中this为空
    */
  // setup(props, context) {  
    setup(props,{attrs,emit,slots}) {   //一般使用解构赋值方式来使用context
    console.log('setup()执行了', this);  /* 
      setup的返回值是一个对象,内部的属性和方法是给html模板用的
      如果使用了vue2中的data和methods,它们会和setup合并,尽量避免混合使用,因为setup中this为空
    */
    console.log('props',props);
    // console.log('context', context);
    
    /* 
      props参数: 是一个对象,里面有父级组件向子级组件传递的数据
      context参数: 是一个对象,
      里面有attrs对象:(获取当前组件标签上的所有属性的对象,但是该属性是在props中没有声明接收的所有的属性的对象)
      emit方法: (分发事件)
      slots对象: (插槽)
    */
  const  emitXXX = ()=>{
   emit('test', '+++')
    
  }
     
    return {
      emitXXX
    }
  },
})
</script>
