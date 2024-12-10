import './App.css';
import Closures from "./advanceJs/Closures";
import ConstVSFunction from "./advanceJs/ConstVSFunction";
import Inheritances from "./advanceJs/Inheritances";

function App() {

    const data = {}
    console.log("data ==>", data);

    return (
        <>
            <div>Hello</div>
            <Closures/>
            <hr/>
            <ConstVSFunction/>
            <hr/>
            <Inheritances/>
            <hr/>
        </>
    );
}

export default App;
