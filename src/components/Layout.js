import React, { useState, useEffect } from "react";
import HourView1 from "./HourView1";
import HourView2 from "./HourView2";
import MinuteView from "./MinuteView";
import axios from "axios";
import "../styles/Layout.css";

function Layout({ timeComponents }) {
  const [traditional, setTraditional] = useState(true);
  const [sunData, setSunData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //coordinates Oslo
  const lat = 59.91273;
  const lng = 10.74609;

  useEffect(() => {
    // Define the function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`
        );
        setSunData(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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

  const sunriseTime = extractTimeComponents(sunData.sunrise);
  const sunsetTime = extractTimeComponents(sunData.sunset);
  const goldenHourTime = extractTimeComponents(sunData.golden_hour);

  return (
    <>
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
