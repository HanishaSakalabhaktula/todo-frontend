import { createContext, useReducer } from "react";

export const TodosContext = createContext();

export const todosReducer = (state, action) => {
    switch (action.type){
        //when making this request we will send the all the todos as a payload
        case 'SET_TODOS' : 
            return {
                todos: action.payload
            }

        //when making this request we will send only the created todo
        case 'CREATE_TODO' : 
            return {
                todos: [action.payload, ...state.todos]
            }
        //when making this request we will send the id of the todo that needs to be deleted
        case 'DELETE_TODO' :
            return {
                todos: state.todos.filter((t) => t._id !== action.payload._id)
            }
        //default case
        default: 
            return state;
        
    }
}

export const TodosContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(todosReducer, {
        todos : null
    })
    return (
        //we need to pass our state and dispatch to all the components so that they can use it
        <TodosContext.Provider value={{...state, dispatch}}>
            {children}
        </TodosContext.Provider>
    );
}