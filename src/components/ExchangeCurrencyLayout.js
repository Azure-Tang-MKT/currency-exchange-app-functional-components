import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ExchangeCurrencyLayout.css";

const ExchangeCurrencyLayout = () => {
  return (
    <div>
      <div className="menuBar">
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="ExchangeCurrency">Convertor</Link>
          </li>
          <li>
            <Link to="About">About This App</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default ExchangeCurrencyLayout;
