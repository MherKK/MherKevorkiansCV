import { useState } from "react"


export default function CapitalizingString(){
    const [text,setText] = useState('');
    return (
        <div style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Capitalize the first letter of every word</h2>
            <input style={{height:'30px',width:'180px'}} type="text" placeholder="Type here a sentence" onChange={(e) => setText(e.target.value)}/>
            <button 
                style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}} onClick={() => {
                let splitWord = text.split(' ');
                let capitalizeString = splitWord.map((word) => {
                    return word.slice(0,1).toUpperCase() + word.slice(1,word.length)
                })
                setText(capitalizeString.join(' '))
                
            }}>Capitalize</button>
            <p style={{textAlign:'left'}}>{text}</p>
        </div>
    )
}