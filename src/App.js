import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
const Emoji = styled.span`
  font-size: 35px;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 50px;
  }
`;

function App() {
  return (
    <Father as="header">
      <Box>
        <Emoji>🤸‍♀️</Emoji>
      </Box>
      <Emoji>💙</Emoji>
    </Father>
  );
}

export default App;
