// src/components/Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/loginReducer";

const users = [
  {
    id: 1,
    userName: "abc",
    email: "abc@example.com",
    password: "123456",
  },
  {
    id: 2,
    userName: "xyz",
    email: "xyz@example.com",
    password: "abcdef",
  },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<null | any>(null);
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(
      (item) => item.email === email && item.password === password
    );
    if (user) {
      setUser(user);
      dispatch(login(user));
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form action="" onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
