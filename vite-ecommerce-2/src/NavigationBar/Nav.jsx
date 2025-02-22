import { useContext, useEffect, useState } from "react"
import createStore from "../Context/createStore"
import "./Nav.css"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

function Nav() {

    let { setData } = useContext(createStore)
    let [apiData, setApiData] = useState([])
    let [filterData, setFilterData] = useState([])
    let { data } = useContext(createStore)




    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((resp) => {
                console.log(resp.data, "resp")
                setApiData(resp.data)

            })
    }, [])

    useEffect(() => {
        let filterData1 = apiData.filter((val) => {
            if (data != "") {
                return val.name.toLowerCase().includes(data.toLowerCase())
            }


        })
        console.log(filterData1, "filterData1")
        setFilterData(filterData1)
    }, [data])


    return (
        <div className="Navb">
            <ul>
                <li>
                    <Link to="/" className='link'> Home</Link>

                </li>
                <li>
                    <div className="Serdiv">
                        <div className="row">
                            <input type="search" onChange={(e) => { setData(e.target.value) }} />
                        </div>

                        {(filterData == "") ? <div className="result-box" style={{ display: "none" }}> </div> :
                            <>
                                <div className="result-box">
                                    <ul className="searchdul" >
                                        {


                                            filterData.map((val) => {
                                                var pp = `productdesc/${val.id}`
                                                return (
                                                    <>
                                                        <Link to={pp} className='link'>
                                                            <li>{val.name}</li>
                                                        </Link>
                                                    </>
                                                )
                                            })

                                        }

                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                </li>
            </ul>

        </div>
    )

}

export default Nav