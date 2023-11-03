
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSection = styled.section`
  max-width: 5xl;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #b9cdda;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 8px;
  
  

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`;

export const StyledImage = styled.img`
   width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 4px;
  padding-right:10px;
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #586F6B;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

export const StyledDescription = styled.p`
  color: #202030;
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const StyledListItem = styled.li`
  font-size: 1rem;
  color: #202030;
  line-height: 1.5;

  span {
    font-weight: bold;
    color: #202030;
  }

`;

export const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #586F6B;
  margin-top:10px;
  padding: 8px 24px;
  border-radius: 4px;
  color: white;
  transition: all 0.2s;
  text-decoration:none;

  &:hover {
    background-color: #586F6B;
  }
`;