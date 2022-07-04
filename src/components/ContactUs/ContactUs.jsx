import React from "react";
import "../ContactUs/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="lets-talk-container">
        <h1 className="lets-talk-text">Let's Talk</h1>
        <p className="lets-talk-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti in adipisci expedita facilis nulla </p>
        <p className="input-label">Your Name</p>
        <input className="input-text-field" type="text" />
        <p className="input-label">Your Email</p>
        <input className="input-text-field" type="email" />
        <p className="input-label">Your Message</p>
        <textarea className="input-text-message" type="text"  cols="40" rows="5" />
        <div className="hire-me"><span>Send Message</span></div>
      </div>
      <div className="persional-info-container">
        <div className="svg-image"></div>
        <div className="location">
            <p className="location-text">Location</p>
            <p className="location-text">Location</p>
        </div>
        <div className="location">
            <p className="location-text">Location</p>
            <p className="location-text">Location</p>
        </div>
        <div className="location">
            <p className="location-text">Location</p>
            <p className="location-text">Location</p>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
