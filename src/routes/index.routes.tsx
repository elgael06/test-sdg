
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { pathName } from "../constant/pathName";

const HomePage = lazy(() => import('../modules/HomePage/Home.page'))
const LoginPage = lazy(() => import('../modules/SesionPage/Login.page'))
const LayoutMol = lazy(() => import('../components/molecules/Layout.mol'))
const RegisterPage = lazy(() => import('../modules/SesionPage/Register.page'))

const RoutesApp = () => {

  return (<Suspense>
    <Routes>
      <Route Component={LayoutMol}>
        <Route element={<HomePage />} path={pathName.home} />
        <Route element={<LoginPage />} path={pathName.login} />
        <Route element={<RegisterPage />} path={pathName.register} />
      </Route>
    </Routes>
  </Suspense>
  )
}

export default RoutesApp
