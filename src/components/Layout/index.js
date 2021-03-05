import React from "react";
import { Container, Navigation, Main } from "./Layout.styles";
import Menu from "../NavigationMenu";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation>
        <Menu />
      </Navigation>
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
