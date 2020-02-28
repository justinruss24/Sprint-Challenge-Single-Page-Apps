import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FormInput = styled.form `
  text-align: center;
  padding: 3%;
`
const MainCont = styled.div `
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
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

export default function SearchForm(props) {
 
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(response => {
        const data = response.data.results;
        const results = data.filter(character => {
          return character.name.includes(searchTerm);
        });
        setResults(results);
      });
  }, [searchTerm]);

    const handleChange = event => {
      console.log(event.target.value);
      setSearchTerm(event.target.value);
    };


  return (
    <section className="search-form">
      <FormInput>
        <input
          type="text"
          placeholder="Search"
          name="textfield"
          value={searchTerm}
          onChange={handleChange}
        />
      </FormInput>
      <ul>
        {results.map(item => {
          return (
            <MainCont key={item.id}>
              <Link to={`/character/${item.id}`}>
                <img src={item.image} alt="character profile" />
                <Title>Name: {item.name}</Title>
                <CharCont>Species: {item.species}</CharCont>
                <CharCont>Status:{item.status}</CharCont>
              </Link>
            </MainCont>
          );
        })}
      </ul>
    </section>
  );
}
