import { products } from "./Data"

function Product({data1}){
    console.log(data1,"data1")
    console.log(products,"produts")

    let filterData = products.filter((val)=>{
        return val.product.includes(data1)
    })
    return(
        <div className="flex flex-wrap justify-center">
            {/* <h1>This is a Product Page {data1}</h1> */}
            {
                filterData.map((val)=>{
                    return(
                        <div className="bg-amber-500 h-[300px] w-[230px] m-2">
                            <div>
                                {/* <img src={val.image} alt="" /> */}
                            </div>
                            <h1>{val.product}</h1>
                            <h1>{val.price}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product