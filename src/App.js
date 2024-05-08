import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store/Store'
import Router from './Router/Router'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App
