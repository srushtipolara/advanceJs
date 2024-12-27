const Array = () => {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let myArr = [[1, 2], [3, 4], [5, 6]]
    return (
        <>
            <p>Array Method</p>
            <p>["Banana", "Orange", "Apple", "Mango"]</p>
            <hr/>

            <div>
                <i>at() method => return index</i>
                <br/>
                <span>{fruits.at(1)}</span>
            </div>
            <hr/>

            <div>
                <i>copyWithin() method =>(target, start, end)</i>
                <br/>
                <span>{fruits.copyWithin(2, 0)}</span>
            </div>
            <hr/>
            <div>
                <i>flat() method => creates a new array</i> <br/>
                <p>{myArr.flat()}</p>
            </div>
            <hr/>
        </>
    )
}

export default Array;