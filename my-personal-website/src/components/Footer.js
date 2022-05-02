import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import githubLogo from '../public/image/github-logo.png'
import linkdinLogo from '../public/image/linkdin-logo.png'

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-container">
                <div className="link-container">
                    <div className="line"></div>
                    <Link to='' className="social-link">
                        <img src={githubLogo} alt='github-logo' className="-logo" />
                    </Link>
                    <Link to='' className="social-link">
                        <img src={linkdinLogo} alt='linkdin-logo' className="social-logo" />
                    </Link>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;