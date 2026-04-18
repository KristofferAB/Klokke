import React, { useState, useEffect } from "react";
import HourView1 from "./HourView1";
import HourView2 from "./HourView2";
import MinuteView from "./MinuteView";
import axios from "axios";
import "../styles/Layout.css";

const OSLO_COORDINATES = { lat: 59.91273, lng: 10.74609 };

function Layout({ timeComponents }) {
  const [traditional, setTraditional] = useState(true);
  const [sunData, setSunData] = useState(null);
  const [sunError, setSunError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.sunrisesunset.io/json?lat=${OSLO_COORDINATES.lat}&lng=${OSLO_COORDINATES.lng}`
      )
      .then((res) => setSunData(res.data.results))
      .catch(() => setSunError(true));
  }, []);

  const toggleTraditional = () => {
    setTraditional(!traditional);
  };
  const extractTimeComponents = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "AM" && hours === 12) {
      hours = 12; // Keep midnight as 12 AM
    } else if (modifier === "PM" && hours !== 12) {
      // hours = hours; // PM hours remain unchanged
    }

    const tenMinutes = Math.floor(minutes / 10) * 10;

    return {
      hour: hours,
      tenMinutes: tenMinutes,
      minutes: minutes,
    };
  };

  const sunriseTime = sunData ? extractTimeComponents(sunData.sunrise) : null;
  const sunsetTime = sunData ? extractTimeComponents(sunData.sunset) : null;
  const goldenHourTime = sunData ? extractTimeComponents(sunData.golden_hour) : null;

  return (
    <>
      {sunError && (
        <div className="sun-error">
          Could not load sunrise/sunset data. Sun indicators are unavailable.
        </div>
      )}
      <div className="info-box">
        <h1 className="clock-primary">
          Clock style: {traditional ? "Traditional" : "Modern"}
        </h1>
        <div className="layout-buttons">
          <button
            className="layout-button1"
            onClick={toggleTraditional}
            disabled={traditional}
          >
            Traditional
          </button>
          <button
            className="layout-button1"
            onClick={toggleTraditional}
            disabled={!traditional}
          >
            Modern
          </button>
        </div>
        {/* <h1>Sunrise at: {sunData.sunrise}</h1>
        <h1>Sunset at: {sunData.sunset}</h1>
        <h1>Golden hour:{sunData.golden_hour}</h1> */}
      </div>

      <div className="container">
        {traditional ? (
          <HourView1
            timeComponents={timeComponents}
            sunrise={sunriseTime}
            sunset={sunsetTime}
            golden={goldenHourTime}
          />
        ) : (
          <HourView2
            timeComponents={timeComponents}
            sunData={sunData}
            sunrise={sunriseTime}
            sunset={sunsetTime}
            golden={goldenHourTime}
          />
        )}
        <MinuteView timeComponents={timeComponents} />
      </div>
    </>
  );
}
export default Layout;
