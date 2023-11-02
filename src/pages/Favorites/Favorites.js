import React, { useEffect, useState } from "react";
import { dogOptions, deleteDogOptions } from "../../options";

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
      fetchData()

    } catch (error) {
      console.log(error);
    }
    
    
    /* const dogRemoveFavoriteOptions = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    };

    axios
      .delete(
        `https://api.thedogapi.com/v1/favourites/${imageId}`,
        dogRemoveFavoriteOptions
      )
      .then(() => {
  
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      }); */
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFavorites = favorites.slice(startIndex, endIndex);

  return (
    <section className="favorite-container">
    <h1 className="favorite-image-title">Favorites</h1>
    <button className="favorites-button" onClick={fetchData}>
      Load Favorites
    </button>
    <div className="favorite-image-grid">
      {currentFavorites.map((favorite) => (
        <div className="image-button-pair" key={favorite.id}>
          <img className="grid-image" src={favorite.image.url} alt="cat" />
          <button className="grid-button" onClick={() => onClickDell(favorite.id)}>
            <span className="material-symbols-outlined navbar-icons">
              favorite
            </span>
          </button>
        </div>
      ))}
    </div>
    {/* Paginação simples */}
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={endIndex >= favorites.length}
      >
        Next
      </button>
    </div>
  </section>
  );
};

export default Favorites;
