import React from 'react'
import Expo from 'expo'
import App from 'src/App.js'
import store from 'src/infra/service/store'
import { Provider } from 'react-redux'

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

Expo.registerRootComponent(Index);
