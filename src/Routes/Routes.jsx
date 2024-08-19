import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateLoginRoute from "./PrivateLoginRoute";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "services/:id",
                element: <PrivateLoginRoute><Checkout></Checkout></PrivateLoginRoute>,
                loader: ({ params }) => fetch(`https://car-doctor-server-ten-flax.vercel.app/services/${params.id}`),
            },
            {
                path: "/cart",
                element: <PrivateLoginRoute><Cart></Cart></PrivateLoginRoute>
            }

        ]
    },
]);

export default router