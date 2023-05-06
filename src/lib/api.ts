import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3030/api/",
  // Define o tempo máximo de espera para uma resposta da API
  timeout: 5000,
  // Define se os cookies devem ser incluídos nas requisições
  withCredentials: true,
});