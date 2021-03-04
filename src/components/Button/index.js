import React from "react";
import { Button, ButtonIcon, Name } from "./Button.styles";

const InputButton = ({
  name,
  background,
  text,
  variant,
  hover,
  shadow,
  icon,
  iconRight,
  size,
  color,
  ishoverColor,
  ...otherProps
}) => {
  let padding =
    size && size === "sm"
      ? "1rem"
      : size === "md"
      ? "1.3rem"
      : size === "lg"
      ? "1.6rem"
      : "1rem";

  let colorButton =
    color && color === "primary"
      ? "#2962FF"
      : color === "secondary"
      ? "#455A64"
      : color === "danger"
      ? "#D32F2F"
      : "#E0E0E0";

  let colorHover =
    color && color === "primary"
      ? "#0039CB"
      : color === "secondary"
      ? "#1C313A"
      : color === "danger"
      ? "#9A0007"
      : "#AEAEAE";

  let textColor =
    color && color === "primary"
      ? "#FFFFFF"
      : color === "secondary"
      ? "#FFFFFF"
      : color === "danger"
      ? "#FFFFFF"
      : "#3F3F3F";
  return (
    <div>
      {icon ? (
        <ButtonIcon
          variant={variant}
          type={otherProps.type}
          text={text}
          background={background}
          hover={hover}
          shadow={shadow}
          iconRight={iconRight}
          size={size}
          {...otherProps}
        >
          <span class="material-icons">{icon}</span>

          <Name iconRight={iconRight}>{name}</Name>
        </ButtonIcon>
      ) : (
        <Button
          variant={variant}
          type={otherProps.type}
          text={color ? textColor : text}
          background={
            color && !ishoverColor
              ? colorButton
              : color && ishoverColor
              ? colorHover
              : background
          }
          hover={color ? colorHover : hover}
          shadow={shadow}
          size={padding}
          {...otherProps}
        >
          {name}
        </Button>
      )}
    </div>
  );
};

export default InputButton;
