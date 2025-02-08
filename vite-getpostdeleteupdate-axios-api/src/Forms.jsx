import { useEffect, useState } from "react"
import "./Forms.css"
import axios from "axios"

function Forms() {
    let [fname, setfname] = useState()
    let [number, setNumber] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [data, setData] = useState("")
    let [id, setId] = useState("")
    let [apiData, setApiData] = useState([])

    function submitdata(e) {
        e.preventDefault()
        console.log("first")
        setData({ fname, number, email, pwd })
    }

    function getdata() {
        // fetch("http://localhost:5000/users")
        //     .then((resp) => {
        //         return resp.json()
        //     })
        //     .then((response) => {
        //         setApiData(response)
        //     })


        //using axios

        let qq = axios.get("http://localhost:5000/users")
            .then((data) => {
                setApiData(data.data)
                console.log(data.data)
            })
        console.log(qq, "qq")
    }


    useEffect(() => {
        getdata();
    }, [])

    function sendData() {
        // let obj = {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // }
        // fetch("http://localhost:5000/users", obj)
        //     .then((resp) => {
        //         return resp.json()
        //     })
        //     .then((response) => {
        //         console.log(response, "response")
        //         getdata();
        //     })


        //usin axios
        axios.post("http://localhost:5000/users", data)
        .then((response) => {
            console.log(response, "response")
            getdata();
        })

    }


    useEffect(() => {
        if (data.fname != "" && data.fname != undefined) {
            debugger
            sendData();
        }
    }, [data])
    console.log(data, "data")

    function deleteData(id) {

        console.log(id)

        // let obj = {
        //     method: "delete",
        // }

        // fetch(`http://localhost:5000/users/${id}`, obj)
        //     .then((resp) => {
        //         return resp.json()
        //     })
        //     .then((response) => {
        //         console.log(response, "delete data")
        //         getdata()
        //     })

        //axios delete

        axios.delete(`http://localhost:5000/users/${id}`)
        .then((response) => {
            console.log(response, "response")
            getdata();
        })

    }

    function getDetails(val) {
        console.log(val, "val")
        console.log(val.id, "val")
        setId(val.id)
        setfname(val.fname)
        setNumber(val.number)
        setEmail(val.email)
        setPwd(val.pwd)


    }

    function updateData() {
        // e.preventDefault()
        let update = { fname, number, email, pwd }
        console.log(id, 'id')
        console.log(update, 'update')

        // let obj = {
        //     method: "put",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(update)

        // }
        // fetch(`http://localhost:5000/users/${id}`, obj)
        //     .then(() => {
        //         getdata()
        //     })

        //using axios

        axios.put(`http://localhost:5000/users/${id}`,update)
        .then((response) => {
            console.log(response, "response")
            getdata();
        })


    }


    return (
        <>
            <h1>Register Form</h1>

            <form>
                <input value={id} type="hidden" onChange={(e) => { setId(e.target.value) }} placeholder='Enter ID' />
                <input value={fname} type="text" onChange={(e) => { setfname(e.target.value) }} placeholder='Enter name' />
                <input value={number} type="number" onChange={(e) => { setNumber(e.target.value) }} placeholder='Enter number' />
                <input value={email} type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email' />
                <input value={pwd} type="password" onChange={(e) => { setPwd(e.target.value) }} placeholder='Enter password' />
                <input type="submit" onClick={(e) => { submitdata(e) }} />
                {/* <input type="update" onClick={(e) => { updateData(e) }} /> */}
                <button onClick={() => { updateData() }}>Update</button>
            </form>


            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    apiData.map((val) => {
                        return (
                            <>
                                <div className='box'>
                                    <h2>{val.fname}</h2>
                                    <h2>{val.number}</h2>
                                    <h2>{val.email}</h2>
                                    <h2>{val.pwd}</h2>
                                    <button onClick={() => { deleteData(val.id) }}>DELETE</button>
                                    <button onClick={() => { getDetails(val) }}>Get details</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Forms