import React, { useState } from "react"; 

const PokemonShow = props => { 
    const [pokemon, setPokemon] = useState([]);

    // debugger
    console.log(props.pokemon)

    return (!props.pokemon) ? null :
        <div>
            {/* <ul>
                {props.pokemon.map(poke => { 
                return <li>{poke.name}</li>
                })}
            </ul> */}
            <h1>{props.pokemon.name} <span>#{props.pokemon.id}</span></h1>
            <img src={props.pokemon.sprites.other.dream_world.front_default} alt={`${props.pokemon.name} Sprite`} />
            <ul>
                {props.pokemon.types.map(type => {
                    return <li key={type.slot}>{type.type.name}</li>
                })}
            </ul>
        </div>
};

export default PokemonShow;