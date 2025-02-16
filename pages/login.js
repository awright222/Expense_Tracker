import { useState } from 'react';
import { logIn } from '../src/lib/auth';
import Link from 'next/link';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    const { user, error } = await logIn(email, password);
    if (error) setError(error.message);
    else alert('Logged in successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Log In</h1>
      <form onSubmit={handleLogIn} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Log In</button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
      <Link href="/signup">
        <a className="mt-4 text-blue-500">Don't have an account? Sign Up</a>
      </Link>
    </div>
  );
}