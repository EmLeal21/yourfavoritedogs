import React from "react";

import {FooterContainer,GitHubLink} from "./Footer-style"


const Footer = () => {
  return (
    <FooterContainer>
      <span>Created by: </span>Emanuel Leal
      <GitHubLink href="https://github.com/EmLeal21" target="_blank">
        GitHub
      </GitHubLink>
    </FooterContainer>
  );
};

export default Footer;