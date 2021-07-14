<template>
  <h2>计算属性和监视</h2>
  <fieldset> 
    <legend>姓名操作</legend>
    姓氏: <input type="text" placeholder="输入姓氏" v-model="user.firstName" /> <br/>
    名字: <input type="text" placeholder="输入姓名" v-model="user.lastName"/> <br/>
  </fieldset>
  <fieldset> 
    <legend>计算属性和监视的演示</legend>
    姓名: <input type="text" placeholder="输入姓名" v-model="fullName1" /> <br/>
    姓名: <input type="text" placeholder="输入姓名" v-model="fullName2"/> <br/>
    姓名: <input type="text" placeholder="输入姓名" v-model="fullName3"/> <br/>
  </fieldset>    
</template>

<script lang="ts">
import { computed, defineComponent,reactive,ref, watch, watchEffect } from 'vue'
export default defineComponent({
  setup() {
    const user = reactive({
      // 姓氏
      firstName: '东方',
      lastName : '不败'
    })
    //通过计算属性的方式,实现第一个姓名的显示
    // vue3中的计算属性
    //第一个姓名
    // 计算属性的函数中如果只传入一个回调函数,表示的是get
    // 返回的是一个Ref类型的对象
    const fullName1 = computed(()=>{
      return user.firstName + '_' + user.lastName
    })
    //第二个姓名
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName
      },
      set(val:string) {
        let name = val.split('_')
        user.firstName = name[0]
        user.lastName = name[1]
      }
    })
    //第三个姓名
    const fullName3 = ref('')
    //监视--- 监视指定的数据
    // watch(user,({firstName,lastName})=>{
    //   fullName3.value = firstName + '_' + lastName
    // },{immediate:true,deep:true})
    // immediate 默认会执行一次watch
    // deep 深度监视
  
  //监视,不需要配置 immediate,本身默认执行一次
  watchEffect(()=>{
    fullName3.value = user.firstName +'_'+ user.lastName
  })

  //watch---可以监视多个数据
  //fullName3是是响应式数据, user.lastName  user.firstName是非响应式数据
  //如果监视的数据不是响应式数据,需要在数据前加()=>
  watch([()=>user.firstName, ()=>user.lastName, fullName3],()=>{
    console.log('===');
  })
  
  // watch 如果监视一个reactive对象, 他的newVal和oldVal都输出的是最新的值
  // 并且深度监视配置会失效, 深度监视效果始终存在
  watch(user, (newVal, oldVal) => {  
    console.log('user变化了', newVal, oldVal)
  })


  
    
    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  },
})
</script>
