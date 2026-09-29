import { useState } from "react";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name, selectedRole) => {
    setUsername(name);
    setRole(selectedRole);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername("");
    setRole("");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="page">
      <div className="welcome-card">

        <div className="profile-icon">
          👋
        </div>

        <p className="welcome-small">WELCOME BACK</p>

        <h1>{username}</h1>

        <div className={`role-badge ${role.toLowerCase()}`}>
          {role === "Admin" ? "👨‍💼" : "👤"} {role}
        </div>

        <div className="access-box">
          {role === "Admin" ? (
            <>
              <h3>Administrator Access</h3>
              <p>
                You have full access to manage posts.
              </p>

              <button className="delete-btn">
                🗑 Delete Post
              </button>
            </>
          ) : (
            <>
              <h3>Viewer Access</h3>
              <p>
                You can view content but cannot make changes.
              </p>

              <div className="readonly">
                🔒 Read-only access
              </div>
            </>
          )}
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default App;