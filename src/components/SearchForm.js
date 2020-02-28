import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FormInput = styled.form `
  text-align: center;
  padding: 3%;
`

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
        const results = data.filter(item => {
          return item.name.toLowerCase().includes(searchTerm);
        });
        setResults(results);
      });
  }, [searchTerm]);

    const handleChange = event => {
      console.log(event.target.value);
      setSearchTerm(event.target.value);
    };


  return (
    <div className="App">

      <input name="search" value={props.search} onChange={el => handleChange(el)} />
    </div>
  );
}
