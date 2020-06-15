import React from 'react'
import "../About/About.css";
import {Link} from 'react-router-dom';

import Stats from "../Statistics/Stats"
import signature from "../../assets/signature.png"
import aboutImageBg from "../../assets/green-chair.jpg"

function About() {
    return (
        <div>
            <div className="about-me">
                <div className="profile-image">
                    
                </div> 
                <div className="dark-overlay"></div> 
                <div className="about-me-details">
                    <h2 className="heading2">Kendrick Lamar</h2>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio voluptate ipsum modi tempora placeat.</p>
                </div>
            </div>
            <Stats></Stats>
            <div className="about-section-2">
                <div className="image-about">
                    <img src={aboutImageBg} alt=""/>
                </div>
                <div className="about-box-container">
                    <div className="about-box">
                    
                        <h1 className="heading2 about-heading2">About Us</h1>
                        <p className="paragraph">Divide have don't man wherein air fourth.Own itself make have night won't make.
                        A you under Seed appear which good give.Own give 
                        </p>
                        <p className="paragraph">It won't make.
                            A you under Seed  which good give.Own give air without fowl 
                        </p>
                        <img src={signature} alt="" className='about-pic' />
                    </div>
                </div>
            </div>

            <div className="need-a-project">
                <h2 className='heading2'>Need a Project?</h2>
                <p className="paragraph">Let us know what you are looking for in an agency.
                   We'll take a look and see if this could be the start of someting beautufil.
                </p>
                <Link to="/contact" className="btn">
                    LET'S TALK
                </Link>
            </div>
        </div>
    )
}
export default About;