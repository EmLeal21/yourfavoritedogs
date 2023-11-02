import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #B9CDDA;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) =>
      props.isOpen
        ? "flex"
        : "none"}; /* Controla a visibilidade das opções de navegação */
    flex-direction: column;
    text-align: center;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
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
      <Logo>Logo</Logo>
      <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      <NavList isOpen={isOpen}>
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
