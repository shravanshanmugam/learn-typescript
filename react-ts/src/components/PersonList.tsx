import {Name, Person} from "./Person";

export type PersonListProps = {
    names: Name[]
}
export const PersonList = (props: PersonListProps) => {
    return <div>
        {props.names.map((name) => <Person key={name.first} name={name}/>)}
    </div>
}