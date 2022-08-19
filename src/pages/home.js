import React, { Component } from "react";
import Pokedex from '../components/pokedex';
import NavBar from "../components/navbar";

class Home extends Component {
    render(){
        return(
            <>
                <NavBar/>
                <Pokedex/>
            </>
        )
    }
}

export default Home