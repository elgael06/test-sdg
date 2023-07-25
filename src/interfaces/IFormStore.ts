
export interface FormStore<K,P> {
  changeValue: (key: K, value: string) => void;
  clearValues: () => void;
  setAllData: (data: P) => void;
}
