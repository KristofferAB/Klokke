import "./App.css";
import { useState, useEffect } from "react";

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
    <>
      <h1>{time}</h1>

      {/* <div className="App">
        <header className="App-header">
          <p>Da er vi klare for å lage klokken eg kom på for 3 år siden</p>
        </header>
      </div> */}
      <div className="container">
        <Grid1 timeComponents={timeComponents} />
        {/* <h1>{time}</h1> */}
        <Grid2 timeComponents={timeComponents} />
      </div>
    </>
  );
}

const Grid1 = ({ timeComponents }) => {
  return (
    <div className="table1">
      {/* ---> COLUMN 1 <--- */}
      <div className="column 1">
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c105 ${
            (timeComponents.hour === 10) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 22) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 22
              ? "borderPM"
              : timeComponents.hour === 10
              ? "borderAM"
              : "white"
          }`}
        >
          10
        </div>

        <div className=""></div>
        <div
          className={`cell c95 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          21
        </div>
        <div
          className={`cell c95 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          21
        </div>

        <div className=""></div>
        <div
          className={`cell c85 ${
            (timeComponents.hour === 8) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 20) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 20
              ? "borderPM"
              : timeComponents.hour === 8
              ? "borderAM"
              : "white"
          }`}
        >
          20
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 2 <--- */}
      <div className="column 2">
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c104 ${
            (timeComponents.hour === 10) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 22) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 22
              ? "borderPM"
              : timeComponents.hour === 10
              ? "borderAM"
              : "white"
          }`}
        >
          10
        </div>

        <div className=""></div>
        <div
          className={`cell c94 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          21
        </div>
        <div
          className={`cell c94 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          21
        </div>

        <div className=""></div>
        <div
          className={`cell c84 ${
            (timeComponents.hour === 20) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : (timeComponents.hour === 20) & (timeComponents.tenMinutes >= 40)
              ? " higlight"
              : timeComponents.hour === 20
              ? "borderPM"
              : timeComponents.hour === 8
              ? "borderAM"
              : "white"
          }`}
        >
          20
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 3 <--- */}
      <div className="column 3">
        <div
          className={`cell c115 ${
            (timeComponents.hour === 11) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 23) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 23
              ? "borderPM"
              : timeComponents.hour === 11
              ? "borderAM"
              : "white"
          }`}
        >
          11
        </div>

        <div
          className={`cell c114 ${
            (timeComponents.hour === 11) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 23) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 23
              ? "borderPM"
              : timeComponents.hour === 11
              ? "borderAM"
              : "white"
          }`}
        >
          11
        </div>

        <div
          className={`cell c113 c103 ${
            (timeComponents.hour === 10 || timeComponents.hour === 11) &
            (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 22 || timeComponents.hour === 23) &
                (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 22 || timeComponents.hour === 23
              ? "borderPM"
              : timeComponents.hour === 10 || timeComponents.hour === 11
              ? "borderAM"
              : "white"
          }`}
        >
          10/11
        </div>

        <div className=""></div>
        <div
          className={`cell c93 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          21
        </div>
        <div
          className={`cell c93 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          21
        </div>

        <div className=""></div>
        <div
          className={`cell c73 83 ${
            (timeComponents.hour === 19 || timeComponents.hour === 20) &
            (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : (timeComponents.hour === 7 || timeComponents.hour === 8) &
                (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : timeComponents.hour === 20 || timeComponents === 19
              ? "borderPM"
              : timeComponents.hour === 8 || timeComponents.hour === 7
              ? "borderAM"
              : "white"
          }`}
        >
          19/20
        </div>
        <div
          className={`cell c74 ${
            (timeComponents.hour === 19) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : (timeComponents.hour === 7) & (timeComponents.tenMinutes >= 40)
              ? " higlight"
              : timeComponents.hour === 19 || timeComponents.hour === 7
              ? "borderPM"
              : "white"
          }`}
        >
          19
        </div>
        <div
          className={`cell c75 ${
            (timeComponents.hour === 19) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : (timeComponents.hour === 7) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : timeComponents.hour === 19 || timeComponents.hour === 7
              ? "borderPM"
              : "white"
          }`}
        >
          19
        </div>
      </div>

      {/* ---> COLUMN 4 <--- */}
      <div className="column 4">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c102 c112 ${
            (timeComponents.hour === 10 || timeComponents.hour === 11) &
            (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 22 || timeComponents.hour === 23) &
                (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 22 || timeComponents.hour === 23
              ? "borderPM"
              : timeComponents.hour === 10 || timeComponents.hour === 11
              ? "borderAM"
              : "white"
          }`}
        >
          10/11
        </div>
        <div
          className={`cell c92 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          21
        </div>
        <div
          className={`cell c92 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          21
        </div>

        <div
          className={`cell c101 ${
            (timeComponents.hour === 19 || timeComponents.hour === 20) &
            (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : (timeComponents.hour === 7 || timeComponents.hour === 8) &
                (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : timeComponents.hour === 20 || timeComponents.hour === 8
              ? "borderPM"
              : timeComponents.hour === 8 || timeComponents.hour === 7
              ? "borderAM"
              : "white"
          }`}
        >
          19/20
        </div>

        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 5 <--- */}
      <div className="column 5">
        <div
          className={`cell c125 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          12
        </div>

        <div
          className={`cell c124 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          12
        </div>

        <div
          className={`cell c123 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          12
        </div>

        <div
          className={`cell c122 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          12
        </div>
        <div
          className={`cell c91 c101 c111 c121 ${
            (timeComponents.hour === 21 ||
              timeComponents.hour === 22 ||
              timeComponents.hour === 23 ||
              timeComponents.hour === 12) &
            (timeComponents.tenMinutes >= 10)
              ? "highlightPM"
              : (timeComponents.hour === 9 ||
                  timeComponents.hour === 10 ||
                  timeComponents.hour === 11 ||
                  timeComponents.hour === 0) &
                (timeComponents.tenMinutes >= 10)
              ? "highlightAM"
              : timeComponents.hour === 21 ||
                timeComponents.hour === 22 ||
                timeComponents.hour === 23 ||
                timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 9 ||
                timeComponents.hour === 10 ||
                timeComponents.hour === 11 ||
                timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          9, 10, 11, 12
        </div>

        <div
          className={`cell c91 c81 c71 c61 ${
            (timeComponents.hour === 18 ||
              timeComponents.hour === 19 ||
              timeComponents.hour === 20 ||
              timeComponents.hour === 21) &
            (timeComponents.tenMinutes >= 10)
              ? "highlightPM"
              : (timeComponents.hour === 6 ||
                  timeComponents.hour === 7 ||
                  timeComponents.hour === 8 ||
                  timeComponents.hour === 9) &
                (timeComponents.tenMinutes >= 10)
              ? "highlightAM"
              : timeComponents.hour === 18 ||
                timeComponents.hour === 19 ||
                timeComponents.hour === 20 ||
                timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 6 ||
                timeComponents.hour === 7 ||
                timeComponents.hour === 9 ||
                timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          6,7,8,9
        </div>

        <div
          className={`cell c62 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          06
        </div>
        <div
          className={`cell c63 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          06
        </div>
        <div
          className={`cell c64 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          06
        </div>
        <div
          className={`cell c65 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          06
        </div>
      </div>

      {/* ---> COLUMN 6 <--- */}
      <div className="column 6">
        <div
          className={`cell c125 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          12
        </div>
        <div
          className={`cell c124 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          12
        </div>
        <div
          className={`cell c123 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          12
        </div>
        <div
          className={`cell c122 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          12
        </div>

        <div
          className={`cell c121 c31 c11 c21 ${
            (timeComponents.hour === 12 ||
              timeComponents.hour === 13 ||
              timeComponents.hour === 14 ||
              timeComponents.hour === 15) &
            (timeComponents.tenMinutes >= 10)
              ? "highlightPM"
              : (timeComponents.hour === 0 ||
                  timeComponents.hour === 1 ||
                  timeComponents.hour === 2 ||
                  timeComponents.hour === 3) &
                (timeComponents.tenMinutes >= 10)
              ? "highlightAM"
              : timeComponents.hour === 12 ||
                timeComponents.hour === 13 ||
                timeComponents.hour === 14 ||
                timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 0 ||
                timeComponents.hour === 1 ||
                timeComponents.hour === 2 ||
                timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          12, 13,14, 15
        </div>
        <div
          className={`cell c61 c 31 c41 c51 ${
            (timeComponents.hour === 15 ||
              timeComponents.hour === 16 ||
              timeComponents.hour === 17 ||
              timeComponents.hour === 18) &
            (timeComponents.tenMinutes >= 10)
              ? "highlightPM"
              : (timeComponents.hour === 3 ||
                  timeComponents.hour === 4 ||
                  timeComponents.hour === 5 ||
                  timeComponents.hour === 6) &
                (timeComponents.tenMinutes >= 10)
              ? "highlightAM"
              : timeComponents.hour === 15 ||
                timeComponents.hour === 16 ||
                timeComponents.hour === 17 ||
                timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 0 ||
                timeComponents.hour === 1 ||
                timeComponents.hour === 2 ||
                timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          15, 16,17,18
        </div>
        <div
          className={`cell c62 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          06
        </div>

        <div
          className={`cell c63 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          06
        </div>
        <div
          className={`cell c64 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          06
        </div>

        <div
          className={`cell c65 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          06
        </div>
      </div>

      {/* ---> COLUMN 7 <--- */}
      <div className="column 7">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c12 c22 ${
            (timeComponents.hour === 1 || timeComponents.hour === 2) &
            (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 13 || timeComponents.hour === 14) &
                (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 13 || timeComponents.hour === 14
              ? "borderPM"
              : timeComponents.hour === 1 || timeComponents.hour === 2
              ? "borderAM"
              : "white"
          }`}
        >
          10/11
        </div>
        <div
          className={`cell c32 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          03
        </div>

        <div
          className={`cell c32 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          03
        </div>

        <div
          className={`cell c42 c52 ${
            (timeComponents.hour === 4 || timeComponents.hour === 5) &
            (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 16 || timeComponents.hour === 17) &
                (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 16 || timeComponents.hour === 17
              ? "borderPM"
              : timeComponents.hour === 4 || timeComponents.hour === 5
              ? "borderAM"
              : "white"
          }`}
        >
          04/05
        </div>

        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 8 <--- */}
      <div className="column 8">
        <div
          className={`cell c15 ${
            (timeComponents.hour === 1) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 13) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 13
              ? "borderPM"
              : timeComponents.hour === 1
              ? "borderAM"
              : "white"
          }`}
        >
          01
        </div>

        <div
          className={`cell c14 ${
            (timeComponents.hour === 1) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 13) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 13
              ? "borderPM"
              : timeComponents.hour === 1
              ? "borderAM"
              : "white"
          }`}
        >
          01
        </div>

        <div
          className={`cell c13 c14 ${
            (timeComponents.hour === 1 || timeComponents.hour === 2) &
            (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 13 || timeComponents.hour === 14) &
                (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 13 || timeComponents.hour === 14
              ? "borderPM"
              : timeComponents.hour === 1 || timeComponents.hour === 2
              ? "borderAM"
              : "white"
          }`}
        >
          10/11
        </div>

        <div className=""></div>
        <div
          className={`cell c33 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          03
        </div>
        <div
          className={`cell c33 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          03
        </div>

        <div className=""></div>
        <div
          className={`cell c43 c53 ${
            (timeComponents.hour === 4 || timeComponents.hour === 5) &
            (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 16 || timeComponents.hour === 17) &
                (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 16 || timeComponents.hour === 17
              ? "borderPM"
              : timeComponents.hour === 4 || timeComponents.hour === 5
              ? "borderAM"
              : "white"
          }`}
        >
          04/05
        </div>

        <div
          className={`cell c54 ${
            (timeComponents.hour === 5) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 17) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 17
              ? "borderPM"
              : timeComponents.hour === 5
              ? "borderAM"
              : "white"
          }`}
        >
          05
        </div>
        <div
          className={`cell c55 ${
            (timeComponents.hour === 5) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 17) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 17
              ? "borderPM"
              : timeComponents.hour === 5
              ? "borderAM"
              : "white"
          }`}
        >
          05
        </div>
      </div>
      {/* ---> COLUMN 9 <--- */}
      <div className="column 9">
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c24 ${
            (timeComponents.hour === 2) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 14) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 14
              ? "borderPM"
              : timeComponents.hour === 2
              ? "borderAM"
              : "white"
          }`}
        >
          02
        </div>

        <div className=""></div>
        <div
          className={`cell c34 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          03
        </div>
        <div
          className={`cell c34 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          03
        </div>

        <div className=""></div>
        <div
          className={`cell c44 ${
            (timeComponents.hour === 4) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 16) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 16
              ? "borderPM"
              : timeComponents.hour === 4
              ? "borderAM"
              : "white"
          }`}
        >
          04
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 10 <--- */}
      <div className="column 10">
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c25 ${
            (timeComponents.hour === 2) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 14) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 14
              ? "borderPM"
              : timeComponents.hour === 2
              ? "borderAM"
              : "white"
          }`}
        >
          02
        </div>

        <div className=""></div>
        <div
          className={`cell c35 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          03
        </div>
        <div
          className={`cell c35 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          03
        </div>

        <div className=""></div>
        <div
          className={`cell c45 ${
            (timeComponents.hour === 4) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 16) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 16
              ? "borderPM"
              : timeComponents.hour === 4
              ? "borderAM"
              : "white"
          }`}
        >
          04
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

const Grid2 = ({ timeComponents }) => {
  return (
    <div className="table2">
      <div className="column c1">
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 9 ? "highlightAM" : "white"
          }`}
        >
          9
        </div>
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 8 ? "highlightAM" : "white"
          }`}
        >
          8
        </div>
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 7 ? "highlightAM" : "white"
          }`}
        >
          7
        </div>
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 6 ? "highlightAM" : "white"
          }`}
        >
          6
        </div>
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 5 ? "highlightAM" : "white"
          }`}
        >
          5
        </div>
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 4 ? "highlightAM" : "white"
          }`}
        >
          4
        </div>
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 3 ? "highlightAM" : "white"
          }`}
        >
          3
        </div>
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 2 ? "highlightAM" : "white"
          }`}
        >
          2
        </div>
        <div
          className={`cell ${
            timeComponents.lastMinutes >= 1 ? "highlightAM" : "white"
          }`}
        >
          1
        </div>
        {/* <div
          className={`cell ${
            timeComponents.lastMinutes >= 0 ? "highlightAM" : "white"
          }`}
        >
          0
        </div> */}
      </div>
      <div className="column c2">
        <div
          className={`cell ${
            timeComponents.tenSeconds >= 50 ? "highlightAM" : "white"
          }`}
        >
          50
        </div>
        <div
          className={`cell ${
            timeComponents.tenSeconds >= 40 ? "highlightAM" : "white"
          }`}
        >
          40
        </div>
        <div
          className={`cell ${
            timeComponents.tenSeconds >= 30 ? "highlightAM" : "white"
          }`}
        >
          30
        </div>
        <div
          className={`cell ${
            timeComponents.tenSeconds >= 20 ? "highlightAM" : "white"
          }`}
        >
          20
        </div>
        <div
          className={`cell ${
            timeComponents.tenSeconds >= 10 ? "highlightAM" : "white"
          }`}
        >
          10
        </div>
      </div>
      <div className="column c3">
        <div
          className={`cell ${
            timeComponents.lastSecond >= 9 ? "highlightAM" : "white"
          }`}
        >
          9
        </div>
        <div
          className={`cell ${
            timeComponents.lastSecond >= 8 ? "highlightAM" : "white"
          }`}
        >
          8
        </div>
        <div
          className={`cell ${
            timeComponents.lastSecond >= 7 ? "highlightAM" : "white"
          }`}
        >
          7
        </div>
        <div
          className={`cell ${
            timeComponents.lastSecond >= 6 ? "highlightAM" : "white"
          }`}
        >
          6
        </div>
        <div
          className={`cell ${
            timeComponents.lastSecond >= 5 ? "highlightAM" : "white"
          }`}
        >
          5
        </div>
        <div
          className={`cell ${
            timeComponents.lastSecond >= 4 ? "highlightAM" : "white"
          }`}
        >
          4
        </div>
        <div
          className={`cell ${
            timeComponents.lastSecond >= 3 ? "highlightAM" : "white"
          }`}
        >
          3
        </div>
        <div
          className={`cell ${
            timeComponents.lastSecond >= 2 ? "highlightAM" : "white"
          }`}
        >
          2
        </div>
        <div
          className={`cell ${
            timeComponents.lastSecond >= 1 ? "highlightAM" : "white"
          }`}
        >
          1
        </div>
      </div>
    </div>
  );
};

export default App;
