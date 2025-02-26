import { useEffect, useState } from "react"
import FetchApi from "../CustomHook/useFetchApi";
import axios from "axios";


function Addtocart() {
    let [cart, setCart] = useState([]);
    // let [data1, setData1] = useState("");

    // let [name,setName]= useState("");
    // let [price,setPrice]= useState("");
    // let [image,setImage]= useState("");
    // let [bestseller,setBestseller]= useState("");
    // let [discount,setDiscount]= useState("");
    // let [description,setDescription]= useState("");
    // let [quantity,setQuantity]= useState("");
    // let [addToCart,setAddtocart]= useState("");


    let returnData = FetchApi("http://localhost:5000/products")
    console.log(returnData, "returnfetchdata")

    useEffect(() => {

        let filterdata = returnData.filter((val) => {
            return val.addToCart == true
        })
        setCart(filterdata)

    }, [returnData])

    function removeFromCart(val) {
        // debugger
        let id = val.id;

        let name = val.name
        let price = val.price
        let image = val.image
        let bestseller = val.bestseller
        let discount = val.discount
        let description = val.description
        let quantity = val.quantity
        let addtowish=val.addtowish
        let addToCart = false

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
                getdata();
            })

       
        // console.log(name, "from removecart")
    }

    return (
        <>
            <h1>Cart</h1>
            {
                cart.map((val) => {
                    return (
                        <>
                            <h1>{val.name}</h1>
                            <button onClick={() => { removeFromCart(val) }}>Remove</button>

                        </>
                    )
                })
            }
        </>
    )


}

export default Addtocart