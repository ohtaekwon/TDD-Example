import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

it("should have a username and password field, also submit button", () => {
  render(<LoginForm />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitField = screen.getByText(/submit/i);

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitField).toBeInTheDocument();
});
