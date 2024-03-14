import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  // Takes props from the parent component
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello world</Title>
    </Wrapper>
  );
}

export default App;
