import { render, screen } from "@testing-library/react";
import ExchangeCurrency from "../../ExchangeCurrency";
import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("Convertor Page", () => {
  it("renders the Convertor page with convertor calculation functions ", () => {
    const { container } = render(
      <MemoryRouter>
        <ExchangeCurrency />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Currency Convertor")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Amount of Foreign Currency")).toBeInTheDocument();
    expect(screen.getByText("Currencies")).toBeInTheDocument();
    expect(screen.getByText("Amount of Canadian Dollars")).toBeInTheDocument();
    expect(screen.getByText("Canadian Dollar")).toBeInTheDocument();
    expect(screen.getByText("The exchange rate is")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "" })).toBeInTheDocument();
    expect(screen.getByRole("option", { contains: "USD" })).toBeInTheDocument();
  });
});
