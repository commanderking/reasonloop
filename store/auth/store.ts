import create from "zustand";
import firebase from "store/auth/firebase";
import { useEffect } from "react";
import { StatHelpText } from "@chakra-ui/stat";

export const useAuthStore = create((set) => ({
  isLoadingUser: false,
  user: null,

  // Functions to update store
  setUser: (user) => set({ user }),
  setIsLoadingUser: (isLoadingUser) => set({ isLoadingUser }),
  signOut: async () => {
    await firebase.auth().signOut();
  },
}));

export const useAuth = () => {
  const {
    user,
    setUser,
    setIsLoadingUser,
    isLoadingUser,
    signOut,
  } = useAuthStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    isLoadingUser: state.isLoadingUser,
    setIsLoadingUser: state.setIsLoadingUser,
    signOut: state.signOut,
  }));

  useEffect(() => {
    setIsLoadingUser(true);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    setIsLoadingUser(false);
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    setUser,
    isLoadingUser,
    signOut,
  };
};
