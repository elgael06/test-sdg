import { useParams } from "react-router";
import useCoktailById from "./hooks/useCoktailById.hook";
import LoadingPage from "../../components/pages/Loading.page";
import { Card, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from "@mui/material";


const CocktailsViewPage = () => {
  const { id = '' } = useParams();
  const {
    data,
    isLoading,
  } = useCoktailById(id);

  if (isLoading) return <LoadingPage title="Cargando datos..." />
  if(data === null) return <>Error Al traer la informacion!!!</>
  return <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140, minWidth:320 }}
      image={data?.strDrinkThumb}
      title={data?.strDrink}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="article">
        cocktail: { data?.strDrink }.
      </Typography>
      
      <Typography gutterBottom variant="h6" component="article">
        Categorie: 
      </Typography>
      {data?.strCategory}.
      
      <Typography gutterBottom variant="h6" component="div">
        Glass: 
      </Typography>
      {data?.strGlass}.
      
      <Typography gutterBottom variant="h6" component="div">
        Instructions:
      </Typography>
        <p>{data?.strInstructions}.</p>
      <Typography gutterBottom variant="h6" component="div">
        Ingredient:
      </Typography>
      <List>
        {data?.ingredient.map(item => 
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
        )}
      </List>
    </CardContent>
  </Card>
}

export default CocktailsViewPage
