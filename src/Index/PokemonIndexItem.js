import React, { useState, useEffect } from "react";

const PokemonIndexItem = props => { 
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(json => setPokemon(json))
    }, [props.url]);
    console.log(pokemon)
    // debugger
    return (pokemon) ? 
    <li id={pokemon.id}>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} Sprite`} />
            <h1>{pokemon.name} <span>#{pokemon.id}</span></h1>
            <ul>
                {pokemon.types.map(type => { 
                    return (
                        <li key={type.slot}>{type.type.name}</li>
                    )
                })}
            </ul>
    </li> : null 
}

export default PokemonIndexItem;