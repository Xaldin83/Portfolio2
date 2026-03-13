// import { Link } from "react-router-dom";
import Footer from "../composants/Footer";
import Navbar from "../composants/Header";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import '../styles/contact.scss';


function ContactForm() {
  const [state, handleSubmit] = useForm("meerkwav");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Votre adresse mail  
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        cols={25}
        rows={10}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

// export default App;


const Contact = () =>{

    return (
        <>

            <Navbar/>
            <main id="mainContact">
              <h1>Me contacter</h1>
              <App/> 
            </main>
            <Footer/>
        </>
    )
};

export default Contact