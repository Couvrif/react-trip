import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import theme from './assets/theme'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Suspense fallback="loading...">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Suspense>
  </Provider>
)
