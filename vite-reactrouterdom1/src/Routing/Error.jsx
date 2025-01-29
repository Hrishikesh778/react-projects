import { Link } from "react-router-dom"

function Error() {
    return (
        <>
            <div>
                <h1>This is a Error Page</h1>
                <button><Link to='/'>Go to home page</Link></button>
            </div>

        </>
    )
}
export default Error