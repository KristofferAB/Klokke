import React from "react";
import HourView1 from "./HourView1";
import MinuteView from "./MinuteView";

function Layout({ timeComponents }) {
  return (
    <div className="container">
      <HourView1 timeComponents={timeComponents} />
      <MinuteView timeComponents={timeComponents} />
    </div>
  );
}
export default Layout;
