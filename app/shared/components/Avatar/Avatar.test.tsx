import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

let mockFn = jest.fn();

describe("Avatar", () => {
  it("handles onClick event", () => {
    render(
      <Avatar alt="test" src="/test" width={32} height={32} onClick={mockFn} />
    );

    const image = screen.getByRole("img");
    image.click();
    expect(mockFn).toBeCalled();
  });
});
