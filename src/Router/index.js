import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ForgetPassword from "../Auth/ForgetPassword";
import ListRoute from "../Crud/ListRoute";
import Todo from "../Todo";
import AdvanceJs from "../advanceJs";
import Practice from "../Practice";
import Array from "../Array";

export const publicRoutes = [
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/signup',
        Component: Signup,
    },
    {
        path: '/forget-password',
        Component: ForgetPassword,
    }
];

export const authProtectedRouter = [
    {
        path: '/',
        Component: ListRoute,
    },
    {
        path: "/list/*",
        Component: ListRoute,
    },
    {
        path: "/todo/*",
        Component: Todo,
    },
    {
        path: "/advance-js/*",
        Component: AdvanceJs,
    },
    {
        path: "/practice/*",
        Component: Practice,
    },
    {
        path: "/array",
        Component: Array,
    }
]