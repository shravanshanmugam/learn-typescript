import React, {createContext, useState} from "react";

export type AuthUser = {
    name: string
    email: string
}

type UserParentProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser
    setUser: React.Dispatch<React.SetStateAction<AuthUser>>
}
export const UserContext = createContext({} as UserContextType)

export const UserParent = ({children}: UserParentProps) => {
    const [user, setUser] = useState({} as AuthUser)
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}
