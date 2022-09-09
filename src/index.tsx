import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store/store'

// eslint-disable-next-line
const container = document.getElementById('wrapper')!
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
