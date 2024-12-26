import {Card} from "react-bootstrap";

const PatternFlow = () => {

    let num = 5;
    let str = "* ";

    return (
        <>
            <h6>Pattern flow</h6>
            <Card>
                <Card.Header>Upper left triangle</Card.Header>
                <Card.Body>
                   <pre>
                        {/*{Array.from({length: num}, (_, i) => str.repeat(i + 1)).join('\n')}*/}
                       <br/>
                       <hr/>
                       {/*{Array.from({length: num}, (_, i) => " ".repeat(i) + str.repeat(num - i)).join('\n')}*/}
                       <br/>
                       {/*{Array.from({length: num}, (_, i) => ' '?.repeat(num - (i + 1)) + str.repeat(i + 1).split('').join('')).join('\n')}*/}
                   </pre>
                </Card.Body>
            </Card>

        </>
    )
}

export default PatternFlow;