import create from "zustand";

export const useStore = create((set) => {
  return {
    reactions: [],
    setReactions: (reactions) => set({ reactions }),
  };
});
