import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom"
import {useEffect} from "react";
import {authProtectedRouter, publicRoutes} from "./Router";
import {BackgroundTheme} from "./Common/BackgroundTheme";
import {getCookie} from "./Common/Cookie";

function App() {

    const navigate = useNavigate();
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    const user = getCookie("user");

    window.addEventListener("beforeunload", () => {
        console.log("Window is about to close. Clearing local storage.");
        localStorage.clear();
    });

    useEffect(() => {
        if (!authUser) {
            navigate('/login')
        }
        if (!user) {
            navigate('/signup')
        }
    }, [authUser, navigate, user]);

    return (
        <>
            {/*<div>Hello</div>*/}
            {/*<Closures/>*/}
            {/*<hr/>*/}
            {/*<ConstVSFunction/>*/}
            {/*<hr/>*/}
            {/*<Inheritances/>*/}
            {/*<hr/>*/}
            <Routes>
                {
                    (authProtectedRouter || [])?.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.Component/>}/>
                    ))
                }

                {
                    (publicRoutes || [])?.map((route, index) => (
                        <Route key={index} path={route.path}
                               element={<BackgroundTheme>
                                   <route.Component/>
                               </BackgroundTheme>}/>
                    ))
                }

                {/*<Route path={'/login'} element={<BackgroundTheme><Login/></BackgroundTheme>}/>*/}
                {/*<Route path={'/signup'} element={<BackgroundTheme><Signup/></BackgroundTheme>}/>*/}
                {/*<Route path={'/forget-password'} element={<BackgroundTheme><ForgetPassword/></BackgroundTheme>}/>*/}
            </Routes>

        </>
    );
}

export default App;
