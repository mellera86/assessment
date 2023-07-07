import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { User } from "@api";
import { UserCard } from "./UserCard";
let mockUser: User = {
  login: "test",
  avatar_url: "/test",
  id: 1,
  type: "test",
  url: "/test",
};

jest.mock("next/navigation", () => require("next-router-mock"));

describe("UserCard", () => {
  it("displays username", () => {
    render(<UserCard user={mockUser} />);

    const username = screen.getByTestId("user-card");
    expect(username).not.toBeNull();
  });

  it("edge case no user is passed", async () => {
    render(<UserCard />);

    const card = screen.queryByTestId("user-card");
    expect(card).not.toBeInTheDocument();
  });
});
