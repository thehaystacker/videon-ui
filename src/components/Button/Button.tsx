import React, { FC } from "react";

interface IButton {
  label: string;
}

const Button: FC<IButton> = (props) => {
  const { label } = props;

  return <button>{label}</button>;
};

export default Button;
