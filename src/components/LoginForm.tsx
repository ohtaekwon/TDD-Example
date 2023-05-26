import React, { ChangeEvent, ChangeEventHandler, FC } from "react";

interface Props {
  submit?: (values: { username: string; password: string }) => void;
}

const LoginForm: FC<Props> = ({ submit = () => {} }) => {
  const [values, setValues] = React.useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event?.target.id]: event?.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    submit(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        value={values.username}
      />

      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={values.password}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default LoginForm;
