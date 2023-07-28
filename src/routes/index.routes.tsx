
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { pathName } from "../constant/pathName";
import ErrorPage from "../components/pages/Error.page";
import LoadingPage from "../components/pages/Loading.page";

const HomePage = lazy(() => import('../modules/HomePage/Home.page'))
const LoginPage = lazy(() => import('../modules/SesionPage/Login.page'))
const DataPage = lazy(() => import('../modules/dataTablePage/Data.page'))
const LayoutMol = lazy(() => import('../components/molecules/Layout.mol'))
const RegisterPage = lazy(() => import('../modules/SesionPage/Register.page'))
const ConcktailsPage = lazy(() => import('../modules/cocktailsPage/Concktails.page'))
const CocktailsView = lazy(() => import('../modules/cocktailsPage/CocktailsView.page'))
const CocktailscategoriesPage = lazy(() => import('../modules/cocktailsPage/cocktailscategories.page'))

const RoutesApp = () => {

  return (<Suspense fallback={<LoadingPage title="Cargando ruta..." />}>
    <Routes>
      <Route Component={LayoutMol}>
        <Route element={<HomePage />} path={pathName.home} />
        <Route element={<LoginPage />} path={pathName.login} />
        <Route element={<RegisterPage />} path={pathName.register} />

        <Route element={<ConcktailsPage />} path={pathName.cocktails} />
        <Route element={<CocktailsView />} path={pathName.cocktailId} />
        <Route element={<CocktailscategoriesPage />} path={pathName.cocktailsCat} />
        <Route element={<DataPage />} path={pathName.data} />
        
        <Route element={<ErrorPage />} path="/*" />
      </Route>
    </Routes>
  </Suspense>
  )
}

export default RoutesApp
