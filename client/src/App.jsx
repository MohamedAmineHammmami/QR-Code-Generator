import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import LeftSection from "./components/leftSection/LeftSection";
import RightSection from "./components/rightSection/RightSection";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="mainSection">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default App;
