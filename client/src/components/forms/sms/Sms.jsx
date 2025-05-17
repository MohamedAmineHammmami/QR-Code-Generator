import React from "react";
import "./sms.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function Sms() {
  return (
    <div className="sms">
      <h2>Sms QR Code</h2>
      <form>
        <div>
          <label>Number:</label>
          <input type="number" placeholder="Your number" />
        </div>

        <div>
          <label>Message</label>
          <textarea placeholder="Enter your message" rows={5} />
        </div>
        <SubmitBtn />
      </form>
    </div>
  );
}

export default Sms;
