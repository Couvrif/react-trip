import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/home'))
const Entire = React.lazy(() => import('@/pages/entire'))
const Detail = React.lazy(() => import('@/pages/detail'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/entrie',
    element: <Entire />
  },
  {
    path: '/detail',
    element: <Detail />
  }
]

export default routes
