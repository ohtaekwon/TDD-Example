import React from "react";

import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const handleClick = (values: { username: string; password: string }) => {
    console.log(values);
    alert(JSON.stringify(values));
  };
  return (
    <div>
      <LoginForm submit={handleClick} />
    </div>
  );
}

export default App;
