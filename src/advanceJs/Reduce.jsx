const Reduce = () => {

    const CarDetails = [
        {id: 1, carName: 'Toyota'},
        {id: 2, carName: 'Suzuki'},
        {id: 3, carName: 'Honda'},
        {id: 4, carName: 'Nissan'},
        {id: 5, carName: 'Mitsubishi'},
        {id: 6, carName: 'Toyota'},
        {id: 7, carName: 'Mitsubishi'},
        {id: 8, carName: 'kiya'},
    ]


    // option 1:
    let newObj = {}
    for (let {id, carName} of CarDetails) {
        if (!newObj[carName]) {
            newObj[carName] = [{id, carName}]
        } else {
            newObj[carName].push({id, carName})
        }
    }
    console.log("newObj", newObj)

    // option 2:
    const cardReduce = CarDetails.reduce((acc, cur) => ((acc[cur.carName] ||= []).push(cur), acc), {});

    console.log("cardReduce", cardReduce)

    return (
        <div>
            <p>Reduce</p>
            {
                Object.values(cardReduce).map((item, index) => {
                    return (
                        <div key={index}>
                            <h6>{item[0].carName.toUpperCase()}</h6>
                            {
                                item.map((car, index) => {
                                    return (
                                        <div key={index}>
                                            <p>{car.carName}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reduce;