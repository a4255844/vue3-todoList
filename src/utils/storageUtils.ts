/* 数据存储的工具模块 */
import { Todo } from '../types/todo'
export function saveTodos(value: Todo[]):void {
   localStorage.setItem('todos_key', JSON.stringify(value))
}

export function readTodos():Todo[]{
   return JSON.parse(localStorage.getItem('todos_key') || '[]')
}
