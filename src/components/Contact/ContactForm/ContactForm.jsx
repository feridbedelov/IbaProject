import React from 'react';
import '../ContactForm/ContactForm.css';
import Axios from 'axios';
import uuid from 'uuid';

class ContactForm extends React.Component {

    state = {
        name: "",
        email: "",
        title : "",
        comment : "",
        nameError: "",
        emailError: "",
        titleError: "",
        commentError:""
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    clearInputs = () => {
        this.setState({
            name: "",
            email: "",
            title: "",
            comment: "",
            nameError: "",
            emailError: "",
            titleError: "",
            commentError: "" 
        });
    }

    validate = () => {

        let nameError =  "";
        let emailError =  "";
        let titleError = "";
        let commentError = "";

        let isValid = true;
        if(this.state.name.length < 5){
            nameError = "Name field must be at least 5 chars long";
            
            isValid = false;
        }
        if (this.state.title.length < 5) {
            
                titleError = "Title field must be at least 5 chars long";
           
            isValid = false;
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))){
           
                emailError =  "Enter a valid email"
            
            isValid = false;
        }
        if (this.state.comment.length < 15) {
            
            commentError = "Comment field must be at least 15 chars long";
            
            isValid = false;
        }
        if(!isValid){
            this.setState({
                nameError,
                titleError,
                emailError,
                commentError
            })
        }
            
        return isValid;
    } 
    
    handleSubmit = (e) =>{
        e.preventDefault();
        let valid = this.validate();
        if(valid){
            Axios.post("http://localhost:3000/profile/",{
                "id":uuid(),
                "name":this.state.name,
                "email":this.state.email,
                "title":this.state.title,
                "comment":this.state.comment
            })
            .then(resp => {
                console.log(resp.data);
            })
            .catch(error => {
                console.log(error);
            });  
            console.log(this.state);
            this.clearInputs();
            
        }
    }
    
    render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="contact-form">
                <div className="form-group-row">
                    <div className="form-group ">
                        <input onChange={this.handleInputChange} type="text" name="name" className="name" placeholder="Your Name" value={this.state.name} />
                        
                        {this.state.nameError ? <span>{this.state.nameError}</span> : null}
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInputChange} type="text" name="email" className="email" placeholder="Your Email" value={this.state.email} />
                        {this.state.emailError ? <span>{this.state.emailError}</span> : null}
                    </div>
                </div>
                <div className="form-group-row">
                    <div className="form-group">
                        <input onChange={this.handleInputChange} type="text" name="title" className="title" placeholder="Your Title" value={this.state.title} />
                        {this.state.titleError ? <span>{this.state.titleError}</span> : null}
                    </div>
                </div>
                <div className="form-group-row">
                    <div className="form-group">
                        <textarea value={this.state.comment} onChange={this.handleInputChange} placeholder="Your Comment" name="comment" className='comment' cols="30" rows="8"></textarea>
                        {this.state.commentError ? <span>{this.state.commentError}</span> : null}
                    </div>
                </div>
                <div className="contact-submit">
                    <button type='submit' className="btn">Send Message</button>
                </div>
            </div>
        </form>
        
    )
}
}
export default ContactForm;