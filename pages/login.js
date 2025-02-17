import { useState } from 'react';
import { logIn } from '../src/lib/auth';
import { supabase } from '../src/lib/supabase';
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

  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) console.error('OAuth login error:', error.message);
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
      <button onClick={() => handleOAuthLogin('google')} className="w-full bg-red-500 text-white p-2 rounded mt-2">Log In with Google</button>
      <button onClick={() => handleOAuthLogin('github')} className="w-full bg-gray-800 text-white p-2 rounded mt-2">Log In with GitHub</button>
      <button onClick={() => handleOAuthLogin('facebook')} className="w-full bg-blue-600 text-white p-2 rounded mt-2">Log In with Facebook</button>
      <button onClick={() => handleOAuthLogin('twitter')} className="w-full bg-blue-400 text-white p-2 rounded mt-2">Log In with Twitter</button>
      <button onClick={() => handleOAuthLogin('apple')} className="w-full bg-black text-white p-2 rounded mt-2">Log In with Apple</button>
      <Link href="/signup">
        <span className="mt-4 text-blue-500">Don't have an account? Sign Up</span>
      </Link>
    </div>
  );
}