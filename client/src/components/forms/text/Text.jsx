import React from "react";
import "./text.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function Text() {
  return (
    <div className="text">
      <h2>Text QR code</h2>
      <form>
        <textarea placeholder="Enter your text.." rows={7} />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default Text;
