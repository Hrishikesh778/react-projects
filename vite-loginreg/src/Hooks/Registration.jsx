import { useState } from "react"
import "./Registration.css"
function Registration() {

    let [fname, setfname] = useState("");
    let [lname, setlname] = useState("")
    let [email, setEmail] = useState("");

    let [number, setNumber] = useState("");

    let [pwd, setPwd] = useState("");
    let [cpwd, setcPwd] = useState("");

    let regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    function submitData(e) {
        e.preventDefault()
        console.log('first')
        // console.log(fname,lname, number, email, pwd ,cpwd)

        // if (fname == "" || lname == "" || email == "" || number == "" || pwd == "" || cpwd == "") {
        //     alert("please fill all fields")
        // }
        // else if(email.includes('@')==false){
        //     alert("please enter proper email")
        // }
        // else if(number.length !== 10){
        //     alert("enter proper number")
        // }
        // else if(regex.test(pwd) != true){
        //     alert("enter proper password")
        // }
        // else if(regex.test(pwd) != true){
        //     alert("enter proper password")
        // }
        // else if (cpwd != pwd) {
        //     alert("your password do not match")

        // }
    }

    return (
        <>
            {/* <form>
        <input className="border-2" type="text" onChange={(e)=>{setfname(e.target.value)}}></input>
        <input className="border-2" type="number" onChange={(e)=>{setNumber(e.target.value)}}></input>
        <input className="border-2" type="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input className="border-2" type="password" onChange={(e)=>{setPwd(e.target.value)}}></input>
        <input className="border-2" type="submit" onClick={(e)=>{submitData(e)}}></input>
        </form> */}

            <div className="main">
                <div id="logbox">

                    <form>
                        <br />
                        <h3>Registration</h3>

                        <div className="inmain">
                            <div className="div">
                                <b><label >First Name</label></b><br />
                                <input type="text" placeholder="Enter your name" id="fname" onChange={(e) => { setfname(e.target.value) }} />
                                {/* {fname==""?<b>Fill the details</b>:""} */}

                            </div>
                            <div className="sep">

                            </div>

                            <div className="div">
                                <b><label >Last Name</label></b><br />
                                <input type="text" placeholder="Enter your username" id="lname" onChange={(e) => { setlname(e.target.value) }} />
                            </div>
                        </div>
                        <div className="inmain">
                            <div className="div">
                                <b><label >Email</label></b><br />
                                <input type="email" placeholder="Enter your email" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                                {
                                    (email.includes('@') == false) && (email != "") ? <p className='miniText'>Plesae include @ in your email</p> : ""
                                }
                            </div>
                            <div className="sep">

                            </div>
                            <div className="div">
                                <b><label >Phone Number</label></b><br />
                                <input type="number" placeholder="Enter your number" id="number" onChange={(e) => { setNumber(e.target.value) }} />
                                {
                                    (number.length != 10) && (number != "") ? <p className='miniText'>Valid Mobile number consist 10 digit</p> : ""
                                }
                            </div>
                        </div>

                        <div className="inmain">
                            <div className="div">
                                <b><label >Password</label></b><br />
                                <input type="password" placeholder="Enter your password" id="pass" onChange={(e) => { setPwd(e.target.value) }} />
                                {
                                    (regex.test(pwd) != true) && (pwd != "") ? <p className='miniText'>Password must contain one special char and uppercase letter</p> : ""
                                }
                            </div>
                            <div className="sep">

                            </div>
                            <div className="div">
                                <b><label >Confirm Password</label></b><br />
                                <input type="password" placeholder="Confirm your password" id="cpass" onChange={(e) => { setcPwd(e.target.value) }} />
                                {

                                    (pwd != cpwd) && (cpwd != "") ? <p className='miniText'>Password and Confirm Password are not same+</p> : ""

                                }
                            </div>
                        </div>


                        <div className="inmain">
                            
                            {
                                (fname == "") || (lname == "") || (email == "") || (number == "") ||  (pwd == "") || (cpwd == "") ? <input type="submit" id="submit2" disabled={true}/> : <input type="submit" id="submit" onClick={(e) => { submitData(e) }} />
                            }

                        </div>

                        <br />


                    </form>

                </div>
            </div>
        </>
    )
}

export default Registration