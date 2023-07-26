import { FaCocktail, FaDatabase } from 'react-icons/fa'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from 'react-router'
import { pathName } from '../../constant/pathName'

const HomePage = () => {
  const navigator = useNavigate()
  return <>
    <h1>Inicio</h1>
    <br />
    <List>
      <ListItem>
        <ListItemButton onClick={() => navigator(pathName.cocktails)}>
          <ListItemIcon>
            <FaCocktail />
          </ListItemIcon>
          <ListItemText primary="The Cocktail DB" />
        </ListItemButton>
    </ListItem>

    
      <ListItem>
        <ListItemButton  onClick={() => navigator(pathName.data)}>
          <ListItemIcon>
            <FaDatabase />
          </ListItemIcon>
          <ListItemText primary="Random Data Generator" />
        </ListItemButton>
    </ListItem>
    </List>
  </>
}

export default HomePage
