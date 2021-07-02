<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
</template>

<script lang="ts">
import { customRef, defineComponent, ref, triggerRef } from "vue";
//自定义hook防抖函数
function useDebouncedRef<T>(value:T, delay = 200) {
  let timeId:number
  return customRef((track,trigger)=>{
    return {
      //返回数据
      get() {
        //告诉vue追踪数据
        track()
        return value
      },
      //修改数据
      set(newValue:T) {
        //清理定时器
        clearTimeout(timeId)
        //开启定时器
        timeId = setTimeout(() => {
          //告诉vue更新界面
          trigger()
          //修改数据
          value = newValue
        }, delay);
      }
    }
  })
}
export default defineComponent({
  setup() {
    const keyword = useDebouncedRef('abc',500)
    return {
      keyword
    }
  },
});
</script>

<style lang="css" scoped>
</style>
