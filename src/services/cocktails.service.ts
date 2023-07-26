import axios from 'axios';
import { drinkMapper } from '../utility/drinkMapper';
import { IDrink } from '../modules/cocktailsPage/interfaces/IDrink';

  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const searchCocktails = async(value: string): Promise<IDrink[]> => {
  try {
    const { data: {drinks}, status } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
    return status ? drinks.map(drinkMapper) : [];
  } catch (error) {
    return []
  }
}

export const getCoktailById = async(id: string): Promise<IDrink | null> => {
  try {
    const { data: {drinks}, status } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    return status ? drinks.map(drinkMapper)[0] : null;
  } catch (error) {
    return null
  }
}
