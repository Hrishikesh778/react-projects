function Navbar({data}){

    console.log(data,"getdata")
    return(
        <>
            <input type="search" onChange={(e)=>{data(e.target.value)}}></input>
        </>
    )
}

export default Navbar