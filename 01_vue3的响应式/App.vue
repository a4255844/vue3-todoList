<template>
  <!-- vue3 html模板不需要根标签 -->
  <!-- ref对基本数据响应式处理-->
  <h1>ref 基本数据类型</h1>
  <h3>{{count}}</h3>
  <button @click="updateCount">更新数据</button>
  <!-- reactive对引用数据类型进行响应式处理 -->
  <h1>reactive 引用数据类型</h1>
  <h3>名字:{{user.name}}</h3>
  <h3>年龄:{{user.age}}</h3>
  <h3>老婆:{{user.wife}}</h3>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
/* defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象 */
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    //setup只执行一次
    // ref的作用,使一个基本数据类型成为响应式数据,返回一个Ref对象,对象中有一个value属性,如果需要对数据
    // 进行操作,需要对value属性进行修改
    // 在html模板中不需要使用.value属性的写法
    const count = ref(0);
    function updateCount() {
      count.value++;
    }
    /* 
      reactive 
        作用:定义多个数据的响应式(引用数据类型)
        接收一个普通对象,然后返回该普通对象的响应式代理对象
        响应式转换是"深层的" 会影响对象内部所有嵌套的属性
        内部基于es6的 Proxy 实现, 通过代理对象操作源对象内部数据都是响应式的
    */
    const obj = {
      name: "小明",
      age: 20,
      wife: {
        name: "小花",
        age: 19,
      },
    };

    const user = reactive(obj);
    /* 
      user现在是代理对象,被代理的目标对象就是obj对象
      user的对象类型是Proxy
      如果对目标对象进行修改，页面并不会更新
      修改数据应该直接修改代理对象，此时目标对象也会变化，界面也会跟着变化
    */
    const updateUser = () => {
      user.age++;
      user.wife.age++;
    };
    // ref和reactive的细节问题
    /* 
      需要注意:Vue3的 composition API 中2个最重要的响应式API(ref和reactive)
      如果ref使用对象/数组,内部会自动将对象/数组转换为reactive的代理对象
      ref内部:通过给value属性添加getter/setter来实现对数据的劫持
      reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持,并通过Reflect操作对象内部数据
      ref的数据操作:在js中要.value,在模板中不需要(内部解析模板时会自动添加.value)
    */
    return {
      count,
      updateCount,
      user,
      updateUser,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
