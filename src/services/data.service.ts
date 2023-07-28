import axios from 'axios';
import { IData } from '../modules/dataTablePage/interfaces/IData';

  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = 'https://random-data-api.com/api/v2/beers?size=100'

export const getData = async (): Promise<IData[]> => {
  try {
    const { data, status } = await axios.get(api);
    return status ? data.map((item: any) => ({...item as IData})) : [];
  } catch (error) {
    return []
  }
}