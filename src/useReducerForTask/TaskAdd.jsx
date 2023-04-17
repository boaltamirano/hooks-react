import { useForm } from "../hooks/useForm"

export const TaskAdd = ({onNewTask}) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTask = {
            id         : new Date().getTime(),
            done       : false,
            description: description
        }

        onNewTask(newTask);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="What to do?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Add
            </button>
        </form>
    )
}
