import React from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {

  return (
    <>
      <img className='logo' src={logo} alt='Zona Andromeda logo' />
      <nav>
        <ul>
          <li>Comunidad</li>
          <li>Baúl</li>
          <li>Nosotros</li>
        </ul>
      </nav>
    </>
  )
}

export default App
