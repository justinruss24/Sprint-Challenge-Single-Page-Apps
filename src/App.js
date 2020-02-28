import React from "react";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div `
  background: white;
  color: black;
  height: 100%;
`

const NavBar = styled.nav `
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  padding: 3%;
  font-size: 1rem;
`

export default function App() {
  return (
    <Main>
      <NavBar>
        <Link to="/">
          Home
        </Link>
        <Link to="/searchcharacter">
          Search by Name{" "}
        </Link>
        <Link to="/character">
          Characters
        </Link>
      </NavBar>

      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/character" component={CharacterList} />
        <Route path="/searchcharacter" component={SearchForm} />
        <Route
          path="/character/:id"
          render={props => <CharacterCard {...props} />}
        />
      </div>
    </Main>
  );
}
