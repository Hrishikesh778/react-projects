import { useNavigate, Link } from "react-router-dom"

import { products } from "../Data"
import "./product.css"
function Product() {

    return (
        <>
            <div className="container">
                {
                    products.map((val) => {
                        var pp = `pdesc/${val.id}`
                        return (
                            <>
                                <Link to={pp}>
                                    <div className="box">
                                        <h2>{val.name}</h2>
                                        <p>{val.category}</p>
                                        <p>{val.description}</p>
                                        <h2>{val.price}</h2>
                                    </div>
                                </Link>


                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Product