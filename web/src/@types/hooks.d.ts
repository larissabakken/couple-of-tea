export interface ApiProps {
    endpoint: string;
    method?: AxiosRequestConfig["method"];
    payload?: object;
    headers?: any;
  }
  
  export type HttpMethod = "get" | "post" | "put" | "delete" | "patch";