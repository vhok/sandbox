import { useState, useEffect } from 'react';

// This example uses react-bootstrap
import { ListGroup } from 'react-bootstrap';

const FunctionFetch = () => {
    const [names, setNames] = useState([]);

    useEffect( () => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');

            // If promise is resolved successfully
            if(response.ok) {
                // Extract JSON object from response object
                const data = await response.json();

                // Map through array to obtain name property
                const nextNames = data.results.map( (pokemon) => pokemon.name);

                setNames(nextNames);
            } else {
                console.error('bad response');
            }
        }

        fetchPokemon();
    }, [setNames]);

    return (
        <ListGroup>
            {
                names.map( (name) => {
                    return (
                        <ListGroup.Item key={name}>
                            {name}
                        </ListGroup.Item>
                    );
                })
            }
        </ListGroup>
    );
}

export default FunctionFetch;