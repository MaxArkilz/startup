import React, { useEffect } from 'react';
import './shopStyle.css';
import { webTest, checkConnectionStatus } from './webSocket';
import { Chat } from './chatCode';

export function Shopping( {userName}) {
  useEffect(() => {
    webTest();
  }, []);

  return (
    <main>
      <div className="checklist">
      <div className="column">
        <h4>Meat</h4>
        <label><input type="checkbox" /> 2 lbs. chicken</label><br />
        <label><input type="checkbox" /> 2 lb. stew beef</label><br />
      </div>
    </div>
    <button onClick={checkConnectionStatus}>Check WebSocket</button>
    
    <Chat />
      
  </main>
  
  );
}