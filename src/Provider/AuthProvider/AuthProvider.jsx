import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../../firebase/Firebase.config';
import axios from 'axios';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //
  const updateUser = updateData => {
    return updateProfile(auth.currentUser, updateData);
  };
  //
  const resetPassword = email => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  //
  const updateUser2 = updateData => {
    return updateProfile(auth.currentUser, updateData);
  };
  //
  const userLogout = () => {
    setLoading(true);
    localStorage.removeItem('token');
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser);

      if (currentUser?.email) {
        axios
          .post(
            'http://localhost:3000/jwt',
            {
              email: currentUser?.email,
            },
            {
              withCredentials: true,
            }
          )
          .then(res => {
            // localStorage.setItem('token', res?.data?.token);
            console.log(res?.data);
          });
      } else {
        localStorage.removeItem('token');
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    userRegister,
    userLogin,
    userLogout,
    loading,
    setLoading,
    updateUser,
    googleLogin,
    resetPassword,
    updateUser2,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
