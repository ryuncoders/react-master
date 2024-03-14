import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.bgColor};
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Father as="header">
      <Box bgColor="teal" />
      <Circle bgColor="whitesmoke" />
    </Father>
  );
}

export default App;
