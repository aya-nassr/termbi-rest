import { useGetMeQuery } from "../../../features/auth/services/queries";
import { Loader } from "../../components/loader";
import { userStorage } from "../../../features/auth/storage";



export function AppContainer({ children }) {
    const { isLoading, isFetching } = useGetMeQuery()
    const token = userStorage.get();

    if (token && (isLoading || isFetching)) {
        return (
            <div >
                <Loader />
            </div>
        )
    }

    return <>{children}</>
}
