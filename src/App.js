import React, { useState, useEffect } from "react";
import PokemonIndex from "./Index/PokemonIndex";

const App = props => { 
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);

    useEffect(() => { 
        if (pokemon.length === 0) { 
            fetch("https://pokeapi.co/api/v2/pokemon/1/")
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    setPokemon(json.results)
                    // setSearching(false)
                    // setLoading(false)
                });
        }
    });

    return <PokemonIndex pokemon={pokemon} />
};

export default App;