import { HttpMethod } from "../@types/hooks";
import { useLoading } from "./useLoading";
import { api } from "../lib/api";
import { checkTokenValidity, logout } from "../lib/auth";

export function useApi() {
  const { loading: loadingWithApi, withLoading } = useLoading();

  async function request(url: string, method: HttpMethod, data?: any) {
    if (!checkTokenValidity()) {
      logout();
      window.location.href = '/';
      return;
    }

    const requestMethod = api[method];
    const response = await withLoading(requestMethod(url, data));

    return response;
  }

  return { loading: loadingWithApi, request };
}