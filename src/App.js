import React, { useState } from "react";
import ExchangeCurrency from "./ExchangeCurrency";
import { DatePicker } from "antd";
import moment from "moment";
import "./App.css";

function App() {
  const [date, setdate] = useState("");

  const handleDateChange = (date) => {
    setdate(moment(date).format("YYYY-MM-DD"));
  };
  return (
    <div className="mainApp">
      <div>Currency Convertor</div>
      <br />
      <b>Date</b>
      <DatePicker onChange={(date) => handleDateChange(date)} />
      <ExchangeCurrency date={date} />
    </div>
  );
}
export default App;
