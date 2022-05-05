import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {



    return(
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>Home</Link>
                <div className='nav-menu'>
                    <Link to='/projets'className='nav-links'>Mes Projets</Link>
                    <Link to='/contact'className='nav-links'>Me Contacter</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;