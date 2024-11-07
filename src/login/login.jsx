import React from 'react';
import './loginStyle.css';

export function Login() {
  return (
    <main>
      <div class="loginContainer">
        <h1>Login</h1>
    <form>
        <div className="inputGroup">
            <input type="text" id="username" placeholder="Enter your username" required />
            </div>
            <div class="inputGroup">
            <input type="password" id="password" placeholder="Enter your password" required />
            <a href="index.html">
            <button type="button" id="login-button">Login</button>
            </a>
            </div>
            <p>No account? No problem! Click <a href="/signup">here</a> to sign up!</p>
        <div>
            <p>Login info will be pulled from database.</p>
        </div>
    </form>
    </div>
    </main>
  );
}