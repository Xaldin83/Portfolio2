// import { Link } from "react-router-dom";
import Footer from "../composants/Footer";
import Navbar from "../composants/Header";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/contact.scss';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lxpossg', 'template_4rfdp68', form.current, {
        publicKey: '15830R4mtb_zvVWKY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" cols="25" rows="14"/>
      <input type="submit" value="Send" />
    </form>
  );
};


const Contact = () =>{

    return (
        <>

            <Navbar/>
            <h1>Me contacter</h1>
            <ContactUs/>

            <Footer/>
        </>
    )
};

export default Contact