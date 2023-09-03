import React from 'react';
import {Greet} from "./components/Greet";
import {PersonList} from "./components/PersonList"
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";
import {Button} from "./Button";
import {Input} from "./Input";
import {Container} from "./Container";
import {Name} from "./components/Person.types";

function App() {

    const [value, setValue] = React.useState("");
    const friends: Name[] = [{
        first: "Chandler",
        last: "Bing"
    }, {
        first: "Phoebe",
        last: "Buffay"
    }]
    return (
        <div className="App">
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
            </Oscar>
            <Status status="success"/>
            <Greet name="John" messageCount={5} loggedIn={false}/>
            <Greet name="Doe" loggedIn={false}/>
            <PersonList names={friends}/>
            <Container styles={{border: "1px solid black", padding: "1rem"}}>
                <>
                    <Input value={value} handleChange={(event) => setValue(event.target.value)}/>
                    <Button handleClick={(event, id) => console.log("Button clicked!", event, id, value)}/>
                </>
            </Container>
        </div>
    );
}

export default App;
