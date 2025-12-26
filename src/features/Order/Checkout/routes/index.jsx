import { lazy } from 'react';
import { DefaultLayout } from '../../../shared/layout/default-layout'

const CheckoutPage = lazy(() => import('../pages/CheckoutPage'));

export const checkoutRoutes = [
  {
    path: '/checkout',
    element: (
            <DefaultLayout>
                <CheckoutPage />
            </DefaultLayout>
        ),
  },
]

