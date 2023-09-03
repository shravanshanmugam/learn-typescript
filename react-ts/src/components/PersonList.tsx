import {Person} from "./Person";
import {Name} from "./Person.types";

export type PersonListProps = {
    names: Name[]
}
export const PersonList = (props: PersonListProps) => {
    return <div>
        {props.names.map((name) => <Person key={name.first} name={name}/>)}
    </div>
}