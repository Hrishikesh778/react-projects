function Navbar({data}){
    console.log(data,"getData")
    return(
        <>
            <input className="border-2" type="search" onChange={(e)=>{data(e.target.value)}}/>
        </>
    )
}

export default Navbar