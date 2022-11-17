import React from "react";
import { Route, Routes, Link, Router } from "react-router-dom";
import Home from "./components/Home/Home";
import ExchangeCurrency from "./components/ExchangeCurrency/ExchangeCurrency";
import About from "./components/About/About";
import ExchangeCurrencyLayout from "./components/ExchangeCurrencyLayout/ExchangeCurrencyLayout";
import Error from "./components/Error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<ExchangeCurrencyLayout />}>
          <Route path="ExchangeCurrency" element={<ExchangeCurrency />} />
          <Route path="About" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
