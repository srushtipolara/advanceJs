import {Route, Routes} from "react-router-dom";
import PatternFlow from "./PatternFlow";

const Practice = () => {
    return (
        <>

            <Routes>
                <Route path={''} element={<PatternFlow/>}/>
            </Routes>

        </>
    )
};

export default Practice;