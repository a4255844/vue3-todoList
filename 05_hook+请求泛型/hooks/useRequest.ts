import axios from 'axios'
import { ref } from 'vue'
export default function<T> (url:string) {
  const loading = ref(true)
  const data = ref<T | null>(null)
  const errMsg = ref('')
  axios.get(url).then(res => {
    data.value = res.data
    loading.value = false
  }).catch(err => {
    errMsg.value = err.message || '未知错误'
    loading.value = false
  })
  return {
    loading,
    data,
    errMsg
  }
}