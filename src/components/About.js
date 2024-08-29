import React from "react";
import "../styles/About.css";
import image1 from "../images/layoutH1.png";
import image3 from "../images/LayoutM1.png";
import image2 from "../images/LayoutH2.png";
// import image4 from "../images/sunrise img.jpg";
import image5 from "../images/moon1.png";
import image6 from "../images/sunrise.png";
import image7 from "../images/sun.png";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-box">
          <h1 className="heading-primary"> How it works</h1>
          <p className="hero-description about-text">
            Our clock takes advantage of the traditional understanding of a
            clock, using lines around a central point where the line at the top
            is 12 o'clock, to the right is 3 o'clock, the bottom is 6 o'clock,
            and the left is 9 o'clock. However, unlike traditional clocks, our
            clock does not have hour or minute hands. Instead, our clock uses
            visuals and light to highlight the current hour.
          </p>
        </div>

        <div className="flex-container">
          <div className="about-description">
            <h2 className="heading-secondary2">Hour layout 1- Traditional</h2>
            <p className="about-text">
              Hour Layout 1 is one of the two ways our modern clock visualizes
              time. Unlike traditional clocks, our modern design does not
              feature numbered markers around the face. Instead, it uses
              highlighted circles emanating from the center. Each circle,
              starting from the center, represents every 10 minutes. By looking
              at the highlighted direction, you can tell the hour, and by
              counting the lit circles, you can understand how many ten-minute
              intervals have passed.{" "}
            </p>
          </div>
          <div>
            <img
              src={image1}
              alt=" hour 1 layout"
              width="400px"
              height="400px"
            ></img>
          </div>
        </div>

        <div className="flex-container">
          <div>
            <img
              src={image2}
              alt=" hour 1 layout"
              width="400px"
              height="500px"
            ></img>
          </div>
          <div className="about-description">
            <h2 className="heading-secondary2">Hour layout 2- Innovative</h2>
            <p className="about-text">
              Hour Layout 2 is the second way to visualize time. This design
              does not ... Instead, it uses highlighted circles emanating from
              the center. Each circle, starting from the center, represents
              every 10 minutes. By looking at the highlighted direction, you can
              tell the hour, and by counting the lit circles, you can understand
              how many ten-minute intervals have passed.{" "}
            </p>
          </div>
        </div>

        <div className="flex-container">
          <div className="about-description">
            <h2 className="heading-secondary2">Minute layout 1</h2>
            <p className="about-text">
              Minute layout is how the minutes and seconds are vizualized. It is
              seperate from the hour layout and is a precise way to read minutes
              and seconds. It consists of three columns. The left one for
              seconds the middle for every 10 seconds and the left one for
              minutes. The left and right have 9 circles and the midle one have
              5 circles.{" "}
            </p>
          </div>
          <div>
            <img
              src={image3}
              alt=" Minute 1layout"
              width="400px"
              height="400px"
            ></img>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h1 className="heading-primary"> API</h1>
        <p className="card-section-text">
          The application also utilizes sunrisesunset.io to vizualize in the
          application when the sun is rising, setting and when it is golden hour
          in the modern clock.{" "}
        </p>
        <div className="card-box">
          <div className="card">
            <img
              src={image6}
              className="card-img"
              alt=" sunrise img"
              width="150px"
              height="150px"
            ></img>
            <h3 className="card-title">Sunrise</h3>
            <ul className="card-list">
              <li>Shows when the sun is rising.</li>
              <li>Uses a sun with clouds icon</li>
            </ul>
          </div>
          <div className="card">
            <img
              className="card-img"
              src={image5}
              alt=" moon img"
              width="150px"
              height="150px"
            ></img>
            <h3 className="card-title">Sunset</h3>
            <ul className="card-list">
              <li>Shows when the sun is setting.</li>
              <li>Moon icon to vizulize sunset.</li>
            </ul>
          </div>
          <div className="card">
            <img
              className="card-img"
              src={image7}
              alt=" sun icon "
              width="150px"
              height="150px"
            ></img>
            <h3 className="card-title">Golden hour</h3>
            <ul className="card-list">
              <li>Shows when its golden hour.</li>
              <li>Sun icon to vizualize golden hour.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
