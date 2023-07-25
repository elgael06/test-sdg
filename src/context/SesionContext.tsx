import { createContext } from "react";
import IFormContext from "../interfaces/IFormContext";
import { SesionPropsType } from "../modules/SesionPage/interfaces/ISesionProps";


export const SesionContext = createContext<IFormContext<SesionPropsType>>({
  inputReg: (key) => ({}),
  errors: {},
  isLoading: false,
  isReadOnly: false,
});