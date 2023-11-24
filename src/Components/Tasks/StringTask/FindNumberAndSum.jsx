
export default function FindNumberAndSum(){
    return (
        <div style={{border:'1px solid black' , padding:'20px'}}>
            <h2>Pick up only the numbers from a string and find there sum</h2>
            <input type="text" placeholder="write a random text" style={{height:'30px',width:'180px'}} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}