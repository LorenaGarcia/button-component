import React from "react";
import Button from "../Button";
import {
  Container,
  GridContainer,
  Head,
  Title,
  Code,
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
  Link,
  Footer,
} from "./MainContent.styles";

const Main = () => {
  return (
    <Container>
      <GridContainer>
        <Head>
          <Title>Buttons</Title>
        </Head>
        <Button1>
          <Code>{"<Button />"}</Code>
          <div>
            <Button name="Default" />
          </div>
        </Button1>
        <Button2>
          <Code>{"&:hover, &:focus"}</Code>
          <div>
            <Button background={"#aeaeae"} name="Default" />
          </div>
        </Button2>
        <Button3>
          <Code>{"<Button variant=”outline” />"}</Code>
          <div>
            <Button
              variant={"1px solid #3D5AFE"}
              text={"#3D5AFE"}
              background={"none"}
              hover={"rgba(41, 98, 255, 0.1)"}
              name="Default"
            />
          </div>
        </Button3>
        <Button4>
          <Code>{"&:hover, &:focus"}</Code>
          <div>
            <Button
              variant={"1px solid #3D5AFE"}
              text={"#3D5AFE"}
              background={"rgba(41, 98, 255, 0.1)"}
              hover={"rgba(41, 98, 255, 0.1)"}
              name="Default"
            />
          </div>
        </Button4>

        <Button5>
          <Code>{"<Button variant=”outline” />"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#3D5AFE"}
              background={"none"}
              hover={"rgba(41, 98, 255, 0.1)"}
              name="Default"
              shadow={"none"}
            />
          </div>
        </Button5>
        <Button6>
          <Code>{"&:hover, &:focus"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#3D5AFE"}
              background={"rgba(41, 98, 255, 0.1)"}
              hover={"rgba(41, 98, 255, 0.1)"}
              name="Default"
              shadow={"none"}
            />
          </div>
        </Button6>

        <Button7>
          <Code>{"<Button disableShadow />"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#FFFFFF"}
              background={"#3D5AFE"}
              hover={"#3D5AFE"}
              name="Default"
              shadow={"none"}
            />
          </div>
        </Button7>

        <Button8>
          <Code>{"<Button disabled />"}</Code>
          <div>
            <Button
              text={"#9E9E9E"}
              hover={"none"}
              name="Disabled"
              shadow={"none"}
              disabled
            />
          </div>
        </Button8>
        <Button9>
          <Code>{"<Button variant=”text” disabled />"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#9E9E9E"}
              background={"none"}
              hover={"#3D5AFE"}
              name="Disabled"
              shadow={"none"}
              disabled
            />
          </div>
        </Button9>

        <Button10>
          <Code>{"<Button startIcon=”local_grocery_store” />"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#FFFFFF"}
              background={"#3D5AFE"}
              hover={"#3D5AFE"}
              name="Default"
              icon={"add_shopping_cart"}
            />
          </div>
        </Button10>
        <Button11>
          <Code>{"<Button endIcon=”local_grocery_store” />"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#FFFFFF"}
              background={"#3D5AFE"}
              hover={"#3D5AFE"}
              name="Default"
              icon={"add_shopping_cart"}
              iconRight={true}
            />
          </div>
        </Button11>

        <Button12>
          <Code>{"<Button size=”sm” />"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#FFFFFF"}
              background={"#3D5AFE"}
              hover={"#3D5AFE"}
              name="Default"
              size={"sm"}
            />
          </div>
        </Button12>
        <Button13>
          <Code>{"<Button size=”md” />"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#FFFFFF"}
              background={"#3D5AFE"}
              hover={"#3D5AFE"}
              name="Default"
              size={"md"}
            />
          </div>
        </Button13>
        <Button14>
          <Code>{"<Button size=”lg” />"}</Code>
          <div>
            <Button
              variant={"none"}
              text={"#FFFFFF"}
              background={"#3D5AFE"}
              hover={"#3D5AFE"}
              name="Default"
              size={"lg"}
            />
          </div>
        </Button14>

        <Button15>
          <Code>{"<Button color=”default” />"}</Code>
          <div>
            <Button name="Default" />
          </div>
        </Button15>
        <Button16>
          <Code>{"<Button color=”primary” />"}</Code>
          <div>
            <Button name="Default" color={"primary"} />
          </div>
        </Button16>
        <Button17>
          <Code>{"<Button color=”secondary” />"}</Code>
          <div>
            <Button name="Default" color={"secondary"} />
          </div>
        </Button17>
        <Button18>
          <Code>{"<Button color=”danger” />"}</Code>
          <div>
            <Button name="Default" color={"danger"} />
          </div>
        </Button18>

        <Button19>
          <Code>{"&:hover, &:focus"}</Code>
          <div>
            <Button name="Default" ishoverColor={true} color={"default"} />
          </div>
        </Button19>
        <Button20>
          <Code>{"&:hover, &:focus"}</Code>
          <div>
            <Button name="Default" ishoverColor={true} color={"primary"} />
          </div>
        </Button20>
        <Button21>
          <Code>{"&:hover, &:focus"}</Code>
          <div>
            <Button name="Default" ishoverColor={true} color={"secondary"} />
          </div>
        </Button21>
        <Button22>
          <Code>{"&:hover, &:focus"}</Code>
          <div>
            <Button name="Default" ishoverColor={true} color={"danger"} />
          </div>
        </Button22>

        <Link href="https://material.io/resources/icons/?style=round">
          Icons: https://material.io/resources/icons/?style=round
        </Link>

        <Footer>
          created by <strong>Lorraine</strong> - devChallenges.io
        </Footer>
      </GridContainer>
    </Container>
  );
};

export default Main;
