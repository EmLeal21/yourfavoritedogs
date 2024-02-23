import React, { useEffect, useState} from "react";
import { MdFavoriteBorder} from "react-icons/md";
import { dogOptions, PostDogOptions } from "../../options";
import {
  MainContainer,
  Header,
  Title,
  DogGrid,
  DogLink,
  DogImage,
  FavoriteButton,
} from "./DogImages-styles";

const DogImages = () => {
  const [dogData, setDogData] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);
  

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.thedogapi.com/v1/images/search?limit=6", 
        dogOptions
      );
      const data = await res.json();

      setDogData(data);
      setApiCalled(true);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
    }
  };


  useEffect(() => {
    if(!apiCalled){
    fetchData();
    }
  }, [apiCalled]);

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
        <Title>Random Images of Dogs</Title>
        <button onClick={handleOnClick}>More Images</button>
      </Header>
      <DogGrid>
        {dogData && dogData.map((dog) => (
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

export default DogImages;
