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
    // Only run onAuthStateChange if we haven' tried to load the user before
    let unsubscribe = () => {};
    if (!user && !hasLoadedUser) {
      unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          setUser(false);
        }

        setUser(user);
        setHasLoadedUser(true);
      });
    }
    return () => unsubscribe();
  }, []);

  return {
    user,
    setUser,
    hasLoadedUser,
    signOut,
  };
};
