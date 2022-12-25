import React from "react";
import troll from '../assets/troll.png'

export const Header = () => {
    return (
       <header className="header"> 
        <img src={troll} className="header--image"/>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">Reacet Course - Project 3</h4>
       </header>
    )
}