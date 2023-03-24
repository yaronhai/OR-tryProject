import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { LinksContainer, NavContainer, NavLink } from './NavBar.styles';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase';

const signOutHandler = async () => { 
    /*const res = */await signOutUser();
};

const NavBar = () => {
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser);

    return(
        <Fragment>
            <NavContainer>
                <NavLink txtColor={"red"} bgColor={"lightblue"} to = '/'  > Home </NavLink>
                <h1>Hello {currentUser ? `, ${currentUser.displayName}` : "" } !</h1>
                <LinksContainer txtColor="orange">
                    <NavLink to = '/user'>User</NavLink>
                    <NavLink to = '/rooms'>Rooms</NavLink>
                        { currentUser ? (
                            <NavLink to ='/auth' onClick={signOutHandler}> Sign Out</NavLink>
                            ):
                            <NavLink to = '/auth'>Sign In</NavLink>
                        }
                </LinksContainer>
            </NavContainer>
            <Outlet />
        </Fragment>
       
    )
}
export default NavBar;