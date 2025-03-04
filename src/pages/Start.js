import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/start.css";

const Start = () => {
  return (
    <>
      <Navbar />
      <section className="start">
        <h1>Start Your Journey</h1>
        <button>Get Started</button>
      </section>
      <Footer />
    </>
  );
};

export default Start;
