import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainCont = styled.div `
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = styled.h3 ` 
  text-align: center;
  color: black;
  text-decoration: none;
`;
const CharCont = styled.p `
  text-align: center;
  color: black;
  text-decoration: none;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
          console.log(response.data.results)
        })

        .catch(error => {
          console.log("Nope sorrey", error)
        })
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <MainCont key={character.id}>
            <Links to={`/character/${character.id}`}>
              <img src={character.image} alt="character profile" />
              <Title> Name: {character.name}</Title>
              <CharCont>
                Species: {character.species}
                <br />
                Status: {character.status}
              </CharCont>
            </Links>
          </MainCont>
        );
      })}
    </section>
  );
}
