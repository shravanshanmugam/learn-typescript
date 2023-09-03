export type Name = {
    first: string,
    last?: string
}
export type PersonProps = {
    name: Name
}
export const Person = (props: PersonProps) => {
    const {name} = props;
    return <p>{name.first} {name.last?.toUpperCase()}</p>
}