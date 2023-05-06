export interface User {
  id: string;
  name: string;
  email: string;
}
export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
}
