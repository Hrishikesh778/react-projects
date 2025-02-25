import { useEffect, useState } from "react"
import FetchApi from "../CustomHook/useFetchApi";


function Addtocart(){
    let [cart,setCart]= useState([]);
    
    let returnData = FetchApi("http://localhost:5000/products")
    console.log(returnData, "returnfetchdata")

    useEffect(()=>{
        
        let filterdata=returnData.filter((val)=>{
            return val.addToCart==true
        })
        setCart(filterdata)

    },[returnData])

    return(
        <>
        <h1>Cart</h1>
        {
            cart.map((val)=>{
                return(
                    <>
                        <h1>{val.name}</h1>
                        <button>Remove</button>

                    </>
                )
            })
        }
        </>
    )


}

export default Addtocart