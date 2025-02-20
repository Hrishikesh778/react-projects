import { useReducer, useState } from "react"
import CreateStore from "./CreateStore"


function ProvideStore(prop) {
   //single data
    // let data = {

    //     name: "sam",
    //     number: 32323
    // }

    // let [data,setData]=useState("");

    //reducer

    function reducer(state,action){
        if(action.type=="data"){
            return action.payload
        }
    }



    let [state, dispatch]= useReducer(reducer,"sam")
    console.log(state,"state inside provider")

    return (
        <>
            <h1>Provider store</h1>
            {/* single data */}
            {/* <CreateStore.Provider value={{data}}> */}
            <CreateStore.Provider value={{state,dispatch}}>
                {prop.children}
            </CreateStore.Provider>
        </>
    )
}

export default ProvideStore