import React from "react";

export const LoggedIn = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const handleLogin = () => {
        setLoggedIn(true)
    }
    const handleLogout = () => {
        setLoggedIn(false)
    }
    return <div className="logged-in">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {loggedIn ? "logged-in" : "logged-out"}</div>
    </div>
}