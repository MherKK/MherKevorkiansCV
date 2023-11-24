import { useState } from "react"

export default function ReverseString(){
    const [text,setText] = useState('');
    return (
    <div style={{border:'1px solid black' , padding:'20px'}}>
        <h2>Reverse the word</h2>
        <input style={{height:'30px',width:'180px'}} type="text" placeholder="Type here a sentence" onChange={(e) => setText(e.target.value)}/>
        <button 
                style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}} onClick={() => {
                let splitWord = text.split('');
                let reversedString = [];
                for(let i = 0 ; i < splitWord.length ; i++){
                    reversedString[i] = splitWord[splitWord.length - i - 1]
                }
                setText(reversedString.join(''));
                
            }}>Reverse</button>
            <p style={{textAlign:'left'}}>{text}</p>
    </div>)
}