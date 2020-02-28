import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [search, setSearch]= useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results.filter(character =>
            character.name
            .toLowerCase()
            .includes(search.toLowerCase())
            ));
            
            console.log(response.data.results)
        })

        .catch(error => {
          console.log("Nope sorrey", error)
        })
  }, [search]);

  return (
    <section className="character-list">
      <SearchForm search={search} setSearch={setSearch} />
      <h1>Character List</h1>
      <br />
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}
