import React from "react";
import "./url.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function Url() {
  return (
    <div className="url">
      <h2>Url QR code</h2>
      <form>
        <textarea placeholder="Enter your website, text, url.." rows={7} />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default Url;
