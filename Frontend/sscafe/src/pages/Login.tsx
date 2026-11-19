
import React, { useState } from "react";
import "./Login.css";

export interface LoginUser {
  token: string;
  role: string;
  username: string;
}

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: LoginUser) => void;
}

const API_URL = "https://localhost:5000/gateway/Auth/login";

const Login: React.FC<LoginProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      console.log("Login API Response:", result);

      if (!response.ok) {
        throw new Error(
          result.message || "Invalid email or password"
        );
      }

      // Read API response
      const userData = result.data ?? result;

      const token = userData.token;
      const role = userData.role?.trim();
      const username = userData.userName?.trim();

      // Validate response
      if (!token) {
        throw new Error("Token not received from API.");
      }

      if (!role) {
        throw new Error("Role is empty in API response.");
      }

      if (!username) {
        throw new Error("Username is empty in API response.");
      }

      // Prepare user details
      const user: LoginUser = {
        token,
        role,
        username,
      };

      // Store login details
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("username", username);

      // Send details to Navbar
      onLogin(user);

      // Clear inputs
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Login Error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-overlay" onClick={onClose}>
      <div
        className="login-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="login-close"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="login-header">
          <h2>Welcome Back!</h2>
          <p>Login to SSCafe</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="login-error">{error}</p>
          )}

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
