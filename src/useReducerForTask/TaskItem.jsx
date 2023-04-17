
export const TaskItem = ({state, onDeleteTask, onToggleTask}) => {
    const { description } = state;
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span 
                    className={`align-self-center ${ state.done && 'text-decoration-line-through'}`}
                    onClick={() => onToggleTask( state.id )}
                >{ description }</span>
                <button 
                    className="btn btn-danger"
                    onClick={() => onDeleteTask(state.id)}
                >Delete</button>
            </li> 
        </>
    )
}
