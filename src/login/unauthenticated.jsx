import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <div className='loginContainer'>
        <div className='inputGroup'>
          <input type='text' id='username' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter you username' required />
        </div>
        <div className='inputGroup'>
          <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Signup
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
