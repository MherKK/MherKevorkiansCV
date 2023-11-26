
import { useState } from "react";





export default function BinarySearch(){

    const [searchKey,setSearchKey] = useState();
    const [result, setResult] = useState('');
    let binaryArray = [2, 5, 8, 12, 13, 14, 15, 16];

    function binarySearch(ar, key, start, end, count) {
        let c = count;
        let middle = Math.floor((start + end) / 2);
        
        if (ar[middle] === key) {
            return setResult(middle);
        } else if (ar[middle] > key) {
            return binarySearch(binaryArray, key, start, middle - 1, c + 1);
        } else if (ar[middle] < key) {

            return binarySearch(binaryArray, key, middle + 1, end, c + 1)
        }

        setResult(-1)
    }

    return(
        <div  style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Search the element with binary search method</h2>
            <input type='text' placeholder="Search..."  style={{height:'30px',width:'180px'}}
            onChange={(e) => setSearchKey(e.target.value)}/>
            <button onClick={() => {
                binarySearch(binaryArray,+searchKey,0,binaryArray.length,0)
              
            }}  style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}}>Search</button>
            <p style={{textAlign:'left'}}>Original Array: [{binaryArray.map((key,index) => {
                if(index !== binaryArray.length - 1) {
                    return key + ','
                }else{
                    return key
                }
            } )}]</p>
           {result === '' ? '' : result >= 0 ? <p style={{textAlign:'left'}}>Element is present in array at index  {result}</p> : <p style={{textAlign:'left'}}>Element is not present in the array</p> }
         </div>
    )
}