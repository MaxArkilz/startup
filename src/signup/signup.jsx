import React from 'react';

export function Signup() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <body>
        <div className="loginContainer">
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
            <a href="index.html">
            <button type="button" id="signup-button">Signup</button>
            </a>
        </div>
        <div>
            <p>Login info will be pushed into database.</p>
        </div>
    </form>
    </div>
    </body>
    </main>
  );
}