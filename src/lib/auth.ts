import jwtDecode from "jwt-decode";
import { api } from "./api";
import { User, AuthResponse } from "../@types/lib";

// Função para definir o token de autenticação na instância da API
export function setAuthToken(accessToken: string): void {
  if (accessToken) {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}

// Função para remover o token de autenticação da instância da API
export function removeAuthToken(): void {
  delete api.defaults.headers.common.Authorization;
}

// Função para retornar o usuário atual com base no token armazenado no localStorage
export function getCurrentUser(): User | null {
  // Recupera o token armazenado no localStorage
  const accessToken = localStorage?.getItem("accessToken");
  if (accessToken) {
    // Decodifica o token usando a biblioteca jwt-decode e obtém o objeto user do payload
    const { user } = jwtDecode<AuthResponse>(accessToken);
    return user;
  }
  return null;
}

export function checkTokenValidity(){
  const accessToken = localStorage?.getItem("accessToken");
  if (accessToken) {
    const { exp } = jwtDecode<{ exp: number }>(accessToken);
    return Date.now() < exp * 1000;
  }
  return false;
}

// Função para efetuar o logout do usuário, removendo o token do localStorage e da instância da API
export function logout(): void {
  // Remove o token do localStorage
  localStorage?.removeItem("accessToken");
  // Remove o token da instância da API
  removeAuthToken();
}
