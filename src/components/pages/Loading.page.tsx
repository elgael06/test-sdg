import styled from "styled-components";
import { FC } from "react";

const Content = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background: #00000080;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  
  @keyframes spinning {
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}

  p {
    color: #FFF;
    text-align: center;
    /* CTA */
    font-size: 16px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.48px;
  }

  .loading-icon {
    width: 11rem;
    height: 11rem;
    animation-name: spinning;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    /* linear | ease | ease-in | ease-out | ease-in-out */
    animation-timing-function: linear;
  }
`;


interface LoadingPageProps {
  title?: string;
}

const LoadingPage: FC<LoadingPageProps> = (props) => {
  const { title = 'cargando...' } = props;
  return (<Content>
    {/* <img src='https://firebasestorage.googleapis.com/v0/b/superapp-tenderos-ec9f4.appspot.com/o/images%2Fassets%2Floading.svg?alt=media&token=bd8143eb-8bc2-4251-9fc5-a7df64a7c92f' alt='cargando' /> */}
    <svg className="loading-icon" width="102" height="103" viewBox="0 0 102 103" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect y="0.5" width="102" height="102" rx="25.5" fill="url(#pattern0)"/>
      <rect x="41.9844" y="57.5078" width="4.25" height="4.25" rx="2.125" transform="rotate(-45 41.9844 57.5078)" fill="white"/>
      <rect x="48.8696" y="62.1328" width="4.25" height="4.25" rx="2.125" transform="rotate(-90 48.8696 62.1328)" fill="white"/>
      <rect x="57.021" y="60.5156" width="4.25" height="4.25" rx="2.125" transform="rotate(-135 57.021 60.5156)" fill="white"/>
      <rect x="61.6294" y="53.6328" width="4.25" height="4.25" rx="2.125" transform="rotate(-180 61.6294 53.6328)" fill="white"/>
      <rect x="60.0146" y="45.4883" width="4.25" height="4.25" rx="2.125" transform="rotate(135 60.0146 45.4883)" fill="white"/>
      <rect x="53.1187" y="40.8828" width="4.25" height="4.25" rx="2.125" transform="rotate(90 53.1187 40.8828)" fill="white"/>
      <rect x="44.9985" y="42.4844" width="4.25" height="4.25" rx="2.125" transform="rotate(45 44.9985 42.4844)" fill="white"/>
      <rect x="40.3789" y="49.3828" width="4.25" height="4.25" rx="2.125" fill="white"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_3002_69684"/>
      </pattern>
      <image id="image0_3002_69684" width="1" height="1" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC"/>
      </defs>
  </svg>
    <p>{title}</p>
  </Content>);
}

export default LoadingPage;
