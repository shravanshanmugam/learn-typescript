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
import {ThemeParent} from "./context/ThemeParent";
import {UserParent} from "./context/UserParent";
import {UserChild} from "./context/UserChild";
import {DomRef} from "./ref/DomRef";
import {MutableRef} from "./ref/MutableRef";
import {Counter} from "./class/Counter";
import {Private} from "./auth/Private";
import {Profile} from "./auth/Profile";
import {SuperHeroList} from "./generics/SuperHeroList";
import {superHeroes} from "./generics/superheroes";


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
            <Greet name="John" messageCount={10} loggedIn/>
            <Greet name="Doe" loggedIn={false}/>
            <PersonList names={friends}/>
            <Container styles={{border: "1px solid black", padding: "1rem", backgroundColor: "wheat"}}>
                <>
                    <Input value={value} handleChange={(event) => setValue(event.target.value)}/>
                    <Button handleClick={(event, id) => alert("Button clicked! " + id + " " + value)}>Click me!</Button>
                </>
            </Container>
            <LoggedIn/>
            <User/>
            <ThemeParent>
                <Box/>
            </ThemeParent>
            <UserParent>
                <UserChild/>
            </UserParent>
            <DomRef/>
            <MutableRef/>
            <Counter message="The count is:"/>
            <Private isLoggedIn={true} Component={Profile}/>
            <SuperHeroList
                items={superHeroes}
                onClick={(item) => alert(item)}/>
        </div>
    );
}

export default App;
