import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("Renders initial elements correctly: navbar, starting game panel, footer:", () => {
    render(<App />);

    expect(screen.getByRole("navigation").textContent).toMatch(
      /play the game!/i
    );
    expect(screen.getByRole("footer").textContent).toMatch(/©JanaIsCoding/i);
    expect(screen.getByRole("start-element")).toBeInTheDocument();
  });
});

describe("Start Game Component", () => {
  it("Renders image after clicking on Start button", async () => {
    render(<App />);
    await userEvent.click(screen.getByText("Start!"));
    expect(screen.getByAltText("divine")).toBeInTheDocument();
  });
});
