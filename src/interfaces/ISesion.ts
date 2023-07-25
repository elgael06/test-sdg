import { FormStore } from "./IFormStore";

export type SesionPropsType = 'name' | 'lastName' | 'phone' | 'email';

export interface ISesion {
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface ISesionStore extends FormStore<SesionPropsType, ISesion> {
  values: ISesion;
  isActive: boolean;
  onSingIn: () => void;
  onSingOut: () => void; 
}
