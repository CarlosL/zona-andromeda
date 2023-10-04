import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {NextUIProvider} from "@nextui-org/react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
