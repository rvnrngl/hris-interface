import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      getUser: () => get().user,
      setUserProfile: (user) => set({ user }),
      logOut: () => set({ user: null }),
    }),
    { name: "auth-storage", storage: createJSONStorage(() => localStorage) },
  ),
);
