import Prototype from "./Prototype";

const Inheritances = () => {
    const obj = {
        a: 1,
        b: 2,
        __proto__: {b: 3, c: 4}
    }

    // console.log(obj.__proto__.b);

    return (
        <div>
            <h1>Inheritances</h1>
            <Prototype/>
            {/*<p>JavaScript is a prototype-based language, and every object in JavaScript has a prototype.*/}
            {/*    Inheritance in JavaScript is the mechanism by which properties are inherited from one object to another.*/}
            {/*</p>*/}
            {/*<p>JavaScript does not have "classes" in the classical sense. JavaScript does not have special syntax for*/}
            {/*    classes.*/}
            {/*    JavaScript does not have a class definition. JavaScript does not have a class declaration*/}
            {/*</p>*/}
            {/*<p>JavaScript uses functions as classes. Functions can be used to define classes in JavaScript.*/}
            {/*    A function can be used to define an object constructor, and then new objects can be created from the*/}
            {/*    constructor.*/}
            {/*</p>*/}
            {/*<p>JavaScript objects inherit properties from their prototype. Objects can be created using the Object*/}
            {/*    constructor.*/}
            {/*    The Object constructor creates an object wrapper for the given value.*/}
            {/*</p>*/}
            {/*<p>JavaScript objects can be created using the Object.create() method. The Object.create() method creates a*/}
            {/*    new object,*/}
            {/*    using an existing object as the prototype of the newly created object.*/}
            {/*</p>*/}
            {/*<p>JavaScript objects can be created using the new keyword. The new keyword creates an instance of a*/}
            {/*    user-defined object type.*/}
            {/*</p>*/}

        </div>
    )
}
export default Inheritances;