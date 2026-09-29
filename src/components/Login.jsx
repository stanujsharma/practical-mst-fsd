import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = (role) => {
    if (username.trim() === "") {
      alert("Please enter username");
      return;
    }

    onLogin(username, role);
  };

  return (
    <div className="page">
      <div className="login-card">
        <div className="logo">🔐</div>

        <h1>Role Based Login</h1>
        <p className="subtitle">
          Login with your assigned role to continue
        </p>

        <div className="input-group">
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <p className="login-title">Choose your role</p>

        <div className="role-buttons">
          <button
            className="admin-btn"
            onClick={() => handleLogin("Admin")}
          >
            <span>👨‍💼</span>
            <div>
              <strong>Login as Admin</strong>
              <small>Full access</small>
            </div>
          </button>

          <button
            className="viewer-btn"
            onClick={() => handleLogin("Viewer")}
          >
            <span>👤</span>
            <div>
              <strong>Login as Viewer</strong>
              <small>Read-only access</small>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;