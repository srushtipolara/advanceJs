const Reduce = () => {

    const CarDetails = [
        {
            id: 1,
            carName: 'Toyota',
        },
        {
            id: 2,
            carName: 'Suzuki',
        },
        {
            id: 3,
            carName: 'Honda',
        },
        {
            id: 4,
            carName: 'Nissan',
        },
        {
            id: 5,
            carName: 'Mitsubishi',
        },
        {
            id: 6,
            carName: 'Toyota',
        },
        {
            id: 7,
            carName: 'Mitsubishi',
        },
    ]

    const cardReduce = CarDetails.reduce((acc, cur) => ((acc[cur.carName] ||= []).push(cur), acc), {});

    console.log("cardReduce", cardReduce)

    return (
        <div>
            <h1>Reduce</h1>
            {
                Object.values(cardReduce).map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>{item[0].carName.toUpperCase()}</h3>
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