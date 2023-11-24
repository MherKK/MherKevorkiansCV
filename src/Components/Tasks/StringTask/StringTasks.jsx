import CapitalizingString from "./CapitalizeString";
import FindIndexOfALetter from "./FindIndexOfALetter";
import FindNumberAndSum from "./FindNumberAndSum";
import ReverseString from "./ReverseString";


export default function StringTasks(){
    return (
    <div style={{display:'flex' , flexDirection:'column', alignItems:'center',justifyContent:'center', gap:'20px', width:'350px',marginBottom:'100px'}}>
        <CapitalizingString />
        <FindNumberAndSum />
        <ReverseString />
        <FindIndexOfALetter />
    </div>)
}