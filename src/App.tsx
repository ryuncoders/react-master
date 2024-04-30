import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-style: normal;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ToDoList />
    </>
  );
  //React.Fragment
}
export default App;
