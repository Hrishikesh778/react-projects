import { useContext, useEffect, useState } from "react"
import createStore from "../Context/createStore"
import "./Nav.css"
import axios from "axios"
import { Link, useLocation, useParams } from "react-router-dom"
import FetchApi from "../CustomHook/useFetchApi"

function Nav() {

    let { setData , data} = useContext(createStore)
    let [apiData, setApiData] = useState([])
    let [filterData, setFilterData] = useState([])
    let { pathname } = useLocation()

    let returnData = FetchApi("http://localhost:5000/products")
    console.log(returnData, "returnfetchdata")
   
    useEffect(() => {
      setApiData(returnData)
      setFilterData(returnData)
    }, [returnData])

    // useEffect(() => {
    //     axios.get("http://localhost:5000/products")
    //         .then((resp) => {
    //             console.log(resp.data, "resp")
    //             setApiData(resp.data)
    //             setFilterData(resp.data)
    //         })
    // }, [])

    useEffect(() => {
        // debugger
        let filterData1 = apiData.filter((val) => {
            if (data != "") {
                return val.name.toLowerCase().includes(data.toLowerCase())
            }
        })
        console.log(filterData1, "filterData1")
        setFilterData(filterData1)
    }, [data])


    function showSearchBox(e) {
        setData(e.target.value)
        debugger
        if (pathname.includes("/productdesc")) {

            document.getElementById('pp').style.display = "block"
            

        } else {
            // setData(e.target.value)
            document.getElementById('pp').style.display = "none"
        }
    }

    return (
        <div className="Navb">
            <ul>
                <li>
                    <Link to="/" className='link'> Home</Link>

                </li>
                <li>
                    {/* <div className="Serdiv">
                        <div className="row"> */}
                    <input type="search" onChange={(e) => { showSearchBox(e) }} />
                    {
                        filterData != "" ?
                            <div className='searchBox' id='pp'>
                                <ul className="searchdul">
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

                            : <div className='searchBox' style={{ display: "none" }} id='pp'></div>
                    }



                    {/* </div>
                        

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
                    </div> */}
                </li>
            </ul>

        </div>
    )

}

export default Nav