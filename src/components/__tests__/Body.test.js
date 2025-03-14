import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body Component Testcases", () => {
  it("Searches Mock Data of Restaurant list for Pizza text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const resCardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(resCardsBeforeSearch.length).toBe(20);

    const searchButton = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    //   expect(searchInput).toBeInTheDocument();
    //   expect(searchButton).toBeInTheDocument();

    fireEvent.change(searchInput, {
      target: {
        value: "pizza",
      },
    });
    fireEvent.click(searchButton);
    const resCardsAfterSearch = screen.getAllByTestId("resCard");

    expect(resCardsAfterSearch.length).toBe(5);
  });
  it("Filters Top-rated restaurant on click of button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const resCardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(resCardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurant",
    });

    fireEvent.click(topRatedBtn);

    const resCardsAfterFilter = screen.getAllByTestId("resCard");

    expect(resCardsAfterFilter.length).toBe(13);
  });
});
