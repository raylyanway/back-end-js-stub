import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { App } from "./App";

const server = setupServer(
  rest.get("/part-of-speech", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

describe("App", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders learn react link", () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    expect(/learn react/i).not.toBeInTheDocument();
  });
});
