import CategoryCoktails from "./categoryContails"
import useGetCategory from "./hooks/useGetCategory.hook"
import LoadingPage from "../../components/pages/Loading.page"
import { Grid } from "@mui/material"
import styled from "styled-components"

const Content = styled(Grid)`
  display: flex;
  box-sizing: border-box;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: calc(100% - 100px);
  overflow: auto;
`

const CocktailscategoriesPage = () => {
  const { isLoading, data } = useGetCategory()
  if (isLoading) return <LoadingPage title="get catogiry..." />
  return <>
    <h1>cocktails categories</h1>
    <Content>
    {
      data?.map(item => <CategoryCoktails category={item.strCategory} />)
    }
    </Content>
  </>
}

export default CocktailscategoriesPage
