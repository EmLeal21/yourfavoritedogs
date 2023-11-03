import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from '../../Images/logo-color.png'

const NavbarContainer = styled.nav`
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
  }
`;

const Logo = styled.div`
  width: 120px;
  height: 120px; 
  background-image: url(${logoImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const NavList = styled.ul`
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
  }
`; 

const NavItem = styled.li`
  cursor: pointer;
  text-decoration:none;
`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo/>
      <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      <NavList isOpen={isOpen} >
        <Link to={"/"}>
        <NavItem>Home</NavItem>
        </Link>
        <Link to={"/favorites"}>
        <NavItem>Favorites</NavItem>
        </Link>
        <Link to={"/dogsbreeds"}>
        <NavItem>Breeds</NavItem>
        </Link>
        <NavItem>Contact</NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
