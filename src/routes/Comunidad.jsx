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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ducimus! Sequi distinctio culpa quod consectetur ad iure quas nisi maxime!</p>
                    <button className='btn-unirse'>
                        <a href='https://discord.gg/BZGhpWAjf9' target='_blank'>
                        <span className='circle-c' aria-hidden='true'>
                            <span className='icon arrow'></span>
                        </span>
                        <span className='btn-text'>Unirse</span>
                        </a>
                    </button>
                </div>
                <div className="row-social">
                    <img className='logo-social' src={logoInstagram} alt='Logo Instagram' />
                    <h2>Instagram</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ducimus! Sequi distinctio culpa quod consectetur ad iure quas nisi maxime!</p>
                    <button className='btn-unirse'>
                        <a href='https://www.instagram.com/zona_andromeda/' target='_blank'>
                        <span className='circle-c' aria-hidden='true'>
                            <span className='icon arrow'></span>
                        </span>
                        <span className='btn-text'>Unirse</span>
                        </a>
                    </button>
                </div>
                <div className="row-social">
                    <img className='logo-social' src={logoPatreon} alt='Logo Patreon' />
                    <h2>Patreon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ducimus! Sequi distinctio culpa quod consectetur ad iure quas nisi maxime!</p>
                    <button className='btn-unirse'>
                        <span className='circle-c' aria-hidden='true'>
                            <span className='icon arrow'></span>
                        </span>
                        <span className='btn-text'>Unirse</span>
                    </button>
                    <br />
                    <span>Proximamente</span>
                </div>
            </div>
        </section>
    )
}

export default Comunidad