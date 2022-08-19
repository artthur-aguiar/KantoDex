import React, { Component } from "react";
import BotaoHome from '../assets/images/home.png'

import './navbarStyle.css';

class NavBar extends Component{
    render(){
        return(
            <>
            <header>
            <nav>
                <img className="logo" src={BotaoHome} width="15%"></img>
                
                <ul className="nav-list">
                <li><a href="">Geração</a></li>
                <li><a href="">Tipos</a></li>
                <li><a href="https://github.com/artthur-aguiar">Github</a></li>
                </ul>
            </nav>
            </header>
            </>
        )
    }
}

export default NavBar


