import React, { useState, useEffect } from "react";

const PokemonIndexItem = props => { 
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(json => setPokemon(json))
    }, [props.url]);

    return ( 
        <li>{pokemon.name}</li>
    )
}

export default PokemonIndexItem;