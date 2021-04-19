import create from "zustand";

export const useStore = create((set) => {
  return {
    currentFeedback: [],
    setCurrentFeedback: (feedback) => set({ feedback }),
  };
});
