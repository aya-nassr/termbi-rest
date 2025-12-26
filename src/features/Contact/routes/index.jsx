import { lazy } from 'react'
import { DefaultLayout } from '../../../shared/layout/default-layout'

const ContactPage = lazy(() => import('../page/ContactPage'))

export const contactRoutes = [
    {
        path: "/contact", 
        element: (
            <DefaultLayout>
                <ContactPage />
            </DefaultLayout>
        ),
    },
]