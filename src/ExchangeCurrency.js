import React, { useEffect, useState } from "react";
import { Select, message, InputNumber } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import "./App.css";

const { Option } = Select; //

// state = {
//   selectedCurrency: "CNY",
//   exchangeRate: "",
//   date: moment().format("YYYY-MM-DD"), //moment js
//   inputAmount: "",
//   amountinCAD: "",
// };

const ExchangeCurrency = (props) => {
  const [SelectedCurrency, setSelectedCurrency] = useState("CNY");
  const [exchangeRate, setexchangeRate] = useState("");
  const [date, setdate] = useState(moment().format("YYYY-MM-DD"));
  const [inputAmount, setinputAmount] = useState("");

  const changeCurrency = (value) => {
    setSelectedCurrency(value);
  };

  const changeAmount = (amount) => {
    setinputAmount(amount);
    // setamountinCAD(amount * this.state.exchangeRate);
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.bankofcanada.ca/valet/observations/FXCAD${SelectedCurrency}/json?start_date=${
          props.date ? props.date : date
        }&end_date=${props.date ? props.date : date}`
      );
      const data = await res.json();
      console.log(data);

      if (data.observations.length !== 0) {
        setexchangeRate(data.observations[0][`FXCAD${SelectedCurrency}`].v);
      } else {
        message.info("There is no exchange rate on this date!!");
        setexchangeRate("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let cadAmount;
  cadAmount = inputAmount / exchangeRate;
  console.log(cadAmount);

  useEffect(() => {
    fetchData();
  }, [SelectedCurrency, props.date]);

  return (
    <div className="convertorPart">
      <div className="text">
        <p>Amount of Foreign Currency</p>
        <p className="currencies">Currencies</p>
      </div>
      <div className="foreignPortion">
        <div className="inputAmount">
          <InputNumber inputAmount onChange={changeAmount} />
        </div>
        <div className="currencyOptions">
          <Select
            defaultValue="CNY"
            style={{ width: 130 }}
            onChange={changeCurrency}
          >
            <Option value="CNY">CNY</Option>
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
            <Option value="JPY">JPY</Option>
            <Option value="GBP">GBP</Option>
            <Option value="AUD">AUD</Option>
            <Option value="CHF">CHF</Option>
            <Option value="HKD">HKD</Option>
          </Select>
        </div>
      </div>
      <div className="cadPortion">
        <div className="cadAmount">
          <InputNumber value={cadAmount} />
        </div>
        <div className="CAD">
          <Select defaultValue="CAD" style={{ width: 130 }}></Select>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <p>The exchange rate is ${exchangeRate}</p>
      </div>
    </div>
  );
};

export default ExchangeCurrency;
