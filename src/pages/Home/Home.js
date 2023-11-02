/* import React, { useEffect, useState } from "react";
import { dogOptions, PostDogOptions } from "../../options";

const Home = () => {
  const [dogData, setDogData] = useState(null);

  const fetchData = async () => {
    
    try {
      const res = await fetch(
        "https://api.thedogapi.com/v1/images/search?limit=10",
        dogOptions
      );
      const data = await res.json();

      setDogData(data);
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }

  };

  return (
    <section className="main-container">
      <div className="image-grid">
        {dogData?.slice(0, 6).map((dog) => (
          <div className="image-button-pair">
            <img className="grid-image" src={dog.url} alt="cat images" />
            <button
              className="grid-button"
              onClick={(event) => onClickAdd(event, dog.id)}
            >
              <span className="material-symbols-outlined  navbar-icons">
                favorite
              </span>
            </button>
          </div>
        ))}
      </div>

      <div className="main-container-description">
        <h2 className="main-container-title">Cat Image Generator</h2>
        <div className="main-container-text">
          Cat paradise is where you can click on the button below ato get random
          images of cats. Click on the "Add" button to add them to your
          favorites.
        </div>
        <button className="main-container-button" onClick={handleOnClick}>
          Randomize
        </button>
      </div>
    </section>
  );
};

export default Home; */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdFavoriteBorder} from "react-icons/md";
import { dogOptions, PostDogOptions } from "../../options";

const DogImages = () => {
  const [dogData, setDogData] = useState(null);
  

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.thedogapi.com/v1/images/search?limit=8", // Limit aumentado para 16 para preencher a grade 4x4
        dogOptions
      );
      const data = await res.json();

      setDogData(data);
    } catch (error) {
      console.error("Erro ao buscar imagens de cachorros:", error);
      // Você pode adicionar lógica para notificar o usuário sobre o erro.
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
      // Você pode adicionar lógica para notificar o usuário sobre o erro.
    }
  };

  return (
    <section>
      <ImageText>
        <h2>Imagens de Cachorros</h2>
        <div>
          Este é o paraíso dos cachorros, onde você pode clicar no botão abaixo
          para obter imagens aleatórias de cachorros. Clique em "Adicionar" para
          adicioná-los aos seus favoritos.
        </div>
        <button onClick={handleOnClick}>Aleatorizar</button>
      </ImageText>
      <ImageGrid>
        {dogData?.slice(0, 6).map((dog) => (
          <ImageItem key={dog.id}>
            <img src={dog.url} alt="dog" />
            <FavoriteButton onClick={(event) => onClickAdd(event, dog.id)}>
               <MdFavoriteBorder size={24}/>
            </FavoriteButton>
          </ImageItem>
        ))}
      </ImageGrid>
    </section>
  );
};

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
