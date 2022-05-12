import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import githubLogo from '../public/image/github-logo.png'
import linkdinLogo from '../public/image/linkdin-logo.png'
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/'){
            document.getElementsByClassName('navbar-logo')[0].style.display = 'none'
            document.getElementsByClassName('nav-social')[0].style.display = ''
        } else {
            document.getElementsByClassName('nav-social')[0].style.display = 'none'
            document.getElementsByClassName('navbar-logo')[0].style.display = ''
        }
        
    })

    return(
        <nav className='navbar'>
            <div className='navbar-container'>
            <div className='nav-social'>
                <a href="https://github.com/FlorentinMarechal" className="nav-social-link" target='_blank' rel='noreferrer'>
                    <img src={githubLogo} alt='github-logo' className="nav-social-logo" />
                </a>
                <a href="https://www.linkedin.com/in/florentin-marechal/" className="nav-social-link" target='_blank' rel='noreferrer'>
                    <img src={linkdinLogo} alt='linkdin-logo' className="nav-social-logo" />
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