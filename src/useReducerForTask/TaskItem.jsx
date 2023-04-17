
export const TaskItem = ({state, onDeleteTask}) => {
    const { description } = state;
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{ description }</span>
                <button 
                    className="btn btn-danger"
                    onClick={() => onDeleteTask(state.id)}
                >Delete</button>
            </li> 
        </>
    )
}
