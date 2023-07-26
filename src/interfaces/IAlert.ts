import { AlertColor } from "@mui/material";

export interface IAlert {
  title: string;
  isVisible: boolean;
  type: AlertColor;
}

export interface IAlertStore {
  values: IAlert,
  onChange:(value: IAlert) => void;
  onClose: () => void;
}