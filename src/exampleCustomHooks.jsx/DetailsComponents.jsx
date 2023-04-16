import { useLayoutEffect, useRef, useState } from "react"

export const DetailsComponents = ({name, species}) => {
    
    const nameRef = useRef();
    const [boxSize, setBoxSize] = useState({width:0, height:0});

    useLayoutEffect(() => {
        const { height, width } = nameRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [species]);

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex'}}    
            >
                <p ref={nameRef} className="mb-1">{name}</p>
                <footer className="blockquote-footer">{species}</footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}

