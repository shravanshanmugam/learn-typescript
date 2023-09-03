import { useContext } from 'react'
import {AuthUser, UserContext} from './UserParent'

export const UserChild = () => {
    const userContext = useContext(UserContext);
    function handleLogin() {
        userContext.setUser({name: "Tom", email: "tom@example.com" })
    }

    function handleLogout() {
        userContext.setUser({} as AuthUser)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user.name}</div>
            <div>User email is {userContext.user.email}</div>
        </div>
    )
}