import React, { useState } from "react";
import PokemonIndex from "./Index/PokemonIndex";

const App = props => { 
    const [pokemon, setPokemon] = useState([]);

    // fetch("https://pokeapi.co/api/v2/pokemon")
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log(json)
    //         setPokemon(json.results)
    //     });
    return <PokemonIndex pokemon={pokemon} />
};

export default App;