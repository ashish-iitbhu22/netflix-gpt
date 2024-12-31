import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from '../Home/Home'
import Register from '../Register/Register'

const Route = () => {
 
    const routes = [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/logIn', element: <Register />},
    ]

    const Router = createBrowserRouter(routes)

  return (
      <RouterProvider router={Router} />
  )
}

export default Route