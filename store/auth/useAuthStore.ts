import create from "zustand";
import firebase from "store/auth/firebase";

export const useAuthStore = create((set) => ({
  hasLoadedUser: false,
  user: null,

  // Functions to update store
  setUser: (user) => set({ user }),
  setHasLoadedUser: (hasLoadedUser) => set({ hasLoadedUser }),
  signOut: async () => {
    await firebase.auth().signOut();
  },
}));
