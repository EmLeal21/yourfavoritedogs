import React, { useEffect, useState } from "react";
import axios from "axios";
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
    
   /*  axios
      .get("https://api.thedogapi.com/v1/images/search?limit=10", dogOptions)
      .then((response) => setCataData(response.data))
      .catch((error) => console.log("Error fetching the data")); */
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

    /* const catAddFavoriteOptions = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    };

    var data = {
      image_id: catId,
      sub_id: "my_user1",
    };

    axios
      .post(
        "https://api.thedogapi.com/v1/favourites",
        data,
        catAddFavoriteOptions
      )
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      }); */
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

export default Home;
