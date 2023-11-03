import React, { useState, useEffect } from "react";
import { dogOptions } from "../../options";

import {
  PageButton,
  MainContainer,
  LoadingText,
  Header,
  Title,
  Form,
  SearchInput,
  DogGrid,
  DogLink,
  DogImage,
  DogName,
  BredForText,
  CustomLink,
} from "./DogsBreeds-style";

const DogsBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchDogsData = async () => {
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

    fetchDogsData();
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
