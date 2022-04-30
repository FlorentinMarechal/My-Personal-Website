import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {



    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='logo'>Logo</Link>
                <Link to='/presantion'>Présentation</Link>
                <Link to='/projects'>Mes Projets</Link>
                <Link to='/contact'>Me Contacter</Link>
            </div>
        </nav>
    )
}

export default NavBar;