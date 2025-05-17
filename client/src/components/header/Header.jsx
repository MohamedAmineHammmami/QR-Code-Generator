import React from "react";
import "./header.css";
import Logo from "../animation/Logo";

function Header() {
  return (
    <div className="headerContainer">
      <Logo />
      <h1>The QR Code Generator</h1>
    </div>
  );
}

export default Header;
