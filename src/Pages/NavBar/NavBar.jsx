import { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import { LinksContainer, NavContainer, NavLink } from './NavBar.styles';


const NavBar = () => {
    return(
        <Fragment>
            <NavContainer>
                <NavLink txtColor="red" bgColor="lightblue" to = '/'  > Home </NavLink>
                <h1>This is NavBar</h1>
                <LinksContainer txtColor="orange">
                    <NavLink to = '/user'>User</NavLink>
                    <NavLink to = '/rooms'>Rooms</NavLink>
                    <NavLink to = '/sign-in'>Sign In</NavLink>
                </LinksContainer>
            </NavContainer>
            <Outlet />
        </Fragment>
       
    )
}
export default NavBar;