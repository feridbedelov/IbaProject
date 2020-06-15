import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='footer'>
            <div className="container footer-container">
                <div className="footer-about">
                    <h3>Piroll Design,Inc.</h3>
                    <span>&copy;2017 Piroll. All rights reserved.</span>
                    <span>Designed by Ferid</span>
                </div>
                <div className="footer-contact">
                    <span>feridbedelov@gmail.com</span>
                    <span>+99455 555 55 55</span>
                </div>
                <div className="footer-nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;