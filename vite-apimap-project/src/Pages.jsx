import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Pages.css"
function Pages() {

    let param = useParams()
    console.log(param.page)


    if (param.page == "users") {
        let [getData, setGetData] = useState([])

        useEffect(() => {
            let fetchData = fetch("https://jsonplaceholder.typicode.com/users")
                .then((resp) => {
                    return resp.json()
                })
                .then((response) => {
                    console.log(response, "response")
                    setGetData(response)
                })
            console.log(fetchData, "fetchData")
        }, [])


        return (
            <div className="mbox">
                {
                    getData.map((val) => {
                        return (
                            <>
                                <div className="cbox">
                                    <div className="firstdiv">
                                        <p>Name:{val.name}</p>
                                        <p>Username:{val.username}</p>
                                        <p>Number:{val.phone}</p>
                                    </div>
                                    <div className="seconddiv">
                                        <div className="indiv">
                                            <span>Address Details</span>
                                        </div>
                                        <div className="indiv">
                                            <span>Company Details</span>
                                        </div>
                                    </div>
                                    <div className="thirddiv">
                                        <span><a href={"http://www." + val.website}>Website</a></span>
                                    </div>

                                </div>


                            </>
                        )
                    })
                }

            </div>
        )


    }
    else if (param.page == "random") {
        let [getData, setGetData] = useState({})
        useEffect(() => {
            let fetchData = fetch("https://dog.ceo/api/breeds/image/random")
                .then((resp) => {
                    return resp.json()
                })
                .then((response) => {
                    console.log(response, "response")
                    setGetData(response)
                })
            console.log(getData, "getData")
        }, [])

        let fdata = [{ ...getData }]
        console.log(fdata, "fdata")

        return (
            <>
                <div className="imgdiv">
                    {
                        fdata.map((val) => {
                            return (
                                <>
                                    <img src={val.message} style={{ height: "100%", width: "100%" }} alt="" />
                                </>

                            )

                        })
                    }
                </div>

            </>
        )
    }
    else if (param.page == "products") {

        let [getData, setGetData] = useState([])
        useEffect(() => {
            let fetchData = fetch("https://fakestoreapi.com/products")
                .then((resp) => {
                    return resp.json()
                })
                .then((response) => {
                    console.log(response, "response")
                    setGetData(response)
                })

        }, [])
        console.log(getData, "getData")
        // let fdata = [{...getData}]
        //  console.log(fdata,"fdata")

        return (
            <>
                <div className="pmaindiv">

                    {
                        getData.map((val) => {
                            return (<>
                                <div className="psmaindiv">
                                    <div className="psfirstdiv">
                                        <img src={val.image} style={{ height: "98%", width: "98%" }} alt="" />
                                    </div>
                                    <div className="psseconddiv">
                                        {val.title}
                                        <br></br>
                                        Price : {val.price}
                                        <br></br>
                                        Rating : {val.rating.rate}
                                    </div>


                                </div>

                            </>
                            )
                        })
                    }




                </div>
            </>
        )
    }

    else if (param.page == "universities") {
        let [getData, setGetData] = useState([])
        useEffect(() => {
            let fetchData = fetch("http://universities.hipolabs.com/search")
                .then((resp) => {
                    return resp.json()
                })
                .then((response) => {
                    console.log(response, "response")
                    setGetData(response)
                })

        }, [])
        console.log(getData, "getData")

        return (
            <div className="pmmaindiv">
                {
                    getData.map((val) => {
                        return (

                            <>
                                <div className="pmindiv">
                                    <div className="pmfirstdiv">
                                        <p>Name : {val.name}</p>

                                        <p>Country : {val.country}</p>

                                        <p>Domain : {val.domains[0]}</p>
                                        <p>Alpha two code : {val.alpha_two_code}</p>

                                        {
                                            //  (val.state-province!=null)?val.state-province:"null"
                                        }



                                        <span><a href={val.web_pages}>Website</a></span>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }

            </div>
        )

    }
    else if (param.page == "posts") {
        let [getData, setGetData] = useState([])
        useEffect(() => {
            let fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
                .then((resp) => {
                    return resp.json()
                })
                .then((response) => {
                    console.log(response, "response")
                    setGetData(response)
                })

        }, [])
        console.log(getData, "getData")
        return (
            <div className="lmmasterdiv">
                {
                    getData.map((val) => {
                        return (
                            <>
                            <div className="lmmaindiv">
                            <div className="lmfirstdiv">
                                    <p>Title : {val.title}</p>
                                </div>
                                <div className="lmseconddiv">
                                    <p>{val.body}</p>
                                </div>
                            </div>
                               
                            </>

                        )
                    })

                }
            </div>
        )

    }

    else {
        return (
            <>
                page not found
            </>
        )
    }


}

export default Pages