import {Route, Routes} from "react-router-dom";
import AdvanceList from "./AdvanceList";
import Inheritances from "./Inheritances";
import Closures from "./Closures";
import AsyncAwaitPromises from "./AsyncAwaitPromises";
import EventLoops from "./EventLoops";
import CallBack from "./CallBack";
import FunctionalProgramming from "./FunctionalProgramming";
import HighOrderFunctions from "./HighOrderFunctions";
import Generators from "./Generators";
import Hoisting from "./Hoisting";
import IIFEs from "./IIFEs";
import Memoization from "./Memoization";
import Currying from "./Currying";

const AdvanceJs = () => {
    return (
        <>
            <Routes>
                <Route path={''} element={<AdvanceList/>}/>
                <Route path={'/closure'} element={<Closures/>}/>
                <Route path={'/inheritances'} element={<Inheritances/>}/>
                <Route path={'/async-await-promises'} element={<AsyncAwaitPromises/>}/>
                <Route path={'/event-loops'} element={<EventLoops/>}/>
                <Route path={'/callback'} element={<CallBack/>}/>
                <Route path={'/functional-programming'} element={<FunctionalProgramming/>}/>
                <Route path={'/high-order-functions/*'} element={<HighOrderFunctions/>}/>
                <Route path={'/generators'} element={<Generators/>}/>
                <Route path={'/hoisting'} element={<Hoisting/>}/>
                <Route path={'/iifes'} element={<IIFEs/>}/>
                <Route path={'/memoization'} element={<Memoization/>}/>
                <Route path={'/currying'} element={<Currying/>}/>
            </Routes>
        </>
    )
}

export default AdvanceJs;