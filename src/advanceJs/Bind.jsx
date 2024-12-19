import React from "react";

class Bind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 9,
            str: 'abc'
        }
        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent() {
        console.log("clicked");
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>Bind</h1>
                <button onClick={this.handleEvent}>Click</button>
            </div>
        )
    }
}

export default Bind;