import React from "react";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {

    return (
        <nav>
            <img className="logo-nav" src={logo} alt="Zona Andromeda logo" />
            <ul className="ul-nav">
                <li>
                    <Link to={'/'}>Inicio</Link>
                </li>
                <li>
                    <Link to={'/Comunidad'}>Comunidad</Link>
                </li>
                <li>
                    <Link to={'/Baul'}>Baúl</Link>
                </li>
                <li>
                    <Link to={'/Nosotros'}>Nosotros</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav