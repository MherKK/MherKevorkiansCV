import { useState } from "react";


export default function RemoveDuplicate(){
    const [array,setArray] = useState();
    const [nonDuplicatedArray, setNonDuplicatedArray] = useState();
    function removeDuplicate(arr) {
        let obj = {};
        let cleanarr = [];
        for (let i = 0; i < arr.length; i++) {
            let count = arr.filter(num => num === arr[i]).length
            if (!(arr[i] in obj)) {
    
                if (typeof arr[i] == 'object' && !Array.isArray(arr[i]) && arr[i] !== null) {
                    cleanarr.push(arr[i])
                    obj['obj' + i] = count;
                } else {
                    cleanarr.push(arr[i])
                    obj[arr[i]] = count;
                }
            }
        }
    
        return setNonDuplicatedArray(cleanarr);
    }
    return(
        <div  style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Write a random array and remove the duplicate ones</h2>
            <input type='text' placeholder="Write an array"  style={{height:'30px',width:'180px'}}
            onChange={(e) => setArray(e.target.value)}/>
            <button onClick={() => {
                let arr = array?.split(' ');
                removeDuplicate(arr);
            }}  style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}}>Remove Dupl</button>
            <p style={{textAlign:'left'}}>Original Array: [{array}]</p>
            <p style={{textAlign:'left'}}>Reversed Array: [{nonDuplicatedArray.map((num,index) => {
                if(index !== nonDuplicatedArray.length - 1){
                    return num + ','
                }else{
                    return num
                }
            })}]</p>
        </div>
    )
}