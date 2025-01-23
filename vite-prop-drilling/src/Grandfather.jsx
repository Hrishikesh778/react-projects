import Father from "./Father"
function Grandfather({data1}){
    console.log(data1,"data inside grandfather")
    return(
        <>
        <h1>Grandfather Component</h1>
        <Father data2={data1}/>
        </>
    )
}

export default Grandfather