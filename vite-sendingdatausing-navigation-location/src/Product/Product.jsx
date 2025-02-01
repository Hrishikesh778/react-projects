import { useNavigate } from "react-router-dom"

import { products } from "../Data"
import "./product.css"
function Product() {
    let navigate = useNavigate()
    console.log(navigate, "navigate")
    function sendData(ProductData){
        navigate('/pdesc',{state:ProductData})
    }

    return (
        <>
            <div className="container">
                {
                    products.map((val) => {
                        return (
                            <>
                                <div className="box">

                                    <h2>{val.name}</h2>
                                    <p>{val.category}</p>
                                    <p>{val.description}</p>
                                    <h2>{val.price}</h2>
                                    <button onClick={()=>{sendData(val)}}>Description </button>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Product