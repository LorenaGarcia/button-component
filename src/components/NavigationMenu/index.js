import React from "react";
import { Container, ContainerFlex } from "./NavigationMenu.styles";

const Menu = () => {
  return (
    <Container>
      <ContainerFlex>
        <p>Colors</p>
        <p>Typography</p>
        <p>Spaces</p>
        <p>Buttons</p>
        <p className="selected">Inputs</p>
        <p>Grid</p>
      </ContainerFlex>
    </Container>
  );
};

export default Menu;
