import { useState } from "react"

export default function FindIndexOfALetter(){
    const [text,setText] = useState({
        word:'',
        letter:'',
    }); 
    const [index,setindex] = useState();  
    return (
    <div style={{border:'1px solid black' , padding:'20px'}}>
        <h2>Find the index of a letter in the word</h2>
       
        <input style={{height:'30px',width:'180px',marginBottom:'10px'}} type="text" placeholder="Type here a sentence" 
               onChange={(e) => setText({...text, word:e.target.value})}/>
             
               <input maxLength={1}  style={{height:'30px',width:'180px'}} type='text' placeholder="Write a letter"
               onChange={(e) => {
                    
                    if(e.target.value.length === 1){
                        setText({...text,letter:e.target.value})
                    }
                 
               }}/>
        <button 
                style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}} 
                onClick={() => {
                let lowerWord = text.word.toLowerCase();
                let letter = text.letter.toLowerCase();
                setindex(lowerWord.indexOf(letter));
                
            }}>Find Index</button>
            <p style={{textAlign:'left'}}>Word :{text.word}</p>
            <p style={{textAlign:'left'}}>Letter :{text.letter}</p>
            {index === -1 ? <p style={{textAlign:'left'}}>Letter is not found in the word</p> : <p style={{textAlign:'left'}}>Letter {text.letter} is at index {index}</p>}
    </div>)
}