// @flow
import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'

import TodoListPage from 'src/domain/todo/container/TodoListPage'
import TodoDonePage from 'src/domain/todo/container/TodoDonePage'

const App = TabNavigator({
  List: {
    screen: TodoListPage,
  },
  Done: {
    screen: TodoDonePage,
  },
}, {
  swipeEnabled: true,
})

export default App
