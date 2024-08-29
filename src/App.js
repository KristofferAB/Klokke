import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Layout from "./components/Layout";
// import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const [time, setTime] = useState(getCurrentTime());
  const [timeComponents, setTimeComponents] = useState({
    hour: new Date().getHours(),
    tenMinutes: Math.floor(new Date().getMinutes() / 10) * 10,
    minutes: new Date().getMinutes(),
    lastMinutes: new Date().getMinutes() % 10,
    tenSeconds: Math.floor(new Date().getSeconds() / 10) * 10,
    seconds: new Date().getSeconds(),
    lastSecond: new Date().getSeconds() % 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = getCurrentTime();
      setTime(currentTime);

      const date = new Date();
      const currentHour = date.getHours();
      const currentMinutes = date.getMinutes();
      const currentLastMinutes = date.getMinutes() % 10;
      const currentTenMinutes = Math.floor(currentMinutes / 10) * 10;
      const currentSeconds = date.getSeconds();
      const currentTenSeconds = Math.floor(currentSeconds / 10) * 10;
      const currentLastSecond = date.getSeconds() % 10;

      setTimeComponents((prev) => {
        return {
          hour: currentHour,
          minutes: currentMinutes,
          lastMinutes: currentLastMinutes,
          seconds: currentSeconds,
          lastSecond: currentLastSecond,
          tenMinutes: currentTenMinutes,
          tenSeconds: currentTenSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/about" Component={About} />
        <Route
          path="/klokke"
          element={<Layout timeComponents={timeComponents} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
