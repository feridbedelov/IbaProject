import React from 'react'
import './Navbar.css';
import logo from "../Navbar/logo.png";
import {Link} from "react-router-dom"



class Navbar extends React.Component {

    classToggle(){
        const navs = document.querySelector(".nav-item");
        navs.forEach(nav => nav.classList.toggle('ToggleShow'));
    }


    componentDidMount(){
       

    }
    
    render(){
        return (
            <div className='header'>
                <img src={logo} alt="" className="logo" />
                
                <ul className='nav-list'>
                    <li className='nav-item '>
                        <Link to="/" className="nav-link">
                            HOME
                    </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/projects" className="nav-link">
                            PROJECTS
                    </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact" className="nav-link">
                            CONTACT
                    </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className="nav-link">
                            ABOUT
                    </Link>
                    </li>
                </ul>
            </div>
        )

    }   
    
}
export default Navbar;