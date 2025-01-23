import Child from "./child"
function Father({data2}){
    console.log(data2,"data inside father")
    return(
        <>
        <h1>Father Component</h1>
        <Child data3={data2}/>
        </>
    )
}

export default Father