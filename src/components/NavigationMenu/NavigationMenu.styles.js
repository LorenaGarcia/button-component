import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 20%;
  height: 100%;
  background-color: #fafbfd;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ContainerFlex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #fafbfd;
  color: #9e9e9e;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 14px;

  .selected {
    color: #090f31;
    font-weight: bold;
  }
`;

export { Container, ContainerFlex };
