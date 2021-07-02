# 比较Vue2和Vue3的响应式（重要）
## vue2的响应式
   对象: 通过defineProperty实现对数据的劫持
   数组: 通过重写数组一系列更新元素的方法来实现元素修改的劫持
   问题
        对象直接新添加的属性或删除已有属性,界面不会自动更新
        直接通过下标替换元素或更新length,界面不会自动更新
## vue3的响应式
    核心
        通过Proxy(代理):拦截对data任意属性的任意(13种)操作,包括属性值的读写,属性值的添加,属性的删除等...
        通过Reflect(反射):动态对被代理对象的相应属性进行特定的操作

# Vue2和Vue3的对比
  对比
      Vue3支持大多数Vue2的特性
      Vue3中设计了一套强大的组合API代替了Vue2中的option API, 复用性更强
      更好的支持了TS
      最主要: Vue3中使用了Proxy配合Reflect代替了Vue2中Object.defineProperty()方法实现数据的响应式(数据代理)
      重写了虚拟DOM,速度更快
      新的组件:Fragment(片段) / Teleport(瞬移) / Suspense(不确定)
      设计了一个新的脚手架工具, vite