// @flow
import React from 'react'
import Expo from 'expo'
import App from 'src/App'
import store from 'src/infra/service/store'
import { Provider } from 'react-redux'
import Bootstrap from 'src/app/Bootstrap'

const Index = () => (
  <Provider store={store}>
    <Bootstrap>
      <App />
    </Bootstrap>
  </Provider>
)

Expo.registerRootComponent(Index)
