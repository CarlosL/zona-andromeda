import React from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='home'>
      <img className='logo' src={logo} alt='Zona Andromeda logo' />
      <div className='nav-home'>
        <ul>
          <li>
            <Link to={'/Comunidad'}>Comunidad</Link>
          </li>
          <li>
            <Link to={'/Baul'}>Baúl</Link>
          </li>
            <Link to={'/Nosotros'}>Nosotros</Link>
        </ul>
      </div>
    </div>
  )
}

export default App
