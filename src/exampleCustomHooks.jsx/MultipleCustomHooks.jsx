import { useCounter, useFetch } from "../hooks";
import { DetailsComponents, LoadingComponents } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    console.log(counter)
    const {name, species, image} = !!data && data;

    return (
        <>
            <h1>Rick and Morty</h1>
            <hr/>
            {
                isLoading
                ? <LoadingComponents />
                : <DetailsComponents 
                    name={name}
                    species={species}
                />
                
            }

            <button 
                className="btn btn-primary" 
                disabled={ isLoading }
                onClick={() => increment()}
            >
                Next quote
            </button>
            
        </>
    )
}
