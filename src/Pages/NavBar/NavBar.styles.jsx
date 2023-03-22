import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom: 1em;
    background-color: navy;
    color: white;   
    text-shadow: 2px 1px pink;
`;

export const LinksContainer = styled.div`
    display:flex;
    direction:ltr;
    justify-content:flex-end;
    padding: 10px; 
    a {color:${props => props.txtColor};}
    a:hover { color:red; }
`;

export const NavLink = styled(Link)`
    font-size: 2em;
    padding: 10px;   
    color: ${props => props.txtColor ?  props.txtColor : 'white'};      
    background-color: ${props => props.bgColor && props.bgColor };
    text-shadow: 2px 2px yellow;
    :hover {
        transition-duration:300ms;
        transform: scale(1.05);
    }
`;


/*
.nav-container {
    display:flex;
    justify-content:space-between;
    margin-bottom: 1em;
    background-color: navy;
    color: white;

    .links-containter {
        display:flex;
        direction:ltr;
        justify-content:flex-end;
        padding: 10px;
    
        .navlink {
            font-size: 2em;
            padding: 10px;   
            color: white;  
        }   
        
        :hover {
            color: darkred;
            transform: scale(1.03)
        }
    }
}
*/


