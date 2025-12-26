import { lazy } from 'react'
import { DefaultLayout } from '../../../shared/layout/default-layout'

const ProductsPage = lazy(() => import('../pages'))

export const productRoutes = [
    {
        path: "/products", 
        element: (
            <DefaultLayout>
                <ProductsPage />
            </DefaultLayout>
        ),
    },
]