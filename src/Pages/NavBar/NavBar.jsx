
import { Link, Outlet } from "react-router-dom";
import './NavBar.scss';


const NavBar = () => {
    return(
        <fragment>
            <div className="nav-container">
                <h1>This is NavBar</h1>
                <div className="links-containter">
                    <Link className="navlink" to = '/'> Home </Link>
                    <Link className="navlink" to = 'user'>User</Link>
                    <Link className="navlink" to = 'rooms'>Rooms</Link>
                </div>
            </div>
            <Outlet />
        </fragment>
       
    )
}
export default NavBar;