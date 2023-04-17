import { useEffect, useReducer } from "react"
import { taskReducer } from "../useReducerForTask";

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const useTask = () => {

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

    return {
        state, 
        handleDeleteTask, 
        handleToggleTask, 
        handleNewTask
    }
}