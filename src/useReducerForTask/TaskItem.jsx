
export const TaskItem = ({state}) => {
    const { description } = state;
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{ description }</span>
                <button className="btn btn-danger">Delete</button>
            </li> 
        </>
    )
}
