import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b9cdda;
`;

export const Header = styled.div`
  text-align: center;
  padding: 8px;
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
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #14080e;
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

export const StyledParagraph = styled.p`
  font-size: 1.3rem;
  color: #14080e;
  margin: 20px;
`;