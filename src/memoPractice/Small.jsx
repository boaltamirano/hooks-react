import { memo } from "react"

export const Small = memo(({value}) => {

    console.log('Repetition :(')

    return (
        <small>{ value }</small>
    )   
})
