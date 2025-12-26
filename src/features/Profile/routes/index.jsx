import { appRoutes } from '../../../routes';
import { ProfilePage } from '../pages';
import { ManageProfileForm } from '../components/manage-profile-form';
import { MyOrdersList } from '../components/my-orders-list';
import { MyBookingsList } from '../components/my-bookings-list';
import { MyReviewsList } from '../components/my-reviews-list';

export const profileRoutes = [
    {
        path: appRoutes.profile.main,
        element: <ProfilePage />,
        children: [
            {
                path: 'manage',
                element: <ManageProfileForm />
            },
            {
                path: 'orders',
                element: <MyOrdersList />
            },
            {
                path: 'bookings',
                element: <MyBookingsList />
            },
            {
                path: 'reviews',
                element: <MyReviewsList />
            }
        ]
    }
];