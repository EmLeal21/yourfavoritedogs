import React from "react";
import {
  MainContainer,
  Header,
  Title,
  DogLink,
  DogGrid,
  DogName,
  DogImage,
  StyledParagraph,
} from "./Home-style";

const Home = () => {
  const data = [
    {
      id: "1",
      name: "Snoppy",
      image: "https://live.staticflickr.com/65535/53307898930_35bcaba0f0_k.jpg",
    },
    {
      id: "2",
      name: "Pluto",
      image: "https://live.staticflickr.com/65535/53306559162_84700205a9_k.jpg",
    },
    {
      id: "3",
      name: "Thor",
      image: "https://live.staticflickr.com/65535/53307784514_61a3183054_k.jpg",
    },
  ];
  return (
    <MainContainer>
      <Header>
        <Title>My Favorite Dogs</Title>
        <StyledParagraph>
          Welcome to My Favorite Dogs. Here you can find a variety of cute
          pictures of dogs, you can favorite the ones you like the most and you
          can also remove them.
          You can also search for a particular breed and
          get some more information about it.
        </StyledParagraph>
        
      </Header>
      <DogGrid>
        {data.map((item) => (
          <DogLink key={item.id}>
            <DogImage src={item.image} />
            <DogName>{item.name}</DogName>
          </DogLink>
        ))}
      </DogGrid>
      <StyledParagraph>These are my 3 dogs, they are unique and it's a privilege to have them by my side.</StyledParagraph>
    </MainContainer>
  );
};

export default Home;
