import { useContext } from "react"
import { UsersContext } from "../contexts/usersContext"

export const useUsersContext = () => {
    const context = useContext(UsersContext);

    if(!context){
        throw Error('Context is available to children with the UsersContextProvider only')
    }

    return context;
}