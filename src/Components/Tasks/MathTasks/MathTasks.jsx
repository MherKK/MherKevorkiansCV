import BinaryToDecimal from "./BinaryToDecimal";
import FactiorOfANumber from "./FactorialOfNumber";
import IsPrimeNumber from "./IsPrimeNumber";


export default function MathTasks(){
    return (
    <div style={{display:'flex' , flexDirection:'column', alignItems:'center',justifyContent:'center', gap:'20px', width:'350px',marginBottom:'100px'}}>
        <IsPrimeNumber />
        <FactiorOfANumber />
        <BinaryToDecimal />
    </div>)
}