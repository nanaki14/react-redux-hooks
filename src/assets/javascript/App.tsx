import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Counter from './components/Counter'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}
