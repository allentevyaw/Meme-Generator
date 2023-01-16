import React from "react";
import troll from '../assets/troll.png'

export const Header = () => {
    return (
       <header className="header"> 
        <img src={troll} className="header--image"/>
        <h2 className="header--title">Random Meme Generator</h2>
       </header>
    )
}