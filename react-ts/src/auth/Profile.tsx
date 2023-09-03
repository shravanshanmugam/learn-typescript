export type ProfileProps = {
    name: string
}

export const Profile = ({ name }: ProfileProps) => {
    return <div className="profile">Private Profile component. Name is {name}</div>
}