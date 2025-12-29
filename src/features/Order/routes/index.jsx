import { lazy } from 'react';
import { DefaultLayout } from '../../../shared/layout/default-layout';

const CartPage = lazy(() => import('../Cart/pages/CartPage'));
const CheckoutPage = lazy(() => import('../Checkout/pages/CheckoutPage'));
const PlaceOrderPage = lazy(() => import('../PlaceOrder/PlaceOrderPage'));
const OrderSuccessPage = lazy(() => import('../OrderSuccess/OrderSuccessPage'));

export const orderRoutes = [
  {
    path: '/cart',
    element: (
      <DefaultLayout>
        <CartPage />
      </DefaultLayout>
    ),
  },
  {
    path: '/checkout',
    element: (
      <DefaultLayout>
        <CheckoutPage />
      </DefaultLayout>
    ),
  },
  {
    path: '/place-order',
    element: (
      <DefaultLayout>
        <PlaceOrderPage />
      </DefaultLayout>
    ),
  },
  {
    path: '/order-success',
    element: (
      <DefaultLayout>
        <OrderSuccessPage />
      </DefaultLayout>
    ),
  },
];