//手写reactive和shallowReactive


const reactiveHandler = {
  get(target,prop) {
    if (prop === '_is_reactive') return true  //判断他是否是reactive类型, 在isReactive函数中读取该属性,返回true或undefined
    const result = Reflect.get(target,prop)
    console.log('拦截了读取数据', result, prop);
    return result
  },
  set(target,prop,value) {
    const result = Reflect.set(target,prop,value) 
    console.log('拦截了修改数据', prop, value);
    return result
  },
  deleteProperty(target,prop) {
    const result = Reflect.deleteProperty(target,prop)
    console.log('拦截了删除数据',result, prop);
    return result
  }
  
}

function shallowReactive(target) {
  if(typeof target === 'object' &&  target !== null) {
    return new Proxy(target,reactiveHandler)
  }else {
    return target
  }
}

function reactive(target) {
  if(typeof target === 'object' &&  target !== null) {
    // 数组和对象要递归处理
    if(Array.isArray(target)) {
      target.forEach((item,index)=>{
        target[index] = reactive(item)
      })
    }else {
      Object.keys(target).forEach(key=>{
        target[key] = reactive(target[key]) 
      })
    }
    return new Proxy(target, reactiveHandler)
  }else {
    return target
  }
}
// 手写ref和shallowRef
function shallowRef(target) {
  return {
    _value :target,
    get value() {
      console.log('监视劫持到了读取数据', this);
      return this._value
    },
    set value(val) {
      console.log('监视劫持到了修改数据');
      this._value = val
    },
  }
}
function ref(target) {
 target = reactive(target)
  return {
    _value :target,
    _is_ref:true,
    get value() {
      console.log('监视劫持到了读取数据', this);
      return this._value
    },
    set value(val) {
      console.log('监视劫持到了修改数据');
      this._value = val
    },
  }
}

//手写readonly 和 shallowReadonly
const readonlyHandler = {
  get(target,prop) {
    if(prop === '_is_readonly') return true
    // prop === '_is_readonly' ? true :false
    console.log('拦截到了获取属性',target, prop);
    return Reflect.get(target,prop)
  },
  set(target,prop,value) {
    console.warn('只读数据,禁止修改')
    return true
  },
  deleteProperty(target,prop) {
    console.warn('只读数据,禁止删除');
    return true
  }
}
function shallowReadonly(target) {
  if (target && typeof target === 'object') {
    return new Proxy(target, readonlyHandler)
  }
  return target
}
function readonly(target) {
  if (target && typeof target === 'object') {
    if(Array.isArray(target)) {
      target.forEach((item,index)=>{
        target[index] = readonly(item)
      })
    }else {
      for(key in target) {
        if(target.hasOwnProperty(key)) {
          target[key] = readonly(target[key])
        }
      }
    }
    return new Proxy(target, readonlyHandler)
  }
  return target
}

//定义一个函数isRef,判断当前的对象是不是ref对象
function isRef(target) {
  return target && target._is_ref || false
}
//定义一个函数isReactive,判断当前对象是不是reactive对象
function isReactive(target) { 
  //在读取_is_reactive时去判断他是否是reactive,如果是返回true,不是返回undefined
  return target && target._is_reactive || false
}
//定义一个函数isReadonly, 判断当前对象是不是isReadonly对象
function isReadonly(target) {
  return target && target._is_readonly || false
}
//定义一个函数isProxy, 判断当前的对象是不是reactive对象或者readonly对象
function isProxy(target) {
  return target && (target._is_reactive || target._is_readonly) || false
}