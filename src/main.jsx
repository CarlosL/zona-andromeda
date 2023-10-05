import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Comunidad from './routes/Comunidad.jsx'
import Baul from './routes/Baul.jsx'
import Nosotros from './routes/Nosotros.jsx'
import {NextUIProvider} from "@nextui-org/react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Comunidad',
    element: <Comunidad />,
  },
  {
    path: '/Baul',
    element: <Baul />,
  },
  {
    path: '/Nosotros',
    element: <Nosotros />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
