import store from '../service/store'
import action from '../service/action'

const todoRepo = {

  add(item) {
    if (!item) return
    const currentList = store.getState().todo.list
    const newList = [...currentList, item]
    store.dispatch(action.todoSet({ list: newList }))
  },

  remove(index) {
    const list = [...store.getState().todo.list]
    list.splice(index, 1)
    store.dispatch(action.todoSet({ list }))
  }

};

export default todoRepo;
