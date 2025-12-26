import { userStorage } from "../storage";

export function logoutHelper(fallbackUrl = '/login') {
    userStorage.clear();
    window.location.href = fallbackUrl;
}