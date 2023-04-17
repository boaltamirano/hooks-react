import { useReducer } from "react"
import { toDoReducer } from "./toDoReducer"
import { ToDoList } from "./ToDoList"
import { ToDoAdd } from "./ToDoAdd"

const initialState = [
    {
        id         : new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done       : false
    },
    {
        id         : new Date().getTime() + 100,
        description: 'Recolectar la piedra de la mente',
        done       : false
    }
]

export const ToDoApp = () => {

    const [state, dispatch] = useReducer(toDoReducer, initialState);

    const handleNewToDo = ( toDo ) => {
        console.log({ toDo });
    }

    return (
        <>
            <h1>ToDo App</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList states={state}/>
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr />
                    <ToDoAdd onNewToDo={handleNewToDo}/>
                </div>
            </div>

            
        </>
    )
}
