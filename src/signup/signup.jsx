import React from 'react';
import { NavLink, Routes } from 'react-router-dom';

export function Signup() {
  return (
    <section>
      <body>
        <div className="signupContainer">
        <h1>Signup</h1>
    <form>
        <div className="inputGroup">
            <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="inputGroup">
            <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <div className="inputGroup">
            <input type="text" id="email" placeholder="myhandle@email.com" required />
            <NavLink to="/about">
            <button type="button" className='login-signup'>Signup</button>
            </NavLink>
        </div>
        <div>
            <p>Login info will be pushed into database.</p>
        </div>
    </form>
    </div>
    </body>
    </section>
  );
}