import React, {useState} from "react";
import MemeData from "./MemeData";

export const Meme = () => {
    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [memeArray, setMemeArray] = useState(MemeData)


    function buttonClick(){
        const memesArray = memeArray.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =memesArray[randomNumber].url

        setMeme(prevArray => ({
            ...prevArray,
            randomImage: url
    }))

} 

    function onChange(event){
        const {name, value} = event.target
        setMeme(prevArray => ({
            ...prevArray,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                />
               <button onClick={buttonClick} className="form--button">Generate a new meme!</button>
            </div>
            <br />
            <img src={meme.randomImage} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}