import React, { useState, useEffect } from "react";
import PokemonIndex from "./Index/PokemonIndex";

const App = props => { 
    const [pokemon, setPokemon] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [searching, setSearching] = useState(false);

    // useEffect(() => { 
    //     if (!pokemon) { 
    //         fetch("https://pokeapi.co/api/v2/pokemon/")
    //             .then(res => res.json())
    //             .then(json => {
    //                 setPokemon(json)
    //                 // setSearching(false)
    //                 // setLoading(false)
    //             });
    //     }
    // });
    // debugger
    return <PokemonIndex pokemon={pokemon} />
};

export default App;