import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

it("username, password, submit의 UI가 있습니다.", () => {
  render(<LoginForm />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it("제출할때, 유저 정보를 넘겨야합니다.", () => {
  const submit = jest.fn();
  render(<LoginForm submit={submit} />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  userEvent.type(usernameField, "mambo");
  userEvent.type(passwordField, "soosecure");
  userEvent.click(submitButton);

  expect(submit).toHaveBeenCalledWith({
    username: "mambo",
    password: "soosecure",
  });
});
