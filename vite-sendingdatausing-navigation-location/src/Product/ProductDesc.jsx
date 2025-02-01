import { useLocation } from "react-router-dom"

function ProductDesc() {
    let location = useLocation()
    console.log(location, "location")
    console.log(location.state,'state')

    return (
        <>

        </>
    )
}

export default ProductDesc