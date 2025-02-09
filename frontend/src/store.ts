<<<<<<< HEAD
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface Token {
  token: string
  setToken: (data: string) => void
}

const useTokenStore = create<Token>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        setToken: (data: string) => set(() => ({ token: data })),
      }),
      {
        name: 'token',
      },
    ),
  ),
)

export default useTokenStore
=======
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
>>>>>>> c82e11f47c772c0c21b02040aeff23f803d9e484
