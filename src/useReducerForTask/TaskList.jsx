import { TaskItem } from "."

export const TaskList = ({states = []}) => {
    return (
        <>
            <ul className="list-group">
                {
                    states.map( state => (
                        <TaskItem key={ state.id } state={state}/>
                    ))
                }
            </ul>
        </>
    )
}
