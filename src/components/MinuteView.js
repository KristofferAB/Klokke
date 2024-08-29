import React, { useState, useEffect } from "react";

function MinuteView({ timeComponents }) {
  const [isAm, setIsAm] = useState(false);

  const getClassName = (isAm, value, time, pmThreshold = 12) => {
    if (!isAm && time >= value) {
      return "highlightPM";
    }
    if (isAm && time >= value) {
      return "highlightAM";
    }
    return "white";
  };

  useEffect(() => {
    if (timeComponents.hour > 12) {
      setIsAm(false);
    } else {
      setIsAm(true);
    }
  }, [timeComponents.hour]);

  const minutes = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const tenSecond = [50, 40, 30, 20, 10];
  const seconds = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="table2">
      <div className="column c1">
        {minutes.map((minute) => (
          <div
            key={minute}
            className={`cell ${getClassName(
              isAm,
              minute,
              timeComponents.lastMinutes
            )}`}
          >
            {minute}m
          </div>
        ))}
      </div>
      <div className="column c2">
        {tenSecond.map((tenSecond) => (
          <div
            key={tenSecond}
            className={`cell ${getClassName(
              isAm,
              tenSecond,
              timeComponents.tenSeconds
            )}`}
          >
            {tenSecond}s
          </div>
        ))}
      </div>
      <div className="column c3">
        {seconds.map((second) => (
          <div
            key={second}
            className={`cell ${getClassName(
              isAm,
              second,
              timeComponents.lastSecond
            )}`}
          >
            {second}s
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinuteView;
