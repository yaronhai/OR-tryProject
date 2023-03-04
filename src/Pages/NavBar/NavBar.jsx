import { Fragment } from 'react';
import { Link, Outlet } from "react-router-dom";
import './NavBar.scss';


const NavBar = () => {
    return(
        <Fragment>
            <div className="nav-container">
                <h1>This is NavBar</h1>
                <div className="links-containter">
                    <Link className="navlink" to = '/'> Home </Link>
                    <Link className="navlink" to = '/user'>User</Link>
                    <Link className="navlink" to = '/rooms'>Rooms</Link>
                    <Link className="navlink" to = '/sign-in'>Sign In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
       
    )
}
export default NavBar;