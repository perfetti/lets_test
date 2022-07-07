import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a button with text `i have been clicked x times`", () => {
  render(<App />);
  const button = screen.getByRole("button", "I have been clicked 0 times");
  userEvent.click(button);
  expect(button.textContent).toBe("I have been clicked 1 times");
});
