import { TaskItem } from "."

export const TaskList = ({states = [], onDeleteTask, onToggleTask}) => {
    return (
        <>
            <ul className="list-group">
                {
                    states.map( state => (
                        <TaskItem 
                            key={ state.id } 
                            state={state} 
                            onDeleteTask={onDeleteTask}
                            onToggleTask={onToggleTask}
                        />
                    ))
                }
            </ul>
        </>
    )
}
