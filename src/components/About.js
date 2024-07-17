import React from "react";
import "../styles/About.css";
import image1 from "../images/layoutH1.png";
import image3 from "../images/LayoutM1.png";
import image2 from "../images/LayoutH2.png";

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

      <section className="">
        <h1 className="heading-primary">Other features</h1>
        <div className="about-box">
          <div>
            <h3>Card1</h3>
          </div>
          <div>
            <h3>Card2</h3>
          </div>
          <div>
            <h3>Card3</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
