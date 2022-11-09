import React from "react";
import { Route, Routes, Link, Router } from "react-router-dom";
import Home from "./components/Home";
import ExchangeCurrency from "./components/ExchangeCurrency";
import About from "./components/About";
import ExchangeCurrencyLayout from "./components/ExchangeCurrencyLayout";
import "./App.css";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/main" element={<ExchangeCurrencyLayout />}>
          <Route path="ExchangeCurrency" element={<ExchangeCurrency />} />
          <Route path="About" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
