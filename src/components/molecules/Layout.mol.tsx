import { Outlet } from "react-router";
import { Suspense, lazy } from "react";
import styled from "styled-components";


const Content = styled.div`
  display: flex;
  width: calc(100% - 16px);
  height: calc(100% - 110px);
  position: absolute;
  margin-top: 30px;
  place-content: center flex-start;
  -webkit-box-pack: start;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  overflow: auto;
`;

const AppBarAtom = lazy(() => import("../atoms/AppBar.atom"));

const LayoutMol = () => {

  return <Suspense>
      <AppBarAtom />
      <Content>
      <Outlet /> 
      </Content>
  </Suspense>
}

export default LayoutMol;
