import React from "react";

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="username">username</label>
      <input id="username" type="text" />

      <label htmlFor="password">password</label>
      <input id="password" type="password" />
      <button type="submit">submit</button>
    </form>
  );
};

export default LoginForm;
