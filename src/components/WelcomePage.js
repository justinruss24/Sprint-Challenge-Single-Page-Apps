import React from "react";
import styled from 'styled-components';

const Welcome = styled.div `
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 5% auto;
  height: 900px;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Welcome>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Welcome>
    </section>
  );
}
