import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <div>
      <p className="aboutText">
        This is a web based app that helps user to know the exchange rate of
        some foreign currencies to Canadian dollar.
      </p>
      <button className="backBtn" onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
}

export default About;
