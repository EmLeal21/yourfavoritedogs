import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImage from '../../Images/logo-color.png'
import MenuImage from "../../Images/yourfavdogs-favicon-color.png"

export const NavbarContainer = styled.nav`
  background-color: #B9CDDA;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  text-decoration:none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
position: relative;
  justify-content: space-between;
  }
`;

export const Logo = styled.div`
  width: 120px;
  height: 120px; 
  background-image: url(${logoImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  text-decoration:none;

  @media (max-width: 768px) {
    display: ${(props) =>
      props.isOpen
        ? "flex"
        : "none"}; 
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`; 

export const NavItem = styled.li`
  cursor: pointer;
  color: #546a76; 
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 0.2s;
  border-radius: 4px;

&:hover {
    background-color: #d7dae5;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 50px;
    height: 50px;
    background-image: url(${MenuImage});
   background-color: #B9CDDA;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-style: none;
    position: absolute;
    top: 50%; 
    right: 20px; 
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
 


`;