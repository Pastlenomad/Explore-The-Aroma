import React from "react";
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import HomePage from "../src/app/page";
import PerfumeDetails from "../src/components/PerfumeDetails";
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
  it("renders the header", () => {
    render(<HomePage />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
  });

  it("renders the perfume button components", () => {
    render(<HomePage />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBeGreaterThan(0);
  });

  it("renders the search bar", () => {
    render(<HomePage />);
    const searchBarElement = screen.getByRole("textbox");
    expect(searchBarElement).toBeInTheDocument();
  });

  it("makes sure the search bar is working properly for example when changing its value", async () => {
    render(<HomePage />);
    const searchBarElement = screen.getByRole("textbox");
    await act(async () => {
      fireEvent.change(searchBarElement, { target: { value: "rose" } });
      expect(searchBarElement.value).toBe("rose");
    });
  });

  it("correctly fetches data from our backend", async () => {
    await act(async () => {
      render(<HomePage />);
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith("http://localhost:3001/");
    });
  });
});
