import React, { useContext } from "react";
import { useState } from "react";
import "../Pages/Signup.css";
import { useNavigate } from "react-router-dom";
import { successToast } from "../components/Toast";
import { UsersProvider } from "../App";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { users, setUsers } = useContext(UsersProvider);
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Store user information in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setLoggedIn(true);
  };
  const handleLogin = () => {
    // Retrieve user information from local storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };
  const handleLogout = () => {
    // Clear user information from local storage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome, {localStorage.getItem("username")}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <>
        <div className="row">
          <div className="col-6 sidenav">
            <div className="login-main-text">
              <h2>
                Application
                <br /> Login Page
              </h2>
              <p>Login or register from here to access.</p>
            </div>
          </div>

          <div className="col-6">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label className="text-white">UserName</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="text-white">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="btn btn-primary mx-2 p-2 search3"
                >
                  Login
                </button>
                <button
                  type="submit"
                  onClick={handleSignUp}
                  className="btn btn-secondary mx-2 p-2 search3"
                >
                  Register
                </button>
              </form>
            </div>
          </div>

          {/* <h2>Sign up or Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className='form-control'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> */}
          {/* <button onClick={handleSignUp} className='btn btn-primary'>Sign Up</button>
                <button onClick={handleLogin}>Login</button> */}
        </div>
      </>
    );
  }
};

export default SignUp;
