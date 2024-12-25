import {Route, Routes} from "react-router-dom";
import Reduce from "./Reduce";
import Call from "./Call";
import Bind from "./Bind";

const HighOrderFunctions = () => {
    return (
        // <div>
        //     <h6>High-Order Functions</h6>
        //     <ol>
        //         <li>Reduce()</li>
        //         <li>Map()</li>
        //         <li>Filter()</li>
        //         <li>Sort()</li>
        //     </ol>
        // </div>
        <Routes>
            <Route path={''} element={<></>}/>
            <Route path={'/reduce'} element={<Reduce/>}/>
            <Route path={'/map'} element={<></>}/>
            <Route path={'/filter'} element={<></>}/>
            <Route path={'/call'} element={<Call/>}/>
            <Route path={'/bind'} element={<Bind/>}/>
        </Routes>
    )
}

export default HighOrderFunctions;