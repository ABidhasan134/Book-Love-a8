import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import ListedBook from './ListedBook/listedBook.jsx'
import ReadedBook from './ReadedBook/readedBook.jsx'
import ErrorHandel from './error/error.jsx'



const router=createBrowserRouter([
  {
  path: '/',
  element: <App></App>,
  errorElement: <ErrorHandel></ErrorHandel>,
  children: [{
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/list",
    element:<ListedBook></ListedBook>
  },
  {
    path: "/readed",
    element: <ReadedBook></ReadedBook>
  }
]
},])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
