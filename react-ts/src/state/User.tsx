import React from "react";

type AuthUser = {
    name: string,
    email: string
}
export const User = () => {
    const [user, setUser] = React.useState<AuthUser | null>(null);
    const [anotherUser, setAnotherUser] = React.useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name: "John",
            email: "johndoe@example.com"
        })
        setAnotherUser({
            name: "Jim",
            email: "jim@example.com"
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name}, email is {user?.email}</div>
        <div>Another user name is {anotherUser.name}, email is {anotherUser.email}</div>
    </div>
}