"use client";
import React, { FC, ReactNode } from "react";
import { Button as RizzuiButton } from "rizzui";

type ButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  props?: any;
};

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  props,
}) => {
  return (
    <RizzuiButton
      type={type}
      className={`${className} justify-center self-stretch p-2.5 text-bs-yellow bg-bs-violet !rounded-lg`}
      {...props}
    >
      {children}
    </RizzuiButton>
  );
};

export default Button;
