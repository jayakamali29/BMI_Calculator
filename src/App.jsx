import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Bmi from "./BMICalculator";
import Result from "./BMIResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bmi />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;