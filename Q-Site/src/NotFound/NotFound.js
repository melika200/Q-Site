import { Link } from "react-router-dom";
import './NotFound.css'

function NotFound(){
    return(
    <>
    <div className="NotFoundcontainer">
        <p>this page not found</p>
        <Link to='/'>Go To Home</Link>
    </div>
    </>
    )
}
export default NotFound