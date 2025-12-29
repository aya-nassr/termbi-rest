import { useQuery } from "@tanstack/react-query";
import { userStorage } from "../storage";
import AuthServices from './api';

export function useGetMeQuery() {
    return useQuery({
        queryKey: ['auth-profile'],
        queryFn: () => {
            const userData = userStorage.get();
           
            return userData?.customer || null; 
        },
        staleTime: Infinity, 
    });
}