import React from "react";
import "../ContactUs/ContactUs.css";
import ContactUsImage from "../../assets/contact-us.svg"

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="lets-talk-container">
        <h1 className="lets-talk-text">Let's Talk</h1>
        <p className="lets-talk-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti in adipisci expedita facilis nulla </p>
        <p className="input-label padding">Your Name</p>
        <input className="input-text-field" type="text" />
        <p className="input-label padding">Your Email</p>
        <input className="input-text-field" type="email" />
        <p className="input-label padding">Your Message</p>
        <textarea className="input-text-message" type="text" cols="40" rows="5" />
        <div className="padding"></div>
        <div className="hire-me"><span>Send Message</span></div>
      </div>
      <div className="persional-info-container">
        <img className="contact-us-image" src={ContactUsImage} alt="" />
        <p className="padding">
          Email: Srinu11112000@gmail.com
        </p>
        <p>Phone: 9505962262</p>
      </div>
    </div>
  );
};

export default ContactUs;
