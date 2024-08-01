"use client";
import React, { FC, ReactNode } from "react";
import { Input as RizzuiInput } from "rizzui";

type InputProps = {
  type?: string;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  label?: string;
  props?: any;
};

const Input: FC<InputProps> = ({
  type = "text",
  className = "",
  placeholder = "",
  label = "",
  props,
}) => {
  return (
    <div
      className={`flex flex-col justify-between items-center rounded-lg bg-neutral-100 w-full lg:max-w-[499px] h-[58px] relative ${className}`}
    >
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-11 absolute left-3.5 top-[7px] space-y-[2px] w-full">
        {label && (
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ababab]">
            {label}
          </p>
        )}
        <input
          type={type}
          className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#808080] p-0 border-0 bg-transparent w-full !ring-0 focus:ring-none focus:border-none"
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
