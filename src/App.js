import './App.css';
import List from "./Crud";
import {Route, Routes, useNavigate} from "react-router-dom"
import CreateUpdateEmployeeList from "./Crud/CreateUpdateEmployeeList";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import {useEffect} from "react";
import ForgetPassword from "./Auth/ForgetPassword";

function App() {

    const navigate = useNavigate();
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    const user = JSON.parse(sessionStorage.getItem("user"));

    useEffect(() => {
        if (!user) {
            navigate('/signup')
        } else if (!authUser) {
            navigate('/login')
        }
    }, [authUser, navigate, user]);

    useEffect(() => {
        const rootId = document.getElementById("root");
        rootId.style.backgroundColor = "#f1f1f1";
        rootId.style.height = "100vh";
        rootId.style.widtjh = "100%";
        rootId.style.overflow = "hidden";
        return () => {
            rootId.style.backgroundColor = "#fff";
        }
    }, []);

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
                <Route path={"/"} element={<List/>}/>
                <Route path={"/list"} element={<List/>}/>
                <Route path={"/list/create"} element={<CreateUpdateEmployeeList/>}/>
                <Route path={"/list/update/:id"} element={<CreateUpdateEmployeeList/>}/>

                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
                <Route path={'/forget-password'} element={<ForgetPassword/>}/>
            </Routes>

        </>
    );
}

export default App;
