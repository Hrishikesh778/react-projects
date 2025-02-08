import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Pages.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pages() {

    let param = useParams()
    console.log(param.page)

    let [getData, setGetData] = useState([])
    let [getDataR, setGetDataR] = useState([])
    let [getDataP, setGetDataP] = useState([])
    let [getDataU, setGetDataU] = useState([])
    let [getDataPO, setGetDataPO] = useState([])

    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)



    let [show, setShow] = useState(false)
    let [selectedAddress, setSelectedAddress] = useState({});
    let [selectedCompany, setSelectedCompany] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (address) => {
        setSelectedAddress(address);
        setShow(true);
    };

    let [show2, setShow2] = useState(false)
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (company) => {
        setSelectedCompany(company);
        setShow2(true);
    };


    function fetchdataApi(url) {


        useEffect(() => {
            setLoading(true)
            let fetchData = fetch(url)

                .then((resp) => {
                    return resp.json()
                })
                .then((response) => {
                    console.log(response, "response")
                    // debugger
                    if (param.page == "users") {
                        setGetData(response)
                    }
                    else if (param.page == "random") {
                        setGetDataR(response)
                    }
                    else if (param.page == "products") {
                        setGetDataP(response)
                    }
                    else if (param.page == "universities") {                 
                        setGetDataU(response)
                    }
                    else if (param.page == "posts") {
                        setGetDataPO(response)
                    }
                    setLoading(false)
                })
                .catch(()=>{
                    // setError(e)
                    setError("An error occurred while fetching data")
                    setLoading(false)
                })
            console.log(fetchData, "fetchData")
        }, [param])

    }

    if (param.page == "users") {

        fetchdataApi("https://jsonplaceholder.typicode.com/users")

    }
    else if (param.page == "random") {

        fetchdataApi("https://dog.ceo/api/breeds/image/random")

    }
    else if (param.page == "products") {

        fetchdataApi("https://fakestoreapi.com/products")

    }

    else if (param.page == "universities") {

        fetchdataApi("http://universities.hipolabs.com/search")

    }
    else if (param.page == "posts") {

        fetchdataApi("https://jsonplaceholder.typicode.com/posts")


    }

    // else {
    //     return (
    //         <>
    //             page not found
    //         </>
    //     )
    // }
    console.log(getDataU)

    let fdata = [{ ...getDataR }]
    console.log(fdata, "fdata")
    return (
        <>
            {

                (loading==true) ? <p className="loading">loading...</p>:
                (error!=null)?<p className="loading">{error}</p>:
                (param.page == "users") ?
                    <>
                        <div className="mbox">
                            {
                                getData.map((val) => {
                                    return (

                                        <>
                                            <div className="cbox">
                                                <div className="firstdiv">
                                                    <p>Name:{val?.name}</p>
                                                    <p>Username:{val?.username}</p>
                                                    <p>Number:{val?.phone}</p>
                                                </div>
                                                <div className="seconddiv">
                                                    <div className="indiv">
                                                        {/* <span>Address Details</span> */}
                                                        <Button variant="primary" onClick={() => handleShow(val?.address)}>
                                                            Address
                                                        </Button>
                                                        <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Address</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <p>Street: {selectedAddress.street}</p>
                                                                <p>Suite: {selectedAddress.suite}</p>
                                                                <p>City: {selectedAddress.city}</p>
                                                                <p>Zipcode: {selectedAddress.zipcode}</p>
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="secondary" onClick={handleClose}>
                                                                    Close
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>


                                                    </div>
                                                    <div className="indiv">
                                                        {/* <span>Company Details</span> */}
                                                        <Button variant="primary" onClick={() => handleShow2(val?.company)}>
                                                            Company
                                                        </Button>
                                                        <Modal show={show2} onHide={handleClose2}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Company</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <p>Name: {selectedCompany.name}</p>
                                                                <p>CatchPhrase: {selectedCompany.catchPhrase}</p>
                                                                <p>BS: {selectedCompany.bs}</p>

                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="secondary" onClick={handleClose2}>
                                                                    Close
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    </div>
                                                </div>
                                                <div className="thirddiv">
                                                    <span><a href={"http://www." + val?.website}>Website</a></span>
                                                </div>

                                            </div>


                                        </>
                                    )
                                })
                            }

                        </div>
                    </>
                    : (param.page == "random") ? <>



                        <div className="imgdiv">
                            {
                                fdata.map((val) => {
                                    return (
                                        <>
                                            <img src={val?.message} style={{ height: "100%", width: "100%" }} alt="" />
                                        </>

                                    )

                                })
                            }
                        </div>
                    </>
                        : (param.page == "products") ? <>
                            <div className="pmaindiv">

                                {
                                    getDataP.map((val) => {
                                        return (<>
                                            <div className="psmaindiv">
                                                <div className="psfirstdiv">
                                                    <img src={val?.image} style={{ height: "98%", width: "98%" }} alt="" />
                                                </div>
                                                <div className="psseconddiv">
                                                    {val?.title}
                                                    <br></br>
                                                    Price : {val?.price}
                                                    <br></br>
                                                    Rating : {val?.rating?.rate}
                                                </div>


                                            </div>

                                        </>
                                        )
                                    })
                                }




                            </div>
                        </>
                            : (param.page == "universities") ? <>
                                <div className="pmmaindiv">
                                    {
                                        getDataU.map((val) => {
                                            return (

                                                <>
                                                    <div className="pmindiv">
                                                        <div className="pmfirstdiv">
                                                            <p>Name : {val?.name}</p>

                                                            <p>Country : {val?.country}</p>

                                                            <p>Domain : {val?.domains[0]}</p>
                                                            <p>Alpha two code : {val?.alpha_two_code}</p>

                                                            {
                                                                //  (val.state-province!=null)?val.state-province:"null"
                                                            }



                                                            <span><a href={val?.web_pages}>Website</a></span>
                                                        </div>

                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                </div>
                            </> : (param.page == "posts") ? <>
                                <div className="lmmasterdiv">
                                    {
                                        getDataPO.map((val) => {
                                            return (
                                                <>
                                                    <div className="lmmaindiv">
                                                        <div className="lmfirstdiv">
                                                            <p>Title : {val?.title}</p>
                                                        </div>
                                                        <div className="lmseconddiv">
                                                            <p>{val?.body}</p>
                                                        </div>
                                                    </div>

                                                </>

                                            )
                                        })

                                    }
                                </div>
                            </> : ""
                // <>
                //    <h1>page not found

                // </>
            }

        </>
    )


}

export default Pages