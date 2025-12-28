import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { BlankLayout } from "../shared/layout/blank-layout";
import { homeRoutes } from '../features/home/routes'
import { authRoutes } from '../features/auth/routes'
import { AppContainer } from "../shared/layout/app-container";
import { contactRoutes } from '../features/Contact/routes'
import { productRoutes } from '../features/products/routes'
import { orderRoutes } from '../features/Order/routes'
import { profileRoutes } from '../features/Profile/routes'
import { reservationRoutes } from '../features/reservation/routes.jsx'
import { restaurantHomeRoutes } from '../features/ResturantHome/routes/'

const routes = [
    {
        path: '/',
        element: <Outlet />,
        children: [
            ...homeRoutes,
            ...contactRoutes,
            ...authRoutes,
            ...productRoutes,
            ...orderRoutes,
            ...profileRoutes,
            ...reservationRoutes,
            ...restaurantHomeRoutes,

            {
                path: '*',
                element: (
                    <BlankLayout>
                       
                    </BlankLayout>
                ),
            }
        ]
    }
]

const router = createBrowserRouter(routes, {
    basename: '/termbi-rest'
});

export function AppRouterProvider() {
    return (
        <AppContainer>
            <RouterProvider router={router} />
        </AppContainer>
    )
}