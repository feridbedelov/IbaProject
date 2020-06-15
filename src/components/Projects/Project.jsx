import React from 'react';
import "../Projects/Projects.css";
import hover from '../../assets/hover.png';
import {Link} from "react-router-dom";

import image from "../../assets/green-wrapped.jpg";
class Project extends React.Component {
    render(){
        return (
            <Link to={"/project/" + this.props.project.id} className="project-link">
                <img src={image} alt="" className="projectImage" />
                <div className="middle">
                    <img src={hover} alt="" className="overlayImage" />
                </div>
            </Link>
        )
    }
    
}
export default Project;

