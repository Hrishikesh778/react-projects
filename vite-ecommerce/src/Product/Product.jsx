import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./Product.css"

function Product() {
    let [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((resp) => {
                console.log(resp.data)
                setApiData(resp.data)
            })

    }, [])


    return (
        <>
            <h1>Product</h1>
            <div className='boxContainer'>
                {
                    apiData.map((val) => {
                        var pp = `productdesc/${val.id}`
                        return (
                            <>
                                <Link to={pp}>
                                    <div className='box'>
                                        <img src={val.image[0]} alt="" />
                                        <p>{val.name}</p>
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