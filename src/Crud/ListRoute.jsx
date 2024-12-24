import {Route, Routes} from "react-router-dom";
import List from "./index";
import {BackgroundTheme} from "../Common/BackgroundTheme";
import CreateUpdateEmployeeList from "./CreateUpdateEmployeeList";
import {StoreProvider} from "../Common/CreateContext";

const ListRoute = () => {
    return (
        <>
            <Routes>
                <Route path={''} element={
                    <StoreProvider>
                        <List/>
                    </StoreProvider>
                }/>
                <Route path={'/create'} element={
                    <StoreProvider>
                        <BackgroundTheme>
                            <CreateUpdateEmployeeList/>
                        </BackgroundTheme>
                    </StoreProvider>
                }/>
                <Route path={'/update/:id'} element={
                    <StoreProvider>
                        <BackgroundTheme>
                            <List/>
                        </BackgroundTheme>
                    </StoreProvider>
                }/>
            </Routes>
        </>
    )
}

export default ListRoute