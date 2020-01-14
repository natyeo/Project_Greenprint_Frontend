import React from "react";
import { render } from "@testing-library/react";
import JourneyForm from "./journey";

test("renders the journey form ", () => {
  const { getByText } = render(<JourneyForm />);
  const fromElement = getByText(/From/i);
  expect(fromElement).toBeInTheDocument();
});

describe("test api gets called  ", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls api url and returns data to me", () => {
    const journeyForm = new JourneyForm();
    fetch.mockResponseOnce(
      JSON.stringify({ body: { from: "London", to: "Berlin" } })
    );

    //assert on the response
    journeyForm.apiCall().then(res => {
      expect(res.body).toEqual({ from: "London", to: "Berlin" });
    });

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      "https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/"
    );
  });
});
