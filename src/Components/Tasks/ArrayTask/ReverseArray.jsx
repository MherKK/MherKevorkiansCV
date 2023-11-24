import { useState } from "react";


export default function ReverseArray(){
    const [array,setArray] = useState();
    const [reverseArray, setReverseArray] = useState();
    return(
        <div  style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Reverse the array</h2>
            <input type='text' placeholder="Write an array"  style={{height:'30px',width:'180px'}}
            onChange={(e) => setArray(e.target.value)}/>
            <button onClick={() => {
                let arr = array.split(' ');
                let reversedArray = [];
                for(let i = 0 ; i < arr.length ; i++){
                    reversedArray[i] = arr[arr.length - i - 1]
                }
                setReverseArray(reversedArray.join(' '));
            }}  style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}}>Reverse</button>
            <p style={{textAlign:'left'}}>Original Array: [{array}]</p>
            <p style={{textAlign:'left'}}>Reversed Array: [{reverseArray}]</p>
         </div>
    )
}