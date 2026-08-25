import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {index: true, Component: Home},

        ]
    },
    {path: '/sign-in', element: <SignIn />},
    {path: '/sign-up', element: <SignUp />}
]);

export default router;