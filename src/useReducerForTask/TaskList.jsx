import { TaskItem } from "."

export const TaskList = ({states = [], onDeleteTask}) => {
    return (
        <>
            <ul className="list-group">
                {
                    states.map( state => (
                        <TaskItem key={ state.id } state={state} onDeleteTask={onDeleteTask}/>
                    ))
                }
            </ul>
        </>
    )
}
