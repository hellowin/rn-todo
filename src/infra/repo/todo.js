// @flow
import store from '../service/store'
import action from '../service/action'
import TodoItem from 'src/domain/todo/service/TodoItem'

const todoRepo = {

  add(item: TodoItem) {
    if (!item) return
    const currentList = store.getState().todo.list
    const newList = [...currentList, item]
    store.dispatch(action.todoSet({ list: newList }))
  },

  remove(index: number) {
    const list = [...store.getState().todo.list]
    list.splice(index, 1)
    store.dispatch(action.todoSet({ list }))
  }

};

export default todoRepo;
