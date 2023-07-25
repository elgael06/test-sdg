import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { sesionStore } from '../../store/sesion.store';
import { useNavigate } from 'react-router';
import { pathName } from '../../constant/pathName';

const AppBarAtom: React.FC = () => {
  const navigate = useNavigate();
  const { isActive, values: { name } } = sesionStore();

  const handleLogin = () => navigate(pathName.login);
  const handleHome = () => navigate(pathName.home);

  return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography onClick={handleHome} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TEST
        </Typography>
        {
          isActive ?
            <Button color="inherit">Hola { name }</Button> 
          :  <Button onClick={handleLogin} color="secondary" variant='contained'>Login</Button>
            
        }
      </Toolbar>
    </AppBar>
  </Box>)
}

export default AppBarAtom
