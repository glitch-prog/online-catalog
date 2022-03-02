import React from "react";

export interface IInputContainer {
  type: string;
  handleOnChange: (event:React.ChangeEvent) => void;
  className: string;
}
