import { IDrink } from "../modules/cocktailsPage/interfaces/IDrink"

export const drinkMapper = (item: any): IDrink => {
  const ingredient: string[] = Object.keys(item).filter(key => key.includes('Ingredient'))
    .map(drink => item[drink]).filter(val => val !== null);
  console.log(ingredient);
  return ({
    dateModified: item?.dateModified,
    idDrink: item?.idDrink,
    strAlcoholic: item?.strAlcoholic,
    strCategory: item?.strCategory,
    strCreativeCommonsConfirmed: item?.strCreativeCommonsConfirmed,
    strDrink: item?.strDrink,
    strDrinkThumb: item?.strDrinkThumb,
    strGlass: item?.strGlass,
    strInstructions: item?.strInstructions,
    ingredient,
  })
}