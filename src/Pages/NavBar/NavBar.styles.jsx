import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom: 1em;
    background-color: navy;
    color: white;   

`;

export const LinksContainer = styled.div`
    display:flex;
    direction:ltr;
    justify-content:flex-end;
    padding: 10px; 
`;

export const NavLink = styled(Link)`
    font-size: 2em;
    padding: 10px;   
    color: ${props => props.green ? "green" : "red"} ;      
`

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


