
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './NavBar.css';


const NavBar = () => {
    return(
        <Fragment>
            
            <div className="links-containter">
                <h1>This is NavBar</h1>
                <Link className="navlink" to = '/'> Home </Link>
                <Link className="navlink" to = 'user'>User</Link>
                <Link className="navlink" to = 'rooms'>Rooms</Link>
            </div>
            <Outlet />
        </Fragment>
       
    )
}
export default NavBar;