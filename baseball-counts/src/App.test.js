import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Has all the proper displays", () => {
  const container = render(<App />);
  container.getByText(/balls/i);
  container.getByText(/strikes/i);
});
it("Has all the proper buttons", () => {
  const container = render(<App />);
  container.getByText(/ball!/i);
  container.getByText(/strike!/i);
  container.getByText(/foul!/i);
  container.getByText(/hit!/i);
});
