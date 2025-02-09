import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useTokenStore = create(
  persist(
    devtools((set) => ({
      token: "", // Should be a string instead of 0
      setToken: (data: string) => set(() => ({ token: data })), // Fix the function
      clearToken: () => set({ token: "" }), // Corrected function name and logic
    })),
    {
      name: "token-storage", // Storage key name
    }
  )
);

export default useTokenStore;
