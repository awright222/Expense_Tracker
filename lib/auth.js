import { supabase } from './supabase';

export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
};

export const logIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { user, error };
};

export const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getUser = async () => {
  const user = supabase.auth.user();
  return user;
};
