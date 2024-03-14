import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 35px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Father as="header">
      <Box>
        <span>🤸‍♀️</span>
      </Box>
    </Father>
  );
}

export default App;
