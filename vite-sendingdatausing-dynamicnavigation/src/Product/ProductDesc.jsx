import { useLocation, useParams } from "react-router-dom"
import { products } from "../Data"
function ProductDesc() {
   
    let params =useParams()
    console.log(params,"params")
    
    let filterdata=products.filter((val)=>{
        return val.id==params.id
    })
    console.log(filterdata,"filterData")

    return (
       <div>
        <h1>ProductDesc</h1>
        {
            filterdata.map((val)=>(
                <>
                    <h1>{val.name}</h1>
                    <h1>{val.category}</h1>
                </>
            ))
        }

    </div>
    )
}

export default ProductDesc