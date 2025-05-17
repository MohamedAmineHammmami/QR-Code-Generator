import React from "react";
import "./pdf.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function pdf() {
  return (
    <div className="pdf">
      <h2>PDF QR Code</h2>
      <form>
        <p>
          Display brochure, magazine, catalog, ebook, or any other PDF files.
        </p>
        <input type="file" placeholder="pdf" />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default pdf;
