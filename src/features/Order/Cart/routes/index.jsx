import { lazy } from 'react';
import { DefaultLayout } from '../../../shared/layout/default-layout'

const CartPage = lazy(() => import('../pages/CartPage'));

export const cartRoutes = [
  {
    path: '/cart',
    element: (
            <DefaultLayout>
                <CartPage />
            </DefaultLayout>
        ),
  },
]

