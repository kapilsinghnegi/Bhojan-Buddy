import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import appStore from "../../utils/appStore";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

describe("Testcases for Cart", () => {
  it("Renders Restaurant Menu", async () => {
    await act(() =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");
    expect(accordionHeader).toBeInTheDocument();
  });

  it("Expands first accordion of Restaurant Menu", async () => {
    await act(() =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
  });

  it("Adds item to the Cart on click of button ", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  });

  it("Add cart items to Cart on click of button", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);
    fireEvent.click(addBtns[2]);
    const cartItems = screen.getAllByTestId("cartItem");
    expect(cartItems.length).toBe(5);
  });

  it("Clear cart items on click of button", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
    const accordionHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordionHeader);

    const clearCart = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCart);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("Checks Total Amount Value", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
    const accordionHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);
    fireEvent.click(addBtns[2]);

    const cartItems = screen.getAllByTestId("cartItem");
    const totalAmount = screen.getByTestId("totalAmount");

    // Calculate the expected total amount
    const expectedTotalAmount = cartItems
      .reduce((sum, item) => {
        const priceText = item.querySelector(".itemPrice").textContent;
        const price = parseFloat(priceText.slice(2));
        return sum + price;
      }, 0)
      .toFixed(2);

    // Compare the calculated total amount with the displayed total amount
    expect(totalAmount.textContent).toBe(`₹ ${expectedTotalAmount}`);
  });
});
