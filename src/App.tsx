import React from "react";
import Router from "./Router";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mynerve&display=swap');
  a {
    text-decoration: none;
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-family: "Mynerve", 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router />
    </>
  );
  //React.Fragment
}
export default App;
