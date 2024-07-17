import React, { useState } from "react";
import HourView1 from "./HourView1";
import HourView2 from "./HourView2";
import MinuteView from "./MinuteView";

function Layout({ timeComponents }) {
  const [traditional, setTraditional] = useState(true);

  const toggleTraditional = () => {
    setTraditional(!traditional);
  };

  return (
    <>
      <h2>What style?</h2>
      <button onClick={toggleTraditional}>
        {traditional ? "Modern" : "Traditional"}
      </button>
      <div className="container">
        {traditional ? (
          <HourView1 timeComponents={timeComponents} />
        ) : (
          <HourView2 timeComponents={timeComponents} />
        )}
        {/* <HourView1 timeComponents={timeComponents} /> */}
        {/* <HourView2 timeComponents={timeComponents} /> */}
        <MinuteView timeComponents={timeComponents} />
      </div>
    </>
  );
}
export default Layout;
