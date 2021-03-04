import React from "react";
import styled from "styled-components";
import Menu from "./components/NavigationMenu";
import MainContent from "./components/MainContent";

const Home = () => {
  return (
    <Container>
      <Navigation>
        <Menu />
      </Navigation>
      <Main>
        <MainContent />
      </Main>
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr;
  grid-template-columns: 20% 1fr;
  grid-template-areas: "navigation main";

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas: "main";
  }
`;

export const Navigation = styled.div`
  grid-area: navigation;
`;

export const Main = styled.div`
  grid-area: main;
  padding: 3rem;
`;
