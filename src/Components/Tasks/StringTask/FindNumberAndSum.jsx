import { useState } from "react"

export default function FindNumberAndSum(){
    const [text,setText] = useState('');
    const [sum,setSum] = useState();
    return (
        <div style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Pick up only the numbers from a string and find there sum</h2>
            <input type="text" placeholder="write a random text" style={{height:'30px',width:'180px'}} onChange={(e) => setText(e.target.value)}/>
            <button  onClick={() => {
                let textArray = text.split('');
                let sum = textArray.filter(string => {
                    if(Number.isInteger(+string)){
                        return string
                    }
                }).reduce((prev,next) => {
                    return +prev + +next
                },0)
                setSum(sum)
            }}  style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}}>Find Sum</button>
            <p style={{textAlign:'left'}}>Original Text:  {text}</p>
            <p style={{textAlign:'left'}}>Sum: {sum}</p>
        </div>
    )
}