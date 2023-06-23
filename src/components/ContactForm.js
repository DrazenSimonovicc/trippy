import React from "react";
import "./ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h2>Send a message to us!</h2>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Subject"></input>
        <textarea placeholder="Message" rows={4}></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
