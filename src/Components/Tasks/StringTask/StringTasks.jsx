import CapitalizingString from "./CapitalizeString";
import FindNumberAndSum from "./FindNumberAndSum";


export default function StringTasks(){
    return (
    <div style={{display:'flex' , flexDirection:'column', alignItems:'center',justifyContent:'center', gap:'20px', width:'350px'}}>
        <CapitalizingString />
        <FindNumberAndSum />
    </div>)
}