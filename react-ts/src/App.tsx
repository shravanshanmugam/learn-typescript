import React from 'react';
import {Greet} from "./components/Greet";
import {Name} from "./components/Person";
import {PersonList} from "./components/PersonList"
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";

function App() {
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
        </div>
    );
}

export default App;
