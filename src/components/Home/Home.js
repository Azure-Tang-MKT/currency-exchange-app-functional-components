import "./Home.css";
// import "antd/dist/antd.css";
import React from "react";

import { Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <div className="title">Currency Convertor</div>
      <div className="subtitle">Let's convert!</div>
      <button className="start-btn">
        <Link to="ExchangeCurrency">Let's get started!</Link>
      </button>
    </div>
  );
}

export default Home;
