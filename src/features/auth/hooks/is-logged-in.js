import { useAuth } from "../context/AuthContext";

export function useIsLoggedIn() {
    const { isLoggedIn, isLoading } = useAuth();
    return { isLoggedIn, isLoading };
}