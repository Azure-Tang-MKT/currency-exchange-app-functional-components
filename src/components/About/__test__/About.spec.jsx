import { render, screen } from "@testing-library/react";
import About from "../About";
import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("About Page", () => {
  it("renders the GoBack page with page info and go back button", () => {
    const { container } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    expect(
      screen.getByText(
        "This is a web based app that helps user to know the exchange rate of some foreign currencies to Canadian dollar."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go Back" })).toBeInTheDocument();
  });
});
