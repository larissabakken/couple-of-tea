import React, { createContext, useContext } from "react";
import { useAuth, AuthState } from "@/hooks/useAuth";


interface AuthContextData extends AuthState {}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const authState = useAuth();
  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export function useAuthContext(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context?.user) {
    console.error("useAuth must be used within an AuthProvider");
  }
  return context as AuthContextData;
}
