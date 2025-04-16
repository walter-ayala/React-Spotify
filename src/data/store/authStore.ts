import { create } from "zustand";
import { IAuth } from "../../domain/models/types";
import { persist } from "zustand/middleware";

interface State {
  authData: IAuth;
  updateAuthData: (authData: IAuth) => void;
}

const INITIAL_STATE = {
  access_token: null,
  token_type: 'Bearer',
  expires_in: null,
};

export const useAuthStore = create<State>()(
  persist(
    (set) => ({
      authData: INITIAL_STATE,
      updateAuthData: (authData: IAuth) =>
        set(() => ({
          authData,
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);
