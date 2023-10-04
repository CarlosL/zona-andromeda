import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {

  return (
    <>
      <img className='logo' src={logo} alt='Zona Andromeda logo' />
        <nav>
          <ul>
            <a href='#'><li>Comunidad</li></a>
            <a href='#'><li>Baúl</li></a>
            <a href='#'><li>Nosotros</li></a>
          </ul>
        </nav>
    </>
  )
}

export default App
