import CreateStore from "./CreateStore"
import React, { useContext } from 'react'


function ConsumeData() {
    //single data
    // let { data } = useContext(CreateStore)
    // console.log(data, "data")

    //search data
    let { data,setData } = useContext(CreateStore)
    console.log(data, "data")


    
    return (
        <>
            <h1>ConsumeData</h1>
            {data}
        </>
    )

}

export default ConsumeData