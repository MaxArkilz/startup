import React, {useState} from 'react';
import './loginStyle.css';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {

  // const [authState, setAuthState] = useState(AuthState.Unknown);
  // const [userName, setUserName] = useState('');

  // const onAuthChange = (loginUserName, newAuthState) => {
  //   setUserName(loginUserName);
  //   setAuthState(newAuthState);
  // };

  return (
    <section className='loginMain'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to your Meal Plan Assistant</h1>}

        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </section>
  );
}