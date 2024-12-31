import {Route, Routes} from "react-router-dom";
import Reduce from "./Reduce";
import Call from "./Call";
import Bind from "./Bind";

const HighOrder = () => {
    return (
        <div>
            <h6>High-Order Functions</h6>
            <ol>
                <li>Reduce()</li>
                <li>Map()</li>
                <li>Filter()</li>
                <li>Sort()</li>
            </ol>
        </div>
    )
}

const HighOrderFunctions = () => {
    return (
        <Routes>
            <Route path={''} element={<HighOrder/>}/>
            <Route path={'/reduces'} element={<Reduce/>}/>
            <Route path={'/map'} element={<HighOrder/>}/>
            <Route path={'/filter'} element={<HighOrder/>}/>
            <Route path={'/call'} element={<Call/>}/>
            <Route path={'/bind'} element={<Bind/>}/>
        </Routes>
    )
}

export default HighOrderFunctions;