import React from 'react';
import LogoutButton from './signup/LogOut';

function Dashboard() {
  return (
    <div className='container text-center dashboard'>
      <div>
        <h1>Want to go the dashboard page</h1>
        <p>Click the link below</p>
      </div>
      <div>
        <img src="logo.png" alt="png" />
      </div>
      <a href="">Go To Dashboard</a>
      <LogoutButton/>
    </div>
  );
}

export default Dashboard;
