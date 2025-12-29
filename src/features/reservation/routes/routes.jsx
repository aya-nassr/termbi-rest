import { DefaultLayout } from "../../../shared/layout/default-layout";
import { appRoutes } from "../../../routes";
import { ReservePage } from "../pages";

export const reservationRoutes = [
    {
        path: appRoutes.reserve,
        element: (
            <DefaultLayout>
                <ReservePage />
            </DefaultLayout>
        )
    }
];