import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dogOptions } from "../../options";

import {
  StyledSection,
  StyledGrid,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledListItem,
  StyledLink,
} from "./SingleDog-style.js";

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
      <StyledSection>
        {dog.map((item) => (
          <StyledGrid key={item.div}>
            <article>
              <StyledImage src={item.image.url} alt={item.name} />
            </article>
            <article>
              <StyledTitle>{item.name}</StyledTitle>
              {item.description && (
                <StyledDescription> {item.description}</StyledDescription>
              )}
              <ul>
                <StyledListItem><span>Breed For:</span> {item.bred_for}</StyledListItem>
                <StyledListItem><span>Height:</span> {item.height.metric} cm</StyledListItem>
                <StyledListItem><span>Weight: </span>{item.weight.metric} kg</StyledListItem>
                <StyledListItem>
                <span>Breed Group:</span> {item.breed_group}{" "}
                </StyledListItem>
                <StyledListItem><span>Lifespan:</span> {item.life_span} </StyledListItem>
                <StyledListItem>
                <span>Temperament:</span> {item.temperament}{" "}
                </StyledListItem>
              </ul>

              <StyledLink to="/dogsbreeds">Back</StyledLink>
            </article>
          </StyledGrid>
        ))}
      </StyledSection>
    </div>
  );
};

export default SingleDog;


