import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { DecodedToken } from "./Auth";
import { useRouter } from "next/navigation";

function AuthCheck(redirectTo?: string) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token, redirect to login
      const redirectUrl = redirectTo || "/login";
      router.push(`/login?redirect_to_url=${encodeURIComponent(redirectUrl)}`);
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const exp = decoded.exp;

      if (exp * 1000 <= Date.now()) {
        // Token expired
        const redirectUrl = redirectTo || "/login";
        router.push(
          `/login?redirect_to_url=${encodeURIComponent(redirectUrl)}`
        );
        return;
      }

      // Token is valid, continue to the protected page
    } catch (e) {
      console.error("Authentication error occurred", e);
    }
  }, [router, redirectTo]);
}

export default AuthCheck;
