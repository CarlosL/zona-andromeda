import React from 'react'
import Nav from '../components/Nav.jsx'
import { Link } from 'react-router-dom'

function Baul() {

    return (
        <>
        <Nav />
        <h1>Baúl</h1>
        <Link to={'/'}>Back</Link>
        </>
    )
}

export default Baul