import { useCallback } from "react";
import { toast, ToastOptions } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning" | "default";
interface UseToastOptions {
  autoClose?: number;
  position?: ToastOptions["position"];
  type?: ToastType;
}

export const useToast = () => {
  const showToast = useCallback(
    (message: string, options?: UseToastOptions) => {
      toast(message, {
        type: options?.type ?? "default",
        autoClose: options?.autoClose ?? 3000,
        position: options?.position ?? "top-right",
      });
    },
    []
  );

  return showToast;
};
