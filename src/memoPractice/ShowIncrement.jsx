import { memo } from "react";

export const ShowIncrement = memo( ({ increment }) => {
    console.log("Impreme")
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >
            Increment
        </button>
    )   
})
