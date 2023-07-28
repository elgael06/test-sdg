
export type IDataKey = 'id'
  | 'uid'
  | 'brand'
  | 'name'
  | 'style'
  | 'hop'
  | 'yeast'
  | 'malts'
  | 'ibu'
  | 'alcohol'
  | 'blg';

export interface IData {
  id: number;
  uid: string;
  brand: string;
  name: string;
  style: string;
  hop: string;
  yeast: string;
  malts: string;
  ibu: string;
  alcohol: string;
  blg: string;
}