import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("Check for Getting Started Text", () => {
  render(<Home />);
  expect(screen.getByText("Get started by editing")).toBeInTheDocument();
});

test("Renders appropriately", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { name: "Welcome to Next.js!" })
  ).toBeInTheDocument();
});
