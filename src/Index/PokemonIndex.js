import React, { useState, useEffect } from "react";

const PokemonIndex = props => { 
    const [pokemon, setPokemon] = useState([]); 

    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             setPokemon(json.results)
    //         });
    // });

    console.log(pokemon);
    
    return <div>
        <ul>
            {props.pokemon.map(poke => { 
               return <li>{poke.name}</li>
            })}
        </ul>
    </div>
};

export default PokemonIndex;