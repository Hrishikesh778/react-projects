import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Effect() {

    let [data, setdata] = useState(0)
    let [counter, setCounter] = useState(0)
    let [getData, setGetData] = useState([])

    // useEffect(() => {
    //     sum()
    //     // setdata("sam")
    //     console.log(data)
    //     return (() => {
    //         sayBye()
    //     })

    // })

    useEffect(() => {
        let fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
            .then((resp) => {
                return resp.json()
            })
            .then((response) => {
                console.log(response, "response")
                setGetData(response)
            })
        console.log(fetchData, "fetchData")
    }, [])


    function sayBye() {
        console.log("bye")
        localStorage.removeItem("user")
    }

    function sum() {
        console.log("sum function called")
        localStorage.setItem("user", "Jai")

    }


    useEffect(() => {
        console.log("Hello Data")
    }, [data])
    useEffect(() => {
        console.log("Hello Counter")
    }, [counter])

    return (
        <>
            <button onClick={() => { setdata(data + 1) }}>update data state</button>
            {counter}
            <button onClick={() => { setCounter(counter + 1) }}>update Counter state</button>

            {
                getData.map((val) => {
                    return(
                        <>
                        <div>
                        <h1>{val.title} </h1>
                        </div>
                       
                        </>
                    )
                })
            }

        </>
    )
}

export default Effect