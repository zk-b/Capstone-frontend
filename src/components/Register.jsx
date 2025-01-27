import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { API } from "../API/api";
import "../assets/login.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [error, setError] = useState("");
  const { setToken, token, setOrder } = useOutletContext();
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const res = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        role,
      }),
    });
    const info = await res.json();
    if (info.success) {
      setToken(info.token);
      localStorage.setItem("token", info.token);
      // create a cart for the user

      const res2 = await fetch(`${API}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${info.token}`,
        },
      });
      const info2 = await res2.json();
      setOrder(info2.order);

      navigate("/");
    } else {
      setError(info.error);
    }
  }

  async function createBasket() {}

  return (
    // <div className="flex-center">
    <div className="login-component-container">
      <div>
        <form
          className="forms"
          onSubmit={(e) => {
            handleRegister(e);
          }}
        >
          <div className="input-container">
            <input
              className="login-form-inputs"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose your username"
              value={username}
            />
          </div>
          <div className="input-container">
            <input
              className="login-form-inputs"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Choose your password"
              value={password}
            />
          </div>
          <div className="button-container">
            <button id="login-button">Sign Up</button>
          </div>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}
