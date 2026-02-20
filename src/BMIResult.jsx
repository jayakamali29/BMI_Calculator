import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bmi, category } = location.state || {};

  let image = "";

  if (category === "Underweight") {
    image = "https://i.pinimg.com/736x/40/e8/92/40e89203aaf5878e24eb4cd1e83d7bb2.jpg";
  } else if (category === "Normal") {
    image = "https://i.pinimg.com/736x/d5/19/34/d51934348970f1a2038d8e476fb6ccbd.jpg";
  } else if (category === "Overweight") {
    image = "https://i.pinimg.com/736x/22/fd/46/22fd4688d641dd1b92e4e0d4d6d5a1a7.jpg";
  } else {
    image = "https://i.pinimg.com/1200x/a9/41/d8/a941d885193043052974023be83de3e5.jpg";
  }

  return (
    <div className="bmi-container">
  <h2>Your BMI Result</h2>

  <div className="result-box">
    <h3>Your BMI: {bmi}</h3>
    <h3>Category: {category}</h3>
    <img src={image} alt={category} />
  </div>

  <button onClick={() => navigate("/")}>
    Calculate Again
  </button>
</div>

  );
}

export default Result;