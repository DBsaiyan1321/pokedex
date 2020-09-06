import React, { useState, useEffect } from "react"; 

const capitalize = string => {
    if (typeof string != "string") return "";

    return string[0].toUpperCase() + string.slice(1);
}

const PokemonShow = props => { 
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => { 
        if (!pokemon) { 
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`)
                .then(res => res.json())
                .then(json => setPokemon(json))
        }
    })

    console.log(pokemon)

    return (!pokemon) ? null :
        <div>
            <h1>{capitalize(pokemon.name)} <span>#{pokemon.id}</span></h1> 
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={`${pokemon.name} Sprite`} />
        </div>
};

export default PokemonShow;