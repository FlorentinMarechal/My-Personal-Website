import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import githubLogo from '../public/image/github-logo.png'
import linkdinLogo from '../public/image/linkdin-logo.png'

const NavBar = () => {


    return(
        <nav className='navbar'>
            <div className='navbar-container'>
            <div className='social-links'>
                <a href="https://github.com/FlorentinMarechal" className="social-link">
                    <img src={githubLogo} alt='github-logo' className="left" />
                </a>
                <a href="https://www.linkedin.com/in/florentin-marechal/" className="social-link">
                    <img src={linkdinLogo} alt='linkdin-logo' className="social-logo right" />
                </a>
            </div>
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