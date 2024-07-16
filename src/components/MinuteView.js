import React from "react";

function MinuteView({ timeComponents }) {
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
}

export default MinuteView;
