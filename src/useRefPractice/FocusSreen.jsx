import { useRef } from "react"

export const FocusSreen = () => {

    const inputRef = useRef();

    const onclick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1> 
            <hr />
            <input
                className="form-control"
                placeholder="Ingrese su nombre"
                ref={inputRef}
                type="text"
            />

            <button
                className="btn btn-primary mt-2"
                onClick={ onclick }
            >
                set ref
            </button>
        </>
    )
}
