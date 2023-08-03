import { useContext } from "react"
import { TodosContext } from "../contexts/todosContext"

export const useTodosContext = () => {
    const context = useContext(TodosContext);

    if(!context){
        throw Error('context must be used inside the children only');
    }

    return context;
}