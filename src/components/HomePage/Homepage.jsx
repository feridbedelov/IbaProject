import React from 'react';
import './Homepage.css';

import signature from "../HomePage/signature.PNG";
import fancyBox from "../../assets/fancy-box.jpg";
import playButton from "../../assets/play-button.png"
import diamond from "../../assets/diamond.png"
import arc from "../../assets/arc.png"
import phone from "../../assets/phone.png"
import joy from "../../assets/joy.png"
import plane from "../../assets/plane.png"
import servicesStar from "../../assets/services-star.png"
import magicWand from "../../assets/magic-wand.png"
import bucket from "../../assets/paint-bucket.png"
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";


import ContactForm from '../Contact/ContactForm/ContactForm';
import { Link } from 'react-router-dom';
import Stats from '../Statistics/Stats';
import CarouselQuotes from '../CarouselQuotes/CarouselQuotes';
import Project from '../Projects/Project';


class Homepage extends React.Component {
    




    state = {
        hits:[]
    }
    
    componentDidMount(){
        
        fetch("http://localhost:3000/data")
            .then(response => response.json())
            .then(data => this.setState({ hits: data }));
    }

    render(){
    return (
        <div className='Homepage'>
            <section className="section-first">
                <div className="first-section-box">
                    <h1 className="heading1">We Design and Develop</h1>
                    <p className="paragraph">We are a new design studio based in USA.We have over 20 years of combined experience,and know a thing or two about designing websites and mobile apps.</p>
                    <Link to="/contact" className="btn">Contact Us</Link>
                </div>
            </section>
            <section className="test">

            </section>
            <section className="about">
                <div className="about-box">
                    <h1 className="heading2 about-heading2">About Us</h1>
                    <p className="paragraph">Divide have don't man wherein air fourth.Own itself make have night won't make.
                    A you under Seed appear which good give.Own give air without fowl moewth  dry first heaven fruit,dominion she'd won't very well.
                    </p>
                    <img src={signature} alt="" className='about-pic' />
                </div>
            </section>
            <section className="skills">
                
                <div className="skills-details ">
                    <h1 className="heading2 skills-heading2">Professional Skills</h1>
                    <div className="skill-box">
                                <h2 className="skill-name">
                                    <span className="name-itself" >UI/UX DESIGN</span>
                                    <span className="percentage">75%</span>
                                </h2>
                                <div className="meter">
                            <span style={{ width: "75%" }} id="ui-ux" className='ui-ux' ></span>
                                </div>
                            </div>
                    <div className="skill-box">
                                <h2 className="skill-name">
                                    <span className="name-itself" >WEB DEVELOPMENT</span>
                                    <span className="percentage">90%</span>
                                </h2>
                                <div className="meter">
                            <span style={{ width: "90%" }} id="web" className='web' ></span>
                                </div>
                            </div>
                    <div className="skill-box last-skillbox">
                                <h2 className="skill-name">
                                    <span className="name-itself" >MARKETING</span>
                                    <span className="percentage">65%</span>
                                </h2>
                                <div className="meter">
                            <span style={{ width: "65%" }} className='marketing'  id="marketing" ></span>
                                </div>
                    </div>  
                </div>
                <div className="skills-image"></div>
               
            </section>

            <Stats />


            <section className="projects">
                <div className="project-container">

                    {
                        this.state.hits.splice(0,8).map(project => (
                            <Project key={project.id} project={project} />
                        ))
                    }


                </div>
                <div className="load-more">
                    <Link to="/projects" className="load-more-button">
                        Load More Work
                    </Link>
                </div>

            </section>

            <section className="work-process">

                <h1 className="heading2">Our Work Process</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt autem ducimus reiciendis hic unde omnis cum soluta odio velit itaque.</p>
                <div className="fancyBox-container">


                    <Link to={fancyBox} data-fancybox='gallery'>
                        <img src={fancyBox} alt="" className = "fancyBox" />
                        <img src={playButton} alt="" className="play-button" />
                    </Link>

                </div>
            </section>

            <section className="services">
                <div className="container service-container">
                    <div className="service">
                        <img src={diamond} alt="" className="service-icon" />
                        <h3>UI/UX DESIGN</h3>
                        <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi?</p>
                    </div>
                    <div className="service">
                        <img src={arc} alt="" className="service-icon" />
                        <h3>WEB DEVELOPMENT</h3>
                        <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi?</p>
                    </div>
                    <div className="service">
                        <img src={phone} alt="" className="service-icon" />
                        <h3>APP/MOBILE</h3>
                        <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi?</p>
                    </div>
                    <div className="service">
                        <img src={joy} alt="" className="service-icon" />
                        <h3>GAME DESIGN</h3>
                        <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi?</p>
                    </div>
                    <div className="service">
                        <img src={plane} alt="" className="service-icon" />
                        <h3>SEO/MARKETING</h3>
                        <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi?</p>
                    </div>
                    <div className="service">
                        <img src={servicesStar} alt="" className="service-icon" />
                        <h3>PHOTOGRAPHY</h3>
                        <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi?</p>
                    </div>
                    <div className="service">
                        <img src={magicWand} alt="" className="service-icon" />
                        <h3>GRAPHIC DESIGN</h3>
                        <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi?</p>
                    </div>
                    <div className="service">
                        <img src={bucket} alt="" className="service-icon" />
                        <h3>ILLUSTRATIONS</h3>
                        <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sequi?</p>
                    </div>
                </div>
            </section>

            <CarouselQuotes></CarouselQuotes>

            <section className="clients">
                <div className="container client-container">
                    <img src={client1} alt="" className="client" />
                    <img src={client2} alt="" className="client" />
                    <img src={client3} alt="" className="client" />
                    <img src={client4} alt="" className="client" />
                    <img src={client5} alt="" className="client" />
                </div>
            </section>

            <div className="contact-in-home">
                <div className="contact-in-home-container">
                    <h2 className='heading2'>Need a Project?</h2>
                    <p className="paragraph">Let us know what you are looking for in an agency.
                       We'll take a look and see if this could be the start of someting beautufil.
                </p>
                </div>
                
                <ContactForm />
            </div>

        </div>
    )
    }
    
}

export default Homepage;