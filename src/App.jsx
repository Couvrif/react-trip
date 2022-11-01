import React, { memo, useEffect } from 'react'
import routes from './router'
import { useLocation, useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import { useScrollTop } from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop()

  return (
    <div className="app">
      <AppHeader></AppHeader>
      {/* <div style={{position: 'relative',zIndex: '-1'}}> */}
        {useRoutes(routes)}
      {/* </div> */}
      <AppFooter></AppFooter>
    </div>
  )
})

export default App
