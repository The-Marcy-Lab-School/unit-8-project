import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByText,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import Fetch from "../fetch";

// jest.mock("axios");

describe("render Job Component", () => {
  test("when search button is clicked with input tags python and new york as values render api data", async () => {
    // Arrange
    const url =
      "https://jobs.github.com/positions.json?description=python&location=new+york";
    render(<Fetch url={url} />);

    //Act
    axiosMock.get({
      data: [
        {
          company: "Aon Cyber Solutions",
          company_logo: null,
          company_url: "http://www.strozfriedberg.com/careers",
          created_at: "Mon Nov 19 15:44:44 UTC 2018",

          id: "cd535970-ec11-11e8-89ae-2e904411ec0e",
          location: "NY or LA",
          title: "Cybersecurity Firm Seeks Senior Developer",
          type: "Full Time",
          url:
            "https://jobs.github.com/positions/cd535970-ec11-11e8-89ae-2e904411ec0e",
        },
        {
          company: "Sesame",
          company_logo:
            "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWRXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bfdeee729a4dbb9e1851c0362a1cf73bf3b6c646/03acb87e-f369-4964-950b-80043ff18ae1",
          company_url: "http://sesamecare.com",
          created_at: "Sat Nov 10 02:02:55 UTC 2018",

          id: "4cd29974-e48b-11e8-8478-fb9810f86b79",
          location: "New York; Berlin",
          title: "Software engineer (back end)",
          type: "Full Time",
          url:
            "https://jobs.github.com/positions/4cd29974-e48b-11e8-8478-fb9810f86b79",
        },
        {
          company: "New York University",
          company_logo: null,
          company_url: null,
          created_at: "Fri Nov 09 14:51:11 UTC 2018",

          id: "dc428b94-e42e-11e8-91e2-23879ca9e8b0",
          location: "New York, New York 10001",
          title: "Technology Solutions Developer",
          type: "Full Time",
          url:
            "https://jobs.github.com/positions/dc428b94-e42e-11e8-91e2-23879ca9e8b0",
        },
      ],
    });

    fireEvent.click(screen.getByText("Search"));
    await waitFor(() => screen.getByRole("button"));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(screen.getByRole("button")).toHaveTextContent("Search");
  });
});
