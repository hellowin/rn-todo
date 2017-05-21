import store from '../service/store'
import action from '../service/action'

const todoRepo = {

  add(item) {
    const currentList = store.getState().todo.list
    const newList = currentList.push(item)
    store.dispatch(action.todoSet({ list: newList }))
  }

};

export default todoRepo;
