import styled from "styled-components";
import { useLocation } from "react-router";

const ErrorText = styled.h3`
  color: red;
`;

interface ErrorPageProps {
  title?: string;
  text?: string;
  isError?: boolean;
}

const ErrorPage = ({ title = 'Error Page', text = 'Page not found!!!', isError }: ErrorPageProps) => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>{title}</h1>
      <h3>{pathname}</h3>
      <hr />
      { isError && <ErrorText>{ text }</ErrorText> }
      {!isError && <span>{ text }</span>}
    </div>
  )
}

export default ErrorPage;
