import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const capitalize = string => { 
    if (typeof string != "string") return "";

    return string[0].toUpperCase() + string.slice(1);
}

const PokemonIndexItem = props => { 
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(json => setPokemon(json))
    }, [props.url]);

    return (pokemon) ? 
        <li id={pokemon.id} className="pokemon-index-item">
            <Link to={`/${pokemon.id}`}>
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={`${pokemon.name} Sprite`} />  {/* If there is a dash in the key name, you must access it with this syntax. If I wanted the dream_world sprite, I could've done pokemon.sprites.other.dream_world.front_default */}
                <h1>{capitalize(pokemon.name)} <span>#{pokemon.id}</span></h1>
                <ul className="types">
                    {pokemon.types.map(type => { 
                        return (
                            <li key={type.slot} className={type.type.name}>{capitalize(type.type.name)}</li>
                        )
                    })}
                </ul>
            </Link>
        </li> : null 
}

export default PokemonIndexItem;