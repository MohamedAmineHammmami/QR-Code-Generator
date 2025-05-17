import React from "react";
import "./email.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function Email() {
  return (
    <div className="email">
      <h2>Email QR Code</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Your email" />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" placeholder="Enter email subject" />
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

export default Email;
