import React from "react";
import MemeData from "./MemeData";

export const Meme = () => {

    function buttonClick(){
        const memesArray = MemeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =memesArray[randomNumber].url
    } 

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
               <button onClick={buttonClick} className="form--button">Generate a new meme!</button>
            </div>
        </main>
    )
}