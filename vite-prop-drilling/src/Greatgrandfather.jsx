import Grandfather from "./Grandfather"

function Greatgrandfather(){
    let arr = ["plot", "ghar", "flat", "car", "license"]
    return(
        <>
        <h1>Greatgrandfather component</h1>
        <Grandfather data1={arr}/>
        </>
    )
}

export default Greatgrandfather