import { createContext } from "react";
import IFormContext from "../interfaces/IFormContext";
import { ISesionProps } from "../modules/SesionPage/interfaces/ISesionProps";


export const SesionContext = createContext<IFormContext<ISesionProps>>({
  inputReg: (key) => ({}),
  errors: {},
  isLoading: false,
  isReadOnly: false,
});