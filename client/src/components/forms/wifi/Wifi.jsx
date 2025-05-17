import React from "react";
import "./wifi.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function Wifi() {
  return (
    <div className="wifi">
      <h2>Wifi QR Code</h2>
      <form>
        <div>
          <label>Netwok Name:</label>
          <input type="text" placeholder="Your wifi" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter password " />
        </div>

        <SubmitBtn />
      </form>
    </div>
  );
}

export default Wifi;
