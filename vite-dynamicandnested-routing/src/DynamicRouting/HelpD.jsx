import { Link, useParams } from "react-router-dom"

function HelpD() {
    let params = useParams()
    console.log(params, "params")
    return (
        <div>
            <h1>HelpD {params.type}</h1>
            <ul>
                <li><Link to='/helpdynamic/call'>Call</Link></li>
                <li><Link to='/helpdynamic/message'>message</Link></li>
                <li><Link to='/helpdynamic/mail'>mail</Link></li>
            </ul>
        </div>
    )
}

export default HelpD