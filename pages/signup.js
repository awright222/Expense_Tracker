import { useState } from 'react';
import { signUp } from '../src/lib/auth';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { user, error } = await signUp(email, password);
    if (error) setError(error.message);
    else alert('Signed up successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
      <Link href="/login">
        <a className="mt-4 text-blue-500">Already have an account? Log In</a>
      </Link>
    </div>
  );
}