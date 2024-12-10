const ConstVSFunction = () => {
    const dummy = {
        name: 'dummy',
        getDummyName: function () {
            console.log('this function', this);
        },
        getDummyNameArrow: () => {
            console.log('this const function', this);
        }
    };

    dummy.getDummyName();
    dummy.getDummyNameArrow();

    return (
        <div>
            <h1>Const vs Function</h1>
            <p>Function is a block-scoped variable, and it
                can be re-declared. It is used to declare a
                function
            </p>
            <p>Const is a block-scoped variable, and it
                cannot be re-declared. It is used to declare
                a variable
            </p>

        </div>
    )
}

export default ConstVSFunction;