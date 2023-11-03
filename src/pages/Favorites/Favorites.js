import React, { useEffect, useState } from "react";
import { dogOptions, deleteDogOptions } from "../../options";
import { MdRemoveCircle } from "react-icons/md";
import styled from "styled-components";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/favourites?sub_id=my_user1`,
        dogOptions
      );
      const data = await res.json();

      setFavorites(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickDell = async (imageId) => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/favourites/${imageId}`,
        deleteDogOptions
      );
      const data = await res.json();

      console.log(data);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFavorites = favorites.slice(startIndex, endIndex);

  return (
    <MainContainer>
      <Header>
        <Title>Your Favorite Images of Dogs</Title>
      </Header>
      <DogGrid>
        {currentFavorites.map((favorite) => (
          <DogLink key={favorite.id}>
            <DogImage src={favorite.image.url} alt="cat" />
            <RemoveButton onClick={() => onClickDell(favorite.id)}>
              <MdRemoveCircle size={24} />
            </RemoveButton>
          </DogLink>
        ))}
      </DogGrid>
      {/* Paginação simples */}
      <PageButton>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= favorites.length}
        >
          Next
        </button>
      </PageButton>
    </MainContainer>
  );
};

export default Favorites;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b9cdda;
`;

const Header = styled.div`
  text-align: center;
  padding: 8px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #14080e;
`;

const DogGrid = styled.div`
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

const DogLink = styled.div`
  background: #546a76;
  padding: 16px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #586f6b;
  }
`;

const DogImage = styled.img`
  width: 100%;
  max-height: 288px;
  object-fit: cover;
  border-radius: 4px;
`;
const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: #d7dae5;

  button {
    padding: 8px 16px;
    border-radius: 4px;
    background-color: #586f6b;
    color: #d7dae5;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #14080e;
    }

    &:disabled {
      background-color: #d7dae5;
      color: #586f6b;
      cursor: not-allowed;
    }

    & + button {
      margin-left: 10px; // Espaçamento entre os botões
    }
  }
`;
