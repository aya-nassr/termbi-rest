import { lazy } from "react"
import { BlankLayout } from '../../../shared/layout/blank-layout';

const SignUpPage = lazy(() => import('../pages/sign-up'));
const LoginPage = lazy(() => import('../pages/login'));

export const authRoutes = [
{
        path: "/login",
        element: (
            <BlankLayout>
                <LoginPage />
            </BlankLayout>
        ),
    },
    {
        path: "/sign-up",
        element: (
            <BlankLayout>
                <SignUpPage />
            </BlankLayout>
        ),
    },
]