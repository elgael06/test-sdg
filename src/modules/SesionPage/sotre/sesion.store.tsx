import { create } from "zustand";
import { IRegisterStore, ISesion } from "../../../interfaces/ISesion";

const initialDataSesion: ISesion = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
} 

export const registerStore = create<IRegisterStore>((set, get) => ({
  values: initialDataSesion,
  changeValue(key, value) {
    const { values } = get();
    set({
      values: {
        ...values,
        [key]: value,
    }});
  },
  clearValues() {
    set({
      values: {...initialDataSesion},
    });
  },
  setAllData(data) {
    set({
      values: {...data},
    });
  },
}));

