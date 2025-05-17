import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import appStore from "../../appStore";
import Header from "./Header";

describe("Header Component Testcases", () => {
  it("Renders Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });

  it("Renders Header Component with Cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cart = screen.getByText("(0 items)");
    expect(cart).toBeInTheDocument();
  });

  it("Renders Header Component with Cart (0 items)", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cart = screen.getByText("(0 items)");
    expect(cart).toBeInTheDocument();
  });

  it("Changes Login button on Header Component to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
