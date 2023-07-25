import { create } from "zustand";
import { ISesion, ISesionStore } from "../interfaces/ISesion";

const initialDataSesion: ISesion = {
  name: 'Gael',
  lastName: '',
  email: '',
  phone: '',
} 

export const sesionStore = create<ISesionStore>((set, get) => ({
  values: initialDataSesion,
  isActive: false,
  onSingIn() {
      set({ isActive: true })
  },
  onSingOut() {
    set({ isActive: false, values: {...initialDataSesion} })
  },
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

