import { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabase'; // Supabase client
import '../styles/globals.css'; // Make sure Tailwind CSS is imported

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);

    // Listen for changes in auth state
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  // If there's no session, you can show a login page or redirect to the login page
  if (!session) {
    return <div>Please log in</div>;
  }

  // Otherwise, render the component that was navigated to
  return <Component {...pageProps} />;
}

export default MyApp;
