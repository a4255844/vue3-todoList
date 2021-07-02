<template>
  <h2>自定义hook函数操作</h2>
  <h2>x:{{x}},  y:{{y}}</h2>
  <h3 v-if="loading">正在加载中</h3>
  <h3 v-else-if="errMsg">{{errmsg}}</h3>
  <ul v-else>
    <li>id: {{data.id}}</li>
    <li>address: {{data.address}}</li>
    <li>distance: {{data.distance}}</li>
  </ul>
  <ul v-for="item in data" :key="item.id">
     <li>id :{{item.id}}</li>
     <li>title: {{item.title}}</li>
     <li>price: {{item.price}}</li>
  </ul>
</template>

<script lang="ts">
import {defineComponent,ref, onMounted,onBeforeUnmount, watch  } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'

interface IAddressData{
  id : number;
  address  : string;
  distance : string;
}
interface IProducts {
  id : string;
  title : string;
  price : number;
}
export default defineComponent({

  setup() {
    const { x , y} = useMousePosition()
    // const {loading, data, errMsg} = useRequest<IAddressData>('./data/address.json')
    const {loading,data,errMsg} = useRequest<IProducts[]>('./data/products.json')
    watch(data,()=>{
      if(data.value) {
        console.log(data.value.length);
      }      
    })
    return {
      x,
      y,
      loading,
      data,
      errMsg
    }
  },
})
</script>
