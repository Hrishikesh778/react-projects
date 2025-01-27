import { useState } from "react"

function UseState(){

    let [fname, setfname]=useState("");
    let [number, setNumber]=useState("");
    let [email, setEmail]=useState("");
    let [pwd, setPwd]=useState("");

    function submitData(e){
        e.preventDefault()
        console.log('first')
        console.log(fname, number, email,pwd)
    }

    return(
        <>
       <form>
        <input className="border-2" type="text" onChange={(e)=>{setfname(e.target.value)}}></input>
        <input className="border-2" type="number" onChange={(e)=>{setNumber(e.target.value)}}></input>
        <input className="border-2" type="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input className="border-2" type="password" onChange={(e)=>{setPwd(e.target.value)}}></input>
        <input className="border-2" type="submit" onClick={(e)=>{submitData(e)}}></input>
        </form>
        </>
    )
}

export default UseState