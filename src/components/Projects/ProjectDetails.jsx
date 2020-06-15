import React from 'react'
import DetailsProject from "../Projects/DetailsProject.css"
import { FaArrowLeft, FaArrowRight, FaTh} from "react-icons/fa"
import {Link} from "react-router-dom"
import image from "../../assets/green-wrapped.jpg";
import {CubeGrid} from "styled-loaders-react"

class  ProjectDetails extends React.Component {
    

    state={
        data : [],
        counter: this.props.match.params.id,
        isLoading:true
    }
    
    fetchingData = (sign) =>{
       
        this.setState({
            isLoading: true
        })

        setTimeout(() => {
            
            fetch("http://localhost:3000/data/" + this.state.counter)
            .then(response => response.json())
            .then(data => this.setState({ data: data, isLoading: false }));

        },1000)
       

            if (sign==="-"){
                if(+this.state.counter <= 1){
                    this.setState(prevState => {
                        return { counter: 12 }
                    }) 
                }else{
                    this.setState(prevState => {
                        return { counter: +prevState.counter - 1 }
                    })
                }
               
            }
            if (sign==="+") {
                if (+this.state.counter >= 12) {
                    this.setState(prevState => {
                        return { counter: 1 }
                    })
                }
                else{
                    this.setState(prevState => {
                        return { counter: +prevState.counter + 1 }
                    })
                }
                
            }
        
        }

    componentDidMount(){

        
        
        this.fetchingData()
    }

    

    
    

    render(){
        return (
            
            
            <div> 
                {this.state.isLoading ? <CubeGrid/> : 
                 <div>
                    <div className="single-project">
                        <div className="details-project">
                            <h2 className="heading1">{this.state.data.title}</h2>
                            <p className="paragraph">{this.state.data.description1}</p>
                            <p className="paragraph paragraph-2">{this.state.data.description2}</p>

                            <h4 className="heading4">Client: <span className="heading4-span">{this.state.data.client}</span> </h4>
                            <h4 className="heading4">Date: <span className="heading4-span">{this.state.data.date}</span></h4>
                            <h4 className="heading4">Share: <span className="heading4-span">{this.state.data.share}</span> </h4>

                        </div>

                        <img className="project-image" src={image} alt="" />

                    </div>

                    <div className="icons-for-navigation">
                        <Link to={"/project/" + this.state.counter} onClick={() => this.fetchingData("-")} className="prev-icon slide-icon">
                            <FaArrowLeft /> <span>Previous project</span>
                        </Link>
                        <Link to="/projects" className="menu-icon slide-icon">
                            <FaTh />
                        </Link>
                        <Link to={"/project/" + this.state.counter} onClick={() => this.fetchingData("+")} className="next-icon slide-icon">
                            <span>Next project</span> <FaArrowRight />
                        </Link>
                    </div>
                 </div>
                 }
                        
                        
                
                
            </div>

        )
    }
    
    
}
export default ProjectDetails;