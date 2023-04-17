import { ToDoItem } from "./ToDoItem"

export const ToDoList = ({states = []}) => {
    return (
        <>
            <ul className="list-group">
                {
                    states.map( state => (
                        <ToDoItem key={ state.id } state={state}/>
                    ))
                }
            </ul>
        </>
    )
}
