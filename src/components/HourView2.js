import React, { useState, useEffect } from "react";

function HourView2({ timeComponents, sunrise, sunset, golden }) {
  const [activeRow, setActiveRow] = useState();
  const [showAll, setShowAll] = useState(false);

  const rows = 12; // Number of rows
  const cols = 5; // Number of columns

  // const sunriseSVG = (
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  //     <rect width="256" height="256" fill="none" />
  //     <line
  //       x1="240"
  //       y1="160"
  //       x2="16"
  //       y2="160"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="16"
  //     />
  //     <line
  //       x1="208"
  //       y1="200"
  //       x2="48"
  //       y2="200"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="16"
  //     />
  //     <path
  //       d="M66,160a64,64,0,1,1,124,0"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="16"
  //     />
  //     <line
  //       x1="80"
  //       y1="40"
  //       x2="88"
  //       y2="56"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="16"
  //     />
  //     <line
  //       x1="24"
  //       y1="96"
  //       x2="40"
  //       y2="104"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="16"
  //     />
  //     <line
  //       x1="232"
  //       y1="96"
  //       x2="216"
  //       y2="104"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="16"
  //     />
  //     <line
  //       x1="176"
  //       y1="40"
  //       x2="168"
  //       y2="56"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="16"
  //     />
  //   </svg>
  // );

  // Adjust activeRow when timeComponents.hour changes
  useEffect(() => {
    const isAM = timeComponents.hour < 12;
    const adjustedHour = isAM ? timeComponents.hour : timeComponents.hour - 12;
    setActiveRow(adjustedHour);
  }, [timeComponents.hour]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const calculateRowsToShow = () => {
    if (showAll) {
      return Array.from({ length: rows }, (_, index) => index + 1);
    } else {
      // Include activeRow and its adjacent rows (above and below)
      const rowIndices = [];
      if (activeRow > 1) rowIndices.push(activeRow - 1);
      rowIndices.push(activeRow);
      if (activeRow < rows) rowIndices.push(activeRow + 1);
      return rowIndices;
    }
  };

  const rowsToShow = calculateRowsToShow();

  const getCellClass = (row, col, timeComponents, activeRow) => {
    const { hour, tenMinutes } = timeComponents;
    const isAM = hour < 12;
    const adjustedHour = isAM ? hour : hour - 12;

    // Adjust column logic based on the example logic for 10-minute intervals
    const columnIntervals = [10, 20, 30, 40, 50];
    const interval = columnIntervals[col];

    // Debugging logs
    // console.log(`Row: ${row}, Col: ${col}`);
    // console.log(`Adjusted Hour: ${adjustedHour}, Ten Minutes: ${tenMinutes}`);
    // if (sunrise) {
    //   console.log(
    //     `Sunrise Hour: ${sunrise.hour}, Sunrise Ten Minutes: ${sunrise.tenMinutes}`
    //   );
    // }
    // if (sunset) {
    //   console.log(
    //     `Sunset Hour: ${sunset.hour}, Sunset Ten Minutes: ${sunset.tenMinutes}`
    //   );
    // }

    if (adjustedHour === row && tenMinutes >= interval) {
      return isAM ? "highlightAM" : "highlightPM";
    } else if (
      sunset &&
      sunset.hour === row &&
      sunset.tenMinutes === interval
    ) {
      return "sunset";
    } else if (adjustedHour === row) {
      return isAM ? "borderAM" : "borderPM";
    } else if (
      sunrise &&
      sunrise.hour === row &&
      sunrise.tenMinutes === interval
    ) {
      return "sunrise";
    } else if (
      golden &&
      golden.hour === row &&
      golden.tenMinutes === interval
    ) {
      return "golden";
    } else {
      return "white";
    }
  };

  return (
    <>
      <div className="button-div">
        <button
          className="layout-button1"
          onClick={toggleShowAll}
          disabled={showAll}
        >
          All rows
        </button>
        <button
          className="layout-button1"
          onClick={toggleShowAll}
          disabled={!showAll}
        >
          Active rows
        </button>
      </div>
      <div className="table">
        <div className="column row-numbers">
          {Array.from({ length: rows }).map(
            (_, rowIndex) =>
              rowsToShow.includes(rows - rowIndex) && (
                <div
                  key={rowIndex}
                  className={`row-number row-${rows - rowIndex} ${
                    sunrise &&
                    sunrise.hour === rows - rowIndex &&
                    sunrise.tenMinutes < 10
                      ? "sunrise"
                      : sunset &&
                        sunset.hour === rows - rowIndex &&
                        sunset.tenMinutes < 10
                      ? "sunset"
                      : golden &&
                        golden.hour === rows - rowIndex &&
                        golden.tenMinutes < 10
                      ? "golden"
                      : ""
                  }`}
                  onClick={() => setActiveRow(rows - rowIndex)}
                >
                  {rows - rowIndex}
                </div>
              )
          )}
        </div>
        {Array.from({ length: cols }).map((_, colIndex) => (
          <div key={colIndex} className={`column ${colIndex + 1}`}>
            {Array.from({ length: rows }).map(
              (_, rowIndex) =>
                rowsToShow.includes(rows - rowIndex) && (
                  <div
                    key={rowIndex}
                    className={`row cell1 ${getCellClass(
                      rows - rowIndex,
                      colIndex,
                      timeComponents,
                      activeRow
                    )}`}
                  >
                    {/* {!showAll
                      ? colIndex === 0
                        ? "10"
                        : colIndex === 1
                        ? "20"
                        : colIndex === 2
                        ? "30"
                        : colIndex === 3
                        ? "40"
                        : colIndex === 4
                        ? "50"
                        : ""
                      : ""} */}
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default HourView2;
