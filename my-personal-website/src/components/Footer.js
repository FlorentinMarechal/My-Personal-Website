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
                    <div className="line left"></div>
                    <Link to='' className="social-link">
                        <img src={githubLogo} alt='github-logo' className="left" />
                    </Link>
                    <Link to='' className="social-link">
                        <img src={linkdinLogo} alt='linkdin-logo' className="social-logo right" />
                    </Link>
                    <div className="line right"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;