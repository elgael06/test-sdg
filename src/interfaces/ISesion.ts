import { FormStore } from "./IFormStore";

export type SesionPropsType = 'name' | 'lastName' | 'phone' | 'email';

export interface ISesion {
  name: string;
  lastName: string;
  phone: string;
  email: string;
}


export interface IRegisterStore extends FormStore<SesionPropsType, ISesion> {
  values: ISesion; 
}

export interface ISesionStore extends IRegisterStore {
  isActive: boolean;
  onSingIn: (values: ISesion) => void;
  onSingOut: () => void;
}
