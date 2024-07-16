import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";
import image4 from "../images/Layout1.png";

function LandingPage() {
  return (
    <main className="section-hero">
      <section className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">Modern Clock</h1>
          <p className="hero-description">
            Welcome to Modern Clock, a revolutionary way of visualizing time.
            Our innovative design challenges the traditional approach to
            timekeeping, offering a fresh and engaging perspective.
          </p>
          <Link className="button-link margin-right-sm" to="/klokke">
            To Clock
          </Link>
          <Link className="button2-link" to="/about">
            How it works
          </Link>
        </div>
      </section>
      <div className="hero-img-box margin-right-sm">
        <img
          src={image4}
          alt=" Minute 1layout"
          width="500px"
          height="400px"
        ></img>
      </div>
    </main>
  );
}

export default LandingPage;
