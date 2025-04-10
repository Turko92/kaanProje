import React from 'react';

function UserInfo() {
  const data = localStorage.getItem('userData');
  const user = data ? JSON.parse(data) : null;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Info</h2>
      {user ? (
        <div className="space-y-2">
          <p><strong>Full Name:</strong> {user.fullname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Password:</strong> {user.password}</p>
          <p><strong>Remember Me:</strong> {user.remember ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export default UserInfo;
