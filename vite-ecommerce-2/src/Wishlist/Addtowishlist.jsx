import { useEffect, useState } from "react";
import FetchApi from "../CustomHook/useFetchApi";
import axios from "axios";

function Addtowishlist() {
    let [wishlist, setWishlist] = useState([]);

    let returnData = FetchApi("http://localhost:5000/products")
    console.log(returnData, "returnfetchdata")

    useEffect(() => {

        let filterdata = returnData.filter((val) => {
            return val.addtowish == true
        })
        setWishlist(filterdata)

    }, [returnData])


    function removeFromwish(val){
        let id = val.id;

        let name = val.name
        let price = val.price
        let image = val.image
        let bestseller = val.bestseller
        let discount = val.discount
        let description = val.description
        let quantity = val.quantity
        let addtowish=false
        let addToCart = val.addtowish

        // setName(val.name)
        // setPrice(val.price)
        // setImage(val.image)
        // setBestseller(val.bestseller)
        // setDiscount(val.discount)
        // setDescription(val.description)
        // setQuantity(val.quantity)
        // setAddtocart(false)

        // setData1({name,price,image,bestseller,discount,description,quantity,addToCart})
        // console.log(data1,"removecart data")

        axios.put(`http://localhost:5000/products/${id}`, { name, price, image, bestseller, discount, description, quantity,addtowish, addToCart })
            .then((response) => {
                console.log(response, "response")
                // getdata();
            })

    }


    return (

        <>
            <h1>Wishlist</h1>
            {
                wishlist.map((val) => {
                    return (
                        <>
                            <h1>{val.name}</h1>
                            <button onClick={() => { removeFromwish(val) }}>Remove</button>

                        </>
                    )
                })
            }
        </>
    )
}

export default Addtowishlist