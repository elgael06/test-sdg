import { Outlet } from "react-router";
import { Suspense, lazy } from "react";
import styled from "styled-components";
import { FaWindowClose } from 'react-icons/fa'
import { Alert, Button, IconButton } from "@mui/material";
import { alertStore } from "../../store/alert.store";


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
  const { title, type, isVisible } = alertStore(store => store.values);
  const onClose = alertStore(store => store.onClose);

  return <Suspense>
      <AppBarAtom />
    {isVisible && <Alert action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={onClose}
      >
        <Button color="inherit" size="small">
          <FaWindowClose />
        </Button>
      </IconButton>
  } severity={type}>{ title }</Alert>}
      <Content>
      <Outlet /> 
      </Content>
  </Suspense>
}

export default LayoutMol;
