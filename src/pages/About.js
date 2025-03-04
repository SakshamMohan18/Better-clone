import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <h1>About Us</h1>
        <p>Learn more about Better.com and our mission.</p>
      </section>
      <Footer />
    </>
  );
};

export default About;
