import React from "react";
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import HomePage from "../src/app/page";
import "@testing-library/jest-dom";
import { mockData } from "../src/app/parfumeData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Front-End Testing", () => {
  it("Renders the HomePage properly", () => {
    render(<HomePage />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
  });

  it("Renders the ingredients' button components properly", () => {
    render(<HomePage />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBeGreaterThan(0);
  });

  it("Renders the search bar properly", () => {
    render(<HomePage />);
    const searchBarElement = screen.getByRole("textbox");
    expect(searchBarElement).toBeInTheDocument();
  });

  it("Our Search Bar is working properly", async () => {
    render(<HomePage />);
    const searchBarElement = screen.getByRole("textbox");
    await act(async () => {
      fireEvent.change(searchBarElement, { target: { value: "rose" } });
      expect(searchBarElement.value).toBe("rose");
    });
  });

  it("Data is fetched correctly from our backend", async () => {
    await act(async () => {
      render(<HomePage />);
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith("http://localhost:3001/");
    });
  });
});
