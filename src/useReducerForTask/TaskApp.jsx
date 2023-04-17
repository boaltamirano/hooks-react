import { TaskList, TaskAdd } from "."
import { useTask } from "../hooks/useTask";

export const TaskApp = () => {

    const { state, handleDeleteTask, handleToggleTask, handleNewTask } = useTask();

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
                    <TaskAdd onNewTask={ handleNewTask }/>
                </div>
            </div>

            
        </>
    )
}
