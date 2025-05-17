import React from "react";
import SubmitBtn from "../submitBtn/SubmitBtn";
import "./mp3.css";

function Mp3() {
  return (
    <div className="mp3">
      <h2>MP3 QR Code</h2>
      <form>
        <p>
          Share your music, audio books or podcasts inside a customizable mobile
          player.
        </p>
        <input type="file" placeholder="mp3" />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default Mp3;
