import React from "react";
import "./vcard.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function Vcard() {
  return (
    <div className="vcard">
      <h2>Vcard QR code</h2>
      <form>
        <div className="vcardContainer">
          <div className="vcardLeft">
            <b>FirstName:</b>
            <input type="text" placeholder="firstname" />
            <b>Mobile:</b>
            <input type="number" placeholder="mobile" />
            <b>Email:</b>
            <input type="email" placeholder="email" />
            <b>City:</b>
            <input type="city" placeholder="city" />
          </div>
          <div className="vcardRight">
            <b>LastName:</b>
            <input type="text" placeholder="lastName" />
            <b>Phone:</b>
            <input type="number" placeholder="phone" />
            <b>Website:</b>
            <input type="url" placeholder="www.your-website.com" />
            <b>State:</b>
            <input type="text" placeholder="state" />
          </div>
        </div>

        <SubmitBtn />
      </form>
    </div>
  );
}

export default Vcard;
