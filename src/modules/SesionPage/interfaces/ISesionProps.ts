import { ISesion, SesionPropsType } from "../../../interfaces/ISesion";

// export type SesionPropsType = 'name' | 'lastName' | 'phone' | 'email' | 'password' | 'passwordConfirm';

export interface InputKey {
  label: string;
  key: SesionPropsType;
}

export interface ISesionProps extends ISesion {
  password: string;
  passwordConfirm: string;
}
