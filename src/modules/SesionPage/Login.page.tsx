import { Button, Card, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { Content } from "./loginStyled";
import { useNavigate } from "react-router";
import { pathName } from "../../constant/pathName";

const LoginPage = () => {
  const navigate = useNavigate();
  return (<Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140, minWidth:320 }}
      image="https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Login
    </Typography>
    <form>
      <Content >
        <TextField label='email' size="small" />
        <TextField label='password' size="small" />
      </Content>
    </form>
    </CardContent>
    <Content>
      <Button size="small" variant='contained' >iniciar</Button>
      <Button size="small" type='button' onClick={() => navigate(pathName.register)} >registrar</Button>
    </Content>
  </Card>);
}

export default LoginPage
