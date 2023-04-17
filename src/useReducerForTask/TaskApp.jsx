import { useEffect, useReducer } from "react"
import { taskReducer, TaskList, TaskAdd } from "."

const initialState = [
    // {
    //     id         : new Date().getTime() + 100,
    //     description: 'Recolectar la piedra de la mente',
    //     done       : false
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const TaskApp = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state));
    }, [state])

    const handleNewTask = ( task ) => {
        const action = {
            type: '[Task] Add Task',
            payload: task
        }

        dispatch(action);
    }

    const handleDeleteTask = ( id ) => {
        dispatch({
            type   : '[Task] Delete Task',
            payload: id
        })
    }

    const handleToggleTask = ( id ) => {
        dispatch({
            type   : '[Task] Toggle Task',
            payload: id
        });
    }

    return (
        <>
            <h1>Task App</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TaskList 
                        states={state} 
                        onDeleteTask={ handleDeleteTask }
                        onToggleTask={ handleToggleTask }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar Task</h4>
                    <hr />
                    <TaskAdd onNewTask={handleNewTask}/>
                </div>
            </div>

            
        </>
    )
}
