import { lazy } from 'react'
import { DefaultLayout } from '../../../shared/layout/default-layout'

const Home = lazy(() => import('../page'))

export const homeRoutes = [
    {
        path: "/", 
        element: (
            <DefaultLayout>
                <Home />
            </DefaultLayout>
        ),
    },
]