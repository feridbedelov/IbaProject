import React from 'react';
import "../Contact/contact.css"
import ContactForm from "../Contact/ContactForm/ContactForm"
import map from "../../assets/mapforcontact.png"
function Contact() {
    return (
        <div className="contact-container">
            <div className="container-for-contact contact-content">
                <div className="contact-info">
                    <h2 className="heading3">Contact Info:</h2>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci exercitationem neque nostrum. Illo dignissimos sequi ad obcaecati aliquid dolor, praesentium possimus, dolore recusandae.</p>
                    <h4 className="heading4">Address: <span className="heading4-span">1001 Santa Monica Boluevard </span> </h4>
                    <h4 className="heading4">Phone: <span className="heading4-span">+994 77 897 65 25</span> </h4>
                    <h4 className="heading4">Email: <span className="heading4-span">feridbedelov123@gmail.com</span> </h4>
                    <h4 className="heading4">Fax: <span className="heading4-span">+44 987 065 789</span> </h4>
                </div>
                <div className="contact-form-content">
                    <ContactForm></ContactForm>
                </div>
                
                <img src={map} alt="" className="map-for-contact" />
            </div>
            
        </div>
    )
}
export default Contact;