import React from "react";
import "./mp4.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function Mp4() {
  return (
    <div className="mp4">
      <h2>MP4 QR Code</h2>
      <form>
        <p>
          Share your music, audio books or podcasts inside a customizable mobile
          player.
        </p>
        <input type="file" placeholder="mp4" />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default Mp4;
