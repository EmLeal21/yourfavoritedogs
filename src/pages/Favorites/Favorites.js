import React, { useEffect, useState } from "react";
import { dogOptions, deleteDogOptions } from "../../options";
import { MdRemoveCircle } from "react-icons/md";
import {MainContainer,
  Header,
  Title,
  DogGrid,
  DogLink,
  DogImage,
  RemoveButton,
  PageButton
} from "./Favorites-style"

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


