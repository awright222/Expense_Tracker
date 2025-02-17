import '../app/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../src/lib/supabase';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) console.error('OAuth login error:', error.message);
  };

  if (!session && router.pathname !== '/login' && router.pathname !== '/signup') {
    return (
      <div>
        <Link href="/login">
          <button>Log In</button>
        </Link>
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
        <button onClick={() => handleOAuthLogin('google')}>Log In with Google</button>
        <button onClick={() => handleOAuthLogin('github')}>Log In with GitHub</button>
        <button onClick={() => handleOAuthLogin('facebook')}>Log In with Facebook</button>
        <button onClick={() => handleOAuthLogin('twitter')}>Log In with Twitter</button>
        <button onClick={() => handleOAuthLogin('apple')}>Log In with Apple</button>
      </div>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;