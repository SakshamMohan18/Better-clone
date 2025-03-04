import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <h1>Find a better way to buy a home</h1>
        <p>Fast, simple, and 100% online</p>
        <button className="hero-btn">Get Started</button>
      </section>
      <Footer />
    </>
  );
};

export default Home;
