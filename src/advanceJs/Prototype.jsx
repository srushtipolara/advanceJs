const Prototype = () => {
    // create a new property in prototype
    const parent = {
        greet: function () {
            return "hello greet!";
        }
    }

    // eslint-disable-next-line no-extend-native
    const child = Object.prototype.greet = parent.greet();
    console.log(child.greet);

    // create a new method in prototype
    function Animal(name) {
        this.name = name;
    }

    // eslint-disable-next-line no-extend-native
    Object.prototype.multiplication = function (multiplication) {
        if (typeof multiplication === 'number') {
            console.log("multiplication ==>", multiplication);
            return multiplication * multiplication;
        } else {
            return "No multiplication";
        }
    }

    const animal = new Animal("Dog");
    console.log("animal ==>", animal.multiplication(2));

    // eslint-disable-next-line no-extend-native
    Array.prototype.multiplication = function () {
        return this.map((value) => value * value);
    };

    const array = [2, 3, 4, 5, 6]
    console.log("array +++>", array.multiplication());

    return (
        <div>
            <h2>Prototype</h2>
        </div>
    )
}
export default Prototype;