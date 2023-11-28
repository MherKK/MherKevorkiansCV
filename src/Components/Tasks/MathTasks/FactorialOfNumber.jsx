import { useState } from "react"



export default function FactiorOfANumber(){
    const [number,setnumber] = useState();
    const [factorial, setFactorial]= useState();
    return(
        <div style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Write a number and see its factorial</h2>
            <input onChange={(e) => setnumber(+e.target.value) } type='text' placeholder="Write a number" />
            <button 
            style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}}
            onClick={() => {
                let p = 1;
                for(let i = 1 ; i<=number ; i++){
                    p = p * i;
                    
                }
                setFactorial(p)
            }}
            >Get Factorial</button>
            <p style={{textAlign:'left'}}>The factorial of the number {number}  is {factorial}</p>
            {!Number.isInteger(number) && <p style={{textAlign:'left',color:'red'}}>Make sure that you type an integer number</p>}
        </div>
    )
}