import React from "react";
import Nav from '../components/Nav.jsx'
import { Link } from 'react-router-dom'

function Nosotros() {

    return (
        <>
        <Nav />
        <h1>Nosotros</h1>
        <Link to={'/'}>Back</Link>
        </>
    )
}

export default Nosotros