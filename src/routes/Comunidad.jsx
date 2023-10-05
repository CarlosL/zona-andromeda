import React from 'react'
import Nav from '../components/Nav.jsx'
import logoDiscord from '../assets/logoDiscord.png'
import logoInstagram from '../assets/logoInstagram.png'
import logoPatreon from '../assets/logoPatreon.png'
import './comunidad.css'

function Comunidad() {

    return (
        <section id='comunidad'>
            <Nav  />
            <div className="container-social">
                <div className="row-social">
                    <img className='logo-social' src={logoDiscord} alt='Logo Discord' />
                    <h2>Discord</h2>
                </div>
                <div className="row-social">
                    <img className='logo-social' src={logoInstagram} alt='Logo Instagram' />
                    <h2>Instagram</h2>
                </div>
                <div className="row-social">
                    <img className='logo-social' src={logoPatreon} alt='Logo Patreon' />
                    <h2>Patreon</h2>
                </div>
            </div>
        </section>
    )
}

export default Comunidad