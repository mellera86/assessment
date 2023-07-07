import { Card, CardBody } from "./Card";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("displays children within the card", () => {
    render(
      <Card>
        <span>hello</span>
      </Card>
    );

    const span = screen.getByText("hello");
    expect(span).not.toBeNull();
  });

  it("displays children within the body of the card", () => {
    render(
      <Card>
        <CardBody>
          <span>hello</span>
        </CardBody>
      </Card>
    );

    const span = screen.getByText("hello");
    expect(span).not.toBeNull();
  });
});
