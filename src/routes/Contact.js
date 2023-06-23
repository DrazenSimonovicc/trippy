import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/10.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Contact" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
