import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Pages.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pages() {

    let param = useParams()
    console.log(param.page)

    let [getData, setGetData] = useState([])

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

    if (param.page == "users") {


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
                                            {/* <span>Address Details</span> */}
                                            <Button variant="primary" onClick={() => handleShow(val.address)}>
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
                                            <Button variant="primary" onClick={() => handleShow2(val.company)}>
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
        // let [getData, setGetData] = useState({})
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

        // let [getData, setGetData] = useState([])
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
        // let [getData, setGetData] = useState([])
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
        // let [getData, setGetData] = useState([])
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