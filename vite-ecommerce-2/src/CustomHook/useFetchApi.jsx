import axios from "axios"
import { useEffect, useState } from "react"

function FetchApi(url) {
 let [fetchData,setfetchData]=useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((resp) => {
                console.log(resp.data, "resp")
                setfetchData(resp.data)
            })
    }, [url])


    return fetchData
}

export default FetchApi