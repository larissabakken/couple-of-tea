import { useRouter } from "next/router";
import { checkTokenValidity, logout } from "@/lib/auth";
import { useToast } from "@/hooks/useToast";
import { useAuth } from "@/hooks/useAuth";

export function useRequireAuth(redirectUrl = "/login") {
  const router = useRouter();
  const showToast = useToast(); 

  //TODO - change this to useAuth hook
  
  if (!checkTokenValidity()) {
    logout();
    router.push(redirectUrl);
    showToast("You must be logged in to view this page", { type: "error" });
  }
}
