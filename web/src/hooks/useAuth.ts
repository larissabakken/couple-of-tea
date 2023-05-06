import { useState, useEffect } from "react";

import { useLoading } from "./useLoading";
import { api } from "../lib/api";
import { setAuthToken, getCurrentUser } from "../lib/auth";
import { User, AuthResponse } from "../@types/lib";

export interface AuthState {
  user: User | null;
  loading: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
}

export function useAuth(): AuthState {
  const { loading, withLoading } = useLoading();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    handleLogin,
  });

  async function handleLogin(email: string, password: string): Promise<void> {
    try {
      const { data } = await withLoading(
        api.post<AuthResponse>("/auth", { email, password })
      );
      const { accessToken, user } = data;
      localStorage.setItem("accessToken", accessToken);
      setAuthToken(accessToken);
      setAuthState({ user, loading: false, handleLogin });
    } catch (error) {
      throw new Error("Invalid credentials");
    }
  }

  useEffect(() => {
    const user = getCurrentUser();
    setAuthToken(localStorage.getItem("accessToken") ?? "");
    setAuthState((prevState) => ({
      ...prevState,
      user,
      loading: false,
      handleLogin,
    }));
  }, []);

  return { ...authState, handleLogin };
}
