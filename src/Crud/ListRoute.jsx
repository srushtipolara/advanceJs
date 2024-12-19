import {Route, Routes} from "react-router-dom";
import List from "./index";
import {BackgroundTheme} from "../Common/BackgroundTheme";
import CreateUpdateEmployeeList from "./CreateUpdateEmployeeList";

const ListRoute = () => {
    return (
        <>
            <Routes>
                <Route path={''} element={<List/>}/>
                <Route path={'/create'} element={<BackgroundTheme><CreateUpdateEmployeeList/></BackgroundTheme>}/>
                <Route path={'/update/:id'} element={<BackgroundTheme><List/></BackgroundTheme>}/>
            </Routes>
        </>
    )
}

export default ListRoute