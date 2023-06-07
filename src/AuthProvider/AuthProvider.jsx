import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContextProvider = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  ///create a new account
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //current login user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //logOut user
  const userLogeOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    userRegister,
    userLogin,
    loginWithGoogle,
    userLogeOut,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
