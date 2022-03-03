import React from "react";

export interface IInputContainer {
  type: string;
  handleOnChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}
