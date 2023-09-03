import {PersonProps} from "./Person.types";

export const Person = (props: PersonProps) => {
    const {name} = props;
    return <p>{name.first} {name.last?.toUpperCase()}</p>
}