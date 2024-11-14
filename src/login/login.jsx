import React from 'react';
import './loginStyle.css';
import { NavLink } from 'react-router-dom';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login() {
  return (
    <section id='loginMain'>
      <div class="loginContainer">
        <h1>Login</h1>
    <form>
        <div className="inputGroup">
            <input type="text" id="username" placeholder="Enter your username" required />
            </div>
            <div class="inputGroup">
            <input type="password" id="password" placeholder="Enter your password" required />
            <NavLink to="/about">
            <button type="button" className="login-signup">Login</button>
            </NavLink>
            </div>
            <p>No account? No problem! Click <NavLink to="/signup">here</NavLink> to sign up!</p>
        <div>
            <p>Login info will be pulled from database.</p>
        </div>
    </form>
    </div>
    </section>
  );
}