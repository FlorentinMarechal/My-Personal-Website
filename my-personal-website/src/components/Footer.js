import React from "react";
import './Footer.css';
import githubLogo from '../public/image/github-logo.png'
import linkdinLogo from '../public/image/linkdin-logo.png'

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-container">
                <div className="link-container">
                    <div className="line left"></div>
                    <a href="https://github.com/FlorentinMarechal" className="social-link">
                        <img src={githubLogo} alt='github-logo' className="left" />
                    </a>
                    <a href="https://www.linkedin.com/in/florentin-marechal/" className="social-link">
                        <img src={linkdinLogo} alt='linkdin-logo' className="social-logo right" />
                    </a>
                    <div className="line right"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;