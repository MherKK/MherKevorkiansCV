import { useState } from "react"


export default function CapitalizingString(){
    const [text,setText] = useState('');
    return (
        <div className="">
            <h2>Capitalize the first letter of every word</h2>
            <input type="text" placeholder="Type here a sentence" onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => {
                let splitWord = text.split(' ');
                let capitalizeString = splitWord.map((word) => {
                    return word.slice(0,1).toUpperCase() + word.slice(1,word.length)
                })
                setText(capitalizeString.join(' '))
                
            }}>Capitalize</button>
            <p>{text}</p>
        </div>
    )
}