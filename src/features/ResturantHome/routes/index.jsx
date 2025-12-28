import RestaurantHomePage from '../pages/RestaurantHomePage';
import { DefaultLayout } from '../../../shared/layout/default-layout'


export const restaurantHomeRoutes = [
    {
        path: '/restaurant-home',
        element: 
        (
                    <DefaultLayout>
                       <RestaurantHomePage />,
                    </DefaultLayout>
                ),
        
    }
];