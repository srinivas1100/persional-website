import React, { useState } from "react";
import "../ContactUs/ContactUs.css";
import ContactUsImage from "../../assets/contact-us.svg"
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(0);

  const userName = (event) => {
    setName(event.target.value)
  }
  const userEmail = (event) => {
    setEmail(event.target.value);
  }
  const userMessage = (event) => {
    setMessage(event.target.value);
  }




  // var templateParams = {
  //   name: `${name.toString()}`,
  //   email: `${email.toString()}`,
  //   message: `${message.toString()}`,
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_p4y1d2l', 'template_gcmrkel', {
      message: message,
      from_name: name,
      email_id: email,
    }, 'V2ADe9oBg3HJGW6DV')
      .then((result) => {
        if (result.text === "OK") {
          console.log(result.text);
          setName('');
          setEmail('');
          setMessage('');
          setStatus(2)
        } else {
          console.log("somthing went worng plase try again")
          setStatus(1)
        }



      }, (error) => {
        setStatus(1)
        console.log(error.text);
      });
  };


  return (
    <div className="contact-us">
      <div className="lets-talk-container">
        <form className="form" onSubmit={sendEmail}>
          <h1 className="lets-talk-text">Let's Talk</h1>
          <p className="lets-talk-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti in adipisci expedita facilis nulla </p>
          <p className="input-label padding">Your Name</p>
          <input className="input-text-field" value={name} type="text" onChange={userName} />
          <p className="input-label padding">Your Email</p>
          <input className="input-text-field" value={email} type="email" onChange={userEmail} />
          <p className="input-label padding">Your Message</p>
          <textarea className="input-text-message" value={message} type="text" cols="40" rows="5" onChange={userMessage} />
          <div className="padding"></div>
          <button className="hire-me">submit</button>

          {status === 1 ? <p className="padding">somthing went wrong plase try again</p> : status === 2 ? <p className="padding">message sent successfully</p> : <p className="padding"></p>}

          {/* <button className="hire-me"><span className="background">Send Message</span></button> */}
        </form>
      </div>
      <div className="persional-info-container">
        <img className="contact-us-image" src={ContactUsImage} alt="" />
        <p className="padding">
          Email: Srinu11112000@gmail.com
        </p>
        <p className="padding">Phone: 9505962262</p>
      </div>
    </div>
  );
};

export default ContactUs;
