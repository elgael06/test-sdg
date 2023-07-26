import { ISesionProps } from "../modules/SesionPage/interfaces/ISesionProps"

export const saveRegister = (value: ISesionProps) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 2000)
  });
} 

