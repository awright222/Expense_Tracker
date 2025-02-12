import { useState } from 'react';
import { logIn } from '../src/lib/auth';

export default function LogIn({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    const { user, error } = await logIn(email, password);
    if (error) setError(error.message);
    else {
      alert('Logged in successfully!');
      onClose();
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}