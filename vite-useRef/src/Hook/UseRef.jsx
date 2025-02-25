import { useRef } from "react"


function UseRef(){
    let ref1=useRef();
    console.log(ref1,"ref")

    function changeColor(){
        ref1.current.style.color="red"
    }

    return(
        <>
        <div>UseRef</div>
        <input ref={ref1} type="text" onChange={()=>{changeColor()}}/>
        </>
    )
}

export default UseRef