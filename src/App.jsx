import React from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='home'>
      <img className='logo' src={logo} alt='Zona Andromeda logo' />
      <nav>
        <ul>
          <li>
            <a href='/Comunidad'>Comunidad</a>
          </li>
          <li>
            <Link to={'/Baul'}>Baúl</Link>
          </li>
            <Link to={'/Nosotros'}>Nosotros</Link>
        </ul>
      </nav>
    </div>
  )
}

export default App
