import React, { useState, useEffect } from "react";
import { dogOptions } from "../../options";
import { Link } from "react-router-dom";

const DogsBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");

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
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    searchForDog();
  };

  return (
    <div>
      {!dogs ? (
        <h1>Loading...</h1>
      ) : (
        <section className="">
          <div>
            <h1> The Dog App</h1>
            <form onSubmit={handlerSubmit}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a dog / breed"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
          </div>

          <div>
            {dogs.map((dog) => (
              <Link to={`/${dog.name}`} key={dog.id}>
                <article>
                  <img
                    className="container img"
                    src={dog.image.url}
                    alt={dog.name}
                  />
                  <h3>{dog.name}</h3>
                  <p>Breed for: {dog.bred_for}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default DogsBreeds;
