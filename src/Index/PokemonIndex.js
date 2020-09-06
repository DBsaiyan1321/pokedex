import React, { useState, useEffect } from "react";
import PokemonIndexItem from "./PokemonIndexItem";
import "../reset.css";
import "./PokemonIndex.css";

const PokemonIndex = props => { 
    const [pokemon, setPokemon] = useState(null); 
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setPokemon(json)
            });
    }, [url]);

    // debugger

    return (!pokemon) ? null :  
        <div>
            <ul className="grid">
                {pokemon.results.map(poke => { 
                    return <PokemonIndexItem key={poke.name} url={poke.url} />
                })}
            </ul>
            {pokemon.previous ? <button onClick={() => setUrl(pokemon.previous)}>Previous</button> : null} 
            { pokemon.next ? <button onClick={() => setUrl(pokemon.next)}>Next</button> : null } 
        </div>
};

export default PokemonIndex;