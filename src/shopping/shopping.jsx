import React from 'react';
import './shopStyle.css';

export function Shopping( {userName}) {

  return (
    <main>
      <div className="checklist">
      <div className="column">
        <h4>Meat</h4>
        <label><input type="checkbox" /> 2 lbs. chicken</label><br />
        <label><input type="checkbox" /> 2 lb. stew beef</label><br />
      </div>
    </div>
      
  </main>
  
  );
}