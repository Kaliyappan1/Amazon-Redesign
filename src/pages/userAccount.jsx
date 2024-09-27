'use client';

import { useState } from 'react';

export default function UserAccount({ onLoginSuccess }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the user credentials match the stored credentials
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsLoggedIn(true);
      onLoginSuccess(); 
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Save credentials to local storage
    localStorage.setItem('user', JSON.stringify({ email, password, name }));
    setIsLoggedIn(true);
    onLoginSuccess(); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user'); // Clear user credentials on logout
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoggedIn ? (
        <div className="account-info">
          <h1 className="text-3xl font-bold mb-6">My Account</h1>
          <div className="flex space-x-4 mb-4">
            <button className="tab active border-b-2 border-blue-500 text-blue-600">Orders</button>
            <button className="tab border-b-2 hover:border-blue-500 text-gray-600">Wishlist</button>
            <button className="tab border-b-2 hover:border-blue-500 text-gray-600">Account Settings</button>
          </div>
          <div className="tab-content">
            <div className="card p-4 border rounded shadow-md mb-4">
              <h2 className="text-xl font-semibold">Your Orders</h2>
              <p>You have no recent orders.</p>
            </div>
            <div className="card p-4 border rounded shadow-md mb-4">
              <h2 className="text-xl font-semibold">Your Wishlist</h2>
              <p>Your wishlist is empty.</p>
            </div>
            <div className="card p-4 border rounded shadow-md mb-4">
              <h2 className="text-xl font-semibold">Account Settings</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <button type="submit" className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">Save Changes</button>
              </form>
            </div>
          </div>
          <button onClick={handleLogout} className="mt-6 w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition">Logout</button>
        </div>
      ) : (
        <>
          <div className="flex space-x-4 mb-4">
            <button
              className={`tab border-b-2 ${activeTab === 'login' ? 'border-blue-500 text-blue-600' : 'hover:border-blue-500 text-gray-600'}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`tab border-b-2 ${activeTab === 'signup' ? 'border-blue-500 text-blue-600' : 'hover:border-blue-500 text-gray-600'}`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>
          {activeTab === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <button type="submit" className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">Login</button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="signup-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  id="signup-confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <button type="submit" className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">Sign Up</button>
            </form>
          )}
        </>
      )}
    </div>
  );
}
