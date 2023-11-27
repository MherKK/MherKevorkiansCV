import { useRef, useState } from "react"


export default function IsPrimeNumber(){

    const num = useRef();
    const [isPrime,setIsPrime] = useState();
    function checkPrime(n) {
             
        let flag = true;
        n = parseInt(n)
        for (let i = 2; i <= n - 1; i++)
            if (n % i == 0) {
                flag = false;
                break;
            }
        if (flag == true)
            setIsPrime(true)
        else
            setIsPrime(false)
    }
    return (
        <div  style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Write a number and check if it is prime or not</h2>
            <input ref={num} style={{height:'30px',width:'180px'}} type="text" placeholder="Write a number"/>
            <button
                onClick={() => {
                    let inputNumber = num.current.value;
                    if(Number.isInteger(+inputNumber)){
                        checkPrime(inputNumber)
                    }else{
                        setIsPrime('NotANumber')
                    }
                }}
            style={{backgroundColor:'transparent', border:'1px solid blue',marginLeft:'20px', height:'30px',width:'100px', cursor:'pointer'}}>Is Prime?</button>
            {isPrime === true ? <p>The number {num.current.value} is prime</p> : isPrime === false && <p>{num?.current?.value} Is not a prime number</p>}
            {isPrime === 'NotANumber' && <p style={{color:'red'}}>{num.current.value} is not an integer</p>}
        </div>
    )
}