import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdFavoriteBorder} from "react-icons/md";
import { dogOptions, PostDogOptions } from "../../options";

const DogImages = () => {
  const [dogData, setDogData] = useState(null);
  

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.thedogapi.com/v1/images/search?limit=8", 
        dogOptions
      );
      const data = await res.json();

      setDogData(data);
    } catch (error) {
      console.error("Erro ao buscar imagens de cachorros:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnClick = (e) => {
    fetchData();
  };

  const onClickAdd = async (event, catId) => {
    event.preventDefault();

    const postFavoritesOptions = {
      ...PostDogOptions,
      body: JSON.stringify({
        image_id: catId,
        sub_id: "my_user1",
      }),
    };

    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/favourites`,
        postFavoritesOptions
      );
      const data = await res.json();

      console.log(data);

    } catch (error) {
      console.error("Erro ao adicionar aos favoritos:", error);
    }
  };

  return (
    <MainContainer>
      <Header>
        <Title>Random Cute Dogs</Title>
        <button onClick={handleOnClick}>Randomize</button>
      </Header>
      <DogGrid>
        {dogData?.slice(0, 6).map((dog) => (
          <DogLink key={dog.id}>
            <DogImage src={dog.url} alt="dog" />
            <FavoriteButton onClick={(event) => onClickAdd(event, dog.id)}>
               <MdFavoriteBorder size={24}/>
            </FavoriteButton>
          </DogLink>
        ))}
      </DogGrid>
    </MainContainer>
  );
};

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
  button{
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

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Grade de 4 colunas
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ImageItem = styled.div`
  text-align: center;

  img {
    width: 220px;
    height: 220px; // Altura fixa para todas as imagens
  }
`;

const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  span {
    font-size: 24px;
  }
`;

const ImageText = styled.div`
  text-align: center;
  margin: 20px; // Espaçamento entre a grade e o texto
`;

export default DogImages;
