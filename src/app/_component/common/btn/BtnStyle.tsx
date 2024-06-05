"use client";

import { MouseEvent } from "react";
import style from "styled-components";

const Button = style.button`
background: black; color: white`;

interface Props {
  text: string;
  onEvent?: () => void;
}

const BtnStyle = ({ text, onEvent }: Props) => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onEvent) {
      onEvent();
    }
  };
  return <Button onClick={(e) => onClick(e)}>{text}</Button>;
};

export default BtnStyle;
