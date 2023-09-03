import { Login } from './Login'
import { ProfileProps } from './Profile'
import { ComponentType} from "react";

type PrivateProps = {
    isLoggedIn: boolean
    Component: ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Vishwas' />
    } else {
        return <Login />
    }
}