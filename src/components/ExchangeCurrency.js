import React, { useEffect, useState } from "react";
import { Select, message, InputNumber, DatePicker, Spin } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import "./ExchangeCurrency.css";

const { Option } = Select; //

const ExchangeCurrency = () => {
  <Spin />;
  const [SelectedCurrency, setSelectedCurrency] = useState("CNY");
  const [exchangeRate, setexchangeRate] = useState("");
  const [date, setdate] = useState(moment().format("YYYY-MM-DD"));
  const [amount, setamount] = useState("");
  // const [CADAmount, setCADAmount] = useState("");
  const [changeforeignAmount, setchangeforeignAmount] = useState(true);
  const [isLoading, setisLoading] = useState(true);

  const handleDateChange = (date) => {
    setdate(moment(date).format("YYYY-MM-DD"));
  };

  const changeCurrency = (value) => {
    setSelectedCurrency(value);
  };

  let foreignAmount;
  let cadAmount;
  if (changeforeignAmount) {
    foreignAmount = amount;
    cadAmount = amount / exchangeRate;
  } else {
    cadAmount = amount;
    foreignAmount = amount * exchangeRate;
  }

  const handleforeignChange = (e) => {
    setamount(e);
    setchangeforeignAmount(true);
  };
  const handlecadChange = (e) => {
    setamount(e);
    setchangeforeignAmount(false);
  };

  const fetchData = async () => {
    setisLoading(true);
    try {
      const res = await fetch(
        `https://www.bankofcanada.ca/valet/observations/FXCAD${SelectedCurrency}/json?start_date=${date}&end_date=${date}`
      );
      const data = await res.json();
      console.log(data);

      if (data.observations.length !== 0) {
        setexchangeRate(data.observations[0][`FXCAD${SelectedCurrency}`].v);
      } else {
        message.info("There is no exchange rate on this date!!");
        setexchangeRate("");
      }
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [SelectedCurrency, date]);

  return (
    <div className="convertorPage">
      <div className="CurrencyConvertor">Currency Convertor</div>
      <div className="textDate">Date</div>

      <DatePicker onChange={(date) => handleDateChange(date)} />
      {isLoading && <Spin />}
      <div className="convertorPart">
        <p className="text">Amount of Foreign Currency</p>
        <p className="text">Currencies</p>

        <div className="inputAmount">
          <InputNumber
            type="number"
            placeholder="Type amount"
            // inputAmount
            value={foreignAmount}
            onChange={handleforeignChange}
          />
        </div>
        <div className="currencyOptions">
          <Select defaultValue="CNY" onChange={changeCurrency}>
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
        <p className="text">Amount of Canadian Dollars</p>
        <p className="text">Canadian Dollar</p>
        <div className="cadAmount">
          <InputNumber
            type="number"
            placeholder="Type amount"
            value={cadAmount}
            onChange={handlecadChange}
          />
        </div>
        <div className="CAD">
          <Select defaultValue="CAD"></Select>
        </div>

        <div className="setence">
          <p>
            The exchange rate is <b>${exchangeRate}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCurrency;
