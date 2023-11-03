import React, { useState } from "react";


import {NavbarContainer,
  Logo,
  NavList,
  NavItem,
  MenuButton,
  CustomLink,
} from "./NavBar-style"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <CustomLink to={"/"}>
      <Logo/>
      </CustomLink>
      <MenuButton onClick={toggleMenu}/>
      <NavList isOpen={isOpen} >
        <CustomLink to={"/"}>
      <NavItem>Home</NavItem>
      </CustomLink>
        <CustomLink to={"/cutedogs"}>
        <NavItem>Cute Dogs</NavItem>
        </CustomLink>
        <CustomLink to={"/favorites"}>
        <NavItem>Favorites</NavItem>
        </CustomLink>
        <CustomLink to={"/dogsbreeds"}>
        <NavItem>Breeds</NavItem>
        </CustomLink>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
