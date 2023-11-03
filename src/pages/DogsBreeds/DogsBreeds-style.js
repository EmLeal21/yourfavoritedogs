import styled from "styled-components";
import { Link } from "react-router-dom";


export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: #d7dae5;

  button {
    padding: 8px 16px;
    border-radius: 4px;
    background-color: #586F6B;
    color: #d7dae5;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #14080e;
    }

    &:disabled {
      background-color: #d7dae5;
      color: #586F6B;
      cursor: not-allowed;
    }

    & + button {
      margin-left: 10px; // Espaçamento entre os botões
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b9cdda;
`;

export const LoadingText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #27187e;
  text-transform: uppercase;
  padding: 0 5px;
`;

export const Header = styled.div`
  text-align: center;
  padding: 8px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #14080e;
`;

export const Form = styled.form`
  max-width: 320px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  background: #d7dae5;
  color: black;
  &::placeholder {
    color: black;
  }
`;

export const DogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;
  margin: 10px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const DogLink = styled.div`
  background: #546a76;
  padding: 16px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #586f6b;
  }
`;

export const DogImage = styled.img`
  width: 100%;
  max-height: 288px;
  object-fit: cover;
  border-radius: 4px;
`;

export const DogName = styled.h3`
  color: #d7dae5;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: none;
`;

export const BredForText = styled.p`
  color: #d7dae5;
  text-decoration: none;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* para manter a cor do texto original */
`;