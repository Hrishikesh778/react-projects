import { Link, Outlet } from "react-router-dom"

function Help() {
    return (
        <>
            <div>
                <h1>Help</h1>
                <ul>
                    <li><Link to='/help/call'>Call</Link></li>
                    <li><Link to='/help/message'>Message</Link></li>
                    <li><Link to='/help/mail'>Mail</Link></li>
                </ul>
                <Outlet></Outlet>
            </div>

        </>
    )
}

export default Help