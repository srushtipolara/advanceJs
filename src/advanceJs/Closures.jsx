function Closures() {

    function handleClick(value) {
        console.log('button clicked', value);
        return function () {
            alert(value)
        };
    }

    return (
        <>
            <button id={'button1'} onClick={handleClick('button1 clicked')}> button 1</button>
            <button id={'button2'} onClick={handleClick('button2 clicked')}> button 2</button>
        </>
    );
}

export default Closures;
