import React from 'react'
import "../Projects/Projects.css"
import Project from "../Projects/Project"
import {CubeGrid} from "styled-loaders-react"



class Projects extends React.Component  {

    state = {
        hits:[],
    }


    componentDidMount() {

       


        fetch("http://localhost:3000/data")
            .then(response => response.json())
            .then(data => this.setState({ hits: data }));
    }


    render(){
        return (
            <div>
                 
                    <div className="project-designer-container">
                        <div className="project-designer">
                            <h2 className="heading2">UI/UX & Graphic Designer</h2>
                            <p className="paragraph">
                                I am a Graphic & Web Designer based in New York,specializing in User
                                Interface Design and Development
                        </p>
                        </div>
                    </div>
                    
                            <section className="projects">
                                <div className="project-container">
                                    {
                                        this.state.hits.map(project => (
                                            <Project key={project.id}   project=   {project} />
                                        ))
                                    }
                                </div>
                            </section>
                    
                        
                    
              
            </div>
        )
    }
    
}
export default Projects;


