import { useState } from "react"
import CreateStore from "./CreateStore"


function ProvideStore(prop) {
   //single data
    // let data = {

    //     name: "sam",
    //     number: 32323
    // }

    let [data,setData]=useState("");
    return (
        <>
            <h1>Provider store</h1>
            {/* single data */}
            {/* <CreateStore.Provider value={{data}}> */}
            <CreateStore.Provider value={{data,setData}}>
                {prop.children}
            </CreateStore.Provider>
        </>
    )
}

export default ProvideStore