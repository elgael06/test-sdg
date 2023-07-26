import { create } from "zustand";
import { IAlert, IAlertStore } from "../interfaces/IAlert";

const initialState: IAlert = {
  title: 'Alerta ',
  isVisible: false,
  type: 'info',
}

export const alertStore = create<IAlertStore>((set) => ({
  values: initialState,
  onChange(value) {
    set({values: value })
  },
  onClose() {
    set({values: initialState })
  },
}))

