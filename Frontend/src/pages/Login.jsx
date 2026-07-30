import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <h1>Admin Login</h1>

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button>Login</button>
    </div>
  );
};

export default Login;