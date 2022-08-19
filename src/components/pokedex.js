import React, { Component } from "react";
import { Howl } from 'howler';
import ImgPokedex from '../assets/images/pokedex.png';
import hoverSound from '../assets/sounds/hoverSound.mp3';
import clickSound from '../assets/sounds/clickSound.mp3';

import './pokedexStyles.css';

const click = new Howl({
    src: [hoverSound],
    html5: true,
    preload: true,
    volume: 0.5
})
const clickDark = new Howl({
    src: [clickSound],
    html5: true,
    preload: true,
    volume: 0.1
})

class Pokedex extends Component {
    render(){
        return(
            <>
            <main>
                <img src="#" alt="pokemon" className="img-pokemon"></img>

                <div className="div-dark">
                    <button className="botao-dark" onClick={() => clickDark.play()}></button>
                    <span className="text-dark"> DarkMode: Off </span>
                </div>
                
                <div className="btn-setas">
                    <button className="button btn-antes" onClick={() => click.play()}> &lt; </button>
                    <button className="button btn-depois" onClick={() => click.play()}> &gt; </button>
                </div>

                <form className="busca">
                    <input 
                    type="search"
                    className="input-busca"
                    placeholder="Insira o ID ou Nome"
                    required/>
                </form>

                <div className="basePokemon">
                    <div name ="types" id="types">
                        <p><strong> Type: </strong></p>
                        <img src="" id= "typesUm"></img>
                        <img src="" id= "typesDois"></img>
                    </div>
                    <p><strong> Stats: </strong></p>
                    <div id ="statsPokemon">
                        <p id ="hp"></p>
                        <p id ="atk"></p>
                        <p id ="def"></p>
                        <p id ="spatk"></p>
                        <p id ="spdef"></p>
                        <p id ="spd"></p>
                    </div>  
                </div>
                
                <h1 className="dados-pokemon">
                    <span className="num-pokemon"></span> -
                    <span className="nome-pokemon"></span>
                </h1>

                <img src={ImgPokedex} alt="pokedex" id="pokedex"></img>
            </main>
            </>
        )
    }
}


export default Pokedex