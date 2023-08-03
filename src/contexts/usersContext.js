import { createContext, useReducer } from "react";

export const UsersContext = createContext();

export const usersReducer = (state, action) => {
    switch (action.type) {
        case 'LOG_IN_USER' : 
            return {
                user: action.payload
            }
        case 'LOG_OUT_USER' : 
            return {
                user: null
            }
        default: return state
    }
}

export const UsersContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(usersReducer, {
        user: null
    })
    return(
        <UsersContext.Provider value={{...state, dispatch}}>
            {children}
        </UsersContext.Provider>
    );
}