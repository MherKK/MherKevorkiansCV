import { useState } from "react"



export default function BinaryToDecimal(){
    const [binaryNumber,setBinaryNumber] = useState();
    const [decimalNumber,setDecimalNumber] = useState();
    return (
        <div style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Convert a binary number to a decimal number </h2>
            <input onChange={e => setBinaryNumber(e.target.value)} style={{height:'30px',width:'180px'}} type='number' placeholder="Write a binary number" />
            <button
             style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}}
            onClick={() => {
                 setDecimalNumber(parseInt((binaryNumber + '').replace(/[^01]/gi, ''),2));
            }}>Convert</button>
            <p style={{textAlign:'left'}}>The Decimal number of {binaryNumber} is {decimalNumber}</p>
        </div>
    )
}