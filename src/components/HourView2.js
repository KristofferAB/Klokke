import React, { useState, useEffect } from "react";

function HourView2({ timeComponents }) {
  const [activeRow, setActiveRow] = useState();
  const [showAll, setShowAll] = useState(false);

  const rows = 12; // Number of rows
  const cols = 5; // Number of columns

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

    if (adjustedHour === row && tenMinutes >= interval) {
      return isAM ? "highlightAM" : "highlightPM";
    } else if (adjustedHour === row) {
      return isAM ? "borderAM" : "borderPM";
    } else {
      return "white";
    }
  };

  return (
    <>
      <div className="table1">
        <button onClick={toggleShowAll}>
          {showAll ? "Show Active Rows" : "Show All Rows"}
        </button>
        <div className="column row-numbers">
          {Array.from({ length: rows }).map(
            (_, rowIndex) =>
              rowsToShow.includes(rows - rowIndex) && (
                <div
                  key={rowIndex}
                  className={`row-number row-${rows - rowIndex}`}
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
                    className={`row ${getCellClass(
                      rows - rowIndex,
                      colIndex,
                      timeComponents,
                      activeRow
                    )}`}
                  >
                    {/* Render content for each cell */}
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
