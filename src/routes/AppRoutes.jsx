import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {index: true, Component: Home},
            {path: '/contact', Component: Contact},
            {path: '/about', Component: About}
        ]
    },
    {path: '/sign-in', element: <SignIn />},
    {path: '/sign-up', element: <SignUp />}
]);


export default router;