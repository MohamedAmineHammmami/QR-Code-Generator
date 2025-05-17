import React from "react";
import SubmitBtn from "../submitBtn/SubmitBtn";
import "./img.css";

function Img() {
  return (
    <div className="img">
      <h2>Image Gallery QR Code</h2>
      <form>
        <p>Share a series of images about your products, company or events!</p>
        <input type="file" placeholder="upload" />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default Img;
