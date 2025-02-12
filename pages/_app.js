import { useEffect, useState } from 'react';
import { supabase } from '../src/lib/supabase';
import '../app/globals.css';
import Modal from '../app/components/Modal';
import LogIn from './login';
import SignUp from './signup';

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

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

  if (!session) {
    return (
      <div>
        <button onClick={() => setIsLoginOpen(true)}>Log In</button>
        <button onClick={() => setIsSignUpOpen(true)}>Sign Up</button>

        <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
          <LogIn onClose={() => setIsLoginOpen(false)} />
        </Modal>

        <Modal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
          <SignUp onClose={() => setIsSignUpOpen(false)} />
        </Modal>
      </div>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;