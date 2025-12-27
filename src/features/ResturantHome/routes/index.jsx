import { DefaultLayout } from '../../../shared/layout/default-layout';
import RestaurantHomePage from '../pages/RestaurantHomePage';

export const restaurantHomeRoutes = [
    {
        path: '/restaurant-home',
        element: (
            <DefaultLayout>
                <RestaurantHomePage />
            </DefaultLayout>
        ),
    }
];