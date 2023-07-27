import { Badge, Card, CardActions, CardMedia, Divider, Paper, Stack, Typography, styled } from "@mui/material"
import useGetByCategory from "./hooks/useGetByCategory.hook"
import { FaCocktail } from "react-icons/fa"
import { Link } from "react-router-dom";
import { pathName } from "../../constant/pathName";

interface CategoryCoktailsProps { category: string }

const PaperCont = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: 300,
  padding: 10,
  width: '100%',
  maxWidth: 640,
  lineHeight: '60px',
  margin: 10,
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'start',
  padding: 20,
  display: 'flex',
  justifyContent: 'space-between',
}))
const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  margin: 5,
}));

const CategoryCoktails = ({ category }: CategoryCoktailsProps) => {
  const { data, isLoading } = useGetByCategory(category)
  
  return <PaperCont elevation={20}>
      <Title variant="h5" sx={{ flexGrow: 1 }}>
        {category} {' : '}
        <Badge badgeContent={data?.length} color="success"><FaCocktail size={25} color='green' /></Badge>
    </Title>
    <br />
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent='center'
      spacing={0}
    >
      {isLoading ? 'Cargando...' :
        data?.filter((_, id) => id < 4)?.map(item => (<Item title={item.strDrink} key={item.idDrink} >
            <CardMedia
              sx={{ height: 100, minWidth:100 }}
              image={item.strDrinkThumb}
              title={item.strDrink}
            />
          {/* <CardActions> */}
            <Stack
              direction="row"
              flexWrap="nowrap"
              style={{paddingRight: 10}}
              justifyContent='flex-end'>
                <Link to={pathName.cocktailId.replace(':id', item.idDrink)}>Ver</Link>
            </Stack>
            {/* </CardActions> */}
        </Item>
        ))
      }
    </Stack>
    {!!data?.length && data?.length > 4 && 
    <Stack
      direction="row"
      flexWrap="nowrap"
      justifyContent='flex-end'>
      <Link to={pathName.cocktailsCatId.replace(':id', category.replaceAll(' ', '_'))}>
        <Title variant="body2">Ver mas...</Title>
      </Link>
    </Stack>
    }
  </PaperCont>
}

export default CategoryCoktails
