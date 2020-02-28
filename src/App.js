import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import {Route, Link, Switch} from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />

      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>

      <Route exact path="/">
        <WelcomePage />
      </Route>

      <Route exact path="/characters">
        <CharacterList />
      </Route>
    </main>
  );
}
