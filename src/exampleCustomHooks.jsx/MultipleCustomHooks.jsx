import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    console.log(counter)
    const {name, species, image} = !!data && data;

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                isLoading
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{name}</p>
                        <footer className="blockquote-footer">{species}</footer>
                    </blockquote>
                )
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
