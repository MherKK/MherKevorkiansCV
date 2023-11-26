import BinarySearch from "./BnarySearch";
import FilterSort from "./FilterSort";
import RemoveDuplicate from "./RemoveDuplicate";
import ReverseArray from "./ReverseArray";


export default function ArrayTasks(){
    return (<div   style={{display:'flex' , flexDirection:'column', alignItems:'center',justifyContent:'center', gap:'20px', width:'350px',marginBottom:'100px'}}>
        <BinarySearch />
        <FilterSort />
        <RemoveDuplicate />
        <ReverseArray />
    </div>)
}