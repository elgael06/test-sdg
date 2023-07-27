import axios from 'axios';
import { COKTAILS } from '../constant/urlApi';
import { drinkMapper } from '../utility/drinkMapper';
import { IDrink } from '../modules/cocktailsPage/interfaces/IDrink';
import { ICategory } from '../modules/cocktailsPage/interfaces/ICategory';

  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const searchCocktails = async(value: string): Promise<IDrink[]> => {
  const url = `${COKTAILS}api/json/v1/1/search.php?s=${value}`
  try {
    const { data: {drinks}, status } = await axios.get(url);
    return status ? drinks.map(drinkMapper) : [];
  } catch (error) {
    return []
  }
}

export const getCoktailById = async(id: string): Promise<IDrink | null> => {
  const url = `${COKTAILS}api/json/v1/1/lookup.php?i=${id}`
  try {
    const { data: {drinks}, status } = await axios.get(url);
    return status ? drinks.map(drinkMapper)[0] : null;
  } catch (error) {
    return null
  }
}

export const getCategories = async (): Promise<ICategory[]> => {
  const url = `${COKTAILS}api/json/v1/1/list.php?c=list`
  try {
    const { data: {drinks}, status } = await axios.get(url);
    return status ? drinks.map( (item: ICategory) => ({...item} as ICategory)) : [];
  } catch (error) {
    return []
  }
}

export const getCocktailbycategory = async (catName: string): Promise<IDrink[]> => {
  const catId = catName.replaceAll(' ', '_')
  const url = `${COKTAILS}/api/json/v1/1/filter.php?c=${catId}`
  try {
    const { data: {drinks}, status } = await axios.get(url);
    return status ? drinks.map(drinkMapper) : [];
  } catch (error) {
    return []
  }
}
