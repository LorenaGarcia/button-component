import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: auto auto auto auto;

  grid-template-areas:
    "head head head head"
    "button1 button2 button2 button2"
    "button3 button4 button4 button4"
    "button5 button6 button6 button6"
    "button7 button7 button7 button7"
    "button8 button9 button9 button9"
    "button10 button11 button11 button11"
    "button12 button13 button14 button14"
    "button15 button16 button17 button18"
    "button19 button20 button21 button22"
    "link link link link"
    "footer footer footer footer";

  @media (max-width: 480px) {
    grid-template-areas:
      "head"
      "button1"
      "button2"
      "button3"
      "button4"
      "button5"
      "button6"
      "button7"
      "button8"
      "button9"
      "button10"
      "button11"
      "button12"
      "button13"
      "button14"
      "button15"
      "button16"
      "button17"
      "button18"
      "button19"
      "button20"
      "button21"
      "button22"
      "link"
      "footer";

    grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: auto;
  }
`;

const Head = styled.div`
  grid-area: head;
`;

const Title = styled.p`
  font-weight: 500;
  font-family: "Ubuntu Mono", monospace;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #4f4f4f;
  margin: 0;
`;

const Code = styled.p`
  color: #333333;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: normal;
  font-size: 12px;
  margin: 0;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const Button1 = styled.div`
  grid-area: button1;
`;

const Button2 = styled.div`
  grid-area: button2;
`;

const Button3 = styled.div`
  grid-area: button3;
`;

const Button4 = styled.div`
  grid-area: button4;
`;

const Button5 = styled.div`
  grid-area: button5;
`;

const Button6 = styled.div`
  grid-area: button6;
`;

const Button7 = styled.div`
  grid-area: button7;
`;

const Button8 = styled.div`
  grid-area: button8;
`;

const Button9 = styled.div`
  grid-area: button9;
`;

const Button10 = styled.div`
  grid-area: button10;
`;

const Button11 = styled.div`
  grid-area: button11;
`;

const Button12 = styled.div`
  grid-area: button12;
`;

const Button13 = styled.div`
  grid-area: button13;
`;

const Button14 = styled.div`
  grid-area: button14;
`;

const Button15 = styled.div`
  grid-area: button15;
`;

const Button16 = styled.div`
  grid-area: button16;
`;

const Button17 = styled.div`
  grid-area: button17;
`;

const Button18 = styled.div`
  grid-area: button18;
`;

const Button19 = styled.div`
  grid-area: button19;
`;

const Button20 = styled.div`
  grid-area: button20;
`;

const Button21 = styled.div`
  grid-area: button21;
`;

const Button22 = styled.div`
  grid-area: button22;
`;

const Footer = styled.div`
  grid-area: footer;
  color: #a9a9a9;
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const Link = styled.a`
  grid-area: link;
  color: #a9a9a9;
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-top: 4rem;
`;

export {
  Container,
  Head,
  Title,
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
  Button8,
  Button9,
  Button10,
  Button11,
  Button12,
  Button13,
  Button14,
  Button15,
  Button16,
  Button17,
  Button18,
  Button19,
  Button20,
  Button21,
  Button22,
  Footer,
  Link,
  GridContainer,
  Code,
};
