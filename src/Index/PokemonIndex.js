import React, { useState, useEffect } from "react";

const PokemonIndex = props => { 
    const [pokemon, setPokemon] = useState(null); 

    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             setPokemon(json.results)
    //         });
    // });
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                setPokemon(json)
            });
    }, [url]);

    // debugger
    console.log(pokemon)

    return (!pokemon) ? null :  
        <div>
            <ul>
                {pokemon.results.map(poke => { 
                return <li>{poke.name}</li>
                })}
            </ul>
            <button onClick={() => setUrl(pokemon.next)}>Next</button>
            <button onClick={() => setUrl(pokemon.previous)}>Previous</button>
        </div>
};

export default PokemonIndex;