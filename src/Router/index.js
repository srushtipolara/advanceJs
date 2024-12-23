import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ForgetPassword from "../Auth/ForgetPassword";
import ListRoute from "../Crud/ListRoute";
import Todo from "../Todo";
import CallBack from "../advanceJs/CallBack";

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
        Component: CallBack,
    },
    {
        path: "/list/*",
        Component: ListRoute,
    },
    {
        path: "/todo/*",
        Component: Todo,
    }
]