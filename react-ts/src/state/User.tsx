import React from "react";

type AuthUser = {
    name: string,
    email: string
}
export const User = () => {
    const [user, setUser] = React.useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name: "John",
            email: "johndoe@example.com"
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name}, email is {user?.email}</div>
    </div>
}