import React, { useState, useEffect } from "react";
import { dogOptions } from "../../options";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DogsBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCatsData = async () => {
      try {
        const res = await fetch(
          "https://api.thedogapi.com/v1/breeds",
          dogOptions
        );
        const data = await res.json();

        setDogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCatsData();
  }, []);

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`,
        dogOptions
      );
      const data = await res.json();

      setDogs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    searchForDog();
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFavorites = dogs.slice(startIndex, endIndex);

  return (
    <MainContainer>
      {!currentFavorites ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <section>
          <Header>
            <Title>Search for Dogs</Title>
            <Form onSubmit={handlerSubmit}>
              <SearchInput
                type="text"
                name="search"
                id="search"
                placeholder="Search for a dog / breed"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form>
          </Header>

          <DogGrid>
            {currentFavorites.map((dog) => (
              <CustomLink to={`/${dog.name}`} key={dog.id}>
                <DogLink>
                  <DogImage
                    className="container img"
                    src={dog.image.url}
                    alt={dog.name}
                  />
                  <DogName>{dog.name}</DogName>
                  <BredForText>Breed for: {dog.bred_for}</BredForText>
                </DogLink>
              </CustomLink>
            ))}
          </DogGrid>
          <PageButton>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
         
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= dogs.length}
            >
              Next
            </button>
          </PageButton>
        </section>
      )}
    </MainContainer>
  );
};

export default DogsBreeds;

const PageButton = styled.div`
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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b9cdda;
`;

const LoadingText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #27187e;
  text-transform: uppercase;
  padding: 0 5px;
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

const Form = styled.form`
  max-width: 320px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
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

const DogName = styled.h3`
  color: #d7dae5;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: none;
`;

const BredForText = styled.p`
  color: #d7dae5;
  text-decoration: none;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* para manter a cor do texto original */
`;
