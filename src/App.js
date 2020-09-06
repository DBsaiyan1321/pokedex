import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonIndex from "./Index/PokemonIndex";
import PokemonShow from "./Show/PokemonShow";

const App = props => { 
    return ( 
        <Router>
            <Switch>
                <Route path="/:id" component={PokemonShow} />
                <Route path="/" component={PokemonIndex} />
            </Switch>
        </Router>
    )
};

export default App;