import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #b9cdda;
  color: #14080e;
  text-align: center;
  padding: 16px;
  width: 100%;
  position: relative;


  span{
    font-weight:bold;
  }
`;

export const GitHubLink = styled.a`
  color: #14080e;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.2s;
  font-weight:bold;

  &:hover {
    color: #586f6b;
  }
`;
