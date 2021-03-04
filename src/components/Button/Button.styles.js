import styled from "styled-components";

const Button = styled.button`
  width: 81px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: ${(props) => (props.size ? props.size : "0")};
  font-family: "Ubuntu Mono", monospace;
  color: ${(props) => (props.text ? props.text : "#3F3F3F")};
  border: ${(props) => (props.variant ? props.variant : "none")};
  background: ${(props) => (props.background ? props.background : "#e0e0e0")};
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : "0px 2px 3px rgba(51, 51, 51, 0.2)"};
  border-radius: 6px;

  :hover:not([disabled]) {
    background: ${(props) => (props.hover ? props.hover : "#aeaeae")};
  }
`;

const ButtonIcon = styled.button`
  width: auto;
  height: 36px;
  justify-content: center;
  display: flex;
  flex-direction: ${(props) => (props.iconRight ? "row-reverse" : "row")};
  align-items: center;
  padding: 1.2rem;
  font-size: 14px;
  font-weight: 500;
  font-family: "Ubuntu Mono", monospace;
  color: ${(props) => (props.text ? props.text : "#3F3F3F")};
  border: ${(props) => (props.variant ? props.variant : "none")};
  background: ${(props) => (props.background ? props.background : "#e0e0e0")};
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : "0px 2px 3px rgba(51, 51, 51, 0.2)"};
  border-radius: 6px;

  :hover:not([disabled]) {
    background: ${(props) => (props.hover ? props.hover : "#aeaeae")};
  }
`;

const Name = styled.p`
  margin: 0;
  margin-left: ${(props) => (props.iconRight ? "0" : "0.5rem")};
  margin-right: ${(props) => (props.iconRight ? "0.5rem" : "0")};
`;

export { Button, ButtonIcon, Name };
