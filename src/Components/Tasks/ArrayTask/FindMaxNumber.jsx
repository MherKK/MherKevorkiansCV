import { useState } from "react";

export default function FindMaxNumber(){
    const [array,setArray] = useState();
    const [maxNumber,setMaxNumber] = useState();
    return(
        <div style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Write an array of numbers and find its max number</h2>
            <input type='text' placeholder="Write an array"  style={{height:'30px',width:'180px'}}
            onChange={(e) => setArray(e.target.value)}/>
            <button
            onClick={() => {
                let arrayNumbers = array.split(' ');
                let maxNum = arrayNumbers[0];
                for(let i = 0 ; i< arrayNumbers.length; i++){
                    if(+arrayNumbers[i] > maxNum){
                        maxNum = +arrayNumbers[i] 
                    } 
                }
                setMaxNumber(maxNum)
            }}
            style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}}>Find max</button>
            <p style={{textAlign:'left'}}>Original Array: [{array}]</p>
            <p style={{textAlign:'left'}}>Max number is {maxNumber}</p>
        </div>
    )
}