import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { dogOptions } from "../../options";

import styled from "styled-components";

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

const StyledSection = styled.section`
  max-width: 5xl;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #b9cdda;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 8px;
  
  

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`;

const StyledImage = styled.img`
   width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 4px;
  padding-right:10px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #586F6B;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const StyledDescription = styled.p`
  color: #202030;
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StyledListItem = styled.li`
  font-size: 1rem;
  color: #202030;
  line-height: 1.5;

  span {
    font-weight: bold;
    color: #202030;
  }

`;

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #586F6B;
  margin-top:10px;
  padding: 8px 24px;
  border-radius: 4px;
  color: white;
  transition: all 0.2s;
  text-decoration:none;

  &:hover {
    background-color: #586F6B;
  }
`;
