import { useAuthStore } from "store/auth/useAuthStore";
import { useEffect } from "react";
import firebase from "store/auth/firebase";

export const useAuth = () => {
  const {
    user,
    setUser,
    hasLoadedUser,
    setHasLoadedUser,
    signOut,
  } = useAuthStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    hasLoadedUser: state.hasLoadedUser,
    setHasLoadedUser: state.setHasLoadedUser,
    signOut: state.signOut,
  }));

  useEffect(() => {
    console.log("useAuth hasLoadedUser", hasLoadedUser);

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setUser(false);
      }

      setUser(user);
      setHasLoadedUser(true);
      console.log("useAuth hasLoadedUser", hasLoadedUser);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    setUser,
    hasLoadedUser,
    signOut,
  };
};
