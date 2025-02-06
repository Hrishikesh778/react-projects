import { useEffect, useState } from "react"
import "./Forms.css"
function Forms() {
    let [fname, setfname] = useState()
    let [number, setNumber] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [data, setData] = useState("")
    let [apiData, setApiData] = useState([])

    function submitdata(e) {
        e.preventDefault()
        console.log("first")
        setData({ fname, number, email, pwd })
    }

    function getdata() {
        fetch("http://localhost:5000/users")
            .then((resp) => {
                return resp.json()
            })
            .then((response) => {
                setApiData(response)
            })
    }


    useEffect(() => {
        getdata();
    }, [])

    function sendData() {
        let obj = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch("http://localhost:5000/users", obj)
            .then((resp) => {
                return resp.json()
            })
            .then((response) => {
                console.log(response, "response")
            })
        getdata();
    }


    useEffect(() => {
        if (data.fname != "") {
            sendData();
        }
    }, [data])
    console.log(data, "data")

    function deleteData(id) {

        console.log(id)

        let obj = {
            method: "delete",
        }

        fetch(`http://localhost:5000/users/${id}`, obj)
            .then((resp) => {
                return resp.json()
            })
            .then((response) => {
                console.log(response, "delete data")
            })
        getdata()
    }



    return (
        <>
            <h1>Register Form</h1>

            <form>
                <input type="text" onChange={(e) => { setfname(e.target.value) }} placeholder='Enter name'/>
                <input type="number" onChange={(e) => { setNumber(e.target.value) }} placeholder='Enter number'/>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email'/>
                <input type="password" onChange={(e) => { setPwd(e.target.value) }} placeholder='Enter password'/>
                <input type="submit" onClick={(e) => { submitdata(e) }} />
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