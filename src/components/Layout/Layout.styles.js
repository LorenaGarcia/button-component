import styled from "styled-components";

const Container = styled.div`
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

const Navigation = styled.div`
  grid-area: navigation;
`;

const Main = styled.div`
  grid-area: main;
  padding: 3rem;
`;

export { Container, Navigation, Main };
