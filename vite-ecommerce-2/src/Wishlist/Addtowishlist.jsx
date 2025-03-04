import { useEffect, useState } from "react";
import FetchApi from "../CustomHook/useFetchApi";
import axios from "axios";
import "./addtowish.css"
import { Link } from "react-router-dom";

function Addtowishlist() {
    let [wishlist, setWishlist] = useState([]);

    let returnData = FetchApi("http://localhost:5000/products")
    console.log(returnData, "returnfetchdata")

    function getData() {
        let filterdata = returnData.filter((val) => {
            return val.addtowish == true
        })
        setWishlist(filterdata)
    }

    useEffect(() => {

        getData()

    }, [returnData])


    function removeFromwish(val) {
        let id = val.id;
        val.addtowish = false

        axios.put(`http://localhost:5000/products/${id}`, val)
            .then((response) => {
                console.log(response, "response")
                getData();
            })

    }


    return (

        <>
            <h1 className="headdingp">Wishlist</h1>
            <div className="addtowmaindiv">
                {
                    wishlist.map((val) => {
                        var pp = `../productdesc/${val.id}`
                        return (
                            <>
                                <Link to={pp} className='link'>
                                    <div className="addtocartwish">
                                        <h1>{val.name}</h1>
                                        <button className="btnremove" onClick={() => { removeFromwish(val) }}>Remove</button>
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

export default Addtowishlist