// @flow
import store from '../service/store'
import action from '../service/action'
import TodoItem from 'src/domain/todo/service/TodoItem'
import { AsyncStorage } from 'react-native'
import _ from 'lodash'

const todoRepo = {

  add(item: TodoItem) {
    if (!item) return
    const currentList = store.getState().todo.list
    const newList = [...currentList, item]
    AsyncStorage.setItem('list', JSON.stringify(newList))
      .then(() => store.dispatch(action.todoSet({ list: newList })))
  },

  remove(id: string) {
    const list = [...store.getState().todo.list].filter(li => li.id !== id)
    AsyncStorage.setItem('list', JSON.stringify(list))
      .then(() => store.dispatch(action.todoSet({ list })))
  },

  mark(id: string) {
    const list = [...store.getState().todo.list].map(li => {
      if (li.id === id) {
        return { ...li, done: true }
      } else {
        return { ...li }
      }
    })
    AsyncStorage.setItem('list', JSON.stringify(list))
      .then(() => store.dispatch(action.todoSet({ list })))
  },

  restore() {
    AsyncStorage.getItem('list')
      .then(listString => {
        const list = JSON.parse(listString)
        if (!_.isArray(list)) throw new Error('List is not an array')
        return list
      })
      .catch(err => {
        console.error(err)
        return []
      })
      .then(list => store.dispatch(action.todoSet({ list })))
  },

};

export default todoRepo;
