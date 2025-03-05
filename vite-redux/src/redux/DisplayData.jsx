import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dec, inc } from "../reduxStructure/Action/Action"


function DisplayData(){
let dispatch= useDispatch()
let [data,setdata]=useState()

let add=useSelector((state)=>{
    console.log(state,"state")
    return state.taskcounter
})
console.log(add,"add")

useEffect(()=>{
    setdata(add)
  },[add])

  console.log(data,"data")

return(
    <>
    <div>DispatchData</div>
    <button onClick={()=>{dispatch(inc())}}>Inc</button>
    {data}
    <button onClick={()=>{data>1 && dispatch(dec())}}>Dec</button>

    </>
)

}


export default DisplayData