import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material"
import useSerachCocktail from "./hooks/useSerachCocktail.hook";
import LoadingPage from "../../components/pages/Loading.page";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { pathName } from "../../constant/pathName";


const ConcktailsPage = () => {
  const navigator = useNavigate()
  const { value, setvalue, isLoading, data } = useSerachCocktail();

  if (isLoading) return <LoadingPage title="Cargando filtro..." />

  return <div style={{margin: 10, height: 'calc(100% - 20px)'}}>
    <TextField
      fullWidth
      value={value}
      size="small"
      label="Search cocktails"
      onChange={e => setvalue(e.target.value)}
    />

    <Button onClick={() => navigator(pathName.cocktailsCat)}>
      Categories
    </Button>
    <br /><br />
    <List style={{height: 'calc(100% - 130px)', overflow: 'auto'}}>
    {
      !!data?.length
          ? data.map(item => <ListItem>
            <ListItemButton onClick={() => navigator(pathName.cocktailId.replace(':id', item.idDrink))}>
              <ListItemAvatar>
                <Avatar  alt={item.idDrink} src={item.strDrinkThumb} />
              </ListItemAvatar>
              <ListItemText primary={item.strDrink} secondary={item.strGlass} />
              <ListItemIcon tabIndex={-1}>
                <FaAngleRight />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>)
        : <>Sin datos a mostrar</>
    }
    </List>
  </div>
}

export default ConcktailsPage
