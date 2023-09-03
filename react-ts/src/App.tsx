import React from 'react';
import {Greet} from "./props/Greet";
import {PersonList} from "./props/PersonList"
import {Status} from "./props/Status";
import {Heading} from "./props/Heading";
import {Oscar} from "./props/Oscar";
import {Button} from "./props/Button";
import {Input} from "./props/Input";
import {Container} from "./props/Container";
import {Name} from "./props/Person.types";
import {LoggedIn} from "./state/LoggedIn";
import {User} from "./state/User";
import {Box} from "./context/Box";
import {ThemeContextProvider} from "./context/ThemeContext";
import {UserParent} from "./context/UserParent";
import {UserChild} from "./context/UserChild";

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
                    <Button handleClick={(event, id) => console.log("Button clicked!", event, id, value)}>Click me!</Button>
                </>
            </Container>
            <LoggedIn/>
            <User/>
            <ThemeContextProvider>
                <Box/>
            </ThemeContextProvider>
            <UserParent>
                <UserChild/>
            </UserParent>
        </div>
    );
}

export default App;
