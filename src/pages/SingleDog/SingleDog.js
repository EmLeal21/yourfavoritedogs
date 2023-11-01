import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { dogOptions } from "../../options";

const SingleDog = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`,
          dogOptions
        );
        const data = await res.json();

        setDog(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleDogData();
  }, [name]);

  return (
    <div>
      <section>
        {dog.map((item) => (
          <div key={item.div}>
            <article>
              <img src={item.image.url} alt={item.name}/>
            </article>
            <article>
              <h1>{item.name}</h1>
              {item.description && <p> {item.description}</p>}
              <ul>
                <li>
                Breed For: {item.bred_for}
                </li>
                <li>Height: {item.height.metric} cm</li>
                <li>Weight: {item.weight.metric} kg</li>
                <li>Breed Group: {item.breed_group} </li>
                <li>Lifespan: {item.life_span} </li>
                <li>Temperament: {item.temperament} </li>
              </ul>

              <Link to="/dogsbreeds" >Back</Link>
            </article>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SingleDog;
