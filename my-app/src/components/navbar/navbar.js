import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo-reprograma.png'
import './navbar.css'

const Navbar = () => (
    <nav className='navbar'>
        <Link to='/'>
            <img 
                className='navbar__logo' 
                src={logo}
                alt='Reprograma'
            />
        </Link>
    </nav>
)

export default Navbar