import { useEffect, useState } from "react";



export default function FilterSort(){

    let array = [1, 4, 5,6, 2, 8, 12, 15, 17, 19];
    let [filterArray, setFilterArray] = useState(array);
    let [finalArray, setFinalArray] = useState(filterArray);

    useEffect(() => {
        setFinalArray(filterArray)
    },[finalArray,filterArray])
    
    function arraySorter(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i; j < array.length; j++) {
                if (array[i] > array[j]) {
                    let swap = array[i];
                    array[i] = array[j];
                    array[j] = swap
                    //[array[i], array[j]] = [array[j], array[i]]
                }
            }
        }
        return array;
    }
    function randomizeArray(array) {

        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            // [array[i], array[j]] = [array[j], array[i]]
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
        return array
    }
  
    return (
        <div  style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Filter and sort the array with the following options</h2>
            <div style={{marginBottom:'20px'}}>Filter By:
                <select onClick={(e) => {
                    if(e.target.value === 'all'){
                        setFilterArray(array)
                    }else if(e.target.value === 'even'){
                        setFilterArray(array.filter(num => num % 2 === 0))
                    }else if(e.target.value === 'odd'){
                        setFilterArray(array.filter(num => num % 2 !== 0))
                    }else if(e.target.value === 'num>10'){
                        setFilterArray(array.filter(num => num > 10))
                    }else if(e.target.value === 'num<10'){
                        setFilterArray(array.filter(num => num < 10))
                    }
                }}> 
                    <option value='all'>All Numbers</option>
                    <option value="even">Even Numbers</option>
                    <option value="odd">Odd Numbers</option>
                    <option value="num>10">{`Numbers > 10`}</option>
                    <option value="num<10">{`Numbers < 10`}</option>
                </select>
            </div>
            
            <div>Sort By:
                <select onChange={(e) => {
                    if(e.target.value === 'asc'){
                        setFilterArray(arraySorter(array))
                    }else if(e.target.value === 'desc') {
                        setFilterArray(array.sort((a, b) => b - a))
                    }else if(e.target.value === 'random'){
                        setFilterArray(randomizeArray(array))
                    }
                }}> 
                    <option>Choose order</option>
                    <option value="asc">Ascending Order</option>
                    <option value="desc">Descending Order</option>
                    <option value='random'>Randomize Order</option>
                </select>
            </div>

            <p  style={{textAlign:'left'}}>Original Array: [{array.map((key,index) => {
                if(index !== array.length - 1) {
                    return key + ','
                }else{
                    return key
                }
            })}]</p>
            <p  style={{textAlign:'left'}}>Result:[ {finalArray.map((key,index) => {
                if(index !== finalArray.length - 1) {
                    return key + ','
                }else{
                    return key
                }
            })} ] </p>
        </div>
    )
}