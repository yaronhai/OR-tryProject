import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { LinksContainer, NavContainer, NavLink } from './NavBar.styles';
import { selectCurrentUser } from '../../redux/user/user.selector';


const NavBar = () => {
    const currentUser = useSelector(selectCurrentUser);

    return(
        <Fragment>
            <NavContainer>
                <NavLink txtColor={"red"} bgColor={"lightblue"} to = '/'  > Home </NavLink>
                <h1>Hello, {currentUser ? currentUser.displayName : "" } !</h1>
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